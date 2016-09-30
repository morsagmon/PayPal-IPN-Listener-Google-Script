function doPost(e) {
  
  var isProduction = false;
  
  //if(typeof e == 'undefined')
    //return ContentService.createTextOutput(JSON.stringify(e.parameter));
    
  var strSandbox  = "https://www.sandbox.paypal.com/cgi-bin/webscr"
  var strLive = "https://www.paypal.com/cgi-bin/webscr"
  var paypalURL = strSandbox
  
  if (isProduction)  paypalURL = strLive;
  
  //Handshake with PayPal - send acknowledgement and get VERIFIED or INVALID response
  var params = {
          method: "post"
        }
  var urlHandshake = paypalURL + "?cmd=_notify-validate&" + e.postData.contents;
  
  var resp = UrlFetchApp.fetch(urlHandshake, params);
  
  
}
