/**
 * License: see License.txt
 *
 * Code  for TB 68 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 *
 * Copyright: Klaus Buecher/opto 2021
 * Contributors: see Changes.txt
 */

/**
 * Attribution:
 * - icon by <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
 * - versioncompare from https://jsfiddle.net/vanowm/p7uvtbor/
 */


// Enforce database rebuild every 24h.
const rebuildInterval = 24*60*60*1000;

// Enable debug mode in production (it is enabled automatically in add-on debug install mode)
var debug = false;

// A simple log wrapper.
function log(...args) {
	if (debug) console.log(...args);
}

// Common check on compatibility string.
function isCompatible(value) {
	return (
		value == "*" ||
		parseInt(value.split(".").shift()) >= 91
	);
}

// Open the tab with the detailed compatibility information.
function openCompatibilityView() {
	messenger.tabs.create({url:"/popup/tt/ttt/options.html"});
}

// A versioncompare, taken from https://jsfiddle.net/vanowm/p7uvtbor/
function compareVer(a, b) {
	function prep(t) {
	  return ("" + t)
		//treat non-numerical characters as lower version
		//replacing them with a negative number based on charcode of first character
		.replace(/[^0-9\.]+/g, function (c) { return "." + ((c = c.replace(/[\W_]+/, "")) ? c.toLowerCase().charCodeAt(0) - 65536 : "") + "." })
		//remove trailing "." and "0" if followed by non-numerical characters (1.0.0b);
		.replace(/(?:\.0+)*(\.-[0-9]+)(\.[0-9]+)?\.*$/g, "$1$2")
		.split('.');
	}
	a = prep(a);
	b = prep(b);
	for (var i = 0; i < Math.max(a.length, b.length); i++) {
	  //convert to integer the most efficient way
	  a[i] = ~~a[i];
	  b[i] = ~~b[i];
	  if (a[i] > b[i])
		return 1;
	  else if (a[i] < b[i])
		return -1;
	}
	return 0;
}

async function getInstalledExtensions() {
	let results = await messenger.management.getAll();
	return results.filter(addon => 
			addon.installType == "normal" &&
		  	addon.type == "extension" &&
		  	!addon.id.endsWith("mozilla.org")
	);
}

// Convert YAML to JSON.
async function dataToJSON(data) {
	let entries = [];
  
	let lines = data.split(/\r\n|\n/);
	let i = 0;
  
	do {
	  let entry = {};
	  while (i < lines.length) {
		i++;
		let line = lines[i - 1].trim();
  
		// End of Block
		if (line.startsWith("---")) {
		  break;
		}
		// Skip comments.
		if (line.startsWith("#")) {
		  continue;
		}
		let parts = line.split(":");
		let key = parts.shift().trim();
		if (key) {
		  let value = parts.join(":").trim();
		  entry[key] = value;
		}
	  }
  
	  // Add found entry.
	  if (Object.keys(entry).length > 0) {
		entries.push(entry);
	  }
	} while (i < lines.length);
  
	return entries;
}

// Get alternative database.
async function queryAlternativeData() {
	let url = "https://raw.githubusercontent.com/thundernest/extension-finder/master/data.yaml"
	return fetch(url).then(r => r.text()).then(dataToJSON);
}

// Get add-on data from ATN.
async function queryAddonData(addon, alternativeData) {
	let info = {
		id: addon.id,
		name: addon.name,
		enabled: addon.enabled,
		version: addon.version,
		description: addon.description,
		alternative: "",
		maxVersion: "unknown", // highest version available on ATN
		maxCompatibility: "unknown", // compatibility of highest version on ATN
		maxUrl: "unknown", // url of highest version on ATN
	};

	// Check alternative info.
	let addonAltern = alternativeData.filter(o => o.u_id === addon.id);
	if (addonAltern.length) {
		info.alternative = "<a href = 'https://extension-finder.thunderbird.net/?id=" + addon.id + "' id = 'altaddon' >more info</a>";
	}

	// Get info from ATN.
	let rv = await fetch(`https://addons.thunderbird.net/api/v4/addons/addon/${addon.id}/versions/`);
	let response = await rv.json();
	if (
	  Array.isArray(response.results) &&
	  response.results.length > 0
	) {
		// Collect information from returned add-ons on ATN.
		let compVers = [];
		for (let result of response.results) {
			compVers.push({
				version: result.version,
				compatibility: result.compatibility.thunderbird.max,
				url: result.url,
			});
		};
		
		// Find max version and take its compat info.
		compVers.sort((a, b) => { compareVer(a.version, b.version) });
		info.maxVersion = compVers[0].version;
		info.maxCompatibility = compVers[0].compatibility;
		info.maxUrl = `<a href="${compVers[0].url}">${compVers[0].version}</a>`;
	}

	// Calculate compatibility.
	if (isCompatible(info.maxCompatibility)) {
		info.status = "isOk";
	} else if (info.maxCompatibility == "unknown") {
		info.status = "isUnknown";
	} else if (info.alternative) {
		info.status = "hasAlternative";
	} else {
		info.status = "isIncompatible";
	}

	return info;
}

