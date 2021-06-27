/*
 * License:  see License.txt

 * Code  for TB 78 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Copyright: Klaus Buecher/opto 2021
 * Contributors:  see Changes.txt
 */


var bgrPage = null;

//let dataSet = null;
//let dataSet = [  ["1", "2", "3"], ["w", "e", "X"]];
let dataSet = [{ "a": "1", "b": "2", "c": "3" }, { "a": "w", "b": "e", "c": "X" }];

let currRow = 0, currCol = 0;


/*
bgrPage =  messenger.runtime.getBackgroundPage();
window.setTimeout( ()=>{let zzz=0;}, 300);
if (!bgrPage.dataSet) console.log("no bgr page after start delay", bgrPage);
dataSet = bgrPage.dataSet;
*/


var addons = [];;



async function sendMail(event) {
  let textStr = "";
  let htmlStr = "<div id = 'addoninfosynccompatibility' >The following addons are installed in your second Thunderbird installation.<br>" +
    "For the receiver of this email, those addons are marked blue-grey that are not installed.<br>" +
    "Go to Tools->addons to install them.<br><br></div>";

  //    console.log("table");
  //    console.log(table.data().toArray());
  //dataSet = table.data().toArray();
  let clip = []; //table.data().toArray();
  clip = table.data().toArray();
  //    console.log(bgrPage.dataSet);
  //console.log(clip);
  //console.log("JSON", JSON.stringify(table.data().toArray()));
  clip.forEach((el) => {
    //console.log("el", JSON.stringify(el) + "\n\n"); 
    textStr += JSON.stringify(el) + "\n\n";//.toString() + "\n");
    /*
      htmlStr += ("<br>" + el.url + " (click to display in browser)<br><br><br>" + JSON.stringify(el) + 
         "\n\n<input type = 'button'  dataatn = '" + el.url + "' addonid = '" + el.id  +"' value = 'add " + el.id + " to Thunderbird in Tools-> Addons' /><br>");
         console.log("html", htmlStr); //.toString() + "\n");
    */
    htmlStr += ("<input type = 'button'  dataatn = '" + el.url + "' addonid = '" + el.id + "' value = 'add " + el.id + " to Thunderbird in Tools-> Addons' /><br>");
    //   console.log("html", htmlStr); //.toString() + "\n");
  });

  let htmlTable = document.getElementById("example1").outerHTML;
  htmlStr += htmlTable;

  //messenger.compose.beginNew({body:textStr, subject:"addon-details in Thunderbird"});
  messenger.compose.beginNew({ body: htmlStr, isPlainText: false, subject: " Addons installed in Thunderbird - details and sync proposal" });


}




async function printAddons(event) {
  // console.log("print");// 
  window.print();
};



async function save2Clip(event) {
  let textStr = "";

  //    console.log("table");
  //    console.log(table.data().toArray());
  //dataSet = table.data().toArray();
  document.designMode = true;
  document.contentEditable = true;
  /*console.log("doc",document);
  document.execCommand("strikeThrough");
  document.execCommand("selectAll");
  
  let tab = document.getElementById("example1");
  tab.select();
  document.execCommand("copy");
  */
  ///*
  //clipboard unformatted (table with tab)
  var range = document.createRange();
  range.selectNode(document.getElementById("example1"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
  //clipboard unformatted end
  //*/
  /*
  let clip = []; //table.data().toArray();
  clip = table.data().toArray();
//    console.log(bgrPage.dataSet);
console.log(clip);
console.log("JSON", JSON.stringify(table.data().toArray()));
clip.forEach( (el) => { console.log(JSON.stringify(el) + "\n\n"); textStr += JSON.stringify(el) + "\n\n";//.toString() + "\n");
});
 
navigator.clipboard.writeText(textStr);
*/
}


//versioncompare


//from https://jsfiddle.net/vanowm/p7uvtbor/
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
/* */




async function onLoad(event) {
  // console.log("loaded");
  // console.log("versions","1.10.1b1", "1.10.1b2", compareVer("1.10.1b1", "1.10.1b2"));
  //addons
  let results = await messenger.management.getAll();
  // console.log("raw addons", addons);


  for (let addon of results) {
    if (
      addon.installType != "normal" ||
      addon.type != "extension" ||
      addon.id.endsWith("mozilla.org")
    ) {
      continue;
    }

    let rv = await fetch(`https://addons.thunderbird.net/api/v4/addons/addon/${addon.id}/versions/`);
    let response = await rv.json();
    //console.log("raw response", response);
    addon["compatibility"] = "unknown";
    addon["maxversion"] = "unknown";
    var comps = [], compVers = [];

    if (
      Array.isArray(response.results) &&
      response.results.length > 0
    ) {

      for (let result of response.results) {
        addon["compatibility"] = "no";
        comps.push(result.compatibility.thunderbird.max);
        let compat = result.compatibility.thunderbird.max;
        let vers = {};
        vers.TBvers = compat;
        vers.version = result.version;

        let urlStr = result.url;
        vers.url = urlStr.substr(0, urlStr.indexOf("/version"));
        //   console.log("add url", vers.url);

        compVers.push(vers);

        if (compat == "*" ||
          parseInt(compat.split(".").shift()) >= 91) {
          addon["compatibility"] = compat;

        }



      };
      let compSort = comps.sort(compareVer);
      //   console.log("ordered version", compSort);
      //   console.log("ordered version", compVers);
      let versSort = compVers.sort((a, b) => { compareVer(a.version, b.version) });
      //   console.log(versSort);
      addon["maxversion"] = versSort[0].version;
      addon["url"] = versSort[0].url;

      let data = response.results[0];
      //    console.log(response.results[0].url);
      // addon["compatibility"] = data.compatibility.thunderbird.max;
      let info = {
        name: addon.name,
        version: data.version,
        compatibility: data.compatibility.thunderbird.max,
        enabled: addon.enabled,
      };
    }


    addons.push(addon);

  };


  bgrPage = await messenger.runtime.getBackgroundPage();
  // if (!bgrPage.dataSet) console.log("onLoad", bgrPage);
  var clipBtn = document.getElementById("table2Clipboard");
  clipBtn.addEventListener("click", save2Clip, true);
  //     console.log(clipBtn);
  var mailBtn = document.getElementById("table2Email");
  mailBtn.addEventListener("click", sendMail, true);
  // console.log(mailBtn);

  var printBtn = document.getElementById("print");
  printBtn.addEventListener("click", printAddons, true);
  let table = document.getElementById("example1");
  showTable();
}

document.addEventListener("DOMContentLoaded", onLoad, false);



var table = null;



async function showTable() {


  setTimeout(function () {
    let z = 0;;
  }, 200);

  //console.log("showtable");

  $(document).ready(function () {

    table = $('#example1').DataTable(
      {
        "pageLength": 25,
        data: addons,
        "order": [[1, "desc"]],
        "dom": 'rtip',

        columns: [
          { title: "Addon name", width: "20%", data: "name" },
          { title: "Active", width: "10%", data: "enabled" },
          { title: "TB 91 compatible", width: "10%", data: "compatibility" },
          { title: "Installed version", data: "version" },
          { title: "Highest version on ATN", data: "maxversion" },
          {
            title: "Description",
            //                width: "8%",
            data: "description",
          }
        ]

      }
    );


    // console.log (table);
    // console.log(table.data().toArray());


  });


}



//);


