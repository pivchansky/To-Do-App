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
  "pDEu": [function (require, module, exports) {
    var t = function () {
      return function (t) {
        function a(t, a, e) {
          t && (t.attachEvent ? t.attachEvent("on" + a, e) : t.addEventListener(a, e));
        }

        function e(t, a, e) {
          t && (t.detachEvent ? t.detachEvent("on" + a, e) : t.removeEventListener(a, e));
        }

        var n = {
          selector: null,
          datesFilter: !1,
          pastDates: !0,
          availableWeekDays: [],
          availableDates: [],
          date: new Date(),
          todaysDate: new Date(),
          button_prev: null,
          button_next: null,
          month: null,
          month_label: null,
          onSelect: function onSelect(t, a) {},
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          shortWeekday: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        };

        for (var l in t) {
          n.hasOwnProperty(l) && (n[l] = t[l]);
        }

        var d = document.querySelector(n.selector);

        if (d) {
          var r = function r(t) {
            var a = document.createElement("div"),
                e = document.createElement("span");
            e.innerHTML = t.getDate(), a.className = "vanilla-calendar-date", a.setAttribute("data-calendar-date", t);

            var l = function l(t) {
              var a = t.getDay() - 1;
              return -1 === a && (a = 6), a;
            },
                d = n.availableWeekDays.filter(function (a) {
              return a.day === l(t) || a.day === ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"][l(t)];
            }),
                r = n.availableDates.filter(function (a) {
              return a.date === t.getFullYear() + "-" + String(t.getMonth() + 1).padStart("2", 0) + "-" + String(t.getDate()).padStart("2", 0);
            });

            1 === t.getDate() && (a.style.marginLeft = 14.28 * l(t) + "%"), n.date.getTime() <= n.todaysDate.getTime() - 1 && !n.pastDates ? a.classList.add("vanilla-calendar-date--disabled") : n.datesFilter ? d.length ? (a.classList.add("vanilla-calendar-date--active"), a.setAttribute("data-calendar-data", JSON.stringify(d[0])), a.setAttribute("data-calendar-status", "active")) : r.length ? (a.classList.add("vanilla-calendar-date--active"), a.setAttribute("data-calendar-data", JSON.stringify(r[0])), a.setAttribute("data-calendar-status", "active")) : a.classList.add("vanilla-calendar-date--disabled") : (a.classList.add("vanilla-calendar-date--active"), a.setAttribute("data-calendar-status", "active")), t.toString() === n.todaysDate.toString() && a.classList.add("vanilla-calendar-date--today"), a.appendChild(e), n.month.appendChild(a);
          },
              c = function c() {
            d.querySelectorAll(".vanilla-calendar-date").forEach(function (t) {
              t.addEventListener("click", function () {
                document.querySelectorAll(".vanilla-calendar-date--selected").forEach(function (t) {
                  t.classList.remove("vanilla-calendar-date--selected");
                });
                var t = this.dataset,
                    a = {};
                t.calendarDate && (a.date = t.calendarDate), t.calendarData && (a.data = JSON.parse(t.calendarData)), n.onSelect(a, this), this.classList.add("vanilla-calendar-date--selected");
              });
            });
          },
              s = function s() {
            u();

            for (var t = n.date.getMonth(); n.date.getMonth() === t;) {
              r(n.date), n.date.setDate(n.date.getDate() + 1);
            }

            n.date.setDate(1), n.date.setMonth(n.date.getMonth() - 1), n.month_label.innerHTML = n.months[n.date.getMonth()] + " " + n.date.getFullYear(), c();
          },
              o = function o() {
            n.date.setMonth(n.date.getMonth() - 1), s();
          },
              i = function i() {
            n.date.setMonth(n.date.getMonth() + 1), s();
          },
              u = function u() {
            n.month.innerHTML = "";
          };

          this.init = function () {
            document.querySelector(n.selector).innerHTML = '\n            <div class="vanilla-calendar-header">\n                <button type="button" class="vanilla-calendar-btn" data-calendar-toggle="previous"><svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path></svg></button>\n                <div class="vanilla-calendar-header__label" data-calendar-label="month"></div>\n                <button type="button" class="vanilla-calendar-btn" data-calendar-toggle="next"><svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></button>\n            </div>\n            <div class="vanilla-calendar-week"></div>\n            <div class="vanilla-calendar-body" data-calendar-area="month"></div>\n            ', n.button_prev = document.querySelector(n.selector + " [data-calendar-toggle=previous]"), n.button_next = document.querySelector(n.selector + " [data-calendar-toggle=next]"), n.month = document.querySelector(n.selector + " [data-calendar-area=month]"), n.month_label = document.querySelector(n.selector + " [data-calendar-label=month]"), n.date.setDate(1), s(), document.querySelector("".concat(n.selector, " .vanilla-calendar-week")).innerHTML = "\n                <span>".concat(n.shortWeekday[0], "</span>\n                <span>").concat(n.shortWeekday[1], "</span>\n                <span>").concat(n.shortWeekday[2], "</span>\n                <span>").concat(n.shortWeekday[3], "</span>\n                <span>").concat(n.shortWeekday[4], "</span>\n                <span>").concat(n.shortWeekday[5], "</span>\n                <span>").concat(n.shortWeekday[6], "</span>\n            "), a(n.button_prev, "click", o), a(n.button_next, "click", i);
          }, this.destroy = function () {
            e(n.button_prev, "click", o), e(n.button_next, "click", i), u(), document.querySelector(n.selector).innerHTML = "";
          }, this.reset = function () {
            this.destroy(), this.init();
          }, this.set = function (t) {
            for (var a in t) {
              n.hasOwnProperty(a) && (n[a] = t[a]);
            }

            s();
          }, this.init();
        }
      };
    }();

    window.VanillaCalendar = t;
  }, {}]
}, {}, ["pDEu"], null);