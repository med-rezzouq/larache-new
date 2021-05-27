/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./assets/js/main.js":
      /*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
      /***/ () => {
        var headerMenu = document.querySelector(".header");
        var userIcon = document.getElementById("userIcon");
        var headerloginbutton = document.querySelector(".header-login-button");
        var flexnavlang = document.querySelector(".flex-nav-lang");
        var burgerMenu = document.querySelector(".flex-burger .btn-menu");
        var burgerMenuSpan = document.querySelector(".flex-burger .btn-menu");
        var closebtn = document.querySelector(".closebtn");
        var irchadlogo = document.querySelector(".irchad-logo");
        var irchadlogosticky = document.querySelector(".irchad-logo-sticky");
        var submenulist = document.querySelector(".sub-menu-list");
        var menus = document.querySelectorAll(".menu");
        var bottomArrow = document.getElementById("bottomArrow");
        var programmenav = document.querySelectorAll(".programme-nav");
        var contents = document.querySelectorAll(".content");
        programmenav.forEach(function (nav) {
          nav.addEventListener("click", function () {
            programmenav.forEach(function (programme) {
              programme.classList.remove("active-programme");
              programme.querySelectorAll("img").forEach(function (icon) {
                console.log(icon);
                if (icon.classList.contains("dnone")) {
                  icon.classList.remove("dnone");
                }
                if (icon.classList.contains("dnone")) {
                  icon.classList.remove("dnone");
                }
                if (
                  nav.getAttribute("data-id") ==
                  programme.getAttribute("data-id")
                ) {
                  nav.classList.add("active-programme");
                  if (icon.classList.contains("arrow-bottom")) {
                    icon.classList.remove("dnone");
                  }
                  if (icon.classList.contains("arrow-top")) {
                    icon.classList.add("dnone");
                  }
                } else {
                  if (icon.classList.contains("arrow-top")) {
                    icon.classList.remove("dnone");
                  }
                  if (icon.classList.contains("arrow-botom")) {
                    icon.classList.add("dnone");
                  }
                }
              });
              //this.classList.add("active-programme");
            });
            // nav.querySelectorAll("img").forEach(function (icons) {
            //   icons.classList.add("dnone");
            // });
            contents.forEach(function (content) {
              content.classList.remove("dnone");
              if (
                nav.getAttribute("data-id") ==
                content.getAttribute("data-content")
              ) {
                content.classList.remove("dnone");
              } else {
                content.classList.add("dnone");
              }
            });
          });
        });
        menus.forEach(function (menu) {
          menu.addEventListener("click", function () {
            this.querySelector(".sub-menu-list").classList.toggle("dnone");
          });
        });

        burgerMenu.addEventListener("click", function () {
          document.getElementById("mySidenav").style.width = "100%";
        });
        burgerMenuSpan.addEventListener("click", function () {
          document.getElementById("mySidenav").style.width = "100%";
        });
        closebtn.addEventListener("click", function () {
          document.getElementById("mySidenav").style.width = "0";
        });

        function hideCards() {
          document.querySelectorAll(".cardbody").forEach(function (card) {
            card.classList.remove("dblock");
            card.classList.remove("dnone");
            card.classList.add("dnone");
          });
          document.querySelectorAll(".minusicon").forEach(function (minus) {
            var p = minus.previousElementSibling;
            p.classList.remove("dnone");
            p.classList.remove("dblock");
            p.classList.add("dblock");
            minus.classList.remove("dblock");
            minus.classList.remove("dnone");
            minus.classList.add("dnone");
          });
        }

        document.querySelectorAll(".plusicon").forEach(function (plus) {
          plus.addEventListener("click", function () {
            hideCards();
            var o = plus.parentElement;
            var ms = plus.nextElementSibling;
            console.log(o);
            var m = o.nextElementSibling;
            plus.classList.remove("dblock");
            plus.classList.add("dnone");
            ms.classList.remove("dnone");
            ms.classList.remove("dblock");
            ms.classList.add("dblock");

            if (m.className.split(" ").includes("cardbody")) {
              m.classList.remove("dblock");
              m.classList.add("dblock");
              m.classList.remove("dnone");
            }
          });
        });
        document.querySelectorAll(".minusicon").forEach(function (minus) {
          minus.addEventListener("click", function () {
            var o = minus.parentElement.nextElementSibling;
            var p = minus.previousElementSibling;
            minus.classList.remove("dblock");
            minus.classList.add("dnone");
            p.classList.remove("dnone");
            p.classList.add("dblock");

            if (o.className.split(" ").includes("cardbody")) {
              o.classList.add("dblock");
              o.classList.remove("dblock");
              o.classList.add("dnone");
            }
          });
        });
        window.addEventListener("scroll", function (event) {
          if (!stickyStart) {
            if (window.scrollY > 100) {
              headerMenu.classList.add("header-stick");
              headerMenu.classList.remove("header-before-stick");
              irchadlogosticky.classList.remove("dnone");
              irchadlogo.classList.add("dnone");
              headerloginbutton.classList.add("colored-btn");
              headerloginbutton.classList.remove("button-md");
              headerloginbutton.classList.add("white");
              headerloginbutton.classList.remove("purple");
              flexnavlang.classList.add("lang-resp");
              userIcon.style.fill = "#fff";

              bottomArrow.style.stroke = "#3c84f0";
            } else {
              headerMenu.classList.remove("header-stick");
              headerMenu.classList.add("header-before-stick");
              headerloginbutton.classList.remove("colored-btn");
              headerloginbutton.classList.add("button-md");
              headerloginbutton.classList.remove("white");
              headerloginbutton.classList.add("purple");
              flexnavlang.classList.remove("lang-resp");
              irchadlogosticky.classList.add("dnone");
              irchadlogo.classList.remove("dnone");
              userIcon.style.fill = "#7245b1";
              bottomArrow.style.stroke = "#fff";
            }
          } else {
            if (window.scrollY > 100) {
              headerMenu.classList.remove("header-stick-nojs");
            } else {
              headerMenu.classList.add("header-stick-nojs");
            }
          }
        });

        /***/
      },

    /***/ "./assets/sass/main.scss":
      /*!*******************************!*\
  !*** ./assets/sass/main.scss ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /******/ // the startup function
  /******/ // It's empty as some runtime module handles the default behavior
  /******/ __webpack_require__.x = (x) => {};
  /************************************************************************/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // Promise = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ "/public/build/css/main": 0,
      /******/
    };
    /******/
    /******/ var deferredModules = [
      /******/ ["./assets/js/main.js"],
      /******/ ["./assets/sass/main.scss"],
      /******/
    ];
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ var checkDeferredModules = (x) => {};
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime, executeModules] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0,
        resolves = [];
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ resolves.push(installedChunks[chunkId][0]);
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ for (moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/ if (runtime) runtime(__webpack_require__);
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ while (resolves.length) {
        /******/ resolves.shift()();
        /******/
      }
      /******/
      /******/ // add entry modules from loaded chunk to deferred list
      /******/ if (executeModules)
        deferredModules.push.apply(deferredModules, executeModules);
      /******/
      /******/ // run deferred modules when all chunks ready
      /******/ return checkDeferredModules();
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self[
      "webpackChunkirchad_laarach_lvl_mix"
    ] = self["webpackChunkirchad_laarach_lvl_mix"] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
    /******/
    /******/ function checkDeferredModulesImpl() {
      /******/ var result;
      /******/ for (var i = 0; i < deferredModules.length; i++) {
        /******/ var deferredModule = deferredModules[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 1; j < deferredModule.length; j++) {
          /******/ var depId = deferredModule[j];
          /******/ if (installedChunks[depId] !== 0) fulfilled = false;
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferredModules.splice(i--, 1);
          /******/ result = __webpack_require__(
            (__webpack_require__.s = deferredModule[0])
          );
          /******/
        }
        /******/
      }
      /******/ if (deferredModules.length === 0) {
        /******/ __webpack_require__.x();
        /******/ __webpack_require__.x = (x) => {};
        /******/
      }
      /******/ return result;
      /******/
    }
    /******/ var startup = __webpack_require__.x;
    /******/ __webpack_require__.x = () => {
      /******/ // reset startup function so it can be called again when more startup code is added
      /******/ __webpack_require__.x = startup || ((x) => {});
      /******/ return (checkDeferredModules = checkDeferredModulesImpl)();
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // run startup
  /******/ var __webpack_exports__ = __webpack_require__.x();
  /******/
  /******/
})();
