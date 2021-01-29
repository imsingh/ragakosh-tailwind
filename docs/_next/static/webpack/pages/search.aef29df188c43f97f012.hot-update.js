webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/_menu.js":
/*!************************!*\
  !*** ./pages/_menu.js ***!
  \************************/
/*! exports provided: MenuItem, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _jsxFileName = \"/home/imsingh/Develop/ragakosh-tailwind/pages/_menu.js\",\n    _s = $RefreshSig$();\n\n\nfunction MenuItem(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    \"class\": \"p-5\",\n    children: props === null || props === void 0 ? void 0 : props.label\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n_c = MenuItem;\nfunction Menu(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      menuVisible = _useState[0],\n      setMenuVisible = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setMenuVisible(props === null || props === void 0 ? void 0 : props.visible);\n  }, [props === null || props === void 0 ? void 0 : props.visible]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": !menuVisible ? 'invisible' : 'visible z-40 h-screen w-full flex flex-col text-white font-bold fixed z-1 left-0 top-0 bg-black overflow-x-hidden',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"relative flex flex-row-reverse p-10\",\n        onClick: props.onClose,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          \"class\": \"w-12 h-12\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 20 20\",\n          fill: \"currentColor\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            \"stroke-linecap\": \"round\",\n            \"stroke-linejoin\": \"round\",\n            \"stroke-width\": \"2\",\n            \"fill-rule\": \"evenodd\",\n            d: \"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z\",\n            \"clip-rule\": \"evenodd\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"flex flex-col h-full -mt-10 justify-center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          \"class\": \"relative text-4xl text-center leading-10 capitalize\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            \"class\": \"p-5\",\n            children: \"Search\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            \"class\": \"p-5\",\n            children: \"Sargam\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            \"class\": \"p-5\",\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            \"class\": \"p-5\",\n            children: \"Help\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            \"class\": \"p-5\",\n            children: \"Contact\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Menu, \"B+X+ni/q2vsNKkzpi+aS0Xm8nGk=\");\n\n_c2 = Menu;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MenuItem\");\n$RefreshReg$(_c2, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX21lbnUuanM/ZDUzMiJdLCJuYW1lcyI6WyJNZW51SXRlbSIsInByb3BzIiwibGFiZWwiLCJNZW51IiwidXNlU3RhdGUiLCJtZW51VmlzaWJsZSIsInNldE1lbnVWaXNpYmxlIiwidXNlRWZmZWN0IiwidmlzaWJsZSIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQzlCLHNCQUNFO0FBQUksYUFBTSxLQUFWO0FBQUEsY0FBaUJBLEtBQWpCLGFBQWlCQSxLQUFqQix1QkFBaUJBLEtBQUssQ0FBRUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7S0FKZUYsUTtBQU1ULFNBQVNHLElBQVQsQ0FBY0YsS0FBZCxFQUFxQjtBQUFBOztBQUFBLGtCQUNZRyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNuQkMsV0FEbUI7QUFBQSxNQUNOQyxjQURNOztBQUUxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGtCQUFjLENBQUNMLEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFFTyxPQUFSLENBQWQ7QUFDRCxHQUZRLEVBRU4sQ0FBQ1AsS0FBRCxhQUFDQSxLQUFELHVCQUFDQSxLQUFLLENBQUVPLE9BQVIsQ0FGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQU8sQ0FBQ0gsV0FBRCxHQUFlLFdBQWYsR0FBNkIsbUhBQXpDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBTSxxQ0FBWDtBQUFpRCxlQUFPLEVBQUVKLEtBQUssQ0FBQ1EsT0FBaEU7QUFBQSwrQkFDRTtBQUFLLG1CQUFNLFdBQVg7QUFBdUIsZUFBSyxFQUFDLDRCQUE3QjtBQUEwRCxpQkFBTyxFQUFDLFdBQWxFO0FBQThFLGNBQUksRUFBQyxjQUFuRjtBQUFBLGlDQUNFO0FBQU0sOEJBQWUsT0FBckI7QUFBNkIsK0JBQWdCLE9BQTdDO0FBQXFELDRCQUFhLEdBQWxFO0FBQXNFLHlCQUFVLFNBQWhGO0FBQTBGLGFBQUMsRUFBQyx5TkFBNUY7QUFBc1QseUJBQVU7QUFBaFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFLLGlCQUFNLDRDQUFYO0FBQUEsK0JBQ0U7QUFBSSxtQkFBTSxxREFBVjtBQUFBLGtDQUNFO0FBQUkscUJBQU0sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUkscUJBQU0sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUkscUJBQU0sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQUlFO0FBQUkscUJBQU0sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUkscUJBQU0sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvQkQ7O0dBMUJlTixJOztNQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvX21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVJdGVtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzPVwicC01XCI+e3Byb3BzPy5sYWJlbH08L2xpPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIGNvbnN0IFttZW51VmlzaWJsZSwgc2V0TWVudVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1lbnVWaXNpYmxlKHByb3BzPy52aXNpYmxlKVxuICB9LCBbcHJvcHM/LnZpc2libGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzPXshbWVudVZpc2libGUgPyAnaW52aXNpYmxlJyA6ICd2aXNpYmxlIHotNDAgaC1zY3JlZW4gdy1mdWxsIGZsZXggZmxleC1jb2wgdGV4dC13aGl0ZSBmb250LWJvbGQgZml4ZWQgei0xIGxlZnQtMCB0b3AtMCBiZy1ibGFjayBvdmVyZmxvdy14LWhpZGRlbid9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgZmxleCBmbGV4LXJvdy1yZXZlcnNlIHAtMTBcIiBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfT5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwidy0xMiBoLTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNOC43MDcgNy4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRMOC41ODYgMTBsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRMMTAgMTEuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRMMTEuNDE0IDEwbDEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEwIDguNTg2IDguNzA3IDcuMjkzelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaC1mdWxsIC1tdC0xMCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cInJlbGF0aXZlIHRleHQtNHhsIHRleHQtY2VudGVyIGxlYWRpbmctMTAgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicC01XCI+U2VhcmNoPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtNVwiPlNhcmdhbTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwLTVcIj5BYm91dDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwLTVcIj5IZWxwPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtNVwiPkNvbnRhY3Q8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_menu.js\n");

/***/ })

})