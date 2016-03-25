/**
 * Output message types.
 */
MessageType = {
  warning : 1,
  error : 2,
  info : 3
};

log = {
  consoleOutput : function( message, messageType) {
    if (messageType == undefined || messageType == null) {
      messageType = MessageType.Info;
    }
    var console = document.getElementById("message-console");
    switch (messageType) {
      case MessageType.Error:
        console.className = "errorNote";
        break;
      case MessageType.Info:
        console.className = "infoNote";
        break;
      case MessageType.Warning:
        console.className = "warningNote";
        break;
    }
    console.innerHTML = message + "<br />" + console.innerHTML;
  },
  error : function(e) {
    view.consoleOutput( e.name + ": "+ e.message +" / Culprit: "+ JSON.stringify(e.culprit), MessageType.Error);
  }
};  