xhr = {
  /**
  * Make an XHR GET request
  * @params object  Contains parameter slots
  */
  makeGetRequest: function (params) {
    params.method = "GET";
    xhr.makeRequest( params);
  },
  /**
   * Make an XHR POST request
   * @params object  Contains parameter slots
   */
  makePostRequest: function (params) {
    params.method = "POST";
    xhr.makeRequest( params);
  },
  /**
   * Make an XHR PUT request
   * @params object  Contains parameter slots
   */
  makePutRequest: function (params) {
    params.method = "PUT";
    xhr.makeRequest( params);
  },
  /**
   * Make an XHR DELETE request
   * @params object  Contains parameter slots
   */
  makeDeleteRequest: function (params) {
    params.method = "DELETE";
    xhr.makeRequest( params);
  },
  /**
   * Make an XHR request
   * @params object  Contains parameter slots
   */
  makeRequest: function (params) {
    var xhr=null, url="", method="", 
        reqFormat="", respFormat="", 
        handleResponse=null;
    //TODO: move this constant declaration to lib/browserShims.js
    var URL_PATTERN = /\b(https?):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|??]/;
    if (!params.url) {
      console.log("Missing value for url parameter in XHR GET request!");
      return;
    } else if (!URL_PATTERN.test( params.url)) {
      console.log("Invalid URL in XHR GET request!");
      return;      
    } else {
      url = params.url;
      xhr = new XMLHttpRequest();
      if (!params.method) { method = "GET";}  // default
      else { method = params.method;}
      if (!params.reqFormat) { reqFormat = "application/x-www-form-urlencoded";}  // default
      else { reqFormat = params.reqFormat;}
      if (!params.respFormat) { respFormat = "application/json";}  // default
      else { respFormat = params.respFormat;}
      if (!params.handleResponse) {
        // define a default response handler
        handleResponse = function (req) {
          if (req.status === 200) alert("Response: " + req.responseText); 
          else alert("Error " + req.status +": "+ req.statusText);
        };
      } else { handleResponse = params.handleResponse;}
    }
    xhr.open( method, url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) { handleResponse( xhr);}
    };
    xhr.setRequestHeader("Accept", respFormat);
    if (method === "GET" || method === "DELETE") {
      xhr.send("");
    } else {  // POST and PUT
      xhr.setRequestHeader("Content-Type", reqFormat);
      xhr.send( params.msgBody);
    }
  }
};