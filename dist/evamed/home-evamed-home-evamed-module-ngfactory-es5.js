(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-evamed-home-evamed-module-ngfactory"], {
    /***/
    "+a0g":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/home-evamed/components/change-name-project/change-name-project.component.ngfactory.js ***!
      \*******************************************************************************************************/

    /*! exports provided: RenderType_ChangeNameProjectComponent, View_ChangeNameProjectComponent_0, View_ChangeNameProjectComponent_Host_0, ChangeNameProjectComponentNgFactory */

    /***/
    function a0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ChangeNameProjectComponent", function () {
        return RenderType_ChangeNameProjectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChangeNameProjectComponent_0", function () {
        return View_ChangeNameProjectComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChangeNameProjectComponent_Host_0", function () {
        return View_ChangeNameProjectComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeNameProjectComponentNgFactory", function () {
        return ChangeNameProjectComponentNgFactory;
      });
      /* harmony import */


      var _change_name_project_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-name-project.component.scss.shim.ngstyle */
      "vn2E");
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


      var _change_name_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./change-name-project.component */
      "iNyZ");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ChangeNameProjectComponent = [_change_name_project_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ChangeNameProjectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ChangeNameProjectComponent,
        data: {}
      });

      function View_ChangeNameProjectComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cambio de nombre de proyecto "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 26, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 23, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nombre del proyecto "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
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
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 7, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
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
            var pd_7 = (_co.data.nameProject = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "button", [["class", "yellow-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).dialogResult) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], {
          dialogResult: [0, "dialogResult"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Cambiar nombre "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 2, 0);

          var currVal_39 = _co.data.nameProject;

          _ck(_v, 28, 0, currVal_39);

          var currVal_40 = "text";

          _ck(_v, 30, 0, currVal_40);

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

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._isServer;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).placeholder;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._isNativeSelect || null;
          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._ariaDescribedby || null;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).errorState;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required.toString();

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending;

          _ck(_v, 25, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38]);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled || null;
          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._animationMode === "NoopAnimations";
          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ariaLabel || null;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).type;

          _ck(_v, 35, 0, currVal_41, currVal_42, currVal_43, currVal_44);
        });
      }

      function View_ChangeNameProjectComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-change-name-project", [], null, null, null, View_ChangeNameProjectComponent_0, RenderType_ChangeNameProjectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _change_name_project_component__WEBPACK_IMPORTED_MODULE_15__["ChangeNameProjectComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ChangeNameProjectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-change-name-project", _change_name_project_component__WEBPACK_IMPORTED_MODULE_15__["ChangeNameProjectComponent"], View_ChangeNameProjectComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "4+yq":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/home-evamed/components/choose-type-of-project/choose-type-of-project.component.ngfactory.js ***!
      \*************************************************************************************************************/

    /*! exports provided: RenderType_ChooseTypeOfProjectComponent, View_ChooseTypeOfProjectComponent_0, View_ChooseTypeOfProjectComponent_Host_0, ChooseTypeOfProjectComponentNgFactory */

    /***/
    function yq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ChooseTypeOfProjectComponent", function () {
        return RenderType_ChooseTypeOfProjectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChooseTypeOfProjectComponent_0", function () {
        return View_ChooseTypeOfProjectComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ChooseTypeOfProjectComponent_Host_0", function () {
        return View_ChooseTypeOfProjectComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseTypeOfProjectComponentNgFactory", function () {
        return ChooseTypeOfProjectComponentNgFactory;
      });
      /* harmony import */


      var _choose_type_of_project_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./choose-type-of-project.component.scss.shim.ngstyle */
      "ruHE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_radio_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/radio/index.ngfactory */
      "3HBE");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "CtHx");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _choose_type_of_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./choose-type-of-project.component */
      "KiQE");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ChooseTypeOfProjectComponent = [_choose_type_of_project_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ChooseTypeOfProjectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ChooseTypeOfProjectComponent,
        data: {}
      });

      function View_ChooseTypeOfProjectComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-radio-button", [["class", "example-radio-button mat-radio-button"]], [[2, "mat-radio-checked", null], [2, "mat-radio-disabled", null], [2, "_mat-animation-noopable", null], [2, "mat-primary", null], [2, "mat-accent", null], [2, "mat-warn", null], [1, "tabindex", 0], [1, "id", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-describedby", 0]], [[null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._inputElement.nativeElement.focus() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_radio_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatRadioButton_0"], _node_modules_angular_material_radio_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatRadioButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, [[1, 4]], 0, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioButton"], [[2, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["UniqueSelectionDispatcher"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MAT_RADIO_DEFAULT_OPTIONS"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_11 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_11);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).checked;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "primary";
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "accent";
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color === "warn";
          var currVal_6 = 0 - 1;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          var currVal_8 = null;
          var currVal_9 = null;
          var currVal_10 = null;

          _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]);

          var currVal_12 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_12);
        });
      }

      function View_ChooseTypeOfProjectComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Considera las emisiones de CO2 de los procesos de producci\xF3n de los materiales. Es necesario contar con la cuantificaci\xF3n de materiales de construcci\xF3n. "]))], null, null);
      }

      function View_ChooseTypeOfProjectComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Considera los potenciales impactos ambientales debido al consumo energ\xE9tico durante el uso del edificio, como la climatizaci\xF3n y la iluminaci\xF3n artificial. Es necesario conocer la demanda energ\xE9tica anual (kWh). "]))], null, null);
      }

      function View_ChooseTypeOfProjectComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Considera los potenciales impactos ambientales durante todo el ciclo de vida. Es necesario contar con la cuantificaci\xF3n de materiales de construcci\xF3n, medios de transporte utilizados, y su tiempo de vida \xFAtil. De igual forma, es necesario conocer la demanda energ\xE9tica anual, y el tipo de maquinar\xEDa utilizado durante la construcci\xF3n y la eventual de-construcci\xF3n del edificio. "]))], null, null);
      }

      function View_ChooseTypeOfProjectComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Selecciona el tipo de evaluaci\xF3n a realizar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 148, "div", [["class", "dialog-content mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "mat-radio-group", [["class", "example-radio-group mat-radio-group"], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ngModelChange" === en) {
            var pd_0 = (_co.data.optionSelected = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 1064960, null, 1, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _radios: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChooseTypeOfProjectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChooseTypeOfProjectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChooseTypeOfProjectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChooseTypeOfProjectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 131, "div", [["class", "mdl-card mdl-shadow--2dp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 130, "div", [["class", "mdl-card__supporting-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 129, "div", [["class", "mdl-stepper-horizontal-alternative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 33, "div", [["class", "mdl-stepper-step step-one-selected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "div", [["class", "mdl-stepper-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Etapa de producci\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 25, "div", [["class", "mdl-stepper-optional"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 24, "table", [["class", "table-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Extracci\xF3n y actividades previas a producci\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Transporte a la planta "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Manufactura "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 25, "div", [["class", "mdl-stepper-step step-two"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 2, "div", [["class", "mdl-stepper-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Etapa de construcci\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 17, "div", [["class", "mdl-stepper-optional"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 16, "table", [["class", "table-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Transporte al sitio "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" A5 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Instalaci\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 26, "div", [["class", "mdl-stepper-step step-three"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 2, "div", [["class", "mdl-stepper-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Etapa de uso "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 18, "div", [["class", "mdl-stepper-optional"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 17, "table", [["class", "table-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["e "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" B4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Reemplazo (Incluye producci\xF3n, transporte y materiales) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" B6 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Uso de energ\xEDa operacional "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 41, "div", [["class", "mdl-stepper-step step-four"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 2, "div", [["class", "mdl-stepper-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Etapa de fin de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 33, "div", [["class", "mdl-stepper-optional"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 32, "table", [["class", "table-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" C1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Deconstrucci\xF3n / demolici\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" C2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](135, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Transporte de sitio de procesamiento o disposici\xF3n final de desechos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" C3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Tratamiento de los desechos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 3, "td", [["class", "td-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 2, "b", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](148, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" C4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 2, "td", [["class", "td-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](151, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Disposici\xF3n final de desechos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 5, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](156, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 3, "button", [["class", "yellow-button alf mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).dialogResult) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](158, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]], {
          dialogResult: [0, "dialogResult"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Continuar "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 2, 0);

          var currVal_8 = _co.data.optionSelected;

          _ck(_v, 12, 0, currVal_8);

          var currVal_9 = _co.options;

          _ck(_v, 16, 0, currVal_9);

          var currVal_10 = _co.data.optionSelected === "Huella de carbono incorporado";

          _ck(_v, 18, 0, currVal_10);

          var currVal_11 = _co.data.optionSelected === "Uso";

          _ck(_v, 20, 0, currVal_11);

          var currVal_12 = _co.data.optionSelected === "Ciclo de vida";

          _ck(_v, 22, 0, currVal_12);

          var currVal_13 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "mdl-stepper-circle" : "mdl-stepper-circle-noSelected";

          _ck(_v, 28, 0, currVal_13);

          var currVal_14 = "mdl-stepper-title";
          var currVal_15 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "title-type-project-selected" : "title-type-project";

          _ck(_v, 30, 0, currVal_14, currVal_15);

          var currVal_16 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 37, 0, currVal_16);

          var currVal_17 = "td-text";
          var currVal_18 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 40, 0, currVal_17, currVal_18);

          var currVal_19 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 45, 0, currVal_19);

          var currVal_20 = "td-text";
          var currVal_21 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 48, 0, currVal_20, currVal_21);

          var currVal_22 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 53, 0, currVal_22);

          var currVal_23 = "td-text";
          var currVal_24 = _co.data.optionSelected === "Huella de carbono incorporado" || _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 56, 0, currVal_23, currVal_24);

          var currVal_25 = _co.data.optionSelected === "Ciclo de vida" ? "mdl-stepper-circle" : "mdl-stepper-circle-noSelected";

          _ck(_v, 62, 0, currVal_25);

          var currVal_26 = "mdl-stepper-title";
          var currVal_27 = _co.data.optionSelected === "Ciclo de vida" ? "title-type-project-selected" : "title-type-project";

          _ck(_v, 64, 0, currVal_26, currVal_27);

          var currVal_28 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 71, 0, currVal_28);

          var currVal_29 = "td-text";
          var currVal_30 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 74, 0, currVal_29, currVal_30);

          var currVal_31 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 79, 0, currVal_31);

          var currVal_32 = "td-text";
          var currVal_33 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 82, 0, currVal_32, currVal_33);

          var currVal_34 = _co.data.optionSelected === "Huella de carbono incorporado" ? "mdl-stepper-circle-noSelected" : "mdl-stepper-circle";

          _ck(_v, 88, 0, currVal_34);

          var currVal_35 = "mdl-stepper-title";
          var currVal_36 = _co.data.optionSelected === "Huella de carbono incorporado" ? "title-type-project" : "title-type-project-selected";

          _ck(_v, 90, 0, currVal_35, currVal_36);

          var currVal_37 = _co.data.optionSelected === "Huella de carbono incorporado" ? "text-type-project" : "text-type-project-selected";

          _ck(_v, 98, 0, currVal_37);

          var currVal_38 = "td-text";
          var currVal_39 = _co.data.optionSelected === "Huella de carbono incorporado" ? "text-type-project" : "text-type-project-selected";

          _ck(_v, 101, 0, currVal_38, currVal_39);

          var currVal_40 = _co.data.optionSelected === "Huella de carbono incorporado" ? "text-type-project" : "text-type-project-selected";

          _ck(_v, 106, 0, currVal_40);

          var currVal_41 = "td-text";
          var currVal_42 = _co.data.optionSelected === "Huella de carbono incorporado" ? "text-type-project" : "text-type-project-selected";

          _ck(_v, 109, 0, currVal_41, currVal_42);

          var currVal_43 = _co.data.optionSelected === "Ciclo de vida" ? "mdl-stepper-circle" : "mdl-stepper-circle-noSelected";

          _ck(_v, 115, 0, currVal_43);

          var currVal_44 = "mdl-stepper-title";
          var currVal_45 = _co.data.optionSelected === "Ciclo de vida" ? "title-type-project-selected" : "title-type-project";

          _ck(_v, 117, 0, currVal_44, currVal_45);

          var currVal_46 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 124, 0, currVal_46);

          var currVal_47 = "td-text";
          var currVal_48 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 127, 0, currVal_47, currVal_48);

          var currVal_49 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 132, 0, currVal_49);

          var currVal_50 = "td-text";
          var currVal_51 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 135, 0, currVal_50, currVal_51);

          var currVal_52 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 140, 0, currVal_52);

          var currVal_53 = "td-text";
          var currVal_54 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 143, 0, currVal_53, currVal_54);

          var currVal_55 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 148, 0, currVal_55);

          var currVal_56 = "td-text";
          var currVal_57 = _co.data.optionSelected === "Ciclo de vida" ? "text-type-project-selected" : "text-type-project";

          _ck(_v, 151, 0, currVal_56, currVal_57);

          var currVal_62 = _co.data;

          _ck(_v, 159, 0, currVal_62);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending;

          _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158).disabled || null;
          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158)._animationMode === "NoopAnimations";
          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).ariaLabel || null;

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).type;

          _ck(_v, 157, 0, currVal_58, currVal_59, currVal_60, currVal_61);
        });
      }

      function View_ChooseTypeOfProjectComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-choose-type-of-project", [], null, null, null, View_ChooseTypeOfProjectComponent_0, RenderType_ChooseTypeOfProjectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _choose_type_of_project_component__WEBPACK_IMPORTED_MODULE_12__["ChooseTypeOfProjectComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ChooseTypeOfProjectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-choose-type-of-project", _choose_type_of_project_component__WEBPACK_IMPORTED_MODULE_12__["ChooseTypeOfProjectComponent"], View_ChooseTypeOfProjectComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "7Rl9":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/home-evamed/components/add-new-project/add-new-project.component.scss.shim.ngstyle.js ***!
      \*******************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Rl9(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmV3LXByb2plY3QuY29tcG9uZW50LnNjc3MifQ== */"];
      /***/
    },

    /***/
    "I8W3":
    /*!***********************************************************************************************!*\
      !*** ./src/app/home-evamed/components/home-evamed/home-evamed.component.scss.shim.ngstyle.js ***!
      \***********************************************************************************************/

    /*! exports provided: styles */

    /***/
    function I8W3(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".mat-card-content.content-estadisticas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding-top: 10px;\n  border-top: 1px solid #cbcbcb;\n}\n\n.mat-card-content.content-estadisticas[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n\n.mat-card-content.content-estadisticas[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n}\n\n.container-principal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 98%;\n  height: 100%;\n  margin-top: 20px;\n}\n\n.container-principal[_ngcontent-%COMP%]   .btn-primer-producto[_ngcontent-%COMP%] {\n  padding-top: 18px;\n  background-color: #ffffff;\n  height: 60px;\n  width: 150px;\n  box-shadow: 0px 3px 6px #00000029;\n  text-align: center;\n  cursor: pointer;\n}\n\n.container-principal[_ngcontent-%COMP%]   .btn-primer-producto[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\n  color: #a8d024;\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.container-principal[_ngcontent-%COMP%]   .btn-primer-producto[_ngcontent-%COMP%]   .message-plus[_ngcontent-%COMP%] {\n  color: #767676;\n  font-size: 12px;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  box-shadow: revert;\n  border: 1px solid #cbcbcb;\n  border-radius: 8px;\n}\n\n.card-project[_ngcontent-%COMP%] {\n  margin: 10px 16px 16px 0;\n  border: 1px solid #cbcbcb;\n  border-radius: 8px !important;\n  box-shadow: revert;\n}\n\n.second-mat-tab-group[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  max-width: 980px;\n  margin: auto;\n  height: 300px;\n}\n\n.grid-container[_ngcontent-%COMP%]   .subseccion[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 60px;\n}\n\n.grid-container[_ngcontent-%COMP%]   .card-item-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 10px;\n  width: 25%;\n  margin: 15px;\n  height: 145px;\n  overflow: auto;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #cbcbcb;\n  border-radius: 17px;\n}\n\n.grid-container[_ngcontent-%COMP%]   .card-item-custom[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 1px solid #7fa20b;\n}\n\n.grid-container[_ngcontent-%COMP%]   .card-item-custom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.grid-container[_ngcontent-%COMP%]   .card-item-custom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nmat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-left: -20px;\n  margin-top: -10px;\n}\n\n.header-tag[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 40%;\n  z-index: 100;\n}\n\n.header-tag[_ngcontent-%COMP%]   .container-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 30px;\n}\n\n.header-tag[_ngcontent-%COMP%]   .container-tag[_ngcontent-%COMP%]   .title-tag[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.header-tag[_ngcontent-%COMP%]   .container-tag[_ngcontent-%COMP%]   .date-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #767676;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 245px;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .boton-carbono[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  width: 40px;\n  height: 40px;\n  margin-left: 67px;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .boton-carbono-verde[_ngcontent-%COMP%] {\n  background: #a8d024;\n  box-shadow: 0px 2px 2px #00000027;\n  border-radius: 5px;\n  font-size: 15px;\n  color: #ffffff;\n  text-align: center;\n  border: none;\n  margin-left: 33px;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .botones-finales[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 293px;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   .text-error[_ngcontent-%COMP%] {\n  margin-left: 48px;\n  margin-right: 10px;\n}\n\n.mat-tab-resultados[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 231px;\n}\n\n.seccionTres[_ngcontent-%COMP%] {\n  padding-left: 46px;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .titulo-carbono[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 5px;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 239px;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .texto-descripcion[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 5px;\n  padding-top: 23px;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-align: justify;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   p[_ngcontent-%COMP%] {\n  padding-left: 90px;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  padding-top: 1px;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .flecha[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 1px;\n  display: inline-flex;\n  color: white;\n  margin: 8px;\n  position: relative;\n  align-items: center;\n  padding-left: 11px;\n  border-left: none;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .punta[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 16px;\n  margin-top: 12px;\n  height: 18px;\n  transform: rotate(134deg) skewX(-10deg) skewY(-10deg);\n  content: \"\";\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .fle[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .texto-flecha[_ngcontent-%COMP%] {\n  align-self: center;\n  padding-top: 3px;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  display: flex;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]   .boton-carbono[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  width: 40px;\n  margin: 10px;\n  height: 40px;\n}\n\n.graficas-huella-carbono[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]   .boton-carbono-verde[_ngcontent-%COMP%] {\n  background: #a8d024;\n  box-shadow: 0px 2px 2px #00000027;\n  border-radius: 5px;\n  font-size: 15px;\n  color: #ffffff;\n  text-align: center;\n  border: none;\n  height: 63px;\n  margin: 15px;\n  align-self: end;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0px;\n  color: #707070;\n  opacity: 1;\n  margin-top: 5px;\n  margin-left: 7px;\n  margin-bottom: 3px;\n}\n\n.select-impacto-ambiental[_ngcontent-%COMP%] {\n  width: 221px;\n  height: 37px;\n  background: #ffffff;\n  border-color: #cbcbcb;\n  border-style: solid;\n  border-radius: 10px;\n  opacity: 1;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-bottom: 11px;\n  padding: 0;\n}\n\n.seccionUno[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 5px;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .button-info[_ngcontent-%COMP%] {\n  border-radius: 10px 0px 0px 10px;\n  width: 201px;\n  height: 48px;\n  background: #efefef;\n  border: 0px;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .button-info-select[_ngcontent-%COMP%] {\n  border-radius: 10px 0px 0px 10px;\n  width: 201px;\n  height: 48px;\n  background: #ffffff;\n}\n\n.seccionUno[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  border-radius: 0px 10px 10px 0px;\n  height: 47px;\n  margin-left: 0px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.1px;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 48px;\n  background: #efefef;\n  border-radius: 0px 10px 10px 0px;\n  border: 0px;\n  padding: 1px;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .some-text[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  display: grid;\n  grid-template-columns: repeat(1, auto);\n  grid-template-rows: 18px;\n  font-size: 12px;\n  letter-spacing: 0px;\n  color: #767676;\n  opacity: 1;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .uno[_ngcontent-%COMP%] {\n  background: #4dbe89;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .dos[_ngcontent-%COMP%] {\n  background: #148a93;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .tres[_ngcontent-%COMP%] {\n  background: #8f5091;\n}\n\n.seccionUno[_ngcontent-%COMP%]   .cuatro[_ngcontent-%COMP%] {\n  background: #dea961;\n}\n\n.Detalle[_ngcontent-%COMP%] {\n  background: #a8d024;\n  box-shadow: 0px 2px 2px #00000027;\n  border-radius: 5px;\n  opacity: 1;\n  font-size: 15px;\n  letter-spacing: 0px;\n  color: #ffffff;\n  opacity: 1;\n  text-align: center;\n}\n\n.Detalle.ver[_ngcontent-%COMP%] {\n  width: 115px;\n  height: 37px;\n}\n\n.Detalle.reporte[_ngcontent-%COMP%] {\n  width: 163px;\n  height: 37px;\n  margin: 30px;\n}\n\n.grafica[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 23px;\n  width: 19px;\n  border-radius: 50%;\n  display: inline-block;\n  align-self: center;\n  margin-right: 10px;\n}\n\n.text-subetapas[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  display: grid;\n  grid-template-columns: repeat(1, auto);\n  grid-template-rows: 18px;\n  font-size: 10px;\n  letter-spacing: 0px;\n  color: #767676;\n  opacity: 1;\n}\n\n.mostrar-subetapas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 60px;\n}\n\n.mostrar-subetapas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 5px;\n}\n\n.button-graph[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  margin-left: 40px;\n  margin-right: 30px;\n}\n\n.button-graph[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2px;\n}\n\n.botones-de-cambio[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 40px;\n}\n\n.updateButton[_ngcontent-%COMP%] {\n  display: none;\n  margin-top: -10px;\n  background-color: #edc903;\n  font-size: 14px;\n  color: #fff;\n}\n\n.updateButton[_ngcontent-%COMP%]:hover {\n  display: block;\n}\n\n.listItems[_ngcontent-%COMP%]:hover    + .updateButton[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-menu-item[_ngcontent-%COMP%] {\n  height: 26px;\n  border-bottom: 1px solid #ededed;\n  line-height: 1px;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  width: 75%;\n  color: #767676;\n}\n\nli[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cbcbcb;\n  padding-bottom: 4px;\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS1ldmFtZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ047O0FBRUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBS0k7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFITjs7QUFNSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUpOOztBQU9NO0VBQ0UsZUFBQTtBQUxSOztBQVdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUkY7O0FBVUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBUko7O0FBVUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFSTjs7QUFXSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBVE47O0FBY0E7RUFDRSxhQUFBO0FBWEY7O0FBY0k7RUFDRSxZQUFBO0FBWk47O0FBYU07RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWFI7O0FBYU07RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWFI7O0FBYU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFYUjs7QUFjSTtFQUNFLFlBQUE7QUFaTjs7QUFhTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFYUjs7QUFjSTtFQUNFLFlBQUE7QUFaTjs7QUFrQkE7RUFDRSxrQkFBQTtBQWZGOztBQW1CRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBaEJKOztBQWtCRTtFQUNFLGFBQUE7QUFoQko7O0FBa0JNO0VBQ0UsWUFBQTtBQWhCUjs7QUFpQlE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZlY7O0FBbUJRO0VBQ0Usa0JBQUE7QUFqQlY7O0FBcUJNO0VBQ0UsZ0JBQUE7QUFuQlI7O0FBb0JRO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFsQlY7O0FBb0JRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0FBbEJWOztBQW9CUTtFQUNFLGFBQUE7QUFsQlY7O0FBb0JRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQWxCVjs7QUFxQk07RUFDRSxhQUFBO0FBbkJSOztBQXNCSTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXBCTjs7QUFzQkk7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXBCTjs7QUF5QkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBdEJGOztBQXdCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBckJGOztBQXdCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBckJGOztBQXlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXRCSjs7QUF5QkU7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdkJKOztBQTBCRTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXhCSjs7QUEyQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUExQko7O0FBNkJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQTNCSjs7QUE2QkU7RUFDRSxtQkFBQTtBQTNCSjs7QUE4QkU7RUFDRSxtQkFBQTtBQTVCSjs7QUErQkU7RUFDRSxtQkFBQTtBQTdCSjs7QUFnQ0U7RUFDRSxtQkFBQTtBQTlCSjs7QUFrQ0E7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUEvQkY7O0FBa0NBO0VBQ0Usa0JBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBL0JGOztBQWtDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBL0JGOztBQWdDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTlCSjs7QUFrQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQS9CRjs7QUFpQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQS9CSjs7QUFtQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWhDSjs7QUFvQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBakNGOztBQWtDRTtFQUNFLGNBQUE7QUFoQ0o7O0FBcUNFO0VBQ0UsY0FBQTtBQWxDSjs7QUFzQ0E7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQW5DRjs7QUFzQ0E7RUFDRSxnQkFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBbkNKOztBQXNDQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW5DRiIsImZpbGUiOiJob21lLWV2YW1lZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1jb250ZW50LmNvbnRlbnQtZXN0YWRpc3RpY2FzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2JjYmNiO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudC5jb250ZW50LWVzdGFkaXN0aWNhcyA+IGRpdiB7XHJcbiAgcGFkZGluZzogMTRweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQuY29udGVudC1lc3RhZGlzdGljYXMgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXByaW5jaXBhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogOTglO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAuYnRuLXByaW1lci1wcm9kdWN0byB7XHJcbiAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLnBsdXMge1xyXG4gICAgICBjb2xvcjogI2E4ZDAyNDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1wbHVzIHtcclxuICAgICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogcmV2ZXJ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmNiY2I7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1wcm9qZWN0IHtcclxuICBtYXJnaW46IDEwcHggMTZweCAxNnB4IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiY2JjYjtcclxuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiByZXZlcnQ7XHJcbn1cclxuXHJcbi5zZWNvbmQtbWF0LXRhYi1ncm91cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAuc3Vic2VjY2lvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaXRlbS1jdXN0b20ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGhlaWdodDogMTQ1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmNiY2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ZmEyMGI7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvciB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmhlYWRlci10YWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAuY29udGFpbmVyLXRhZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuXHJcbiAgICAudGl0bGUtdGFnIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlLXRhZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXRhYi1yZXN1bHRhZG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHdpZHRoOiAyNDVweDtcclxuICAgICAgLmJvdG9uLWNhcmJvbm97XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNjdweDtcclxuICAgICAgfVxyXG4gICAgICAuYm90b24tY2FyYm9uby12ZXJkZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYThkMDI0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4ICMwMDAwMDAyNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJvdG9uZXMtZmluYWxlc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICB3aWR0aDogMjkzcHg7XHJcbiAgICAgIC50ZXh0LWVycm9ye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICB3aWR0aDogMjMxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnNlY2Npb25UcmVzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQ2cHg7XHJcbn1cclxuXHJcbi5ncmFmaWNhcy1odWVsbGEtY2FyYm9ub3tcclxuICAudGl0dWxvLWNhcmJvbm97XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLnNlY2Npb25lc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICB3aWR0aDogMjM5cHg7XHJcbiAgICAgICAgLnRleHRvLWRlc2NyaXBjaW9ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjNweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgICAgIC5mbGVjaGF7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnB1bnRhe1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM0ZGVnKSBza2V3WCgtMTBkZWcpIHNrZXdZKC0xMGRlZyk7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmxle1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRvLWZsZWNoYXtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm90b24tY2FyYm9ub3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdG9uLWNhcmJvbm8tdmVyZGV7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNhOGQwMjQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4ICMwMDAwMDAyNztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5zZWxlY3QtaW1wYWN0by1hbWJpZW50YWwge1xyXG4gIHdpZHRoOiAyMjFweDtcclxuICBoZWlnaHQ6IDM3cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VjY2lvblVubyB7XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWluZm8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMjAxcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWluZm8tc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMXB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdGVyaWFsLWljb25zLm1hdC1pY29uLW5vLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjFweDtcclxuICB9XHJcblxyXG4gIC5idXR0b24taWNvbiB7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnNvbWUtdGV4dCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgYXV0byk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAudW5vIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZGJlODk7XHJcbiAgfVxyXG5cclxuICAuZG9zIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNDhhOTM7XHJcbiAgfVxyXG5cclxuICAudHJlcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGY1MDkxO1xyXG4gIH1cclxuXHJcbiAgLmN1YXRybyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVhOTYxO1xyXG4gIH1cclxufVxyXG5cclxuLkRldGFsbGUge1xyXG4gIGJhY2tncm91bmQ6ICNhOGQwMjQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggIzAwMDAwMDI3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uRGV0YWxsZS52ZXIge1xyXG4gIHdpZHRoOiAxMTVweDtcclxuICBoZWlnaHQ6IDM3cHg7XHJcbn1cclxuXHJcbi5EZXRhbGxlLnJlcG9ydGUge1xyXG4gIHdpZHRoOiAxNjNweDtcclxuICBoZWlnaHQ6IDM3cHg7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG4uZ3JhZmljYSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZG90IHtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbiAgd2lkdGg6IDE5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udGV4dC1zdWJldGFwYXMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBhdXRvKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICM3Njc2NzY7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1vc3RyYXItc3ViZXRhcGFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uLWdyYXBoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cclxuICBtYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgfVxyXG59XHJcbi5ib3RvbmVzLWRlLWNhbWJpbyB7XHJcbiAgbWF0LWJ1dHRvbi10b2dnbGUge1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udXBkYXRlQnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGM5MDM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdEl0ZW1zIHtcclxuICAmOmhvdmVyICsgLnVwZGF0ZUJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDFweDtcclxufVxyXG5cclxuLndlbGNvbWUge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG59XHJcblxyXG5saSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmNiY2I7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG59Il19 */"];
      /***/
    },

    /***/
    "KiQE":
    /*!***************************************************************************************************!*\
      !*** ./src/app/home-evamed/components/choose-type-of-project/choose-type-of-project.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ChooseTypeOfProjectComponent */

    /***/
    function KiQE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseTypeOfProjectComponent", function () {
        return ChooseTypeOfProjectComponent;
      });

      var ChooseTypeOfProjectComponent = /*#__PURE__*/function () {
        function ChooseTypeOfProjectComponent(dialogRef, data) {
          _classCallCheck(this, ChooseTypeOfProjectComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.options = ['Huella de carbono incorporado', 'Uso', 'Ciclo de vida'];
          data.optionSelected = 'Huella de carbono incorporado';
        }

        _createClass(ChooseTypeOfProjectComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChooseTypeOfProjectComponent;
      }();
      /***/

    },

    /***/
    "NBTl":
    /*!***********************************************************!*\
      !*** ./src/app/home-evamed/home-evamed-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: HomeEvamedRoutingModule */

    /***/
    function NBTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeEvamedRoutingModule", function () {
        return HomeEvamedRoutingModule;
      });
      /* harmony import */


      var _components_home_evamed_home_evamed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/home-evamed/home-evamed.component */
      "vXdn");

      var routes = [{
        path: '',
        component: _components_home_evamed_home_evamed_component__WEBPACK_IMPORTED_MODULE_0__["HomeEvamedComponent"]
      }];

      var HomeEvamedRoutingModule = function HomeEvamedRoutingModule() {
        _classCallCheck(this, HomeEvamedRoutingModule);
      };
      /***/

    },

    /***/
    "iNyZ":
    /*!*********************************************************************************************!*\
      !*** ./src/app/home-evamed/components/change-name-project/change-name-project.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ChangeNameProjectComponent */

    /***/
    function iNyZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeNameProjectComponent", function () {
        return ChangeNameProjectComponent;
      });

      var ChangeNameProjectComponent = /*#__PURE__*/function () {
        function ChangeNameProjectComponent(dialogRef, data) {
          _classCallCheck(this, ChangeNameProjectComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ChangeNameProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }]);

        return ChangeNameProjectComponent;
      }();
      /***/

    },

    /***/
    "iZaQ":
    /*!***************************************************!*\
      !*** ./src/app/home-evamed/home-evamed.module.ts ***!
      \***************************************************/

    /*! exports provided: HomeEvamedModule */

    /***/
    function iZaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeEvamedModule", function () {
        return HomeEvamedModule;
      });

      var HomeEvamedModule = function HomeEvamedModule() {
        _classCallCheck(this, HomeEvamedModule);
      };
      /***/

    },

    /***/
    "o9ch":
    /*!***********************************************************************************************!*\
      !*** ./src/app/home-evamed/components/add-new-project/add-new-project.component.ngfactory.js ***!
      \***********************************************************************************************/

    /*! exports provided: RenderType_AddNewProjectComponent, View_AddNewProjectComponent_0, View_AddNewProjectComponent_Host_0, AddNewProjectComponentNgFactory */

    /***/
    function o9ch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AddNewProjectComponent", function () {
        return RenderType_AddNewProjectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddNewProjectComponent_0", function () {
        return View_AddNewProjectComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddNewProjectComponent_Host_0", function () {
        return View_AddNewProjectComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewProjectComponentNgFactory", function () {
        return AddNewProjectComponentNgFactory;
      });
      /* harmony import */


      var _add_new_project_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-new-project.component.scss.shim.ngstyle */
      "7Rl9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/core/index.ngfactory */
      "CeGm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
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


      var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/select/index.ngfactory */
      "Y1Mv");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _add_new_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./add-new-project.component */
      "wsAO");
      /* harmony import */


      var _core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../core/services/catalogs/catalogs.service */
      "w/oM");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AddNewProjectComponent = [_add_new_project_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AddNewProjectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AddNewProjectComponent,
        data: {}
      });

      function View_AddNewProjectComponent_1(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[19, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_use;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddNewProjectComponent_3(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[31, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_type_project;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddNewProjectComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Tipo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 23, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 25, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, [[24, 4], [25, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.data.tipoSeleccionado = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[22, 4], [23, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddNewProjectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_22 = "outline";

          _ck(_v, 5, 0, currVal_22);

          var currVal_45 = _co.data.tipoSeleccionado;

          _ck(_v, 21, 0, currVal_45);

          _ck(_v, 23, 0);

          var currVal_46 = _co.data.catalogoTipo;

          _ck(_v, 30, 0, currVal_46);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "standard";
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "fill";
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "outline";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "legacy";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.errorState;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._canLabelFloat;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldLabelFloat();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasFloatingLabel();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hideControlPlaceholder();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.autofilled;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.focused;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "accent";
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "warn";

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("untouched");

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("touched");

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pristine");

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("dirty");

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("valid");

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("invalid");

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pending");

          var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationsEnabled;

          _ck(_v, 4, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).id;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).tabIndex;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._getAriaLabel();

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._getAriaLabelledby();

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).required.toString();

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled.toString();

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).errorState;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._optionIds : null;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).multiple;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._ariaDescribedby || null;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._getAriaActiveDescendant();

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).errorState;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).required;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).empty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending;

          _ck(_v, 19, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]);
        });
      }

      function View_AddNewProjectComponent_4(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[43, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_country;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddNewProjectComponent_6(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[55, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_housing_scheme;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddNewProjectComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Esquema habitacional "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 46, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 47, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 48, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 49, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 50, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 51, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 52, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 53, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 54, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, [[48, 4], [49, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.data.esqHabitacionalSeleccionado = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 55, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 56, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 57, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[46, 4], [47, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddNewProjectComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_22 = "outline";

          _ck(_v, 5, 0, currVal_22);

          var currVal_45 = _co.data.esqHabitacionalSeleccionado;

          _ck(_v, 21, 0, currVal_45);

          _ck(_v, 23, 0);

          var currVal_46 = _co.data.catalogoEsqHabitacional;

          _ck(_v, 30, 0, currVal_46);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "standard";
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "fill";
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "outline";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).appearance == "legacy";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.errorState;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._canLabelFloat;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldLabelFloat();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hasFloatingLabel();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._hideControlPlaceholder();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.autofilled;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._control.focused;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "accent";
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color == "warn";

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("untouched");

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("touched");

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pristine");

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("dirty");

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("valid");

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("invalid");

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._shouldForward("pending");

          var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationsEnabled;

          _ck(_v, 4, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).id;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).tabIndex;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._getAriaLabel();

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._getAriaLabelledby();

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).required.toString();

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled.toString();

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).errorState;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._optionIds : null;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).multiple;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._ariaDescribedby || null;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._getAriaActiveDescendant();

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).errorState;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).required;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).empty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending;

          _ck(_v, 19, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]);
        });
      }

      function View_AddNewProjectComponent_8(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[67, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_state;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddNewProjectComponent_9(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[79, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_city;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddNewProjectComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 62, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 30, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Estado "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 58, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 59, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 60, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 61, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 62, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 63, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 64, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 65, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 66, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, [[60, 4], [61, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.data.estadoSeleccionado = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("selectionChange" === en) {
            var pd_4 = _co.select(_co.data.estadoSeleccionado) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_CONFIG"]]], null, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 67, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 68, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 69, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[58, 4], [59, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddNewProjectComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 30, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ciudad "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 70, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 71, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 72, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 73, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 74, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 75, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 76, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 77, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 78, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, [[72, 4], [73, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.data.ciudadSeleccionada = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 79, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 80, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 81, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[70, 4], [71, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddNewProjectComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_22 = "outline";

          _ck(_v, 6, 0, currVal_22);

          var currVal_45 = _co.data.estadoSeleccionado;

          _ck(_v, 22, 0, currVal_45);

          _ck(_v, 24, 0);

          var currVal_46 = _co.data.catalogoEstados;

          _ck(_v, 31, 0, currVal_46);

          var currVal_69 = "outline";

          _ck(_v, 37, 0, currVal_69);

          var currVal_92 = _co.data.ciudadSeleccionada;

          _ck(_v, 53, 0, currVal_92);

          _ck(_v, 55, 0);

          var currVal_93 = _co.catalogoCiudades;

          _ck(_v, 62, 0, currVal_93);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "standard";
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "fill";
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "outline";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "legacy";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.errorState;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._canLabelFloat;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldLabelFloat();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._hasFloatingLabel();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._hideControlPlaceholder();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.autofilled;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.focused;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color == "accent";
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color == "warn";

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("untouched");

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("touched");

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("pristine");

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("dirty");

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("valid");

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("invalid");

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("pending");

          var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationsEnabled;

          _ck(_v, 5, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).id;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabIndex;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._getAriaLabel();

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._getAriaLabelledby();

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required.toString();

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled.toString();

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).errorState;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._optionIds : null;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).multiple;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._ariaDescribedby || null;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._getAriaActiveDescendant();

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).errorState;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).empty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending;

          _ck(_v, 20, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]);

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "standard";
          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "fill";
          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "outline";
          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "legacy";

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.errorState;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._canLabelFloat;

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldLabelFloat();

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._hasFloatingLabel();

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._hideControlPlaceholder();

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.disabled;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.autofilled;

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.focused;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).color == "accent";
          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).color == "warn";

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("untouched");

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("touched");

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("pristine");

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("dirty");

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("valid");

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("invalid");

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("pending");

          var currVal_68 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._animationsEnabled;

          _ck(_v, 36, 1, [currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68]);

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).id;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).tabIndex;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._getAriaLabel();

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._getAriaLabelledby();

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).required.toString();

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).disabled.toString();

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).errorState;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._optionIds : null;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).multiple;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._ariaDescribedby || null;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._getAriaActiveDescendant();

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).disabled;

          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).errorState;

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).required;

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).empty;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassUntouched;

          var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassTouched;

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassPristine;

          var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassDirty;

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassValid;

          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassInvalid;

          var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassPending;

          _ck(_v, 51, 1, [currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91]);
        });
      }

      function View_AddNewProjectComponent_10(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[118, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_useful_life;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddNewProjectComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nuevo proyecto "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 204, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 23, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nombre del proyecto "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
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
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 1, 7, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "text"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
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
            var pd_7 = (_co.data.nombre = $event) !== false;
            ad = pd_7 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 33, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 30, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Uso "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
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
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, [[12, 4], [13, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.data.usoSeleccionado = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddNewProjectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddNewProjectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 33, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 30, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Pa\xEDs "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 35, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 37, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, [[36, 4], [37, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.data.paisSeleccionado = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[34, 4], [35, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddNewProjectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddNewProjectComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddNewProjectComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 50, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 24, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Superficie construida(metros cuadrados) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 82, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 83, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 84, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 85, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 86, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 87, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 88, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 89, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 90, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, 1, 8, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Coloca aqu\xED el nombre del proyecto"], ["type", "number"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("input" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122).onChange($event.target.value) !== false;
            ad = pd_5 && ad;
          }

          if ("blur" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122).onTouched() !== false;
            ad = pd_6 && ad;
          }

          if ("focus" === en) {
            var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._focusChanged(true) !== false;
            ad = pd_7 && ad;
          }

          if ("blur" === en) {
            var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._focusChanged(false) !== false;
            ad = pd_8 && ad;
          }

          if ("input" === en) {
            var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._onInput() !== false;
            ad = pd_9 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_10 = (_co.data.superficieConstruida = $event) !== false;
            ad = pd_10 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](122, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          type: [1, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[82, 4], [83, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 24, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Superficie habitable(metros cuadrados) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](135, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 91, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 92, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 93, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 94, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 95, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 96, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 97, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 98, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 99, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, 1, 8, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Coloca aqu\xED el nombre del proyecto"], ["type", "number"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("input" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).onChange($event.target.value) !== false;
            ad = pd_5 && ad;
          }

          if ("blur" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).onTouched() !== false;
            ad = pd_6 && ad;
          }

          if ("focus" === en) {
            var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._focusChanged(true) !== false;
            ad = pd_7 && ad;
          }

          if ("blur" === en) {
            var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._focusChanged(false) !== false;
            ad = pd_8 && ad;
          }

          if ("input" === en) {
            var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._onInput() !== false;
            ad = pd_9 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_10 = (_co.data.superficieHabitable = $event) !== false;
            ad = pd_10 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](146, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](149, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](151, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          type: [1, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[91, 4], [92, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 56, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 24, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No. de niveles "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 100, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 101, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 102, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 103, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 104, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 105, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 106, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 107, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 108, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, 1, 8, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Coloca aqu\xED el nombre del proyecto"], ["type", "number"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("input" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).onChange($event.target.value) !== false;
            ad = pd_5 && ad;
          }

          if ("blur" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).onTouched() !== false;
            ad = pd_6 && ad;
          }

          if ("focus" === en) {
            var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177)._focusChanged(true) !== false;
            ad = pd_7 && ad;
          }

          if ("blur" === en) {
            var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177)._focusChanged(false) !== false;
            ad = pd_8 && ad;
          }

          if ("input" === en) {
            var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177)._onInput() !== false;
            ad = pd_9 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_10 = (_co.data.noNiveles = $event) !== false;
            ad = pd_10 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](172, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](175, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](177, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"],
          type: [1, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[100, 4], [101, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 30, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 1, "div", [["class", "label-general"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Vida \xFAtil "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, null, 27, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 109, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 110, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 111, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 112, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 113, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 114, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 115, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 116, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 117, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](197, 16384, [[111, 4], [112, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](199, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.data.vidaUtilSeleccionado = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](201, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](203, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 118, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 119, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 120, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](207, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[109, 4], [110, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddNewProjectComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](210, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](211, 0, null, null, 5, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](212, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 3, "button", [["class", "yellow-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-label", 0], [1, "type", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 215).dialogRef.close(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 215).dialogResult) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](214, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](215, 606208, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogClose"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], {
          dialogResult: [0, "dialogResult"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Siguiente "]))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 2, 0);

          var currVal_39 = _co.data.nombre;

          _ck(_v, 28, 0, currVal_39);

          var currVal_40 = "text";

          _ck(_v, 30, 0, currVal_40);

          var currVal_63 = "outline";

          _ck(_v, 39, 0, currVal_63);

          var currVal_86 = _co.data.usoSeleccionado;

          _ck(_v, 55, 0, currVal_86);

          _ck(_v, 57, 0);

          var currVal_87 = _co.data.catalogoUsos;

          _ck(_v, 64, 0, currVal_87);

          var currVal_88 = _co.data.usoSeleccionado === 1;

          _ck(_v, 66, 0, currVal_88);

          var currVal_111 = "outline";

          _ck(_v, 73, 0, currVal_111);

          var currVal_134 = _co.data.paisSeleccionado;

          _ck(_v, 89, 0, currVal_134);

          _ck(_v, 91, 0);

          var currVal_135 = _co.data.catalogoPaises;

          _ck(_v, 98, 0, currVal_135);

          var currVal_136 = _co.data.tipoSeleccionado === 5;

          _ck(_v, 100, 0, currVal_136);

          var currVal_137 = _co.data.paisSeleccionado === 1;

          _ck(_v, 102, 0, currVal_137);

          var currVal_176 = _co.data.superficieConstruida;

          _ck(_v, 124, 0, currVal_176);

          var currVal_177 = "Coloca aqu\xED el nombre del proyecto";
          var currVal_178 = "number";

          _ck(_v, 126, 0, currVal_177, currVal_178);

          var currVal_217 = _co.data.superficieHabitable;

          _ck(_v, 149, 0, currVal_217);

          var currVal_218 = "Coloca aqu\xED el nombre del proyecto";
          var currVal_219 = "number";

          _ck(_v, 151, 0, currVal_218, currVal_219);

          var currVal_258 = _co.data.noNiveles;

          _ck(_v, 175, 0, currVal_258);

          var currVal_259 = "Coloca aqu\xED el nombre del proyecto";
          var currVal_260 = "number";

          _ck(_v, 177, 0, currVal_259, currVal_260);

          var currVal_283 = "outline";

          _ck(_v, 185, 0, currVal_283);

          var currVal_306 = _co.data.vidaUtilSeleccionado;

          _ck(_v, 201, 0, currVal_306);

          _ck(_v, 203, 0);

          var currVal_307 = _co.data.catalogoVidaUtil;

          _ck(_v, 210, 0, currVal_307);

          var currVal_312 = _co.data;

          _ck(_v, 215, 0, currVal_312);
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

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._isServer;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).placeholder;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._isNativeSelect || null;
          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._ariaDescribedby || null;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).errorState;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).required.toString();

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending;

          _ck(_v, 25, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38]);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).appearance == "standard";
          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).appearance == "fill";
          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).appearance == "outline";
          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).appearance == "legacy";

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._control.errorState;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._canLabelFloat;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldLabelFloat();

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._hasFloatingLabel();

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._hideControlPlaceholder();

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._control.disabled;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._control.autofilled;

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._control.focused;

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).color == "accent";
          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).color == "warn";

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldForward("untouched");

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldForward("touched");

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldForward("pristine");

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldForward("dirty");

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldForward("valid");

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldForward("invalid");

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._shouldForward("pending");

          var currVal_62 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._animationsEnabled;

          _ck(_v, 38, 1, [currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62]);

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).id;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).tabIndex;

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._getAriaLabel();

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._getAriaLabelledby();

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).required.toString();

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).disabled.toString();

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).errorState;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._optionIds : null;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).multiple;

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._ariaDescribedby || null;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._getAriaActiveDescendant();

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).disabled;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).errorState;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).required;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).empty;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassUntouched;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassTouched;

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPristine;

          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassDirty;

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassValid;

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassInvalid;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPending;

          _ck(_v, 53, 1, [currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85]);

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).appearance == "standard";
          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).appearance == "fill";
          var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).appearance == "outline";
          var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).appearance == "legacy";

          var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._control.errorState;

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._canLabelFloat;

          var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldLabelFloat();

          var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._hasFloatingLabel();

          var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._hideControlPlaceholder();

          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._control.disabled;

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._control.autofilled;

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._control.focused;

          var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).color == "accent";
          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).color == "warn";

          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldForward("untouched");

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldForward("touched");

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldForward("pristine");

          var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldForward("dirty");

          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldForward("valid");

          var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldForward("invalid");

          var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._shouldForward("pending");

          var currVal_110 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73)._animationsEnabled;

          _ck(_v, 72, 1, [currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110]);

          var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).id;

          var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).tabIndex;

          var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._getAriaLabel();

          var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._getAriaLabelledby();

          var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).required.toString();

          var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).disabled.toString();

          var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).errorState;

          var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._optionIds : null;

          var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).multiple;

          var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._ariaDescribedby || null;

          var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91)._getAriaActiveDescendant();

          var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).disabled;

          var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).errorState;

          var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).required;

          var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).empty;

          var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassUntouched;

          var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassTouched;

          var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassPristine;

          var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassDirty;

          var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassValid;

          var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassInvalid;

          var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 95).ngClassPending;

          _ck(_v, 87, 1, [currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133]);

          var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).appearance == "standard";
          var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).appearance == "fill";
          var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).appearance == "outline";
          var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).appearance == "legacy";

          var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._control.errorState;

          var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._canLabelFloat;

          var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldLabelFloat();

          var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._hasFloatingLabel();

          var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._hideControlPlaceholder();

          var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._control.disabled;

          var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._control.autofilled;

          var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._control.focused;

          var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).color == "accent";
          var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).color == "warn";

          var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldForward("untouched");

          var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldForward("touched");

          var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldForward("pristine");

          var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldForward("dirty");

          var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldForward("valid");

          var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldForward("invalid");

          var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._shouldForward("pending");

          var currVal_159 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110)._animationsEnabled;

          _ck(_v, 108, 1, [currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158, currVal_159]);

          var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._isServer;

          var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).id;

          var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).placeholder;

          var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).disabled;

          var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).required;

          var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._isNativeSelect || null;
          var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126)._ariaDescribedby || null;

          var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).errorState;

          var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).required.toString();

          var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassUntouched;

          var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassTouched;

          var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassPristine;

          var currVal_172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassDirty;

          var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassValid;

          var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassInvalid;

          var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassPending;

          _ck(_v, 120, 1, [currVal_160, currVal_161, currVal_162, currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171, currVal_172, currVal_173, currVal_174, currVal_175]);

          var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).appearance == "standard";
          var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).appearance == "fill";
          var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).appearance == "outline";
          var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).appearance == "legacy";

          var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._control.errorState;

          var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._canLabelFloat;

          var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldLabelFloat();

          var currVal_186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._hasFloatingLabel();

          var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._hideControlPlaceholder();

          var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._control.disabled;

          var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._control.autofilled;

          var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._control.focused;

          var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).color == "accent";
          var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).color == "warn";

          var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldForward("untouched");

          var currVal_194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldForward("touched");

          var currVal_195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldForward("pristine");

          var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldForward("dirty");

          var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldForward("valid");

          var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldForward("invalid");

          var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._shouldForward("pending");

          var currVal_200 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135)._animationsEnabled;

          _ck(_v, 133, 1, [currVal_179, currVal_180, currVal_181, currVal_182, currVal_183, currVal_184, currVal_185, currVal_186, currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195, currVal_196, currVal_197, currVal_198, currVal_199, currVal_200]);

          var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._isServer;

          var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).id;

          var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).placeholder;

          var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).disabled;

          var currVal_205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).required;

          var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._isNativeSelect || null;
          var currVal_207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._ariaDescribedby || null;

          var currVal_208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).errorState;

          var currVal_209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).required.toString();

          var currVal_210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassUntouched;

          var currVal_211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassTouched;

          var currVal_212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassPristine;

          var currVal_213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassDirty;

          var currVal_214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassValid;

          var currVal_215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassInvalid;

          var currVal_216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassPending;

          _ck(_v, 145, 1, [currVal_201, currVal_202, currVal_203, currVal_204, currVal_205, currVal_206, currVal_207, currVal_208, currVal_209, currVal_210, currVal_211, currVal_212, currVal_213, currVal_214, currVal_215, currVal_216]);

          var currVal_220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).appearance == "standard";
          var currVal_221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).appearance == "fill";
          var currVal_222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).appearance == "outline";
          var currVal_223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).appearance == "legacy";

          var currVal_224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._control.errorState;

          var currVal_225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._canLabelFloat;

          var currVal_226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldLabelFloat();

          var currVal_227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._hasFloatingLabel();

          var currVal_228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._hideControlPlaceholder();

          var currVal_229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._control.disabled;

          var currVal_230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._control.autofilled;

          var currVal_231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._control.focused;

          var currVal_232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).color == "accent";
          var currVal_233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161).color == "warn";

          var currVal_234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldForward("untouched");

          var currVal_235 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldForward("touched");

          var currVal_236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldForward("pristine");

          var currVal_237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldForward("dirty");

          var currVal_238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldForward("valid");

          var currVal_239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldForward("invalid");

          var currVal_240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._shouldForward("pending");

          var currVal_241 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._animationsEnabled;

          _ck(_v, 159, 1, [currVal_220, currVal_221, currVal_222, currVal_223, currVal_224, currVal_225, currVal_226, currVal_227, currVal_228, currVal_229, currVal_230, currVal_231, currVal_232, currVal_233, currVal_234, currVal_235, currVal_236, currVal_237, currVal_238, currVal_239, currVal_240, currVal_241]);

          var currVal_242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177)._isServer;

          var currVal_243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).id;

          var currVal_244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).placeholder;

          var currVal_245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).disabled;

          var currVal_246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).required;

          var currVal_247 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177)._isNativeSelect || null;
          var currVal_248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177)._ariaDescribedby || null;

          var currVal_249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).errorState;

          var currVal_250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).required.toString();

          var currVal_251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ngClassUntouched;

          var currVal_252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ngClassTouched;

          var currVal_253 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ngClassPristine;

          var currVal_254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ngClassDirty;

          var currVal_255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ngClassValid;

          var currVal_256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ngClassInvalid;

          var currVal_257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).ngClassPending;

          _ck(_v, 171, 1, [currVal_242, currVal_243, currVal_244, currVal_245, currVal_246, currVal_247, currVal_248, currVal_249, currVal_250, currVal_251, currVal_252, currVal_253, currVal_254, currVal_255, currVal_256, currVal_257]);

          var currVal_261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).appearance == "standard";
          var currVal_262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).appearance == "fill";
          var currVal_263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).appearance == "outline";
          var currVal_264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).appearance == "legacy";

          var currVal_265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._control.errorState;

          var currVal_266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._canLabelFloat;

          var currVal_267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldLabelFloat();

          var currVal_268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._hasFloatingLabel();

          var currVal_269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._hideControlPlaceholder();

          var currVal_270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._control.disabled;

          var currVal_271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._control.autofilled;

          var currVal_272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._control.focused;

          var currVal_273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).color == "accent";
          var currVal_274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).color == "warn";

          var currVal_275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldForward("untouched");

          var currVal_276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldForward("touched");

          var currVal_277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldForward("pristine");

          var currVal_278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldForward("dirty");

          var currVal_279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldForward("valid");

          var currVal_280 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldForward("invalid");

          var currVal_281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._shouldForward("pending");

          var currVal_282 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._animationsEnabled;

          _ck(_v, 184, 1, [currVal_261, currVal_262, currVal_263, currVal_264, currVal_265, currVal_266, currVal_267, currVal_268, currVal_269, currVal_270, currVal_271, currVal_272, currVal_273, currVal_274, currVal_275, currVal_276, currVal_277, currVal_278, currVal_279, currVal_280, currVal_281, currVal_282]);

          var currVal_284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).id;

          var currVal_285 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).tabIndex;

          var currVal_286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._getAriaLabel();

          var currVal_287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._getAriaLabelledby();

          var currVal_288 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).required.toString();

          var currVal_289 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).disabled.toString();

          var currVal_290 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).errorState;

          var currVal_291 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._optionIds : null;

          var currVal_292 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).multiple;

          var currVal_293 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._ariaDescribedby || null;

          var currVal_294 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203)._getAriaActiveDescendant();

          var currVal_295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).disabled;

          var currVal_296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).errorState;

          var currVal_297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).required;

          var currVal_298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 203).empty;

          var currVal_299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).ngClassUntouched;

          var currVal_300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).ngClassTouched;

          var currVal_301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).ngClassPristine;

          var currVal_302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).ngClassDirty;

          var currVal_303 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).ngClassValid;

          var currVal_304 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).ngClassInvalid;

          var currVal_305 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).ngClassPending;

          _ck(_v, 199, 1, [currVal_284, currVal_285, currVal_286, currVal_287, currVal_288, currVal_289, currVal_290, currVal_291, currVal_292, currVal_293, currVal_294, currVal_295, currVal_296, currVal_297, currVal_298, currVal_299, currVal_300, currVal_301, currVal_302, currVal_303, currVal_304, currVal_305]);

          var currVal_308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).disabled || null;
          var currVal_309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214)._animationMode === "NoopAnimations";
          var currVal_310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 215).ariaLabel || null;

          var currVal_311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 215).type;

          _ck(_v, 213, 0, currVal_308, currVal_309, currVal_310, currVal_311);
        });
      }

      function View_AddNewProjectComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-new-project", [], null, null, null, View_AddNewProjectComponent_0, RenderType_AddNewProjectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_new_project_component__WEBPACK_IMPORTED_MODULE_20__["AddNewProjectComponent"], [_core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_21__["CatalogsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AddNewProjectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-new-project", _add_new_project_component__WEBPACK_IMPORTED_MODULE_20__["AddNewProjectComponent"], View_AddNewProjectComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "oP85":
    /*!*************************************************************!*\
      !*** ./src/app/home-evamed/home-evamed.module.ngfactory.js ***!
      \*************************************************************/

    /*! exports provided: HomeEvamedModuleNgFactory */

    /***/
    function oP85(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeEvamedModuleNgFactory", function () {
        return HomeEvamedModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _home_evamed_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-evamed.module */
      "iZaQ");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
      "9cE2");
      /* harmony import */


      var _components_home_evamed_home_evamed_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/home-evamed/home-evamed.component.ngfactory */
      "x0fT");
      /* harmony import */


      var _components_add_new_project_add_new_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/add-new-project/add-new-project.component.ngfactory */
      "o9ch");
      /* harmony import */


      var _components_choose_type_of_project_choose_type_of_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/choose-type-of-project/choose-type-of-project.component.ngfactory */
      "4+yq");
      /* harmony import */


      var _components_change_name_project_change_name_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/change-name-project/change-name-project.component.ngfactory */
      "+a0g");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "HeVh");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "q59W");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      "GF+f");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _home_evamed_routing_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./home-evamed-routing.module */
      "NBTl");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _components_home_evamed_home_evamed_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./components/home-evamed/home-evamed.component */
      "vXdn");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var HomeEvamedModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_home_evamed_module__WEBPACK_IMPORTED_MODULE_1__["HomeEvamedModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _components_home_evamed_home_evamed_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeEvamedComponentNgFactory"], _components_add_new_project_add_new_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AddNewProjectComponentNgFactory"], _components_choose_type_of_project_choose_type_of_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ChooseTypeOfProjectComponentNgFactory"], _components_change_name_project_change_name_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ChangeNameProjectComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_37__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_37__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _material_material_module__WEBPACK_IMPORTED_MODULE_45__["MaterialModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_45__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _home_evamed_routing_module__WEBPACK_IMPORTED_MODULE_47__["HomeEvamedRoutingModule"], _home_evamed_routing_module__WEBPACK_IMPORTED_MODULE_47__["HomeEvamedRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_49__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_49__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _home_evamed_module__WEBPACK_IMPORTED_MODULE_1__["HomeEvamedModule"], _home_evamed_module__WEBPACK_IMPORTED_MODULE_1__["HomeEvamedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], function () {
          return [[{
            path: "",
            component: _components_home_evamed_home_evamed_component__WEBPACK_IMPORTED_MODULE_50__["HomeEvamedComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "ruHE":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/home-evamed/components/choose-type-of-project/choose-type-of-project.component.scss.shim.ngstyle.js ***!
      \*********************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function ruHE(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["@charset \"UTF-8\";\n.title-standard-second-light[_ngcontent-%COMP%] {\n  width: 100% !important;\n  text-align: left;\n  margin-bottom: 50px;\n}\n.mat-dialog-content.dialog-content[_ngcontent-%COMP%] {\n  margin-top: -24px;\n  display: block !important;\n  text-align: center !important;\n}\nh3.title-common[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n}\nmat-radio-group.mat-radio-group.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #A8D024;\n  font-size: 22px;\n  color: #fff;\n  margin-right: -24px;\n  margin-left: -24px;\n}\nmat-radio-button[_ngcontent-%COMP%] {\n  padding: 14px !important;\n}\n.mat-radio-checked[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  color: #EDC903;\n}\n.text-description[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: 15%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  text-align: left;\n  font-size: 14px;\n  line-height: 16px;\n  color: #767676;\n}\n\n.mdl-card[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 0;\n  margin: 10px auto;\n}\n.mdl-card__supporting-text[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%] {\n  width: 25%;\n  \n}\n\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-top: -26px !important;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n  padding: 24px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:active {\n  border-radius: 15%/75%;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:first-child   .mdl-stepper-bar-left[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:last-child   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  display: none;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-circle[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto;\n  background-color: #9E9E9E;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 2em;\n  font-size: 12px;\n  color: white;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-circle-noSelected[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto;\n  background-color: #9E9E9E;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 2em;\n  font-size: 12px;\n  color: white;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-title[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: normal;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-title[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-optional[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #000;\n  width: 140px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-optional[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-left[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  height: 1px;\n  border-top: 1px solid #BDBDBD;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: 50%;\n  margin-left: 35px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-left[_ngcontent-%COMP%] {\n  left: 0;\n  right: 50%;\n  margin-right: 35px;\n}\n\ndiv.step-one-selected[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background: url('Produccion.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\ndiv.step-one-selected[_ngcontent-%COMP%]   div.mdl-stepper-circle-noSelected[_ngcontent-%COMP%] {\n  background: url('Produccion_.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\ndiv.step-two[_ngcontent-%COMP%]   div.mdl-stepper-circle-noSelected[_ngcontent-%COMP%] {\n  background-color: #CBCBCB !important;\n  background: url('Construcci\xF3n_.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\ndiv.step-two[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #CBCBCB !important;\n  background: url('Construcci\xF3n.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\ndiv.step-three[_ngcontent-%COMP%]   div.mdl-stepper-circle-noSelected[_ngcontent-%COMP%] {\n  background-color: #CBCBCB !important;\n  background: url('Uso_.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\ndiv.step-three[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #CBCBCB !important;\n  background: url('Uso.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\ndiv.step-four[_ngcontent-%COMP%]   div.mdl-stepper-circle-noSelected[_ngcontent-%COMP%] {\n  background-color: #CBCBCB !important;\n  background: url('fin.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\ndiv.step-four[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #CBCBCB !important;\n  background: url('Fin_.png') no-repeat 50% 50%;\n  width: 70px !important;\n  height: 70px !important;\n}\n\ntable.table-container[_ngcontent-%COMP%] {\n  width: 160px;\n}\ntd.td-title[_ngcontent-%COMP%] {\n  display: block;\n}\ntd.td-text[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-left: 2px !important;\n  line-height: initial;\n}\n.title-type-project[_ngcontent-%COMP%] {\n  color: #767676 !important;\n}\n.title-type-project-selected[_ngcontent-%COMP%] {\n  color: #EDC903 !important;\n}\n.text-type-project-selected[_ngcontent-%COMP%] {\n  color: #343434 !important;\n}\n.text-type-project[_ngcontent-%COMP%] {\n  color: #767676 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hvb3NlLXR5cGUtb2YtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSx3QkFBQTtBQUVGO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQ0EsK0JBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFHQSx3Q0FBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQURGO0FBSUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGO0FBSUE7RUFDRSxzQkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUFERjtBQUlBOztFQUVFLGFBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7O0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBREY7QUFJQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUEsbUJBQUE7QUFDQTtFQUNFLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURGO0FBSUE7RUFDRSxvREFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUtBO0VBQ0Usb0NBQUE7RUFDQSxzREFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0Usb0NBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0Usb0NBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0Usb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0Usb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQU1BO0VBQ0Usb0NBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFIRjtBQU9BLGtCQUFBO0FBQ0E7RUFDRSxZQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7QUFKRjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0FBSkYiLCJmaWxlIjoiY2hvb3NlLXR5cGUtb2YtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50aXRsZS1zdGFuZGFyZC1zZWNvbmQtbGlnaHQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50LmRpYWxvZy1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5oMy50aXRsZS1jb21tb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbm1hdC1yYWRpby1ncm91cC5tYXQtcmFkaW8tZ3JvdXAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQThEMDI0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xuICBtYXJnaW4tbGVmdDogLTI0cHg7XG59XG5cbm1hdC1yYWRpby1idXR0b24ge1xuICBwYWRkaW5nOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcmFkaW8tY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGNvbG9yOiAjRURDOTAzO1xufVxuXG4udGV4dC1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjNzY3Njc2O1xufVxuXG4vKiBTaW1wbGUgc2V0dXAgZm9yIHRoaXMgZGVtbyAqL1xuLm1kbC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4ubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCB7XG4gIHdpZHRoOiAyNSU7XG4gIC8qIDEwMCAvIG5vX29mX3N0ZXBzICovXG59XG5cbi8qIEJlZ2luIGFjdHVhbCBtZGwtc3RlcHBlciBjc3Mgc3R5bGVzICovXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTI2cHggIWltcG9ydGFudDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JS83NSU7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmZpcnN0LWNoaWxkOmFjdGl2ZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmxhc3QtY2hpbGQ6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcDpmaXJzdC1jaGlsZCAubWRsLXN0ZXBwZXItYmFyLWxlZnQsXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcDpsYXN0LWNoaWxkIC5tZGwtc3RlcHBlci1iYXItcmlnaHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItY2lyY2xlIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM5RTlFOUU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLWNpcmNsZS1ub1NlbGVjdGVkIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM5RTlFOUU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwIC5tZGwtc3RlcHBlci10aXRsZSxcbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwIC5tZGwtc3RlcHBlci1vcHRpb25hbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLW9wdGlvbmFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItYmFyLWxlZnQsXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItYmFyLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0JEQkRCRDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLWJhci1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItYmFyLWxlZnQge1xuICBsZWZ0OiAwO1xuICByaWdodDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG5cbi8qKkN1c3RvbSBzdGVwcGVyKiovXG5kaXYuc3RlcC1vbmUtc2VsZWN0ZWQgZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FdGFwYXMvUHJvZHVjY2lvbi5wbmdcIikgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xufVxuXG5kaXYuc3RlcC1vbmUtc2VsZWN0ZWQgZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZS1ub1NlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0V0YXBhcy9Qcm9kdWNjaW9uXy5wbmdcIikgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xufVxuXG5kaXYuc3RlcC10d28gZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZS1ub1NlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCQ0JDQiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXRhcGFzL0NvbnN0cnVjY2nDs25fLnBuZ1wiKSBuby1yZXBlYXQgNTAlIDUwJTtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5zdGVwLXR3byBkaXYubWRsLXN0ZXBwZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCQ0JDQiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXRhcGFzL0NvbnN0cnVjY2nDs24ucG5nXCIpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbn1cblxuZGl2LnN0ZXAtdGhyZWUgZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZS1ub1NlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCQ0JDQiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXRhcGFzL1Vzb18ucG5nXCIpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbn1cblxuZGl2LnN0ZXAtdGhyZWUgZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQkNCQ0IgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0V0YXBhcy9Vc28ucG5nXCIpIG5vLXJlcGVhdCA1MCUgNTAlO1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbn1cblxuZGl2LnN0ZXAtZm91ciBkaXYubWRsLXN0ZXBwZXItY2lyY2xlLW5vU2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0JDQkNCICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FdGFwYXMvZmluLnBuZ1wiKSBuby1yZXBlYXQgNTAlIDUwJTtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5zdGVwLWZvdXIgZGl2Lm1kbC1zdGVwcGVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQkNCQ0IgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0V0YXBhcy9GaW5fLnBuZ1wiKSBuby1yZXBlYXQgNTAlIDUwJTtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qKkNvbnRlbnQgVGFibGUqKi9cbnRhYmxlLnRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxudGQudGQtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudGQudGQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4udGl0bGUtdHlwZS1wcm9qZWN0IHtcbiAgY29sb3I6ICM3Njc2NzYgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLXR5cGUtcHJvamVjdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjRURDOTAzICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXR5cGUtcHJvamVjdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMzQzNDM0ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXR5cGUtcHJvamVjdCB7XG4gIGNvbG9yOiAjNzY3Njc2ICFpbXBvcnRhbnQ7XG59Il19 */"];
      /***/
    },

    /***/
    "vXdn":
    /*!*****************************************************************************!*\
      !*** ./src/app/home-evamed/components/home-evamed/home-evamed.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: HomeEvamedComponent */

    /***/
    function vXdn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeEvamedComponent", function () {
        return HomeEvamedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-new-project/add-new-project.component */
      "wsAO");
      /* harmony import */


      var _choose_type_of_project_choose_type_of_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../choose-type-of-project/choose-type-of-project.component */
      "KiQE");
      /* harmony import */


      var _change_name_project_change_name_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../change-name-project/change-name-project.component */
      "iNyZ");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! chartjs-plugin-datalabels */
      "qb46");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__);

      var HomeEvamedComponent = /*#__PURE__*/function () {
        function HomeEvamedComponent(auth, router, dialog, analisis, materials, calculos, projectsService, catalogsService, projects, constructionStageService, users, endLifeService, electricitConsumptionService) {
          var _this = this;

          _classCallCheck(this, HomeEvamedComponent);

          this.auth = auth;
          this.router = router;
          this.dialog = dialog;
          this.analisis = analisis;
          this.materials = materials;
          this.calculos = calculos;
          this.projectsService = projectsService;
          this.catalogsService = catalogsService;
          this.projects = projects;
          this.constructionStageService = constructionStageService;
          this.users = users;
          this.endLifeService = endLifeService;
          this.electricitConsumptionService = electricitConsumptionService;
          this.projectsList = 0;
          this.tempProjectsList = 0;
          this.catologoOpcionesCarbono = ['Promedio del sector vivienda', 'Vivienda sustentable'];
          this.cargaDatosCalculo = false; //---

          this.auxDatosGraficaUso = [];
          this.doughnutChartType = 'doughnut';
          this.pieChartOptions = {
            responsive: false,
            maintainAspectRatio: false,
            layout: {
              padding: 0
            },
            events: ['click'],
            elements: {
              arc: {
                borderWidth: 0
              }
            },
            tooltips: {
              enabled: false
            },
            hover: {
              mode: null
            },
            plugins: {
              datalabels: {
                color: '#FFFFFF',
                font: {
                  size: 8
                }
              }
            }
          };
          this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_4__];
          this.barChartOptions = {
            responsive: true,
            title: {
              display: true
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: false,
              mode: 'label'
            },
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true,
                  fontSize: 11
                }
              }],
              xAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true,
                  fontSize: 11
                }
              }]
            },
            plugins: {
              datalabels: {
                color: 'white',
                anchor: 'center',
                align: 'center',
                font: {
                  size: 7
                }
              }
            }
          };
          this.barChartHorizontalOptions = {
            responsive: true,
            title: {
              display: false,
              text: 'KgCO2 / m2a por año',
              position: 'bottom'
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: false,
              mode: 'label'
            },
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  fontSize: 11
                }
              }],
              xAxes: [{
                display: false
              }]
            },
            plugins: {
              indexAxis: 'y',
              datalabels: {
                display: false
              }
            }
          };
          this.barChartType = 'bar';
          this.barChartHorizonatlType = 'horizontalBar';
          this.barChartLegend = true;
          this.pieChartType = 'pie';
          this.pieChartOptions_elementos = {
            elements: {
              arc: {
                borderWidth: 0
              }
            },
            tooltips: {
              enabled: false
            },
            hover: {
              mode: null
            },
            plugins: {
              datalabels: false
            }
          };
          this.catalogsService.usesCatalog().subscribe(function (data) {
            _this.catalogoUsos = data;
            _this.filtroCatalogoUsos = data;

            _this.filtroCatalogoUsos.push({
              id: 0,
              name_use: 'Todos'
            });
          });
          this.catalogsService.countriesCatalog().subscribe(function (data) {
            _this.catalogoPaises = [];
            data.map(function (item) {
              if (item.id === 1) {
                _this.catalogoPaises.push(item);
              }
            });
          });
          this.catalogsService.typeProjectCatalog().subscribe(function (data) {
            _this.catalogoTipo = data;
          });
          this.catalogsService.usefulLifeCatalog().subscribe(function (data) {
            _this.catalogoVidaUtil = data;
          });
          this.catalogsService.housingSchemeCatalog().subscribe(function (data) {
            _this.catalogoEsqHabitacional = data;
          });
          this.catalogsService.getPotentialTypes().subscribe(function (data) {
            _this.catologoImpactoAmbiental = _this.calculos.FiltradoDeImpactos(data);
          });
          this.catalogsService.getSections().subscribe(function (sections) {
            _this.sections = sections;
          });
          this.projectsService.getMaterialSchemeProyect().subscribe(function (dataMaterial) {
            _this.dataMaterial = dataMaterial;
          });
          this.users.searchUser(localStorage.getItem('email-login')).subscribe(function (data) {
            _this.user = data[0].name;
            _this.sector = data[0].institution;
            _this.email = data[0].email;
            localStorage.setItem('email-id', data[0].id);
            _this.projectsList = [];
            _this.cargaDatosCalculo = false;

            _this.projects.getProjects().subscribe(function (data) {
              data.map(function (item) {
                if (item.user_platform_id === parseInt(localStorage.getItem('email-id'), 10)) {
                  _this.auxDatosGraficaUso.push(_this.DataPieUso(_this.serchUseData(item.id)));

                  _this.projectsList.push(item);
                }

                _this.countProjectList = _this.projectsList.length;
              });

              _this.projectsList.reverse();

              _this.auxDatosGraficaUso.reverse();

              _this.tempProjectsList = _this.projectsList;
            });
          });
          this.catalogsService.getStates().subscribe(function (data) {
            _this.catalogoEstados = data;
          });
          this.constructionStageService.getConstructiveSystemElement().subscribe(function (data) {
            var CSE = [];
            data.map(function (item) {
              CSE.push(item);
            });
            _this.ConstructiveSystemElements = CSE;
          });
          this.endLifeService.getECDP().subscribe(function (data) {
            var ELSR = [];
            data.map(function (item) {
              ELSR.push(item);
            });
            console.log('obteniendo datos de fin de vida');
            console.log(ELSR);
            _this.ListDataEndLife = ELSR;
          });
          this.catalogsService.getSourceInformation().subscribe(function (sourceInformation) {
            _this.sourceInformation = sourceInformation;
          });
          this.electricitConsumptionService.getACR().subscribe(function (data) {
            var ACR = [];
            data.map(function (item) {
              ACR.push(item);
            });
            _this.ACR = ACR;
          });
          this.electricitConsumptionService.getECD().subscribe(function (data) {
            var ECD = [];
            data.map(function (item) {
              ECD.push(item);
            });
            _this.ECD = ECD;
          });
          this.endLifeService.getECDP().subscribe(function (data) {
            _this.ECDP = data;
          });
        }

        _createClass(HomeEvamedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var listaBD, auxBD, auxbases;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.analisis.getTypeEnergy().toPromise();

                    case 2:
                      _context.t0 = _context.sent;
                      _context.next = 5;
                      return this.projectsService.getProjects().toPromise();

                    case 5:
                      _context.t1 = _context.sent;
                      _context.next = 8;
                      return this.materials.getMaterials().toPromise();

                    case 8:
                      _context.t2 = _context.sent;
                      _context.next = 11;
                      return this.analisis.getMaterialSchemeData().toPromise();

                    case 11:
                      _context.t3 = _context.sent;
                      _context.next = 14;
                      return this.analisis.getMaterialSchemeProyect().toPromise();

                    case 14:
                      _context.t4 = _context.sent;
                      _context.next = 17;
                      return this.analisis.getPotentialTypes().toPromise();

                    case 17:
                      _context.t5 = _context.sent;
                      _context.next = 20;
                      return this.analisis.getStandars().toPromise();

                    case 20:
                      _context.t6 = _context.sent;
                      _context.next = 23;
                      return this.analisis.getConstructiveSystemElement().toPromise();

                    case 23:
                      _context.t7 = _context.sent;
                      _context.next = 26;
                      return this.analisis.getSourceInformationData().toPromise();

                    case 26:
                      _context.t8 = _context.sent;
                      _context.next = 29;
                      return this.analisis.getSourceInformation().toPromise();

                    case 29:
                      _context.t9 = _context.sent;
                      _context.next = 32;
                      return this.analisis.getAnnualConsumptionRequired().toPromise();

                    case 32:
                      _context.t10 = _context.sent;
                      _context.next = 35;
                      return this.analisis.getElectricityConsumptionData().toPromise();

                    case 35:
                      _context.t11 = _context.sent;
                      _context.next = 38;
                      return this.analisis.getTypeEnergyData().toPromise();

                    case 38:
                      _context.t12 = _context.sent;
                      _context.next = 41;
                      return this.analisis.getUsefulLife().toPromise();

                    case 41:
                      _context.t13 = _context.sent;
                      _context.next = 44;
                      return this.analisis.getECDP().toPromise();

                    case 44:
                      _context.t14 = _context.sent;
                      _context.next = 47;
                      return this.analisis.getSectionsList().toPromise();

                    case 47:
                      _context.t15 = _context.sent;
                      _context.next = 50;
                      return this.analisis.getPotentialTransport().toPromise();

                    case 50:
                      _context.t16 = _context.sent;
                      _context.next = 53;
                      return this.analisis.getConversion().toPromise();

                    case 53:
                      _context.t17 = _context.sent;
                      this.DatosCalculos = {
                        TEList: _context.t0,
                        projectsList: _context.t1,
                        materialList: _context.t2,
                        materialSchemeDataList: _context.t3,
                        materialSchemeProyectList: _context.t4,
                        potentialTypesList: _context.t5,
                        standarsList: _context.t6,
                        CSEList: _context.t7,
                        SIDList: _context.t8,
                        SIList: _context.t9,
                        ACRList: _context.t10,
                        ECDList: _context.t11,
                        TEDList: _context.t12,
                        ULList: _context.t13,
                        ECDPList: _context.t14,
                        sectionList: _context.t15,
                        PTList: _context.t16,
                        conversionList: _context.t17
                      };
                      _context.next = 57;
                      return this.analisis.getDB().toPromise();

                    case 57:
                      listaBD = _context.sent;
                      auxBD = [];
                      auxbases = {};
                      listaBD.forEach(function (element) {
                        auxBD.push(element['name']);
                        auxbases[element['name']] = false;
                      });
                      this.auxDataProjectList = [];
                      this.projectsList.forEach(function (element, n) {
                        var calculosOperacionesDeFase = null;

                        var auxCalculos = _this2.calculos.OperacionesDeFase(element.id, _this2.DatosCalculos, auxbases);

                        calculosOperacionesDeFase = auxCalculos[0];
                        var auxDatos = {
                          id: element.id,
                          datos: calculosOperacionesDeFase,
                          etapasIgnoradas: [],
                          porcentaje: _this2.calculos.ValoresProcentaje(calculosOperacionesDeFase, []),
                          porcentajeSubepata: _this2.calculos.ValoresProcentajeSubeapa(calculosOperacionesDeFase, []),
                          banderaEtapa: false,
                          etapaSeleccionada: 'Ninguna',
                          subetasMostrada: [{
                            abreviacion: 'nada',
                            color: '#FFFFFF'
                          }],
                          impactoCompleteSelect: _this2.catologoImpactoAmbiental[0]['name_complete_potential_type'],
                          impactoSelect: _this2.calculos.ajustarNombre(_this2.catologoImpactoAmbiental[0]['name_complete_potential_type']),
                          unit_impacto: _this2.catologoImpactoAmbiental[0]['unit_potential_type'],
                          TipoGraficaActiva: {
                            Pie: true,
                            Bar: false
                          },
                          idsTextBotones: {
                            Producción: 'ProducciónTInfo'.concat(String(element.id)),
                            Construccion: 'ConstruccionTInfo'.concat(String(element.id)),
                            Uso: 'UsoTInfo'.concat(String(element.id)),
                            FinDeVida: 'FinDeVidaTInfo'.concat(String(element.id))
                          },
                          idsBotones: {
                            Producción: 'ProducciónTextInfo'.concat(String(element.id)),
                            Construccion: 'ConstruccionTextInfo'.concat(String(element.id)),
                            Uso: 'UsoTextInfo'.concat(String(element.id)),
                            FinDeVida: 'FinDeVidaTextInfo'.concat(String(element.id))
                          },
                          iconosCambio: {
                            Producción: 'visibility',
                            Construccion: 'visibility',
                            Uso: 'visibility',
                            FinDeVida: 'visibility'
                          },
                          dataGraficaBar: _this2.cargarDataBar(_this2.calculos.ValoresProcentajeSubeapa(calculosOperacionesDeFase, []), _this2.calculos.ajustarNombre(_this2.catologoImpactoAmbiental[0]['name_complete_potential_type']), [], element.id, _this2.catologoImpactoAmbiental[0]['name_complete_potential_type'], calculosOperacionesDeFase),
                          dataGraficaPie: _this2.cargaDataPie(_this2.calculos.ValoresProcentajeSubeapa(calculosOperacionesDeFase, []), _this2.calculos.ajustarNombre(_this2.catologoImpactoAmbiental[0]['name_complete_potential_type']), []),
                          mostrarOpcionCarbono: false,
                          iconoCarbono: 'switch_left',
                          graficasCarbonoOResultados: {
                            resultados: true,
                            carbono: false
                          },
                          opcionCarbonoSeleccionada: _this2.catologoOpcionesCarbono[0],
                          dataGraficaCarbono: _this2.calculos.llenarGraficaCarbono(_this2.catologoOpcionesCarbono[0]),
                          valorCarbono: _this2.calculos.determinaValorCarbono(calculosOperacionesDeFase, _this2.DatosCalculos.projectsList, element.id, _this2.DatosCalculos.ULList).toExponential(2),
                          flagsCarbono: _this2.calculos.buscarValosCarbono(calculosOperacionesDeFase, _this2.catologoOpcionesCarbono[0], _this2.DatosCalculos.projectsList, element.id, _this2.DatosCalculos.ULList),
                          descripcionCarbono: _this2.calculos.determinarDescripcionCarbono(_this2.catologoOpcionesCarbono[0]),
                          errorCalculos: auxCalculos[1],
                          DBList: auxBD,
                          basesDatos: auxbases
                        };

                        _this2.auxDataProjectList.push(auxDatos);
                      });
                      this.cargaDatosCalculo = true;

                    case 64:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onlyUnique",
          value: function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.auth.logout().then(function () {
              _this3.router.navigate(['/auth/login']);
            });
          }
        }, {
          key: "goToAdmin",
          value: function goToAdmin() {
            this.router.navigateByUrl('admin');
          }
        }, {
          key: "serchSections",
          value: function serchSections(projectId) {
            var _this4 = this;

            var sectionsExist = [];

            try {
              this.sections.map(function (section) {
                _this4.dataMaterial.map(function (material) {
                  if (material.project_id === projectId && material.section_id === section.id) {
                    sectionsExist.push(section);
                  }
                });
              });
            } catch (e) {
              console.log(e);
            }

            return sectionsExist.filter(this.onlyUnique);
          }
        }, {
          key: "serchSC",
          value: function serchSC(projectId, scId) {
            var _this5 = this;

            var listSC = [];

            try {
              this.sections.map(function (section) {
                _this5.dataMaterial.map(function (material) {
                  if (material.project_id === projectId && material.section_id === section.id && section.id === scId) {
                    listSC.push(material.construction_system);
                  }
                });
              });
            } catch (e) {
              console.log(e);
            }

            return listSC.filter(this.onlyUnique);
          }
        }, {
          key: "serchConstructiveSection",
          value: function serchConstructiveSection(projectId) {
            var _this6 = this;

            var sectionsExist = [];

            try {
              this.sections.map(function (section) {
                _this6.ConstructiveSystemElements.map(function (cs) {
                  if (cs.project_id === projectId && cs.section_id === section.id) {
                    sectionsExist.push(section);
                  }
                });
              });
            } catch (e) {
              console.log(e);
            }

            return sectionsExist.filter(this.onlyUnique);
          }
        }, {
          key: "serchEndLifeSection",
          value: function serchEndLifeSection(projectId) {
            var _this7 = this;

            var sectionsExist = [];

            try {
              this.sections.map(function (section) {
                _this7.ECDP.map(function (ecpd) {
                  if (ecpd.project_id === projectId && ecpd.section_id === section.id) {
                    sectionsExist.push(section);
                  }
                });
              });
            } catch (e) {
              console.log(e);
            }

            return sectionsExist.filter(this.onlyUnique);
          }
        }, {
          key: "serchDetailConstruction",
          value: function serchDetailConstruction(projectId, scId) {
            var _this8 = this;

            var list = [];

            try {
              this.sections.map(function (section) {
                _this8.ConstructiveSystemElements.map(function (cs) {
                  if (cs.project_id === projectId && cs.section_id === section.id && section.id === scId) {
                    _this8.sourceInformation.map(function (si) {
                      if (si.id === cs.source_information_id) {
                        list.push({
                          quantity: cs.quantity,
                          source_information: si.name_source_information
                        });
                      }
                    });
                  }
                });
              });
            } catch (e) {
              console.log(e);
            }

            return list.filter(this.onlyUnique);
          }
        }, {
          key: "searchDataEndLife",
          value: function searchDataEndLife(projectId, scId) {
            var _this9 = this;

            var list = [];

            try {
              this.sections.map(function (section) {
                _this9.ListDataEndLife.map(function (cs) {
                  if (cs.project_id === projectId && cs.section_id === section.id && section.id === scId) {
                    _this9.sourceInformation.map(function (si) {
                      if (si.id === cs.source_information_id) {
                        list.push({
                          quantity: cs.quantity,
                          source_information: si.name_source_information
                        });
                      }
                    });
                  }
                });
              });
            } catch (e) {
              console.log(e);
            }

            return list.filter(this.onlyUnique);
          }
        }, {
          key: "serchUseData",
          value: function serchUseData(projectId) {
            var _this10 = this;

            var dataList = [];

            try {
              this.ACR.map(function (data) {
                if (projectId === data.project_id) {
                  _this10.ECD.map(function (data2) {
                    if (data.id === data2.annual_consumption_required_id) {
                      dataList.push(data2);
                    }
                  });
                }
              });
            } catch (e) {
              console.log(e);
            }

            return dataList.filter(this.onlyUnique);
          }
        }, {
          key: "DataPieUso",
          value: function DataPieUso(data) {
            var aux = [];
            var auxdata = [];
            data.forEach(function (element) {
              aux.push(element['quantity']);
            });
            auxdata = [{
              data: aux,
              backgroundColor: ['#DFDFDF', '#767676', '#C3C3C3']
            }];
            return auxdata;
          }
        }, {
          key: "selectUse",
          value: function selectUse(id) {
            var _this11 = this;

            this.projectsList = [];
            this.tempProjectsList.map(function (item) {
              if (item.use_id === id) {
                _this11.projectsList.push(item);
              }

              if (id === 0) {
                _this11.projectsList.push(item);
              }
            });
            this.projectsList.reverse();
          }
        }, {
          key: "openDialogCTOP",
          value: function openDialogCTOP() {
            var _this12 = this;

            var dialogRef = this.dialog.open(_choose_type_of_project_choose_type_of_project_component__WEBPACK_IMPORTED_MODULE_2__["ChooseTypeOfProjectComponent"], {
              width: '900px',
              data: {
                optionSelected: 'Huella de carbono'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              try {
                _this12.optionSelected = result.optionSelected;

                _this12.router.navigateByUrl('do-files');
              } catch (e) {
                console.log('close modal');
              }
            });
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(id) {
            var _this13 = this;

            this.projects.deleteProject(id).subscribe(function (data) {
              _this13.users.searchUser(localStorage.getItem('email-login')).subscribe(function (data) {
                localStorage.setItem('email-id', data[0].id);
                _this13.projectsList = [];

                _this13.projects.getProjects().subscribe(function (data) {
                  data.map(function (item) {
                    if (item.user_platform_id === parseInt(localStorage.getItem('email-id'), 10)) {
                      _this13.projectsList.push(item);
                    }

                    _this13.countProjectList = _this13.projectsList.length;
                  });

                  _this13.projectsList.reverse();
                });
              });
            });
          }
        }, {
          key: "renameProject",
          value: function renameProject(id) {
            var _this14 = this;

            var dialogRef = this.dialog.open(_change_name_project_change_name_project_component__WEBPACK_IMPORTED_MODULE_3__["ChangeNameProjectComponent"], {
              width: '680px',
              data: {
                nameProject: this.nameProject
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this14.projectsService.getProjectById(id).subscribe(function (data) {
                _this14.projectsService.updateProyect(id, {
                  id: id,
                  name_project: result.nameProject,
                  builded_surface: data.builded_surface,
                  living_area: data.living_area,
                  tier: data.living_area,
                  distance: data.distance,
                  use_id: data.use_id,
                  type_id: data.type_id,
                  country_id: data.country_id,
                  useful_life_id: data.country_id,
                  housing_scheme_id: data.housing_scheme_id,
                  user_platform_id: data.user_platform_id,
                  city_id_origin: data.city_id_origin
                }).subscribe(function (data2) {
                  console.log(data2);
                  location.reload();
                });
              });
            });
          }
        }, {
          key: "duplicateProject",
          value: function duplicateProject(projectId) {
            var _this15 = this;

            this.cargaDatosCalculo = false;
            this.projectsService.getProjectById(projectId).subscribe(function (projectData) {
              _this15.projectsService.addProject({
                name_project: "".concat(projectData.name_project, " - Copy"),
                builded_surface: projectData.builded_surface,
                living_area: projectData.living_area,
                tier: projectData.tier,
                use_id: projectData.use_id,
                type_id: projectData.type_id,
                country_id: projectData.country_id,
                useful_life_id: projectData.useful_life_id,
                housing_scheme_id: projectData.housing_scheme_id,
                user_platform_id: projectData.user_platform_id,
                city_id_origin: projectData.city_id_origin,
                distance: null
              }).subscribe(function (newProjectData) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _this16 = this;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return localStorage.setItem('newProjectDataId', newProjectData.id);

                        case 2:
                          _context2.next = 4;
                          return this.ListDataEndLife.map(function (dataEL) {
                            if (dataEL.project_id === projectId) {
                              _this16.endLifeService.addECDP({
                                quantity: dataEL.quantity,
                                unit_id: dataEL.unit_id,
                                source_information_id: dataEL.source_information_id,
                                section_id: dataEL.section_id,
                                project_id: newProjectData.id
                              }).subscribe(function (dataResultEndLife) {
                                console.log('resultado de fin de vida');
                                console.log(dataResultEndLife);
                              });
                            }
                          });

                        case 4:
                          _context2.next = 6;
                          return this.ConstructiveSystemElements.map(function (cs) {
                            if (cs.project_id === projectId) {
                              _this16.constructionStageService.addConstructiveSistemElement({
                                quantity: cs.quantity,
                                project_id: newProjectData.id,
                                section_id: cs.section_id,
                                constructive_process_id: cs.constructive_process_id,
                                volume_unit_id: cs.volume_unit_id,
                                energy_unit_id: cs.energy_unit_id,
                                bulk_unit_id: cs.bulk_unit_id,
                                source_information_id: cs.source_information_id
                              }).subscribe(function (dataResultConstruction) {
                                console.log('resultado de construcción');
                                console.log(dataResultConstruction);
                              });
                            }
                          }).then( // Duplicar Producción
                          this.dataMaterial.map(function (material) {
                            if (material.project_id === projectId) {
                              _this16.projectsService.addSchemeProject({
                                construction_system: material.construction_system,
                                comercial_name: material.comercial_name,
                                quantity: material.quantity,
                                provider_distance: material.provider_distance,
                                material_id: material.material_id,
                                project_id: parseInt(localStorage.getItem('newProjectDataId')),
                                origin_id: material.origin_id,
                                section_id: material.section_id,
                                value: material.value,
                                distance_init: material.distance_init,
                                distance_end: material.distance_end,
                                replaces: material.replaces,
                                city_id_origin: material.city_id_origin,
                                city_id_end: material.city_id_end,
                                transport_id_origin: material.transport_id_origin,
                                transport_id_end: material.transport_id_end,
                                state_id_origin: material.state_id_origin,
                                unit_text: material.unit_text,
                                description_material: material.description_material
                              }).subscribe(function (dataResulMaterial) {
                                console.log('resultado de materiales');
                                console.log(dataResulMaterial);
                              });
                            }
                          }).then(this.electricitConsumptionService.getACR().subscribe(function (dataAllACR) {
                            dataAllACR.map(function (acr) {
                              if (acr.project_id === projectId) {
                                // Duplicar Uso
                                _this16.electricitConsumptionService.addACR({
                                  project_id: parseInt(localStorage.getItem('newProjectDataId')),
                                  quantity: acr.quantity,
                                  unit_id: acr.unit_id
                                }).subscribe(function (dataNewACR) {
                                  console.log('Resultado de add NewACR');
                                  console.log(dataNewACR);

                                  _this16.electricitConsumptionService.getECD().subscribe(function (dataAllECD) {
                                    dataAllECD.map(function (ecd) {
                                      if (ecd.annual_consumption_required_id === acr.id) {
                                        _this16.electricitConsumptionService.addECD({
                                          quantity: ecd.quantity,
                                          percentage: ecd.percentage,
                                          source: ecd.source,
                                          annual_consumption_required_id: dataNewACR.id,
                                          unit_id: ecd.unit_id,
                                          type: ecd.type
                                        }).subscribe(function (dataNewECD) {
                                          console.log('Resultado de add New ECD');
                                          console.log(dataNewECD);

                                          _this16.users.searchUser(localStorage.getItem('email-login')).subscribe(function (data) {
                                            console.log(data);
                                            location.reload();
                                          });
                                        });
                                      }
                                    });
                                  });
                                });
                              }
                            });
                          })));

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            });
          }
        }, {
          key: "selectImpactoAmbiental",
          value: function selectImpactoAmbiental(impacto, indexRecivido) {
            var _this17 = this;

            this.auxDataProjectList[indexRecivido].impactoSelect = this.calculos.ajustarNombre(impacto);

            if (impacto === 'Calentamiento Global') {
              this.auxDataProjectList[indexRecivido].mostrarOpcionCarbono = true;
              this.auxDataProjectList[indexRecivido].iconoCarbono = 'switch_left';
            } else {
              this.auxDataProjectList[indexRecivido].mostrarOpcionCarbono = false;
            }

            this.auxDataProjectList[indexRecivido].impactoCompleteSelect = impacto;
            this.auxDataProjectList[indexRecivido].etapasIgnoradas = [];
            this.catologoImpactoAmbiental.forEach(function (element) {
              if (element.name_complete_potential_type === impacto) {
                _this17.auxDataProjectList[indexRecivido].unit_impacto = element.unit_potential_type;
              }
            });
            this.auxDataProjectList[indexRecivido].dataGraficaPie = this.cargaDataPie(this.auxDataProjectList[indexRecivido].porcentajeSubepata, this.auxDataProjectList[indexRecivido].impactoSelect, this.auxDataProjectList[indexRecivido].etapasIgnoradas);
            this.auxDataProjectList[indexRecivido].dataGraficaBar = this.cargarDataBar(this.auxDataProjectList[indexRecivido].porcentajeSubepata, this.auxDataProjectList[indexRecivido].impactoSelect, this.auxDataProjectList[indexRecivido].etapasIgnoradas, this.auxDataProjectList[indexRecivido].id, this.auxDataProjectList[indexRecivido].impactoCompleteSelect, this.auxDataProjectList[indexRecivido].datos);

            if (this.auxDataProjectList[indexRecivido].etapaSeleccionada != 'Ninguna') {
              this.auxDataProjectList[indexRecivido].subetasMostrada = this.calculos.findSubetapas(this.auxDataProjectList[indexRecivido].etapaSeleccionada, this.auxDataProjectList[indexRecivido].impactoCompleteSelect, this.auxDataProjectList[indexRecivido].datos);
            }
          }
        }, {
          key: "selectOpcionCarbono",
          value: function selectOpcionCarbono(opcion, indexRecivido) {
            this.auxDataProjectList[indexRecivido].dataGraficaCarbono = this.calculos.llenarGraficaCarbono(opcion);
            this.auxDataProjectList[indexRecivido].flagsCarbono = this.calculos.buscarValosCarbono(this.auxDataProjectList[indexRecivido].datos, opcion, this.DatosCalculos.projectsList, this.auxDataProjectList[indexRecivido].id, this.DatosCalculos.ULList);
            this.auxDataProjectList[indexRecivido].descripcionCarbono = this.calculos.determinarDescripcionCarbono(opcion);
          }
        }, {
          key: "mostrarHuellaCarbono",
          value: function mostrarHuellaCarbono(id, indexRecivido) {
            //Camiar graficas a Huella de Carbono o Resultados por ciclo de vida
            if (this.auxDataProjectList[indexRecivido]['graficasCarbonoOResultados']['carbono']) {
              this.auxDataProjectList[indexRecivido].iconoCarbono = 'switch_left';
              this.auxDataProjectList[indexRecivido]['graficasCarbonoOResultados']['carbono'] = false;
              this.auxDataProjectList[indexRecivido]['graficasCarbonoOResultados']['resultados'] = true;
            } else {
              this.auxDataProjectList[indexRecivido].iconoCarbono = 'switch_right';
              this.auxDataProjectList[indexRecivido]['graficasCarbonoOResultados']['carbono'] = true;
              this.auxDataProjectList[indexRecivido]['graficasCarbonoOResultados']['resultados'] = false;
            }
          }
        }, {
          key: "selectEtapa",
          value: function selectEtapa(etapa, i, id) {
            var auxSubetapas = this.calculos.findSubetapas(etapa, this.auxDataProjectList[i].impactoCompleteSelect, this.auxDataProjectList[i].datos); //console.log(auxSubetapas)

            this.auxDataProjectList[i].subetasMostrada = auxSubetapas;

            if (this.auxDataProjectList[i].etapaSeleccionada === etapa) {
              var auxid = etapa.concat('TextInfo'.concat(String(id)));
              var auxidText = etapa.concat('TInfo'.concat(String(id)));
              document.getElementById(auxid).className = 'button-info';
              document.getElementById(auxidText).style.color = '#767676';
              this.auxDataProjectList[i].banderaEtapa = false;
              this.auxDataProjectList[i].etapaSeleccionada = 'Ninguna';
              this.auxDataProjectList[i].subetasMostrada = [{
                abreviacion: 'nada',
                color: '#FFFFFF'
              }];
            } else {
              if (this.auxDataProjectList[i].etapaSeleccionada != 'Ninguna') {
                var _auxid2 = this.auxDataProjectList[i].etapaSeleccionada.concat('TextInfo'.concat(String(id)));

                var _auxidText = this.auxDataProjectList[i].etapaSeleccionada.concat('TInfo'.concat(String(id)));

                document.getElementById(_auxid2).className = 'button-info';
                document.getElementById(_auxidText).style.color = '#767676';
              }

              this.auxDataProjectList[i].banderaEtapa = true;
              this.auxDataProjectList[i].etapaSeleccionada = etapa;

              var _auxid = this.auxDataProjectList[i].etapaSeleccionada.concat('TextInfo'.concat(String(id)));

              document.getElementById(_auxid).className = 'button-info-select';
              var color = {
                Producción: '#4DBE89',
                Construccion: '#0DADBA',
                Uso: '#8F5091',
                FinDeVida: '#DEA961'
              };
              Object.keys(color).forEach(function (element) {
                if (element === etapa) {
                  var _auxid3 = etapa.concat('TextInfo'.concat(String(id)));

                  var _auxidText2 = etapa.concat('TInfo'.concat(String(id)));

                  document.getElementById(_auxidText2).style.color = color[element];
                  document.getElementById(_auxid3).style.borderColor = color[element];
                }
              });
            }
          }
        }, {
          key: "cargarDataBar",
          value: function cargarDataBar(data, impactoU, etapasI, id, impactS, porcentajesMostrados) {
            var _this18 = this;

            var auxColor = [];
            var aux = [];
            var auxl = [];
            var banderaEtapa = true;
            var auxdata2 = [];
            var auxDatos = {
              sub1: [],
              sub2: [],
              sub3: [],
              sub4: []
            };
            var auxColores = {
              sub1: [],
              sub2: [],
              sub3: [],
              sub4: []
            };
            var maxsubetapas = 0;
            Object.keys(data).forEach(function (element) {
              if (element === impactoU) {
                Object.keys(data[element]).forEach(function (ciclo) {
                  etapasI.forEach(function (ei) {
                    if (ei === ciclo) {
                      banderaEtapa = false;
                    }
                  });

                  if (banderaEtapa) {
                    if (_this18.calculos.findSubetapas(ciclo, impactS, porcentajesMostrados).length > maxsubetapas) maxsubetapas = _this18.calculos.findSubetapas(ciclo, impactS, porcentajesMostrados).length;
                  }

                  banderaEtapa = true;
                });
              }

              if (element === impactoU) {
                Object.keys(data[element]).forEach(function (ciclo) {
                  etapasI.forEach(function (ei) {
                    if (ei === ciclo) {
                      banderaEtapa = false;
                    }
                  });

                  if (banderaEtapa) {
                    auxl.push(ciclo);
                    var auxsub = 0;
                    Object.keys(data[element][ciclo]).forEach(function (subetapa) {
                      auxsub = auxsub + 1;

                      if (auxsub == 1) {
                        auxDatos.sub1.push(data[element][ciclo][subetapa].porcentaje);
                        auxColores.sub1.push(_this18.calculos.findColor(subetapa));
                      }

                      if (auxsub == 2) {
                        auxDatos.sub2.push(data[element][ciclo][subetapa].porcentaje);
                        auxColores.sub2.push(_this18.calculos.findColor(subetapa));
                      }

                      if (auxsub == 3) {
                        auxDatos.sub3.push(data[element][ciclo][subetapa].porcentaje);
                        auxColores.sub3.push(_this18.calculos.findColor(subetapa));
                      }

                      if (auxsub == 4) {
                        auxDatos.sub4.push(data[element][ciclo][subetapa].porcentaje);
                        auxColores.sub4.push(_this18.calculos.findColor(subetapa));
                      }

                      auxdata2.push(data[element][ciclo][subetapa].num);
                      auxColor.push(_this18.calculos.findColor(subetapa));
                    });

                    if (auxsub < maxsubetapas) {
                      for (var i = auxsub + 1; i <= maxsubetapas; i++) {
                        if (i == 3) {
                          auxDatos.sub3.push('0');
                          auxColores.sub3.push('#FFFFFF');
                        }

                        if (i == 4) {
                          auxDatos.sub4.push('0');
                          auxColores.sub4.push('#FFFFFF');
                        }
                      }
                    }
                  }

                  banderaEtapa = true;
                });
              }
            });
            Object.keys(auxDatos).forEach(function (element) {
              aux = [].concat(_toConsumableArray(aux), [{
                data: auxDatos[element],
                label: element,
                stack: 'Proyecto',
                backgroundColor: auxColores[element]
              }]);
            });
            return {
              datos: aux,
              labels: auxl
            };
          }
        }, {
          key: "cargaDataPie",
          value: function cargaDataPie(data, impactoU, etapasI) {
            var _this19 = this;

            var auxColor = [];
            var aux = [];
            var banderaEtapa = true;
            var auxdata2 = [];
            Object.keys(data).forEach(function (element) {
              if (element === impactoU) {
                Object.keys(data[element]).forEach(function (ciclo) {
                  etapasI.forEach(function (ei) {
                    if (ei === ciclo) {
                      banderaEtapa = false;
                    }
                  });

                  if (banderaEtapa) {
                    Object.keys(data[element][ciclo]).forEach(function (subetapa) {
                      auxdata2.push(data[element][ciclo][subetapa].num);
                      auxColor.push(_this19.calculos.findColor(subetapa));
                    });
                  }

                  banderaEtapa = true;
                });
              }
            });
            auxdata2 = this.calculos.Porcentaje(auxdata2);
            aux = [{
              data: auxdata2,
              backgroundColor: auxColor
            }];
            return aux;
          }
        }, {
          key: "eliminarEtapa",
          value: function eliminarEtapa(etapa, i) {
            var _this20 = this;

            if (this.auxDataProjectList[i].etapasIgnoradas.includes(etapa)) {
              this.auxDataProjectList[i].etapasIgnoradas.forEach(function (element, index) {
                if (element === etapa) {
                  _this20.auxDataProjectList[i].iconosCambio[etapa] = 'visibility';

                  _this20.auxDataProjectList[i].etapasIgnoradas.splice(index, 1);
                }
              });
            } else {
              this.auxDataProjectList[i].iconosCambio[etapa] = 'visibility_off';
              this.auxDataProjectList[i].etapasIgnoradas.push(etapa);
            }

            this.auxDataProjectList[i].porcentaje = this.calculos.ValoresProcentaje(this.auxDataProjectList[i].datos, this.auxDataProjectList[i].etapasIgnoradas);
            this.auxDataProjectList[i].porcentajeSubepata = this.calculos.ValoresProcentajeSubeapa(this.auxDataProjectList[i].datos, this.auxDataProjectList[i].etapasIgnoradas);
            this.auxDataProjectList[i].dataGraficaPie = this.cargaDataPie(this.calculos.ValoresProcentajeSubeapa(this.auxDataProjectList[i].datos, this.auxDataProjectList[i].etapasIgnoradas), this.auxDataProjectList[i].impactoSelect, this.auxDataProjectList[i].etapasIgnoradas);
            this.auxDataProjectList[i].dataGraficaBar = this.cargarDataBar(this.calculos.ValoresProcentajeSubeapa(this.auxDataProjectList[i].datos, this.auxDataProjectList[i].etapasIgnoradas), this.auxDataProjectList[i].impactoSelect, this.auxDataProjectList[i].etapasIgnoradas, this.auxDataProjectList[i].id, this.auxDataProjectList[i].impactoCompleteSelect, this.auxDataProjectList[i].datos);
          }
        }, {
          key: "cambioGrafica",
          value: function cambioGrafica(i, grafica) {
            if (grafica === 'Pie') {
              this.auxDataProjectList[i].TipoGraficaActiva['Pie'] = true;
              this.auxDataProjectList[i].TipoGraficaActiva['Bar'] = false;
            }

            if (grafica === 'Bar') {
              this.auxDataProjectList[i].TipoGraficaActiva['Pie'] = false;
              this.auxDataProjectList[i].TipoGraficaActiva['Bar'] = true;
            }
          }
        }, {
          key: "ajusteUsoBaseDatos",
          value: function ajusteUsoBaseDatos(seleccion, project) {
            var _this21 = this;

            Object.keys(this.auxDataProjectList[project]['basesDatos']).forEach(function (bd) {
              var flag = false;
              seleccion.forEach(function (bdSelect) {
                if (bdSelect === bd) {
                  flag = true;
                }
              });
              _this21.auxDataProjectList[project]['basesDatos'][bd] = flag;
            });
            var auxCalculos = this.calculos.OperacionesDeFase(this.auxDataProjectList[project]['id'], this.DatosCalculos, this.auxDataProjectList[project]['basesDatos']);
            var calculosOperacionesDeFase = auxCalculos[0];
            this.auxDataProjectList[project]['datos'] = calculosOperacionesDeFase;
            var valorPorcentaje = this.calculos.ValoresProcentaje(calculosOperacionesDeFase, this.auxDataProjectList[project].etapasIgnoradas);
            this.auxDataProjectList[project]['porcentaje'] = valorPorcentaje;
            var valorPorcentajeS = this.calculos.ValoresProcentajeSubeapa(calculosOperacionesDeFase, this.auxDataProjectList[project].etapasIgnoradas);
            this.auxDataProjectList[project].dataGraficaPie = this.cargaDataPie(valorPorcentajeS, this.auxDataProjectList[project].impactoSelect, this.auxDataProjectList[project].etapasIgnoradas);
            this.auxDataProjectList[project]['dataGraficaBar'] = this.cargarDataBar(valorPorcentajeS, this.auxDataProjectList[project]['impactoSelect'], this.auxDataProjectList[project].etapasIgnoradas, this.auxDataProjectList[project].id, this.auxDataProjectList[project].impactoCompleteSelect, this.auxDataProjectList[project].datos);
            this.auxDataProjectList[project]['porcentajeSubepata'] = valorPorcentajeS;

            if (this.auxDataProjectList[project].etapaSeleccionada != 'Ninguna') {
              this.auxDataProjectList[project].subetasMostrada = this.calculos.findSubetapas(this.auxDataProjectList[project].etapaSeleccionada, this.auxDataProjectList[project].impactoCompleteSelect, this.auxDataProjectList[project].datos);
            }

            this.auxDataProjectList[project]['valorCarbono'] = this.calculos.determinaValorCarbono(calculosOperacionesDeFase, this.DatosCalculos.projectsList, this.auxDataProjectList[project].id, this.DatosCalculos.ULList).toExponential(2);
            this.auxDataProjectList[project]['flagsCarbono'] = this.calculos.buscarValosCarbono(calculosOperacionesDeFase, this.auxDataProjectList[project].opcionCarbonoSeleccionada, this.DatosCalculos.projectsList, this.auxDataProjectList[project].id, this.DatosCalculos.ULList);
          }
        }, {
          key: "openDialogANP",
          value: function openDialogANP() {
            var _this22 = this;

            var dialogRef = this.dialog.open(_add_new_project_add_new_project_component__WEBPACK_IMPORTED_MODULE_1__["AddNewProjectComponent"], {
              width: '680px',
              data: {
                nombre: this.nombre,
                catalogoUsos: this.catalogoUsos,
                catalogoPaises: this.catalogoPaises,
                catalogoTipo: this.catalogoTipo,
                catalogoVidaUtil: this.catalogoVidaUtil,
                catalogoEsqHabitacional: this.catalogoEsqHabitacional,
                catalogoEstados: this.catalogoEstados,
                usoSeleccionado: this.usoSeleccionado,
                paisSeleccionado: this.paisSeleccionado,
                tipoSeleccionado: this.tipoSeleccionado,
                superficieConstruida: this.superficieConstruida,
                superficieHabitable: this.superficieHabitable,
                vidaUtilSeleccionado: this.vidaUtilSeleccionado,
                esqHabitacionalSeleccionado: this.esqHabitacionalSeleccionado,
                estadoSeleccionado: this.estadoSeleccionado,
                ciudadSeleccionada: this.ciudadSeleccionada,
                noNiveles: this.noNiveles
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              try {
                _this22.projectsService.addProject({
                  name_project: result.nombre,
                  builded_surface: parseInt(result.superficieConstruida, 10),
                  living_area: parseInt(result.superficieHabitable, 10),
                  tier: parseInt(result.noNiveles, 10),
                  use_id: result.usoSeleccionado,
                  type_id: result.tipoSeleccionado === undefined ? null : result.tipoSeleccionado,
                  country_id: result.paisSeleccionado,
                  useful_life_id: result.vidaUtilSeleccionado,
                  housing_scheme_id: result.esqHabitacionalSeleccionado === undefined ? null : result.esqHabitacionalSeleccionado,
                  user_platform_id: parseInt(localStorage.getItem('email-id'), 10),
                  city_id_origin: result.ciudadSeleccionada === undefined ? null : result.ciudadSeleccionada,
                  distance: null
                }).subscribe(function (data) {
                  sessionStorage.setItem('primaryDataProject', JSON.stringify(data));
                  sessionStorage.setItem('estadoSeleccionado', result.estadoSeleccionado);

                  _this22.openDialogCTOP();
                });
              } catch (e) {
                console.log('close modal');
              }
            });
          }
        }, {
          key: "redirectResultados",
          value: function redirectResultados(id) {
            sessionStorage.setItem('projectID', id);
            this.router.navigateByUrl('resultados');
          }
        }, {
          key: "updateMaterial",
          value: function updateMaterial(id) {
            localStorage.setItem('idProyectoConstrucción', id);
            this.router.navigateByUrl('material-stage-update');
          }
        }, {
          key: "updateConstruction",
          value: function updateConstruction(id) {
            localStorage.setItem('idProyectoConstrucción', id);
            this.router.navigateByUrl('construction-stage-update');
          }
        }, {
          key: "updateEndLife",
          value: function updateEndLife(id) {
            localStorage.setItem('idProyectoConstrucción', id);
            this.router.navigateByUrl('update-end-life');
          }
        }, {
          key: "updateUso",
          value: function updateUso(id) {
            localStorage.setItem('idProyectoConstrucción', id);
            this.router.navigateByUrl('usage-stage-update');
          }
        }]);

        return HomeEvamedComponent;
      }();
      /***/

    },

    /***/
    "vn2E":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/home-evamed/components/change-name-project/change-name-project.component.scss.shim.ngstyle.js ***!
      \***************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function vn2E(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtbmFtZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"];
      /***/
    },

    /***/
    "w/oM":
    /*!************************************************************!*\
      !*** ./src/app/core/services/catalogs/catalogs.service.ts ***!
      \************************************************************/

    /*! exports provided: CatalogsService */

    /***/
    function wOM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogsService", function () {
        return CatalogsService;
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

      var CatalogsService = /*#__PURE__*/function () {
        function CatalogsService(http) {
          _classCallCheck(this, CatalogsService);

          this.http = http;
        }

        _createClass(CatalogsService, [{
          key: "getLocalDistances",
          value: function getLocalDistances() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_local_distances).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getExternalDistances",
          value: function getExternalDistances() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_exterternal_distances).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "usesCatalog",
          value: function usesCatalog() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_uses).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "countriesCatalog",
          value: function countriesCatalog() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_countries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "typeProjectCatalog",
          value: function typeProjectCatalog() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "usefulLifeCatalog",
          value: function usefulLifeCatalog() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_useful_life).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "housingSchemeCatalog",
          value: function housingSchemeCatalog() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_housing_scheme).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "getBulkUnits",
          value: function getBulkUnits() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_bulk_units).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getEnergyUnits",
          value: function getEnergyUnits() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_energy_units).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getVolumeUnits",
          value: function getVolumeUnits() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_volume_units).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getTypeEnergy",
          value: function getTypeEnergy() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getStates",
          value: function getStates() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_states).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getCities",
          value: function getCities() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_cities).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getTransports",
          value: function getTransports() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_transports).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "getSections",
          value: function getSections() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_sections).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }]);

        return CatalogsService;
      }();

      CatalogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function CatalogsService_Factory() {
          return new CatalogsService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: CatalogsService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "wsAO":
    /*!*************************************************************************************!*\
      !*** ./src/app/home-evamed/components/add-new-project/add-new-project.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AddNewProjectComponent */

    /***/
    function wsAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewProjectComponent", function () {
        return AddNewProjectComponent;
      });

      var AddNewProjectComponent = /*#__PURE__*/function () {
        function AddNewProjectComponent(catalogsService, dialogRef, data) {
          _classCallCheck(this, AddNewProjectComponent);

          this.catalogsService = catalogsService;
          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(AddNewProjectComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select(id) {
            var _this23 = this;

            this.catalogoCiudades = [];
            this.catalogsService.getCities().subscribe(function (data) {
              data.map(function (item) {
                if (item.state_id === id) {
                  _this23.catalogoCiudades.push(item);
                }
              });
            });
          }
        }]);

        return AddNewProjectComponent;
      }();
      /***/

    },

    /***/
    "x0fT":
    /*!***************************************************************************************!*\
      !*** ./src/app/home-evamed/components/home-evamed/home-evamed.component.ngfactory.js ***!
      \***************************************************************************************/

    /*! exports provided: RenderType_HomeEvamedComponent, View_HomeEvamedComponent_0, View_HomeEvamedComponent_Host_0, HomeEvamedComponentNgFactory */

    /***/
    function x0fT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HomeEvamedComponent", function () {
        return RenderType_HomeEvamedComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HomeEvamedComponent_0", function () {
        return View_HomeEvamedComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HomeEvamedComponent_Host_0", function () {
        return View_HomeEvamedComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeEvamedComponentNgFactory", function () {
        return HomeEvamedComponentNgFactory;
      });
      /* harmony import */


      var _home_evamed_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-evamed.component.scss.shim.ngstyle */
      "I8W3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/core/index.ngfactory */
      "CeGm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/card/index.ngfactory */
      "YHaq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/select/index.ngfactory */
      "Y1Mv");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
      "XE/z");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button-toggle/index.ngfactory */
      "Fyq5");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/menu/index.ngfactory */
      "qXT7");
      /* harmony import */


      var _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/tabs/index.ngfactory */
      "Pwwu");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _home_evamed_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./home-evamed.component */
      "vXdn");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      "7dP1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../../core/services/analisis/analisis.service */
      "hslW");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /* harmony import */


      var _calculos_calculos__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../../../calculos/calculos */
      "MNqV");
      /* harmony import */


      var _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../../../core/services/projects/projects.service */
      "kqb2");
      /* harmony import */


      var _core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../../../core/services/catalogs/catalogs.service */
      "w/oM");
      /* harmony import */


      var _core_services_construction_stage_construction_stage_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../../../core/services/construction-stage/construction-stage.service */
      "AqNq");
      /* harmony import */


      var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../../../core/services/user/user.service */
      "9APP");
      /* harmony import */


      var _core_services_end_life_end_life_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../../../core/services/end-life/end-life.service */
      "eCkx");
      /* harmony import */


      var _core_services_electricity_consumption_electricit_consumption_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../../../core/services/electricity-consumption/electricit-consumption.service */
      "W6vs");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HomeEvamedComponent = [_home_evamed_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HomeEvamedComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HomeEvamedComponent,
        data: {}
      });

      function View_HomeEvamedComponent_1(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[11, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_use;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_HomeEvamedComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "container-principal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "btn-primer-producto"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openDialogANP() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "message-plus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Crea tu primer proyecto"]))], null, null);
      }

      function View_HomeEvamedComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Habitacional"]))], null, null);
      }

      function View_HomeEvamedComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comercial"]))], null, null);
      }

      function View_HomeEvamedComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Oficinas"]))], null, null);
      }

      function View_HomeEvamedComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Industrial"]))], null, null);
      }

      function View_HomeEvamedComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Educacional"]))], null, null);
      }

      function View_HomeEvamedComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hospitalario"]))], null, null);
      }

      function View_HomeEvamedComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_HomeEvamedComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-card", [["class", "card-item-custom mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.updateMaterial(_v.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "ul", [["class", "listItems"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _co.serchSC(_v.parent.context.$implicit.id, _v.context.$implicit.id);

          _ck(_v, 6, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.name_section;

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " hrs "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2)], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.source_information;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.quantity, "1.2-2"));

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-card", [["class", "card-item-custom mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.updateConstruction(_v.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "ul", [["class", "listItems"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _co.serchDetailConstruction(_v.parent.context.$implicit.id, _v.context.$implicit.id);

          _ck(_v, 6, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.name_section;

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [["class", "dot"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" Red el\xE9ctrica nacional ", " kWh "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], function (_ck, _v) {
          var currVal_0 = _ck(_v, 3, 0, "#767676");

          _ck(_v, 2, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.quantity, "1.2-2"));

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [["class", "dot"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["Combustible: ", " kWh"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], function (_ck, _v) {
          var currVal_0 = _ck(_v, 3, 0, "#DFDFDF");

          _ck(_v, 2, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.quantity, "1.2-2"));

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [["class", "dot"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["Paneles fotovoltaicos: ", " kWh"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], function (_ck, _v) {
          var currVal_0 = _ck(_v, 3, 0, "#C3C3C3");

          _ck(_v, 2, 0, currVal_0);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.quantity, "1.2-2"));

          _ck(_v, 4, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.source === "electric";

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.source === "fuel";

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.source === "panels";

          _ck(_v, 6, 0, currVal_2);
        }, null);
      }

      function View_HomeEvamedComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " hrs "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2)], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.source_information;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.quantity, "1.2-2"));

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-card", [["class", "card-item-custom mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.updateEndLife(_v.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "ul", [["class", "listItems"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_2 = _co.searchDataEndLife(_v.parent.context.$implicit.id, _v.context.$implicit.id);

          _ck(_v, 6, 0, currVal_2);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.name_section;

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_22(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[31, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit.name_complete_potential_type;

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

          var currVal_9 = _v.context.$implicit.name_complete_potential_type;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_HomeEvamedComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "button", [["class", "Detalle ver mat-focus-indicator"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.mostrarHuellaCarbono(_co.auxDataProjectList[_v.parent.parent.parent.context.index].id, _v.parent.parent.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Ver referencia"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          _ck(_v, 1, 0, currVal_0, currVal_1);
        });
      }

      function View_HomeEvamedComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "canvas-container seccionTres"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""], ["height", "292px"], ["width", "217px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_11__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ThemeService"]], {
          datasets: [0, "datasets"],
          options: [1, "options"],
          chartType: [2, "chartType"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.auxDataProjectList[_v.parent.parent.parent.context.index].dataGraficaPie;
          var currVal_1 = _co.pieChartOptions;
          var currVal_2 = _co.doughnutChartType;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_HomeEvamedComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "canvas-container seccionTres"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""], ["height", "305px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_11__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          legend: [4, "legend"],
          plugins: [5, "plugins"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.auxDataProjectList[_v.parent.parent.parent.context.index].dataGraficaBar["datos"];
          var currVal_1 = _co.auxDataProjectList[_v.parent.parent.parent.context.index].dataGraficaBar["labels"];
          var currVal_2 = _co.barChartOptions;
          var currVal_3 = _co.barChartType;
          var currVal_4 = _co.barChartLegend;
          var currVal_5 = _co.barChartPlugins;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_HomeEvamedComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Existe un herror en los calculos por falta de datos "]))], null, null);
      }

      function View_HomeEvamedComponent_28(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "text-subetapas"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " - ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", "% / ", " ", ""]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.context.$implicit.abreviacion;
          var currVal_1 = _v.parent.context.$implicit.nombre_subeatapa;

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _co.auxDataProjectList[_v.parent.parent.parent.parent.context.index].porcentajeSubepata[_co.auxDataProjectList[_v.parent.parent.parent.parent.context.index].impactoSelect][_co.auxDataProjectList[_v.parent.parent.parent.parent.context.index].etapaSeleccionada][_v.parent.context.$implicit.abreviacion]["porcentaje"];
          var currVal_3 = _co.auxDataProjectList[_v.parent.parent.parent.parent.context.index].porcentajeSubepata[_co.auxDataProjectList[_v.parent.parent.parent.parent.context.index].impactoSelect][_co.auxDataProjectList[_v.parent.parent.parent.parent.context.index].etapaSeleccionada][_v.parent.context.$implicit.abreviacion]["num"];
          var currVal_4 = _co.auxDataProjectList[_v.parent.parent.parent.parent.context.index].unit_impacto;

          _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4);
        });
      }

      function View_HomeEvamedComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [["class", "dot"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 3, 0, _v.context.$implicit.color);

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.auxDataProjectList[_v.parent.parent.parent.context.index].banderaEtapa;

          _ck(_v, 5, 0, currVal_1);
        }, null);
      }

      function View_HomeEvamedComponent_29(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[35, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
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

          var currVal_9 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_HomeEvamedComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 121, "div", [["class", "mat-tab-resultados"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 74, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 67, "div", [["class", "seccionUno"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Selecciona impacto ambiental"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 13, "mat-select", [["class", "select-impacto-ambiental mat-select"], ["required", ""], ["role", "listbox"]], [[1, "required", 0], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.auxDataProjectList[_v.parent.parent.context.index].impactoCompleteSelect = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("selectionChange" === en) {
            var pd_4 = _co.selectImpactoAmbiental(_co.auxDataProjectList[_v.parent.parent.context.index].impactoCompleteSelect, _v.parent.parent.context.index) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], [], {
          required: [0, "required"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"]], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_CONFIG"]]], {
          required: [0, "required"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_HomeEvamedComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fases de ciclo de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 48, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 6, "button", [["class", "button-info mat-focus-indicator"], ["mat-stroked-button", ""]], [[8, "id", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectEtapa("Producci\xF3n", _v.parent.parent.context.index, _co.auxDataProjectList[_v.parent.parent.context.index].id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 4, "div", [["class", "some-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "a", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Producci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, [" ", "% / ", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 3, "button", [["class", "button-icon"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.eliminarEtapa("Producci\xF3n", _v.parent.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "mat-icon", [["class", "uno mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 6, "button", [["class", "button-info mat-focus-indicator"], ["mat-stroked-button", ""]], [[8, "id", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectEtapa("Construccion", _v.parent.parent.context.index, _co.auxDataProjectList[_v.parent.parent.context.index].id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 4, "div", [["class", "some-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "a", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Construcci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](41, null, [" ", "% / ", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 3, "button", [["class", "button-icon"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.eliminarEtapa("Construccion", _v.parent.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "mat-icon", [["class", "dos mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 6, "button", [["class", "button-info mat-focus-indicator"], ["mat-stroked-button", ""]], [[8, "id", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectEtapa("Uso", _v.parent.parent.context.index, _co.auxDataProjectList[_v.parent.parent.context.index].id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 4, "div", [["class", "some-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "a", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Uso"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](53, null, [" ", "% / ", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 3, "button", [["class", "button-icon"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.eliminarEtapa("Uso", _v.parent.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "mat-icon", [["class", "tres mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](57, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 6, "button", [["class", "button-info mat-focus-indicator"], ["mat-stroked-button", ""]], [[8, "id", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectEtapa("FinDeVida", _v.parent.parent.context.index, _co.auxDataProjectList[_v.parent.parent.context.index].id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, 0, 4, "div", [["class", "some-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "a", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fin de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, null, [" ", "% / ", " ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 3, "button", [["class", "button-icon"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.eliminarEtapa("FinDeVida", _v.parent.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 2, "mat-icon", [["class", "cuatro mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 5, "div", [["class", "botones-finales"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 2, "button", [["class", "Detalle ver mat-focus-indicator"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.redirectResultados(_v.parent.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Ver detalle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 24, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 17, "div", [["class", "button-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 14, "mat-button-toggle-group", [["class", "mat-button-toggle-group"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
          _buttonToggles: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 4, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.cambioGrafica(_v.parent.parent.context.index, "Pie") !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 245760, [[34, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["pie_chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 4, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.cambioGrafica(_v.parent.parent.context.index, "Bar") !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 245760, [[34, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["bar_chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Exportar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 2, "button", [["class", "Detalle reporte mat-focus-indicator"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Generar reporte"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dispersi\xF3n de impactos por subetapa"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 2, "ul", [["class", "mostrar-subetapas"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bases de Datos consideradas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 8, "mat-select", [["class", "mat-select"], ["multiple", ""], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("selectionChange" === en) {
            var pd_3 = _co.ajusteUsoBaseDatos($event.value, _v.parent.parent.context.index) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_CONFIG"]]], {
          multiple: [0, "multiple"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, {
          customTrigger: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_HomeEvamedComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_23 = "";

          _ck(_v, 8, 0, currVal_23);

          var currVal_24 = _co.auxDataProjectList[_v.parent.parent.context.index].impactoCompleteSelect;

          _ck(_v, 10, 0, currVal_24);

          var currVal_25 = "";

          _ck(_v, 12, 0, currVal_25);

          var currVal_26 = _co.catologoImpactoAmbiental;

          _ck(_v, 18, 0, currVal_26);

          _ck(_v, 32, 0);

          _ck(_v, 44, 0);

          _ck(_v, 56, 0);

          _ck(_v, 68, 0);

          var currVal_69 = _co.auxDataProjectList[_v.parent.parent.context.index].mostrarOpcionCarbono;

          _ck(_v, 75, 0, currVal_69);

          _ck(_v, 81, 0);

          _ck(_v, 84, 0);

          _ck(_v, 86, 0);

          _ck(_v, 89, 0);

          _ck(_v, 91, 0);

          var currVal_91 = _co.auxDataProjectList[_v.parent.parent.context.index].TipoGraficaActiva["Pie"];

          _ck(_v, 96, 0, currVal_91);

          var currVal_92 = _co.auxDataProjectList[_v.parent.parent.context.index].TipoGraficaActiva["Bar"];

          _ck(_v, 98, 0, currVal_92);

          var currVal_93 = _co.auxDataProjectList[_v.parent.parent.context.index].errorCalculos;

          _ck(_v, 100, 0, currVal_93);

          var currVal_96 = _co.auxDataProjectList[_v.parent.parent.context.index].subetasMostrada;

          _ck(_v, 109, 0, currVal_96);

          var currVal_112 = "";

          _ck(_v, 116, 0, currVal_112);

          var currVal_113 = _co.auxDataProjectList[_v.parent.parent.context.index].DBList;

          _ck(_v, 121, 0, currVal_113);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).required ? "" : null;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).id;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tabIndex;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getAriaLabel();

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getAriaLabelledby();

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).required.toString();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled.toString();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).errorState;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._optionIds : null;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).multiple;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._ariaDescribedby || null;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getAriaActiveDescendant();

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).errorState;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).required;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).empty;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending;

          _ck(_v, 5, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsBotones["Producci\xF3n"], "");

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null;
          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._animationMode === "NoopAnimations";

          _ck(_v, 23, 0, currVal_27, currVal_28, currVal_29);

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsTextBotones["Producci\xF3n"], "");

          _ck(_v, 26, 0, currVal_30);

          var currVal_31 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["Producci\xF3n"]["porcentaje"];
          var currVal_32 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["Producci\xF3n"]["num"];
          var currVal_33 = _co.auxDataProjectList[_v.parent.parent.context.index].unit_impacto;

          _ck(_v, 29, 0, currVal_31, currVal_32, currVal_33);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).inline;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).color !== "warn";

          _ck(_v, 31, 0, currVal_34, currVal_35);

          var currVal_36 = _co.auxDataProjectList[_v.parent.parent.context.index].iconosCambio["Producci\xF3n"];

          _ck(_v, 33, 0, currVal_36);

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsBotones["Construccion"], "");

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled || null;
          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._animationMode === "NoopAnimations";

          _ck(_v, 35, 0, currVal_37, currVal_38, currVal_39);

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsTextBotones["Construccion"], "");

          _ck(_v, 38, 0, currVal_40);

          var currVal_41 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["Construccion"]["porcentaje"];
          var currVal_42 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["Construccion"]["num"];
          var currVal_43 = _co.auxDataProjectList[_v.parent.parent.context.index].unit_impacto;

          _ck(_v, 41, 0, currVal_41, currVal_42, currVal_43);

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).inline;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).color !== "warn";

          _ck(_v, 43, 0, currVal_44, currVal_45);

          var currVal_46 = _co.auxDataProjectList[_v.parent.parent.context.index].iconosCambio["Construccion"];

          _ck(_v, 45, 0, currVal_46);

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsBotones["Uso"], "");

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).disabled || null;
          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._animationMode === "NoopAnimations";

          _ck(_v, 47, 0, currVal_47, currVal_48, currVal_49);

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsTextBotones["Uso"], "");

          _ck(_v, 50, 0, currVal_50);

          var currVal_51 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["Uso"]["porcentaje"];
          var currVal_52 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["Uso"]["num"];
          var currVal_53 = _co.auxDataProjectList[_v.parent.parent.context.index].unit_impacto;

          _ck(_v, 53, 0, currVal_51, currVal_52, currVal_53);

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).inline;

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).color !== "warn";

          _ck(_v, 55, 0, currVal_54, currVal_55);

          var currVal_56 = _co.auxDataProjectList[_v.parent.parent.context.index].iconosCambio["Uso"];

          _ck(_v, 57, 0, currVal_56);

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsBotones["FinDeVida"], "");

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).disabled || null;
          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._animationMode === "NoopAnimations";

          _ck(_v, 59, 0, currVal_57, currVal_58, currVal_59);

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.auxDataProjectList[_v.parent.parent.context.index].idsTextBotones["FinDeVida"], "");

          _ck(_v, 62, 0, currVal_60);

          var currVal_61 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["FinDeVida"]["porcentaje"];
          var currVal_62 = _co.auxDataProjectList[_v.parent.parent.context.index].porcentaje[_co.auxDataProjectList[_v.parent.parent.context.index].impactoSelect]["FinDeVida"]["num"];
          var currVal_63 = _co.auxDataProjectList[_v.parent.parent.context.index].unit_impacto;

          _ck(_v, 65, 0, currVal_61, currVal_62, currVal_63);

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).inline;

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).color !== "warn";

          _ck(_v, 67, 0, currVal_64, currVal_65);

          var currVal_66 = _co.auxDataProjectList[_v.parent.parent.context.index].iconosCambio["FinDeVida"];

          _ck(_v, 69, 0, currVal_66);

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).disabled || null;
          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._animationMode === "NoopAnimations";

          _ck(_v, 71, 0, currVal_67, currVal_68);

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).disabled;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).vertical;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).appearance === "standard";

          _ck(_v, 78, 0, currVal_70, currVal_71, currVal_72);

          var currVal_73 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).buttonToggleGroup;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).checked;

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).disabled;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).appearance === "standard";
          var currVal_77 = 0 - 1;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).id;

          var currVal_79 = null;

          _ck(_v, 83, 0, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79);

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).inline;

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).color !== "warn";

          _ck(_v, 85, 0, currVal_80, currVal_81);

          var currVal_82 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).buttonToggleGroup;

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).checked;

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).disabled;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).appearance === "standard";
          var currVal_86 = 0 - 1;

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).id;

          var currVal_88 = null;

          _ck(_v, 88, 0, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88);

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).inline;

          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).color !== "warn";

          _ck(_v, 90, 0, currVal_89, currVal_90);

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103).disabled || null;
          var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 103)._animationMode === "NoopAnimations";

          _ck(_v, 102, 0, currVal_94, currVal_95);

          var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).id;

          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).tabIndex;

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._getAriaLabel();

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._getAriaLabelledby();

          var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).required.toString();

          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).disabled.toString();

          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).errorState;

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._optionIds : null;

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).multiple;

          var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._ariaDescribedby || null;

          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._getAriaActiveDescendant();

          var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).disabled;

          var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).errorState;

          var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).required;

          var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).empty;

          _ck(_v, 113, 1, [currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111]);
        });
      }

      function View_HomeEvamedComponent_31(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[38, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_HomeEvamedComponent_30(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 114, "div", [["class", "graficas-huella-carbono"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "titulo-carbono"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Huella de carbono fase uso "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 111, "div", [["class", "secciones"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 13, "mat-select", [["class", "select-impacto-ambiental mat-select"], ["required", ""], ["role", "listbox"]], [[1, "required", 0], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.auxDataProjectList[_v.parent.parent.context.index].opcionCarbonoSeleccionada = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("selectionChange" === en) {
            var pd_4 = _co.selectOpcionCarbono(_co.auxDataProjectList[_v.parent.parent.context.index].opcionCarbonoSeleccionada, _v.parent.parent.context.index) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], [], {
          required: [0, "required"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"]], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_CONFIG"]]], {
          required: [0, "required"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_HomeEvamedComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "div", [["class", "texto-descripcion"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 10, "div", [["class", "canvas-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""], ["height", "305px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_11__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          legend: [4, "legend"],
          plugins: [5, "plugins"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["KgCO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "sub", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" / m"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "sup", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["a"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 77, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 10, "div", [["class", "fle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "span", [["class", "punta"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](36, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "span", [["class", "flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](39, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 3, "span", [["class", "texto-flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](42, {
          "color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 10, "div", [["class", "fle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "span", [["class", "punta"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](47, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "span", [["class", "flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](50, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 3, "span", [["class", "texto-flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](53, {
          "color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](54, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 10, "div", [["class", "fle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 2, "span", [["class", "punta"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](58, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 2, "span", [["class", "flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](61, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 3, "span", [["class", "texto-flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](64, {
          "color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 10, "div", [["class", "fle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 2, "span", [["class", "punta"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](69, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 2, "span", [["class", "flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](72, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 3, "span", [["class", "texto-flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](75, {
          "color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](76, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 10, "div", [["class", "fle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "span", [["class", "punta"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](80, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 2, "span", [["class", "flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](83, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 3, "span", [["class", "texto-flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](86, {
          "color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](87, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 10, "div", [["class", "fle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 2, "span", [["class", "punta"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](91, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 2, "span", [["class", "flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](94, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 3, "span", [["class", "texto-flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](97, {
          "color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](98, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 10, "div", [["class", "fle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 2, "span", [["class", "punta"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](102, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 2, "span", [["class", "flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](105, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 3, "span", [["class", "texto-flecha"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](108, {
          "color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](109, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 3, "button", [["class", "boton-carbono-verde"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.mostrarHuellaCarbono(_co.auxDataProjectList[_v.parent.parent.context.index].id, _v.parent.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Volver a"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["resultados "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_23 = "";

          _ck(_v, 8, 0, currVal_23);

          var currVal_24 = _co.auxDataProjectList[_v.parent.parent.context.index].opcionCarbonoSeleccionada;

          _ck(_v, 10, 0, currVal_24);

          var currVal_25 = "";

          _ck(_v, 12, 0, currVal_25);

          var currVal_26 = _co.catologoOpcionesCarbono;

          _ck(_v, 18, 0, currVal_26);

          var currVal_28 = _co.auxDataProjectList[_v.parent.parent.context.index].dataGraficaCarbono["datos"];
          var currVal_29 = _co.auxDataProjectList[_v.parent.parent.context.index].dataGraficaCarbono["labels"];
          var currVal_30 = _co.barChartHorizontalOptions;
          var currVal_31 = _co.barChartHorizonatlType;
          var currVal_32 = _co.barChartLegend;
          var currVal_33 = _co.barChartPlugins;

          _ck(_v, 23, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

          var currVal_34 = _ck(_v, 36, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_1"]);

          _ck(_v, 35, 0, currVal_34);

          var currVal_35 = _ck(_v, 39, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_1"]);

          _ck(_v, 38, 0, currVal_35);

          var currVal_36 = _ck(_v, 42, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_1"]);

          _ck(_v, 41, 0, currVal_36);

          var currVal_38 = _ck(_v, 47, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_2"]);

          _ck(_v, 46, 0, currVal_38);

          var currVal_39 = _ck(_v, 50, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_2"]);

          _ck(_v, 49, 0, currVal_39);

          var currVal_40 = _ck(_v, 53, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_2"]);

          _ck(_v, 52, 0, currVal_40);

          var currVal_42 = _ck(_v, 58, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_3"]);

          _ck(_v, 57, 0, currVal_42);

          var currVal_43 = _ck(_v, 61, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_3"]);

          _ck(_v, 60, 0, currVal_43);

          var currVal_44 = _ck(_v, 64, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_3"]);

          _ck(_v, 63, 0, currVal_44);

          var currVal_46 = _ck(_v, 69, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_4"]);

          _ck(_v, 68, 0, currVal_46);

          var currVal_47 = _ck(_v, 72, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_4"]);

          _ck(_v, 71, 0, currVal_47);

          var currVal_48 = _ck(_v, 75, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_4"]);

          _ck(_v, 74, 0, currVal_48);

          var currVal_50 = _ck(_v, 80, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_5"]);

          _ck(_v, 79, 0, currVal_50);

          var currVal_51 = _ck(_v, 83, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_5"]);

          _ck(_v, 82, 0, currVal_51);

          var currVal_52 = _ck(_v, 86, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_5"]);

          _ck(_v, 85, 0, currVal_52);

          var currVal_54 = _ck(_v, 91, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_6"]);

          _ck(_v, 90, 0, currVal_54);

          var currVal_55 = _ck(_v, 94, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_6"]);

          _ck(_v, 93, 0, currVal_55);

          var currVal_56 = _ck(_v, 97, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_6"]);

          _ck(_v, 96, 0, currVal_56);

          var currVal_58 = _ck(_v, 102, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_7"]);

          _ck(_v, 101, 0, currVal_58);

          var currVal_59 = _ck(_v, 105, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_7"]);

          _ck(_v, 104, 0, currVal_59);

          var currVal_60 = _ck(_v, 108, 0, _co.auxDataProjectList[_v.parent.parent.context.index].flagsCarbono["valor_7"]);

          _ck(_v, 107, 0, currVal_60);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).required ? "" : null;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).id;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tabIndex;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getAriaLabel();

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getAriaLabelledby();

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).required.toString();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled.toString();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).errorState;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._optionIds : null;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).multiple;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._ariaDescribedby || null;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._getAriaActiveDescendant();

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).errorState;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).required;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).empty;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending;

          _ck(_v, 5, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]);

          var currVal_27 = _co.auxDataProjectList[_v.parent.parent.context.index].descripcionCarbono;

          _ck(_v, 20, 0, currVal_27);

          var currVal_37 = _co.auxDataProjectList[_v.parent.parent.context.index].valorCarbono;

          _ck(_v, 43, 0, currVal_37);

          var currVal_41 = _co.auxDataProjectList[_v.parent.parent.context.index].valorCarbono;

          _ck(_v, 54, 0, currVal_41);

          var currVal_45 = _co.auxDataProjectList[_v.parent.parent.context.index].valorCarbono;

          _ck(_v, 65, 0, currVal_45);

          var currVal_49 = _co.auxDataProjectList[_v.parent.parent.context.index].valorCarbono;

          _ck(_v, 76, 0, currVal_49);

          var currVal_53 = _co.auxDataProjectList[_v.parent.parent.context.index].valorCarbono;

          _ck(_v, 87, 0, currVal_53);

          var currVal_57 = _co.auxDataProjectList[_v.parent.parent.context.index].valorCarbono;

          _ck(_v, 98, 0, currVal_57);

          var currVal_61 = _co.auxDataProjectList[_v.parent.parent.context.index].valorCarbono;

          _ck(_v, 109, 0, currVal_61);
        });
      }

      function View_HomeEvamedComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.auxDataProjectList[_v.parent.context.index]["graficasCarbonoOResultados"]["resultados"];

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.auxDataProjectList[_v.parent.context.index]["graficasCarbonoOResultados"]["carbono"];

          _ck(_v, 4, 0, currVal_1);
        }, null);
      }

      function View_HomeEvamedComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 103, "mat-card", [["class", "card-project mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 42, "div", [["class", "header-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 25, "div", [["class", "more-vert"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 5, "button", [["aria-haspopup", "true"], ["aria-label", "Example icon-button with a menu"], ["class", "mat-focus-indicator mat-menu-trigger"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("mousedown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleMousedown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleKeydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleClick($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_23__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"]], {
          menu: [0, "menu"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-icon", [["class", "more-vert-custom mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["more_vert"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 18, "mat-menu", [["class", "custom-menu"]], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MAT_MENU_DEFAULT_OPTIONS"]], {
          panelClass: [0, "panelClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          _allItems: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          items: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          lazyContent: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 3, "button", [["class", "custom-item mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._checkDisabled($event) !== false;
            ad = pd_0 && ad;
          }

          if ("mouseenter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._handleMouseEnter() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _co.duplicateProject(_v.context.$implicit.id) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, [[14, 4], [15, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duplicar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 3, "button", [["class", "custom-item mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._checkDisabled($event) !== false;
            ad = pd_0 && ad;
          }

          if ("mouseenter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleMouseEnter() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _co.renameProject(_v.context.$implicit.id) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 180224, [[14, 4], [15, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Renombrar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 3, "button", [["class", "custom-item mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._checkDisabled($event) !== false;
            ad = pd_0 && ad;
          }

          if ("mouseenter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleMouseEnter() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _co.deleteProject(_v.context.$implicit.id) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 180224, [[14, 4], [15, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Eliminar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 15, "div", [["class", "container-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "div", [["class", "title-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 12, "div", [["class", "date-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 58, "mat-tab-group", [["class", "container-principal-tab mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          _allTabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabGroup"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 16777216, null, null, 48, "mat-tab", [["class", "label-principal-tab"], ["label", "Configurar informaci\xF3n"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 770048, [[17, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 19, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 0, 44, "div", [["class", "second-mat-tab-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 43, "mat-tab-group", [["class", "container-second-tab mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
          _allTabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabGroup"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 16777216, null, null, 6, "mat-tab", [["class", "label-second-tab"], ["label", "Producci\xF3n"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 770048, [[20, 4], [17, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 0, 2, "section", [["class", "grid-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 16777216, null, null, 6, "mat-tab", [["class", "label-second-tab"], ["label", "Construcci\xF3n"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 770048, [[20, 4], [17, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 24, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, 0, 2, "section", [["class", "grid-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 16777216, null, null, 18, "mat-tab", [["class", "label-second-tab"], ["label", "Uso"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 770048, [[20, 4], [17, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 26, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, 0, 14, "section", [["class", "grid-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 13, "div", [["class", "subseccion"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_11__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ThemeService"]], {
          datasets: [0, "datasets"],
          options: [1, "options"],
          chartType: [2, "chartType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Consumo energ\xE9tico total "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["requerido anualmente"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 2, "button", [["class", "yellow-button-mini mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.updateUso(_v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Editar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 16777216, null, null, 6, "mat-tab", [["class", "label-second-tab"], ["label", "Fin de vida"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 770048, [[20, 4], [17, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 28, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, 0, 2, "section", [["class", "grid-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 16777216, null, null, 5, "mat-tab", [["class", "label-principal-tab"], ["label", "Resultados"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 770048, [[17, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MAT_TAB_GROUP"]]], {
          textLabel: [0, "textLabel"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 30, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HomeEvamedComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11);

          _ck(_v, 6, 0, currVal_5);

          _ck(_v, 8, 0);

          var currVal_8 = "custom-menu";

          _ck(_v, 11, 0, currVal_8);

          var currVal_31 = _v.context.$implicit.use_id == 1;

          _ck(_v, 34, 0, currVal_31);

          var currVal_32 = _v.context.$implicit.use_id == 2;

          _ck(_v, 36, 0, currVal_32);

          var currVal_33 = _v.context.$implicit.use_id == 3;

          _ck(_v, 38, 0, currVal_33);

          var currVal_34 = _v.context.$implicit.use_id == 4;

          _ck(_v, 40, 0, currVal_34);

          var currVal_35 = _v.context.$implicit.use_id == 5;

          _ck(_v, 42, 0, currVal_35);

          var currVal_36 = _v.context.$implicit.use_id == 6;

          _ck(_v, 44, 0, currVal_36);

          var currVal_39 = "Configurar informaci\xF3n";

          _ck(_v, 50, 0, currVal_39);

          var currVal_42 = "Producci\xF3n";

          _ck(_v, 59, 0, currVal_42);

          var currVal_43 = _co.serchSections(_v.context.$implicit.id);

          _ck(_v, 64, 0, currVal_43);

          var currVal_44 = "Construcci\xF3n";

          _ck(_v, 66, 0, currVal_44);

          var currVal_45 = _co.serchConstructiveSection(_v.context.$implicit.id);

          _ck(_v, 71, 0, currVal_45);

          var currVal_46 = "Uso";

          _ck(_v, 73, 0, currVal_46);

          var currVal_47 = _co.auxDatosGraficaUso[_v.context.index];
          var currVal_48 = _co.pieChartOptions_elementos;
          var currVal_49 = _co.pieChartType;

          _ck(_v, 80, 0, currVal_47, currVal_48, currVal_49);

          var currVal_50 = _co.serchUseData(_v.context.$implicit.id);

          _ck(_v, 87, 0, currVal_50);

          var currVal_53 = "Fin de vida";

          _ck(_v, 92, 0, currVal_53);

          var currVal_54 = _co.serchEndLifeSection(_v.context.$implicit.id);

          _ck(_v, 97, 0, currVal_54);

          var currVal_55 = "Resultados";

          _ck(_v, 99, 0, currVal_55);

          var currVal_56 = _co.cargaDatosCalculo;

          _ck(_v, 103, 0, currVal_56);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationMode === "NoopAnimations";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).menuOpen || null;
          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).menu.panelId : null;

          _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).inline;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).color !== "warn";

          _ck(_v, 7, 0, currVal_6, currVal_7);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).role;

          var currVal_10 = true;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._highlighted;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._triggersSubmenu;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._getTabIndex();

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled.toString();

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null;

          _ck(_v, 17, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).role;

          var currVal_17 = true;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._highlighted;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._triggersSubmenu;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._getTabIndex();

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled.toString();

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled || null;

          _ck(_v, 21, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).role;

          var currVal_24 = true;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._highlighted;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._triggersSubmenu;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._getTabIndex();

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled.toString();

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled || null;

          _ck(_v, 25, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

          var currVal_30 = _v.context.$implicit.name_project;

          _ck(_v, 31, 0, currVal_30);

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).dynamicHeight;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).headerPosition === "below";

          _ck(_v, 45, 0, currVal_37, currVal_38);

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).dynamicHeight;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).headerPosition === "below";

          _ck(_v, 54, 0, currVal_40, currVal_41);

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).disabled || null;
          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89)._animationMode === "NoopAnimations";

          _ck(_v, 88, 0, currVal_51, currVal_52);
        });
      }

      function View_HomeEvamedComponent_32(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "button", [["class", "yellow-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToAdmin() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Administrador "]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).align === "end";

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations";

          _ck(_v, 2, 0, currVal_1, currVal_2);
        });
      }

      function View_HomeEvamedComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          chartDir: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 68, "div", [["class", "principal-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 35, "div", [["class", "content-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 30, "div", [["class", "content-header-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "title-standard-second"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Tus proyectos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 27, "div", [["class", "filter-options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "select-general mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_28__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, [[4, 4], [5, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.filtroUsoSeleccionado = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("selectionChange" === en) {
            var pd_4 = _co.selectUse(_co.filtroUsoSeleccionado) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_CONFIG"]]], null, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4], [3, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_HomeEvamedComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeEvamedComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 31, "div", [["class", "description-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 30, "mat-card", [["class", "user-card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 3, "mat-card-header", [["class", "image-container mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 1, "div", [["class", "profile-image mat-card-avatar"], ["mat-card-avatar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, 0, 5, "mat-card-content", [["class", "content-standard-card mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "strong", [["class", "label-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](49, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "p", [["class", "label-profile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](51, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, 0, 6, "mat-card-content", [["class", "content-estadisticas mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](56, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Proyectos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 0, 4, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "button", [["class", "yellow-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.openDialogANP() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Crear nuevo proyecto "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HomeEvamedComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, 0, 4, "mat-card-actions", [["class", "content-logout-button mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 2, "button", [["class", "melon-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.logout() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Cerrar sesi\xF3n "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_22 = "outline";

          _ck(_v, 9, 0, currVal_22);

          var currVal_45 = _co.filtroUsoSeleccionado;

          _ck(_v, 25, 0, currVal_45);

          _ck(_v, 27, 0);

          var currVal_46 = _co.filtroCatalogoUsos;

          _ck(_v, 34, 0, currVal_46);

          var currVal_47 = _co.countProjectList === 0;

          _ck(_v, 36, 0, currVal_47);

          var currVal_48 = _co.projectsList;

          _ck(_v, 38, 0, currVal_48);

          var currVal_56 = _co.email === "arqarvizup@gmail.com";

          _ck(_v, 65, 0, currVal_56);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).appearance == "standard";
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).appearance == "fill";
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).appearance == "outline";
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).appearance == "legacy";

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._control.errorState;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._canLabelFloat;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldLabelFloat();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._hasFloatingLabel();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._hideControlPlaceholder();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._control.disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._control.autofilled;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._control.focused;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color == "accent";
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color == "warn";

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldForward("untouched");

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldForward("touched");

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldForward("pristine");

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldForward("dirty");

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldForward("valid");

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldForward("invalid");

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._shouldForward("pending");

          var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationsEnabled;

          _ck(_v, 8, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).id;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).tabIndex;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._getAriaLabel();

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._getAriaLabelledby();

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).required.toString();

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled.toString();

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).errorState;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._optionIds : null;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).multiple;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._ariaDescribedby || null;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._getAriaActiveDescendant();

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).errorState;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).required;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).empty;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending;

          _ck(_v, 23, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]);

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._animationMode === "NoopAnimations";

          _ck(_v, 40, 0, currVal_49);

          var currVal_50 = _co.user;

          _ck(_v, 49, 0, currVal_50);

          var currVal_51 = _co.sector;

          _ck(_v, 51, 0, currVal_51);

          var currVal_52 = _co.countProjectList;

          _ck(_v, 56, 0, currVal_52);

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).align === "end";

          _ck(_v, 59, 0, currVal_53);

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).disabled || null;
          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._animationMode === "NoopAnimations";

          _ck(_v, 61, 0, currVal_54, currVal_55);

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).align === "end";

          _ck(_v, 66, 0, currVal_57);

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).disabled || null;
          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69)._animationMode === "NoopAnimations";

          _ck(_v, 68, 0, currVal_58, currVal_59);
        });
      }

      function View_HomeEvamedComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home-evamed", [], null, null, null, View_HomeEvamedComponent_0, RenderType_HomeEvamedComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_evamed_component__WEBPACK_IMPORTED_MODULE_29__["HomeEvamedComponent"], [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_30__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_33__["AnalisisService"], _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_34__["MaterialsService"], _calculos_calculos__WEBPACK_IMPORTED_MODULE_35__["Calculos"], _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_36__["ProjectsService"], _core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_37__["CatalogsService"], _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_36__["ProjectsService"], _core_services_construction_stage_construction_stage_service__WEBPACK_IMPORTED_MODULE_38__["ConstructionStageService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_39__["UserService"], _core_services_end_life_end_life_service__WEBPACK_IMPORTED_MODULE_40__["EndLifeService"], _core_services_electricity_consumption_electricit_consumption_service__WEBPACK_IMPORTED_MODULE_41__["ElectricitConsumptionService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var HomeEvamedComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home-evamed", _home_evamed_component__WEBPACK_IMPORTED_MODULE_29__["HomeEvamedComponent"], View_HomeEvamedComponent_Host_0, {}, {}, []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-evamed-home-evamed-module-ngfactory-es5.js.map