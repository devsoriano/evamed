(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materials-stage-materials-stage-module-ngfactory"], {
    /***/
    "/jgH":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/add-constructive-system/add-constructive-system.component.ngfactory.js ***!
      \*******************************************************************************************************************/

    /*! exports provided: RenderType_AddConstructiveSystemComponent, View_AddConstructiveSystemComponent_0, View_AddConstructiveSystemComponent_Host_0, AddConstructiveSystemComponentNgFactory */

    /***/
    function jgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AddConstructiveSystemComponent", function () {
        return RenderType_AddConstructiveSystemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddConstructiveSystemComponent_0", function () {
        return View_AddConstructiveSystemComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddConstructiveSystemComponent_Host_0", function () {
        return View_AddConstructiveSystemComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddConstructiveSystemComponentNgFactory", function () {
        return AddConstructiveSystemComponentNgFactory;
      });
      /* harmony import */


      var _add_constructive_system_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-constructive-system.component.scss.shim.ngstyle */
      "L0Qk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _add_constructive_system_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./add-constructive-system.component */
      "rnGK");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AddConstructiveSystemComponent = [_add_constructive_system_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AddConstructiveSystemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AddConstructiveSystemComponent,
        data: {}
      });

      function View_AddConstructiveSystemComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nuevo sistema constructivo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 26, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 23, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nombre del sistema constructivo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 7, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.data.newConstructiveSystem = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "button", [["class", "yellow-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).dialogResult) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], {
          dialogResult: [0, "dialogResult"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Crear sistema "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 2, 0);

          var currVal_39 = _co.data.newConstructiveSystem;

          _ck(_v, 28, 0, currVal_39);

          var currVal_40 = "text";

          _ck(_v, 31, 0, currVal_40);

          var currVal_45 = _co.data;

          _ck(_v, 37, 0, currVal_45);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "standard";
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "fill";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "outline";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "legacy";

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.errorState;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._canLabelFloat;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldLabelFloat();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._hasFloatingLabel();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._hideControlPlaceholder();

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.disabled;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.autofilled;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.focused;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color == "accent";
          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color == "warn";

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("untouched");

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("touched");

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("pristine");

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("dirty");

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("valid");

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("invalid");

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("pending");

          var currVal_22 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._animationsEnabled;

          _ck(_v, 13, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._isServer;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).id;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).placeholder;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).required;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._isNativeSelect || null;
          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._ariaDescribedby || null;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).errorState;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).required.toString();

          _ck(_v, 25, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38]);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled || null;
          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._animationMode === "NoopAnimations";
          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ariaLabel || null;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).type;

          _ck(_v, 35, 0, currVal_41, currVal_42, currVal_43, currVal_44);
        });
      }

      function View_AddConstructiveSystemComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-constructive-system", [], null, null, null, View_AddConstructiveSystemComponent_0, RenderType_AddConstructiveSystemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_constructive_system_component__WEBPACK_IMPORTED_MODULE_15__["AddConstructiveSystemComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AddConstructiveSystemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-constructive-system", _add_constructive_system_component__WEBPACK_IMPORTED_MODULE_15__["AddConstructiveSystemComponent"], View_AddConstructiveSystemComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "1H36":
    /*!***************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/intermedial/intermedial.component.scss.shim.ngstyle.js ***!
      \***************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function H36(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcm1lZGlhbC5jb21wb25lbnQuc2NzcyJ9 */"];
      /***/
    },

    /***/
    "7aIf":
    /*!*******************************************************************!*\
      !*** ./src/app/materials-stage/materials-stage-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MaterialsStageRoutingModule */

    /***/
    function aIf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialsStageRoutingModule", function () {
        return MaterialsStageRoutingModule;
      });
      /* harmony import */


      var _components_materials_stage_materials_stage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/materials-stage/materials-stage.component */
      "KOaq");

      var routes = [{
        path: '',
        component: _components_materials_stage_materials_stage_component__WEBPACK_IMPORTED_MODULE_0__["MaterialsStageComponent"]
      }];

      var MaterialsStageRoutingModule = function MaterialsStageRoutingModule() {
        _classCallCheck(this, MaterialsStageRoutingModule);
      };
      /***/

    },

    /***/
    "CI4B":
    /*!*********************************************************************************!*\
      !*** ./src/app/materials-stage/components/intermedial/intermedial.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: IntermedialComponent */

    /***/
    function CI4B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntermedialComponent", function () {
        return IntermedialComponent;
      });

      var IntermedialComponent = /*#__PURE__*/function () {
        function IntermedialComponent(router, materialsService, dialogRef, data) {
          _classCallCheck(this, IntermedialComponent);

          this.router = router;
          this.materialsService = materialsService;
          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(IntermedialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }, {
          key: "continueStep",
          value: function continueStep(event) {
            event.preventDefault(); //

            this.onNoClick();
          }
        }]);

        return IntermedialComponent;
      }();
      /***/

    },

    /***/
    "KOaq":
    /*!*****************************************************************************************!*\
      !*** ./src/app/materials-stage/components/materials-stage/materials-stage.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MaterialsStageComponent */

    /***/
    function KOaq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialsStageComponent", function () {
        return MaterialsStageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _add_constructive_element_add_constructive_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../add-constructive-element/add-constructive-element.component */
      "L4jI");
      /* harmony import */


      var _add_constructive_system_add_constructive_system_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../add-constructive-system/add-constructive-system.component */
      "rnGK");
      /* harmony import */


      var _pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pass-step/pass-step.component */
      "pJxk");

      var MaterialsStageComponent = /*#__PURE__*/function () {
        function MaterialsStageComponent(materialsService, projectsService, router, catalogsService, dialog, analisis) {
          var _this = this;

          _classCallCheck(this, MaterialsStageComponent);

          this.materialsService = materialsService;
          this.projectsService = projectsService;
          this.router = router;
          this.catalogsService = catalogsService;
          this.dialog = dialog;
          this.analisis = analisis;
          this.selectedOptionsRevit = [];
          this.selectedOptionsDynamo = [];
          this.selectedOptionsUsuario = [];
          this.panelOpenFirst = true;
          this.panelOpenSecond = true;
          this.panelOpenThird = true;
          this.allMaterials = [];
          this.SOR = [];
          this.SOD = [];
          this.SOU = [];
          this.IMGP = [];
          this.SCseleccionado = '';
          this.materialFiltrado = '';
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.displayedColumns = ['Standard', 'Potencial', 'Valor', 'Unidad'];
          this.endSave = false;
          this.materialsService.getMaterials().subscribe(function (data) {
            _this.materialsList = data;
            _this.options = _this.materialsList;
            var EPDS = data.filter(function (res) {
              return res.database_from === 'EPDs';
            });
            var EPIC = data.filter(function (res) {
              return res.database_from === 'EPiC';
            });
            var mexicaniuh = data.filter(function (res) {
              return res.database_from === 'mexicaniuh';
            });
            _this.EPDS = EPDS.sort(function (a, b) {
              return a.name_material > b.name_material ? 1 : -1;
            });
            _this.EPiC = EPIC.sort(function (a, b) {
              return a.name_material > b.name_material ? 1 : -1;
            });
            _this.mexicaniuh = mexicaniuh.sort(function (a, b) {
              return a.name_material > b.name_material ? 1 : -1;
            });
          });
          this.catalogsService.countriesCatalog().subscribe(function (data) {
            _this.catalogoPaises = data;
          });
          this.catalogsService.getStates().subscribe(function (data) {
            _this.catalogoEstados = data;
          });
          this.catalogsService.getTransports().subscribe(function (data) {
            _this.catalogoTransportesLocal = data;
            _this.catalogoTransportesExtrangero = data;
          });
        }

        _createClass(MaterialsStageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            //carga de imagenes
            var images = ['../../../../assets/map/2.jpg', '../../../../assets/map/4.jpg', '../../../../assets/map/5.jpg', '../../../../assets/map/6.jpg', '../../../../assets/map/7.jpg', '../../../../assets/map/8.jpg', '../../../../assets/map/9.jpg', '../../../../assets/map/10.jpg', '../../../../assets/map/11.jpg', '../../../../assets/map/12.jpg', '../../../../assets/map/13.jpg', '../../../../assets/map/14.jpg'];
            this.preload(images); // fragmento para autocompletado

            this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return typeof value === 'string' ? value : value.name;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
              return name ? _this2._filter(name) : _this2.options.slice();
            }));
            this.selectedMaterial = false;
            this.showSearch = false;
            this.showMaterial = false;
            this.showEPD = false;
            this.showMexican = false;
            this.showListMaterials = true;
            var PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
            var data = JSON.parse(sessionStorage.getItem('dataProject'));
            this.ciudadOrigenSeleccionada = PDP.city_id_origin;
            this.catalogsService.usefulLifeCatalog().subscribe(function (data) {
              data.map(function (item) {
                if (item.id === PDP.useful_life_id) {
                  _this2.vidaUtilSeleccionado = item.name_useful_life;
                }
              });
            });
            this.sheetNames = [];
            this.nameProject = PDP.name_project;
            this.projectId = PDP.id;
            data.sheetNames.map(function (sheetname) {
              if (sheetname !== 'Muros InterioresBis' && sheetname !== 'Inicio' && sheetname !== 'Registro' && sheetname !== 'ListaElementos' && sheetname !== 'BD' && sheetname !== 'Parametros') {
                _this2.sheetNames.push(sheetname);
              }
            });
            this.contentData = data.data;
          } // Lógica para autocompletado

        }, {
          key: "displayFn",
          value: function displayFn(material) {
            if (material !== null || material !== undefined) {
              this.materialFiltrado = material.name_material;
            }

            return material && this.materialFiltrado;
          }
        }, {
          key: "_filter",
          value: function _filter(name) {
            var filterValue = name.toLowerCase();
            return this.options.filter(function (option) {
              return option.name_material.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "preload",
          value: function preload(array) {
            for (var i = 0; i < array.length; i++) {
              this.IMGP[i] = new Image();
              this.IMGP[i].src = array[i];
            }
          }
        }, {
          key: "onGroupsChange",
          value: function onGroupsChange(options) {
            var _this3 = this;

            options.map(function (option) {
              _this3.selectedSheet = option.value;
            });
            this.indexSheet = this.sheetNames.indexOf(this.selectedSheet);

            if (this.indexSheet >= 11) {
              this.indexSheet = this.indexSheet + 5;
            }

            this.listData = this.contentData[this.indexSheet + 1];
            var SCRevit = [];
            var SCDynamo = [];
            var SCUsuario = [];
            this.listData.map(function (sc) {
              if (sc.Origen === 'Modelo de Revit' || sc.Origen === 'Template EVAMED') {
                SCRevit.push(sc.Sistema_constructivo);
              }

              if (sc.Origen === 'Opciones EVAMED') {
                SCDynamo.push(sc.Sistema_constructivo);
              }

              if (sc.Origen === 'Usuario_Plataforma') {
                SCUsuario.push(sc.Sistema_constructivo);
              }
            });
            this.ListSCRevit = _toConsumableArray(new Set(SCRevit));
            this.ListSCDynamo = _toConsumableArray(new Set(SCDynamo));
            this.ListSCUsuario = _toConsumableArray(new Set(SCUsuario));
            var i;

            for (i = 0; i <= this.sheetNames.length; i++) {
              if (this.indexSheet === i && this.SOR !== undefined) {
                this.selectedOptionsRevit = this.SOR[i];
              }

              if (this.indexSheet === i && this.SOD !== undefined) {
                this.selectedOptionsDynamo = this.SOD[i];
              }

              if (this.indexSheet === i && this.SOU !== undefined) {
                this.selectedOptionsUsuario = this.SOU[i];
              }
            }
          }
        }, {
          key: "onSelectedMaterial",
          value: function onSelectedMaterial(value) {
            var _this4 = this;

            var _a;

            this.dataMaterialSelected = (_a = value.selected[0]) === null || _a === void 0 ? void 0 : _a.value.value;
            console.log('ON SELECTED MATERIAL!!!!!');
            console.log(this.dataMaterialSelected);
            this.dataMaterialSelected.vidaUtil === undefined ? this.dataMaterialSelected.vidaUtil = parseInt(this.vidaUtilSeleccionado, 10) : this.dataMaterialSelected.vidaUtil;
            this.dataMaterialSelected.reemplazos === undefined ? this.dataMaterialSelected.reemplazos = 0 : this.dataMaterialSelected.reemplazos;
            this.catalogoTransportesLocal = [];
            this.catalogsService.getTransports().subscribe(function (data) {
              data.map(function (item) {
                _this4.catalogoTransportesLocal.push(item);
              });
            });
            this.materialsList.map(function (material) {
              if (material.name_material === _this4.dataMaterialSelected.Material) {
                _this4.dataMaterialSelected.name_material_db = material.name_material;
              }
            });
            this.dataMaterialSelected.materialSelectedDB = 'Buscar material';

            if (this.dataMaterialSelected.name_material_db !== undefined) {
              this.dataMaterialSelected.materialSelectedDB = this.dataMaterialSelected.name_material_db;
            }

            if (this.dataMaterialSelected.materialDB !== undefined) {
              this.dataMaterialSelected.materialSelectedDB = this.dataMaterialSelected.materialDB.name_material;
            }

            if (this.dataMaterialSelected.name !== undefined) {
              this.dataMaterialSelected.materialSelectedDB = this.dataMaterialSelected.name;
            }

            this.selectedMaterial = true;
          }
        }, {
          key: "changeLifeTime",
          value: function changeLifeTime(reemplazos) {
            var lifeTime = this.vidaUtilSeleccionado;
            lifeTime = parseInt(this.vidaUtilSeleccionado, 10) / (parseInt(reemplazos, 10) + 1);
            this.dataMaterialSelected.vidaUtil = lifeTime;
          }
        }, {
          key: "changeReplaces",
          value: function changeReplaces(vidaUtil) {
            var replaces = 0;
            replaces = parseInt(this.vidaUtilSeleccionado, 10) / parseInt(vidaUtil, 10);
            this.dataMaterialSelected.reemplazos = Math.ceil(replaces) - 1;
          }
        }, {
          key: "selectState",
          value: function selectState(id) {
            var _this5 = this;

            this.catalogoCiudades = [];
            this.catalogsService.getCities().subscribe(function (data) {
              data.map(function (item) {
                if (item.state_id === id) {
                  _this5.catalogoCiudades.push(item);
                }
              });
            });
          }
        }, {
          key: "selectCountry",
          value: function selectCountry(id) {
            var _this6 = this;

            this.catalogsService.getExternalDistances().subscribe(function (data) {
              data.map(function (item) {
                var typeTransport = 'mar';

                if (id === item.id + 1) {
                  switch (item.region) {
                    case 'PACIFICO' || false:
                      typeTransport = 'mar';
                      break;

                    case 'NORTE' || false:
                      typeTransport = 'terreste';
                      break;

                    default:
                      break;
                  }

                  _this6.catalogoTransportesExtrangero = [];

                  if (typeTransport === 'terreste') {
                    _this6.catalogsService.getTransports().subscribe(function (data) {
                      data.map(function (item) {
                        // if (item.id >= 3) {
                        _this6.catalogoTransportesExtrangero.push(item); // }

                      });
                    });
                  } else {
                    _this6.catalogsService.getTransports().subscribe(function (data) {
                      data.map(function (item) {
                        if (item.id < 3) {
                          _this6.catalogoTransportesExtrangero.push(item);
                        }
                      });
                    });
                  }
                }
              });
            });
          }
        }, {
          key: "onNgModelChangeRevit",
          value: function onNgModelChangeRevit(event) {
            var i;

            for (i = 0; i <= this.sheetNames.length; i++) {
              if (this.indexSheet === i) {
                this.SOR[i] = this.selectedOptionsRevit;
              }
            }
          }
        }, {
          key: "onNgModelChangeDynamo",
          value: function onNgModelChangeDynamo(event) {
            var i;

            for (i = 0; i <= this.sheetNames.length; i++) {
              if (this.indexSheet === i) {
                this.SOD[i] = this.selectedOptionsDynamo;
              }
            }
          }
        }, {
          key: "onNgModelChangeUser",
          value: function onNgModelChangeUser(event) {//  let i;
            //  for ( i = 0; i <= this.sheetNames.length; i++ ) {
            //    this.indexSheet === i ? this.SOU[i] = this.selectedOptionsUsuario : this.SOU[i];
            //  }
          }
        }, {
          key: "onNgModelChangeMaterial",
          value: function onNgModelChangeMaterial(event) {// console.log(this.selectedMaterial);
          }
        }, {
          key: "saveStepOne",
          value: function saveStepOne() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var projectId;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      projectId = this.projectId; // Save Modelo Revit and Usuario

                      _context.next = 3;
                      return Object.entries(this.SOR).forEach(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            value = _ref2[1];

                        _this7.contentData[parseInt(key, 10) + 1].map(function (data) {
                          value.map(function (sc) {
                            if (data.Sistema_constructivo === sc) {
                              if (data.Origen === 'Modelo de Revit' || data.Origen === 'Template EVAMED') {
                                var materialToSearch = data.Material;

                                if (data.name_material_db !== undefined) {
                                  materialToSearch = data.materialSelectedDB;
                                }

                                _this7.materialsService.searchMaterial(materialToSearch).subscribe(function (material) {
                                  material.map(function (materialData) {
                                    if (materialData.name_material === materialToSearch) {
                                      _this7.projectsService.addSchemeProject({
                                        construction_system: data.Sistema_constructivo,
                                        comercial_name: data.Material,
                                        quantity: data.Cantidad,
                                        provider_distance: 0,
                                        material_id: materialData.id,
                                        project_id: projectId,
                                        origin_id: 1,
                                        section_id: parseInt(key, 10) + 1,
                                        value: null,
                                        distance_init: data.distancia_1 === '' || data.distancia_1 === undefined ? 0 : parseInt(data.distancia_1, 10),
                                        distance_end: data.distancia_2 === '' || data.distancia_2 === undefined ? 0 : parseInt(data.distancia_2, 10),
                                        replaces: data.reemplazos === '' || data.reemplazos === undefined ? 0 : data.reemplazos,
                                        city_id_origin: _this7.ciudadOrigenSeleccionada,
                                        state_id_origin: 1,
                                        city_id_end: 1,
                                        transport_id_origin: data.transporte_1 === '' || data.transporte_1 === undefined ? null : parseInt(data.transporte_1, 10),
                                        transport_id_end: data.transporte_2 === '' || data.transporte_2 === undefined ? null : parseInt(data.transporte_2, 10),
                                        unit_text: data.Unidad,
                                        description_material: data['Descripción de Material']
                                      }).subscribe(function (data) {
                                        console.log('Success Modelo Revit o Template EVAMED!');
                                        console.log(data);
                                      });
                                    }
                                  });
                                });
                              }
                            }
                          });
                        });
                      });

                    case 3:
                      _context.next = 5;
                      return Object.entries(this.SOD).forEach(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                            key = _ref4[0],
                            value = _ref4[1];

                        _this7.contentData[parseInt(key, 10) + 1].map(function (data) {
                          value.map(function (sc) {
                            if (data.Sistema_constructivo === sc) {
                              if (data.Origen === 'Opciones EVAMED') {
                                var materialToSearch = data.Material;

                                if (data.name_material_db !== undefined) {
                                  materialToSearch = data.materialSelectedDB;
                                }

                                _this7.materialsService.searchMaterial(materialToSearch).subscribe(function (material) {
                                  material.map(function (materialData) {
                                    if (materialData.name_material === materialToSearch) {
                                      _this7.projectsService.addSchemeProject({
                                        construction_system: data.Sistema_constructivo,
                                        comercial_name: data.Material,
                                        quantity: data.Cantidad,
                                        provider_distance: 0,
                                        material_id: materialData.id,
                                        project_id: projectId,
                                        origin_id: 2,
                                        section_id: parseInt(key, 10) + 1,
                                        value: null,
                                        distance_init: data.distancia_1 === '' || data.distancia_1 === undefined ? 0 : parseInt(data.distancia_1, 10),
                                        distance_end: data.distancia_2 === '' || data.distancia_2 === undefined ? 0 : parseInt(data.distancia_2, 10),
                                        replaces: data.reemplazos === '' || data.reemplazos === undefined ? 0 : data.reemplazos,
                                        city_id_origin: _this7.ciudadOrigenSeleccionada,
                                        state_id_origin: 1,
                                        city_id_end: 1,
                                        transport_id_origin: data.transporte_1 === '' || data.transporte_1 === undefined ? null : data.transporte_1,
                                        transport_id_end: data.transporte_2 === '' || data.transporte_2 === undefined ? null : data.transporte_2,
                                        unit_text: data.Unidad,
                                        description_material: data['Descripción de Material']
                                      }).subscribe(function (data) {
                                        console.log('Success Modelo Revit o Template EVAMED!');
                                        console.log(data);
                                      });
                                    }
                                  });
                                });
                              }
                            }
                          });
                        });
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showMaterials",
          value: function showMaterials(sc, origin) {
            var _this8 = this;

            this.SCseleccionado = '/ ' + sc;
            this.selectedMaterial = false;
            this.showSearch = false;
            this.showMaterial = false;
            var materiales = [];
            var counterRevit = 1;
            var countDynamo = 1;
            this.listData.map(function (data) {
              if (data.Sistema_constructivo === sc && origin === 'revit-user') {
                if (data.Origen === 'Modelo de Revit' || data.Origen === 'Template EVAMED') {
                  data.signal = false;
                  var materialABuscar = data.Material;

                  if (data.materialSelectedDB !== undefined) {
                    if (data.materialDB !== undefined) {
                      materialABuscar = data.materialDB.name_material;
                    }
                  }

                  _this8.materialsService.searchMaterial(materialABuscar).subscribe(function (material) {
                    material.map(function (materialData) {
                      if (materialData.name_material === materialABuscar) {
                        data.signal = true;
                      }
                    });
                  });

                  data.key = counterRevit++;
                  materiales.push(data);
                }
              }

              if (data.Sistema_constructivo === sc && origin === 'dynamo') {
                if (data.Origen === 'Opciones EVAMED') {
                  data.signal = false;
                  var _materialABuscar = data.Material;

                  if (data.materialSelectedDB !== undefined) {
                    if (data.materialSelectedDB !== 'Buscar material') {
                      _materialABuscar = data.materialSelectedDB;
                    }
                  }

                  _this8.materialsService.searchMaterial(_materialABuscar).subscribe(function (material) {
                    material.map(function (materialData) {
                      if (materialData.name_material === data.Material) {
                        data.signal = true;
                      }
                    });
                  });

                  data.key = countDynamo++;
                  materiales.push(data);
                }
              }
            });
            this.listMateriales = materiales;
          }
        }, {
          key: "showDetailMaterial",
          value: function showDetailMaterial(event, material) {
            var _this9 = this;

            event.stopPropagation();
            this.showMaterial = true;
            this.dataMaterialSelected.name = material.name_material;
            this.dataMaterialSelected.description = material.description; // this.dataMaterialSelected.registrationNumber = 'S-P-01927';
            // this.dataMaterialSelected.publicationDate = '202-04-01';
            // this.dataMaterialSelected.utilLife = '2025-04-01';

            this.analisis.getMaterialSchemeData().subscribe(function (msds) {
              var msd = msds.filter(function (msd) {
                return msd.material_id === material.id;
              });
              msd = msd.sort(function (a, b) {
                if (a.potential_type_id === b.potential_type_id) {
                  return a.standard_id - b.standard_id;
                }

                return a.potential_type_id > b.potential_type_id ? 1 : -1;
              });
              _this9.dataMaterialSelected.msd = msd;
            });
          }
        }, {
          key: "showEPIC",
          value: function showEPIC() {
            this.showListMaterials = false;
          }
        }, {
          key: "showMexicanIuh",
          value: function showMexicanIuh() {
            this.showListMaterials = false;
            this.showMexican = true;
          }
        }, {
          key: "returnDatabaseList",
          value: function returnDatabaseList() {
            this.showListMaterials = true;
            this.showMexican = false;
          }
        }, {
          key: "showDetailEPD",
          value: function showDetailEPD(event, material) {
            var _this10 = this;

            event.stopPropagation();
            this.showEPD = true;
            this.dataMaterialSelected.name = material.name_material;
            this.dataMaterialSelected.id = material.id;
            this.dataMaterialSelected.description = material.description;
            this.analisis.getMaterialSchemeData().subscribe(function (msds) {
              var msd = msds.filter(function (msd) {
                return msd.material_id === material.id;
              });
              msd = msd.sort(function (a, b) {
                if (a.potential_type_id === b.potential_type_id) {
                  return a.standard_id - b.standard_id;
                }

                return a.potential_type_id > b.potential_type_id ? 1 : -1;
              });
              _this10.dataMaterialSelected.msd = msd;
            });
          }
        }, {
          key: "onSelectMaterial",
          value: function onSelectMaterial(event, material) {
            event.stopPropagation();
            console.log('ON SELECT MATERIAL!!!!!!');
            this.dataMaterialSelected.materialSelectedDB = material;

            if (this.dataMaterialSelected.materialFiltrado !== undefined) {
              this.dataMaterialSelected.materialFiltrado = undefined;
            }

            console.log(this.dataMaterialSelected);
            this.returnMaterialData();
          }
        }, {
          key: "returnListEpds",
          value: function returnListEpds() {
            this.showEPD = false;
          }
        }, {
          key: "returnListDB",
          value: function returnListDB() {
            this.showMaterial = false;
          }
        }, {
          key: "returnMaterialData",
          value: function returnMaterialData() {
            console.log('returnMaterialData-----');

            if (this.dataMaterialSelected.materialFiltrado !== undefined) {
              this.dataMaterialSelected.materialSelectedDB = this.dataMaterialSelected.materialFiltrado.name_material;
              this.dataMaterialSelected.name = this.dataMaterialSelected.materialSelectedDB;
            }

            console.log(this.dataMaterialSelected);
            this.selectedMaterial = true;
            this.showSearch = false;
          }
        }, {
          key: "removeMaterial",
          value: function removeMaterial(event, sc, origin) {
            event.stopPropagation();
            console.log('entra a remove materials');
          }
        }, {
          key: "restoreMaterial",
          value: function restoreMaterial(event, sc, origin) {
            event.stopPropagation();
            console.log('entra a restore material');
          }
        }, {
          key: "duplicateMaterial",
          value: function duplicateMaterial(event, sc, origin) {
            event.stopPropagation();
          }
        }, {
          key: "onReturnListMaterials",
          value: function onReturnListMaterials() {
            this.selectedMaterial = false;
            this.showSearch = false;
            this.showMaterial = false;
          }
        }, {
          key: "goToMaterialStage",
          value: function goToMaterialStage() {
            this.router.navigateByUrl('material-stage');
          }
        }, {
          key: "goToConstructionStage",
          value: function goToConstructionStage() {
            var _this11 = this;

            var dialogRef = this.dialog.open(_pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_5__["PassStepComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result["continue"]) {
                if (result.save) {
                  _this11.saveStepOne();
                }

                _this11.materialsService.getConstructionStage().subscribe(function (cse) {
                  var schemaFilter = cse.filter(function (schema) {
                    return schema.project_id === _this11.projectId;
                  });

                  if (schemaFilter.length === 0) {
                    _this11.router.navigateByUrl('construction-stage');
                  } else {
                    localStorage.setItem('idProyectoConstrucción', _this11.projectId.toString());

                    _this11.router.navigateByUrl('construction-stage-update');
                  }
                });
              }
            });
          }
        }, {
          key: "goToUsageStage",
          value: function goToUsageStage() {
            var _this12 = this;

            var dialogRef = this.dialog.open(_pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_5__["PassStepComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result["continue"]) {
                if (result.save) {
                  _this12.saveStepOne();
                }

                _this12.materialsService.getACR().subscribe(function (acr) {
                  var schemaFilter = acr.filter(function (schema) {
                    return schema.project_id === _this12.projectId;
                  });

                  if (schemaFilter.length === 0) {
                    _this12.router.navigateByUrl('usage-stage');
                  } else {
                    localStorage.setItem('idProyectoConstrucción', _this12.projectId.toString());

                    _this12.router.navigateByUrl('usage-stage-update');
                  }
                });
              }
            });
          }
        }, {
          key: "goToEndLife",
          value: function goToEndLife() {
            var _this13 = this;

            var dialogRef = this.dialog.open(_pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_5__["PassStepComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result["continue"]) {
                if (result.save) {
                  _this13.saveStepOne();
                }

                _this13.materialsService.getEDCP().subscribe(function (edcp) {
                  var schemaFilter = edcp.filter(function (schema) {
                    return schema.project_id === _this13.projectId;
                  });

                  if (schemaFilter.length === 0) {
                    _this13.router.navigateByUrl('end-life-stage');
                  } else {
                    localStorage.setItem('idProyectoConstrucción', _this13.projectId.toString());

                    _this13.router.navigateByUrl('update-end-life');
                  }
                });
              }
            });
          }
        }, {
          key: "continue",
          value: function _continue() {
            var _this14 = this;

            this.saveStepOne();
            this.materialsService.getConstructionStage().subscribe(function (cse) {
              var schemaFilter = cse.filter(function (schema) {
                return schema.project_id === _this14.projectId;
              });

              if (schemaFilter.length === 0) {
                _this14.router.navigateByUrl('construction-stage');
              } else {
                localStorage.setItem('idProyectoConstrucción', _this14.projectId.toString());

                _this14.router.navigateByUrl('construction-stage-update');
              }
            });
          }
        }, {
          key: "goToSearchInfo",
          value: function goToSearchInfo() {
            this.showSearch = true;
            this.selectedMaterial = false;
            this.showMaterial = false;
            this.showEPD = false;
          }
        }, {
          key: "addConstructiveElementsDialog",
          value: function addConstructiveElementsDialog() {
            var _this15 = this;

            var dialogRef = this.dialog.open(_add_constructive_element_add_constructive_element_component__WEBPACK_IMPORTED_MODULE_3__["AddConstructiveElementComponent"], {
              width: '680px',
              data: {
                newConstructiveElement: this.newConstructiveElement,
                newConstructiveSystem: this.newConstructiveSystem
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this15.sheetNames.push(result.newConstructiveElement);

              _this15.contentData.push([{
                Origen: 'Usuario_Plataforma',
                Sistema_constructivo: result.newConstructiveSystem
              }]);
            });
          }
        }, {
          key: "addConstructiveSystemDialog",
          value: function addConstructiveSystemDialog() {
            var dialogRef = this.dialog.open(_add_constructive_system_add_constructive_system_component__WEBPACK_IMPORTED_MODULE_4__["AddConstructiveSystemComponent"], {
              width: '680px',
              data: {
                newConstructiveSystem: this.newConstructiveSystem
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log(result);
            });
          }
        }]);

        return MaterialsStageComponent;
      }();
      /***/

    },

    /***/
    "L0Qk":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/add-constructive-system/add-constructive-system.component.scss.shim.ngstyle.js ***!
      \***************************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function L0Qk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29uc3RydWN0aXZlLXN5c3RlbS5jb21wb25lbnQuc2NzcyJ9 */"];
      /***/
    },

    /***/
    "L4jI":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/add-constructive-element/add-constructive-element.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: AddConstructiveElementComponent */

    /***/
    function L4jI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddConstructiveElementComponent", function () {
        return AddConstructiveElementComponent;
      });

      var AddConstructiveElementComponent = /*#__PURE__*/function () {
        function AddConstructiveElementComponent(dialogRef, data) {
          _classCallCheck(this, AddConstructiveElementComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(AddConstructiveElementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }]);

        return AddConstructiveElementComponent;
      }();
      /***/

    },

    /***/
    "N3iX":
    /*!***************************************************************************************!*\
      !*** ./src/app/materials-stage/components/pass-step/pass-step.component.ngfactory.js ***!
      \***************************************************************************************/

    /*! exports provided: RenderType_PassStepComponent, View_PassStepComponent_0, View_PassStepComponent_Host_0, PassStepComponentNgFactory */

    /***/
    function N3iX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PassStepComponent", function () {
        return RenderType_PassStepComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PassStepComponent_0", function () {
        return View_PassStepComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PassStepComponent_Host_0", function () {
        return View_PassStepComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PassStepComponentNgFactory", function () {
        return PassStepComponentNgFactory;
      });
      /* harmony import */


      var _pass_step_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pass-step.component.scss.shim.ngstyle */
      "gpgI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _pass_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pass-step.component */
      "pJxk");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PassStepComponent = [_pass_step_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PassStepComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PassStepComponent,
        data: {}
      });

      function View_PassStepComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \xBFDesea guardar los datos antes de continuar? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.continueStep($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Si"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.continueOnly($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["No"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancelar"]))], function (_ck, _v) {
          _ck(_v, 2, 0);

          var currVal_3 = "primary";

          _ck(_v, 9, 0, currVal_3);

          var currVal_6 = "primary";

          _ck(_v, 12, 0, currVal_6);

          var currVal_9 = "primary";

          _ck(_v, 15, 0, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationMode === "NoopAnimations";

          _ck(_v, 8, 0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled || null;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._animationMode === "NoopAnimations";

          _ck(_v, 11, 0, currVal_4, currVal_5);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled || null;
          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._animationMode === "NoopAnimations";

          _ck(_v, 14, 0, currVal_7, currVal_8);
        });
      }

      function View_PassStepComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pass-step", [], null, null, null, View_PassStepComponent_0, RenderType_PassStepComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _pass_step_component__WEBPACK_IMPORTED_MODULE_7__["PassStepComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PassStepComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-pass-step", _pass_step_component__WEBPACK_IMPORTED_MODULE_7__["PassStepComponent"], View_PassStepComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "OtMV":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/add-constructive-element/add-constructive-element.component.scss.shim.ngstyle.js ***!
      \*****************************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function OtMV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29uc3RydWN0aXZlLWVsZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"];
      /***/
    },

    /***/
    "Tb55":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/materials-stage/materials-stage.component.scss.shim.ngstyle.js ***!
      \***********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Tb55(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["@charset \"UTF-8\";\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0 0px 0px !important;\n}\n.principal-container.container-total[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 14px;\n  box-shadow: 0px 3px 6px #00000029;\n  width: 100%;\n  display: grid;\n  margin-top: 8px;\n}\nnav.nav-steps[_ngcontent-%COMP%] {\n  height: 5.2rem;\n  border-bottom: 1px solid #cbcbcb;\n}\n.space-row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1.5rem;\n}\nsection.container-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 26rem;\n}\np.p-instrucciones[_ngcontent-%COMP%] {\n  color: #767676;\n  font-size: 14px;\n}\n.hidden[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.left[_ngcontent-%COMP%] {\n  text-align: initial;\n  margin-left: 2rem;\n}\n.container-elements[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-sheets[_ngcontent-%COMP%] {\n  width: 20%;\n  border-right: 1px solid #cbcbcb;\n}\n.container-systems[_ngcontent-%COMP%] {\n  width: 40%;\n  border-right: 1px solid #cbcbcb;\n}\n.container-details[_ngcontent-%COMP%] {\n  display: block !important;\n  height: 23.5rem;\n}\n.list-elements[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  height: 54.6%;\n}\n.container-systems[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%] {\n  display: table;\n  width: 95%;\n  margin-top: 12px !important;\n}\n.aux-yellow[_ngcontent-%COMP%] {\n  color: #edc903 !important;\n}\n.mdl-stepper-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -50px;\n  margin-left: 160px;\n  font-weight: 600;\n  color: #767676;\n  width: 100%;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:active {\n  border-radius: 15%/75%;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:first-child   .mdl-stepper-bar-left[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:last-child   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  display: none;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-circle[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto;\n  background-color: #9e9e9e;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 2em;\n  font-size: 12px;\n  color: white;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-title[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: normal;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-title[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-optional[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #000;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-optional[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-left[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  height: 1px;\n  border-top: 1px solid #bdbdbd;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: 50%;\n  margin-left: 35px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-left[_ngcontent-%COMP%] {\n  left: 0;\n  right: 50%;\n  margin-right: 35px;\n}\n\ndiv.step-one-selected[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background: url('Produccion.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\ndiv.step-two[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #cbcbcb !important;\n  background: url('Construcci\xF3n_.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\ndiv.step-three[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #cbcbcb !important;\n  background: url('Uso_.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\ndiv.step-four[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #cbcbcb !important;\n  background: url('fin.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\n.mdl-stepper-circle[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.table-materials[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table-materials[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: normal;\n}\n.table-materials[_ngcontent-%COMP%]   .col-material[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.custom-error[_ngcontent-%COMP%] {\n  color: black !important;\n  width: 10px;\n}\n\n.container-image[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.container-image[_ngcontent-%COMP%]   img.image-element[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.form-update-material[_ngcontent-%COMP%] {\n  width: 88%;\n  margin-top: 10px;\n  margin-left: 15px;\n  display: inline-block;\n}\n\n.select-middle[_ngcontent-%COMP%] {\n  width: 44% !important;\n}\n.form-search[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 96%;\n}\n.button-read[_ngcontent-%COMP%] {\n  border: 2px solid #97969c;\n  padding: 10px;\n  margin: 10px 10px 10px 0px;\n  border-radius: 10px;\n  color: #000;\n  font-size: 14px;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.conditional-section[_ngcontent-%COMP%] {\n  width: 25.9rem;\n  overflow: auto;\n}\n.container-options[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-options[_ngcontent-%COMP%]:hover {\n  display: block;\n}\n.item-by-list[_ngcontent-%COMP%]:hover    + .container-options[_ngcontent-%COMP%] {\n  display: block;\n}\n.header-form[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-left: 14px;\n}\nspan.return[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  color: #92be00;\n  cursor: pointer;\n}\nspan.title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.item-material[_ngcontent-%COMP%] {\n  margin: 2px 15px;\n  border-bottom: 1px solid #cbcbcb;\n  padding: 5px;\n}\n.item-material[_ngcontent-%COMP%]:hover {\n  background-color: #edc903;\n  cursor: pointer;\n}\n.logoList[_ngcontent-%COMP%] {\n  height: 16px;\n}\ntable.mat-elevation-z8.data-info.mat-table[_ngcontent-%COMP%] {\n  width: -webkit-max-content !important;\n  width: -moz-max-content !important;\n  width: max-content !important;\n  border: 1px solid #97969c !important;\n}\n.epic[_ngcontent-%COMP%] {\n  color: #92be00;\n  font-weight: 800;\n}\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-right: 24px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWF0ZXJpYWxzLXN0YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDZCQUFBO0FBRUY7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0FBRUY7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0EsWUFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUVGO0FBQ0E7RUFDRSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0Usc0JBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUVGO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FBRUY7QUFDQTs7RUFFRSxhQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7QUFFRjtBQUNBOztFQUVFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUVGO0FBQ0E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBRUY7QUFDQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBLG1CQUFBO0FBQ0E7RUFDRSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUNBO0VBQ0Usb0NBQUE7RUFDQSxzREFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUNBO0VBQ0Usb0NBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUNBO0VBQ0Usb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUVFO0VBQ0UsZUFBQTtBQUNKO0FBR0EsdUJBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7QUFGSjtBQU1BO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBSEY7QUFNQSxhQUFBO0FBQ0E7RUFDRSxZQUFBO0FBSEY7QUFLRTtFQUNFLGVBQUE7QUFISjtBQU9BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUpGO0FBT0Esb0JBQUE7QUFDQTtFQUNFLHFCQUFBO0FBSkY7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBSkY7QUFPQTtFQUNFLGFBQUE7QUFKRjtBQU1FO0VBQ0UsY0FBQTtBQUpKO0FBU0U7RUFDRSxjQUFBO0FBTko7QUFVQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVBGO0FBVUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFQRjtBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBGO0FBVUE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQVBGO0FBU0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFQSjtBQVdBO0VBQ0UsWUFBQTtBQVJGO0FBV0E7RUFDRSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSxvQ0FBQTtBQVJGO0FBV0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFSRjtBQVdBOzs7RUFHRSw4QkFBQTtBQVJGIiwiZmlsZSI6Im1hdGVyaWFscy1zdGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAwIDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnByaW5jaXBhbC1jb250YWluZXIuY29udGFpbmVyLXRvdGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG5uYXYubmF2LXN0ZXBzIHtcbiAgaGVpZ2h0OiA1LjJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xufVxuXG4uc3BhY2Utcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMS41cmVtO1xufVxuXG5zZWN0aW9uLmNvbnRhaW5lci1hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjZyZW07XG59XG5cbnAucC1pbnN0cnVjY2lvbmVzIHtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhpZGRlbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uY29udGFpbmVyLWVsZW1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLXNoZWV0cyB7XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmNiY2I7XG59XG5cbi5jb250YWluZXItc3lzdGVtcyB7XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmNiY2I7XG59XG5cbi5jb250YWluZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjMuNXJlbTtcbn1cblxuLmxpc3QtZWxlbWVudHMge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogNTQuNiU7XG59XG5cbi5jb250YWluZXItc3lzdGVtcyB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipTdGVwZXJzKiovXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hdXgteWVsbG93IHtcbiAgY29sb3I6ICNlZGM5MDMgIWltcG9ydGFudDtcbn1cblxuLm1kbC1zdGVwcGVyLXRhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXA6YWN0aXZlIHtcbiAgYm9yZGVyLXJhZGl1czogMTUlLzc1JTtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXA6Zmlyc3QtY2hpbGQ6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXA6bGFzdC1jaGlsZDphY3RpdmUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmZpcnN0LWNoaWxkIC5tZGwtc3RlcHBlci1iYXItbGVmdCxcbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmxhc3QtY2hpbGQgLm1kbC1zdGVwcGVyLWJhci1yaWdodCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwIC5tZGwtc3RlcHBlci1jaXJjbGUge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLXRpdGxlLFxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLW9wdGlvbmFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLW9wdGlvbmFsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItYmFyLWxlZnQsXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItYmFyLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JkYmRiZDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLWJhci1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItYmFyLWxlZnQge1xuICBsZWZ0OiAwO1xuICByaWdodDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG5cbi8qKkN1c3RvbSBzdGVwcGVyKiovXG5kaXYuc3RlcC1vbmUtc2VsZWN0ZWQgZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FdGFwYXMvUHJvZHVjY2lvbi5wbmdcIikgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG5kaXYuc3RlcC10d28gZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2IgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0V0YXBhcy9Db25zdHJ1Y2Npw7NuXy5wbmdcIikgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG5kaXYuc3RlcC10aHJlZSBkaXYubWRsLXN0ZXBwZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXRhcGFzL1Vzb18ucG5nXCIpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuZGl2LnN0ZXAtZm91ciBkaXYubWRsLXN0ZXBwZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXRhcGFzL2Zpbi5wbmdcIikgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ubWRsLXN0ZXBwZXItY2lyY2xlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKipjc3MgbWF0ZXJpYWxzIGxpc3QqKi9cbi50YWJsZS1tYXRlcmlhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFibGUtbWF0ZXJpYWxzIGRpdiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi50YWJsZS1tYXRlcmlhbHMgLmNvbC1tYXRlcmlhbCB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5jdXN0b20tZXJyb3Ige1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi8qKmltYWdlbmVzKiovXG4uY29udGFpbmVyLWltYWdlIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhaW5lci1pbWFnZSBpbWcuaW1hZ2UtZWxlbWVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tdXBkYXRlLW1hdGVyaWFsIHtcbiAgd2lkdGg6IDg4JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyoqIEFkaXRpb25hbCBDU1MgKiovXG4uc2VsZWN0LW1pZGRsZSB7XG4gIHdpZHRoOiA0NCUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDk2JTtcbn1cblxuLmJ1dHRvbi1yZWFkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzk3OTY5YztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbmRpdGlvbmFsLXNlY3Rpb24ge1xuICB3aWR0aDogMjUuOXJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb250YWluZXItb3B0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGFpbmVyLW9wdGlvbnM6aG92ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW0tYnktbGlzdDpob3ZlciArIC5jb250YWluZXItb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyLWZvcm0ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG5zcGFuLnJldHVybiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM5MmJlMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc3Bhbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaXRlbS1tYXRlcmlhbCB7XG4gIG1hcmdpbjogMnB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaXRlbS1tYXRlcmlhbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGM5MDM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ29MaXN0IHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG50YWJsZS5tYXQtZWxldmF0aW9uLXo4LmRhdGEtaW5mby5tYXQtdGFibGUge1xuICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk3OTY5YyAhaW1wb3J0YW50O1xufVxuXG4uZXBpYyB7XG4gIGNvbG9yOiAjOTJiZTAwO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn0iXX0= */"];
      /***/
    },

    /***/
    "VRYy":
    /*!*********************************************************************!*\
      !*** ./src/app/materials-stage/materials-stage.module.ngfactory.js ***!
      \*********************************************************************/

    /*! exports provided: MaterialsStageModuleNgFactory */

    /***/
    function VRYy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialsStageModuleNgFactory", function () {
        return MaterialsStageModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _materials_stage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./materials-stage.module */
      "WJqF");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _components_materials_stage_materials_stage_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/materials-stage/materials-stage.component.ngfactory */
      "iYTM");
      /* harmony import */


      var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
      "9cE2");
      /* harmony import */


      var _components_add_constructive_element_add_constructive_element_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/add-constructive-element/add-constructive-element.component.ngfactory */
      "wijn");
      /* harmony import */


      var _components_add_constructive_system_add_constructive_system_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/add-constructive-system/add-constructive-system.component.ngfactory */
      "/jgH");
      /* harmony import */


      var _components_intermedial_intermedial_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/intermedial/intermedial.component.ngfactory */
      "d+kY");
      /* harmony import */


      var _components_pass_step_pass_step_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/pass-step/pass-step.component.ngfactory */
      "N3iX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _materials_stage_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./materials-stage-routing.module */
      "7aIf");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "HeVh");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "q59W");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      "GF+f");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components_materials_stage_materials_stage_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./components/materials-stage/materials-stage.component */
      "KOaq");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var MaterialsStageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_materials_stage_module__WEBPACK_IMPORTED_MODULE_1__["MaterialsStageModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _components_materials_stage_materials_stage_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MaterialsStageComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _components_add_constructive_element_add_constructive_element_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AddConstructiveElementComponentNgFactory"], _components_add_constructive_system_add_constructive_system_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AddConstructiveSystemComponentNgFactory"], _components_intermedial_intermedial_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["IntermedialComponentNgFactory"], _components_pass_step_pass_step_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["PassStepComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _materials_stage_routing_module__WEBPACK_IMPORTED_MODULE_21__["MaterialsStageRoutingModule"], _materials_stage_routing_module__WEBPACK_IMPORTED_MODULE_21__["MaterialsStageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_29__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_29__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_34__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_39__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_39__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_41__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_41__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_42__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_43__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_43__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _material_material_module__WEBPACK_IMPORTED_MODULE_47__["MaterialModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_47__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_48__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_48__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _materials_stage_module__WEBPACK_IMPORTED_MODULE_1__["MaterialsStageModule"], _materials_stage_module__WEBPACK_IMPORTED_MODULE_1__["MaterialsStageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ROUTES"], function () {
          return [[{
            path: "",
            component: _components_materials_stage_materials_stage_component__WEBPACK_IMPORTED_MODULE_49__["MaterialsStageComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "WJqF":
    /*!***********************************************************!*\
      !*** ./src/app/materials-stage/materials-stage.module.ts ***!
      \***********************************************************/

    /*! exports provided: MaterialsStageModule */

    /***/
    function WJqF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialsStageModule", function () {
        return MaterialsStageModule;
      });

      var MaterialsStageModule = function MaterialsStageModule() {
        _classCallCheck(this, MaterialsStageModule);
      };
      /***/

    },

    /***/
    "d+kY":
    /*!*******************************************************************************************!*\
      !*** ./src/app/materials-stage/components/intermedial/intermedial.component.ngfactory.js ***!
      \*******************************************************************************************/

    /*! exports provided: RenderType_IntermedialComponent, View_IntermedialComponent_0, View_IntermedialComponent_Host_0, IntermedialComponentNgFactory */

    /***/
    function dKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_IntermedialComponent", function () {
        return RenderType_IntermedialComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_IntermedialComponent_0", function () {
        return View_IntermedialComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_IntermedialComponent_Host_0", function () {
        return View_IntermedialComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntermedialComponentNgFactory", function () {
        return IntermedialComponentNgFactory;
      });
      /* harmony import */


      var _intermedial_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./intermedial.component.scss.shim.ngstyle */
      "1H36");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _intermedial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./intermedial.component */
      "CI4B");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_IntermedialComponent = [_intermedial_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_IntermedialComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_IntermedialComponent,
        data: {}
      });

      function View_IntermedialComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Los datos han sido guardados "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione la etapa a la que desea subir datos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.continueStep($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Aceptar"]))], function (_ck, _v) {
          _ck(_v, 2, 0);

          var currVal_3 = "primary";

          _ck(_v, 13, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations";

          _ck(_v, 12, 0, currVal_1, currVal_2);
        });
      }

      function View_IntermedialComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-intermedial", [], null, null, null, View_IntermedialComponent_0, RenderType_IntermedialComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _intermedial_component__WEBPACK_IMPORTED_MODULE_7__["IntermedialComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_9__["MaterialsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var IntermedialComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-intermedial", _intermedial_component__WEBPACK_IMPORTED_MODULE_7__["IntermedialComponent"], View_IntermedialComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "gpgI":
    /*!***********************************************************************************************!*\
      !*** ./src/app/materials-stage/components/pass-step/pass-step.component.scss.shim.ngstyle.js ***!
      \***********************************************************************************************/

    /*! exports provided: styles */

    /***/
    function gpgI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzLXN0ZXAuY29tcG9uZW50LnNjc3MifQ== */"];
      /***/
    },

    /***/
    "iYTM":
    /*!***************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/materials-stage/materials-stage.component.ngfactory.js ***!
      \***************************************************************************************************/

    /*! exports provided: RenderType_MaterialsStageComponent, View_MaterialsStageComponent_0, View_MaterialsStageComponent_Host_0, MaterialsStageComponentNgFactory */

    /***/
    function iYTM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MaterialsStageComponent", function () {
        return RenderType_MaterialsStageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MaterialsStageComponent_0", function () {
        return View_MaterialsStageComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MaterialsStageComponent_Host_0", function () {
        return View_MaterialsStageComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialsStageComponentNgFactory", function () {
        return MaterialsStageComponentNgFactory;
      });
      /* harmony import */


      var _materials_stage_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./materials-stage.component.scss.shim.ngstyle */
      "Tb55");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/list/index.ngfactory */
      "F9ui");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
      "XE/z");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/expansion/index.ngfactory */
      "W3M2");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "CtHx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/core/index.ngfactory */
      "CeGm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/select/index.ngfactory */
      "Y1Mv");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/table/index.ngfactory */
      "K0NO");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _node_modules_angular_material_autocomplete_index_ngfactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/autocomplete/index.ngfactory */
      "l+DN");
      /* harmony import */


      var _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/tabs/index.ngfactory */
      "Pwwu");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _materials_stage_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./materials-stage.component */
      "KOaq");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /* harmony import */


      var _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../../../core/services/projects/projects.service */
      "kqb2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../../../core/services/catalogs/catalogs.service */
      "w/oM");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../../../core/services/analisis/analisis.service */
      "hslW");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_MaterialsStageComponent = [_materials_stage_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_MaterialsStageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_MaterialsStageComponent,
        data: {}
      });

      function View_MaterialsStageComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/2.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/8.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/9.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/7.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/5.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/7.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/11.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/6.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/4.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/13.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/14.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/12.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_MaterialsStageComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "mat-list-option", [["class", "item-yellow-extend mat-list-item mat-list-option mat-focus-indicator"], ["role", "option"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-with-avatar", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "mat-list-single-selected-option", null], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleBlur() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListOption_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1294336, [[1, 4]], 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          _avatar: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _icon: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          _lines: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_9 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_9);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "primary";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "warn";
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectionList.multiple;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_8 = 0 - 1;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _v.context.$implicit;

          _ck(_v, 5, 0, currVal_10);
        });
      }

      function View_MaterialsStageComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "mat-list-option", [["checkboxPosition", "before"], ["class", "item-list-option mat-list-item mat-list-option mat-focus-indicator"], ["role", "option"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-with-avatar", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "mat-list-single-selected-option", null], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleBlur() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListOption_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1294336, [[7, 4]], 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]], {
          disableRipple: [0, "disableRipple"],
          checkboxPosition: [1, "checkboxPosition"],
          value: [2, "value"],
          selected: [3, "selected"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          _avatar: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          _icon: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          _lines: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 19, "div", [["style", "\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "item-by-list"], ["style", "display: flex; align-items: center; width: 65.8%"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showMaterials(_v.context.$implicit, "revit-user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["style", "display: flex; flex-direction: column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 15, "div", [["class", "container-options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.removeMaterial($event, _v.context.$implicit, "revit-user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["restore_from_trash"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.restoreMaterial($event, _v.context.$implicit, "revit-user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["restore_page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.duplicateMaterial($event, _v.context.$implicit, "revit-user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["control_point_duplicate"]))], function (_ck, _v) {
          var currVal_9 = true;
          var currVal_10 = "before";
          var currVal_11 = _v.context.$implicit;
          var currVal_12 = _v.context.$implicit.checked;

          _ck(_v, 1, 0, currVal_9, currVal_10, currVal_11, currVal_12);

          _ck(_v, 13, 0);

          _ck(_v, 18, 0);

          _ck(_v, 23, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "primary";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "warn";
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectionList.multiple;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_8 = 0 - 1;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_13 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null;
          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations";

          _ck(_v, 10, 0, currVal_14, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).inline;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "warn";

          _ck(_v, 12, 0, currVal_16, currVal_17);

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled || null;
          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._animationMode === "NoopAnimations";

          _ck(_v, 15, 0, currVal_18, currVal_19);

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).inline;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "warn";

          _ck(_v, 17, 0, currVal_20, currVal_21);

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

          _ck(_v, 20, 0, currVal_22, currVal_23);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "warn";

          _ck(_v, 22, 0, currVal_24, currVal_25);
        });
      }

      function View_MaterialsStageComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "mat-accordion", [["class", "mat-accordion"]], [[2, "mat-accordion-multi", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 19, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], [[null, "opened"], [null, "closed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("opened" === en) {
            var pd_0 = (_co.panelOpenFirst = true) !== false;
            ad = pd_0 && ad;
          }

          if ("closed" === en) {
            var pd_1 = (_co.panelOpenFirst = false) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
          expanded: [0, "expanded"]
        }, {
          closed: "closed",
          opened: "opened"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          _lazyContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 6, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header mat-focus-indicator"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._toggle() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("component:@expansionHeight.start" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationStarted() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, [[5, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, {
          collapsedHeight: 0,
          expandedHeight: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, {
          value: 0,
          params: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Registrados en REVIT y/o Template EVAMED "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 8, "mat-selection-list", [["class", "mat-selection-list mat-list-base"], ["role", "listbox"]], [[1, "aria-multiselectable", 0], [1, "aria-disabled", 0], [1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._onFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.selectedOptionsRevit = $event) !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = _co.onNgModelChangeRevit($event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSelectionList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSelectionList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1753088, [["sistemas_constructivos", 4]], 1, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = true;

          _ck(_v, 5, 0, currVal_4);

          var currVal_25 = _co.selectedOptionsRevit;

          _ck(_v, 19, 0, currVal_25);

          var currVal_26 = _co.ListSCRevit;

          _ck(_v, 23, 0, currVal_26);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multi;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).expanded;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasSpacing();

          _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel._headerId;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled ? 0 - 1 : 0;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getPanelId();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded();

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "after";
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "before";

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationsDisabled;

          var currVal_14 = _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getExpandedState(), _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).expandedHeight));

          _ck(_v, 8, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).multiple;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled.toString();

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._tabIndex;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending;

          _ck(_v, 15, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);
        });
      }

      function View_MaterialsStageComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "mat-list-option", [["checkboxPosition", "before"], ["class", "item-list-option mat-list-item mat-list-option mat-focus-indicator"], ["role", "option"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-with-avatar", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "mat-list-single-selected-option", null], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleBlur() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListOption_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1294336, [[13, 4]], 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]], {
          disableRipple: [0, "disableRipple"],
          checkboxPosition: [1, "checkboxPosition"],
          value: [2, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          _avatar: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          _icon: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          _lines: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 19, "div", [["style", "\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "item-by-list"], ["style", "display: flex; align-items: center; width: 65.8%"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showMaterials(_v.context.$implicit, "dynamo") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["style", "display: flex; flex-direction: column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 15, "div", [["class", "container-options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.removeMaterial($event, _v.context.$implicit, "dynamo") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["restore_from_trash"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.restoreMaterial($event, _v.context.$implicit, "dynamo") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["restore_page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.duplicateMaterial($event, _v.context.$implicit, "dynamo") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["control_point_duplicate"]))], function (_ck, _v) {
          var currVal_9 = true;
          var currVal_10 = "before";
          var currVal_11 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_9, currVal_10, currVal_11);

          _ck(_v, 13, 0);

          _ck(_v, 18, 0);

          _ck(_v, 23, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "primary";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "warn";
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectionList.multiple;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_8 = 0 - 1;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_12 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null;
          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations";

          _ck(_v, 10, 0, currVal_13, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).inline;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "warn";

          _ck(_v, 12, 0, currVal_15, currVal_16);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled || null;
          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._animationMode === "NoopAnimations";

          _ck(_v, 15, 0, currVal_17, currVal_18);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).inline;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "warn";

          _ck(_v, 17, 0, currVal_19, currVal_20);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

          _ck(_v, 20, 0, currVal_21, currVal_22);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "warn";

          _ck(_v, 22, 0, currVal_23, currVal_24);
        });
      }

      function View_MaterialsStageComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "mat-accordion", [["class", "mat-accordion"]], [[2, "mat-accordion-multi", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          _headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 19, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], [[null, "opened"], [null, "closed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("opened" === en) {
            var pd_0 = (_co.panelOpenSecond = true) !== false;
            ad = pd_0 && ad;
          }

          if ("closed" === en) {
            var pd_1 = (_co.panelOpenSecond = false) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
          expanded: [0, "expanded"]
        }, {
          closed: "closed",
          opened: "opened"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          _lazyContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 6, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header mat-focus-indicator"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._toggle() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("component:@expansionHeight.start" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationStarted() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, [[11, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, {
          collapsedHeight: 0,
          expandedHeight: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, {
          value: 0,
          params: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Opciones EVAMED "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 8, "mat-selection-list", [["class", "mat-selection-list mat-list-base"], ["role", "listbox"]], [[1, "aria-multiselectable", 0], [1, "aria-disabled", 0], [1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._onFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.selectedOptionsDynamo = $event) !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = _co.onNgModelChangeDynamo($event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSelectionList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSelectionList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1753088, [["sistemas_constructivos", 4]], 1, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = true;

          _ck(_v, 5, 0, currVal_4);

          var currVal_25 = _co.selectedOptionsDynamo;

          _ck(_v, 19, 0, currVal_25);

          var currVal_26 = _co.ListSCDynamo;

          _ck(_v, 23, 0, currVal_26);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multi;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).expanded;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasSpacing();

          _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel._headerId;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled ? 0 - 1 : 0;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getPanelId();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded();

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "after";
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "before";

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationsDisabled;

          var currVal_14 = _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getExpandedState(), _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).expandedHeight));

          _ck(_v, 8, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).multiple;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled.toString();

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._tabIndex;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending;

          _ck(_v, 15, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);
        });
      }

      function View_MaterialsStageComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "mat-list-option", [["checkboxPosition", "before"], ["class", "mat-list-item mat-list-option mat-focus-indicator"], ["role", "option"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-with-avatar", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "mat-list-single-selected-option", null], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleBlur() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListOption_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1294336, [[19, 4]], 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]], {
          disableRipple: [0, "disableRipple"],
          checkboxPosition: [1, "checkboxPosition"],
          value: [2, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          _avatar: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          _icon: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          _lines: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 19, "div", [["style", "\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["style", "display: flex; align-items: center; width: 65.8%"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showMaterials(_v.context.$implicit, "user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["style", "display: flex; flex-direction: column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.removeMaterial($event, _v.context.$implicit, "user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["restore_from_trash"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.restoreMaterial($event, _v.context.$implicit, "user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["restore_page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "button", [["class", "custom-button-icon mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.duplicateMaterial($event, _v.context.$implicit, "user") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["control_point_duplicate"]))], function (_ck, _v) {
          var currVal_9 = true;
          var currVal_10 = "before";
          var currVal_11 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_9, currVal_10, currVal_11);

          _ck(_v, 13, 0);

          _ck(_v, 18, 0);

          _ck(_v, 23, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "primary";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "warn";
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectionList.multiple;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_8 = 0 - 1;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_12 = _v.context.$implicit;

          _ck(_v, 8, 0, currVal_12);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null;
          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations";

          _ck(_v, 10, 0, currVal_13, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).inline;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "warn";

          _ck(_v, 12, 0, currVal_15, currVal_16);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled || null;
          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._animationMode === "NoopAnimations";

          _ck(_v, 15, 0, currVal_17, currVal_18);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).inline;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).color !== "warn";

          _ck(_v, 17, 0, currVal_19, currVal_20);

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null;
          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations";

          _ck(_v, 20, 0, currVal_21, currVal_22);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).inline;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).color !== "warn";

          _ck(_v, 22, 0, currVal_23, currVal_24);
        });
      }

      function View_MaterialsStageComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "mat-accordion", [["class", "mat-accordion"]], [[2, "mat-accordion-multi", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          _headers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 19, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], [[null, "opened"], [null, "closed"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("opened" === en) {
            var pd_0 = (_co.panelOpenThird = true) !== false;
            ad = pd_0 && ad;
          }

          if ("closed" === en) {
            var pd_1 = (_co.panelOpenThird = false) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
          expanded: [0, "expanded"]
        }, {
          closed: "closed",
          opened: "opened"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          _lazyContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 6, "mat-expansion-panel-header", [["class", "mat-expansion-panel-header mat-focus-indicator"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._toggle() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("component:@expansionHeight.start" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationStarted() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, [[17, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, {
          collapsedHeight: 0,
          expandedHeight: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, {
          value: 0,
          params: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Creados por el usuario "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 1, 8, "mat-selection-list", [["class", "mat-selection-list mat-list-base"], ["role", "listbox"]], [[1, "aria-multiselectable", 0], [1, "aria-disabled", 0], [1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._onFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_2 = (_co.selectedOptionsUsuario = $event) !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = _co.onNgModelChangeUser($event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSelectionList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSelectionList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1753088, [["sistemas_constructivos", 4]], 1, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = true;

          _ck(_v, 5, 0, currVal_4);

          var currVal_25 = _co.selectedOptionsUsuario;

          _ck(_v, 19, 0, currVal_25);

          var currVal_26 = _co.ListSCUsuario;

          _ck(_v, 23, 0, currVal_26);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multi;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).expanded;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasSpacing();

          _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel._headerId;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled ? 0 - 1 : 0;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getPanelId();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).panel.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._isExpanded();

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "after";
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getTogglePosition() === "before";

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationsDisabled;

          var currVal_14 = _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._getExpandedState(), _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).expandedHeight));

          _ck(_v, 8, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).multiple;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).disabled.toString();

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._tabIndex;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending;

          _ck(_v, 15, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);
        });
      }

      function View_MaterialsStageComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "mat-list-option", [["class", "mat-list-item mat-list-option mat-focus-indicator"], ["role", "option"]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-with-avatar", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "mat-list-single-selected-option", null], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "focus"], [null, "blur"], [null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleBlur() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListOption_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1294336, [[23, 4]], 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          _avatar: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          _icon: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          _lines: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 13, "div", [["class", "table-materials"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "col-key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", "."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "col-material"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "col-cantidad"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "col-unidad"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "col-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "div", [["class", "col-unidad"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "mat-icon", [["class", "custom-icon mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_9 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_9);

          _ck(_v, 17, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "primary";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "warn";
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selectionList.multiple;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_8 = 0 - 1;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

          var currVal_10 = _v.context.$implicit.value.key;

          _ck(_v, 7, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.value.Material;

          _ck(_v, 9, 0, currVal_11);

          var currVal_12 = _v.context.$implicit.value.Cantidad;

          _ck(_v, 11, 0, currVal_12);

          var currVal_13 = _v.context.$implicit.value.Unidad;

          _ck(_v, 13, 0, currVal_13);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).inline;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "warn";

          _ck(_v, 16, 0, currVal_14, currVal_15);

          var currVal_16 = _v.context.$implicit.value.signal ? "check_circle" : "error";

          _ck(_v, 18, 0, currVal_16);
        });
      }

      function View_MaterialsStageComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-selection-list", [["class", "mat-selection-list mat-list-base"], ["role", "listbox"]], [[1, "aria-multiselectable", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "selectionChange"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._onFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("selectionChange" === en) {
            var pd_2 = _co.onSelectedMaterial(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).selectedOptions) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSelectionList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSelectionList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1753088, [["materials", 4]], 1, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          multiple: [0, "multiple"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          options: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_MaterialsStageComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["KeyValuePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]])], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = false;

          _ck(_v, 2, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform(_co.listMateriales));

          _ck(_v, 5, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).multiple;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled.toString();

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._tabIndex;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
        });
      }

      function View_MaterialsStageComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option mat-focus-indicator"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[72, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit.id;

          _ck(_v, 1, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_9 = _v.context.$implicit.name_transport;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_MaterialsStageComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option mat-focus-indicator"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[93, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit.id;

          _ck(_v, 1, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_9 = _v.context.$implicit.name_transport;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_MaterialsStageComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 291, "div", [["class", "container-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "header-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "return"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onReturnListMaterials() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Edici\xF3n de material"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 285, "div", [["class", "form-update-material"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 25, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nombre comercial"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 28, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 30, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 1, 8, "textarea", [["class", "input-general-renuew mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected.Material = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[27, 4], [28, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 48, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 23, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cantidad"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 37, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 39, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 1, 7, "input", [["class", "input-general-renuew width-90 mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected.Cantidad = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[36, 4], [37, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 23, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unidad"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 46, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 47, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 48, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 49, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 50, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 51, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 52, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 53, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, 1, 7, "input", [["class", "input-general-renuew width-90 mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected.Unidad = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[45, 4], [46, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 25, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 24, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comentarios"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 54, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 55, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 56, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 57, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 58, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 59, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 60, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 61, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 62, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, 1, 8, "textarea", [["class", "input-general-renuew mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected["Descripci\xF3n de Material"] = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[54, 4], [55, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 3, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 2, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 1, "div", [["class", "subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Transporte 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 55, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 30, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tipo de transporte"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 63, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 64, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 65, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 66, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 67, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 68, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 69, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 70, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 71, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, [[65, 4], [66, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.dataMaterialSelected.transporte_1 = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 72, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 73, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 74, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[63, 4], [64, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_MaterialsStageComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 23, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["distancia (KM)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 75, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 76, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 77, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 78, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 79, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 80, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 81, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 82, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 83, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, 1, 7, "input", [["class", "input-general-renuew width-90 mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected.distancia_1 = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](165, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](166, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[75, 4], [76, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](168, 0, null, null, 3, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 2, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 1, "div", [["class", "subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Transporte 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 55, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 30, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tipo de transporte"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 84, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 85, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 86, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 87, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 88, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 89, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 90, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 91, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 92, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](190, 16384, [[86, 4], [87, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.dataMaterialSelected.transporte_2 = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](196, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](197, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 93, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 94, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 95, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[84, 4], [85, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_MaterialsStageComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](203, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 23, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](205, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["distancia (KM)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](207, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](210, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 96, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 97, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 98, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 99, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 100, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 101, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 102, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 103, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 104, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, 1, 7, "input", [["class", "input-general-renuew width-90 mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 221)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 221).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 221)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 221)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected.distancia_2 = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](221, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](223, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](225, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](226, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[96, 4], [97, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 3, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 2, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 1, "div", [["class", "subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tiempo de vida del material"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](232, 0, null, null, 48, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](233, 0, null, null, 23, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](234, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tiempo de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](237, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](239, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 105, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 106, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 107, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 108, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 109, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 110, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 111, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 112, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 113, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, 1, 7, "input", [["class", "input-general-renuew width-90 mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 250)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 250).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 250)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 250)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected.vidaUtil = $event) !== false;
            ad = pd_7 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_8 = _co.changeReplaces(_co.dataMaterialSelected.vidaUtil) !== false;
            ad = pd_8 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](250, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](252, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](254, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](255, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[105, 4], [106, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 23, "div", [["class", "Col select-middle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reemplazos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](261, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](263, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 114, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 115, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 116, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 117, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 118, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 119, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 120, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 121, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 122, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](273, 0, null, 1, 7, "input", [["class", "input-general-renuew width-90 mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 274)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 274).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 274)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 274)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.dataMaterialSelected.reemplazos = $event) !== false;
            ad = pd_7 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_8 = _co.changeLifeTime(_co.dataMaterialSelected.reemplazos) !== false;
            ad = pd_8 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](274, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](276, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](278, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](279, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[114, 4], [115, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](281, 0, null, null, 3, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](282, 0, null, null, 2, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](283, 0, null, null, 1, "div", [["class", "subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Fuente de informaci\xF3n de impacto ambiental "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](285, 0, null, null, 6, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](286, 0, null, null, 5, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](287, 0, null, null, 4, "div", [["class", "button-read"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToSearchInfo() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](288, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](289, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](290, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["edit"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_38 = _co.dataMaterialSelected.Material;

          _ck(_v, 27, 0, currVal_38);

          var currVal_39 = "text";

          _ck(_v, 30, 0, currVal_39);

          var currVal_78 = _co.dataMaterialSelected.Cantidad;

          _ck(_v, 53, 0, currVal_78);

          var currVal_79 = "text";

          _ck(_v, 56, 0, currVal_79);

          var currVal_118 = _co.dataMaterialSelected.Unidad;

          _ck(_v, 77, 0, currVal_118);

          var currVal_119 = "text";

          _ck(_v, 80, 0, currVal_119);

          var currVal_158 = _co.dataMaterialSelected["Descripci\xF3n de Material"];

          _ck(_v, 102, 0, currVal_158);

          var currVal_159 = "text";

          _ck(_v, 105, 0, currVal_159);

          var currVal_182 = "outline";

          _ck(_v, 118, 0, currVal_182);

          var currVal_205 = _co.dataMaterialSelected.transporte_1;

          _ck(_v, 134, 0, currVal_205);

          _ck(_v, 137, 0);

          var currVal_206 = _co.catalogoTransportesLocal;

          _ck(_v, 143, 0, currVal_206);

          var currVal_245 = _co.dataMaterialSelected.distancia_1;

          _ck(_v, 163, 0, currVal_245);

          var currVal_246 = "text";

          _ck(_v, 166, 0, currVal_246);

          var currVal_269 = "outline";

          _ck(_v, 178, 0, currVal_269);

          var currVal_292 = _co.dataMaterialSelected.transporte_2;

          _ck(_v, 194, 0, currVal_292);

          _ck(_v, 197, 0);

          var currVal_293 = _co.catalogoTransportesExtrangero;

          _ck(_v, 203, 0, currVal_293);

          var currVal_332 = _co.dataMaterialSelected.distancia_2;

          _ck(_v, 223, 0, currVal_332);

          var currVal_333 = "text";

          _ck(_v, 226, 0, currVal_333);

          var currVal_372 = _co.dataMaterialSelected.vidaUtil;

          _ck(_v, 252, 0, currVal_372);

          var currVal_373 = "text";

          _ck(_v, 255, 0, currVal_373);

          var currVal_412 = _co.dataMaterialSelected.reemplazos;

          _ck(_v, 276, 0, currVal_412);

          var currVal_413 = "text";

          _ck(_v, 279, 0, currVal_413);

          _ck(_v, 290, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "standard";
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "fill";
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "outline";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).appearance == "legacy";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.errorState;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._canLabelFloat;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldLabelFloat();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._hasFloatingLabel();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._hideControlPlaceholder();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.autofilled;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._control.focused;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color == "accent";
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color == "warn";

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("untouched");

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("touched");

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("pristine");

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("dirty");

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("valid");

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("invalid");

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._shouldForward("pending");

          var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationsEnabled;

          _ck(_v, 12, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]);

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._isServer;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).placeholder;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._isNativeSelect || null;
          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._ariaDescribedby || null;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).errorState;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required.toString();

          _ck(_v, 24, 1, [currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37]);

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "standard";
          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "fill";
          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "outline";
          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "legacy";

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.errorState;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._canLabelFloat;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldLabelFloat();

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hasFloatingLabel();

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hideControlPlaceholder();

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.disabled;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.autofilled;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.focused;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "accent";
          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "warn";

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("untouched");

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("touched");

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pristine");

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("dirty");

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("valid");

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("invalid");

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pending");

          var currVal_61 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._animationsEnabled;

          _ck(_v, 38, 1, [currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61]);

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassUntouched;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassTouched;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPristine;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassDirty;

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassValid;

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassInvalid;

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPending;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._isServer;

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).id;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).placeholder;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).disabled;

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).required;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._isNativeSelect || null;
          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._ariaDescribedby || null;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).errorState;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).required.toString();

          _ck(_v, 50, 1, [currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77]);

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "standard";
          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "fill";
          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "outline";
          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).appearance == "legacy";

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.errorState;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._canLabelFloat;

          var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldLabelFloat();

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._hasFloatingLabel();

          var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._hideControlPlaceholder();

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.disabled;

          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.autofilled;

          var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._control.focused;

          var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).color == "accent";
          var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).color == "warn";

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("untouched");

          var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("touched");

          var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("pristine");

          var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("dirty");

          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("valid");

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("invalid");

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._shouldForward("pending");

          var currVal_101 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64)._animationsEnabled;

          _ck(_v, 62, 1, [currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101]);

          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassUntouched;

          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassTouched;

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassPristine;

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassDirty;

          var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassValid;

          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassInvalid;

          var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).ngClassPending;

          var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._isServer;

          var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).id;

          var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).placeholder;

          var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).disabled;

          var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).required;

          var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._isNativeSelect || null;
          var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._ariaDescribedby || null;

          var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).errorState;

          var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).required.toString();

          _ck(_v, 74, 1, [currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117]);

          var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).appearance == "standard";
          var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).appearance == "fill";
          var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).appearance == "outline";
          var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).appearance == "legacy";

          var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._control.errorState;

          var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._canLabelFloat;

          var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldLabelFloat();

          var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._hasFloatingLabel();

          var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._hideControlPlaceholder();

          var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._control.disabled;

          var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._control.autofilled;

          var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._control.focused;

          var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).color == "accent";
          var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).color == "warn";

          var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldForward("untouched");

          var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldForward("touched");

          var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldForward("pristine");

          var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldForward("dirty");

          var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldForward("valid");

          var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldForward("invalid");

          var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._shouldForward("pending");

          var currVal_141 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._animationsEnabled;

          _ck(_v, 87, 1, [currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141]);

          var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).ngClassUntouched;

          var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).ngClassTouched;

          var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).ngClassPristine;

          var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).ngClassDirty;

          var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).ngClassValid;

          var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).ngClassInvalid;

          var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).ngClassPending;

          var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._isServer;

          var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).id;

          var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).placeholder;

          var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).disabled;

          var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).required;

          var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._isNativeSelect || null;
          var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._ariaDescribedby || null;

          var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).errorState;

          var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).required.toString();

          _ck(_v, 99, 1, [currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157]);

          var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).appearance == "standard";
          var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).appearance == "fill";
          var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).appearance == "outline";
          var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).appearance == "legacy";

          var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._control.errorState;

          var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._canLabelFloat;

          var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldLabelFloat();

          var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._hasFloatingLabel();

          var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._hideControlPlaceholder();

          var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._control.disabled;

          var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._control.autofilled;

          var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._control.focused;

          var currVal_172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).color == "accent";
          var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).color == "warn";

          var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldForward("untouched");

          var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldForward("touched");

          var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldForward("pristine");

          var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldForward("dirty");

          var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldForward("valid");

          var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldForward("invalid");

          var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._shouldForward("pending");

          var currVal_181 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118)._animationsEnabled;

          _ck(_v, 117, 1, [currVal_160, currVal_161, currVal_162, currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171, currVal_172, currVal_173, currVal_174, currVal_175, currVal_176, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181]);

          var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassUntouched;

          var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassTouched;

          var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassPristine;

          var currVal_186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassDirty;

          var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassValid;

          var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassInvalid;

          var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).ngClassPending;

          var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).id;

          var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).tabIndex;

          var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._getAriaLabel();

          var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._getAriaLabelledby();

          var currVal_194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).required.toString();

          var currVal_195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).disabled.toString();

          var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).errorState;

          var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._optionIds : null;

          var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).multiple;

          var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._ariaDescribedby || null;

          var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137)._getAriaActiveDescendant();

          var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).disabled;

          var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).errorState;

          var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).required;

          var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).empty;

          _ck(_v, 132, 1, [currVal_183, currVal_184, currVal_185, currVal_186, currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195, currVal_196, currVal_197, currVal_198, currVal_199, currVal_200, currVal_201, currVal_202, currVal_203, currVal_204]);

          var currVal_207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).appearance == "standard";
          var currVal_208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).appearance == "fill";
          var currVal_209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).appearance == "outline";
          var currVal_210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).appearance == "legacy";

          var currVal_211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._control.errorState;

          var currVal_212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._canLabelFloat;

          var currVal_213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldLabelFloat();

          var currVal_214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._hasFloatingLabel();

          var currVal_215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._hideControlPlaceholder();

          var currVal_216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._control.disabled;

          var currVal_217 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._control.autofilled;

          var currVal_218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._control.focused;

          var currVal_219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).color == "accent";
          var currVal_220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).color == "warn";

          var currVal_221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldForward("untouched");

          var currVal_222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldForward("touched");

          var currVal_223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldForward("pristine");

          var currVal_224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldForward("dirty");

          var currVal_225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldForward("valid");

          var currVal_226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldForward("invalid");

          var currVal_227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._shouldForward("pending");

          var currVal_228 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150)._animationsEnabled;

          _ck(_v, 148, 1, [currVal_207, currVal_208, currVal_209, currVal_210, currVal_211, currVal_212, currVal_213, currVal_214, currVal_215, currVal_216, currVal_217, currVal_218, currVal_219, currVal_220, currVal_221, currVal_222, currVal_223, currVal_224, currVal_225, currVal_226, currVal_227, currVal_228]);

          var currVal_229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).ngClassUntouched;

          var currVal_230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).ngClassTouched;

          var currVal_231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).ngClassPristine;

          var currVal_232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).ngClassDirty;

          var currVal_233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).ngClassValid;

          var currVal_234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).ngClassInvalid;

          var currVal_235 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).ngClassPending;

          var currVal_236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._isServer;

          var currVal_237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).id;

          var currVal_238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).placeholder;

          var currVal_239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).disabled;

          var currVal_240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).required;

          var currVal_241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._isNativeSelect || null;
          var currVal_242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166)._ariaDescribedby || null;

          var currVal_243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).errorState;

          var currVal_244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).required.toString();

          _ck(_v, 160, 1, [currVal_229, currVal_230, currVal_231, currVal_232, currVal_233, currVal_234, currVal_235, currVal_236, currVal_237, currVal_238, currVal_239, currVal_240, currVal_241, currVal_242, currVal_243, currVal_244]);

          var currVal_247 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).appearance == "standard";
          var currVal_248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).appearance == "fill";
          var currVal_249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).appearance == "outline";
          var currVal_250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).appearance == "legacy";

          var currVal_251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._control.errorState;

          var currVal_252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._canLabelFloat;

          var currVal_253 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldLabelFloat();

          var currVal_254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._hasFloatingLabel();

          var currVal_255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._hideControlPlaceholder();

          var currVal_256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._control.disabled;

          var currVal_257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._control.autofilled;

          var currVal_258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._control.focused;

          var currVal_259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).color == "accent";
          var currVal_260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).color == "warn";

          var currVal_261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldForward("untouched");

          var currVal_262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldForward("touched");

          var currVal_263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldForward("pristine");

          var currVal_264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldForward("dirty");

          var currVal_265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldForward("valid");

          var currVal_266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldForward("invalid");

          var currVal_267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._shouldForward("pending");

          var currVal_268 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._animationsEnabled;

          _ck(_v, 177, 1, [currVal_247, currVal_248, currVal_249, currVal_250, currVal_251, currVal_252, currVal_253, currVal_254, currVal_255, currVal_256, currVal_257, currVal_258, currVal_259, currVal_260, currVal_261, currVal_262, currVal_263, currVal_264, currVal_265, currVal_266, currVal_267, currVal_268]);

          var currVal_270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).ngClassUntouched;

          var currVal_271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).ngClassTouched;

          var currVal_272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).ngClassPristine;

          var currVal_273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).ngClassDirty;

          var currVal_274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).ngClassValid;

          var currVal_275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).ngClassInvalid;

          var currVal_276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).ngClassPending;

          var currVal_277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).id;

          var currVal_278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).tabIndex;

          var currVal_279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._getAriaLabel();

          var currVal_280 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._getAriaLabelledby();

          var currVal_281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).required.toString();

          var currVal_282 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).disabled.toString();

          var currVal_283 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).errorState;

          var currVal_284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._optionIds : null;

          var currVal_285 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).multiple;

          var currVal_286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._ariaDescribedby || null;

          var currVal_287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197)._getAriaActiveDescendant();

          var currVal_288 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).disabled;

          var currVal_289 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).errorState;

          var currVal_290 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).required;

          var currVal_291 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 197).empty;

          _ck(_v, 192, 1, [currVal_270, currVal_271, currVal_272, currVal_273, currVal_274, currVal_275, currVal_276, currVal_277, currVal_278, currVal_279, currVal_280, currVal_281, currVal_282, currVal_283, currVal_284, currVal_285, currVal_286, currVal_287, currVal_288, currVal_289, currVal_290, currVal_291]);

          var currVal_294 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).appearance == "standard";
          var currVal_295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).appearance == "fill";
          var currVal_296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).appearance == "outline";
          var currVal_297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).appearance == "legacy";

          var currVal_298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._control.errorState;

          var currVal_299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._canLabelFloat;

          var currVal_300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldLabelFloat();

          var currVal_301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._hasFloatingLabel();

          var currVal_302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._hideControlPlaceholder();

          var currVal_303 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._control.disabled;

          var currVal_304 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._control.autofilled;

          var currVal_305 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._control.focused;

          var currVal_306 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).color == "accent";
          var currVal_307 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210).color == "warn";

          var currVal_308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldForward("untouched");

          var currVal_309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldForward("touched");

          var currVal_310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldForward("pristine");

          var currVal_311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldForward("dirty");

          var currVal_312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldForward("valid");

          var currVal_313 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldForward("invalid");

          var currVal_314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._shouldForward("pending");

          var currVal_315 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 210)._animationsEnabled;

          _ck(_v, 208, 1, [currVal_294, currVal_295, currVal_296, currVal_297, currVal_298, currVal_299, currVal_300, currVal_301, currVal_302, currVal_303, currVal_304, currVal_305, currVal_306, currVal_307, currVal_308, currVal_309, currVal_310, currVal_311, currVal_312, currVal_313, currVal_314, currVal_315]);

          var currVal_316 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).ngClassUntouched;

          var currVal_317 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).ngClassTouched;

          var currVal_318 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).ngClassPristine;

          var currVal_319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).ngClassDirty;

          var currVal_320 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).ngClassValid;

          var currVal_321 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).ngClassInvalid;

          var currVal_322 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 225).ngClassPending;

          var currVal_323 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226)._isServer;

          var currVal_324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).id;

          var currVal_325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).placeholder;

          var currVal_326 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).disabled;

          var currVal_327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).required;

          var currVal_328 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226)._isNativeSelect || null;
          var currVal_329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226)._ariaDescribedby || null;

          var currVal_330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).errorState;

          var currVal_331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).required.toString();

          _ck(_v, 220, 1, [currVal_316, currVal_317, currVal_318, currVal_319, currVal_320, currVal_321, currVal_322, currVal_323, currVal_324, currVal_325, currVal_326, currVal_327, currVal_328, currVal_329, currVal_330, currVal_331]);

          var currVal_334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).appearance == "standard";
          var currVal_335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).appearance == "fill";
          var currVal_336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).appearance == "outline";
          var currVal_337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).appearance == "legacy";

          var currVal_338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._control.errorState;

          var currVal_339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._canLabelFloat;

          var currVal_340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldLabelFloat();

          var currVal_341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._hasFloatingLabel();

          var currVal_342 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._hideControlPlaceholder();

          var currVal_343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._control.disabled;

          var currVal_344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._control.autofilled;

          var currVal_345 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._control.focused;

          var currVal_346 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).color == "accent";
          var currVal_347 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239).color == "warn";

          var currVal_348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldForward("untouched");

          var currVal_349 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldForward("touched");

          var currVal_350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldForward("pristine");

          var currVal_351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldForward("dirty");

          var currVal_352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldForward("valid");

          var currVal_353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldForward("invalid");

          var currVal_354 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._shouldForward("pending");

          var currVal_355 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 239)._animationsEnabled;

          _ck(_v, 237, 1, [currVal_334, currVal_335, currVal_336, currVal_337, currVal_338, currVal_339, currVal_340, currVal_341, currVal_342, currVal_343, currVal_344, currVal_345, currVal_346, currVal_347, currVal_348, currVal_349, currVal_350, currVal_351, currVal_352, currVal_353, currVal_354, currVal_355]);

          var currVal_356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).ngClassUntouched;

          var currVal_357 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).ngClassTouched;

          var currVal_358 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).ngClassPristine;

          var currVal_359 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).ngClassDirty;

          var currVal_360 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).ngClassValid;

          var currVal_361 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).ngClassInvalid;

          var currVal_362 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 254).ngClassPending;

          var currVal_363 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._isServer;

          var currVal_364 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).id;

          var currVal_365 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).placeholder;

          var currVal_366 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).disabled;

          var currVal_367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).required;

          var currVal_368 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._isNativeSelect || null;
          var currVal_369 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._ariaDescribedby || null;

          var currVal_370 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).errorState;

          var currVal_371 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255).required.toString();

          _ck(_v, 249, 1, [currVal_356, currVal_357, currVal_358, currVal_359, currVal_360, currVal_361, currVal_362, currVal_363, currVal_364, currVal_365, currVal_366, currVal_367, currVal_368, currVal_369, currVal_370, currVal_371]);

          var currVal_374 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).appearance == "standard";
          var currVal_375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).appearance == "fill";
          var currVal_376 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).appearance == "outline";
          var currVal_377 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).appearance == "legacy";

          var currVal_378 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._control.errorState;

          var currVal_379 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._canLabelFloat;

          var currVal_380 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldLabelFloat();

          var currVal_381 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._hasFloatingLabel();

          var currVal_382 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._hideControlPlaceholder();

          var currVal_383 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._control.disabled;

          var currVal_384 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._control.autofilled;

          var currVal_385 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._control.focused;

          var currVal_386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).color == "accent";
          var currVal_387 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263).color == "warn";

          var currVal_388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldForward("untouched");

          var currVal_389 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldForward("touched");

          var currVal_390 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldForward("pristine");

          var currVal_391 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldForward("dirty");

          var currVal_392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldForward("valid");

          var currVal_393 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldForward("invalid");

          var currVal_394 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._shouldForward("pending");

          var currVal_395 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 263)._animationsEnabled;

          _ck(_v, 261, 1, [currVal_374, currVal_375, currVal_376, currVal_377, currVal_378, currVal_379, currVal_380, currVal_381, currVal_382, currVal_383, currVal_384, currVal_385, currVal_386, currVal_387, currVal_388, currVal_389, currVal_390, currVal_391, currVal_392, currVal_393, currVal_394, currVal_395]);

          var currVal_396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 278).ngClassUntouched;

          var currVal_397 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 278).ngClassTouched;

          var currVal_398 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 278).ngClassPristine;

          var currVal_399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 278).ngClassDirty;

          var currVal_400 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 278).ngClassValid;

          var currVal_401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 278).ngClassInvalid;

          var currVal_402 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 278).ngClassPending;

          var currVal_403 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279)._isServer;

          var currVal_404 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).id;

          var currVal_405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).placeholder;

          var currVal_406 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).disabled;

          var currVal_407 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).required;

          var currVal_408 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279)._isNativeSelect || null;
          var currVal_409 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279)._ariaDescribedby || null;

          var currVal_410 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).errorState;

          var currVal_411 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 279).required.toString();

          _ck(_v, 273, 1, [currVal_396, currVal_397, currVal_398, currVal_399, currVal_400, currVal_401, currVal_402, currVal_403, currVal_404, currVal_405, currVal_406, currVal_407, currVal_408, currVal_409, currVal_410, currVal_411]);

          var currVal_414 = _co.dataMaterialSelected.materialSelectedDB;

          _ck(_v, 288, 0, currVal_414);

          var currVal_415 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 290).inline;

          var currVal_416 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 290).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 290).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 290).color !== "warn";

          _ck(_v, 289, 0, currVal_415, currVal_416);
        });
      }

      function View_MaterialsStageComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option mat-focus-indicator"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._selectViaInteraction() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[132, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getTabIndex();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).multiple;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).active;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSelected();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled.toString();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_9 = _v.context.$implicit.name_material;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_MaterialsStageComponent_28(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "item-material"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showDetailEPD($event, _v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", ""], ["class", "logoList"], ["src", "../../../../assets/logos/EPD.png"]], null, null, null, null, null))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.name_material;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_MaterialsStageComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.EPDS;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_MaterialsStageComponent_30(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Impacto"]))], null, null);
      }

      function View_MaterialsStageComponent_32(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A1 - A3 "]))], null, null);
      }

      function View_MaterialsStageComponent_33(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A1 "]))], null, null);
      }

      function View_MaterialsStageComponent_34(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A2 "]))], null, null);
      }

      function View_MaterialsStageComponent_35(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A3 "]))], null, null);
      }

      function View_MaterialsStageComponent_31(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.standard_id === 1;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.standard_id === 2;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.standard_id === 3;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _v.context.$implicit.standard_id === 4;

          _ck(_v, 9, 0, currVal_3);
        }, null);
      }

      function View_MaterialsStageComponent_36(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Categor\xEDa de impacto ambiental "]))], null, null);
      }

      function View_MaterialsStageComponent_38(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de Recursos Abi\xF3ticos Minerales "]))], null, null);
      }

      function View_MaterialsStageComponent_39(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de Recursos Abi\xF3ticos F\xF3siles "]))], null, null);
      }

      function View_MaterialsStageComponent_40(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Calentamiento Global "]))], null, null);
      }

      function View_MaterialsStageComponent_41(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de la Capa de Ozono "]))], null, null);
      }

      function View_MaterialsStageComponent_42(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Oxidaci\xF3n Fotoqu\xEDmica "]))], null, null);
      }

      function View_MaterialsStageComponent_43(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Acidificaci\xF3n "]))], null, null);
      }

      function View_MaterialsStageComponent_44(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Eutrofizaci\xF3n "]))], null, null);
      }

      function View_MaterialsStageComponent_45(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Escasez de agua "]))], null, null);
      }

      function View_MaterialsStageComponent_46(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Formaci\xF3n de Ozono Troposf\xE9rico "]))], null, null);
      }

      function View_MaterialsStageComponent_47(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de recursos energ\xE9ticos no renovables "]))], null, null);
      }

      function View_MaterialsStageComponent_48(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Human toxicity "]))], null, null);
      }

      function View_MaterialsStageComponent_49(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Fresh water aquatic ecotox "]))], null, null);
      }

      function View_MaterialsStageComponent_50(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Marine aquatic ecotoxicity "]))], null, null);
      }

      function View_MaterialsStageComponent_51(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Terrestrial ecotoxicity "]))], null, null);
      }

      function View_MaterialsStageComponent_37(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_41)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_42)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_43)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_44)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_45)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_46)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_47)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_48)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_49)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_50)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_51)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.potential_type_id === 1;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.potential_type_id === 2;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.potential_type_id === 3;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _v.context.$implicit.potential_type_id === 4;

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _v.context.$implicit.potential_type_id === 5;

          _ck(_v, 11, 0, currVal_4);

          var currVal_5 = _v.context.$implicit.potential_type_id === 6;

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.potential_type_id === 7;

          _ck(_v, 15, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.potential_type_id === 8;

          _ck(_v, 17, 0, currVal_7);

          var currVal_8 = _v.context.$implicit.potential_type_id === 9;

          _ck(_v, 19, 0, currVal_8);

          var currVal_9 = _v.context.$implicit.potential_type_id === 10;

          _ck(_v, 21, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.potential_type_id === 11;

          _ck(_v, 23, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.potential_type_id === 12;

          _ck(_v, 25, 0, currVal_11);

          var currVal_12 = _v.context.$implicit.potential_type_id === 13;

          _ck(_v, 27, 0, currVal_12);

          var currVal_13 = _v.context.$implicit.potential_type_id === 14;

          _ck(_v, 29, 0, currVal_13);
        }, null);
      }

      function View_MaterialsStageComponent_52(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Potencial"]))], null, null);
      }

      function View_MaterialsStageComponent_53(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], [])], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_v.context.$implicit.value, 0, 9));

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_MaterialsStageComponent_54(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unidad"]))], null, null);
      }

      function View_MaterialsStageComponent_56(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pz "]))], null, null);
      }

      function View_MaterialsStageComponent_57(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Kg "]))], null, null);
      }

      function View_MaterialsStageComponent_58(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m\xB3 "]))], null, null);
      }

      function View_MaterialsStageComponent_59(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ton "]))], null, null);
      }

      function View_MaterialsStageComponent_60(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m\xB2 "]))], null, null);
      }

      function View_MaterialsStageComponent_61(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg SB eq "]))], null, null);
      }

      function View_MaterialsStageComponent_62(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m "]))], null, null);
      }

      function View_MaterialsStageComponent_63(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m3 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_64(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg CFC-11 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_65(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg Nox, kg O3, o kg etano "]))], null, null);
      }

      function View_MaterialsStageComponent_66(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg C2H4 "]))], null, null);
      }

      function View_MaterialsStageComponent_67(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" MJ "]))], null, null);
      }

      function View_MaterialsStageComponent_68(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg N eq "]))], null, null);
      }

      function View_MaterialsStageComponent_69(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg SO2 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_70(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pza "]))], null, null);
      }

      function View_MaterialsStageComponent_71(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg PO4 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_72(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg CO2 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_73(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg 1,4-DB eq "]))], null, null);
      }

      function View_MaterialsStageComponent_74(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg "]))], null, null);
      }

      function View_MaterialsStageComponent_55(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_56)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_57)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_58)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_59)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_60)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_61)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_62)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_63)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_64)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_65)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_66)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_67)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_68)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_69)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_70)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_71)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_72)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_73)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_74)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.unit_id === 1;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.unit_id === 2;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.unit_id === 3;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _v.context.$implicit.unit_id === 4;

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _v.context.$implicit.unit_id === 5;

          _ck(_v, 11, 0, currVal_4);

          var currVal_5 = _v.context.$implicit.unit_id === 6;

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.unit_id === 7;

          _ck(_v, 15, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.unit_id === 8;

          _ck(_v, 17, 0, currVal_7);

          var currVal_8 = _v.context.$implicit.unit_id === 9;

          _ck(_v, 19, 0, currVal_8);

          var currVal_9 = _v.context.$implicit.unit_id === 10;

          _ck(_v, 21, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.unit_id === 11;

          _ck(_v, 23, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.unit_id === 12;

          _ck(_v, 25, 0, currVal_11);

          var currVal_12 = _v.context.$implicit.unit_id === 13;

          _ck(_v, 27, 0, currVal_12);

          var currVal_13 = _v.context.$implicit.unit_id === 14;

          _ck(_v, 29, 0, currVal_13);

          var currVal_14 = _v.context.$implicit.unit_id === 15;

          _ck(_v, 31, 0, currVal_14);

          var currVal_15 = _v.context.$implicit.unit_id === 16;

          _ck(_v, 33, 0, currVal_15);

          var currVal_16 = _v.context.$implicit.unit_id === 17;

          _ck(_v, 35, 0, currVal_16);

          var currVal_17 = _v.context.$implicit.unit_id === 18;

          _ck(_v, 37, 0, currVal_17);

          var currVal_18 = _v.context.$implicit.unit_id === 19;

          _ck(_v, 39, 0, currVal_18);
        }, null);
      }

      function View_MaterialsStageComponent_75(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatHeaderRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRow"], [], null, null)], null, null);
      }

      function View_MaterialsStageComponent_76(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRow"], [], null, null)], null, null);
      }

      function View_MaterialsStageComponent_29(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 76, "div", [["class", "material-target"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "return"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.returnListEpds() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "button", [["class", "yellow-button custom-continue mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onSelectMaterial($event, _co.dataMaterialSelected.name) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Seleccionar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 65, "table", [["class", "mat-elevation-z8 data-info mat-table"], ["mat-table", ""]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatTable_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"]], {
          dataSource: [0, "dataSource"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 137, {
          _contentColumnDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 138, {
          _contentRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 139, {
          _contentHeaderRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 140, {
          _contentFooterRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 141, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 142, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 143, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[137, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[142, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[141, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 144, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 145, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 146, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[137, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[145, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[144, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 147, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 148, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 149, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[137, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_52)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[148, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_53)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[147, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 150, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 151, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 152, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[137, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_54)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[151, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_55)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[150, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_75)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[139, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_76)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[138, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRowDef"]])], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = _co.dataMaterialSelected.msd;

          _ck(_v, 13, 0, currVal_4);

          var currVal_5 = "Standard";

          _ck(_v, 21, 0, currVal_5);

          var currVal_6 = "Potencial";

          _ck(_v, 34, 0, currVal_6);

          var currVal_7 = "Valor";

          _ck(_v, 47, 0, currVal_7);

          var currVal_8 = "Unidad";

          _ck(_v, 60, 0, currVal_8);

          var currVal_9 = _co.displayedColumns;

          _ck(_v, 72, 0, currVal_9);

          var currVal_10 = _co.displayedColumns;

          _ck(_v, 75, 0, currVal_10);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.dataMaterialSelected.name;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationMode === "NoopAnimations";

          _ck(_v, 6, 0, currVal_1, currVal_2);

          var currVal_3 = _co.dataMaterialSelected.description;

          _ck(_v, 10, 0, currVal_3);
        });
      }

      function View_MaterialsStageComponent_77(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "item-material"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showMexicanIuh() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" mexicaniuh "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "item-material"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showEPIC() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["EPiC"]))], null, null);
      }

      function View_MaterialsStageComponent_79(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "item-material"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showDetailMaterial($event, _v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " - "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "epic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["EPiC"]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.name_material;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_MaterialsStageComponent_78(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "return"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.returnDatabaseList() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_79)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.EPiC;

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_MaterialsStageComponent_81(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "item-material"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.showDetailMaterial($event, _v.context.$implicit) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " - "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "epic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["mexicaniuh"]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.name_material;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_MaterialsStageComponent_80(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "return"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.returnDatabaseList() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_81)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.mexicaniuh;

          _ck(_v, 4, 0, currVal_0);
        }, null);
      }

      function View_MaterialsStageComponent_83(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Impacto"]))], null, null);
      }

      function View_MaterialsStageComponent_85(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A1 - A3 "]))], null, null);
      }

      function View_MaterialsStageComponent_86(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A1 "]))], null, null);
      }

      function View_MaterialsStageComponent_87(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A2 "]))], null, null);
      }

      function View_MaterialsStageComponent_88(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A3 "]))], null, null);
      }

      function View_MaterialsStageComponent_84(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_85)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_86)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_87)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_88)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.standard_id === 1;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.standard_id === 2;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.standard_id === 3;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _v.context.$implicit.standard_id === 4;

          _ck(_v, 9, 0, currVal_3);
        }, null);
      }

      function View_MaterialsStageComponent_89(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Categor\xEDa de impacto ambiental "]))], null, null);
      }

      function View_MaterialsStageComponent_91(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de Recursos Abi\xF3ticos Minerales "]))], null, null);
      }

      function View_MaterialsStageComponent_92(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de Recursos Abi\xF3ticos F\xF3siles "]))], null, null);
      }

      function View_MaterialsStageComponent_93(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Calentamiento Global "]))], null, null);
      }

      function View_MaterialsStageComponent_94(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de la Capa de Ozono "]))], null, null);
      }

      function View_MaterialsStageComponent_95(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Oxidaci\xF3n Fotoqu\xEDmica "]))], null, null);
      }

      function View_MaterialsStageComponent_96(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Acidificaci\xF3n "]))], null, null);
      }

      function View_MaterialsStageComponent_97(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Eutrofizaci\xF3n "]))], null, null);
      }

      function View_MaterialsStageComponent_98(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Escasez de agua "]))], null, null);
      }

      function View_MaterialsStageComponent_99(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Formaci\xF3n de Ozono Troposf\xE9rico "]))], null, null);
      }

      function View_MaterialsStageComponent_100(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agotamiento de recursos energ\xE9ticos no renovables "]))], null, null);
      }

      function View_MaterialsStageComponent_101(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Human toxicity "]))], null, null);
      }

      function View_MaterialsStageComponent_102(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Fresh water aquatic ecotox "]))], null, null);
      }

      function View_MaterialsStageComponent_103(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Marine aquatic ecotoxicity "]))], null, null);
      }

      function View_MaterialsStageComponent_104(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Terrestrial ecotoxicity "]))], null, null);
      }

      function View_MaterialsStageComponent_90(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_91)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_92)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_93)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_94)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_95)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_96)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_97)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_98)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_99)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_100)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_101)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_102)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_103)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_104)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.potential_type_id === 1;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.potential_type_id === 2;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.potential_type_id === 3;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _v.context.$implicit.potential_type_id === 4;

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _v.context.$implicit.potential_type_id === 5;

          _ck(_v, 11, 0, currVal_4);

          var currVal_5 = _v.context.$implicit.potential_type_id === 6;

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.potential_type_id === 7;

          _ck(_v, 15, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.potential_type_id === 8;

          _ck(_v, 17, 0, currVal_7);

          var currVal_8 = _v.context.$implicit.potential_type_id === 9;

          _ck(_v, 19, 0, currVal_8);

          var currVal_9 = _v.context.$implicit.potential_type_id === 10;

          _ck(_v, 21, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.potential_type_id === 11;

          _ck(_v, 23, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.potential_type_id === 12;

          _ck(_v, 25, 0, currVal_11);

          var currVal_12 = _v.context.$implicit.potential_type_id === 13;

          _ck(_v, 27, 0, currVal_12);

          var currVal_13 = _v.context.$implicit.potential_type_id === 14;

          _ck(_v, 29, 0, currVal_13);
        }, null);
      }

      function View_MaterialsStageComponent_105(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Potencial"]))], null, null);
      }

      function View_MaterialsStageComponent_106(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], [])], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_v.context.$implicit.value, 0, 9));

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_MaterialsStageComponent_107(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unidad"]))], null, null);
      }

      function View_MaterialsStageComponent_109(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pz "]))], null, null);
      }

      function View_MaterialsStageComponent_110(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Kg "]))], null, null);
      }

      function View_MaterialsStageComponent_111(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m\xB3 "]))], null, null);
      }

      function View_MaterialsStageComponent_112(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ton "]))], null, null);
      }

      function View_MaterialsStageComponent_113(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m\xB2 "]))], null, null);
      }

      function View_MaterialsStageComponent_114(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg SB eq "]))], null, null);
      }

      function View_MaterialsStageComponent_115(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m "]))], null, null);
      }

      function View_MaterialsStageComponent_116(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" m3 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_117(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg CFC-11 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_118(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg Nox, kg O3, o kg etano "]))], null, null);
      }

      function View_MaterialsStageComponent_119(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg C2H4 "]))], null, null);
      }

      function View_MaterialsStageComponent_120(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" MJ "]))], null, null);
      }

      function View_MaterialsStageComponent_121(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg N eq "]))], null, null);
      }

      function View_MaterialsStageComponent_122(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg SO2 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_123(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pza "]))], null, null);
      }

      function View_MaterialsStageComponent_124(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg PO4 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_125(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg CO2 eq "]))], null, null);
      }

      function View_MaterialsStageComponent_126(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg 1,4-DB eq "]))], null, null);
      }

      function View_MaterialsStageComponent_127(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" kg "]))], null, null);
      }

      function View_MaterialsStageComponent_108(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_109)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_110)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_111)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_112)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_113)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_114)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_115)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_116)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_117)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_118)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_119)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_120)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_121)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_122)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_123)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_124)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_125)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_126)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_127)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.unit_id === 1;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.unit_id === 2;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.unit_id === 3;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _v.context.$implicit.unit_id === 4;

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _v.context.$implicit.unit_id === 5;

          _ck(_v, 11, 0, currVal_4);

          var currVal_5 = _v.context.$implicit.unit_id === 6;

          _ck(_v, 13, 0, currVal_5);

          var currVal_6 = _v.context.$implicit.unit_id === 7;

          _ck(_v, 15, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.unit_id === 8;

          _ck(_v, 17, 0, currVal_7);

          var currVal_8 = _v.context.$implicit.unit_id === 9;

          _ck(_v, 19, 0, currVal_8);

          var currVal_9 = _v.context.$implicit.unit_id === 10;

          _ck(_v, 21, 0, currVal_9);

          var currVal_10 = _v.context.$implicit.unit_id === 11;

          _ck(_v, 23, 0, currVal_10);

          var currVal_11 = _v.context.$implicit.unit_id === 12;

          _ck(_v, 25, 0, currVal_11);

          var currVal_12 = _v.context.$implicit.unit_id === 13;

          _ck(_v, 27, 0, currVal_12);

          var currVal_13 = _v.context.$implicit.unit_id === 14;

          _ck(_v, 29, 0, currVal_13);

          var currVal_14 = _v.context.$implicit.unit_id === 15;

          _ck(_v, 31, 0, currVal_14);

          var currVal_15 = _v.context.$implicit.unit_id === 16;

          _ck(_v, 33, 0, currVal_15);

          var currVal_16 = _v.context.$implicit.unit_id === 17;

          _ck(_v, 35, 0, currVal_16);

          var currVal_17 = _v.context.$implicit.unit_id === 18;

          _ck(_v, 37, 0, currVal_17);

          var currVal_18 = _v.context.$implicit.unit_id === 19;

          _ck(_v, 39, 0, currVal_18);
        }, null);
      }

      function View_MaterialsStageComponent_128(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatHeaderRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRow"], [], null, null)], null, null);
      }

      function View_MaterialsStageComponent_129(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRow"], [], null, null)], null, null);
      }

      function View_MaterialsStageComponent_82(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 75, "div", [["class", "material-target"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "return"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.returnListDB() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "button", [["class", "yellow-button custom-continue mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onSelectMaterial($event, _co.dataMaterialSelected.name) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Seleccionar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 65, "table", [["class", "mat-elevation-z8 data-info mat-table"], ["mat-table", ""]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatTable_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"]], {
          dataSource: [0, "dataSource"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 155, {
          _contentColumnDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 156, {
          _contentRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 157, {
          _contentHeaderRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 158, {
          _contentFooterRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 159, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 160, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 161, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[155, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_83)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[160, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_84)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[159, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 162, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 163, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 164, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[155, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_89)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[163, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_90)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[162, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 165, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 166, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 167, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[155, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_105)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[166, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_106)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[165, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 168, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 169, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 170, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[155, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_107)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[169, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_108)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[168, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_128)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[157, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_MaterialsStageComponent_129)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[156, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_27__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRowDef"]])], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = _co.dataMaterialSelected.msd;

          _ck(_v, 12, 0, currVal_4);

          var currVal_5 = "Standard";

          _ck(_v, 20, 0, currVal_5);

          var currVal_6 = "Potencial";

          _ck(_v, 33, 0, currVal_6);

          var currVal_7 = "Valor";

          _ck(_v, 46, 0, currVal_7);

          var currVal_8 = "Unidad";

          _ck(_v, 59, 0, currVal_8);

          var currVal_9 = _co.displayedColumns;

          _ck(_v, 71, 0, currVal_9);

          var currVal_10 = _co.displayedColumns;

          _ck(_v, 74, 0, currVal_10);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.dataMaterialSelected.name;

          _ck(_v, 4, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations";

          _ck(_v, 5, 0, currVal_1, currVal_2);

          var currVal_3 = _co.dataMaterialSelected.description;

          _ck(_v, 9, 0, currVal_3);
        });
      }

      function View_MaterialsStageComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 69, "div", [["class", "container-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 68, "div", [["class", "form-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "return"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.returnMaterialData() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Realiza tu b\xFAsqueda"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 35, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 34, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 33, "form", [["class", "example-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 28, "mat-form-field", [["class", "example-full-width mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 123, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 124, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 125, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 126, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 127, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 128, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 129, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 130, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 131, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 16777216, null, 1, 8, "input", [["class", "input-general-renuew mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[1, "autocomplete", 0], [1, "role", 0], [1, "aria-autocomplete", 0], [1, "aria-activedescendant", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [1, "aria-haspopup", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focusin"], [null, "keydown"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focusin" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleFocus() !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._onTouched() !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleInput($event) !== false;
            ad = pd_6 && ad;
          }

          if ("keydown" === en) {
            var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleKeydown($event) !== false;
            ad = pd_7 && ad;
          }

          if ("focus" === en) {
            var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._focusChanged(true) !== false;
            ad = pd_8 && ad;
          }

          if ("blur" === en) {
            var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._focusChanged(false) !== false;
            ad = pd_9 && ad;
          }

          if ("input" === en) {
            var pd_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._onInput() !== false;
            ad = pd_10 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_11 = (_co.dataMaterialSelected.materialFiltrado = $event) !== false;
            ad = pd_11 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 4866048, null, 0, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteTrigger"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ViewportRuler"]], {
          autocomplete: [0, "autocomplete"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteTrigger"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_p"]]], {
          form: [0, "form"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[123, 4], [124, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 1, 7, "mat-autocomplete", [["class", "mat-autocomplete"]], null, null, null, _node_modules_angular_material_autocomplete_index_ngfactory__WEBPACK_IMPORTED_MODULE_31__["View_MatAutocomplete_0"], _node_modules_angular_material_autocomplete_index_ngfactory__WEBPACK_IMPORTED_MODULE_31__["RenderType_MatAutocomplete"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocomplete"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 1228800, [["auto", 4]], 2, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocomplete"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS"]], {
          displayWith: [0, "displayWith"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 132, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 133, {
          optionGroups: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_MaterialsStageComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 25, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 24, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 23, "mat-tab-group", [["class", "mat-tab-group"], ["mat-align-tabs", "start"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 134, {
          _allTabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabGroup"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 16777216, null, null, 7, "mat-tab", [["label", "EPD's"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 770048, [[134, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 135, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 136, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 16777216, null, null, 11, "mat-tab", [["label", "Base de datos"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 770048, [[134, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 153, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 154, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_77)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_78)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_80)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_82)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38);

          _ck(_v, 29, 0, currVal_52);

          var currVal_53 = _co.myControl;
          var currVal_54 = _co.dataMaterialSelected.materialFiltrado;

          _ck(_v, 31, 0, currVal_53, currVal_54);

          var currVal_55 = "text";

          _ck(_v, 34, 0, currVal_55);

          var currVal_56 = _co.displayFn;

          _ck(_v, 38, 0, currVal_56);

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 42, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).transform(_co.filteredOptions));

          _ck(_v, 42, 0, currVal_57);

          var currVal_60 = "EPD's";

          _ck(_v, 51, 0, currVal_60);

          var currVal_61 = !_co.showEPD;

          _ck(_v, 55, 0, currVal_61);

          var currVal_62 = _co.showEPD;

          _ck(_v, 57, 0, currVal_62);

          var currVal_63 = "Base de datos";

          _ck(_v, 59, 0, currVal_63);

          var currVal_64 = _co.showListMaterials;

          _ck(_v, 63, 0, currVal_64);

          var currVal_65 = !_co.showMexican && !_co.showMaterial && !_co.showListMaterials;

          _ck(_v, 65, 0, currVal_65);

          var currVal_66 = _co.showMexican && !_co.showMaterial && !_co.showListMaterials;

          _ck(_v, 67, 0, currVal_66);

          var currVal_67 = _co.showMaterial;

          _ck(_v, 69, 0, currVal_67);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending;

          _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "standard";
          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "fill";
          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "outline";
          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).appearance == "legacy";

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.errorState;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._canLabelFloat;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldLabelFloat();

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._hasFloatingLabel();

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._hideControlPlaceholder();

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.disabled;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.autofilled;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._control.focused;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color == "accent";
          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).color == "warn";

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("untouched");

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("touched");

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("pristine");

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("dirty");

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("valid");

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("invalid");

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._shouldForward("pending");

          var currVal_28 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._animationsEnabled;

          _ck(_v, 15, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28]);

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocompleteAttribute;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocompleteDisabled ? null : "combobox";
          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocompleteDisabled ? null : "list";
          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).panelOpen && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).activeOption ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).activeOption.id : null;
          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocompleteDisabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).panelOpen.toString();
          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocompleteDisabled || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).panelOpen ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocomplete == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocomplete.id;
          var currVal_35 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).autocompleteDisabled;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._isServer;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).id;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).placeholder;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).required;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._isNativeSelect || null;
          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._ariaDescribedby || null;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).errorState;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).required.toString();

          _ck(_v, 27, 1, [currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51]);

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dynamicHeight;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).headerPosition === "below";

          _ck(_v, 46, 0, currVal_58, currVal_59);
        });
      }

      function View_MaterialsStageComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "nav", [["class", "nav-redirect"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["class", "proyecto-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [["class", "a-redirect"], ["href", "/"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < Regresar a proyectos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 102, "div", [["class", "principal-container container-total"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 25, "nav", [["class", "nav-steps"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 24, "div", [["class", "mdl-stepper-horizontal-alternative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-one-selected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "mdl-stepper-tag aux-yellow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Producci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-two"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToConstructionStage() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "mdl-stepper-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Construcci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-three"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToUsageStage() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "div", [["class", "mdl-stepper-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Uso"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-four"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToEndLife() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "mdl-stepper-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fin de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 75, "section", [["class", "container-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 41, "section", [["class", "container-sheets"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 7, "div", [["class", "tab-title-sections"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Elementos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.addConstructiveElementsDialog() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 25, "div", [["class", "container-image"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], [], {
          ngSwitch: [0, "ngSwitch"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 6, "div", [["class", "list-elements"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 5, "mat-selection-list", [["class", "mat-selection-list mat-list-base"], ["role", "listbox"]], [[1, "aria-multiselectable", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "selectionChange"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._onFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("selectionChange" === en) {
            var pd_2 = _co.onGroupsChange(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).selectedOptions.selected) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSelectionList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSelectionList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 1753088, [["sheets", 4]], 1, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          multiple: [0, "multiple"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          options: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MaterialsStageComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 14, "section", [["class", "container-systems"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 7, "div", [["class", "tab-title-sections"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione el sistema constructivo base a aplicar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.addConstructiveSystemDialog() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 17, "section", [["class", "container-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 9, "div", [["class", "tab-title-sections"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Materiales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "span", [["class", "sc-selected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](95, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 6, "div", [["class", "conditional-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MaterialsStageComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 3, "div", [["class", "section-continue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 2, "button", [["class", "yellow-button custom-continue mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co["continue"]() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
          disabled: [0, "disabled"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Guardar y continuar "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 40, 0);

          var currVal_5 = _co.selectedSheet;

          _ck(_v, 43, 0, currVal_5);

          var currVal_6 = "Cimentaci\xF3n";

          _ck(_v, 45, 0, currVal_6);

          var currVal_7 = "Muros interiores";

          _ck(_v, 47, 0, currVal_7);

          var currVal_8 = "Muros exteriores";

          _ck(_v, 49, 0, currVal_8);

          var currVal_9 = "Pisos";

          _ck(_v, 51, 0, currVal_9);

          var currVal_10 = "Techos";

          _ck(_v, 53, 0, currVal_10);

          var currVal_11 = "Entrepiso";

          _ck(_v, 55, 0, currVal_11);

          var currVal_12 = "Estructura";

          _ck(_v, 57, 0, currVal_12);

          var currVal_13 = "Puertas";

          _ck(_v, 59, 0, currVal_13);

          var currVal_14 = "Ventanas";

          _ck(_v, 61, 0, currVal_14);

          var currVal_15 = "Inst. especiales";

          _ck(_v, 63, 0, currVal_15);

          var currVal_16 = "Otros";

          _ck(_v, 65, 0, currVal_16);

          var currVal_20 = false;

          _ck(_v, 71, 0, currVal_20);

          var currVal_21 = _co.sheetNames;

          _ck(_v, 74, 0, currVal_21);

          _ck(_v, 82, 0);

          var currVal_26 = _co.indexSheet !== undefined;

          _ck(_v, 85, 0, currVal_26);

          var currVal_27 = _co.indexSheet !== undefined;

          _ck(_v, 87, 0, currVal_27);

          var currVal_28 = _co.indexSheet !== undefined;

          _ck(_v, 89, 0, currVal_28);

          _ck(_v, 99, 0);

          var currVal_34 = !_co.selectedMaterial && !_co.showSearch;

          _ck(_v, 103, 0, currVal_34);

          var currVal_35 = _co.selectedMaterial;

          _ck(_v, 105, 0, currVal_35);

          var currVal_36 = _co.showSearch;

          _ck(_v, 107, 0, currVal_36);

          var currVal_39 = _co.endSave;

          _ck(_v, 110, 0, currVal_39);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.nameProject;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationMode === "NoopAnimations";

          _ck(_v, 37, 0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).inline;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color !== "warn";

          _ck(_v, 39, 0, currVal_3, currVal_4);

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).multiple;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).disabled.toString();

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._tabIndex;

          _ck(_v, 69, 0, currVal_17, currVal_18, currVal_19);

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).disabled || null;
          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._animationMode === "NoopAnimations";

          _ck(_v, 79, 0, currVal_22, currVal_23);

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).inline;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).color !== "warn";

          _ck(_v, 81, 0, currVal_24, currVal_25);

          var currVal_29 = _co.SCseleccionado;

          _ck(_v, 95, 0, currVal_29);

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).disabled || null;
          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._animationMode === "NoopAnimations";

          _ck(_v, 96, 0, currVal_30, currVal_31);

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).inline;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).color !== "warn";

          _ck(_v, 98, 0, currVal_32, currVal_33);

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).disabled || null;
          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._animationMode === "NoopAnimations";

          _ck(_v, 109, 0, currVal_37, currVal_38);
        });
      }

      function View_MaterialsStageComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-materials-stage", [], null, null, null, View_MaterialsStageComponent_0, RenderType_MaterialsStageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _materials_stage_component__WEBPACK_IMPORTED_MODULE_34__["MaterialsStageComponent"], [_core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_35__["MaterialsService"], _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_36__["ProjectsService"], _angular_router__WEBPACK_IMPORTED_MODULE_37__["Router"], _core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_38__["CatalogsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__["MatDialog"], _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_40__["AnalisisService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var MaterialsStageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-materials-stage", _materials_stage_component__WEBPACK_IMPORTED_MODULE_34__["MaterialsStageComponent"], View_MaterialsStageComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "pJxk":
    /*!*****************************************************************************!*\
      !*** ./src/app/materials-stage/components/pass-step/pass-step.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: PassStepComponent */

    /***/
    function pJxk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PassStepComponent", function () {
        return PassStepComponent;
      });

      var PassStepComponent = /*#__PURE__*/function () {
        function PassStepComponent(dialogRef, data) {
          _classCallCheck(this, PassStepComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(PassStepComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.data["continue"] = false;
            this.data.save = false;
            this.dialogRef.close(this.data);
          }
        }, {
          key: "continueStep",
          value: function continueStep(event) {
            event.preventDefault();
            this.data["continue"] = true;
            this.data.save = true;
            this.dialogRef.close(this.data);
          }
        }, {
          key: "continueOnly",
          value: function continueOnly(event) {
            event.preventDefault();
            this.data["continue"] = true;
            this.data.save = false;
            this.dialogRef.close(this.data);
          }
        }]);

        return PassStepComponent;
      }();
      /***/

    },

    /***/
    "rnGK":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/add-constructive-system/add-constructive-system.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AddConstructiveSystemComponent */

    /***/
    function rnGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddConstructiveSystemComponent", function () {
        return AddConstructiveSystemComponent;
      });

      var AddConstructiveSystemComponent = /*#__PURE__*/function () {
        function AddConstructiveSystemComponent(dialogRef, data) {
          _classCallCheck(this, AddConstructiveSystemComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(AddConstructiveSystemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }]);

        return AddConstructiveSystemComponent;
      }();
      /***/

    },

    /***/
    "wijn":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/materials-stage/components/add-constructive-element/add-constructive-element.component.ngfactory.js ***!
      \*********************************************************************************************************************/

    /*! exports provided: RenderType_AddConstructiveElementComponent, View_AddConstructiveElementComponent_0, View_AddConstructiveElementComponent_Host_0, AddConstructiveElementComponentNgFactory */

    /***/
    function wijn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AddConstructiveElementComponent", function () {
        return RenderType_AddConstructiveElementComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddConstructiveElementComponent_0", function () {
        return View_AddConstructiveElementComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddConstructiveElementComponent_Host_0", function () {
        return View_AddConstructiveElementComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddConstructiveElementComponentNgFactory", function () {
        return AddConstructiveElementComponentNgFactory;
      });
      /* harmony import */


      var _add_constructive_element_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-constructive-element.component.scss.shim.ngstyle */
      "OtMV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _add_constructive_element_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./add-constructive-element.component */
      "L4jI");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AddConstructiveElementComponent = [_add_constructive_element_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AddConstructiveElementComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AddConstructiveElementComponent,
        data: {}
      });

      function View_AddConstructiveElementComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nuevo elemento constructivo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 51, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 23, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nombre del elemento constructivo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 7, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.data.newConstructiveElement = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 24, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 23, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nombre del sistema constructivo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 1, 7, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._onInput() !== false;
            ad = pd_6 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_7 = (_co.data.newConstructiveSystem = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 5, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 3, "button", [["class", "yellow-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).dialogResult) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], {
          dialogResult: [0, "dialogResult"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Crear elemento "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 2, 0);

          var currVal_39 = _co.data.newConstructiveElement;

          _ck(_v, 28, 0, currVal_39);

          var currVal_40 = "text";

          _ck(_v, 31, 0, currVal_40);

          var currVal_79 = _co.data.newConstructiveSystem;

          _ck(_v, 53, 0, currVal_79);

          var currVal_80 = "text";

          _ck(_v, 56, 0, currVal_80);

          var currVal_85 = _co.data;

          _ck(_v, 62, 0, currVal_85);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "standard";
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "fill";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "outline";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "legacy";

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.errorState;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._canLabelFloat;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldLabelFloat();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._hasFloatingLabel();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._hideControlPlaceholder();

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.disabled;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.autofilled;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.focused;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color == "accent";
          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color == "warn";

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("untouched");

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("touched");

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("pristine");

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("dirty");

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("valid");

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("invalid");

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("pending");

          var currVal_22 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._animationsEnabled;

          _ck(_v, 13, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._isServer;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).id;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).placeholder;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).required;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._isNativeSelect || null;
          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._ariaDescribedby || null;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).errorState;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).required.toString();

          _ck(_v, 25, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38]);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "standard";
          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "fill";
          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "outline";
          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).appearance == "legacy";

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.errorState;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._canLabelFloat;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldLabelFloat();

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hasFloatingLabel();

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._hideControlPlaceholder();

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.disabled;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.autofilled;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._control.focused;

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "accent";
          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).color == "warn";

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("untouched");

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("touched");

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pristine");

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("dirty");

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("valid");

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("invalid");

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._shouldForward("pending");

          var currVal_62 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._animationsEnabled;

          _ck(_v, 38, 1, [currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62]);

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassUntouched;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassTouched;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPristine;

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassDirty;

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassValid;

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassInvalid;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPending;

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._isServer;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).id;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).placeholder;

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).disabled;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).required;

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._isNativeSelect || null;
          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._ariaDescribedby || null;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).errorState;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).required.toString();

          _ck(_v, 50, 1, [currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78]);

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).disabled || null;
          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._animationMode === "NoopAnimations";
          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ariaLabel || null;

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).type;

          _ck(_v, 60, 0, currVal_81, currVal_82, currVal_83, currVal_84);
        });
      }

      function View_AddConstructiveElementComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-constructive-element", [], null, null, null, View_AddConstructiveElementComponent_0, RenderType_AddConstructiveElementComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_constructive_element_component__WEBPACK_IMPORTED_MODULE_15__["AddConstructiveElementComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AddConstructiveElementComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-constructive-element", _add_constructive_element_component__WEBPACK_IMPORTED_MODULE_15__["AddConstructiveElementComponent"], View_AddConstructiveElementComponent_Host_0, {}, {}, []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=materials-stage-materials-stage-module-ngfactory-es5.js.map