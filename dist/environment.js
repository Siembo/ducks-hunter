/**
 * @fileOverview  Setting up an object for providing environment information 
 * @author Gerd Wagner
 */
oa.env = {
  country: navigator.language.slice(-2),  // e.g. US, EN, DE, CH, etc. 
  isAndroid: navigator.userAgent.match(/Android/i),
  isIOS: navigator.userAgent.match(/iPhone|iPad|iPod/i),
  isWindows: navigator.userAgent.match(/IEMobile/i),
  isBlackBerry: navigator.userAgent.match(/BlackBerry/i),
  isOpera: navigator.userAgent.match(/Opera Mini/i),
  isIE9: (navigator.userAgent.indexOf("Trident/5") > -1),
  isTouchScreenDevice: ('ontouchstart' in window || navigator.msMaxTouchPoints || false),
  //isTouchScreenDevice: true, 
  viewPortWidth: document.documentElement.clientWidth,
  viewPortHeight: document.documentElement.clientHeight,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  orientation: (this.screenWidth > this.screenHeight ? "landscape":"portrait"),
  isSmartphone: (Math.min( this.screenWidth, this.screenHeight) <= 360),
  // holds also for Nexus 7 and Samsung Galaxy Tab 7, but not for iPad mini
  isAtMostMiniTablet: (Math.min( this.screenWidth, this.screenHeight) <= 600),
  userAgentType: function () {
    var type="unknown";
    if (this.isAndroid) type = "Android";
    else if (this.isIOS) type = "iOS";
    else if (this.isWindows) type = "Windows mobile";
    else if (this.isBlackBerry) type = "BlackBerry";
    else if (this.isOpera) type = "Opera";
    else if (this.isIOS) type = "iOS";
    return type;
  }
};
