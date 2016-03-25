/**
 * Implements the trim method for browsers 
 * that don't support it natively
 */
if (!String.prototype.trim) {  
  String.prototype.trim = function () {  
    return this.replace(/^\s+|\s+$/g,'');  
  };  
};
/**
 * Compute the max/min of an array
 * Notice that apply requires a context object, which is not really used
 * in the case of a static function such as Math.max
 */
Array.max = function (array) {
  return Math.max.apply( Math, array);
}; 
Array.min = function (array) {
  return Math.min.apply( Math, array);
};

//==========================================================================
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2011-06-15
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
 
/*global self, document, DOMException */
 
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
 
if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {
 
(function (view) {
 
"use strict";
 
var
      classListProp = "classList"
    , protoProp = "prototype"
    , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
    , objCtr = Object
    , strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
    }
    , arrIndexOf = Array[protoProp].indexOf || function (item) {
        var
              i = 0
            , len = this.length
        ;
        for (; i < len; i++) {
            if (i in this && this[i] === item) {
                return i;
            }
        }
        return -1;
    }
    // Vendors: please allow content code to instantiate DOMExceptions
    , DOMEx = function (type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
    }
    , checkTokenAndGetIndex = function (classList, token) {
        if (token === "") {
            throw new DOMEx(
                  "SYNTAX_ERR"
                , "An invalid or illegal string was specified"
            );
        }
        if (/\s/.test(token)) {
            throw new DOMEx(
                  "INVALID_CHARACTER_ERR"
                , "String contains an invalid character"
            );
        }
        return arrIndexOf.call(classList, token);
    }
    , ClassList = function (elem) {
        var
              trimmedClasses = strTrim.call(elem.className)
            , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
            , i = 0
            , len = classes.length
        ;
        for (; i < len; i++) {
            this.push(classes[i]);
        }
        this._updateClassName = function () {
            elem.className = this.toString();
        };
    }
    , classListProto = ClassList[protoProp] = []
    , classListGetter = function () {
        return new ClassList(this);
    }
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
    return this[i] || null;
};
classListProto.contains = function (token) {
    token += "";
    return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function (token) {
    token += "";
    if (checkTokenAndGetIndex(this, token) === -1) {
        this.push(token);
        this._updateClassName();
    }
};
classListProto.remove = function (token) {
    token += "";
    var index = checkTokenAndGetIndex(this, token);
    if (index !== -1) {
        this.splice(index, 1);
        this._updateClassName();
    }
};
classListProto.toggle = function (token) {
    token += "";
    if (checkTokenAndGetIndex(this, token) === -1) {
        this.add(token);
    } else {
        this.remove(token);
    }
};
classListProto.toString = function () {
    return this.join(" ");
};
 
if (objCtr.defineProperty) {
  var classListPropDesc = { get: classListGetter, enumerable: true, configurable: true};
  try {
    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
  } catch (ex) { // IE 8 doesn't support enumerable:true
    if (ex.number === -0x7FF5EC54) {
      classListPropDesc.enumerable = false;
      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    }
  }
} else if (objCtr[protoProp].__defineGetter__) {
  elemCtrProto.__defineGetter__(classListProp, classListGetter);
}
 
}(self));
 
}

//==========================================================================
/**
 * A drop-in shim to allow you to use existing html5 drag'n'drop code with iOS
 * https://github.com/timruffles/ios-html5-drag-drop-shim
 */
