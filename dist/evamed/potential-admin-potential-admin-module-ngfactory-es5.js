(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["potential-admin-potential-admin-module-ngfactory"], {
    /***/
    "2gY3":
    /*!***********************************************************************************************!*\
      !*** ./src/app/potential-admin/components/add-potential/add-potential.component.ngfactory.js ***!
      \***********************************************************************************************/

    /*! exports provided: RenderType_AddPotentialComponent, View_AddPotentialComponent_0, View_AddPotentialComponent_Host_0, AddPotentialComponentNgFactory */

    /***/
    function gY3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AddPotentialComponent", function () {
        return RenderType_AddPotentialComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddPotentialComponent_0", function () {
        return View_AddPotentialComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AddPotentialComponent_Host_0", function () {
        return View_AddPotentialComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPotentialComponentNgFactory", function () {
        return AddPotentialComponentNgFactory;
      });
      /* harmony import */


      var _add_potential_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-potential.component.scss.shim.ngstyle */
      "Bg07");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/core/index.ngfactory */
      "CeGm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/card/index.ngfactory */
      "YHaq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/select/index.ngfactory */
      "Y1Mv");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _add_potential_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./add-potential.component */
      "vGGn");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AddPotentialComponent = [_add_potential_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AddPotentialComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AddPotentialComponent,
        data: {}
      });

      function View_AddPotentialComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[6, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" La abrebiatura es "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["requerido"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_AddPotentialComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[15, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" El nombre es "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["requerido"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_AddPotentialComponent_3(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[28, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit.name_unit;

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

          var currVal_9 = _v.context.$implicit.name_unit;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_AddPotentialComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[24, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Unidad es un campo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["requerido"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_AddPotentialComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 101, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false;
            ad = pd_1 && ad;
          }

          if ("ngSubmit" === en) {
            var pd_2 = _co.addPotentialType($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, {
          ngSubmit: "ngSubmit"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agregar potencial de impacto ambiental "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 85, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 83, "mat-card", [["class", "custom-card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 25, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 23, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 22, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 21, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
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
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "name_potential_type"], ["matInput", ""], ["placeholder", "Abrebiatura"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._onInput() !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 5, 1, null, View_AddPotentialComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 0, 25, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 23, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 22, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 21, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
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
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "name_complete_potential_type"], ["matInput", ""], ["placeholder", "Nombre"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._onInput() !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 5, 1, null, View_AddPotentialComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, 0, 29, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 27, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 26, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 25, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["formControlName", "unit_potential_type"], ["placeholder", "Unidad"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_CONFIG"]]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[19, 4], [20, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_AddPotentialComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 5, 1, null, View_AddPotentialComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 4, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""], ["type", "submit"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Agregar"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.form;

          _ck(_v, 2, 0, currVal_7);

          _ck(_v, 7, 0);

          var currVal_32 = "outline";

          _ck(_v, 21, 0, currVal_32);

          var currVal_49 = "name_potential_type";

          _ck(_v, 34, 0, currVal_49);

          var currVal_50 = "Abrebiatura";

          _ck(_v, 36, 0, currVal_50);

          var currVal_51 = _co.form.controls["name_potential_type"].hasError("required");

          _ck(_v, 40, 0, currVal_51);

          var currVal_74 = "outline";

          _ck(_v, 47, 0, currVal_74);

          var currVal_91 = "name_complete_potential_type";

          _ck(_v, 60, 0, currVal_91);

          var currVal_92 = "Nombre";

          _ck(_v, 62, 0, currVal_92);

          var currVal_93 = _co.form.controls["name_complete_potential_type"].hasError("required");

          _ck(_v, 66, 0, currVal_93);

          var currVal_116 = "outline";

          _ck(_v, 72, 0, currVal_116);

          var currVal_139 = "unit_potential_type";

          _ck(_v, 85, 0, currVal_139);

          var currVal_140 = "Unidad";

          _ck(_v, 87, 0, currVal_140);

          var currVal_141 = _co.units;

          _ck(_v, 94, 0, currVal_141);

          var currVal_142 = _co.form.controls["unit_potential_type"].hasError("required");

          _ck(_v, 96, 0, currVal_142);

          var currVal_145 = "primary";

          _ck(_v, 100, 0, currVal_145);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).id;

          _ck(_v, 6, 0, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations";

          _ck(_v, 13, 0, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "standard";
          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "fill";
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "outline";
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "legacy";

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.errorState;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._canLabelFloat;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldLabelFloat();

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._hasFloatingLabel();

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._hideControlPlaceholder();

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.disabled;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.autofilled;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.focused;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).color == "accent";
          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).color == "warn";

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("untouched");

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("touched");

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("pristine");

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("dirty");

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("valid");

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("invalid");

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("pending");

          var currVal_31 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationsEnabled;

          _ck(_v, 19, 1, [currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31]);

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._isServer;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).id;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).placeholder;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).required;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._isNativeSelect || null;
          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._ariaDescribedby || null;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).errorState;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).required.toString();

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending;

          _ck(_v, 31, 1, [currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48]);

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "standard";
          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "fill";
          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "outline";
          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "legacy";

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.errorState;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._canLabelFloat;

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldLabelFloat();

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._hasFloatingLabel();

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._hideControlPlaceholder();

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.disabled;

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.autofilled;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.focused;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).color == "accent";
          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).color == "warn";

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("untouched");

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("touched");

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("pristine");

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("dirty");

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("valid");

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("invalid");

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("pending");

          var currVal_73 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._animationsEnabled;

          _ck(_v, 45, 1, [currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73]);

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._isServer;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).id;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).placeholder;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).disabled;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).required;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._isNativeSelect || null;
          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._ariaDescribedby || null;

          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).errorState;

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).required.toString();

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassUntouched;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassTouched;

          var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPristine;

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassDirty;

          var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassValid;

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassInvalid;

          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPending;

          _ck(_v, 57, 1, [currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90]);

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "standard";
          var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "fill";
          var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "outline";
          var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "legacy";

          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.errorState;

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._canLabelFloat;

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldLabelFloat();

          var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._hasFloatingLabel();

          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._hideControlPlaceholder();

          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.disabled;

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.autofilled;

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.focused;

          var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).color == "accent";
          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).color == "warn";

          var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("untouched");

          var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("touched");

          var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("pristine");

          var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("dirty");

          var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("valid");

          var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("invalid");

          var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("pending");

          var currVal_115 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._animationsEnabled;

          _ck(_v, 71, 1, [currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115]);

          var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).id;

          var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).tabIndex;

          var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._getAriaLabel();

          var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._getAriaLabelledby();

          var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).required.toString();

          var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).disabled.toString();

          var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errorState;

          var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._optionIds : null;

          var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).multiple;

          var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._ariaDescribedby || null;

          var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._getAriaActiveDescendant();

          var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).disabled;

          var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errorState;

          var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).required;

          var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).empty;

          var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassUntouched;

          var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassTouched;

          var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassPristine;

          var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassDirty;

          var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassValid;

          var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassInvalid;

          var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassPending;

          _ck(_v, 83, 1, [currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138]);

          var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).disabled || null;
          var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._animationMode === "NoopAnimations";

          _ck(_v, 99, 0, currVal_143, currVal_144);
        });
      }

      function View_AddPotentialComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-potential", [], null, null, null, View_AddPotentialComponent_0, RenderType_AddPotentialComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_potential_component__WEBPACK_IMPORTED_MODULE_22__["AddPotentialComponent"], [_core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_23__["MaterialsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AddPotentialComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-potential", _add_potential_component__WEBPACK_IMPORTED_MODULE_22__["AddPotentialComponent"], View_AddPotentialComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "7PrM":
    /*!***********************************************************!*\
      !*** ./src/app/potential-admin/potential-admin.module.ts ***!
      \***********************************************************/

    /*! exports provided: PotentialAdminModule */

    /***/
    function PrM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PotentialAdminModule", function () {
        return PotentialAdminModule;
      });

      var PotentialAdminModule = function PotentialAdminModule() {
        _classCallCheck(this, PotentialAdminModule);
      };
      /***/

    },

    /***/
    "AEA3":
    /*!*********************************************************************!*\
      !*** ./src/app/potential-admin/potential-admin.module.ngfactory.js ***!
      \*********************************************************************/

    /*! exports provided: PotentialAdminModuleNgFactory */

    /***/
    function AEA3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PotentialAdminModuleNgFactory", function () {
        return PotentialAdminModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _potential_admin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./potential-admin.module */
      "7PrM");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _components_potential_admin_potential_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/potential-admin/potential-admin.component.ngfactory */
      "F0aL");
      /* harmony import */


      var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
      "9cE2");
      /* harmony import */


      var _components_add_potential_add_potential_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/add-potential/add-potential.component.ngfactory */
      "2gY3");
      /* harmony import */


      var _components_update_potential_update_potential_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/update-potential/update-potential.component.ngfactory */
      "UaUB");
      /* harmony import */


      var _components_delete_potential_delete_potential_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/delete-potential/delete-potential.component.ngfactory */
      "xrLz");
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


      var _potential_admin_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./potential-admin-routing.module */
      "QPmm");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "HeVh");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "q59W");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      "GF+f");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _components_potential_admin_potential_admin_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./components/potential-admin/potential-admin.component */
      "KtqO");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var PotentialAdminModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_potential_admin_module__WEBPACK_IMPORTED_MODULE_1__["PotentialAdminModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _components_potential_admin_potential_admin_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["PotentialAdminComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _components_add_potential_add_potential_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AddPotentialComponentNgFactory"], _components_update_potential_update_potential_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["UpdatePotentialComponentNgFactory"], _components_delete_potential_delete_potential_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["DeletePotentialComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _potential_admin_routing_module__WEBPACK_IMPORTED_MODULE_20__["PotentialAdminRoutingModule"], _potential_admin_routing_module__WEBPACK_IMPORTED_MODULE_20__["PotentialAdminRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_28__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_28__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_40__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_40__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_42__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_42__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _material_material_module__WEBPACK_IMPORTED_MODULE_46__["MaterialModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_46__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_48__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_48__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _potential_admin_module__WEBPACK_IMPORTED_MODULE_1__["PotentialAdminModule"], _potential_admin_module__WEBPACK_IMPORTED_MODULE_1__["PotentialAdminModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], function () {
          return [[{
            path: "",
            component: _components_potential_admin_potential_admin_component__WEBPACK_IMPORTED_MODULE_49__["PotentialAdminComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "Bg07":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/potential-admin/components/add-potential/add-potential.component.scss.shim.ngstyle.js ***!
      \*******************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Bg07(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcG90ZW50aWFsLmNvbXBvbmVudC5zY3NzIn0= */"];
      /***/
    },

    /***/
    "F0aL":
    /*!***************************************************************************************************!*\
      !*** ./src/app/potential-admin/components/potential-admin/potential-admin.component.ngfactory.js ***!
      \***************************************************************************************************/

    /*! exports provided: RenderType_PotentialAdminComponent, View_PotentialAdminComponent_0, View_PotentialAdminComponent_Host_0, PotentialAdminComponentNgFactory */

    /***/
    function F0aL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PotentialAdminComponent", function () {
        return RenderType_PotentialAdminComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PotentialAdminComponent_0", function () {
        return View_PotentialAdminComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PotentialAdminComponent_Host_0", function () {
        return View_PotentialAdminComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PotentialAdminComponentNgFactory", function () {
        return PotentialAdminComponentNgFactory;
      });
      /* harmony import */


      var _potential_admin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./potential-admin.component.scss.shim.ngstyle */
      "y40o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
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


      var _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/table/index.ngfactory */
      "K0NO");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _potential_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./potential-admin.component */
      "KtqO");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PotentialAdminComponent = [_potential_admin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PotentialAdminComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PotentialAdminComponent,
        data: {}
      });

      function View_PotentialAdminComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Id. "]))], null, null);
      }

      function View_PotentialAdminComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.id;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_PotentialAdminComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Abrebiatura "]))], null, null);
      }

      function View_PotentialAdminComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.name_potential_type;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_PotentialAdminComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Nombre "]))], null, null);
      }

      function View_PotentialAdminComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.name_complete_potential_type;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_PotentialAdminComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Unidad "]))], null, null);
      }

      function View_PotentialAdminComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.unit_potential_type;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_PotentialAdminComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Acciones "]))], null, null);
      }

      function View_PotentialAdminComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.updatePotential($event, _v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Editar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "warn"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deletePotential($event, _v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Eliminar"]))], function (_ck, _v) {
          var currVal_4 = "warn";

          _ck(_v, 6, 0, currVal_4);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations";

          _ck(_v, 2, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null;
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations";

          _ck(_v, 5, 0, currVal_2, currVal_3);
        });
      }

      function View_PotentialAdminComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatHeaderRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], [], null, null)], null, null);
      }

      function View_PotentialAdminComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], [], null, null)], null, null);
      }

      function View_PotentialAdminComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Administrador de potenciales impactos ambientales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "button", [["class", "yellow-button mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.addPotential($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Agregar potencial "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToAdmin() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Regresar a Administrador "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 78, "table", [["class", "mat-elevation-z8 mat-table"], ["mat-table", ""]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatTable_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"]], {
          dataSource: [0, "dataSource"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _contentColumnDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          _contentRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _contentHeaderRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          _contentFooterRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[6, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[5, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[9, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[12, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[11, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[14, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[18, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[17, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_PotentialAdminComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"]])], function (_ck, _v) {
          var _co = _v.component;
          var currVal_4 = "primary";

          _ck(_v, 7, 0, currVal_4);

          var currVal_5 = _co.ListPotential;

          _ck(_v, 11, 0, currVal_5);

          var currVal_6 = "id";

          _ck(_v, 19, 0, currVal_6);

          var currVal_7 = "name_potential_type";

          _ck(_v, 32, 0, currVal_7);

          var currVal_8 = "name_complete_potential_type";

          _ck(_v, 45, 0, currVal_8);

          var currVal_9 = "unit_potential_type";

          _ck(_v, 58, 0, currVal_9);

          var currVal_10 = "actions";

          _ck(_v, 71, 0, currVal_10);

          var currVal_11 = _co.displayedColumns;

          _ck(_v, 83, 0, currVal_11);

          var currVal_12 = _co.displayedColumns;

          _ck(_v, 86, 0, currVal_12);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations";

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled || null;
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationMode === "NoopAnimations";

          _ck(_v, 6, 0, currVal_2, currVal_3);
        });
      }

      function View_PotentialAdminComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-potential-admin", [], null, null, null, View_PotentialAdminComponent_0, RenderType_PotentialAdminComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _potential_admin_component__WEBPACK_IMPORTED_MODULE_12__["PotentialAdminComponent"], [_core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_13__["MaterialsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PotentialAdminComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-potential-admin", _potential_admin_component__WEBPACK_IMPORTED_MODULE_12__["PotentialAdminComponent"], View_PotentialAdminComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "KtqO":
    /*!*****************************************************************************************!*\
      !*** ./src/app/potential-admin/components/potential-admin/potential-admin.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: PotentialAdminComponent */

    /***/
    function KtqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PotentialAdminComponent", function () {
        return PotentialAdminComponent;
      });
      /* harmony import */


      var _update_potential_update_potential_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../update-potential/update-potential.component */
      "RPvF");
      /* harmony import */


      var _delete_potential_delete_potential_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../delete-potential/delete-potential.component */
      "sH9U");
      /* harmony import */


      var _add_potential_add_potential_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../add-potential/add-potential.component */
      "vGGn");

      var PotentialAdminComponent = /*#__PURE__*/function () {
        function PotentialAdminComponent(materialsService, dialog, router) {
          _classCallCheck(this, PotentialAdminComponent);

          this.materialsService = materialsService;
          this.dialog = dialog;
          this.router = router;
          this.displayedColumns = ['id', 'name_potential_type', 'name_complete_potential_type', 'unit_potential_type', 'actions'];
        }

        _createClass(PotentialAdminComponent, [{
          key: "goToAdmin",
          value: function goToAdmin() {
            this.router.navigateByUrl('admin');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.materialsService.getPotentialTypes().subscribe(function (data) {
              _this.ListPotential = data;
            });
          }
        }, {
          key: "addPotential",
          value: function addPotential(event) {
            var _this2 = this;

            event.preventDefault();
            var dialogRef = this.dialog.open(_add_potential_add_potential_component__WEBPACK_IMPORTED_MODULE_2__["AddPotentialComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this2.ngOnInit();
            });
          }
        }, {
          key: "updatePotential",
          value: function updatePotential(event, potentialId) {
            var _this3 = this;

            event.preventDefault();
            var unitSelected = this.ListPotential.filter(function (data) {
              return data.id === potentialId;
            });
            var dialogRef = this.dialog.open(_update_potential_update_potential_component__WEBPACK_IMPORTED_MODULE_0__["UpdatePotentialComponent"], {
              width: '680px',
              data: unitSelected
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this3.ngOnInit();
            });
          }
        }, {
          key: "deletePotential",
          value: function deletePotential(event, potentialId) {
            var _this4 = this;

            event.preventDefault();
            var unitSelected = this.ListPotential.filter(function (data) {
              return data.id === potentialId;
            });
            var dialogRef = this.dialog.open(_delete_potential_delete_potential_component__WEBPACK_IMPORTED_MODULE_1__["DeletePotentialComponent"], {
              width: '680px',
              data: unitSelected
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this4.ngOnInit();
            });
          }
        }]);

        return PotentialAdminComponent;
      }();
      /***/

    },

    /***/
    "QPmm":
    /*!*******************************************************************!*\
      !*** ./src/app/potential-admin/potential-admin-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: PotentialAdminRoutingModule */

    /***/
    function QPmm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PotentialAdminRoutingModule", function () {
        return PotentialAdminRoutingModule;
      });
      /* harmony import */


      var _components_potential_admin_potential_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/potential-admin/potential-admin.component */
      "KtqO");

      var routes = [{
        path: '',
        component: _components_potential_admin_potential_admin_component__WEBPACK_IMPORTED_MODULE_0__["PotentialAdminComponent"]
      }];

      var PotentialAdminRoutingModule = function PotentialAdminRoutingModule() {
        _classCallCheck(this, PotentialAdminRoutingModule);
      };
      /***/

    },

    /***/
    "RPvF":
    /*!*******************************************************************************************!*\
      !*** ./src/app/potential-admin/components/update-potential/update-potential.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: UpdatePotentialComponent */

    /***/
    function RPvF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePotentialComponent", function () {
        return UpdatePotentialComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var UpdatePotentialComponent = /*#__PURE__*/function () {
        function UpdatePotentialComponent(materialsService, formBuilder, dialogRef, data) {
          var _this5 = this;

          _classCallCheck(this, UpdatePotentialComponent);

          this.materialsService = materialsService;
          this.formBuilder = formBuilder;
          this.dialogRef = dialogRef;
          this.data = data;
          this.buildForm();
          this.materialsService.getUnits().subscribe(function (data) {
            _this5.units = data;
          });
        }

        _createClass(UpdatePotentialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.data[0].id;
            this.form.patchValue(this.data[0]);
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              name_complete_potential_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              name_potential_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              unit_potential_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "updatePotentialType",
          value: function updatePotentialType(event) {
            var _this6 = this;

            event.preventDefault();

            if (this.form.valid) {
              var unit = this.form.value;
              this.materialsService.updatePotentialTypes(this.id, unit).subscribe(function (data) {
                _this6.onNoClick();
              });
            }
          }
        }]);

        return UpdatePotentialComponent;
      }();
      /***/

    },

    /***/
    "UaUB":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/potential-admin/components/update-potential/update-potential.component.ngfactory.js ***!
      \*****************************************************************************************************/

    /*! exports provided: RenderType_UpdatePotentialComponent, View_UpdatePotentialComponent_0, View_UpdatePotentialComponent_Host_0, UpdatePotentialComponentNgFactory */

    /***/
    function UaUB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_UpdatePotentialComponent", function () {
        return RenderType_UpdatePotentialComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_UpdatePotentialComponent_0", function () {
        return View_UpdatePotentialComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_UpdatePotentialComponent_Host_0", function () {
        return View_UpdatePotentialComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePotentialComponentNgFactory", function () {
        return UpdatePotentialComponentNgFactory;
      });
      /* harmony import */


      var _update_potential_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./update-potential.component.scss.shim.ngstyle */
      "bnxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/core/index.ngfactory */
      "CeGm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/card/index.ngfactory */
      "YHaq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/select/index.ngfactory */
      "Y1Mv");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _update_potential_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./update-potential.component */
      "RPvF");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_UpdatePotentialComponent = [_update_potential_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_UpdatePotentialComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_UpdatePotentialComponent,
        data: {}
      });

      function View_UpdatePotentialComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[6, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" La abrebiatura es "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["requerido"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_UpdatePotentialComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[15, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" El nombre es "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["requerido"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_UpdatePotentialComponent_3(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[28, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit.name_unit;

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

          var currVal_9 = _v.context.$implicit.name_unit;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_UpdatePotentialComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[24, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Unidad es un campo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["requerido"]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_UpdatePotentialComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 101, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false;
            ad = pd_1 && ad;
          }

          if ("ngSubmit" === en) {
            var pd_2 = _co.updatePotentialType($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, {
          ngSubmit: "ngSubmit"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Agregar potencial de impacto ambiental "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 85, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 83, "mat-card", [["class", "custom-card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 25, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 23, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 22, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 21, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
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
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "name_potential_type"], ["matInput", ""], ["placeholder", "Abrebiatura"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._onInput() !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 5, 1, null, View_UpdatePotentialComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 0, 25, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 23, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 22, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 21, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
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
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "name_complete_potential_type"], ["matInput", ""], ["placeholder", "Nombre"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("focus" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._focusChanged(true) !== false;
            ad = pd_4 && ad;
          }

          if ("blur" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._focusChanged(false) !== false;
            ad = pd_5 && ad;
          }

          if ("input" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._onInput() !== false;
            ad = pd_6 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 5, 1, null, View_UpdatePotentialComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, 0, 29, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 27, "div", [["class", "Row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 26, "div", [["class", "Col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 25, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["formControlName", "unit_potential_type"], ["placeholder", "Unidad"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_CONFIG"]]], {
          placeholder: [0, "placeholder"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[19, 4], [20, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_UpdatePotentialComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 5, 1, null, View_UpdatePotentialComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 4, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""], ["type", "submit"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Agregar"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.form;

          _ck(_v, 2, 0, currVal_7);

          _ck(_v, 7, 0);

          var currVal_32 = "outline";

          _ck(_v, 21, 0, currVal_32);

          var currVal_49 = "name_potential_type";

          _ck(_v, 34, 0, currVal_49);

          var currVal_50 = "Abrebiatura";

          _ck(_v, 36, 0, currVal_50);

          var currVal_51 = _co.form.controls["name_potential_type"].hasError("required");

          _ck(_v, 40, 0, currVal_51);

          var currVal_74 = "outline";

          _ck(_v, 47, 0, currVal_74);

          var currVal_91 = "name_complete_potential_type";

          _ck(_v, 60, 0, currVal_91);

          var currVal_92 = "Nombre";

          _ck(_v, 62, 0, currVal_92);

          var currVal_93 = _co.form.controls["name_complete_potential_type"].hasError("required");

          _ck(_v, 66, 0, currVal_93);

          var currVal_116 = "outline";

          _ck(_v, 72, 0, currVal_116);

          var currVal_139 = "unit_potential_type";

          _ck(_v, 85, 0, currVal_139);

          var currVal_140 = "Unidad";

          _ck(_v, 87, 0, currVal_140);

          var currVal_141 = _co.units;

          _ck(_v, 94, 0, currVal_141);

          var currVal_142 = _co.form.controls["unit_potential_type"].hasError("required");

          _ck(_v, 96, 0, currVal_142);

          var currVal_145 = "primary";

          _ck(_v, 100, 0, currVal_145);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).id;

          _ck(_v, 6, 0, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations";

          _ck(_v, 13, 0, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "standard";
          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "fill";
          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "outline";
          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).appearance == "legacy";

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.errorState;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._canLabelFloat;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldLabelFloat();

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._hasFloatingLabel();

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._hideControlPlaceholder();

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.disabled;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.autofilled;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._control.focused;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).color == "accent";
          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).color == "warn";

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("untouched");

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("touched");

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("pristine");

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("dirty");

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("valid");

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("invalid");

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._shouldForward("pending");

          var currVal_31 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationsEnabled;

          _ck(_v, 19, 1, [currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31]);

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._isServer;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).id;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).placeholder;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).required;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._isNativeSelect || null;
          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._ariaDescribedby || null;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).errorState;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).required.toString();

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending;

          _ck(_v, 31, 1, [currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48]);

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "standard";
          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "fill";
          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "outline";
          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).appearance == "legacy";

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.errorState;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._canLabelFloat;

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldLabelFloat();

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._hasFloatingLabel();

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._hideControlPlaceholder();

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.disabled;

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.autofilled;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._control.focused;

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).color == "accent";
          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).color == "warn";

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("untouched");

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("touched");

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("pristine");

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("dirty");

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("valid");

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("invalid");

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._shouldForward("pending");

          var currVal_73 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._animationsEnabled;

          _ck(_v, 45, 1, [currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73]);

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._isServer;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).id;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).placeholder;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).disabled;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).required;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._isNativeSelect || null;
          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62)._ariaDescribedby || null;

          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).errorState;

          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).required.toString();

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassUntouched;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassTouched;

          var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPristine;

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassDirty;

          var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassValid;

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassInvalid;

          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).ngClassPending;

          _ck(_v, 57, 1, [currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90]);

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "standard";
          var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "fill";
          var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "outline";
          var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).appearance == "legacy";

          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.errorState;

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._canLabelFloat;

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldLabelFloat();

          var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._hasFloatingLabel();

          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._hideControlPlaceholder();

          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.disabled;

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.autofilled;

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._control.focused;

          var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).color == "accent";
          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).color == "warn";

          var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("untouched");

          var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("touched");

          var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("pristine");

          var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("dirty");

          var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("valid");

          var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("invalid");

          var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._shouldForward("pending");

          var currVal_115 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._animationsEnabled;

          _ck(_v, 71, 1, [currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115]);

          var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).id;

          var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).tabIndex;

          var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._getAriaLabel();

          var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._getAriaLabelledby();

          var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).required.toString();

          var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).disabled.toString();

          var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errorState;

          var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._optionIds : null;

          var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).multiple;

          var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._ariaDescribedby || null;

          var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87)._getAriaActiveDescendant();

          var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).disabled;

          var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errorState;

          var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).required;

          var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).empty;

          var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassUntouched;

          var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassTouched;

          var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassPristine;

          var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassDirty;

          var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassValid;

          var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassInvalid;

          var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).ngClassPending;

          _ck(_v, 83, 1, [currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138]);

          var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).disabled || null;
          var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._animationMode === "NoopAnimations";

          _ck(_v, 99, 0, currVal_143, currVal_144);
        });
      }

      function View_UpdatePotentialComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-update-potential", [], null, null, null, View_UpdatePotentialComponent_0, RenderType_UpdatePotentialComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _update_potential_component__WEBPACK_IMPORTED_MODULE_22__["UpdatePotentialComponent"], [_core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_23__["MaterialsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var UpdatePotentialComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-update-potential", _update_potential_component__WEBPACK_IMPORTED_MODULE_22__["UpdatePotentialComponent"], View_UpdatePotentialComponent_Host_0, {}, {}, []);
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
    "bnxh":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/potential-admin/components/update-potential/update-potential.component.scss.shim.ngstyle.js ***!
      \*************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function bnxh(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcG90ZW50aWFsLmNvbXBvbmVudC5zY3NzIn0= */"];
      /***/
    },

    /***/
    "dxGk":
    /*!**************************************************************!*\
      !*** ./src/app/core/services/materials/materials.service.ts ***!
      \**************************************************************/

    /*! exports provided: MaterialsService */

    /***/
    function dxGk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialsService", function () {
        return MaterialsService;
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

      var MaterialsService = /*#__PURE__*/function () {
        function MaterialsService(http) {
          _classCallCheck(this, MaterialsService);

          this.http = http;
        }

        _createClass(MaterialsService, [{
          key: "getMaterialSchemeProyects",
          value: function getMaterialSchemeProyects() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_scheme_project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getConstructionStage",
          value: function getConstructionStage() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_construction_stage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getACR",
          value: function getACR() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_annual_consumption_required).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getEDCP",
          value: function getEDCP() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_electricity_consumption_deconstructive_process).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "searchMaterial",
          value: function searchMaterial(material) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_materials + '?search=' + material).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addMaterial",
          value: function addMaterial(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_materials, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteMaterial",
          value: function deleteMaterial(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_materials).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteMaterialSchemeData",
          value: function deleteMaterialSchemeData(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_material_scheme_data).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateMaterial",
          value: function updateMaterial(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_materials).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getfake",
          value: function getfake() {
            return this.http.get('http://127.0.0.1:8000/api-projects/material-scheme-data/' //'https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/',
            ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteFake",
          value: function deleteFake(id) {
            return this.http["delete"]("https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/".concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addFake",
          value: function addFake(schemeData) {
            return this.http.post('https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/', schemeData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_units).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addUnit",
          value: function addUnit(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_units, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateUnit",
          value: function updateUnit(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_units).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteUnit",
          value: function deleteUnit(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_units).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "addPotentialTypes",
          value: function addPotentialTypes(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potetnial_types, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updatePotentialTypes",
          value: function updatePotentialTypes(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potetnial_types).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deletePotentialType",
          value: function deletePotentialType(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potetnial_types).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getStandards",
          value: function getStandards() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_standards).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getDbMaterials",
          value: function getDbMaterials() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_db_material).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addDbMaterial",
          value: function addDbMaterial(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_db_material, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateDbMaterial",
          value: function updateDbMaterial(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_db_material).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteDbMaterial",
          value: function deleteDbMaterial(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_db_material).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "addTransport",
          value: function addTransport(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_transports, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateTransport",
          value: function updateTransport(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_transports).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteTransport",
          value: function deleteTransport(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_transports).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "addPotentialTransport",
          value: function addPotentialTransport(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potential_transport, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updatePotentialTransport",
          value: function updatePotentialTransport(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potential_transport).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deletePotentialTransport",
          value: function deletePotentialTransport(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_potential_transport).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMachinery",
          value: function getMachinery() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addMachinery",
          value: function addMachinery(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateMachinery",
          value: function updateMachinery(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteMachinery",
          value: function deleteMachinery(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMachineryPotential",
          value: function getMachineryPotential() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information_data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "addMachineryPotential",
          value: function addMachineryPotential(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information_data, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateMachineryPotential",
          value: function updateMachineryPotential(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information_data).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteMachineryPotential",
          value: function deleteMachineryPotential(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_source_information_data).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "addTypeEnergy",
          value: function addTypeEnergy(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateTypeEnergy",
          value: function updateTypeEnergy(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteTypeEnergy",
          value: function deleteTypeEnergy(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
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
          key: "addTypeEnergyData",
          value: function addTypeEnergyData(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy_data, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "updateTypeEnergyData",
          value: function updateTypeEnergyData(id, changes) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy_data).concat(id, "/"), changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "deleteTypeEnergyData",
          value: function deleteTypeEnergyData(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_type_energy_data).concat(id, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) {
              return data;
            }));
          }
        }]);

        return MaterialsService;
      }();

      MaterialsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        factory: function MaterialsService_Factory() {
          return new MaterialsService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        },
        token: MaterialsService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "sH9U":
    /*!*******************************************************************************************!*\
      !*** ./src/app/potential-admin/components/delete-potential/delete-potential.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: DeletePotentialComponent */

    /***/
    function sH9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeletePotentialComponent", function () {
        return DeletePotentialComponent;
      });

      var DeletePotentialComponent = /*#__PURE__*/function () {
        function DeletePotentialComponent(materialsService, dialogRef, data) {
          _classCallCheck(this, DeletePotentialComponent);

          this.materialsService = materialsService;
          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(DeletePotentialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }, {
          key: "deletePotential",
          value: function deletePotential(event, id) {
            var _this7 = this;

            event.preventDefault();
            this.materialsService.deletePotentialType(id).subscribe(function (data) {
              _this7.onNoClick();
            });
          }
        }]);

        return DeletePotentialComponent;
      }();
      /***/

    },

    /***/
    "tA77":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/potential-admin/components/delete-potential/delete-potential.component.scss.shim.ngstyle.js ***!
      \*************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function tA77(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcG90ZW50aWFsLmNvbXBvbmVudC5zY3NzIn0= */"];
      /***/
    },

    /***/
    "vGGn":
    /*!*************************************************************************************!*\
      !*** ./src/app/potential-admin/components/add-potential/add-potential.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AddPotentialComponent */

    /***/
    function vGGn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPotentialComponent", function () {
        return AddPotentialComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var AddPotentialComponent = /*#__PURE__*/function () {
        function AddPotentialComponent(materialsService, formBuilder, dialogRef, data) {
          var _this8 = this;

          _classCallCheck(this, AddPotentialComponent);

          this.materialsService = materialsService;
          this.formBuilder = formBuilder;
          this.dialogRef = dialogRef;
          this.data = data;
          this.buildForm();
          this.materialsService.getUnits().subscribe(function (data) {
            _this8.units = data;
          });
        }

        _createClass(AddPotentialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(this.data);
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              name_complete_potential_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              name_potential_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              unit_potential_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "addPotentialType",
          value: function addPotentialType(event) {
            var _this9 = this;

            event.preventDefault();

            if (this.form.valid) {
              var potentialType = this.form.value;
              this.materialsService.addPotentialTypes(potentialType).subscribe(function (data) {
                console.log(data);

                _this9.onNoClick();
              });
            }
          }
        }]);

        return AddPotentialComponent;
      }();
      /***/

    },

    /***/
    "xrLz":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/potential-admin/components/delete-potential/delete-potential.component.ngfactory.js ***!
      \*****************************************************************************************************/

    /*! exports provided: RenderType_DeletePotentialComponent, View_DeletePotentialComponent_0, View_DeletePotentialComponent_Host_0, DeletePotentialComponentNgFactory */

    /***/
    function xrLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DeletePotentialComponent", function () {
        return RenderType_DeletePotentialComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DeletePotentialComponent_0", function () {
        return View_DeletePotentialComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DeletePotentialComponent_Host_0", function () {
        return View_DeletePotentialComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeletePotentialComponentNgFactory", function () {
        return DeletePotentialComponentNgFactory;
      });
      /* harmony import */


      var _delete_potential_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delete-potential.component.scss.shim.ngstyle */
      "tA77");
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


      var _delete_potential_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./delete-potential.component */
      "sH9U");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DeletePotentialComponent = [_delete_potential_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DeletePotentialComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DeletePotentialComponent,
        data: {}
      });

      function View_DeletePotentialComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Eliminar potencial de impacto ambiental "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["\xBFDesea eliminar la unidad ", " ?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.deletePotential($event, _co.data[0].id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Eliminar"]))], function (_ck, _v) {
          _ck(_v, 2, 0);

          var currVal_4 = "primary";

          _ck(_v, 13, 0, currVal_4);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _co.data[0].name_potential_type;

          _ck(_v, 9, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled || null;
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations";

          _ck(_v, 12, 0, currVal_2, currVal_3);
        });
      }

      function View_DeletePotentialComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-delete-potential", [], null, null, null, View_DeletePotentialComponent_0, RenderType_DeletePotentialComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _delete_potential_component__WEBPACK_IMPORTED_MODULE_7__["DeletePotentialComponent"], [_core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_8__["MaterialsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var DeletePotentialComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-delete-potential", _delete_potential_component__WEBPACK_IMPORTED_MODULE_7__["DeletePotentialComponent"], View_DeletePotentialComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "y40o":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/potential-admin/components/potential-admin/potential-admin.component.scss.shim.ngstyle.js ***!
      \***********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function y40o(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3RlbnRpYWwtYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=potential-admin-potential-admin-module-ngfactory-es5.js.map