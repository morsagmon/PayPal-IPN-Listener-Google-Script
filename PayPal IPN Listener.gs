function doPost(e) {
  
  var isProduction = false;
  
  //if(typeof e == 'undefined')
    //return ContentService.createTextOutput(JSON.stringify(e.parameter));
    
  var strSandbox  = "https://www.sandbox.paypal.com/cgi-bin/webscr"
  var strLive = "https://www.paypal.com/cgi-bin/webscr"
  var paypalURL = strSandbox
  
  if (isProduction)  paypalURL = strLive;
  var payload = "cmd=_notify-validate&" + e.postData.contents;
  
  
  var options =
    {
      "method" : "post",
      "payload" : payload
    };
  
  var resp = UrlFetchApp.fetch(paypalURL, options);
  
  
}
