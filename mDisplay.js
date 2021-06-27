/*
* License:  see License.txt

* Code  for TB 78 or later: Creative Commons (CC BY-ND 4.0):
*      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
* Copyright: Klaus Buecher/opto 2021
* Contributors:  see Changes.txt
*/





function handleResponse(message) {
  //  console.log(`background script sent a response: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function sendMessage(e) {
  const sending = browser.runtime.sendMessage({ task: "getAddons", content: "message from the content script" });
  sending.then(handleResponse, handleError);
}

//window.addEventListener("click", sendMessage);



async function startup() {
  //  console.log("testmsg");//message);//  sending.then(handleResponse);//
  //  console.log(document);
  var idss = [];
  await messenger.runtime.sendMessage({ task: "getAddons", greeting: "" }, function (response) {
    let dd = [];
    dd = JSON.parse(response.response);
    idss = dd;

    //  console.log("resp", response.response, response.response.length, "dd", dd, dd.length);

    /*
    */
    let buttons = document.querySelectorAll("input");
    //  console.log("buttons", buttons);
    //  console.log("idss", idss);
    for (let button of buttons) {
      window.btnURL = button.getAttribute("dataatn");
      window.addonId = button.getAttribute("addonid");
      //    console.log("btn", window.btnURL, window.addonId);

      if (!idss.includes(window.addonId)) button.addEventListener("click", async (e) => {
        //      console.log("clicked", window.btnURL, e, e.originalTarget.getAttribute("dataatn"));

      }); else button.hidden = true;//src = button.dataATN;
    }
  });

}



function onLoad(e) {
  let addonsyncdiv = document.getElementById("addoninfosynccompatibility");
  // console.log("addonsyncdiv", addonsyncdiv);

  if (addonsyncdiv && addonsyncdiv != null) {
    //console.log("email recognised");
    startup();
  }
}
onLoad();
//document.addEventListener("DOMContentLoaded", onLoad, false);