if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
 (function() {

  (function() {
    var DEBUG, DragDrop, ERROR, INFO, LOG_LEVEL, VERBOSE, average, coordinateSystemForElementFromPoint, div, doc, dragDiv, dragstart, elementFromTouchEvent, evts, getEls, handler, log, needsPatch, onEvt, once, parents,
      _this = this;
    VERBOSE = 3;
    DEBUG = 2;
    INFO = 1;
    ERROR = 0;
    LOG_LEVEL = DEBUG;
    doc = document;
    log = function(msg, level) {
      if (level == null) {
        level = ERROR;
      }
      if (level <= LOG_LEVEL) {
        return console.log(msg);
      }
    };
    log = function() {};
    onEvt = function(el, event, handler) {
      el.addEventListener(event, handler);
      return {
        off: function() {
          return el.removeEventListener(event, handler);
        }
      };
    };
    once = function(el, event, handler) {
      var listener;
      return el.addEventListener(event, listener = function(evt) {
        handler(evt);
        return el.removeEventListener(event, listener);
      });
    };
    average = function(arr) {
      if (arr.length === 0) {
        return 0;
      }
      return arr.reduce((function(s, v) {
        return v + s;
      }), 0) / arr.length;
    };
    coordinateSystemForElementFromPoint = navigator.userAgent.match(/OS 5(?:_\d+)+ like Mac/) ? "client" : "page";
    elementFromTouchEvent = function(event) {
      var touch;
      touch = event.changedTouches[0];
      log("touch");
      return doc.elementFromPoint(touch[coordinateSystemForElementFromPoint + "X"], touch[coordinateSystemForElementFromPoint + "Y"]);
    };
    DragDrop = (function() {

      function DragDrop(event, el) {
        var cancel, cleanup, end, evt, match, move, transform, x, y, _ref,
          _this = this;
        if (el == null) {
          el = event.target;
        }
        this.dragend = function(event) {
          return DragDrop.prototype.dragend.apply(_this, arguments);
        };
        this.move = function(event) {
          return DragDrop.prototype.move.apply(_this, arguments);
        };
        event.preventDefault();
        log("dragstart");
        this.dragData = {};
        evt = doc.createEvent("Event");
        evt.initEvent("dragstart", true, true);
        evt.dataTransfer = {
          setData: function(type, val) {
            return _this.dragData[type] = val;
          },
          dropEffect: "move"
        };
        el.dispatchEvent(evt);
        cleanup = function() {
          log("cleanup");
          _this.touchPositions = {};
          return [move, end, cancel].forEach(function(handler) {
            return handler.off();
          });
        };
        this.el = el;
        this.touchPositions = {};
        transform = this.el.style["-webkit-transform"];
        _ref = (match = /translate\(\s*(\d+)[^,]*,\D*(\d+)/.exec(transform)) ? [parseInt(match[1]), parseInt(match[2])] : [0, 0], x = _ref[0], y = _ref[1];
        this.elTranslation = {
          x: x,
          y: y
        };
        move = onEvt(doc, "touchmove", this.move);
        end = onEvt(doc, "touchend", function(evt) {
          _this.dragend(evt, event.target);
          return cleanup();
        });
        cancel = onEvt(doc, "touchcancel", cleanup);
      }

      DragDrop.prototype.move = function(event) {
        var deltas,
          _this = this;
        log("dragmove", VERBOSE);
        deltas = [].slice.call(event.changedTouches).reduce(function(deltas, touch, index) {
          var position;
          position = _this.touchPositions[index];
          if (position) {
            deltas.x.push(touch.pageX - position.x);
            deltas.y.push(touch.pageY - position.y);
          } else {
            _this.touchPositions[index] = position = {};
          }
          position.x = touch.pageX;
          position.y = touch.pageY;
          return deltas;
        }, {
          x: [],
          y: []
        });
        this.elTranslation.x += average(deltas.x);
        this.elTranslation.y += average(deltas.y);
        return this.el.style["-webkit-transform"] = "translate(" + this.elTranslation.x + "px," + this.elTranslation.y + "px)";
      };

      DragDrop.prototype.dragend = function(event) {
        var doSnapBack, dragendEvt, dropEvt, next, parent, snapBack, target,
          _this = this;
        log("dragend");
        doSnapBack = function() {
          once(_this.el, "webkitTransitionEnd", function() {
            return _this.el.style["-webkit-transition"] = "none";
          });
          return setTimeout(function() {
            _this.el.style["-webkit-transition"] = "all 0.2s";
            return _this.el.style["-webkit-transform"] = "translate(0,0)";
          });
        };
        parent = this.el.parentElement;
        parent.removeChild(this.el);
        target = elementFromTouchEvent(event);
        if (next = this.el.nextSibling) {
          parent.insertBefore(this.el, next);
        } else {
          parent.appendChild(this.el);
        }
        if (target) {
          log("Found drop target " + target.tagName);
          dropEvt = doc.createEvent("Event");
          dropEvt.initEvent("drop", true, true);
          dropEvt.dataTransfer = {
            getData: function(type) {
              return _this.dragData[type];
            }
          };
          snapBack = true;
          dropEvt.preventDefault = function() {
            snapBack = false;
            return _this.el.style["-webkit-transform"] = "translate(0,0)";
          };
          once(doc, "drop", function() {
            log("drop event not canceled");
            if (snapBack) {
              return doSnapBack();
            }
          });
          target.dispatchEvent(dropEvt);
        } else {
          once(doc, "dragend", doSnapBack);
        }
        dragendEvt = doc.createEvent("Event");
        dragendEvt.initEvent("dragend", true, true);
        return this.el.dispatchEvent(dragendEvt);
      };

      return DragDrop;

    })();
    getEls = function(el, selector) {
      var _ref;
      if (!selector) {
        _ref = [doc, el], el = _ref[0], selector = _ref[1];
      }
      return [].slice.call(el.querySelectorAll(selector));
    };
    div = doc.createElement('div');
    dragDiv = 'draggable' in div;
    evts = 'ondragstart' in div && 'ondrop' in div;
    needsPatch = !(dragDiv || evts) || /iPad|iPhone|iPod/.test(navigator.userAgent);
    log("" + (needsPatch ? "" : "not ") + "patching html5 drag drop");
    if (!needsPatch) {
      return;
    }
    dragstart = function(evt) {
      evt.preventDefault();
      return new DragDrop(evt);
    };
    parents = function(el) {
      var parent, _results;
      _results = [];
      while ((parent = el.parentNode) && parent !== doc.body) {
        el = parent;
        _results.push(parent);
      }
      return _results;
    };
    return doc.addEventListener("touchstart", handler = function(evt) {
      var el, _i, _len, _ref;
      _ref = [evt.target].concat(parents(evt.target));
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        if (el.hasAttribute("draggable")) {
          evt.preventDefault();
          return dragstart(evt, el);
        }
      }
      return null;
    });
  })();

 }).call(this);
}