(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~comparar-comparar-module-ngfactory~home-evamed-home-evamed-module-ngfactory"], {
    /***/
    "9APP":
    /*!****************************************************!*\
      !*** ./src/app/core/services/user/user.service.ts ***!
      \****************************************************/

    /*! exports provided: UserService */

    /***/
    function APP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
        }

        _createClass(UserService, [{
          key: "addUser",
          value: function addUser(userData) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_users, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_users).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "searchUser",
          value: function searchUser(email) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_users + '?search=' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function UserService_Factory() {
          return new UserService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: UserService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "Dyag":
    /*!**********************************************!*\
      !*** ./src/app/calculos/EscalasCarbono.json ***!
      \**********************************************/

    /*! exports provided: 0, 1, default */

    /***/
    function Dyag(module) {
      module.exports = JSON.parse("[{\"nombre_caso\":\"Promedio del sector vivienda\",\"valor_1\":[0,28],\"color_1\":\"#009900\",\"valor_2\":[28.1,2895.4],\"color_2\":\"#01cc00\",\"valor_3\":[2895.5,5762.8],\"color_3\":\"#ffff01\",\"valor_4\":[5762.9,8630.2],\"color_4\":\"#ffc000\",\"valor_5\":[8630.3,11497.6],\"color_5\":\"#e36b0a\",\"valor_6\":[11497.7,14365],\"color_6\":\"#FE6C00\",\"valor_7\":[14365.1],\"color_7\":\"#fe0000\",\"descripcion\":\"Considera el promedio de las emisiones de CO2 eq/m2 año calculadas por diversos desarrolladores de vivienda mediante la herramienta DEEVI, como parte del programa SISEVIVE-ECOCASA. Estas emisiones consideran solamente la etapa operativa de la vivienda. Esta información es procesada y publicada por el Registro Único de Vivienda (RUV).\"},{\"nombre_caso\":\"Vivienda sustentable\",\"valor_1\":[0,28],\"color_1\":\"#009900\",\"valor_2\":[28.1,50.4],\"color_2\":\"#01cc00\",\"valor_3\":[50.5,72.8],\"color_3\":\"#ffff01\",\"valor_4\":[72.9,95.2],\"color_4\":\"#ffc000\",\"valor_5\":[95.3,117.6],\"color_5\":\"#e36b0a\",\"valor_6\":[117.7,140],\"color_6\":\"#FE6C00\",\"valor_7\":[140.1],\"color_7\":\"#fe0000\",\"descripcion\":\"Considera como límite superior, el promedio de las emisiones de CO2 eq/m2 año calculadas por diversos desarrolladores de vivienda mediante la herramienta DEEVI, como parte del programa SISEVIVE-ECOCASA. Estas emisiones consideran solamente la etapa operativa de la vivienda. Esta información es procesada y publicada por el Registro Único de Vivienda (RUV).\"}]");
      /***/
    },

    /***/
    "Fyq5":
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/button-toggle/index.ngfactory.js ***!
      \*************************************************************************/

    /*! exports provided: MatButtonToggleModuleNgFactory, RenderType_MatButtonToggle, View_MatButtonToggle_0, View_MatButtonToggle_Host_0, MatButtonToggleNgFactory */

    /***/
    function Fyq5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleModuleNgFactory", function () {
        return MatButtonToggleModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MatButtonToggle", function () {
        return RenderType_MatButtonToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatButtonToggle_0", function () {
        return View_MatButtonToggle_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatButtonToggle_Host_0", function () {
        return View_MatButtonToggle_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleNgFactory", function () {
        return MatButtonToggleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var MatButtonToggleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], [])]);
      });

      var styles_MatButtonToggle = [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"];

      var RenderType_MatButtonToggle = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MatButtonToggle,
        data: {}
      });

      function View_MatButtonToggle_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
          _buttonElement: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["button", 1]], null, 2, "button", [["class", "mat-button-toggle-button mat-focus-indicator"], ["type", "button"]], [[8, "id", 0], [1, "tabindex", 0], [1, "aria-pressed", 0], [8, "disabled", 0], [1, "name", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co._onButtonClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "mat-button-toggle-label-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "mat-button-toggle-focus-overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "mat-button-toggle-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
          disabled: [0, "disabled"],
          trigger: [1, "trigger"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_8 = _co.disableRipple || _co.disabled;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1);

          _ck(_v, 6, 0, currVal_8, currVal_9);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.buttonId;
          var currVal_1 = _co.disabled ? 0 - 1 : _co.tabIndex;
          var currVal_2 = _co.checked;
          var currVal_3 = _co.disabled || null;
          var currVal_4 = _co.name || null;
          var currVal_5 = _co.ariaLabel;
          var currVal_6 = _co.ariaLabelledby;

          _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).unbounded;

          _ck(_v, 5, 0, currVal_7);
        });
      }

      function View_MatButtonToggle_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).focus() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, View_MatButtonToggle_0, RenderType_MatButtonToggle)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, function (_ck, _v) {
          var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).buttonToggleGroup;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).checked;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).appearance === "standard";
          var currVal_4 = 0 - 1;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).id;

          var currVal_6 = null;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        });
      }

      var MatButtonToggleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-button-toggle", _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggle"], View_MatButtonToggle_Host_0, {
        disableRipple: "disableRipple",
        ariaLabel: "aria-label",
        ariaLabelledby: "aria-labelledby",
        id: "id",
        name: "name",
        value: "value",
        tabIndex: "tabIndex",
        appearance: "appearance",
        checked: "checked",
        disabled: "disabled"
      }, {
        change: "change"
      }, ["*"]);
      /***/

    },

    /***/
    "MNqV":
    /*!**************************************!*\
      !*** ./src/app/calculos/calculos.ts ***!
      \**************************************/

    /*! exports provided: Calculos */

    /***/
    function MNqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Calculos", function () {
        return Calculos;
      });
      /* harmony import */


      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/calculos/Subetapas.json */
      "j2Il");

      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/app/calculos/Subetapas.json */
      "j2Il", 1);
      /* harmony import */


      var src_app_calculos_EscalasCarbono_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/calculos/EscalasCarbono.json */
      "Dyag");

      var src_app_calculos_EscalasCarbono_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/app/calculos/EscalasCarbono.json */
      "Dyag", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var Calculos = /*#__PURE__*/function () {
        function Calculos() {
          _classCallCheck(this, Calculos);

          this.subetapas_list = src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0__;
          this.catalogoEscalasCarbono = src_app_calculos_EscalasCarbono_json__WEBPACK_IMPORTED_MODULE_1__;
          this.impactosIgnorar2 = ['PARNR', 'POT', 'Human toxicity', 'Fresh water aquatic ecotox.', 'Marine aquatic ecotoxicity', 'Terrestrial ecotoxicity'];
          this.nombreImpactosCompleto = [];
        }

        _createClass(Calculos, [{
          key: "OperacionesDeFase",
          value: function OperacionesDeFase(idProyecto, info, BD) {
            var _this = this;

            this.projectsList = info.projectsList;
            this.materialList = info.materialList;
            this.materialSchemeDataList = info.materialSchemeDataList;
            this.materialSchemeProyectList = info.materialSchemeProyectList;
            this.potentialTypesList = info.potentialTypesList;
            this.standarsList = info.standarsList;
            this.CSEList = info.CSEList;
            this.SIDList = info.SIDList;
            this.SIList = info.SIList;
            this.ACRList = info.ACRList;
            this.ECDList = info.ECDList;
            this.TEDList = info.TEDList;
            this.TEList = info.TEList;
            this.ULList = info.ULList;
            this.ECDPList = info.ECDPList;
            this.sectionList = info.sectionsList;
            this.PTList = info.PTList;
            this.conversionList = info.conversionList;
            var Datos = {};
            var schemeProyect = null;
            var errorCalculos = false;
            schemeProyect = this.materialSchemeProyectList.filter(function (msp) {
              return msp['project_id'] == idProyecto;
            });
            var impacto_ban = true;
            var nameImpacto;
            var materialesIgnorados = [];
            this.materiales_EPIC = 0;
            this.potentialTypesList.forEach(function (impacto, index) {
              _this.impactosIgnorar2.forEach(function (ignorar) {
                if (impacto['name_potential_type'] === ignorar) {
                  impacto_ban = false;
                }
              });

              if (impacto_ban) {
                var sumaParaReempazos = {};
                nameImpacto = impacto['name_complete_potential_type'];
                nameImpacto = _this.ajustarNombre(nameImpacto);
                Datos[nameImpacto] = {};
                var resultado_impacto = 0; //Cálculos de la sección de producción

                var etapas = [2, 3, 4]; //Subetaps A1 A2 y A3

                Datos[nameImpacto]['Producción'] = {};
                var auxEPiC = [];
                var banderaMaterialEP = false;
                etapas.forEach(function (subetapa) {
                  var subproceso = _this.standarsList.filter(function (s) {
                    return s['id'] == subetapa;
                  })[0]['name_standard'];

                  if (schemeProyect.length > 0) {
                    schemeProyect.forEach(function (ps, num) {
                      var baseDatosMaterial = _this.materialList.filter(function (bs) {
                        return bs['id'] == ps['material_id'];
                      });

                      if (BD[baseDatosMaterial[0]['database_from']]) {
                        if (baseDatosMaterial[0]['database_from'] != 'EPiC') {
                          var materiales_subetapa = _this.materialSchemeDataList.filter(function (msd) {
                            return msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'];
                          });

                          if (materiales_subetapa.length > 0) {
                            banderaMaterialEP = false;
                            materiales_subetapa.forEach(function (material, index) {
                              resultado_impacto = resultado_impacto + materiales_subetapa[index]['value'] * ps['quantity'];
                            });
                          }
                        } else {
                          var _materiales_subetapa = _this.materialSchemeDataList.filter(function (msd) {
                            return msd['material_id'] == ps['material_id'] && msd['standard_id'] == 1 && msd['potential_type_id'] == impacto['id'];
                          });

                          if (_materiales_subetapa.length > 0) {
                            var auxResultado = 0;
                            banderaMaterialEP = false;

                            _materiales_subetapa.forEach(function (material, index) {
                              auxResultado = auxResultado + _materiales_subetapa[index]['value'] * ps['quantity'];
                            });

                            var auxsubproceso = _this.standarsList.filter(function (s) {
                              return s['id'] == 1;
                            })[0]['name_standard'];

                            if (!auxEPiC.includes(auxsubproceso)) {
                              Datos[nameImpacto]['Producción'][auxsubproceso] = 0;
                            }

                            Datos[nameImpacto]['Producción'][auxsubproceso] += auxResultado;
                          }
                        }
                      }

                      Datos[nameImpacto]['Producción'][subproceso] = resultado_impacto;
                    });
                  }

                  resultado_impacto = 0;
                });
                _this.materiales_EPD = schemeProyect.length - _this.materiales_EPIC; //console.log(Datos[nameImpacto]['Producción'])

                resultado_impacto = 0; //Construcción

                Datos[nameImpacto]['Construccion'] = {}; //A4 Transporte

                var auxMaterialesTransporte = [];

                if (schemeProyect.length > 0) {
                  schemeProyect.forEach(function (ps) {
                    var baseDatosMaterial = _this.materialList.filter(function (bs) {
                      return bs['id'] == ps['material_id'];
                    });

                    var internacional;
                    var nacional;

                    if (ps['distance_init'] == null) {
                      internacional = 0;
                    } else {
                      var transporteSeleccionado = 1;

                      if (ps['transport_id_origin'] != null) {
                        transporteSeleccionado = ps['transport_id_origin'];
                      }

                      var value_transport = _this.PTList.filter(function (val) {
                        return val['potential_type_id'] == impacto['id'] && val['transport_id'] == transporteSeleccionado;
                      });

                      internacional = value_transport[0]['value'] * ps['distance_init'];
                    }

                    if (ps['distance_end'] == null) {
                      nacional = 0;
                    } else {
                      var _transporteSeleccionado = 4;

                      if (ps['transport_id_end'] != null) {
                        _transporteSeleccionado = ps['transport_id_end'];
                      }

                      var _value_transport = _this.PTList.filter(function (val) {
                        return val['potential_type_id'] == impacto['id'] && val['transport_id'] == _transporteSeleccionado;
                      });

                      nacional = _value_transport[0]['value'] * ps['distance_end'];
                    }

                    var conversion_val = _this.conversionList.filter(function (val) {
                      return val['material_id'] == ps['material_id'];
                    });

                    var peso = 1;

                    if (conversion_val.length > 0) {
                      peso = conversion_val[0]['value'];
                    }

                    if (BD[baseDatosMaterial[0]['database_from']]) {
                      if (!auxMaterialesTransporte.includes(ps['material_id'])) {
                        sumaParaReempazos[ps['material_id']] = 0;
                        auxMaterialesTransporte.push(ps['material_id']);
                      }

                      resultado_impacto = resultado_impacto + peso * ps['quantity'] * (nacional + internacional);
                      sumaParaReempazos[ps['material_id']] += peso * ps['quantity'] * (nacional + internacional);
                    }
                  });
                }

                Datos[nameImpacto]['Construccion']['A4'] = resultado_impacto; //console.log(Datos[nameImpacto]['Construccion'])

                resultado_impacto = 0; //A5 instalación

                var CSEs = _this.CSEList.filter(function (c) {
                  return c['project_id'] == idProyecto;
                });

                if (CSEs.length > 0) {
                  CSEs.forEach(function (CSE) {
                    var energia = _this.SIDList.filter(function (sid) {
                      return sid['sourceInformarion_id'] == CSE['source_information_id'] && sid['potential_type_id'] == impacto['id'];
                    });

                    if (energia.length > 0) {
                      resultado_impacto = resultado_impacto + energia[0]['value'] * CSE['quantity'];
                    }
                  });
                }

                Datos[nameImpacto]['Construccion']['A5'] = resultado_impacto; //console.log('A5:',resultado_impacto);
                //Uso

                resultado_impacto = 0;
                Datos[nameImpacto]['Uso'] = {}; //B4
                //las etapas son las mismas que en la sección de producción
                //console.log(sumaParaReempazos)

                if (schemeProyect.length > 0) {
                  schemeProyect.forEach(function (ps, num) {
                    var baseDatosMaterial = _this.materialList.filter(function (bs) {
                      return bs['id'] == ps['material_id'];
                    });

                    if (BD[baseDatosMaterial[0]['database_from']]) {
                      if (baseDatosMaterial[0]['database_from'] != 'EPiC') {
                        if (sumaParaReempazos[ps['material_id']] != undefined) {
                          var valorTransporte = 0;
                          valorTransporte = sumaParaReempazos[ps['material_id']];
                          resultado_impacto = resultado_impacto + valorTransporte * ps['replaces'];
                        }

                        etapas.forEach(function (subetapa) {
                          var materiales_subetapa = _this.materialSchemeDataList.filter(function (msd) {
                            return msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'];
                          });

                          if (materiales_subetapa.length > 0) {
                            materiales_subetapa.forEach(function (material, index) {
                              resultado_impacto = resultado_impacto + materiales_subetapa[index]['value'] * ps['quantity'] * ps['replaces'];
                            });
                          }
                        });
                      } else {
                        if (sumaParaReempazos[ps['material_id']] != undefined) {
                          var _valorTransporte = 0;
                          _valorTransporte = sumaParaReempazos[ps['material_id']];
                          resultado_impacto = resultado_impacto + _valorTransporte * ps['replaces'];
                        }

                        var materiales_subetapa = _this.materialSchemeDataList.filter(function (msd) {
                          return msd['material_id'] == ps['material_id'] && msd['standard_id'] == 1 && msd['potential_type_id'] == impacto['id'];
                        });

                        if (materiales_subetapa.length > 0) {
                          materiales_subetapa.forEach(function (material, index) {
                            resultado_impacto = resultado_impacto + materiales_subetapa[index]['value'] * ps['quantity'] * ps['replaces'];
                          });
                        }
                      }
                    }
                  });
                }

                Datos[nameImpacto]['Uso']['B4'] = resultado_impacto; //console.log( Datos[nameImpacto]['Uso'])

                resultado_impacto = 0; //B6
                //Se obtiene consumo anual

                var listaACR = _this.ACRList.filter(function (acr) {
                  return acr['project_id'] == idProyecto;
                });

                if (listaACR.length > 0) {
                  var consumos = _this.ECDList.filter(function (ecd) {
                    return ecd['annual_consumption_required_id'] == listaACR[0]['id'];
                  });

                  var vidaUtilID = _this.projectsList.filter(function (p) {
                    return p['id'] == idProyecto;
                  })[0]['useful_life_id'];

                  var vidaUtil = _this.ULList.filter(function (ul) {
                    return ul['id'] == vidaUtilID;
                  })[0]['name_useful_life'];

                  try {
                    vidaUtil = parseFloat(vidaUtil);
                  } catch (_a) {
                    vidaUtil = 1;
                  }

                  consumos.forEach(function (consumo) {
                    var valor_impacto = _this.TEDList.filter(function (sid) {
                      return sid['type_energy_id'] == consumo['type'] && sid['potential_type_id'] == impacto['id'];
                    });

                    if (valor_impacto.length > 0) {
                      resultado_impacto = resultado_impacto + vidaUtil * valor_impacto[0]['value'] * consumo['quantity'];
                    }
                  });
                }

                Datos[nameImpacto]['Uso']['B6'] = resultado_impacto; //console.log('Uso:',resultado_impacto)
                //Fin de vida

                resultado_impacto = 0;
                Datos[nameImpacto]['FinDeVida'] = {}; //C1

                var ECDPs = _this.ECDPList.filter(function (c) {
                  return c['project_id'] == idProyecto;
                });

                if (ECDPs.length > 0) {
                  ECDPs.forEach(function (ECDP) {
                    var energia = _this.SIDList.filter(function (sid) {
                      return sid['sourceInformarion_id'] == ECDP['source_information_id'] && sid['potential_type_id'] == impacto['id'];
                    });

                    if (energia.length > 0) {
                      resultado_impacto = resultado_impacto + ECDP['quantity'] * energia[0]['value'];
                    } else {
                      errorCalculos = true;
                    }
                  });
                }

                Datos[nameImpacto]['FinDeVida']['C1'] = resultado_impacto; //C2

                Datos[nameImpacto]['FinDeVida']['C2'] = 0; //C3

                Datos[nameImpacto]['FinDeVida']['C3'] = 0; //C4

                Datos[nameImpacto]['FinDeVida']['C4'] = 0; //console.log('Fin de vida',resultado_impacto)
              }

              impacto_ban = true;
            });
            return [Datos, errorCalculos];
          }
        }, {
          key: "ValoresProcentaje",
          value: function ValoresProcentaje(data, ignorar) {
            var auxsumetapa = {};
            Object.keys(data).forEach(function (element) {
              var auxsumimpacto = 0;
              auxsumetapa[element] = {};
              var flag = true;
              Object.keys(data[element]).forEach(function (etapa) {
                ignorar.forEach(function (element) {
                  if (element == etapa) flag = false;
                });
                Object.keys(data[element][etapa]).forEach(function (subetapa) {
                  if (flag) {
                    auxsumimpacto = auxsumimpacto + data[element][etapa][subetapa];
                  }
                });
                flag = true;
              });
              Object.keys(data[element]).forEach(function (etapa) {
                flag = true;
                var auxsumET = 0;
                ignorar.forEach(function (element) {
                  if (element == etapa) flag = false;
                });
                auxsumetapa[element][etapa] = {};
                auxsumetapa[element][etapa]['num'] = 0;

                if (flag) {
                  Object.keys(data[element][etapa]).forEach(function (subetapa) {
                    auxsumetapa[element][etapa]['num'] = auxsumetapa[element][etapa]['num'] + data[element][etapa][subetapa];
                  });
                }

                auxsumET = auxsumetapa[element][etapa]['num'];
                auxsumetapa[element][etapa]['num'] = auxsumetapa[element][etapa]['num'].toExponential(2);

                if (auxsumimpacto != 0) {
                  auxsumetapa[element][etapa]['porcentaje'] = (auxsumET / auxsumimpacto * 100).toFixed(2);
                } else {
                  auxsumetapa[element][etapa]['porcentaje'] = 0;
                }
              });
            });
            return auxsumetapa;
          }
        }, {
          key: "ValoresProcentajeSubeapa",
          value: function ValoresProcentajeSubeapa(data, ignorar) {
            var auxsumetapa = {};
            var flag = true;
            Object.keys(data).forEach(function (element) {
              var auxsumimpacto = 0;
              auxsumetapa[element] = {};
              Object.keys(data[element]).forEach(function (etapa) {
                ignorar.forEach(function (element) {
                  if (element == etapa) flag = false;
                });

                if (flag) {
                  Object.keys(data[element][etapa]).forEach(function (subetapa) {
                    auxsumimpacto = auxsumimpacto + data[element][etapa][subetapa];
                  });
                }

                flag = true;
              });
              Object.keys(data[element]).forEach(function (etapa) {
                ignorar.forEach(function (element) {
                  if (element == etapa) flag = false;
                });
                auxsumetapa[element][etapa] = {};
                Object.keys(data[element][etapa]).forEach(function (subetapa) {
                  auxsumetapa[element][etapa][subetapa] = {};

                  if (flag) {
                    auxsumetapa[element][etapa][subetapa]['num'] = data[element][etapa][subetapa].toExponential(2);
                  } else {
                    auxsumetapa[element][etapa][subetapa]['num'] = 0;
                  }

                  if (auxsumimpacto != 0) {
                    auxsumetapa[element][etapa][subetapa]['porcentaje'] = (auxsumetapa[element][etapa][subetapa]['num'] / auxsumimpacto * 100).toFixed(1);
                  } else {
                    auxsumetapa[element][etapa][subetapa]['porcentaje'] = 0;
                  }
                });
                flag = true;
              });
            });
            return auxsumetapa;
          }
        }, {
          key: "Porcentaje",
          value: function Porcentaje(data) {
            var sum = 0;
            var auxdata = [];
            data.forEach(function (element) {
              sum = sum + Number(element);
            });
            data.forEach(function (element) {
              auxdata.push((Number(element) / sum * 100).toFixed(1));
            });
            return auxdata;
          }
        }, {
          key: "ImpactosSeleccionados",
          value: function ImpactosSeleccionados(potList) {
            var _this2 = this;

            var impacto_ban = true;
            var auxNombre = [];
            var auxnombreSalto;
            auxNombre.push("ciclo de vida");
            potList.forEach(function (impacto, index) {
              _this2.impactosIgnorar2.forEach(function (ignorar) {
                if (impacto['name_potential_type'] === ignorar) {
                  impacto_ban = false;
                }
              });

              if (impacto_ban) {
                auxnombreSalto = impacto['name_complete_potential_type'];
                auxNombre.push(auxnombreSalto); //auxNombre.push(this.ajustarNombre(auxnombreSalto));
              }

              impacto_ban = true;
            });
            return auxNombre;
          }
        }, {
          key: "FiltradoDeImpactos",
          value: function FiltradoDeImpactos(data) {
            var aux = [9, 10, 11, 12, 13, 14];
            var b = true;
            var auxdata = [];
            data.forEach(function (element, index) {
              aux.forEach(function (ignorar) {
                if (element['id'] == ignorar) {
                  b = false;
                }
              });

              if (b) {
                auxdata.push(element);
              }
            });
            return auxdata;
          }
        }, {
          key: "ajustarNombre",
          value: function ajustarNombre(name) {
            var help = name;
            var spacios = 0;
            var numC = 0;
            var maxlinea = 0;

            var _iterator = _createForOfIteratorHelper(help),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;

                if (i === ' ') {
                  spacios = spacios + 1;

                  if (spacios == 1 && maxlinea >= 9) {
                    help = [help.slice(0, numC), '\n', help.slice(numC)].join('');
                    spacios = 0;
                    maxlinea = 0;
                    numC = numC + 1;
                  }

                  if (spacios == 2) {
                    help = [help.slice(0, numC), '\n', help.slice(numC)].join('');
                    spacios = 0;
                    numC = numC + 1;
                  }
                }

                maxlinea = maxlinea + 1;
                numC = numC + 1;
              } //console.log(help);

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return help;
          }
        }, {
          key: "findColor",
          value: function findColor(subetapa) {
            var sub = this.subetapas_list.filter(function (s) {
              return s['abreviacion'] === subetapa;
            });
            return sub[0]['color'];
          }
        }, {
          key: "findSubetapas",
          value: function findSubetapas(etapa, impactoS, porcentajesMostrados) {
            var _this3 = this;

            var auxReturn = [];
            Object.keys(porcentajesMostrados).forEach(function (impacto) {
              var auxIDImpacto = _this3.ajustarNombre(impactoS);

              if (impacto === auxIDImpacto) {
                Object.keys(porcentajesMostrados[impacto]).forEach(function (ciclo) {
                  if (ciclo === etapa) {
                    Object.keys(porcentajesMostrados[impacto][ciclo]).forEach(function (subEtapa) {
                      var aux = _this3.subetapas_list.filter(function (s) {
                        return s['abreviacion'] == subEtapa;
                      });

                      auxReturn.push(aux[0]);
                    });
                  }
                });
              }
            });
            return auxReturn;
          }
        }, {
          key: "llenarGraficaCarbono",
          value: function llenarGraficaCarbono(opcion) {
            var auxdata = [];
            var aux = [];
            var auxcolor = [];
            var auxlabels = [];
            var auxDataLabels = {
              1: "A",
              2: "B",
              3: "C",
              4: "D",
              5: "E",
              6: "F",
              7: "G"
            };
            this.catalogoEscalasCarbono.forEach(function (element) {
              if (element.nombre_caso === opcion) {
                for (var _i = 1; _i < 8; _i++) {
                  var auxl = "";
                  var auxv = 0;
                  var valor = "valor_".concat(_i.toString());
                  var color = "color_".concat(_i.toString());
                  auxcolor.push(element[color]);

                  if (element[valor].length > 1) {
                    auxl = auxl.concat(element[valor][0].toString()).concat(" - ").concat(element[valor][1].toString());

                    if (_i != 1) {
                      var auxValor = "valor_".concat((_i - 1).toString());
                      auxv = element[auxValor][0];
                    }

                    auxdata.push(element[valor][1] + auxv);
                  } else {
                    if (_i == 1) {
                      auxl = auxl.concat(element[valor][0].toString()).concat(" < ");
                      auxdata.push(element[valor][0]);
                    } else {
                      var _auxValor = "valor_".concat((_i - 1).toString());

                      auxv = element[_auxValor][0];
                      auxl = auxl.concat(element[valor][0].toString()).concat(" > ");
                      auxdata.push(element[valor][0] + auxv);
                    }
                  }

                  auxl = auxl.concat(" : ").concat(auxDataLabels[_i]);
                  auxlabels.push(auxl);
                }
              }
            });
            aux = [].concat(_toConsumableArray(aux), [{
              data: auxdata,
              backgroundColor: auxcolor
            }]);
            var regreso = {
              datos: aux,
              labels: auxlabels
            };
            return regreso;
          }
        }, {
          key: "determinaValorCarbono",
          value: function determinaValorCarbono(data, projectL, idP, UFL) {
            var impacto = this.ajustarNombre("Calentamiento Global");
            var res = 0;
            Object.keys(data[impacto]["Uso"]).forEach(function (subetapa) {
              res += data[impacto]["Uso"][subetapa];
            });
            var superficieConstruida = 0;
            superficieConstruida = projectL.filter(function (p) {
              return p['id'] == idP;
            })[0]['living_area'];
            var auxidUse = projectL.filter(function (p) {
              return p['id'] == idP;
            })[0]['useful_life_id'];
            var useLife = Number(UFL.filter(function (p) {
              return p['id'] == auxidUse;
            })[0]['name_useful_life']); //useful_life_id

            res = res / superficieConstruida;
            res = res / useLife;
            return res;
          }
        }, {
          key: "determinarDescripcionCarbono",
          value: function determinarDescripcionCarbono(opcion) {
            var aux = "";
            this.catalogoEscalasCarbono.forEach(function (element) {
              if (element.nombre_caso === opcion) {
                aux = element['descripcion'];
              }
            });
            return aux;
          }
        }, {
          key: "buscarValosCarbono",
          value: function buscarValosCarbono(data, opcion, projectL, idP, UFL) {
            var aux = {};
            var valorCarbono = this.determinaValorCarbono(data, projectL, idP, UFL);
            this.catalogoEscalasCarbono.forEach(function (element) {
              if (element.nombre_caso === opcion) {
                for (var _i = 1; _i < 8; _i++) {
                  var valor = "valor_".concat(_i.toString());
                  var color = "color_".concat(_i.toString());
                  aux[valor] = "#FFFFFF";

                  if (element[valor].length > 1) {
                    if (valorCarbono <= element[valor][1] && valorCarbono >= element[valor][0]) {
                      aux[valor] = element[color];
                    }
                  } else {
                    if (_i == 1) {
                      if (valorCarbono < element[valor][0]) {
                        aux[valor] = element[color];
                      }
                    } else {
                      if (valorCarbono > element[valor][0]) {
                        aux[valor] = element[color];
                      }
                    }
                  }
                }
              }
            });
            return aux;
          }
        }]);

        return Calculos;
      }();

      Calculos.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function Calculos_Factory() {
          return new Calculos();
        },
        token: Calculos,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "YHaq":
    /*!****************************************************************!*\
      !*** ./node_modules/@angular/material/card/index.ngfactory.js ***!
      \****************************************************************/

    /*! exports provided: MatCardModuleNgFactory, RenderType_MatCard, View_MatCard_0, View_MatCard_Host_0, MatCardNgFactory, RenderType_MatCardHeader, View_MatCardHeader_0, View_MatCardHeader_Host_0, MatCardHeaderNgFactory, RenderType_MatCardTitleGroup, View_MatCardTitleGroup_0, View_MatCardTitleGroup_Host_0, MatCardTitleGroupNgFactory */

    /***/
    function YHaq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardModuleNgFactory", function () {
        return MatCardModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MatCard", function () {
        return RenderType_MatCard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatCard_0", function () {
        return View_MatCard_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatCard_Host_0", function () {
        return View_MatCard_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardNgFactory", function () {
        return MatCardNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MatCardHeader", function () {
        return RenderType_MatCardHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatCardHeader_0", function () {
        return View_MatCardHeader_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatCardHeader_Host_0", function () {
        return View_MatCardHeader_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardHeaderNgFactory", function () {
        return MatCardHeaderNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MatCardTitleGroup", function () {
        return RenderType_MatCardTitleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatCardTitleGroup_0", function () {
        return View_MatCardTitleGroup_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatCardTitleGroup_Host_0", function () {
        return View_MatCardTitleGroup_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardTitleGroupNgFactory", function () {
        return MatCardTitleGroupNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var MatCardModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], [])]);
      });

      var styles_MatCard = [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"];

      var RenderType_MatCard = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MatCard,
        data: {}
      });

      function View_MatCard_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], null, null);
      }

      function View_MatCard_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-card", [["class", "mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, View_MatCard_0, RenderType_MatCard)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

          _ck(_v, 0, 0, currVal_0);
        });
      }

      var MatCardNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-card", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], View_MatCard_Host_0, {}, {}, ["*", "mat-card-footer"]);

      var styles_MatCardHeader = [];

      var RenderType_MatCardHeader = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MatCardHeader,
        data: {}
      });

      function View_MatCardHeader_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "mat-card-header-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2)], null, null);
      }

      function View_MatCardHeader_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-card-header", [["class", "mat-card-header"]], null, null, null, View_MatCardHeader_0, RenderType_MatCardHeader)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], [], null, null)], null, null);
      }

      var MatCardHeaderNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-card-header", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], View_MatCardHeader_Host_0, {}, {}, ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"]);

      var styles_MatCardTitleGroup = [];

      var RenderType_MatCardTitleGroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MatCardTitleGroup,
        data: {}
      });

      function View_MatCardTitleGroup_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2)], null, null);
      }

      function View_MatCardTitleGroup_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, View_MatCardTitleGroup_0, RenderType_MatCardTitleGroup)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitleGroup"], [], null, null)], null, null);
      }

      var MatCardTitleGroupNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-card-title-group", _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitleGroup"], View_MatCardTitleGroup_Host_0, {}, {}, ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"]);
      /***/

    },

    /***/
    "hslW":
    /*!************************************************************!*\
      !*** ./src/app/core/services/analisis/analisis.service.ts ***!
      \************************************************************/

    /*! exports provided: AnalisisService */

    /***/
    function hslW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalisisService", function () {
        return AnalisisService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var AnalisisService = /*#__PURE__*/function () {
        function AnalisisService(http) {
          _classCallCheck(this, AnalisisService);

          this.http = http;
          this.proyectos = []; // this._getProjects().subscribe( data => {
          //   this.proyectos = data;
          // });
        }

        _createClass(AnalisisService, [{
          key: "getECDP",
          value: function getECDP() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_electricity_consumption_deconstructive_process).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getUsefulLife",
          value: function getUsefulLife() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_useful_life).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          } //api_type_energy

        }, {
          key: "getTypeEnergy",
          value: function getTypeEnergy() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getTypeEnergyData",
          value: function getTypeEnergyData() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getElectricityConsumptionData",
          value: function getElectricityConsumptionData() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_electricity_consumption_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getAnnualConsumptionRequired",
          value: function getAnnualConsumptionRequired() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_annual_consumption_required).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getSourceInformation",
          value: function getSourceInformation() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getSourceInformationData",
          value: function getSourceInformationData() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getConstructiveSystemElement",
          value: function getConstructiveSystemElement() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_construction_stage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getPotentialTypes",
          value: function getPotentialTypes() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potetnial_types).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getStandars",
          value: function getStandars() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_standards).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMaterialSchemeProyect",
          value: function getMaterialSchemeProyect() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_scheme_project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMaterialSchemeData",
          value: function getMaterialSchemeData() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_material_scheme_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateMaterialSchemeData",
          value: function updateMaterialSchemeData(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_material_scheme_data).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addMaterialSchemeData",
          value: function addMaterialSchemeData(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_material_scheme_data, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getSectionsList",
          value: function getSectionsList() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_sections).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMaterials",
          value: function getMaterials() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_materials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getPotentialTransport",
          value: function getPotentialTransport() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potential_transport).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getConversion",
          value: function getConversion() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_conversions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getDB",
          value: function getDB() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_db_material).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }]);

        return AnalisisService;
      }();

      AnalisisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function AnalisisService_Factory() {
          return new AnalisisService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: AnalisisService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "j2Il":
    /*!*****************************************!*\
      !*** ./src/app/calculos/Subetapas.json ***!
      \*****************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */

    /***/
    function j2Il(module) {
      module.exports = JSON.parse("[{\"nombre_subeatapa\":\"Extracción\",\"abreviacion\":\"A1\",\"color\":\"#4DBE89\",\"etapa\":\"Producción\"},{\"nombre_subeatapa\":\"Total Producción\",\"abreviacion\":\"A1-A3\",\"color\":\"#1DF28E\",\"etapa\":\"Producción\"},{\"nombre_subeatapa\":\"Transporte\",\"abreviacion\":\"A2\",\"color\":\"#319F6B\",\"etapa\":\"Producción\"},{\"nombre_subeatapa\":\"Manufactura\",\"abreviacion\":\"A3\",\"color\":\"#368460\",\"etapa\":\"Producción\"},{\"nombre_subeatapa\":\"Transporte\",\"abreviacion\":\"A4\",\"color\":\"#28A9B4\",\"etapa\":\"Construccion\"},{\"nombre_subeatapa\":\"Instalación\",\"abreviacion\":\"A5\",\"color\":\"#148A93\",\"etapa\":\"Construccion\"},{\"nombre_subeatapa\":\"Reemplazo\",\"abreviacion\":\"B4\",\"color\":\"#DFA1E0\",\"etapa\":\"Uso\"},{\"nombre_subeatapa\":\"Uso de energía\",\"abreviacion\":\"B6\",\"color\":\"#8A4F8B\",\"etapa\":\"Uso\"},{\"nombre_subeatapa\":\"Deconstrucción\",\"abreviacion\":\"C1\",\"color\":\"#DEA961\",\"etapa\":\"FinDeVida\"},{\"nombre_subeatapa\":\"Transporte\",\"abreviacion\":\"C2\",\"color\":\"#D18F34\",\"etapa\":\"FinDeVida\"},{\"nombre_subeatapa\":\"Tratamiento de desechos\",\"abreviacion\":\"C3\",\"color\":\"#B17626\",\"etapa\":\"FinDeVida\"},{\"nombre_subeatapa\":\"Disposición desechos\",\"abreviacion\":\"C4\",\"color\":\"#A26513\",\"etapa\":\"FinDeVida\"}]");
      /***/
    },

    /***/
    "kqb2":
    /*!************************************************************!*\
      !*** ./src/app/core/services/projects/projects.service.ts ***!
      \************************************************************/

    /*! exports provided: ProjectsService */

    /***/
    function kqb2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService(http) {
          _classCallCheck(this, ProjectsService);

          this.http = http;
        }

        _createClass(ProjectsService, [{
          key: "addProject",
          value: function addProject(projectData) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_projects, projectData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getProjectById",
          value: function getProjectById(id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_projects).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateProyect",
          value: function updateProyect(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_projects).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_projects).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addSchemeProject",
          value: function addSchemeProject(schemeData) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_scheme_project, schemeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addSchemeProjectOriginal",
          value: function addSchemeProjectOriginal(schemeData) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_scheme_project_original, schemeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMaterialSchemeProyect",
          value: function getMaterialSchemeProyect() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_scheme_project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateMaterialSchemeProject",
          value: function updateMaterialSchemeProject(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_scheme_project).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMaterialSchemeProyectOrigin",
          value: function getMaterialSchemeProyectOrigin() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_scheme_project_original).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_projects).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "searchProject",
          value: function searchProject(project) {
            console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_projects + '?search=' + project);
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_projects + '?search=' + project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }]);

        return ProjectsService;
      }();

      ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function ProjectsService_Factory() {
          return new ProjectsService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: ProjectsService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "qXT7":
    /*!****************************************************************!*\
      !*** ./node_modules/@angular/material/menu/index.ngfactory.js ***!
      \****************************************************************/

    /*! exports provided: _MatMenuDirectivesModuleNgFactory, MatMenuModuleNgFactory, RenderType__MatMenu, View__MatMenu_0, View__MatMenu_Host_0, _MatMenuNgFactory, RenderType_MatMenuItem, View_MatMenuItem_0, View_MatMenuItem_Host_0, MatMenuItemNgFactory */

    /***/
    function qXT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModuleNgFactory", function () {
        return _MatMenuDirectivesModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuModuleNgFactory", function () {
        return MatMenuModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType__MatMenu", function () {
        return RenderType__MatMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View__MatMenu_0", function () {
        return View__MatMenu_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View__MatMenu_Host_0", function () {
        return View__MatMenu_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatMenuNgFactory", function () {
        return _MatMenuNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MatMenuItem", function () {
        return RenderType_MatMenuItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatMenuItem_0", function () {
        return View_MatMenuItem_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatMenuItem_Host_0", function () {
        return View_MatMenuItem_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatMenuItemNgFactory", function () {
        return MatMenuItemNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var _MatMenuDirectivesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], [])]);
      });

      var MatMenuModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], [])]);
      });

      var styles__MatMenu = [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"];

      var RenderType__MatMenu = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles__MatMenu,
        data: {
          "animation": [{
            type: 7,
            name: "transformMenu",
            definitions: [{
              type: 0,
              name: "void",
              styles: {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: "scale(0.8)"
                },
                offset: null
              },
              options: undefined
            }, {
              type: 1,
              expr: "void => enter",
              animation: {
                type: 3,
                steps: [{
                  type: 11,
                  selector: ".mat-menu-content, .mat-mdc-menu-content",
                  animation: {
                    type: 4,
                    styles: {
                      type: 6,
                      styles: {
                        opacity: 1
                      },
                      offset: null
                    },
                    timings: "100ms linear"
                  },
                  options: null
                }, {
                  type: 4,
                  styles: {
                    type: 6,
                    styles: {
                      transform: "scale(1)"
                    },
                    offset: null
                  },
                  timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
                }],
                options: null
              },
              options: null
            }, {
              type: 1,
              expr: "* => void",
              animation: {
                type: 4,
                styles: {
                  type: 6,
                  styles: {
                    opacity: 0
                  },
                  offset: null
                },
                timings: "100ms 25ms linear"
              },
              options: null
            }],
            options: {}
          }, {
            type: 7,
            name: "fadeInItems",
            definitions: [{
              type: 0,
              name: "showing",
              styles: {
                type: 6,
                styles: {
                  opacity: 1
                },
                offset: null
              },
              options: undefined
            }, {
              type: 1,
              expr: "void => *",
              animation: [{
                type: 6,
                styles: {
                  opacity: 0
                },
                offset: null
              }, {
                type: 4,
                styles: null,
                timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
              }],
              options: null
            }],
            options: {}
          }]
        }
      });

      function View__MatMenu_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mat-menu-panel"], ["role", "menu"], ["tabindex", "-1"]], [[8, "id", 0], [24, "@transformMenu", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-describedby", 0]], [[null, "keydown"], [null, "click"], [null, "@transformMenu.start"], [null, "@transformMenu.done"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _co._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.closed.emit("click") !== false;
            ad = pd_1 && ad;
          }

          if ("@transformMenu.start" === en) {
            var pd_2 = _co._onAnimationStart($event) !== false;
            ad = pd_2 && ad;
          }

          if ("@transformMenu.done" === en) {
            var pd_3 = _co._onAnimationDone($event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "mat-menu-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_5 = "mat-menu-panel";
          var currVal_6 = _co._classList;

          _ck(_v, 1, 0, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.panelId;
          var currVal_1 = _co._panelAnimationState;
          var currVal_2 = _co.ariaLabel || null;
          var currVal_3 = _co.ariaLabelledby || null;
          var currVal_4 = _co.ariaDescribedby || null;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        });
      }

      function View__MatMenu_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
          templateRef: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2]], null, 0, null, View__MatMenu_1))], null, null);
      }

      function View__MatMenu_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "mat-menu", [], null, null, null, View__MatMenu_0, RenderType__MatMenu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 1294336, null, 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
          _allItems: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
          items: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
          lazyContent: 0
        })], function (_ck, _v) {
          _ck(_v, 3, 0);
        }, null);
      }

      var _MatMenuNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-menu", _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], View__MatMenu_Host_0, {
        backdropClass: "backdropClass",
        ariaLabel: "aria-label",
        ariaLabelledby: "aria-labelledby",
        ariaDescribedby: "aria-describedby",
        xPosition: "xPosition",
        yPosition: "yPosition",
        overlapTrigger: "overlapTrigger",
        hasBackdrop: "hasBackdrop",
        panelClass: "class",
        classList: "classList"
      }, {
        closed: "closed",
        close: "close"
      }, ["*"]);

      var styles_MatMenuItem = [];

      var RenderType_MatMenuItem = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MatMenuItem,
        data: {}
      });

      function View_MatMenuItem_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "mat-menu-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], {
          disabled: [0, "disabled"],
          trigger: [1, "trigger"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.disableRipple || _co.disabled;

          var currVal_2 = _co._getHostElement();

          _ck(_v, 2, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).unbounded;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_MatMenuItem_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._checkDisabled($event) !== false;
            ad = pd_0 && ad;
          }

          if ("mouseenter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleMouseEnter() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, View_MatMenuItem_0, RenderType_MatMenuItem)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MAT_MENU_PANEL"]]], null, null)], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).role;

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._highlighted;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._triggersSubmenu;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._getTabIndex();

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled.toString();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        });
      }

      var MatMenuItemNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[mat-menu-item]", _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], View_MatMenuItem_Host_0, {
        disabled: "disabled",
        disableRipple: "disableRipple",
        role: "role"
      }, {}, ["*"]);
      /***/

    },

    /***/
    "qb46":
    /*!**********************************************************************************!*\
      !*** ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js ***!
      \**********************************************************************************/

    /*! no static exports found */

    /***/
    function qb46(module, exports, __webpack_require__) {
      /*!
       * chartjs-plugin-datalabels v0.7.0
       * https://chartjs-plugin-datalabels.netlify.com
       * (c) 2019 Chart.js Contributors
       * Released under the MIT license
       */
      (function (global, factory) {
        true ? module.exports = factory(__webpack_require__(
        /*! chart.js */
        "MO+k")) : undefined;
      })(this, function (Chart) {
        'use strict';

        Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;
        var helpers = Chart.helpers;

        var devicePixelRatio = function () {
          if (typeof window !== 'undefined') {
            if (window.devicePixelRatio) {
              return window.devicePixelRatio;
            } // devicePixelRatio is undefined on IE10
            // https://stackoverflow.com/a/20204180/8837887
            // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85


            var screen = window.screen;

            if (screen) {
              return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
            }
          }

          return 1;
        }();

        var utils = {
          // @todo move this in Chart.helpers.toTextLines
          toTextLines: function toTextLines(inputs) {
            var lines = [];
            var input;
            inputs = [].concat(inputs);

            while (inputs.length) {
              input = inputs.pop();

              if (typeof input === 'string') {
                lines.unshift.apply(lines, input.split('\n'));
              } else if (Array.isArray(input)) {
                inputs.push.apply(inputs, input);
              } else if (!helpers.isNullOrUndef(inputs)) {
                lines.unshift('' + input);
              }
            }

            return lines;
          },
          // @todo move this method in Chart.helpers.canvas.toFont (deprecates helpers.fontString)
          // @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
          toFontString: function toFontString(font) {
            if (!font || helpers.isNullOrUndef(font.size) || helpers.isNullOrUndef(font.family)) {
              return null;
            }

            return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
          },
          // @todo move this in Chart.helpers.canvas.textSize
          // @todo cache calls of measureText if font doesn't change?!
          textSize: function textSize(ctx, lines, font) {
            var items = [].concat(lines);
            var ilen = items.length;
            var prev = ctx.font;
            var width = 0;
            var i;
            ctx.font = font.string;

            for (i = 0; i < ilen; ++i) {
              width = Math.max(ctx.measureText(items[i]).width, width);
            }

            ctx.font = prev;
            return {
              height: ilen * font.lineHeight,
              width: width
            };
          },
          // @todo move this method in Chart.helpers.options.toFont
          parseFont: function parseFont(value) {
            var global = Chart.defaults.global;
            var size = helpers.valueOrDefault(value.size, global.defaultFontSize);
            var font = {
              family: helpers.valueOrDefault(value.family, global.defaultFontFamily),
              lineHeight: helpers.options.toLineHeight(value.lineHeight, size),
              size: size,
              style: helpers.valueOrDefault(value.style, global.defaultFontStyle),
              weight: helpers.valueOrDefault(value.weight, null),
              string: ''
            };
            font.string = utils.toFontString(font);
            return font;
          },

          /**
           * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
           * @todo move this method in Chart.helpers.bound
           * https://doc.qt.io/qt-5/qtglobal.html#qBound
           */
          bound: function bound(min, value, max) {
            return Math.max(min, Math.min(value, max));
          },

          /**
           * Returns an array of pair [value, state] where state is:
           * * -1: value is only in a0 (removed)
           * *  1: value is only in a1 (added)
           */
          arrayDiff: function arrayDiff(a0, a1) {
            var prev = a0.slice();
            var updates = [];
            var i, j, ilen, v;

            for (i = 0, ilen = a1.length; i < ilen; ++i) {
              v = a1[i];
              j = prev.indexOf(v);

              if (j === -1) {
                updates.push([v, 1]);
              } else {
                prev.splice(j, 1);
              }
            }

            for (i = 0, ilen = prev.length; i < ilen; ++i) {
              updates.push([prev[i], -1]);
            }

            return updates;
          },

          /**
           * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
           */
          rasterize: function rasterize(v) {
            return Math.round(v * devicePixelRatio) / devicePixelRatio;
          }
        };

        function orient(point, origin) {
          var x0 = origin.x;
          var y0 = origin.y;

          if (x0 === null) {
            return {
              x: 0,
              y: -1
            };
          }

          if (y0 === null) {
            return {
              x: 1,
              y: 0
            };
          }

          var dx = point.x - x0;
          var dy = point.y - y0;
          var ln = Math.sqrt(dx * dx + dy * dy);
          return {
            x: ln ? dx / ln : 0,
            y: ln ? dy / ln : -1
          };
        }

        function aligned(x, y, vx, vy, align) {
          switch (align) {
            case 'center':
              vx = vy = 0;
              break;

            case 'bottom':
              vx = 0;
              vy = 1;
              break;

            case 'right':
              vx = 1;
              vy = 0;
              break;

            case 'left':
              vx = -1;
              vy = 0;
              break;

            case 'top':
              vx = 0;
              vy = -1;
              break;

            case 'start':
              vx = -vx;
              vy = -vy;
              break;

            case 'end':
              // keep natural orientation
              break;

            default:
              // clockwise rotation (in degree)
              align *= Math.PI / 180;
              vx = Math.cos(align);
              vy = Math.sin(align);
              break;
          }

          return {
            x: x,
            y: y,
            vx: vx,
            vy: vy
          };
        } // Line clipping (Cohen–Sutherland algorithm)
        // https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm


        var R_INSIDE = 0;
        var R_LEFT = 1;
        var R_RIGHT = 2;
        var R_BOTTOM = 4;
        var R_TOP = 8;

        function region(x, y, rect) {
          var res = R_INSIDE;

          if (x < rect.left) {
            res |= R_LEFT;
          } else if (x > rect.right) {
            res |= R_RIGHT;
          }

          if (y < rect.top) {
            res |= R_TOP;
          } else if (y > rect.bottom) {
            res |= R_BOTTOM;
          }

          return res;
        }

        function clipped(segment, area) {
          var x0 = segment.x0;
          var y0 = segment.y0;
          var x1 = segment.x1;
          var y1 = segment.y1;
          var r0 = region(x0, y0, area);
          var r1 = region(x1, y1, area);
          var r, x, y; // eslint-disable-next-line no-constant-condition

          while (true) {
            if (!(r0 | r1) || r0 & r1) {
              // both points inside or on the same side: no clipping
              break;
            } // at least one point is outside


            r = r0 || r1;

            if (r & R_TOP) {
              x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
              y = area.top;
            } else if (r & R_BOTTOM) {
              x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
              y = area.bottom;
            } else if (r & R_RIGHT) {
              y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
              x = area.right;
            } else if (r & R_LEFT) {
              y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
              x = area.left;
            }

            if (r === r0) {
              x0 = x;
              y0 = y;
              r0 = region(x0, y0, area);
            } else {
              x1 = x;
              y1 = y;
              r1 = region(x1, y1, area);
            }
          }

          return {
            x0: x0,
            x1: x1,
            y0: y0,
            y1: y1
          };
        }

        function compute(range, config) {
          var anchor = config.anchor;
          var segment = range;
          var x, y;

          if (config.clamp) {
            segment = clipped(segment, config.area);
          }

          if (anchor === 'start') {
            x = segment.x0;
            y = segment.y0;
          } else if (anchor === 'end') {
            x = segment.x1;
            y = segment.y1;
          } else {
            x = (segment.x0 + segment.x1) / 2;
            y = (segment.y0 + segment.y1) / 2;
          }

          return aligned(x, y, range.vx, range.vy, config.align);
        }

        var positioners = {
          arc: function arc(vm, config) {
            var angle = (vm.startAngle + vm.endAngle) / 2;
            var vx = Math.cos(angle);
            var vy = Math.sin(angle);
            var r0 = vm.innerRadius;
            var r1 = vm.outerRadius;
            return compute({
              x0: vm.x + vx * r0,
              y0: vm.y + vy * r0,
              x1: vm.x + vx * r1,
              y1: vm.y + vy * r1,
              vx: vx,
              vy: vy
            }, config);
          },
          point: function point(vm, config) {
            var v = orient(vm, config.origin);
            var rx = v.x * vm.radius;
            var ry = v.y * vm.radius;
            return compute({
              x0: vm.x - rx,
              y0: vm.y - ry,
              x1: vm.x + rx,
              y1: vm.y + ry,
              vx: v.x,
              vy: v.y
            }, config);
          },
          rect: function rect(vm, config) {
            var v = orient(vm, config.origin);
            var x = vm.x;
            var y = vm.y;
            var sx = 0;
            var sy = 0;

            if (vm.horizontal) {
              x = Math.min(vm.x, vm.base);
              sx = Math.abs(vm.base - vm.x);
            } else {
              y = Math.min(vm.y, vm.base);
              sy = Math.abs(vm.base - vm.y);
            }

            return compute({
              x0: x,
              y0: y + sy,
              x1: x + sx,
              y1: y,
              vx: v.x,
              vy: v.y
            }, config);
          },
          fallback: function fallback(vm, config) {
            var v = orient(vm, config.origin);
            return compute({
              x0: vm.x,
              y0: vm.y,
              x1: vm.x,
              y1: vm.y,
              vx: v.x,
              vy: v.y
            }, config);
          }
        };
        var helpers$1 = Chart.helpers;
        var rasterize = utils.rasterize;

        function boundingRects(model) {
          var borderWidth = model.borderWidth || 0;
          var padding = model.padding;
          var th = model.size.height;
          var tw = model.size.width;
          var tx = -tw / 2;
          var ty = -th / 2;
          return {
            frame: {
              x: tx - padding.left - borderWidth,
              y: ty - padding.top - borderWidth,
              w: tw + padding.width + borderWidth * 2,
              h: th + padding.height + borderWidth * 2
            },
            text: {
              x: tx,
              y: ty,
              w: tw,
              h: th
            }
          };
        }

        function getScaleOrigin(el) {
          var horizontal = el._model.horizontal;
          var scale = el._scale || horizontal && el._xScale || el._yScale;

          if (!scale) {
            return null;
          }

          if (scale.xCenter !== undefined && scale.yCenter !== undefined) {
            return {
              x: scale.xCenter,
              y: scale.yCenter
            };
          }

          var pixel = scale.getBasePixel();
          return horizontal ? {
            x: pixel,
            y: null
          } : {
            x: null,
            y: pixel
          };
        }

        function getPositioner(el) {
          if (el instanceof Chart.elements.Arc) {
            return positioners.arc;
          }

          if (el instanceof Chart.elements.Point) {
            return positioners.point;
          }

          if (el instanceof Chart.elements.Rectangle) {
            return positioners.rect;
          }

          return positioners.fallback;
        }

        function drawFrame(ctx, rect, model) {
          var bgColor = model.backgroundColor;
          var borderColor = model.borderColor;
          var borderWidth = model.borderWidth;

          if (!bgColor && (!borderColor || !borderWidth)) {
            return;
          }

          ctx.beginPath();
          helpers$1.canvas.roundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
          ctx.closePath();

          if (bgColor) {
            ctx.fillStyle = bgColor;
            ctx.fill();
          }

          if (borderColor && borderWidth) {
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = borderWidth;
            ctx.lineJoin = 'miter';
            ctx.stroke();
          }
        }

        function textGeometry(rect, align, font) {
          var h = font.lineHeight;
          var w = rect.w;
          var x = rect.x;
          var y = rect.y + h / 2;

          if (align === 'center') {
            x += w / 2;
          } else if (align === 'end' || align === 'right') {
            x += w;
          }

          return {
            h: h,
            w: w,
            x: x,
            y: y
          };
        }

        function drawTextLine(ctx, text, cfg) {
          var shadow = ctx.shadowBlur;
          var stroked = cfg.stroked;
          var x = rasterize(cfg.x);
          var y = rasterize(cfg.y);
          var w = rasterize(cfg.w);

          if (stroked) {
            ctx.strokeText(text, x, y, w);
          }

          if (cfg.filled) {
            if (shadow && stroked) {
              // Prevent drawing shadow on both the text stroke and fill, so
              // if the text is stroked, remove the shadow for the text fill.
              ctx.shadowBlur = 0;
            }

            ctx.fillText(text, x, y, w);

            if (shadow && stroked) {
              ctx.shadowBlur = shadow;
            }
          }
        }

        function drawText(ctx, lines, rect, model) {
          var align = model.textAlign;
          var color = model.color;
          var filled = !!color;
          var font = model.font;
          var ilen = lines.length;
          var strokeColor = model.textStrokeColor;
          var strokeWidth = model.textStrokeWidth;
          var stroked = strokeColor && strokeWidth;
          var i;

          if (!ilen || !filled && !stroked) {
            return;
          } // Adjust coordinates based on text alignment and line height


          rect = textGeometry(rect, align, font);
          ctx.font = font.string;
          ctx.textAlign = align;
          ctx.textBaseline = 'middle';
          ctx.shadowBlur = model.textShadowBlur;
          ctx.shadowColor = model.textShadowColor;

          if (filled) {
            ctx.fillStyle = color;
          }

          if (stroked) {
            ctx.lineJoin = 'round';
            ctx.lineWidth = strokeWidth;
            ctx.strokeStyle = strokeColor;
          }

          for (i = 0, ilen = lines.length; i < ilen; ++i) {
            drawTextLine(ctx, lines[i], {
              stroked: stroked,
              filled: filled,
              w: rect.w,
              x: rect.x,
              y: rect.y + rect.h * i
            });
          }
        }

        var Label = function Label(config, ctx, el, index) {
          var me = this;
          me._config = config;
          me._index = index;
          me._model = null;
          me._rects = null;
          me._ctx = ctx;
          me._el = el;
        };

        helpers$1.extend(Label.prototype, {
          /**
           * @private
           */
          _modelize: function _modelize(display, lines, config, context) {
            var me = this;
            var index = me._index;
            var resolve = helpers$1.options.resolve;
            var font = utils.parseFont(resolve([config.font, {}], context, index));
            var color = resolve([config.color, Chart.defaults.global.defaultFontColor], context, index);
            return {
              align: resolve([config.align, 'center'], context, index),
              anchor: resolve([config.anchor, 'center'], context, index),
              area: context.chart.chartArea,
              backgroundColor: resolve([config.backgroundColor, null], context, index),
              borderColor: resolve([config.borderColor, null], context, index),
              borderRadius: resolve([config.borderRadius, 0], context, index),
              borderWidth: resolve([config.borderWidth, 0], context, index),
              clamp: resolve([config.clamp, false], context, index),
              clip: resolve([config.clip, false], context, index),
              color: color,
              display: display,
              font: font,
              lines: lines,
              offset: resolve([config.offset, 0], context, index),
              opacity: resolve([config.opacity, 1], context, index),
              origin: getScaleOrigin(me._el),
              padding: helpers$1.options.toPadding(resolve([config.padding, 0], context, index)),
              positioner: getPositioner(me._el),
              rotation: resolve([config.rotation, 0], context, index) * (Math.PI / 180),
              size: utils.textSize(me._ctx, lines, font),
              textAlign: resolve([config.textAlign, 'start'], context, index),
              textShadowBlur: resolve([config.textShadowBlur, 0], context, index),
              textShadowColor: resolve([config.textShadowColor, color], context, index),
              textStrokeColor: resolve([config.textStrokeColor, color], context, index),
              textStrokeWidth: resolve([config.textStrokeWidth, 0], context, index)
            };
          },
          update: function update(context) {
            var me = this;
            var model = null;
            var rects = null;
            var index = me._index;
            var config = me._config;
            var value, label, lines; // We first resolve the display option (separately) to avoid computing
            // other options in case the label is hidden (i.e. display: false).

            var display = helpers$1.options.resolve([config.display, true], context, index);

            if (display) {
              value = context.dataset.data[index];
              label = helpers$1.valueOrDefault(helpers$1.callback(config.formatter, [value, context]), value);
              lines = helpers$1.isNullOrUndef(label) ? [] : utils.toTextLines(label);

              if (lines.length) {
                model = me._modelize(display, lines, config, context);
                rects = boundingRects(model);
              }
            }

            me._model = model;
            me._rects = rects;
          },
          geometry: function geometry() {
            return this._rects ? this._rects.frame : {};
          },
          rotation: function rotation() {
            return this._model ? this._model.rotation : 0;
          },
          visible: function visible() {
            return this._model && this._model.opacity;
          },
          model: function model() {
            return this._model;
          },
          draw: function draw(chart, center) {
            var me = this;
            var ctx = chart.ctx;
            var model = me._model;
            var rects = me._rects;
            var area;

            if (!this.visible()) {
              return;
            }

            ctx.save();

            if (model.clip) {
              area = model.area;
              ctx.beginPath();
              ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
              ctx.clip();
            }

            ctx.globalAlpha = utils.bound(0, model.opacity, 1);
            ctx.translate(rasterize(center.x), rasterize(center.y));
            ctx.rotate(model.rotation);
            drawFrame(ctx, rects.frame, model);
            drawText(ctx, model.lines, rects.text, model);
            ctx.restore();
          }
        });
        var helpers$2 = Chart.helpers;
        var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger

        var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger

        function rotated(point, center, angle) {
          var cos = Math.cos(angle);
          var sin = Math.sin(angle);
          var cx = center.x;
          var cy = center.y;
          return {
            x: cx + cos * (point.x - cx) - sin * (point.y - cy),
            y: cy + sin * (point.x - cx) + cos * (point.y - cy)
          };
        }

        function projected(points, axis) {
          var min = MAX_INTEGER;
          var max = MIN_INTEGER;
          var origin = axis.origin;
          var i, pt, vx, vy, dp;

          for (i = 0; i < points.length; ++i) {
            pt = points[i];
            vx = pt.x - origin.x;
            vy = pt.y - origin.y;
            dp = axis.vx * vx + axis.vy * vy;
            min = Math.min(min, dp);
            max = Math.max(max, dp);
          }

          return {
            min: min,
            max: max
          };
        }

        function toAxis(p0, p1) {
          var vx = p1.x - p0.x;
          var vy = p1.y - p0.y;
          var ln = Math.sqrt(vx * vx + vy * vy);
          return {
            vx: (p1.x - p0.x) / ln,
            vy: (p1.y - p0.y) / ln,
            origin: p0,
            ln: ln
          };
        }

        var HitBox = function HitBox() {
          this._rotation = 0;
          this._rect = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
          };
        };

        helpers$2.extend(HitBox.prototype, {
          center: function center() {
            var r = this._rect;
            return {
              x: r.x + r.w / 2,
              y: r.y + r.h / 2
            };
          },
          update: function update(center, rect, rotation) {
            this._rotation = rotation;
            this._rect = {
              x: rect.x + center.x,
              y: rect.y + center.y,
              w: rect.w,
              h: rect.h
            };
          },
          contains: function contains(point) {
            var me = this;
            var margin = 1;
            var rect = me._rect;
            point = rotated(point, me.center(), -me._rotation);
            return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
          },
          // Separating Axis Theorem
          // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
          intersects: function intersects(other) {
            var r0 = this._points();

            var r1 = other._points();

            var axes = [toAxis(r0[0], r0[1]), toAxis(r0[0], r0[3])];
            var i, pr0, pr1;

            if (this._rotation !== other._rotation) {
              // Only separate with r1 axis if the rotation is different,
              // else it's enough to separate r0 and r1 with r0 axis only!
              axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
            }

            for (i = 0; i < axes.length; ++i) {
              pr0 = projected(r0, axes[i]);
              pr1 = projected(r1, axes[i]);

              if (pr0.max < pr1.min || pr1.max < pr0.min) {
                return false;
              }
            }

            return true;
          },

          /**
           * @private
           */
          _points: function _points() {
            var me = this;
            var rect = me._rect;
            var angle = me._rotation;
            var center = me.center();
            return [rotated({
              x: rect.x,
              y: rect.y
            }, center, angle), rotated({
              x: rect.x + rect.w,
              y: rect.y
            }, center, angle), rotated({
              x: rect.x + rect.w,
              y: rect.y + rect.h
            }, center, angle), rotated({
              x: rect.x,
              y: rect.y + rect.h
            }, center, angle)];
          }
        });

        function coordinates(view, model, geometry) {
          var point = model.positioner(view, model);
          var vx = point.vx;
          var vy = point.vy;

          if (!vx && !vy) {
            // if aligned center, we don't want to offset the center point
            return {
              x: point.x,
              y: point.y
            };
          }

          var w = geometry.w;
          var h = geometry.h; // take in account the label rotation

          var rotation = model.rotation;
          var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
          var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation)); // scale the unit vector (vx, vy) to get at least dx or dy equal to
          // w or h respectively (else we would calculate the distance to the
          // ellipse inscribed in the bounding rect)

          var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
          dx *= vx * vs;
          dy *= vy * vs; // finally, include the explicit offset

          dx += model.offset * vx;
          dy += model.offset * vy;
          return {
            x: point.x + dx,
            y: point.y + dy
          };
        }

        function collide(labels, collider) {
          var i, j, s0, s1; // IMPORTANT Iterate in the reverse order since items at the end of the
          // list have an higher weight/priority and thus should be less impacted
          // by the overlapping strategy.

          for (i = labels.length - 1; i >= 0; --i) {
            s0 = labels[i].$layout;

            for (j = i - 1; j >= 0 && s0._visible; --j) {
              s1 = labels[j].$layout;

              if (s1._visible && s0._box.intersects(s1._box)) {
                collider(s0, s1);
              }
            }
          }

          return labels;
        }

        function compute$1(labels) {
          var i, ilen, label, state, geometry, center; // Initialize labels for overlap detection

          for (i = 0, ilen = labels.length; i < ilen; ++i) {
            label = labels[i];
            state = label.$layout;

            if (state._visible) {
              geometry = label.geometry();
              center = coordinates(label._el._model, label.model(), geometry);

              state._box.update(center, geometry, label.rotation());
            }
          } // Auto hide overlapping labels


          return collide(labels, function (s0, s1) {
            var h0 = s0._hidable;
            var h1 = s1._hidable;

            if (h0 && h1 || h1) {
              s1._visible = false;
            } else if (h0) {
              s0._visible = false;
            }
          });
        }

        var layout = {
          prepare: function prepare(datasets) {
            var labels = [];
            var i, j, ilen, jlen, label;

            for (i = 0, ilen = datasets.length; i < ilen; ++i) {
              for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
                label = datasets[i][j];
                labels.push(label);
                label.$layout = {
                  _box: new HitBox(),
                  _hidable: false,
                  _visible: true,
                  _set: i,
                  _idx: j
                };
              }
            } // TODO New `z` option: labels with a higher z-index are drawn
            // of top of the ones with a lower index. Lowest z-index labels
            // are also discarded first when hiding overlapping labels.


            labels.sort(function (a, b) {
              var sa = a.$layout;
              var sb = b.$layout;
              return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
            });
            this.update(labels);
            return labels;
          },
          update: function update(labels) {
            var dirty = false;
            var i, ilen, label, model, state;

            for (i = 0, ilen = labels.length; i < ilen; ++i) {
              label = labels[i];
              model = label.model();
              state = label.$layout;
              state._hidable = model && model.display === 'auto';
              state._visible = label.visible();
              dirty |= state._hidable;
            }

            if (dirty) {
              compute$1(labels);
            }
          },
          lookup: function lookup(labels, point) {
            var i, state; // IMPORTANT Iterate in the reverse order since items at the end of
            // the list have an higher z-index, thus should be picked first.

            for (i = labels.length - 1; i >= 0; --i) {
              state = labels[i].$layout;

              if (state && state._visible && state._box.contains(point)) {
                return labels[i];
              }
            }

            return null;
          },
          draw: function draw(chart, labels) {
            var i, ilen, label, state, geometry, center;

            for (i = 0, ilen = labels.length; i < ilen; ++i) {
              label = labels[i];
              state = label.$layout;

              if (state._visible) {
                geometry = label.geometry();
                center = coordinates(label._el._view, label.model(), geometry);

                state._box.update(center, geometry, label.rotation());

                label.draw(chart, center);
              }
            }
          }
        };
        var helpers$3 = Chart.helpers;

        var formatter = function formatter(value) {
          if (helpers$3.isNullOrUndef(value)) {
            return null;
          }

          var label = value;
          var keys, klen, k;

          if (helpers$3.isObject(value)) {
            if (!helpers$3.isNullOrUndef(value.label)) {
              label = value.label;
            } else if (!helpers$3.isNullOrUndef(value.r)) {
              label = value.r;
            } else {
              label = '';
              keys = Object.keys(value);

              for (k = 0, klen = keys.length; k < klen; ++k) {
                label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
              }
            }
          }

          return '' + label;
        };
        /**
         * IMPORTANT: make sure to also update tests and TypeScript definition
         * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
         */


        var defaults = {
          align: 'center',
          anchor: 'center',
          backgroundColor: null,
          borderColor: null,
          borderRadius: 0,
          borderWidth: 0,
          clamp: false,
          clip: false,
          color: undefined,
          display: true,
          font: {
            family: undefined,
            lineHeight: 1.2,
            size: undefined,
            style: undefined,
            weight: null
          },
          formatter: formatter,
          labels: undefined,
          listeners: {},
          offset: 4,
          opacity: 1,
          padding: {
            top: 4,
            right: 4,
            bottom: 4,
            left: 4
          },
          rotation: 0,
          textAlign: 'start',
          textStrokeColor: undefined,
          textStrokeWidth: 0,
          textShadowBlur: 0,
          textShadowColor: undefined
        };
        /**
         * @see https://github.com/chartjs/Chart.js/issues/4176
         */

        var helpers$4 = Chart.helpers;
        var EXPANDO_KEY = '$datalabels';
        var DEFAULT_KEY = '$default';

        function configure(dataset, options) {
          var override = dataset.datalabels;
          var listeners = {};
          var configs = [];
          var labels, keys;

          if (override === false) {
            return null;
          }

          if (override === true) {
            override = {};
          }

          options = helpers$4.merge({}, [options, override]);
          labels = options.labels || {};
          keys = Object.keys(labels);
          delete options.labels;

          if (keys.length) {
            keys.forEach(function (key) {
              if (labels[key]) {
                configs.push(helpers$4.merge({}, [options, labels[key], {
                  _key: key
                }]));
              }
            });
          } else {
            // Default label if no "named" label defined.
            configs.push(options);
          } // listeners: {<event-type>: {<label-key>: <fn>}}


          listeners = configs.reduce(function (target, config) {
            helpers$4.each(config.listeners || {}, function (fn, event) {
              target[event] = target[event] || {};
              target[event][config._key || DEFAULT_KEY] = fn;
            });
            delete config.listeners;
            return target;
          }, {});
          return {
            labels: configs,
            listeners: listeners
          };
        }

        function dispatchEvent(chart, listeners, label) {
          if (!listeners) {
            return;
          }

          var context = label.$context;
          var groups = label.$groups;
          var callback;

          if (!listeners[groups._set]) {
            return;
          }

          callback = listeners[groups._set][groups._key];

          if (!callback) {
            return;
          }

          if (helpers$4.callback(callback, [context]) === true) {
            // Users are allowed to tweak the given context by injecting values that can be
            // used in scriptable options to display labels differently based on the current
            // event (e.g. highlight an hovered label). That's why we update the label with
            // the output context and schedule a new chart render by setting it dirty.
            chart[EXPANDO_KEY]._dirty = true;
            label.update(context);
          }
        }

        function dispatchMoveEvents(chart, listeners, previous, label) {
          var enter, leave;

          if (!previous && !label) {
            return;
          }

          if (!previous) {
            enter = true;
          } else if (!label) {
            leave = true;
          } else if (previous !== label) {
            leave = enter = true;
          }

          if (leave) {
            dispatchEvent(chart, listeners.leave, previous);
          }

          if (enter) {
            dispatchEvent(chart, listeners.enter, label);
          }
        }

        function handleMoveEvents(chart, event) {
          var expando = chart[EXPANDO_KEY];
          var listeners = expando._listeners;
          var previous, label;

          if (!listeners.enter && !listeners.leave) {
            return;
          }

          if (event.type === 'mousemove') {
            label = layout.lookup(expando._labels, event);
          } else if (event.type !== 'mouseout') {
            return;
          }

          previous = expando._hovered;
          expando._hovered = label;
          dispatchMoveEvents(chart, listeners, previous, label);
        }

        function handleClickEvents(chart, event) {
          var expando = chart[EXPANDO_KEY];
          var handlers = expando._listeners.click;
          var label = handlers && layout.lookup(expando._labels, event);

          if (label) {
            dispatchEvent(chart, handlers, label);
          }
        } // https://github.com/chartjs/chartjs-plugin-datalabels/issues/108


        function invalidate(chart) {
          if (chart.animating) {
            return;
          } // `chart.animating` can be `false` even if there is animation in progress,
          // so let's iterate all animations to find if there is one for the `chart`.


          var animations = Chart.animationService.animations;

          for (var i = 0, ilen = animations.length; i < ilen; ++i) {
            if (animations[i].chart === chart) {
              return;
            }
          } // No render scheduled: trigger a "lazy" render that can be canceled in case
          // of hover interactions. The 1ms duration is a workaround to make sure an
          // animation is created so the controller can stop it before any transition.


          chart.render({
            duration: 1,
            lazy: true
          });
        }

        Chart.defaults.global.plugins.datalabels = defaults;
        var plugin = {
          id: 'datalabels',
          beforeInit: function beforeInit(chart) {
            chart[EXPANDO_KEY] = {
              _actives: []
            };
          },
          beforeUpdate: function beforeUpdate(chart) {
            var expando = chart[EXPANDO_KEY];
            expando._listened = false;
            expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}

            expando._datasets = []; // per dataset labels: [Label[]]

            expando._labels = []; // layouted labels: Label[]
          },
          afterDatasetUpdate: function afterDatasetUpdate(chart, args, options) {
            var datasetIndex = args.index;
            var expando = chart[EXPANDO_KEY];
            var labels = expando._datasets[datasetIndex] = [];
            var visible = chart.isDatasetVisible(datasetIndex);
            var dataset = chart.data.datasets[datasetIndex];
            var config = configure(dataset, options);
            var elements = args.meta.data || [];
            var ctx = chart.ctx;
            var i, j, ilen, jlen, cfg, key, el, label;
            ctx.save();

            for (i = 0, ilen = elements.length; i < ilen; ++i) {
              el = elements[i];
              el[EXPANDO_KEY] = [];

              if (visible && el && !el.hidden && !el._model.skip) {
                for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
                  cfg = config.labels[j];
                  key = cfg._key;
                  label = new Label(cfg, ctx, el, i);
                  label.$groups = {
                    _set: datasetIndex,
                    _key: key || DEFAULT_KEY
                  };
                  label.$context = {
                    active: false,
                    chart: chart,
                    dataIndex: i,
                    dataset: dataset,
                    datasetIndex: datasetIndex
                  };
                  label.update(label.$context);
                  el[EXPANDO_KEY].push(label);
                  labels.push(label);
                }
              }
            }

            ctx.restore(); // Store listeners at the chart level and per event type to optimize
            // cases where no listeners are registered for a specific event.

            helpers$4.merge(expando._listeners, config.listeners, {
              merger: function merger(event, target, source) {
                target[event] = target[event] || {};
                target[event][args.index] = source[event];
                expando._listened = true;
              }
            });
          },
          afterUpdate: function afterUpdate(chart, options) {
            chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets, options);
          },
          // Draw labels on top of all dataset elements
          // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
          // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
          afterDatasetsDraw: function afterDatasetsDraw(chart) {
            layout.draw(chart, chart[EXPANDO_KEY]._labels);
          },
          beforeEvent: function beforeEvent(chart, event) {
            // If there is no listener registered for this chart, `listened` will be false,
            // meaning we can immediately ignore the incoming event and avoid useless extra
            // computation for users who don't implement label interactions.
            if (chart[EXPANDO_KEY]._listened) {
              switch (event.type) {
                case 'mousemove':
                case 'mouseout':
                  handleMoveEvents(chart, event);
                  break;

                case 'click':
                  handleClickEvents(chart, event);
                  break;

                default:
              }
            }
          },
          afterEvent: function afterEvent(chart) {
            var expando = chart[EXPANDO_KEY];
            var previous = expando._actives;
            var actives = expando._actives = chart.lastActive || []; // public API?!

            var updates = utils.arrayDiff(previous, actives);
            var i, ilen, j, jlen, update, label, labels;

            for (i = 0, ilen = updates.length; i < ilen; ++i) {
              update = updates[i];

              if (update[1]) {
                labels = update[0][EXPANDO_KEY] || [];

                for (j = 0, jlen = labels.length; j < jlen; ++j) {
                  label = labels[j];
                  label.$context.active = update[1] === 1;
                  label.update(label.$context);
                }
              }
            }

            if (expando._dirty || updates.length) {
              layout.update(expando._labels);
              invalidate(chart);
            }

            delete expando._dirty;
          }
        }; // TODO Remove at version 1, we shouldn't automatically register plugins.
        // https://github.com/chartjs/chartjs-plugin-datalabels/issues/42

        Chart.plugins.register(plugin);
        return plugin;
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~comparar-comparar-module-ngfactory~home-evamed-home-evamed-module-ngfactory-es5.js.map