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
      styles: ["cx-carousel[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGdpdF9jY3YyXFxEQUNvbW1lcmNlQ2xvdWQyMDA1XFxqcy1zdG9yZWZyb250XFxkYXNwYXJ0YWN1c3N0b3JlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNPLHdCQUFBO0VBQUEsZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gY3gtY2Fyb3VzZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB9XHJcbiIsImN4LWNhcm91c2VsIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbn0iXX0= */"]
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


    var _threekit_pdp_threekit_pdp_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./threekit-pdp/threekit-pdp.module */
    "./src/app/threekit-pdp/threekit-pdp.module.ts");

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
      }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _threekit_pdp_threekit_pdp_module__WEBPACK_IMPORTED_MODULE_6__["ThreekitPdpModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _spartacus_storefront__WEBPACK_IMPORTED_MODULE_4__["B2cStorefrontModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _threekit_pdp_threekit_pdp_module__WEBPACK_IMPORTED_MODULE_6__["ThreekitPdpModule"]]
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
          }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"], _threekit_pdp_threekit_pdp_module__WEBPACK_IMPORTED_MODULE_6__["ThreekitPdpModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/threekit-pdp/threekit-image-comp/threekit-image-comp.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/threekit-pdp/threekit-image-comp/threekit-image-comp.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ThreekitImageCompComponent */

  /***/
  function srcAppThreekitPdpThreekitImageCompThreekitImageCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThreekitImageCompComponent", function () {
      return ThreekitImageCompComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @spartacus/storefront */
    "./node_modules/@spartacus/storefront/__ivy_ngcc__/fesm2015/spartacus-storefront.js");

    var ThreekitImageCompComponent = /*#__PURE__*/function () {
      function ThreekitImageCompComponent(currentProductService) {
        _classCallCheck(this, ThreekitImageCompComponent);

        this.currentProductService = currentProductService;
        this.product$ = this.currentProductService.getProduct();
      }

      _createClass(ThreekitImageCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("Executing");
          getAssetId("12345");
        }
      }]);

      return ThreekitImageCompComponent;
    }();

    ThreekitImageCompComponent.ɵfac = function ThreekitImageCompComponent_Factory(t) {
      return new (t || ThreekitImageCompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__["CurrentProductService"]));
    };

    ThreekitImageCompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThreekitImageCompComponent,
      selectors: [["app-threekit-image-comp"]],
      decls: 2,
      vars: 0,
      consts: [["id", "app", 2, "width", "98%", "margin-left", "auto", "margin-right", "auto"], ["id", "player", 2, "width", "100%", "height", "300px"]],
      template: function ThreekitImageCompComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".player___25Zg2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 280px;\n}\n\n.configurator___26HkM[_ngcontent-%COMP%] {\n  float: right;\n  width: 50%;\n  height: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhyZWVraXQtcGRwL3RocmVla2l0LWltYWdlLWNvbXAvQzpcXGdpdF9jY3YyXFxEQUNvbW1lcmNlQ2xvdWQyMDA1XFxqcy1zdG9yZWZyb250XFxkYXNwYXJ0YWN1c3N0b3JlL3NyY1xcYXBwXFx0aHJlZWtpdC1wZHBcXHRocmVla2l0LWltYWdlLWNvbXBcXHRocmVla2l0LWltYWdlLWNvbXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RocmVla2l0LXBkcC90aHJlZWtpdC1pbWFnZS1jb21wL3RocmVla2l0LWltYWdlLWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGhyZWVraXQtcGRwL3RocmVla2l0LWltYWdlLWNvbXAvdGhyZWVraXQtaW1hZ2UtY29tcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXJfX18yNVpnMnsgXHJcbiAgICBmbG9hdDpsZWZ0OyAgXHJcbiAgIC8vIGJhY2tncm91bmQ6UmVkOyBcclxuICAgIHdpZHRoOjUwJTsgXHJcbiAgICBoZWlnaHQ6MjgwcHg7IFxyXG59IFxyXG4uY29uZmlndXJhdG9yX19fMjZIa017IFxyXG4gICAgZmxvYXQ6cmlnaHQ7IFxyXG4gICAvLyBiYWNrZ3JvdW5kOmJsdWU7IFxyXG4gICAgd2lkdGg6NTAlOyBcclxuICAgIGhlaWdodDoyODBweDsgXHJcbn0gIiwiLnBsYXllcl9fXzI1WmcyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbi5jb25maWd1cmF0b3JfX18yNkhrTSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyODBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThreekitImageCompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-threekit-image-comp',
          templateUrl: './threekit-image-comp.component.html',
          styleUrls: ['./threekit-image-comp.component.scss']
        }]
      }], function () {
        return [{
          type: _spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__["CurrentProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/threekit-pdp/threekit-pdp.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/threekit-pdp/threekit-pdp.module.ts ***!
    \*****************************************************/

  /*! exports provided: ThreekitPdpModule */

  /***/
  function srcAppThreekitPdpThreekitPdpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThreekitPdpModule", function () {
      return ThreekitPdpModule;
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


    var _threekit_image_comp_threekit_image_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./threekit-image-comp/threekit-image-comp.component */
    "./src/app/threekit-pdp/threekit-image-comp/threekit-image-comp.component.ts");

    var ThreekitPdpModule = function ThreekitPdpModule() {
      _classCallCheck(this, ThreekitPdpModule);
    };

    ThreekitPdpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ThreekitPdpModule
    });
    ThreekitPdpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ThreekitPdpModule_Factory(t) {
        return new (t || ThreekitPdpModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
      /*,
      ConfigModule.withConfig({
      cmsComponents: {
      /*ProductImagesComponent:{
      component: ThreekitImageCompComponent*/

      /* }
       /*,
       ProductIntroComponent:{
         component: ThreekitImageCompComponent
       }*/

      /*}
      } as CmsConfig)*/
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThreekitPdpModule, {
        declarations: [_threekit_image_comp_threekit_image_comp_component__WEBPACK_IMPORTED_MODULE_2__["ThreekitImageCompComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        /*,
        ConfigModule.withConfig({
        cmsComponents: {
        /*ProductImagesComponent:{
        component: ThreekitImageCompComponent*/

        /* }
         /*,
         ProductIntroComponent:{
           component: ThreekitImageCompComponent
         }*/

        /*}
        } as CmsConfig)*/
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThreekitPdpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_threekit_image_comp_threekit_image_comp_component__WEBPACK_IMPORTED_MODULE_2__["ThreekitImageCompComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
          /*,
          ConfigModule.withConfig({
          cmsComponents: {
          /*ProductImagesComponent:{
          component: ThreekitImageCompComponent*/

          /* }
           /*,
           ProductIntroComponent:{
             component: ThreekitImageCompComponent
           }*/

          /*}
          } as CmsConfig)*/
          ]
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