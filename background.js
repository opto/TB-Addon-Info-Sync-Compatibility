async function checkAddons() {	
	let iOK = 0, iInCompatible = 0, iDisabledIncompatible = 0, sIncompatibleNames = [], sDisabledIncompatibleNames = [];
	messenger.browserAction.setBadgeText({text:"…"});
	messenger.browserAction.setBadgeBackgroundColor({color:"blue"});		

	let addons = await messenger.management.getAll();
	console.log("raw addons", addons);
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
		console.log("raw response", response);
		if (
			Array.isArray(response.results) &&
			response.results.length > 0
		) {
			let data = response.results[0];
			console.log(response.results[0].url);
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
	console.log(results);


	results.forEach( (info) =>{
		console.log("comp", info.compatibility, info.name);
		if ( info.compatibility == "*" ||
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
	console.log("ok, en not en", iOK, iInCompatible, iDisabledIncompatible);
	if ( (iInCompatible==0) && (iDisabledIncompatible==0)) {
		messenger.browserAction.setBadgeText({text:iOK +"✓"});
		messenger.browserAction.setBadgeBackgroundColor({color:"green"});

	}
	else {
	messenger.browserAction.setBadgeText({text: iInCompatible + "/" + iDisabledIncompatible + "✗"});
	messenger.browserAction.setBadgeBackgroundColor({color:"red"});
	}
	let resTitle = "Check add-on updates and compatibility in next ESR" + "\n\n"
	resTitle+= "Active addons, incompatible: " + sIncompatibleNames.toString() + "\n\n";
	resTitle= resTitle +"Deactivated addons, incompatible: " + sDisabledIncompatibleNames;
	console.log("nmes", sIncompatibleNames, sDisabledIncompatibleNames);
	messenger.browserAction.setTitle({title:resTitle});
;



	/*
	if (results.every(info => info.compatibility == "*" ||
	         parseInt(info.compatibility.split(".").shift()) >= 91)) {
		messenger.browserAction.setBadgeText({text:"✓"});
		messenger.browserAction.setBadgeBackgroundColor({color:"green"});
		iOK++;		
	} else {
//		if (info.enabled)else iDisabledIncompatible++;
iInCompatible++; 
		messenger.browserAction.setBadgeText({text:iInCompatible+"✗"});
		messenger.browserAction.setBadgeBackgroundColor({color:"red"});
	};
	
*/	
	
}

messenger.browserAction.onClicked.addListener(checkAddons);
//window.addEventListener("load", checkAddons);
