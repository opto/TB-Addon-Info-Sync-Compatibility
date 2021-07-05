/*
* License:  see License.txt

* Code  for TB 68 or later: Creative Commons (CC BY-ND 4.0):
*      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
* Copyright: Klaus Buecher/opto 2021
* Contributors:  see Changes.txt
*/



/*



Attribution:
icon by <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

//versioncompare   from https://jsfiddle.net/vanowm/p7uvtbor/


*/



// landing windows.
messenger.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
	// if (temporary) return; // skip during development
	switch (reason) {
		case "install":
			{
				const url = messenger.runtime.getURL("popup/installed.html");
				//await browser.tabs.create({ url });
//				await messenger.windows.create({ url, type: "popup", height: 780, width: 1190, });
			}
			break;
		case "update":
			{
				const url = messenger.runtime.getURL("popup/update.html");
				//await browser.tabs.create({ url });
//				await messenger.windows.create({ url, type: "popup", height: 780, width: 1190, });
			}
			break;
		// see below
	}
});
/**/

window.setInterval(checkAddons, 24*60*1000);

function openOptions() {
//	console.log("open options");
	messenger.tabs.create({url:"/popup/tt/ttt/options.html"});
//	messenger.runtime.openOptionsPage();
}
messenger.browserAction.onClicked.addListener(openOptions);

async function checkAddons() {
	//console.log("running checkAddons");
	let iOK = 0, iInCompatible = 0, iDisabledIncompatible = 0, sIncompatibleNames = [], sDisabledIncompatibleNames = [];
	messenger.browserAction.setBadgeText({ text: "…" });
	messenger.browserAction.setBadgeBackgroundColor({ color: "blue" });

	let addons = await messenger.management.getAll();
	//console.log("raw addons", addons);
	let results = [];
	for (let addon of addons) {
		if (
			addon.installType != "normal" ||
			addon.type != "extension" ||
			addon.id.endsWith("mozilla.org")
		) {
			continue;
		}

		let rv = await fetch(`https://addons.thunderbird.net/api/v4/addons/addon/${addon.id}/versions/`);
		let response = await rv.json();
		//	console.log("raw response", response);
		var comps = [];
		if (
			Array.isArray(response.results) &&
			response.results.length > 0
		) {
			for (let result of response.results) {
				comps.push(result.compatibility.thunderbird.max);


			}
			//	console.log("comps",comps);
			let data = response.results[0];
			//		console.log(response.results[0].url);
			let info = {
				name: addon.name,
				version: data.version,
				compatibility: data.compatibility.thunderbird.max,
				enabled: addon.enabled,
			};
			results.push(info);
		}
	}

	// TODO: open tab and list state for each version
	//	console.log(results);


	results.forEach((info) => {
		//	console.log("comp", info.compatibility, info.name);
		if (info.compatibility == "*" ||
			parseInt(info.compatibility.split(".").shift()) >= 91) {
			//		messenger.browserAction.setBadgeText({text:"✓"});
			//		messenger.browserAction.setBadgeBackgroundColor({color:"green"});
			//		if (info.enabled)   
			iOK++;
		} else {
			if (info.enabled) {
				iInCompatible++;
				sIncompatibleNames.push(info.name);
			} else {
				sDisabledIncompatibleNames.push(info.name);
				iDisabledIncompatible++;
			}
			//
			//		messenger.browserAction.setBadgeText({text:iInCompatible+"✗"});
			//		messenger.browserAction.setBadgeBackgroundColor({color:"red"});
		};
	});
	//	console.log("ok, en not en", iOK, iInCompatible, iDisabledIncompatible);
	if ((iInCompatible == 0) && (iDisabledIncompatible == 0)) {
		messenger.browserAction.setBadgeText({ text: iOK + "✓" });
		messenger.browserAction.setBadgeBackgroundColor({ color: "green" });

	}
	else {
		messenger.browserAction.setBadgeText({ text: iInCompatible + "/" + iDisabledIncompatible });
		messenger.browserAction.setBadgeBackgroundColor({ color: "red" });
	}
	let resTitle = "Check add-on updates and compatibility in next ESR" + "\n\n"
	resTitle += "Active addons, incompatible: " + sIncompatibleNames.toString() + "\n\n";
	resTitle = resTitle + "Deactivated addons, incompatible: " + sDisabledIncompatibleNames +
		"\n\nMore info at Tools->Addons / option page of this addon";
	//	console.log("nmes", sIncompatibleNames, sDisabledIncompatibleNames);
//	messenger.browserAction.setTitle({ title: resTitle });
//




/*
	var addonNotification = "addon-notification"
	messenger.notifications.create(addonNotification, {
		"type": "basic",
		"iconUrl": browser.runtime.getURL("/skin/puzzle-piece32.png"),
		"title": "Addon compatibility",
		"message": "More info at Tools->Addons / option page of this addon"

	});

*/
	;




}

messenger.browserAction.onClicked.addListener(checkAddons);





window.addEventListener("load", checkAddons);
