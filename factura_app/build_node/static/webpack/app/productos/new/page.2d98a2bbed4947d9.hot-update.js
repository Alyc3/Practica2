"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/productos/new/page",{

/***/ "(app-pages-browser)/./src/app/productos/new/page.jsx":
/*!****************************************!*\
  !*** ./src/app/productos/new/page.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ New; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ \"(app-pages-browser)/./node_modules/yup/index.esm.js\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hooks_connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/connection.js */ \"(app-pages-browser)/./src/hooks/connection.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _hooks_Service_lote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/Service_lote */ \"(app-pages-browser)/./src/hooks/Service_lote.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//import localStorage from 'local-storage';\n\n // Asegúrate de que esta importación sea correcta\n\n\nfunction New() {\n    var _errors_nombre, _errors_descripcion, _errors_precio, _errors_stock;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [externalId, setExternalId] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    let [lotesList, setLotesList] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    /* useEffect(() => {\r\n        const id = localStorage.getItem('external_id');\r\n        setExternalId(id);\r\n        console.log(id);\r\n    }, []); */ (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        (0,_hooks_Service_lote__WEBPACK_IMPORTED_MODULE_6__.lotes)().then((info)=>{\n            if (info.code == \"200\") {\n                setLotesList(info.datos);\n                console.log(info.datos);\n            } else {\n                console.error(info.datos.error);\n            }\n        });\n    }, []);\n    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({\n        nombre: yup__WEBPACK_IMPORTED_MODULE_1__.string().trim().required(\"El nombre del producto es necesario\"),\n        descripcion: yup__WEBPACK_IMPORTED_MODULE_1__.string().required(\"Descripcion del producto\"),\n        precio: yup__WEBPACK_IMPORTED_MODULE_1__.number().required(\"Precio del producto\"),\n        stock: yup__WEBPACK_IMPORTED_MODULE_1__.number().required(\"Stock de producto\")\n    });\n    const formOptions = {\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(validationSchema)\n    };\n    const { register, handleSubmit, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)(formOptions);\n    let { errors } = formState;\n    const sendInfo = async (data)=>{\n        console.log(data);\n        const dataToSend = {\n            nombre: data.nombre,\n            descripcion: data.descripcion,\n            precio: data.precio,\n            stock: data.stock\n        };\n        const info = await (0,_hooks_Service_lote__WEBPACK_IMPORTED_MODULE_6__.save_lot)(dataToSend, token);\n        console.log(info.dataToSend);\n        if (info && info.code == 200) {\n            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({\n                title: \"Registro de producto\",\n                text: \"Producto registrado correctamente\",\n                icon: \"success\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n            router.push(\"/producto\");\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({\n                title: \"Error\",\n                text: info && info.datos ? info.datos.error : \"Error desconocido\",\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container text-center mt-5\",\n        style: {\n            width: \"40%\",\n            border: \"2px solid white\",\n            background: \"white\",\n            padding: \"20px\",\n            borderRadius: \"15px\",\n            margin: \"auto\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(sendInfo),\n            className: \"form-signin\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    name: \"lote\",\n                    id: \"lote-select\",\n                    children: lotesList.map((lote)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: lote.id,\n                            children: lote.nombre\n                        }, lote.id, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"form-label\",\n                            children: \"Nombre de Producto:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            ...register(\"nombre\"),\n                            name: \"nombre\",\n                            placeholder: \"Nombre de producto\",\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this),\n                        errors.nombre && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_errors_nombre = errors.nombre) === null || _errors_nombre === void 0 ? void 0 : _errors_nombre.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 39\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"form-label\",\n                            children: \"Descripcion:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            ...register(\"descripcion\"),\n                            name: \"descripcion\",\n                            placeholder: \"Descripcion del producto\",\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this),\n                        errors.descripcion && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_errors_descripcion = errors.descripcion) === null || _errors_descripcion === void 0 ? void 0 : _errors_descripcion.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 44\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"form-label\",\n                            children: \"Precio:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            ...register(\"precio\"),\n                            name: \"precio\",\n                            placeholder: \"Precio del productos\",\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this),\n                        errors.precio && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_errors_precio = errors.precio) === null || _errors_precio === void 0 ? void 0 : _errors_precio.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 39\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"form-label\",\n                            children: \"Stock de producto:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            ...register(\"stock\"),\n                            name: \"stock\",\n                            placeholder: \"Stock del productos\",\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, this),\n                        errors.stock && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: (_errors_stock = errors.stock) === null || _errors_stock === void 0 ? void 0 : _errors_stock.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"w-100 btn btn-sm btn-primary\",\n                    children: \"Registrar Producto\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n            lineNumber: 83,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Edison\\\\Desktop\\\\PlataformasU1\\\\PlataformasU1\\\\Practica1\\\\factura_app\\\\src\\\\app\\\\productos\\\\new\\\\page.jsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_s(New, \"hmdY7rnQ4rBsmssVFVFTrnsLpn4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = New;\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdG9zL25ldy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMkI7QUFDMkI7QUFDWjtBQUNHO0FBQ2Y7QUFDRTtBQUNoQywyQ0FBMkM7QUFDRTtBQUNHLENBQUMsaURBQWlEO0FBQ3REO0FBRUE7QUFFN0IsU0FBU1c7UUE2RW9CQyxnQkFLS0EscUJBS0xBLGdCQUtEQTs7SUEzRnZDLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsSUFBSSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0M7Ozs7WUFJUSxHQUNSQyxnREFBU0EsQ0FBQztRQUNOSiwwREFBS0EsR0FBR1ksSUFBSSxDQUFDLENBQUNDO1lBQ1YsSUFBSUEsS0FBS0MsSUFBSSxJQUFJLE9BQU87Z0JBQ3BCSCxhQUFhRSxLQUFLRSxLQUFLO2dCQUN2QkMsUUFBUUMsR0FBRyxDQUFDSixLQUFLRSxLQUFLO1lBQzFCLE9BQU87Z0JBQ0hDLFFBQVFFLEtBQUssQ0FBQ0wsS0FBS0UsS0FBSyxDQUFDRyxLQUFLO1lBQ2xDO1FBQ0Q7SUFDSCxHQUFHLEVBQUU7SUFFVCxNQUFNQyxtQkFBbUJ6Qix1Q0FBVSxHQUFHMkIsS0FBSyxDQUFDO1FBQ3hDQyxRQUFRNUIsdUNBQVUsR0FBRzhCLElBQUksR0FBR0MsUUFBUSxDQUFDO1FBQ3JDQyxhQUFhaEMsdUNBQVUsR0FBRytCLFFBQVEsQ0FBQztRQUNuQ0UsUUFBUWpDLHVDQUFVLEdBQUcrQixRQUFRLENBQUM7UUFDOUJJLE9BQU9uQyx1Q0FBVSxHQUFHK0IsUUFBUSxDQUFDO0lBRWpDO0lBQ0EsTUFBTUssY0FBYztRQUFFQyxVQUFVcEMsb0VBQVdBLENBQUN3QjtJQUFrQjtJQUM5RCxNQUFNLEVBQUVhLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUUsR0FB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LDhEQUFDa0I7NEJBQU1DLE1BQUs7NEJBQVEsR0FBR2xDLFNBQVMsUUFBUTs0QkFBRTBCLE1BQUs7NEJBQVFTLGFBQVk7NEJBQXNCcEIsV0FBVTs7Ozs7O3dCQUNsR3pDLE9BQU91QixLQUFLLGtCQUFJLDhEQUFDaUI7dUNBQUt4QyxnQkFBQUEsT0FBT3VCLEtBQUssY0FBWnZCLG9DQUFBQSxjQUFjOEQsT0FBTzs7Ozs7Ozs7Ozs7OzhCQUdoRCw4REFBQzFCO29CQUFPd0IsTUFBSztvQkFBU25CLFdBQVU7OEJBQStCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkvRTtHQW5Hd0IxQzs7UUFDTEgsc0RBQVNBO1FBNEJzQk4sb0RBQU9BOzs7S0E3QmpDUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3Rvcy9uZXcvcGFnZS5qc3g/MjE0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IFBPU1QgfSBmcm9tICdAL2hvb2tzL2Nvbm5lY3Rpb24uanMnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuLy9pbXBvcnQgbG9jYWxTdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBsb3RlcyB9IGZyb20gJ0AvaG9va3MvU2VydmljZV9sb3RlJztcclxuaW1wb3J0IHsgc2F2ZV9sb3QgfSBmcm9tICdAL2hvb2tzL1NlcnZpY2VfbG90ZSc7IC8vIEFzZWfDunJhdGUgZGUgcXVlIGVzdGEgaW1wb3J0YWNpw7NuIHNlYSBjb3JyZWN0YVxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ldygpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2V4dGVybmFsSWQsIHNldEV4dGVybmFsSWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgbGV0IFtsb3Rlc0xpc3QsIHNldExvdGVzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLyogdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHRlcm5hbF9pZCcpO1xyXG4gICAgICAgIHNldEV4dGVybmFsSWQoaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIH0sIFtdKTsgKi9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG90ZXMoKS50aGVuKChpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLmNvZGUgPT0gJzIwMCcpIHtcclxuICAgICAgICAgICAgICAgIHNldExvdGVzTGlzdChpbmZvLmRhdG9zKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8uZGF0b3MpIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihpbmZvLmRhdG9zLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICBub21icmU6IFl1cC5zdHJpbmcoKS50cmltKCkucmVxdWlyZWQoJ0VsIG5vbWJyZSBkZWwgcHJvZHVjdG8gZXMgbmVjZXNhcmlvJyksXHJcbiAgICAgICAgZGVzY3JpcGNpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRGVzY3JpcGNpb24gZGVsIHByb2R1Y3RvJyksXHJcbiAgICAgICAgcHJlY2lvOiBZdXAubnVtYmVyKCkucmVxdWlyZWQoJ1ByZWNpbyBkZWwgcHJvZHVjdG8nKSxcclxuICAgICAgICBzdG9jazogWXVwLm51bWJlcigpLnJlcXVpcmVkKCdTdG9jayBkZSBwcm9kdWN0bycpLFxyXG5cclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybU9wdGlvbnMgPSB7IHJlc29sdmVyOiB5dXBSZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKSB9O1xyXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oZm9ybU9wdGlvbnMpO1xyXG4gICAgbGV0IHsgZXJyb3JzIH0gPSBmb3JtU3RhdGU7XHJcbiAgICBcclxuICAgIGNvbnN0IHNlbmRJbmZvID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhVG9TZW5kID0ge1xyXG4gICAgICAgICAgICBub21icmU6IGRhdGEubm9tYnJlLFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbjogZGF0YS5kZXNjcmlwY2lvbixcclxuICAgICAgICAgICAgcHJlY2lvOiBkYXRhLnByZWNpbyxcclxuICAgICAgICAgICAgc3RvY2s6IGRhdGEuc3RvY2tcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgc2F2ZV9sb3QoZGF0YVRvU2VuZCwgdG9rZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8uZGF0YVRvU2VuZCk7XHJcbiAgICAgICAgaWYgKGluZm8gJiYgaW5mby5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlZ2lzdHJvIGRlIHByb2R1Y3RvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlByb2R1Y3RvIHJlZ2lzdHJhZG8gY29ycmVjdGFtZW50ZVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBidXR0b246IFwiQWNlcHRhclwiLFxyXG4gICAgICAgICAgICAgICAgdGltZXI6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0bycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IGluZm8gJiYgaW5mby5kYXRvcyA/IGluZm8uZGF0b3MuZXJyb3IgOiBcIkVycm9yIGRlc2Nvbm9jaWRvXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICBidXR0b246IFwiQWNlcHRhclwiLFxyXG4gICAgICAgICAgICAgICAgdGltZXI6IDQwMDAsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIG10LTVcIiBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgYm9yZGVyOiBcIjJweCBzb2xpZCB3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMjBweFwiLCBib3JkZXJSYWRpdXM6IFwiMTVweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PiBcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzZW5kSW5mbyl9IGNsYXNzTmFtZT1cImZvcm0tc2lnbmluXCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImxvdGVcIiBpZD1cImxvdGUtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgIHtsb3Rlc0xpc3QubWFwKChsb3RlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bG90ZS5pZH0gdmFsdWU9e2xvdGUuaWR9Pntsb3RlLm5vbWJyZX08L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk5vbWJyZSBkZSBQcm9kdWN0bzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5yZWdpc3Rlcignbm9tYnJlJyl9IG5hbWU9XCJub21icmVcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZSBkZSBwcm9kdWN0b1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5vbWJyZSAmJiA8ZGl2PntlcnJvcnMubm9tYnJlPy5tZXNzYWdlfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5EZXNjcmlwY2lvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5yZWdpc3RlcignZGVzY3JpcGNpb24nKX0gbmFtZT1cImRlc2NyaXBjaW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2lvbiBkZWwgcHJvZHVjdG9cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5kZXNjcmlwY2lvbiAmJiA8ZGl2PntlcnJvcnMuZGVzY3JpcGNpb24/Lm1lc3NhZ2V9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByZWNpbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5yZWdpc3RlcigncHJlY2lvJyl9IG5hbWU9XCJwcmVjaW9cIiBwbGFjZWhvbGRlcj1cIlByZWNpbyBkZWwgcHJvZHVjdG9zXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucHJlY2lvICYmIDxkaXY+e2Vycm9ycy5wcmVjaW8/Lm1lc3NhZ2V9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlN0b2NrIGRlIHByb2R1Y3RvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnJlZ2lzdGVyKCdzdG9jaycpfSBuYW1lPVwic3RvY2tcIiBwbGFjZWhvbGRlcj1cIlN0b2NrIGRlbCBwcm9kdWN0b3NcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5zdG9jayAmJiA8ZGl2PntlcnJvcnMuc3RvY2s/Lm1lc3NhZ2V9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctMTAwIGJ0biBidG4tc20gYnRuLXByaW1hcnlcIj5SZWdpc3RyYXIgUHJvZHVjdG88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJZdXAiLCJ5dXBSZXNvbHZlciIsInVzZUZvcm0iLCJQT1NUIiwic3dhbCIsIkNvb2tpZXMiLCJsb3RlcyIsInNhdmVfbG90IiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOZXciLCJlcnJvcnMiLCJyb3V0ZXIiLCJleHRlcm5hbElkIiwic2V0RXh0ZXJuYWxJZCIsImxvdGVzTGlzdCIsInNldExvdGVzTGlzdCIsInRoZW4iLCJpbmZvIiwiY29kZSIsImRhdG9zIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwibm9tYnJlIiwic3RyaW5nIiwidHJpbSIsInJlcXVpcmVkIiwiZGVzY3JpcGNpb24iLCJwcmVjaW8iLCJudW1iZXIiLCJzdG9jayIsImZvcm1PcHRpb25zIiwicmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsInNlbmRJbmZvIiwiZGF0YSIsImRhdGFUb1NlbmQiLCJ0b2tlbiIsInRpdGxlIiwidGV4dCIsImljb24iLCJidXR0b24iLCJ0aW1lciIsImNsb3NlT25Fc2MiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImJvcmRlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwiZm9ybSIsIm9uU3VibWl0Iiwic2VsZWN0IiwibmFtZSIsImlkIiwibWFwIiwibG90ZSIsIm9wdGlvbiIsInZhbHVlIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/productos/new/page.jsx\n"));

/***/ })

});