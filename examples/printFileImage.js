// use: node printFile.js [filePath printerName]
var printer = require("../lib"),
    filename = process.argv[2] || __filename,
    printername = process.argv[3] || "Datacard";

console.log('platform:', process.platform);

var options = {orientation : 'L'};
//var options = {};

if( filename.indexOf('.emf') === -1) {
  console.log('try to print file: ' + filename);
  printer.printFile({
    filename: filename,
    docname: filename,
    printer: printername, // printer name, if missing then will print to default printer
    options: options,
    success:function(jobID){
      console.log("sent to printer with ID: "+jobID);
    },
    error:function(err){
      console.log(err);
    }
  });

} else {
  // not yet implemented, use printDirect and text
  console.log('try to print file with printDirect: ' + filename);
  var fs = require('fs');
  printer.printDirect({
    data:fs.readFileSync(filename),
    docname: filename,
    printer: printername,
    //type: 'PDF',
    success:function(jobID){
      console.log("sent to printer with ID: "+jobID);
    },
    error:function(err){
      console.log(err);
    }
  });
}

