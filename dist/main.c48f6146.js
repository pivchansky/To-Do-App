// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/js/function.js":[function(require,module,exports) {
var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

window.addEventListener('DOMContentLoaded', function (event) {
  var templateComponent = document.createElement('template');
  templateComponent.id = 'listTempl';
  templateComponent.innerHTML = "<style>\n            .list__item {\n                line-height: 1.15;\n                -webkit-text-size-adjust: 100%;\n                font-size: 16px;\n                font-family: \"Poppins\", sans-serif;\n                color: #081410;\n                cursor: pointer;\n                position: relative;\n                padding: 12px 8px 12px 40px;\n                background: white;\n                transition: 0.2s;\n                user-select: none;\n                margin-bottom: 10px;\n                border-radius: 3px;\n                border: solid 1px #43ab88;\n                box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.07);\n                display: flex;\n                justify-content: space-between;\n            }\n\n            .list__item .list__text {\n                line-height: 1.15;\n                -webkit-text-size-adjust: 100%;\n                font-size: 16px;\n                font-family: \"Poppins\", sans-serif;\n                color: #081410;\n                cursor: pointer;\n                user-select: none;\n                margin: 0;\n                transition: 0.2s;\n            }\n\n            .list__item .list__button {\n                -webkit-text-size-adjust: 100%;\n                user-select: none;\n                font-family: inherit;\n                font-size: 100%;\n                line-height: 1.15;\n                margin: 0;\n                overflow: visible;\n                text-transform: none;\n                -webkit-appearance: button;\n                padding: 10px;\n                background: #43ab88;\n                color: white;\n                text-align: center;\n                cursor: pointer;\n                border-radius: 3px;\n                transition: 0.3s;\n                border: none;\n                outline: none;\n                height: 38px;\n                margin-left: 10px;\n                align-self: center;\n            }\n\n            .list__item:hover .list__text {\n                color: #43ab88;\n            }\n\n            .list__item .list__button:hover {\n                background-color: #c6ebde;\n                color: #43ab88;\n            }\n\n            .list__item_checked {\n                line-height: 1.15;\n                -webkit-text-size-adjust: 100%;\n                font-size: 16px;\n                font-family: \"Poppins\", sans-serif;\n                cursor: pointer;\n                position: relative;\n                padding: 12px 8px 12px 40px;\n                background: white;\n                transition: 0.2s;\n                user-select: none;\n                margin-bottom: 10px;\n                border-radius: 3px;\n                border: solid 1px #43ab88;\n                box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.07);\n                display: flex;\n                justify-content: space-between;\n                background-color: #43ab88;\n                color: white;\n            }\n\n            .list__item_checked .list__text {\n                line-height: 1.15;\n                -webkit-text-size-adjust: 100%;\n                font-size: 16px;\n                font-family: \"Poppins\", sans-serif;\n                cursor: pointer;\n                user-select: none;\n                color: white;\n                margin: 0;\n                text-decoration: line-through;\n            }\n\n            .list__item_checked:hover .list__text {\n                color: white;\n            }\n\n            .list__item_checked .list__text::before {\n                content: '';\n                position: absolute;\n                border-color: white;\n                border-style: solid;\n                border-width: 0 2px 2px 0;\n                top: 10px;\n                left: 16px;\n                transform: rotate(45deg);\n                height: 15px;\n                width: 7px;\n            }\n            \n            .list__item_checked:hover .list__text {\n                color: white;\n            }\n\n            .list__item_checked .list__button {\n                -webkit-text-size-adjust: 100%;\n                user-select: none;\n                font-family: inherit;\n                font-size: 100%;\n                line-height: 1.15;\n                margin: 0;\n                overflow: visible;\n                text-transform: none;\n                -webkit-appearance: button;\n                padding: 10px;\n                text-align: center;\n                cursor: pointer;\n                border-radius: 3px;\n                transition: 0.3s;\n                border: none;\n                outline: none;\n                height: 38px;\n                margin-left: 10px;\n                align-self: center;\n                background: white;\n                color: #43ab88;\n            }\n            \n        </style>\n        <div class=\"list__item\">\n            <p class=\"list__text\"><slot name=\"user-task\">Something went wrong!</slot></p>\n            <button class=\"list__button\" id=\"lstBtn\">Delete</button>\n        </div>";
  document.body.append(templateComponent);
});

