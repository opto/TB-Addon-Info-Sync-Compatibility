/*
 * License:  see License.txt

 * Code  for TB 78 or later: Creative Commons (CC BY-ND 4.0):
 *      Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) 
 
 * Copyright: Klaus Buecher/opto 2021
 * Contributors:  see Changes.txt
 */


var bgrPage = null ;

//let dataSet = null;
//let dataSet = [  ["1", "2", "3"], ["w", "e", "X"]];
let dataSet = [ {"a":"1", "b":"2", "c":"3"}, {"a":"w", "b": "e","c": "X"}];

let currRow = 0, currCol = 0;

let medium = false;
/*
bgrPage =  messenger.runtime.getBackgroundPage();
window.setTimeout( ()=>{let zzz=0;}, 300);
if (!bgrPage.dataSet) console.log("no bgr page after start delay", bgrPage);
dataSet = bgrPage.dataSet;
*/


var addons = [];;

async function update() {

  console.log("https://github.com/thundernest/import-export-tools-ng");
  messenger.tabs.create({active: true, url:"https://addons.thunderbird.net/en-us/thunderbird/addon/update-test/"});

};

async function sendMail(event) {
  let textStr = "";

  //    console.log("table");
  //    console.log(table.data().toArray());
      //dataSet = table.data().toArray();
      let clip = []; //table.data().toArray();
      clip = table.data().toArray();
  //    console.log(bgrPage.dataSet);
  console.log(clip);
  console.log("JSON", JSON.stringify(table.data().toArray()));
  clip.forEach( (el) => { console.log(JSON.stringify(el) + "\n\n"); textStr += JSON.stringify(el) + "\n\n";//.toString() + "\n");
});


messenger.compose.beginNew({body:textStr, subject:"addon-details in Thunderbird"});

  //    let prefJson = JSON.stringify(table.data().toArray());
  //    preferences.setPref("dataSet",prefJson );
  //browser.storage.set("dataSet",prefJson);
    //  bgrPage.saveDataset(dataSet);
  //  messenger.runtime.sendMessage({
  //    dataSetValues: dataSet
 //   });
  }
  

  async function save2Clip(event) {
    let textStr = "";
    //    console.log("table");
    //    console.log(table.data().toArray());
        //dataSet = table.data().toArray();
        let clip = []; //table.data().toArray();
        clip = table.data().toArray();
    //    console.log(bgrPage.dataSet);
    console.log(clip);
    console.log("JSON", JSON.stringify(table.data().toArray()));
    clip.forEach( (el) => { console.log(JSON.stringify(el) + "\n\n"); textStr += JSON.stringify(el) + "\n\n";//.toString() + "\n");
  });
  
  navigator.clipboard.writeText(textStr);
   
    //    let prefJson = JSON.stringify(table.data().toArray());
    //    preferences.setPref("dataSet",prefJson );
    //browser.storage.set("dataSet",prefJson);
      //  bgrPage.saveDataset(dataSet);
    //  messenger.runtime.sendMessage({
    //    dataSetValues: dataSet
   //   });
    }
    
  




async function onLoad(event) {
  console.log("loaded");
  //addons
  let results  = await messenger.management.getAll();
  console.log("raw addons", addons);


	for (let addon of results) {
		if (
			addon.installType != "normal" ||
			addon.type != "extension" || 
			addon.id.endsWith("mozilla.org")
		) {
			continue;
    }
    addons.push(addon);

  };


  bgrPage =  await messenger.runtime.getBackgroundPage();
  if (!bgrPage.dataSet) console.log("onLoad", bgrPage);
  //dataSet = bgrPage.dataSet;
  var clipBtn = document.getElementById("table2Clipboard");
      console.log(clipBtn);
  clipBtn.addEventListener("click", save2Clip, true);
      console.log(clipBtn);
  var mailBtn = document.getElementById("table2Email");
  mailBtn.addEventListener("click", sendMail, true);  
 var updateBtn = document.getElementById("update");
      console.log(updateBtn);
      updateBtn.addEventListener("click", update, true);
      console.log(clipBtn);
  let table  = document.getElementById("example1");
  //addBtn.addEventListener("blur", blurTable, true);  
   showTable();
  //    await preferences.init(); 
  }
  
  document.addEventListener("DOMContentLoaded", onLoad, false);
  


