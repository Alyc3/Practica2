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

/***/ "(app-pages-browser)/./src/app/productos/page.jsx":
/*!************************************!*\
  !*** ./src/app/productos/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Producto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_sideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sideBar */ \"(app-pages-browser)/./src/app/components/sideBar.jsx\");\n/* harmony import */ var _hooks_Service_producto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/Service_producto */ \"(app-pages-browser)/./src/hooks/Service_producto.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//import Menu from \"../components/menu/menu.jsx\";\nfunction Producto() {\n    _s();\n    let [productosList, setProductosList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_hooks_Service_producto__WEBPACK_IMPORTED_MODULE_4__.productos)().then((info)=>{\n            if (info.code == \"200\") {\n                setProductosList(info.datos);\n                console.log(info.datos);\n            } else {\n                console.error(info.datos.error);\n            }\n        });\n    }, []);\n    const filteredProductos = productosList.filter((productos)=>{\n        var _productos_nombre, _productos_precio;\n        return ((_productos_nombre = productos.nombre) === null || _productos_nombre === void 0 ? void 0 : _productos_nombre.toLowerCase().includes(searchTerm.toLowerCase())) || ((_productos_precio = productos.precio) === null || _productos_precio === void 0 ? void 0 : _productos_precio.toString().toLowerCase().includes(searchTerm.toLowerCase()));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            paddingLeft: \"300px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sideBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container text-center mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/producto/new\",\n                            style: {\n                                margin: \"15px\",\n                                marginRight: \"265px\",\n                                background: \"#800020\",\n                                border: \"#800020\",\n                                color: \"#ffffff\"\n                            },\n                            className: \"btn btn-info\",\n                            children: \"Agregar Lote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"space-between\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Buscar...\",\n                                    style: {\n                                        width: \"85%\"\n                                    },\n                                    value: searchTerm,\n                                    onChange: (e)=>setSearchTerm(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    style: {\n                                        width: \"20%\",\n                                        marginLeft: \"5%\"\n                                    },\n                                    children: \"Buscar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container-fluid\",\n                        style: {\n                            marginTop: \"2%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"table table-hover\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"table-dark\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Nro\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Producto\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Descripcion\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Precio\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Stock\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Acciones\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: filteredProductos.map((productos, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: index + 1\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: productos.nombre\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: productos.descripcion\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: productos.precio\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: productos.stock\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        href: \"/lote/\".concat(lote.external_id),\n                                                        className: \"btn btn-primary\",\n                                                        children: \"Editar\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            height: \"500px\",\n                            marginTop: \"2%\",\n                            border: \"1px solid #000\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\page.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Producto, \"l4wlKNYdEXHRQj9DhWpkwTSHrUA=\");\n_c = Producto;\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdG9zL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNmO0FBQ2U7QUFDUztBQUNyRCxpREFBaUQ7QUFFbEMsU0FBU0s7O0lBQ3BCLElBQUksQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsSUFBSSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNWSSxrRUFBU0EsR0FBR00sSUFBSSxDQUFDLENBQUNDO1lBQ2QsSUFBSUEsS0FBS0MsSUFBSSxJQUFJLE9BQU87Z0JBQ3BCTCxpQkFBaUJJLEtBQUtFLEtBQUs7Z0JBQzNCQyxRQUFRQyxHQUFHLENBQUNKLEtBQUtFLEtBQUs7WUFDMUIsT0FBTztnQkFDSEMsUUFBUUUsS0FBSyxDQUFDTCxLQUFLRSxLQUFLLENBQUNHLEtBQUs7WUFDbEM7UUFDRDtJQUNILEdBQUcsRUFBRTtJQUVMLE1BQU1DLG9CQUFvQlgsY0FBY1ksTUFBTSxDQUFDZCxDQUFBQTtZQUMzQ0EsbUJBQ0FBO2VBREFBLEVBQUFBLG9CQUFBQSxVQUFVZSxNQUFNLGNBQWhCZix3Q0FBQUEsa0JBQWtCZ0IsV0FBVyxHQUFHQyxRQUFRLENBQUNiLFdBQVdZLFdBQVcsVUFDL0RoQixvQkFBQUEsVUFBVWtCLE1BQU0sY0FBaEJsQix3Q0FBQUEsa0JBQWtCbUIsUUFBUSxHQUFHSCxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2IsV0FBV1ksV0FBVzs7SUFJOUUscUJBQ0ksOERBQUNJO1FBQUlDLE9BQU87WUFBQ0MsYUFBWTtRQUFPOzswQkFDNUIsOERBQUN2QiwyREFBT0E7Ozs7OzBCQUNSLDhEQUFDd0I7Z0JBQUtDLFdBQVU7O2tDQUNaLDhEQUFDSjt3QkFBSUksV0FBVTtrQ0FDWCw0RUFBQzFCLGlEQUFJQTs0QkFBQzJCLE1BQUs7NEJBQWdCSixPQUFPO2dDQUFDSyxRQUFRO2dDQUFRQyxhQUFhO2dDQUFTQyxZQUFZO2dDQUFXQyxRQUFRO2dDQUFXQyxPQUFPOzRCQUFTOzRCQUFHTixXQUFVO3NDQUFlOzs7Ozs7Ozs7OztrQ0FFbkssOERBQUNKO3dCQUFJSSxXQUFVO2tDQUNYLDRFQUFDSjs0QkFBSUMsT0FBTztnQ0FBRVUsU0FBUztnQ0FBUUMsZ0JBQWdCOzRCQUFnQjs7OENBQzNELDhEQUFDQztvQ0FDR0MsTUFBSztvQ0FDTFYsV0FBVTtvQ0FDVlcsYUFBWTtvQ0FDWmQsT0FBTzt3Q0FBRWUsT0FBTztvQ0FBTTtvQ0FDdEJDLE9BQU9qQztvQ0FDUGtDLFVBQVUsQ0FBQ0MsSUFBTWxDLGNBQWNrQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4Q0FFakQsOERBQUNJO29DQUFPakIsV0FBVTtvQ0FBa0JILE9BQU87d0NBQUVlLE9BQU87d0NBQU9NLFlBQVk7b0NBQUs7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd2Riw4REFBQ3RCO3dCQUFJSSxXQUFVO3dCQUFrQkgsT0FBTzs0QkFBRXNCLFdBQVc7d0JBQUs7a0NBQ3RELDRFQUFDQzs0QkFBTXBCLFdBQVU7OzhDQUNiLDhEQUFDcUI7b0NBQU1yQixXQUFVOzhDQUNiLDRFQUFDc0I7OzBEQUNHLDhEQUFDQzswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQTswREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR1osOERBQUNDOzhDQUNBbkMsa0JBQWtCb0MsR0FBRyxDQUFDLENBQUNqRCxXQUFXa0Qsc0JBQzNCLDhEQUFDSjs7OERBQ0csOERBQUNLOzhEQUFJRCxRQUFROzs7Ozs7OERBQ2IsOERBQUNDOzhEQUFJbkQsVUFBVWUsTUFBTTs7Ozs7OzhEQUNyQiw4REFBQ29DOzhEQUFJbkQsVUFBVW9ELFdBQVc7Ozs7Ozs4REFDMUIsOERBQUNEOzhEQUFJbkQsVUFBVWtCLE1BQU07Ozs7Ozs4REFDckIsOERBQUNpQzs4REFBSW5ELFVBQVVxRCxLQUFLOzs7Ozs7OERBRXBCLDhEQUFDRjs4REFFRyw0RUFBQ3JELGlEQUFJQTt3REFBQzJCLE1BQU0sU0FBMEIsT0FBakI2QixLQUFLQyxXQUFXO3dEQUFJL0IsV0FBVTtrRUFBa0I7Ozs7Ozs7Ozs7OzsyQ0FUcEUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWdCekIsOERBQUM5Qjt3QkFBSUMsT0FBTzs0QkFBRW1DLFFBQVE7NEJBQVNiLFdBQVc7NEJBQU1kLFFBQVE7d0JBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekY7R0E1RXdCNUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0b3MvcGFnZS5qc3g/Nzk0NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlQmFyJztcclxuaW1wb3J0IHsgcHJvZHVjdG9zIH0gZnJvbSAnQC9ob29rcy9TZXJ2aWNlX3Byb2R1Y3RvJztcclxuLy9pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZW51L21lbnUuanN4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0bygpIHtcclxuICAgIGxldCBbcHJvZHVjdG9zTGlzdCwgc2V0UHJvZHVjdG9zTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBsZXQgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9kdWN0b3MoKS50aGVuKChpbmZvKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZm8uY29kZSA9PSAnMjAwJykge1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0b3NMaXN0KGluZm8uZGF0b3MpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvLmRhdG9zKSBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGluZm8uZGF0b3MuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdG9zID0gcHJvZHVjdG9zTGlzdC5maWx0ZXIocHJvZHVjdG9zID0+IFxyXG4gICAgICAgIHByb2R1Y3Rvcy5ub21icmU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fCBcclxuICAgICAgICBwcm9kdWN0b3MucHJlY2lvPy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjMwMHB4XCJ9fT5cclxuICAgICAgICAgICAgPFNpZGViYXIvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdG8vbmV3XCIgc3R5bGU9e3ttYXJnaW46IFwiMTVweFwiLCBtYXJnaW5SaWdodDogXCIyNjVweFwiLCBiYWNrZ3JvdW5kOiBcIiM4MDAwMjBcIiwgYm9yZGVyOiBcIiM4MDAwMjBcIiwgY29sb3I6IFwiI2ZmZmZmZlwifX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+QWdyZWdhciBMb3RlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2Nhci4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI4NSVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjIwJVwiLCBtYXJnaW5MZWZ0OiBcIjUlXCIgfX0+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0YWJsZS1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5ybzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb2R1Y3RvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcGNpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmVjaW88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjY2lvbmVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkUHJvZHVjdG9zLm1hcCgocHJvZHVjdG9zLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0b3Mubm9tYnJlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdG9zLmRlc2NyaXBjaW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdG9zLnByZWNpb308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb2R1Y3Rvcy5zdG9ja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFqdXN0YSBlc3RhIHBhcnRlIHNlZ8O6biBsYXMgYWNjaW9uZXMgcXVlIGRlc2VlcyBwZXJtaXRpciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbG90ZS8ke2xvdGUuZXh0ZXJuYWxfaWR9YH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+RWRpdGFyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI1MDBweFwiLCBtYXJnaW5Ub3A6IFwiMiVcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjMDAwXCIgfX0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiU2lkZWJhciIsInByb2R1Y3RvcyIsIlByb2R1Y3RvIiwicHJvZHVjdG9zTGlzdCIsInNldFByb2R1Y3Rvc0xpc3QiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInRoZW4iLCJpbmZvIiwiY29kZSIsImRhdG9zIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZmlsdGVyZWRQcm9kdWN0b3MiLCJmaWx0ZXIiLCJub21icmUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHJlY2lvIiwidG9TdHJpbmciLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdMZWZ0IiwibWFpbiIsImNsYXNzTmFtZSIsImhyZWYiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwid2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaW5kZXgiLCJ0ZCIsImRlc2NyaXBjaW9uIiwic3RvY2siLCJsb3RlIiwiZXh0ZXJuYWxfaWQiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/productos/page.jsx\n"));

/***/ })

});