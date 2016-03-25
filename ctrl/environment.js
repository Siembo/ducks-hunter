/**
 * @fileOverview  Setting up an object for providing environment information 
 * @author Gerd Wagner
 */
oa.env = {
  isAndroid: navigator.userAgent.match(/Android/i),
  isIOS: navigator.userAgent.match(/iPhone|iPad|iPod/i),
  isWindows: navigator.userAgent.match(/IEMobile/i),
  isBlackBerry: navigator.userAgent.match(/BlackBerry/i),
  isOpera: navigator.userAgent.match(/Opera Mini/i),
  isIE9: (navigator.userAgent.indexOf("Trident/5") > -1),
  //isTouchScreenDevice: ('ontouchstart' in window || navigator.msMaxTouchPoints),
  isTouchScreenDevice: true, 
  viewPortWidth: document.documentElement.clientWidth,
  viewPortHeight: document.documentElement.clientHeight,
  orientation: (this.viewPortWidth > this.viewPortHeight ? "landscape":"portrait"),
  isSmartphone: (Math.min( this.viewPortWidth, this.viewPortHeight) <= 360),
  // holds also for Nexus 7 and Samsung Galaxy Tab 7, but not for iPad mini
  isAtMostMiniTablet: (Math.min( this.viewPortWidth, this.viewPortHeight) <= 603),
};
