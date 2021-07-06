/**
 * License: see License.txt
 *
 * Code  for TB 68 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 *
 * Copyright: Klaus Buecher/opto 2021
 * Contributors: see Changes.txt
 */

 // Enable debug mode in production (it is enabled automatically in add-on debug install mode)
var debug = false;
 
// A simple log wrapper.
function log(...args) {
  if (debug) console.log(...args);
}

async function printAddons(event) {
  window.print();
}
 
function showOptoAddons() {
  messenger.tabs.create({ url: "otheraddons.html" });
}
 
async function onLoad(event) {
  // Enable debug mode on debug installs.
  let self = await messenger.management.getSelf();
  if (self.installType == "development") {
      debug = true;
  }
  loadTable();
}

const createdCell = function (cell, cellData, rowData, rowIndex, colIndex) {
  if ([1,2,3,4,5].includes(colIndex)) {
    cell.style["text-align"] = "center";
  }
  if (!rowData.enabled) {
    cell.style["color"] = "#888888"; // darker grey
  }

  if (colIndex == 4 && rowData.enabled) {
    switch (rowData.status) {
      case "isUnknown": 
        cell.bgColor = "#A0A0A0"; // grey
        break;
      case "isIncompatible":
        cell.bgColor = "#fc2c03"; //red
        break;
      case "hasAlternative":
          cell.bgColor = "orange";
          break;
      case "isOk":
          cell.bgColor = "green";
          break;
      }          
    cell.id = "td" + rowIndex + 'c' + colIndex;
    cell.setAttribute('row', rowIndex);
    cell.setAttribute('column', colIndex);
  };

  if (colIndex == 5 && rowData.enabled && rowData.status == "hasAlternative") {  
    cell.bgColor = "orange";
  }
}

async function loadTable() {
  let { addonData } = await messenger.storage.local.get("addonData");
  let addons = Object.values(addonData);
  log({addons});
 
  document.getElementById("otherAddons").addEventListener("click", showOptoAddons, true);
  document.getElementById("print").addEventListener("click", printAddons, true);

	let { lastCheck } = await messenger.storage.local.get("lastCheck");
  let date = new Date(lastCheck);
  document.getElementById("lastUpdate").textContent = date.toString();

  $(document).ready(function () {
    $('#example1').DataTable({
      "pageLength": 25,
      destroy: true,
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
        { title: "Installed version", data: "version", align: "center" },
        { title: "Highest version on ATN", data: "maxUrl" },
        { title: "Compatibility", width: "10%", data: "maxCompatibility", align: "center" },
        { title: "Alternative", width: "10%", data: "alternative" },
        { title: "Description", data: "description" }
      ]
    });
    let lod = document.getElementById("loading");
    lod.hidden = true;
  });
}

async function runtimeListener(request, sender) {
	switch (request.command) {
		case "reloadView":
      loadTable();
      break;
	}
}

messenger.runtime.onMessage.addListener(runtimeListener);
document.addEventListener("DOMContentLoaded", onLoad, false);