const createdCell = function(cell, cellData, rowData, rowIndex, colIndex) {
    let original;
   // console.log(cell);
    if (colIndex==2) {
      cell.addEventListener('click', function(e) {
        const row = table.row(e.target.parentElement);
//        console.log('Row changed: ', row);
//        console.log('Row index: ', rowIndex);
        bgrPage.dataSet.splice(rowIndex,1);
//        console.log(bgrPage.dataSet);
//        console.log(table);
        row.remove().draw();
        table.rows().invalidate().draw();
       // row.invalidate();
      });
 
      }   
      if (colIndex==1) {
        cell.id = "td"+rowIndex+'c'+colIndex;
        currentCell = cell;
        cell.setAttribute('row', rowIndex);
        cell.setAttribute('column', colIndex);
      };
       if (colIndex!=2) {
    cell.setAttribute('class', 'editable');
 
//    cell.setAttribute('contenteditable', true)
    cell.setAttribute('spellcheck', false);
    //cell.setAttribute('style', "{  white-space: normal;}");
  
    cell.addEventListener('click', function(e) {
      console.log("click", e);
      console.log("e cell: ", currentCell);
      original = e.target.innerHTML; //      textContent
   
 //config = { events: { blur: () => { this.handleBlur() } } }
/*
      joditEditor = new Jodit('#'+e.originalTarget.parentNode.id, {
        toolbarButtonSize: 'small'//,
//                  preset: 'inline'
    });
*/
  });
  
    cell.addEventListener('blur', function(e) {
      console.log("e onblur: ", e);
      console.log("e cell: ", currentCell);
 //     joditEditor.destruct();
{
  //if (original !== e.target.innerHTML) { //innerText) {
        const row = table.row(e.target.parentElement);
        let jj = 0;
        let str = e.target.innerHTML; //innerText;
 //       for (jj= 0; jj < str.length;jj++ )  console.log(" ", str.charCodeAt(jj,1));
   //console.log(row);
   //bgrPage.dataSet[rowIndex][colIndex]= e.target.innerText;
   //dataSet[rowIndex][colIndex]= e.target.innerHTML; //innerText;
   //row.invalidate();
   //table.rows().invalidate().draw();
   //     console.log('e.target.innerHTML', e.target.innerHTML, 'Row changed: ', row.data(), "dataSet", dataSet);
      }
    });

  }
  }
 var table  = null; 



async function showTable() {
/*
bgrPage =  await messenger.runtime.getBackgroundPage();
if (!bgrPage.dataSet) console.log("showTable", bgrPage);
dataSet = bgrPage.dataSet;
*/

setTimeout( function() {
  let z=0;;
}, 200);

console.log("showtable");

$(document).ready(function() {
/*
  var editor = new Jodit('#repInp', {
    preset: 'inline'
});
*/
  table = $('#example1').DataTable(
        {
            "pageLength": 25,
            data: addons,
            keys:true,
       //     "dom": '<"wrapper"lf><t>p',
/* */
       columnDefs: [{ 
        targets: '_all',
        createdCell: createdCell
      }],
    
            columns:[
                {title: "Addon name", width: "20%", data:"name"},
                {title: "Active", width: "10%", data:"enabled"},
                {title: "TB 91 compatible", width: "10%", data:"enabled"},
                {title: "Version", data:"version"},
                {title: "Description",
  //                width: "8%",
                  data: "description",
            }
                 ]

        }
    );
 

    console.log (table);
    console.log(table.data().toArray());


  });


} 



//);