var ToDoController = function () {
  function ToDoController() {
    this._listElementWrapper = document.querySelector('.list');
    this._controllForm = document.body.querySelector('#ctrlForm');
    this._inputElem = document.body.querySelector('#ctrlText');
    this._inputValue = this._inputElem.value;
    this._dateShowingParagraph = document.body.querySelector('#ctrlDate');
    this._calendarElement = document.body.querySelector('#myCalendar');
  }

  ToDoController.prototype.setSelectedData = function (date, elem) {
    this._currentSelectedDate = date;
    this._currentSelectedCalendarElement = elem;

    var formattedToUser = ' ' + this._currentSelectedDate.toString().slice(4, 15);

    this._dateShowingParagraph.innerText = formattedToUser;
    this.renderTasksIndicators(this._toDoStorage);
    transferValidFunction.saveDateStorageInTransfer(this._currentSelectedDate, this._toDoStorage);
    this.renderListOfTasks(this._toDoStorage, this._currentSelectedDate);
  };

  ToDoController.prototype.renderTasksIndicators = function (storage) {
    var daySet = document.body.querySelector('.vanilla-calendar-body').querySelectorAll('span');
    console.log('Hi, i`m render!');

    function converteToDate(d) {
      var dateList = d.split(' ');
      return new Date(Date.parse(dateList[1] + " " + dateList[2] + ", " + dateList[3]));
    }

    for (var key in daySet) {
      var currentDateDiv = daySet[key].parentElement;
      var currentDateText = void 0;

      if (currentDateDiv) {
        currentDateText = currentDateDiv.dataset.calendarDate;
      } else {
        break;
      }

      var currentSpanDate = converteToDate(currentDateText);
      var spanDate = +daySet[key].innerText;
      if (isNaN(spanDate)) return;

      for (var key2 in storage) {
        var currentDate = new Date(+key2).getDate();

        if (spanDate == currentDate) {
          daySet[key].classList.add("vanilla-calendar-date--has-task");
        } else {
          if (!((+currentSpanDate).toString() in storage)) {
            daySet[key].classList.remove("vanilla-calendar-date--has-task");
          }
        }
      }
    }
  };

  ToDoController.prototype.renderListOfTasks = function (storage, current) {
    var _this = this;

    this._listElementWrapper.innerHTML = '';

    if (!((+current).toString() in storage)) {
      this._listElementWrapper.innerHTML = '<h3 style="text-align: center;">You have not tasks for this day yet!</h3>';
      return;
    }

    for (var key in storage) {
      if (key == (+current).toString()) {
        storage[key].forEach(function (item) {
          var newL = document.createElement('list-element');
          if (item.isDone) newL.classList.add('list__item_checked');
          newL.innerHTML = "<span slot=\"user-task\" " + item.isDone + ">" + item.taskText + "</span>";

          _this._listElementWrapper.append(newL);
        });
      }
    }
  };

  ToDoController.prototype.saveTask = function (elem) {
    console.log("save");

    if (this._toDoStorage[(+this._currentSelectedDate).toString()]) {
      this._toDoStorage[(+this._currentSelectedDate).toString()].push({
        isDone: elem.classList.contains('list__item_checked') ? true : false,
        taskText: this._inputValue
      });

      console.log(elem.classList);
    } else {
      this._toDoStorage[(+this._currentSelectedDate).toString()] = [{
        isDone: false,
        taskText: this._inputValue
      }];
    }
  };

  ToDoController.prototype.startSession = function () {
    if (!localStorage.getItem('_toDoStorage')) {
      this._toDoStorage = {};
      this.renderTasksIndicators(this._toDoStorage);
    }

    if (localStorage.getItem('_toDoStorage')) {
      this._toDoStorage = JSON.parse(localStorage.getItem('toDoStorage'));
      this.renderTasksIndicators(this._toDoStorage);
    }

    this._controllForm.addEventListener('submit', function (event) {
      event.preventDefault();
      transferValidFunction.transfer();
    });
  };

  return ToDoController;
}();

var MessageController = function () {
  function MessageController() {
    this._snackBar = document.body.querySelector('#snackBar');
  }

  MessageController.prototype.show = function (str) {
    var _this = this;

    this._snackBar.innerHTML = str;
    this._snackBar.className = 'show';
    setTimeout(function () {
      return _this._snackBar.classList.remove('show');
    }, 3000);
  };

  return MessageController;
}();

var TransferToElementConTroller = function (_super) {
  __extends(TransferToElementConTroller, _super);

  function TransferToElementConTroller() {
    return _super.call(this) || this;
  }

  TransferToElementConTroller.prototype.transfer = function () {
    this._inputValue = this._inputElem.value;

    if (!this._inputValue) {
      showMessage.show('You need to enter correctly value!');
      return;
    }

    if (this._dateShowingParagraph.innerHTML == 'Chose the date pls!') {
      showMessage.show('You need to chose a date!');
      return;
    }

    var newL = document.createElement('list-element');
    newL.innerHTML = "<span slot=\"user-task\">" + this._inputValue + "</span>";
    this.saveTask(newL);

    this._listElementWrapper.append(newL);

    this._inputElem.value = '';
  };

  TransferToElementConTroller.prototype.saveDateStorageInTransfer = function (dt, st) {
    this._currentSelectedDate = dt;
    this._toDoStorage = st;
  };

  return TransferToElementConTroller;
}(ToDoController);

var InstantIndicatorController = function (_super) {
  __extends(InstantIndicatorController, _super);

  function InstantIndicatorController() {
    return _super.call(this) || this;
  }

  InstantIndicatorController.prototype.startListenList = function (handler, storage) {
    this._listElementWrapper.addEventListener('DOMSubtreeModified', function () {
      handler(storage);
    });
  };

  return InstantIndicatorController;
}(ToDoController);

var showMessage = new MessageController();
var transferValidFunction = new TransferToElementConTroller();
var sessionController = new ToDoController();
var instantIncicator = new InstantIndicatorController();
var myCalendar = new VanillaCalendar({
  selector: "#myCalendar",
  pastDates: false,
  onSelect: function onSelect(data, elem) {
    console.log('select');

    function converteToDate(d) {
      var dateList = d.date.split(' ');
      return new Date(Date.parse(dateList[1] + " " + dateList[2] + ", " + dateList[3]));
    }

    var selectedDate = converteToDate(data);
    sessionController.setSelectedData(selectedDate, elem);
  }
});
sessionController.startSession();
instantIncicator.startListenList(sessionController.renderTasksIndicators, sessionController._toDoStorage);
var h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
  console.log(sessionController._toDoStorage);
});
},{}],"src/js/main.js":[function(require,module,exports) {
"use strict";

require("../styles/main.scss");

require("./function");
},{"../styles/main.scss":"src/styles/main.scss","./function":"src/js/function.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56029" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/main.js"], null)
//# sourceMappingURL=/main.c48f6146.js.map