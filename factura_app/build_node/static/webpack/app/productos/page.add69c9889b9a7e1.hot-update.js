"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/productos/page",{

/***/ "(app-pages-browser)/./src/hooks/Service_producto.js":
/*!***************************************!*\
  !*** ./src/hooks/Service_producto.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buscar_lote: function() { return /* binding */ buscar_lote; },\n/* harmony export */   editar_Imagen: function() { return /* binding */ editar_Imagen; },\n/* harmony export */   guardaProducto: function() { return /* binding */ guardaProducto; },\n/* harmony export */   productos: function() { return /* binding */ productos; },\n/* harmony export */   subirImagen: function() { return /* binding */ subirImagen; },\n/* harmony export */   update_lote: function() { return /* binding */ update_lote; }\n/* harmony export */ });\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\nasync function productos() {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.GET)(\"producto\");\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function guardaProducto(data) {\n    let datos = null;\n    console.log(data);\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"/producto/guardarProducto/0361c0da-dd88-4343-be5f-25be6e965299\", data, token);\n        console.log(data);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function buscar_lote(token1, params) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.GET)(\"lote/\" + params.external);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function update_lote(data, params, token1) {\n    try {\n        return await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"lote/\" + params.external, data, token1);\n    } catch (error) {\n        console.error(error);\n        return null;\n    }\n}\nasync function subirImagen(data, token1) {\n    try {\n        return await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"/lote/subir_imagen_lote/<external_id>\", data, token1);\n    } catch (error) {\n        console.error(error);\n        return null;\n    }\n}\nasync function editar_Imagen(params, token1) {\n    let datos = null;\n    console.log(params);\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"/lote/subir_imagen_lote/\" + params.get(\"external_id\"), params, token1);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n// TODO agarrar errores\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9TZXJ2aWNlX3Byb2R1Y3RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDc0M7QUFFL0IsZUFBZUU7SUFDbEIsSUFBSUMsUUFBTztJQUNWLElBQUk7UUFDREEsUUFBUSxNQUFNSCxnREFBR0EsQ0FBQztJQUNyQixFQUFFLE9BQU9JLE9BQU87UUFDYkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxRQUFRLENBQUNDLElBQUk7UUFDL0IsT0FBTztZQUFDLFFBQU87UUFBRztJQUNyQjtJQUNDLE9BQU9MLE1BQU1LLElBQUk7QUFDdkI7QUFDTyxlQUFlQyxlQUFlRCxJQUFJO0lBQ3RDLElBQUlMLFFBQU87SUFDWEUsUUFBUUMsR0FBRyxDQUFDRTtJQUNYLElBQUk7UUFDREwsUUFBUSxNQUFNRixpREFBSUEsQ0FBQyxrRUFBaUVPLE1BQUtFO1FBQ3pGTCxRQUFRQyxHQUFHLENBQUNFO0lBQ2YsRUFBRSxPQUFPSixPQUFPO1FBQ2JDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsUUFBUSxDQUFDQyxJQUFJO1FBQy9CLE9BQU87WUFBQyxRQUFPO1FBQUc7SUFDckI7SUFDQyxPQUFPTCxNQUFNSyxJQUFJO0FBQ3RCO0FBQ08sZUFBZ0JHLFlBQVlELE1BQUssRUFBQ0UsTUFBTTtJQUM1QyxJQUFJVCxRQUFRO0lBQ1osSUFBSTtRQUVEQSxRQUFRLE1BQU1ILGdEQUFHQSxDQUFDLFVBQVFZLE9BQU9DLFFBQVE7SUFDNUMsRUFBRSxPQUFPVCxPQUFPO1FBQ2JDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsUUFBUSxDQUFDQyxJQUFJO1FBQy9CLE9BQU07WUFBQyxRQUFRO1FBQUc7SUFDckI7SUFDQSxPQUFPTCxNQUFNSyxJQUFJO0FBQ3BCO0FBR08sZUFBZU0sWUFBWU4sSUFBSSxFQUFDSSxNQUFNLEVBQUVGLE1BQUs7SUFDakQsSUFBSTtRQUNBLE9BQU8sTUFBTVQsaURBQUlBLENBQUMsVUFBUVcsT0FBT0MsUUFBUSxFQUFFTCxNQUFNRTtJQUNyRCxFQUFFLE9BQU9OLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU87SUFDWDtBQUNIO0FBRU8sZUFBZVcsWUFBWVAsSUFBSSxFQUFDRSxNQUFLO0lBQ3pDLElBQUk7UUFDQSxPQUFPLE1BQU1ULGlEQUFJQSxDQUFDLHlDQUF5Q08sTUFBTUU7SUFDckUsRUFBRSxPQUFPTixPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZCxPQUFPO0lBQ1g7QUFDSDtBQUVPLGVBQWVZLGNBQWNKLE1BQU0sRUFBQ0YsTUFBSztJQUNoRCxJQUFJUCxRQUFRO0lBQ1pFLFFBQVFDLEdBQUcsQ0FBQ007SUFDWixJQUFJO1FBQ0RULFFBQVEsTUFBTUYsaURBQUlBLENBQUMsNkJBQTJCVyxPQUFPSyxHQUFHLENBQUMsZ0JBQWVMLFFBQU9GO0lBQ2xGLEVBQ0EsT0FBT04sT0FBTztRQUNYQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFNO1lBQUMsUUFBUTtRQUFHO0lBQ3JCO0lBQ0EsT0FBT0wsTUFBTUssSUFBSTtBQUNqQix1QkFBdUI7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL1NlcnZpY2VfcHJvZHVjdG8uanM/YWUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtHRVQsUE9TVH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2R1Y3RvcygpIHtcclxuICAgIGxldCBkYXRvcyA9bnVsbDtcclxuICAgICB0cnkge1xyXG4gICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdwcm9kdWN0bycpO1xyXG4gICAgIH0gY2F0Y2ggKGVycm9yKSB7ICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7ICBcclxuICAgICAgICByZXR1cm4ge1wiY29kZVwiOjUwMH1cclxuICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRvcy5kYXRhO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBndWFyZGFQcm9kdWN0byhkYXRhKSB7XHJcbiAgIGxldCBkYXRvcyA9bnVsbDtcclxuICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHRyeSB7XHJcbiAgICAgICBkYXRvcyA9IGF3YWl0IFBPU1QoJy9wcm9kdWN0by9ndWFyZGFyUHJvZHVjdG8vMDM2MWMwZGEtZGQ4OC00MzQzLWJlNWYtMjViZTZlOTY1Mjk5JyxkYXRhLHRva2VuKTtcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyAgIFxyXG4gICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7ICBcclxuICAgICAgIHJldHVybiB7XCJjb2RlXCI6NTAwfVxyXG4gICAgfVxyXG4gICAgIHJldHVybiBkYXRvcy5kYXRhO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiAgYnVzY2FyX2xvdGUodG9rZW4scGFyYW1zKXtcclxuICAgbGV0IGRhdG9zID0gbnVsbDtcclxuICAgdHJ5IHtcclxuICAgXHJcbiAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdsb3RlLycrcGFyYW1zLmV4dGVybmFsKTtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHJldHVybntcImNvZGVcIjogNTAwfVxyXG4gICB9XHJcbiAgIHJldHVybiBkYXRvcy5kYXRhO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9sb3RlKGRhdGEscGFyYW1zLCB0b2tlbikge1xyXG4gICB0cnkge1xyXG4gICAgICAgcmV0dXJuIGF3YWl0IFBPU1QoJ2xvdGUvJytwYXJhbXMuZXh0ZXJuYWwsIGRhdGEsIHRva2VuKTtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgcmV0dXJuIG51bGw7XHJcbiAgIH1cclxufSAgICBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJpckltYWdlbihkYXRhLHRva2VuKXtcclxuICAgdHJ5IHtcclxuICAgICAgIHJldHVybiBhd2FpdCBQT1NUKCcvbG90ZS9zdWJpcl9pbWFnZW5fbG90ZS88ZXh0ZXJuYWxfaWQ+JywgZGF0YSwgdG9rZW4pO1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICByZXR1cm4gbnVsbDtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdGFyX0ltYWdlbihwYXJhbXMsdG9rZW4pe1xyXG5sZXQgZGF0b3MgPSBudWxsO1xyXG5jb25zb2xlLmxvZyhwYXJhbXMpXHJcbnRyeSB7XHJcbiAgIGRhdG9zID0gYXdhaXQgUE9TVCgnL2xvdGUvc3ViaXJfaW1hZ2VuX2xvdGUvJytwYXJhbXMuZ2V0KCdleHRlcm5hbF9pZCcpLHBhcmFtcyx0b2tlbik7XHJcbn1cclxuY2F0Y2ggKGVycm9yKSB7XHJcbiAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICByZXR1cm57XCJjb2RlXCI6IDUwMH1cclxufVxyXG5yZXR1cm4gZGF0b3MuZGF0YTtcclxuLy8gVE9ETyBhZ2FycmFyIGVycm9yZXNcclxufVxyXG4iXSwibmFtZXMiOlsiR0VUIiwiUE9TVCIsInByb2R1Y3RvcyIsImRhdG9zIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkYXRhIiwiZ3VhcmRhUHJvZHVjdG8iLCJ0b2tlbiIsImJ1c2Nhcl9sb3RlIiwicGFyYW1zIiwiZXh0ZXJuYWwiLCJ1cGRhdGVfbG90ZSIsInN1YmlySW1hZ2VuIiwiZWRpdGFyX0ltYWdlbiIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/Service_producto.js\n"));

/***/ })

});