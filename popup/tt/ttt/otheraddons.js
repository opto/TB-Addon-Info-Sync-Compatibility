/*
 * License:  see License.txt

 * Code  for TB 78 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Copyright: Klaus Buecher/opto 2021
 * Contributors:  see Changes.txt
 */


let hrefs = document.querySelectorAll("a.llink");
console.log(hrefs);

/**/
addEventListener("click", async (event) => {
	if (event.target.id.startsWith("addonLink")) {
console.log("ev", event, event.target.attributes);
console.log("url", event.target.attributes.url.nodeValue);
		messenger.tabs.create({url: event.target.attributes.url.nodeValue  });//openDefaultBrowser("https://www.paypal.com/donate?hosted_button_id=T738XXQGHNR2G");
	};

});


/*
function showLinkInTB(event) {
	console.log("ev", event);
//	messenger.tabs.create({url: event.target.attributes.url.nodeValue  });//openDefaultBrowser("https://www.paypal.com/donate?hosted_button_id=T738XXQGHNR2G");

}

addEventListener("load", async (event) => {
	//d;
	let el;
//	el = 
	let hrefs = document.querySelectorAll("a.llink");
console.log(hrefs);
for (href of hrefs) {
	console.log("href", href);
	href.addEventListener("click", showLinkInTB, true);

}
});

*/