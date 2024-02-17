function makeSuccess() {
  return "Eh, we're just here as a place holder";
}

//fileToTest is the name of the html file; moved to different file for data privacy
function doGet() {
  return HtmlService.createHtmlOutputFromFile(fileToTest).setTitle('Beautiful Dispatch');
}


//Irrelevant ATM
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}