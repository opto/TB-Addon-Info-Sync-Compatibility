/*
 * License:  see License.txt

 * Code  for TB 68 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Copyright: Klaus Buecher/opto 2021
 * Contributors:  see Changes.txt
 */


var bgrPage = null;



var addons = [];;




async function loadData() {
  let url = "https://raw.githubusercontent.com/thundernest/extension-finder/master/data.yaml"
  return fetch(url).then(r => r.text()).then(dataToJSON);
}

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




async function printAddons(event) {
  // console.log("print");// 
  window.print();
};





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


function showOptoAddons() {

  messenger.tabs.create({ url: "otheraddons.html" });
  //  messenger.windows.create({url: "otheraddons.html",  height: 600,  width: 890,  type: "popup"});

}

async function onLoad(event) {
  // console.log("loaded");
  // console.log("versions","1.10.1b1", "1.10.1b2", compareVer("1.10.1b1", "1.10.1b2"));
  //addons
  let results = await messenger.management.getAll();
  let alternatives = await loadData();
  // console.log("raw addons", addons);


  var cBtn = document.getElementById("otherAddons");
  cBtn.addEventListener("click", showOptoAddons, true);
  //     console.log(clipBtn);



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
    let addonAltern = alternatives.filter(o => o.u_id === addon.id);
    if (addonAltern.length) addon["alternative"] = "<a href = 'https://extension-finder.thunderbird.net/?id=" + addon.id + "' id = 'altaddon' >more info</a>";
    else addon["alternative"] = "";
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
        alternative: "yes",
        enabled: addon.enabled,
      };
    }


    addons.push(addon);



  };


  bgrPage = await messenger.runtime.getBackgroundPage();
  // if (!bgrPage.dataSet) console.log("onLoad", bgrPage);

  var printBtn = document.getElementById("print");
  printBtn.addEventListener("click", printAddons, true);
  let table = document.getElementById("example1");
  showTable();
}

document.addEventListener("DOMContentLoaded", onLoad, false);




const createdCell = function (cell, cellData, rowData, rowIndex, colIndex) {
  let original;
  // console.log(cell);
 
  if (colIndex == 2) {
    //  console.log(cell);
    if (cell.childNodes[0].data != "*") cell.bgColor = "#fc2c03";//"red";//
    //cell.style = "{ color:red  !important}";
    cell.id = "td" + rowIndex + 'c' + colIndex;
    currentCell = cell;
    cell.setAttribute('row', rowIndex);
    cell.setAttribute('column', colIndex);
  };
 
}



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

        columnDefs: [{
          targets: '_all',
          createdCell: createdCell
        }],

        columns: [
          { title: "Addon name", width: "20%", data: "name" },
          { title: "Active", width: "7%", data: "enabled" },
          { title: "TB 91 compatible", width: "10%", data: "compatibility" },
          { title: "Alternative", width: "10%", data: "alternative" },
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

    let lod = document.getElementById("loading");
    lod.hidden = true;


    // console.log (table);
    // console.log(table.data().toArray());


  });


}



//);


