"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "ryFC": [function (require, module, exports) {}, {}],
  "b1D7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.ListComponent = void 0;

    var t = function () {
      function t() {}

      return t.prototype.getElement = function (t) {
        this.taskContent = t.taskContent, this.isDone = t.isDone, this.randomID = t.randomID, this.taskDay = t.taskDay;
        var e = document.createElement("div");
        return e.classList.add("list__item"), e.setAttribute("data-task-id", this.randomID), this.isDone && e.classList.add("list__item_checked"), e.innerHTML = '\n            <p class="list__text">' + this.taskContent + '</p>\n            <button class="list__button">Delete</button>', e;
      }, t;
    }();

    exports.ListComponent = t;
  }, {}],
  "JqdR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.StorageController = exports.Storage = void 0;

    var t = function () {
      function t() {}

      return t.prototype.initStorage = function () {
        localStorage.getItem("toDoStorage") ? this.toDoStorage = JSON.parse(localStorage.getItem("toDoStorage")) : this.toDoStorage = {};
      }, t;
    }();

    exports.Storage = t;

    var o = function () {
      function t(t) {
        this.storage = t, this.storage = t;
      }

      return t.prototype.takeTaskById = function (t) {
        var o;

        for (var e in this.storage) {
          e.length < 13 || this.storage[e].forEach(function (e) {
            e.randomID == t && (o = e);
          });
        }

        return o || null;
      }, t.prototype.takeAllStorage = function () {
        return this.storage;
      }, t.prototype.saveTask = function (t) {
        this.storage[t.taskDay] ? this.storage[t.taskDay].push(t) : this.storage[t.taskDay] = [t];
      }, t.prototype.updateTask = function (t) {
        this.takeTaskById(t.randomID);
      }, t.prototype.deleteTask = function (t) {
        var o = this;
        this.takeTaskById(t);
        this.storage[this.takeTaskById(t).taskDay].forEach(function (e, a) {
          e.randomID == t && (o.storage[o.takeTaskById(t).taskDay].length > 1 ? delete o.storage[o.takeTaskById(t).taskDay][a] : delete o.storage[o.takeTaskById(t).taskDay]);
        });
      }, t.prototype.sendStorage = function () {
        localStorage.setItem("toDoStorage", JSON.stringify(this.storage));
      }, t;
    }();

    exports.StorageController = o;
  }, {}],
  "cpu6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.IdGenerator = void 0;

    var e = function () {
      function e() {}

      return e.prototype.generate = function (e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = 1679615), (Math.floor(Math.random() * (t - e + 1)) + e).toString(36);
      }, e;
    }();

    exports.IdGenerator = e;
  }, {}],
  "aIRW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.MessageClient = void 0;

    var e = function () {
      function e() {
        this._snackBar = document.body.querySelector("#snackBar");
      }

      return e.prototype.show = function (e) {
        var s = this;
        this._snackBar.innerHTML = e, this._snackBar.className = "show", setTimeout(function () {
          return s._snackBar.classList.remove("show");
        }, 3e3);
      }, e;
    }();

    exports.MessageClient = e;
  }, {}],
  "BGiW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Render = void 0;

    var t = function () {
      function t(t, e, a) {
        this.storage = t, this.domStorage = e, this.listComponent = a, this.storage = t, this.domStorage = e, this.listComponent = a;
      }

      return t.prototype.initRender = function () {
        var t,
            e = this;
        if (t = this.domStorage.currentDate ? " " + this.domStorage.currentDate.toString().slice(4, 15) : this.domStorage.datePerform.innerText, this.domStorage.datePerform.innerText = t, this.domStorage.listWrapper.innerHTML = "", (+this.domStorage.currentDate).toString() in this.storage) for (var a in this.storage) {
          a == (+this.domStorage.currentDate).toString() && this.storage[a].forEach(function (t) {
            e.domStorage.listWrapper.append(e.listComponent.getElement({
              taskContent: t.taskContent,
              isDone: t.isDone,
              randomID: t.randomID,
              taskDay: t.taskDay
            }));
          });
        } else this.domStorage.listWrapper.innerHTML = '<h3 style="text-align: center;">You have not tasks for this day yet!</h3>';
        var r,
            o = this.domStorage.calendarBody.querySelectorAll("span");

        for (var a in o) {
          var n = o[a].parentElement,
              s = void 0;
          if (!n) break;
          s = n.dataset.calendarDate;
          var i = (r = void 0, r = s.split(" "), new Date(Date.parse(r[1] + " " + r[2] + ", " + r[3]))),
              d = +o[a].innerText,
              l = i.getMonth(),
              h = i.getFullYear();
          if (isNaN(d)) return;

          for (var g in o[a].classList.remove("vanilla-calendar-date--has-task"), this.storage) {
            var p = new Date(+g).getDate(),
                c = new Date(+g).getMonth(),
                m = new Date(+g).getFullYear();
            d == p && l == c && h == m && o[a].classList.add("vanilla-calendar-date--has-task");
          }
        }
      }, t.prototype.cleanInput = function (t) {
        t.value = "";
      }, t;
    }();

    exports.Render = t;
  }, {}],
  "tPkt": [function (require, module, exports) {
    "use strict";

    var e = this && this.__extends || function () {
      var _e = function e(t, r) {
        return (_e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var r in t) {
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
        })(t, r);
      };

      return function (t, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function o() {
          this.constructor = t;
        }

        _e(t, r), t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, new o());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.EventClient = exports.ElementClient = void 0;

    var t = function () {
      function e() {
        this.calendarElment = document.querySelector("#myCalendar"), this.inputElement = document.querySelector("#ctrlText"), this.form = document.querySelector("#ctrlForm"), this.listWrapper = document.querySelector(".list"), this.datePerform = document.querySelector("#ctrlDate");
      }

      return e.prototype.setSelectedElements = function (e, t) {
        this.currentDate = e, this.currentCalendarPoint = t;
      }, e.prototype.setCalendarBody = function (e) {
        this.calendarBody = e;
      }, e;
    }();

    exports.ElementClient = t;

    var r = function (t) {
      function r(e, r, o, n, s, a) {
        var l = t.call(this) || this;
        return l.storageControllerClass = e, l.renderClass = r, l.messageController = o, l.domStorage = n, l.idGenerator = s, l.toDoStorage = a, l.storageControllerClass = e, l.renderClass = r, l.messageController = o, l.domStorage = n, l.idGenerator = s, l.toDoStorage = a, l;
      }

      return e(r, t), r.prototype.initFormEvents = function () {
        var e = this;
        this.form.addEventListener("submit", function (t) {
          t.preventDefault(), e.domStorage.inputElement.value ? "Chose the date pls!" != e.domStorage.datePerform.innerText ? (e.storageControllerClass.saveTask({
            taskContent: e.domStorage.inputElement.value,
            isDone: !1,
            randomID: e.idGenerator.generate(),
            taskDay: +e.domStorage.currentDate
          }), e.storageControllerClass.sendStorage(), e.renderClass.cleanInput(e.domStorage.inputElement), e.renderClass.initRender()) : e.messageController.show("You need to chose a date!") : e.messageController.show("You need to enter correctly value!");
        });
      }, r.prototype.initListEvents = function () {
        var e = this;
        this.renderClass.initRender(), this.listWrapper.addEventListener("click", function (t) {
          var r = t.target;

          if (r.matches(".list__button") && (e.storageControllerClass.deleteTask(r.parentElement.dataset.taskId), e.renderClass.initRender(), e.storageControllerClass.sendStorage()), r.closest("div").matches(".list__item")) {
            if (r.closest("div").classList.toggle("list__item_checked"), r.closest("div").classList.contains("list__item_checked")) {
              if (!(o = e.storageControllerClass.takeTaskById(r.dataset.taskId))) return;
              o.isDone = !0, e.storageControllerClass.updateTask(o);
            } else {
              var o;
              (o = e.storageControllerClass.takeTaskById(r.dataset.taskId)).isDone = !1, e.storageControllerClass.updateTask(o);
            }

            e.storageControllerClass.sendStorage();
          }
        });
      }, r.prototype.initCalendarChangeEvents = function () {
        var e = this;
        this.calendarElment.addEventListener("click", function (t) {
          var r = t.target;
          e.renderClass.initRender(), t.stopImmediatePropagation(), r.closest("div").matches(".vanilla-calendar-date--active") && e.inputElement.removeAttribute("disabled"), r.closest("div").matches(".vanilla-calendar-date--disabled") && e.inputElement.setAttribute("disabled", null);
        });
      }, r;
    }(t);

    exports.EventClient = r;
  }, {}],
  "wJs6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var e = require("./TS_modules/components"),
        t = require("./TS_modules/storage"),
        n = require("./TS_modules/idGenerator"),
        r = require("./TS_modules/messageClient"),
        o = require("./TS_modules/render"),
        a = require("./TS_modules/DOMClient"),
        l = new t.Storage();

    l.initStorage();
    var s = new t.StorageController(l.toDoStorage),
        i = new a.ElementClient(),
        d = new VanillaCalendar({
      selector: "#myCalendar",
      pastDates: !1,
      onSelect: function onSelect(e, t) {
        var n,
            r = (n = e.date.split(" "), new Date(Date.parse(n[1] + " " + n[2] + ", " + n[3])));
        i.setSelectedElements(r, t);
      }
    });
    i.setCalendarBody(document.body.querySelector(".vanilla-calendar-body"));
    var u = new e.ListComponent(),
        S = new n.IdGenerator(),
        m = new r.MessageClient(),
        C = new o.Render(l.toDoStorage, i, u),
        c = new a.EventClient(s, C, m, i, S, l.toDoStorage);
    c.initFormEvents(), c.initListEvents(), c.initCalendarChangeEvents();
  }, {
    "./TS_modules/components": "b1D7",
    "./TS_modules/storage": "JqdR",
    "./TS_modules/idGenerator": "cpu6",
    "./TS_modules/messageClient": "aIRW",
    "./TS_modules/render": "BGiW",
    "./TS_modules/DOMClient": "tPkt"
  }],
  "aRYt": [function (require, module, exports) {
    "use strict";

    require("../styles/main.scss"), require("../../js/function");
  }, {
    "../styles/main.scss": "ryFC",
    "../../js/function": "wJs6"
  }]
}, {}, ["aRYt"], null);