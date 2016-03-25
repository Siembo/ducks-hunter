util = {
  languageNames: { "de":"Deutsch", "en":"English", "es":"EspaÃ±ol", "fr":"FranÃ§ais", 
      "pt":"PortuguÃªs", "ru":"Ð ÑƒÑ�Ñ�ÐºÐ¸Ð¹", "zh":"ä¸­æ–‡"
  },
  operatorSymbols: ["+","−","⋅",":"],  // contains the non-ANSI Unicode characters "−" and "⋅"
  /**
   * Returns a random integer that is uniformly distributed between min and max
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  randomInt: function (min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
  },
  /**
   * Gets the user's preferred language from the browser settings 
   * 
   * @return {string}
   */
  getUserLanguage: function () {
    var lang = window.navigator.userLanguage || window.navigator.language;
    return lang.substring(0,2);
  },
  /**
   * Verifies if a value represents an integer
   * @param {number} x
   * @return {boolean}
   */
  isInteger: function (x) {
    return typeof(x) === "number" && x.toString().search(/^-?[0-9]+$/) == 0;
  },
  /**
   * Verifies if a value represents a non-negative integer
   * 
   * @param {number} x
   * @return {boolean}
   */
  isNonNegativeInteger: function (x) {
    return typeof(x) === "number" && x.toString().search(/^-?[0-9]+$/) == 0 &&
        util.isInteger(x) && x >= 0;
  },
 /**
  * Verifies if a value represents a positive integer
  * 
  * @param {number} x
  * @return {boolean}
  */
  isPositiveInteger: function (x) {
    return typeof(x) === "number" && x.toString().search(/^-?[0-9]+$/) == 0 &&
        util.isInteger(x) && x > 0;
  },
 /**
  * Select n elements from a set/array without repetition
  * 
  * @param {string} s  The string to be checked
  * @return {boolean}
  */
  selectFromSetWithoutRepetition: function (n, source) {
    var index=0, target=[];
    for (var i=0; i < n; i++) {
      index = util.randomInt( 0, source.length-1);
      target.push( source[index]);
      source.splice(index, 1);
    }
    return target;
  },
  /**
   * Checks if a string contains an arithmetic operator 
   * (hence representing an arithmetic expression)
   * 
   * @param {string} s  The string to be checked
   * @return {boolean}
   */
    containsArithmeticOperator: function (s) {
      for (var i=0; i < oa.view.operatorSymbols.length; i++) {
        if (s.indexOf(oa.view.operatorSymbols[i]) != -1) return true;
      }
      return false;
    },
  /**
   * Create a random permutation of an array
   * @param {array} a
   * @return {array}
   */
  shuffle: function (a) {
    var tmp, current, top = a.length;
    if (top>1) {
      while(--top) {
        current = Math.floor( Math.random() * (top + 1));
        tmp = a[current];
        a[current] = a[top];
        a[top] = tmp;
      }
    }
    return a;
  },
  /**
   * Retrieve the type of a value, either a data value of type "Number", "String" or "Boolean",
   * or an object of type "Function", "Array", "HTMLDocument", ..., or "Object"
   * @param {any} val
   */
   getTypeName: function (val) {
     // stringify val and extract the word following "object"
     var typeName = Object.prototype.toString.call(val).match(/^\[object\s(.*)\]$/)[1];
     // special case: null is of type "Null"
     if (val === null) return "Null"; 
     // special case: instance of a user-defined class or ad-hoc object
     if (typeName === "Object") return val.constructor.name || "Object";
     // all other cases: "Number", "String", "Boolean", "Function", "Array", "HTMLDocument", ...
     return typeName;
   },
/**
 * Return a string representation of an object
 * Useful for debugging
 * 
 * @param {object} o
 * @return {string} s
 */
  objectToString: function (o) {
    var t = "";
    var s = "Object: ";
    for (var p in o) {
      if (o[p] == null) t = "null";
      else if (typeof(o[p]) === "object") t = util.objectToString(o[p]);
      else if (typeof(o[p]) !== "function") t = p + " = " + o[p] + "  ";
      s = s+t;
    }
  return s;
  },  
  /**
   * Gets the number of digits of an integer by transforming the absolute value into a String.
   * Return the length of the String.
   * @param integer
   * @returns numberOfDigits
   */
  getNumberOfDigits: function (integer) {
    var aboluteIntegerString = Math.abs(integer).toString();
    var numberOfDigits = aboluteIntegerString.length;
    return numberOfDigits;
  },
  /**
   * Add either mp3 or ogg audio file, depending on browser support.
   * @param audioElem
   * @param srcMp3
   * @param srcOgg
   */
  addAudioSrc: function (audioElem, srcMp3, srcOgg) {
    if (audioElem.canPlayType("audio/mpeg")) {
      audioElem.src = srcMp3;
    } else if (audioElem.canPlayType("audio/ogg")) {
      audioElem.src = srcOgg;
    } else {
      console.log("Audio is not supported by the browser.");
    }
  },
  /**
   * Crossbrowser eventListener for some custom events like animatedEnd etc
   * @param DomElement
   * @param string
   * @param function
   */
  addPrefixedEventListeners: function ( element, evtType, callback) {
    var pfx = ["webkit", "moz", "MS", "o"];

    for (var p = 0; p < pfx.length; p++) {
      element.addEventListener(pfx[p] + evtType, callback);
    }
    element.addEventListener( evtType.toLowerCase(), callback);
  }
};