// Check if the local copy of the addonData and alternativeData needs to be updated.
// This function is gaiting itself to ensure rate limits on the external servers.
async function checkAddons(action = "updateAddonData", info = null) {
	let { alternativeData } = await messenger.storage.local.get("alternativeData");
	let { addonData } = await messenger.storage.local.get("addonData");
	let { lastCheck } = await messenger.storage.local.get("lastCheck");

	// Enforce rebuild, if no database or outdated database.
	if (
		!alternativeData || 
		!addonData ||
		!lastCheck ||
		lastCheck < Date.now() - rebuildInterval
	) {
		action = "rebuild";
	}

	if (action == "rebuild") {
		log("Rebuilding databases ...");
		messenger.browserAction.setBadgeText({ text: "…" });
		messenger.browserAction.setBadgeBackgroundColor({ color: "blue" });
		messenger.browserAction.disable();

		alternativeData = await queryAlternativeData();
		await messenger.storage.local.set({ alternativeData });

		addonData = {};
		action = "updateAddonData";
		await messenger.storage.local.set({ lastCheck: Date.now() });
	}
	
	if (action == "updateAddonData") {
		log("Check if database is missing any installed add-ons ...");
		let installedAddons = await getInstalledExtensions();
		let missingAddons = installedAddons.filter(addon => !addonData.hasOwnProperty(addon.id));
		log({ missingAddons });
		// Add any missing add-ons to the database.
		for (let missingAddon of missingAddons) {
			addonData[missingAddon.id] = await queryAddonData(missingAddon, alternativeData);
		}

		log("Check if database needs update, because add-on(s) have been removed/disabled/enabled ...");
		let removedAddons = Object.values(addonData).filter(addon => !installedAddons.some(a => a.id == addon.id));
		log({ removedAddons });
		// Remove any no longer installed add-ons from the database.
		for (let removedAddon of removedAddons) {
			delete addonData[removedAddon.id];
		}
		// Update the enable/disable states of all remaining add-ons.
		for (let addon of installedAddons) {
			addonData[addon.id].enabled = addon.enabled;
		}
		await messenger.storage.local.set({ addonData });
	}
	
	if (info) {
		log("Adjusting database to local add-on changes ...");
		switch (action) {
			case "enabled":
			case "disabled":
				if (addonData.hasOwnProperty(info.id)) {
					addonData[info.id].enabled = info.enabled;
					break;
				}
			case "installed":
				addonData[info.id] = await queryAddonData(info, alternativeData);
				break;
			case "uninstalled":
				delete addonData[info.id];
				break;
			}
		await messenger.storage.local.set({ addonData });
	}

	log({alternativeData});
	log({addonData});

	// Update the browser action button.
	let isOk = 0;
	let isIncompatible = 0;
	let isUnknown = 0;
	let hasAlternative = 0;

	for (let id in addonData) {
		let info = addonData[id];
		if (info.enabled) {			
			log("enabled", {info});
			if (info.status == "isOk") {
				isOk++;
			} else if (info.status == "isUnknown") {
				isUnknown++;
			} else if (info.status == "isIncompatible") {
				isIncompatible++;
			} else if (info.status == "hasAlternative") {
				hasAlternative++;
			}
		}
	};
	let total = isOk + isIncompatible + hasAlternative + isUnknown;
	log("results", {total, isOk, isIncompatible, hasAlternative, isUnknown});

	if (isOk == total) {
		// Perfect.
		messenger.browserAction.setBadgeText({ text: `✓` });
		messenger.browserAction.setBadgeBackgroundColor({ color: "green" });
	} else if (isIncompatible == 0 && hasAlternative == 0 && isUnknown > 0) {
		// What we know is perfect, but some are unknown.
		messenger.browserAction.setBadgeText({ text: `-${isUnknown}` });
		messenger.browserAction.setBadgeBackgroundColor({ color: "green" });
	} else if (isIncompatible == 0 && hasAlternative > 0 && isUnknown == 0) {
		// Not perfect, but we have a potential replacement for all add-ons.
		messenger.browserAction.setBadgeText({ text: `✓` });
		messenger.browserAction.setBadgeBackgroundColor({ color: "orange" });
	} else if (isIncompatible == 0 && hasAlternative > 0  && isUnknown > 0) {
		// Not perfect, but we have a potential replacement for all add-ons, but
		// some are unknown.
		messenger.browserAction.setBadgeText({ text: `-${isUnknown}` });
		messenger.browserAction.setBadgeBackgroundColor({ color: "orange" });
	} else {
		// Bad, we have incompatible add-ons without replacements.
		messenger.browserAction.setBadgeText({ text: `-${isIncompatible + isUnknown}` });
		messenger.browserAction.setBadgeBackgroundColor({ color: "red" });
	}
	messenger.browserAction.enable();
	
	// Notify open view to update.
	try {
		await browser.runtime.sendMessage({command: "reloadView"});
	} catch(e) {		
		// Suppress warning about receiving end missing, if no view open.
	} 
}

// Main.
async function main() {
	// Hide browserAction label if supported.
	if (browser.browserAction.setLabel) {
		browser.browserAction.setLabel({ label: "" });
	}
	
  	// Enable debug mode on debug installs.
	let self = await messenger.management.getSelf();
	if (self.installType == "development") {
		debug = true;
	}

	window.setInterval(() => checkAddons("rebuild"), rebuildInterval);
	checkAddons();

	messenger.browserAction.onClicked.addListener((tab) => {
		// On TB68, tab is not available.
		if (!tab || messenger.browserAction.isEnabled({tabId: tab.id})) {
			openCompatibilityView();
		}
	});
		
	// The following need to update the button and the local information, but
	// no need to query remote servers.
	messenger.management.onInstalled.addListener((info) => checkAddons("installed", info));
	messenger.management.onUninstalled.addListener((info) => checkAddons("uninstalled", info));
	messenger.management.onEnabled.addListener((info) => checkAddons("enabled", info));
	messenger.management.onDisabled.addListener((info) => checkAddons("disabled", info));
}

window.addEventListener("load", main);
