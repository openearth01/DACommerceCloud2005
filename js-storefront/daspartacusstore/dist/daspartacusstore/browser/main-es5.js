function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @spartacus/storefront */
    "./node_modules/@spartacus/storefront/__ivy_ngcc__/fesm2015/spartacus-storefront.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'daspartacusstore';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cx-storefront");
        }
      },
      directives: [_spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__["StorefrontComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @spartacus/assets */
    "./node_modules/@spartacus/assets/__ivy_ngcc__/fesm2015/spartacus-assets.js");
    /* harmony import */


    var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @spartacus/storefront */
    "./node_modules/@spartacus/storefront/__ivy_ngcc__/fesm2015/spartacus-storefront.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _da_customize_da_customize_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./da-customize/da-customize.module */
    "./src/app/da-customize/da-customize.module.ts");

    var occConfig = {
      backend: {
        occ: {}
      }
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].occBaseUrl) {
      occConfig.backend.occ.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].occBaseUrl;
    }

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].prefix) {
      occConfig.backend.occ.prefix = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].prefix;
    } else {
      occConfig.backend.occ.prefix = '/occ/v2/';
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["B2cStorefrontModule"].withConfig({
        backend: {
          occ: {
            baseUrl: occConfig.backend.occ.baseUrl,
            prefix: occConfig.backend.occ.prefix
          }
        },
        context: {
          urlParameters: ['baseSite', 'language', 'currency'],
          baseSite: ['electronicsda-spa'],
          currency: ['USD', 'JPY']
        },
        i18n: {
          resources: _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__["translations"],
          chunks: _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__["translationChunksConfig"],
          fallbackLang: 'en'
        },
        features: {
          level: '2.1'
        }
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _da_customize_da_customize_module__WEBPACK_IMPORTED_MODULE_6__["DaCustomizeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["B2cStorefrontModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _da_customize_da_customize_module__WEBPACK_IMPORTED_MODULE_6__["DaCustomizeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
            appId: 'serverApp'
          }), _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["B2cStorefrontModule"].withConfig({
            backend: {
              occ: {
                baseUrl: occConfig.backend.occ.baseUrl,
                prefix: occConfig.backend.occ.prefix
              }
            },
            context: {
              urlParameters: ['baseSite', 'language', 'currency'],
              baseSite: ['electronicsda-spa'],
              currency: ['USD', 'JPY']
            },
            i18n: {
              resources: _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__["translations"],
              chunks: _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__["translationChunksConfig"],
              fallbackLang: 'en'
            },
            features: {
              level: '2.1'
            }
          }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _da_customize_da_customize_module__WEBPACK_IMPORTED_MODULE_6__["DaCustomizeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/da-customize/cai-integrate/cai-integrate.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/da-customize/cai-integrate/cai-integrate.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CaiIntegrateComponent */

  /***/
  function srcAppDaCustomizeCaiIntegrateCaiIntegrateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaiIntegrateComponent", function () {
      return CaiIntegrateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CaiIntegrateComponent = /*#__PURE__*/function () {
      function CaiIntegrateComponent() {
        _classCallCheck(this, CaiIntegrateComponent);
      }

      _createClass(CaiIntegrateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CaiIntegrateComponent;
    }();

    CaiIntegrateComponent.ɵfac = function CaiIntegrateComponent_Factory(t) {
      return new (t || CaiIntegrateComponent)();
    };

    CaiIntegrateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CaiIntegrateComponent,
      selectors: [["app-cai-integrate"]],
      decls: 0,
      vars: 0,
      template: function CaiIntegrateComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhLWN1c3RvbWl6ZS9jYWktaW50ZWdyYXRlL2NhaS1pbnRlZ3JhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaiIntegrateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cai-integrate',
          templateUrl: './cai-integrate.component.html',
          styleUrls: ['./cai-integrate.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/da-customize/da-customize.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/da-customize/da-customize.module.ts ***!
    \*****************************************************/

  /*! exports provided: DaCustomizeModule */

  /***/
  function srcAppDaCustomizeDaCustomizeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaCustomizeModule", function () {
      return DaCustomizeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cai-integrate/cai-integrate.component */
    "./src/app/da-customize/cai-integrate/cai-integrate.component.ts");
    /* harmony import */


    var _spartacus_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @spartacus/core */
    "./node_modules/@spartacus/core/__ivy_ngcc__/fesm2015/spartacus-core.js");

    var DaCustomizeModule = function DaCustomizeModule() {
      _classCallCheck(this, DaCustomizeModule);
    };

    DaCustomizeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DaCustomizeModule
    });
    DaCustomizeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DaCustomizeModule_Factory(t) {
        return new (t || DaCustomizeModule)();
      },
      providers: [Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_3__["provideDefaultConfig"])({
        CaiIntegrationComponent: {
          component: _cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__["CaiIntegrateComponent"],
          guards: [_spartacus_core__WEBPACK_IMPORTED_MODULE_3__["NotAuthGuard"]]
        }
      })],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DaCustomizeModule, {
        declarations: [_cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__["CaiIntegrateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__["CaiIntegrateComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaCustomizeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__["CaiIntegrateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [Object(_spartacus_core__WEBPACK_IMPORTED_MODULE_3__["provideDefaultConfig"])({
            CaiIntegrationComponent: {
              component: _cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__["CaiIntegrateComponent"],
              guards: [_spartacus_core__WEBPACK_IMPORTED_MODULE_3__["NotAuthGuard"]]
            }
          })],
          exports: [_cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__["CaiIntegrateComponent"]],
          entryComponents: [_cai_integrate_cai_integrate_component__WEBPACK_IMPORTED_MODULE_2__["CaiIntegrateComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //occBaseUrl:
      // 'https://api.cv1ozbay70-dickinson1-d1-public.model-t.cc.commerce.ondemand.com',
      occBaseUrl: 'https://localhost:9002',
      prefix: '/occ/v2/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\git_ccv2\DACommerceCloud2005\js-storefront\daspartacusstore\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map