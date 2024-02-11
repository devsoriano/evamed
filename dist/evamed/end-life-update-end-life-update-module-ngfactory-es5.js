(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["end-life-update-end-life-update-module-ngfactory"], {
    /***/
    "7FHI":
    /*!*****************************************************************************!*\
      !*** ./src/app/end-life-update/components/pass-step/pass-step.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: PassStepComponent */

    /***/
    function FHI(module, __webpack_exports__, __webpack_require__) {
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
            this.dialogRef.close(this.data);
          }
        }, {
          key: "continueOnly",
          value: function continueOnly(event) {
            event.preventDefault();
            this.data["continue"] = true;
            this.dialogRef.close(this.data);
          }
        }]);

        return PassStepComponent;
      }();
      /***/

    },

    /***/
    "8lQQ":
    /*!*********************************************************************************!*\
      !*** ./src/app/end-life-update/components/intermedial/intermedial.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: IntermedialComponent */

    /***/
    function lQQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntermedialComponent", function () {
        return IntermedialComponent;
      });

      var IntermedialComponent = /*#__PURE__*/function () {
        function IntermedialComponent(router, dialogRef, data) {
          _classCallCheck(this, IntermedialComponent);

          this.router = router;
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
            event.preventDefault();
            this.router.navigateByUrl('/');
            this.onNoClick();
          }
        }]);

        return IntermedialComponent;
      }();
      /***/

    },

    /***/
    "Bf3c":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/end-life-update/components/end-life-update/end-life-update.component.scss.shim.ngstyle.js ***!
      \***********************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function Bf3c(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["@charset \"UTF-8\";\n.principal-container.container-total[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 14px;\n  box-shadow: 0px 3px 6px #00000029;\n  width: 100%;\n  display: grid;\n  margin-top: 8px;\n}\nnav.nav-steps[_ngcontent-%COMP%] {\n  height: 5rem;\n  border-bottom: 1px solid #cbcbcb;\n}\n.space-row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1.5rem;\n}\nsection.container-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 27rem;\n}\np.p-instrucciones[_ngcontent-%COMP%] {\n  color: #767676;\n  font-size: 14px;\n}\n.hidden[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.left[_ngcontent-%COMP%] {\n  text-align: initial;\n  margin-left: 2rem;\n}\n.container-elements[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container-sheets[_ngcontent-%COMP%] {\n  width: 20%;\n  border-right: 1px solid #cbcbcb;\n}\n.container-systems[_ngcontent-%COMP%] {\n  width: 55%;\n  border-right: 1px solid #cbcbcb;\n  padding: 10px;\n}\n.container-details[_ngcontent-%COMP%] {\n  width: 28%;\n}\n.list-elements[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  height: 67.5%;\n}\n.container-systems[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%] {\n  display: table;\n  width: 95%;\n  margin-top: 10px !important;\n}\n.aux-yellow[_ngcontent-%COMP%] {\n  color: #edc903 !important;\n}\n.mdl-stepper-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -50px;\n  margin-left: 160px;\n  font-weight: 600;\n  color: #767676;\n  width: 100%;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:active {\n  border-radius: 15%/75%;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:first-child   .mdl-stepper-bar-left[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]:last-child   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  display: none;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-circle[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto;\n  background-color: #9e9e9e;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 2em;\n  font-size: 12px;\n  color: white;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-title[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: normal;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-title[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-optional[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #000;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-optional[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-left[_ngcontent-%COMP%], .mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  height: 1px;\n  border-top: 1px solid #bdbdbd;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: 50%;\n  margin-left: 35px;\n}\n.mdl-stepper-horizontal-alternative[_ngcontent-%COMP%]   .mdl-stepper-step[_ngcontent-%COMP%]   .mdl-stepper-bar-left[_ngcontent-%COMP%] {\n  left: 0;\n  right: 50%;\n  margin-right: 35px;\n}\n\ndiv.step-one-selected[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background: url('Produccion_.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\ndiv.step-two[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #cbcbcb !important;\n  background: url('Construcci\xF3n_.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\ndiv.step-three[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #cbcbcb !important;\n  background: url('Uso_.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\ndiv.step-four[_ngcontent-%COMP%]   div.mdl-stepper-circle[_ngcontent-%COMP%] {\n  background-color: #cbcbcb !important;\n  background: url('Fin_.png') no-repeat 50% 50%;\n  width: 60px !important;\n  height: 60px !important;\n}\n.mdl-stepper-circle[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.container-image[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.container-image[_ngcontent-%COMP%]   img.image-element[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZW5kLWxpZmUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQSxZQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBRUY7QUFDQTtFQUNFLHlCQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxzQkFBQTtBQUVGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBRUY7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUFFRjtBQUNBOztFQU1FLGFBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtBQUZGO0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBRkY7QUFLQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUtBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0EsbUJBQUE7QUFDQTtFQUNFLG9EQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtBQUhGO0FBTUE7RUFDRSxvQ0FBQTtFQUNBLHNEQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtBQUpGO0FBT0E7RUFDRSxvQ0FBQTtFQUNBLDZDQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtBQUxGO0FBUUE7RUFDRSxvQ0FBQTtFQUNBLDZDQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtBQU5GO0FBVUU7RUFDRSxlQUFBO0FBUEo7QUFXQSxhQUFBO0FBQ0E7RUFDRSxZQUFBO0FBUkY7QUFVRTtFQUNFLGVBQUE7QUFSSiIsImZpbGUiOiJlbmQtbGlmZS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJpbmNpcGFsLWNvbnRhaW5lci5jb250YWluZXItdG90YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbm5hdi5uYXYtc3RlcHMge1xuICBoZWlnaHQ6IDVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xufVxuXG4uc3BhY2Utcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMS41cmVtO1xufVxuXG5zZWN0aW9uLmNvbnRhaW5lci1hY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjdyZW07XG59XG5cbnAucC1pbnN0cnVjY2lvbmVzIHtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhpZGRlbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uY29udGFpbmVyLWVsZW1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLXNoZWV0cyB7XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmNiY2I7XG59XG5cbi5jb250YWluZXItc3lzdGVtcyB7XG4gIHdpZHRoOiA1NSU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjYmNiY2I7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250YWluZXItZGV0YWlscyB7XG4gIHdpZHRoOiAyOCU7XG59XG5cbi5saXN0LWVsZW1lbnRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDY3LjUlO1xufVxuXG4uY29udGFpbmVyLXN5c3RlbXMge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqU3RlcGVycyoqL1xuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYXV4LXllbGxvdyB7XG4gIGNvbG9yOiAjZWRjOTAzICFpbXBvcnRhbnQ7XG59XG5cbi5tZGwtc3RlcHBlci10YWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBtYXJnaW4tbGVmdDogMTYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNzY3Njc2O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1JS83NSU7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmZpcnN0LWNoaWxkOmFjdGl2ZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwOmxhc3QtY2hpbGQ6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcDpmaXJzdC1jaGlsZCAubWRsLXN0ZXBwZXItYmFyLWxlZnQsXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcDpsYXN0LWNoaWxkIC5tZGwtc3RlcHBlci1iYXItcmlnaHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWRsLXN0ZXBwZXItaG9yaXpvbnRhbC1hbHRlcm5hdGl2ZSAubWRsLXN0ZXBwZXItc3RlcCAubWRsLXN0ZXBwZXItY2lyY2xlIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwIC5tZGwtc3RlcHBlci10aXRsZSxcbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwIC5tZGwtc3RlcHBlci1vcHRpb25hbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwIC5tZGwtc3RlcHBlci1vcHRpb25hbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLWJhci1sZWZ0LFxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLWJhci1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiZGJkYmQ7XG59XG5cbi5tZGwtc3RlcHBlci1ob3Jpem9udGFsLWFsdGVybmF0aXZlIC5tZGwtc3RlcHBlci1zdGVwIC5tZGwtc3RlcHBlci1iYXItcmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLm1kbC1zdGVwcGVyLWhvcml6b250YWwtYWx0ZXJuYXRpdmUgLm1kbC1zdGVwcGVyLXN0ZXAgLm1kbC1zdGVwcGVyLWJhci1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4vKipDdXN0b20gc3RlcHBlcioqL1xuZGl2LnN0ZXAtb25lLXNlbGVjdGVkIGRpdi5tZGwtc3RlcHBlci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXRhcGFzL1Byb2R1Y2Npb25fLnBuZ1wiKSBuby1yZXBlYXQgNTAlIDUwJTtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5zdGVwLXR3byBkaXYubWRsLXN0ZXBwZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvRXRhcGFzL0NvbnN0cnVjY2nDs25fLnBuZ1wiKSBuby1yZXBlYXQgNTAlIDUwJTtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5zdGVwLXRocmVlIGRpdi5tZGwtc3RlcHBlci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjYmNiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FdGFwYXMvVXNvXy5wbmdcIikgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG5kaXYuc3RlcC1mb3VyIGRpdi5tZGwtc3RlcHBlci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjYmNiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9FdGFwYXMvRmluXy5wbmdcIikgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4ubWRsLXN0ZXBwZXItY2lyY2xlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKippbWFnZW5lcyoqL1xuLmNvbnRhaW5lci1pbWFnZSB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWluZXItaW1hZ2UgaW1nLmltYWdlLWVsZW1lbnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"];
      /***/
    },

    /***/
    "R8XQ":
    /*!***********************************************************!*\
      !*** ./src/app/end-life-update/end-life-update.module.ts ***!
      \***********************************************************/

    /*! exports provided: EndLifeUpdateModule */

    /***/
    function R8XQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndLifeUpdateModule", function () {
        return EndLifeUpdateModule;
      });

      var EndLifeUpdateModule = function EndLifeUpdateModule() {
        _classCallCheck(this, EndLifeUpdateModule);
      };
      /***/

    },

    /***/
    "RV00":
    /*!***********************************************************************************************!*\
      !*** ./src/app/end-life-update/components/pass-step/pass-step.component.scss.shim.ngstyle.js ***!
      \***********************************************************************************************/

    /*! exports provided: styles */

    /***/
    function RV00(module, __webpack_exports__, __webpack_require__) {
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
    "ThhV":
    /*!***************************************************************************************************!*\
      !*** ./src/app/end-life-update/components/end-life-update/end-life-update.component.ngfactory.js ***!
      \***************************************************************************************************/

    /*! exports provided: RenderType_EndLifeUpdateComponent, View_EndLifeUpdateComponent_0, View_EndLifeUpdateComponent_Host_0, EndLifeUpdateComponentNgFactory */

    /***/
    function ThhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_EndLifeUpdateComponent", function () {
        return RenderType_EndLifeUpdateComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EndLifeUpdateComponent_0", function () {
        return View_EndLifeUpdateComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_EndLifeUpdateComponent_Host_0", function () {
        return View_EndLifeUpdateComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndLifeUpdateComponentNgFactory", function () {
        return EndLifeUpdateComponentNgFactory;
      });
      /* harmony import */


      var _end_life_update_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./end-life-update.component.scss.shim.ngstyle */
      "Bf3c");
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


      var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/core/index.ngfactory */
      "CeGm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
      "XE/z");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/form-field/index.ngfactory */
      "H3DK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/select/index.ngfactory */
      "Y1Mv");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _end_life_update_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./end-life-update.component */
      "r/X5");
      /* harmony import */


      var _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../core/services/projects/projects.service */
      "kqb2");
      /* harmony import */


      var _core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../core/services/catalogs/catalogs.service */
      "w/oM");
      /* harmony import */


      var _core_services_end_life_end_life_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../core/services/end-life/end-life.service */
      "eCkx");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_EndLifeUpdateComponent = [_end_life_update_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_EndLifeUpdateComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_EndLifeUpdateComponent,
        data: {}
      });

      function View_EndLifeUpdateComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/2.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/8.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/9.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/7.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/5.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/7.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/11.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/6.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/4.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/13.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/14.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-element"], ["src", "../../../../assets/map/12.jpg"]], null, null, null, null, null))], null, null);
      }

      function View_EndLifeUpdateComponent_13(_l) {
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

      function View_EndLifeUpdateComponent_16(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[14, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_source_information;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_EndLifeUpdateComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-option", [["class", "mat-option mat-focus-indicator"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, [[35, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null)], function (_ck, _v) {
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
        });
      }

      function View_EndLifeUpdateComponent_18(_l) {
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
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8568832, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOptgroup"]]], {
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

          var currVal_9 = _v.context.$implicit.name_energy_unit;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_EndLifeUpdateComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["class", "button-remove mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.removeFormEC(_v.parent.context.index, _v.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["remove_circle"]))], function (_ck, _v) {
          _ck(_v, 4, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color !== "warn";

          _ck(_v, 3, 0, currVal_2, currVal_3);
        });
      }

      function View_EndLifeUpdateComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 90, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 89, "div", [["class", "Row top-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 29, "div", [["class", "Col col-small-space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["class", "label-small-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Fuente "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 26, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, [[7, 4], [8, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_v.context.$implicit.fuente = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[5, 4], [6, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_EndLifeUpdateComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 23, "div", [["class", "Col col-small-space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "label", [["class", "label-small-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cantidad "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 18, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
          _suffixChildren: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 1, 8, "input", [["class", "input-general mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onChange($event.target.value) !== false;
            ad = pd_4 && ad;
          }

          if ("input" === en) {
            var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onChange($event.target.value) !== false;
            ad = pd_5 && ad;
          }

          if ("blur" === en) {
            var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onTouched() !== false;
            ad = pd_6 && ad;
          }

          if ("focus" === en) {
            var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._focusChanged(true) !== false;
            ad = pd_7 && ad;
          }

          if ("blur" === en) {
            var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._focusChanged(false) !== false;
            ad = pd_8 && ad;
          }

          if ("input" === en) {
            var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._onInput() !== false;
            ad = pd_9 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_10 = (_v.context.$implicit.cantidad = $event) !== false;
            ad = pd_10 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
          return [p0_0, p1_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_22__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
          type: [0, "type"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[17, 4], [18, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 31, "div", [["class", "Col col-small-space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "label", [["class", "label-small-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Unidad funcional "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 28, "mat-form-field", [["appearance", "outline"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], {
          appearance: [0, "appearance"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
          _controlNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 27, {
          _controlStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
          _labelChildNonStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 29, {
          _labelChildStatic: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
          _placeholderChild: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
          _errorChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
          _hintChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
          _prefixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
          _suffixChildren: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, [[28, 4], [29, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Seleccione una opci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["role", "listbox"], ["style", "display:none"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_v.context.$implicit.unidad = $event) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MAT_SELECT_CONFIG"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[26, 4], [27, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_EndLifeUpdateComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_EndLifeUpdateComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 2, "div", [["class", "Col col-small-space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_22 = "outline";

          _ck(_v, 6, 0, currVal_22);

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fuente", _v.context.index, "");

          var currVal_46 = _v.context.$implicit.fuente;

          _ck(_v, 22, 0, currVal_45, currVal_46);

          _ck(_v, 25, 0);

          var currVal_47 = _co.catalogoFuentes;

          _ck(_v, 31, 0, currVal_47);

          var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "cantidad_", _v.context.index, "");

          var currVal_87 = _v.context.$implicit.cantidad;

          _ck(_v, 51, 0, currVal_86, currVal_87);

          var currVal_88 = "number";

          _ck(_v, 54, 0, currVal_88);

          var currVal_111 = "outline";

          _ck(_v, 60, 0, currVal_111);

          var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fuente", _v.context.index, "");

          var currVal_135 = _v.context.$implicit.unidad;

          _ck(_v, 76, 0, currVal_134, currVal_135);

          _ck(_v, 79, 0);

          var currVal_136 = _co.catalogoUnidadEnergia;

          _ck(_v, 85, 0, currVal_136);

          var currVal_137 = _co.catalogoUnidadEnergia;

          _ck(_v, 87, 0, currVal_137);

          var currVal_138 = _v.context.index != 0;

          _ck(_v, 90, 0, currVal_138);
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

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).id;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).tabIndex;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._getAriaLabel();

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._getAriaLabelledby();

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).required.toString();

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).disabled.toString();

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errorState;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._optionIds : null;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).multiple;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._ariaDescribedby || null;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._getAriaActiveDescendant();

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).disabled;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errorState;

          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).required;

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).empty;

          _ck(_v, 20, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]);

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "standard";
          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "fill";
          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "outline";
          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).appearance == "legacy";

          var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.errorState;

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._canLabelFloat;

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldLabelFloat();

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._hasFloatingLabel();

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._hideControlPlaceholder();

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.disabled;

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.autofilled;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._control.focused;

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).color == "accent";
          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).color == "warn";

          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("untouched");

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("touched");

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("pristine");

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("dirty");

          var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("valid");

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("invalid");

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._shouldForward("pending");

          var currVal_69 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._animationsEnabled;

          _ck(_v, 35, 1, [currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69]);

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassUntouched;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassTouched;

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassPristine;

          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassDirty;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassValid;

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassInvalid;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).ngClassPending;

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._isServer;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).id;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).placeholder;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).disabled;

          var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).required;

          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._isNativeSelect || null;
          var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._ariaDescribedby || null;

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).errorState;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).required.toString();

          _ck(_v, 47, 1, [currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85]);

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).appearance == "standard";
          var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).appearance == "fill";
          var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).appearance == "outline";
          var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).appearance == "legacy";

          var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._control.errorState;

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._canLabelFloat;

          var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldLabelFloat();

          var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._hasFloatingLabel();

          var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._hideControlPlaceholder();

          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._control.disabled;

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._control.autofilled;

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._control.focused;

          var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).color == "accent";
          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).color == "warn";

          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldForward("untouched");

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldForward("touched");

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldForward("pristine");

          var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldForward("dirty");

          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldForward("valid");

          var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldForward("invalid");

          var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._shouldForward("pending");

          var currVal_110 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._animationsEnabled;

          _ck(_v, 59, 1, [currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110]);

          var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassUntouched;

          var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassTouched;

          var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPristine;

          var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassDirty;

          var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassValid;

          var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassInvalid;

          var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).ngClassPending;

          var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).id;

          var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).tabIndex;

          var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._getAriaLabel();

          var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._getAriaLabelledby();

          var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).required.toString();

          var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).disabled.toString();

          var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).errorState;

          var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._optionIds : null;

          var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).multiple;

          var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._ariaDescribedby || null;

          var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79)._getAriaActiveDescendant();

          var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).disabled;

          var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).errorState;

          var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).required;

          var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).empty;

          _ck(_v, 74, 1, [currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133]);
        });
      }

      function View_EndLifeUpdateComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "section", [["class", "container-systems"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1. Energ\xEDa consumida durante el proceso deconstructivo"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "container-ec"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.addFormEC() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["add_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onSaveEC() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["save"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.dataArrayEC;

          _ck(_v, 5, 0, currVal_0);

          _ck(_v, 9, 0);

          _ck(_v, 14, 0);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationMode === "NoopAnimations";

          _ck(_v, 6, 0, currVal_1, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).inline;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "warn";

          _ck(_v, 8, 0, currVal_3, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled || null;
          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._animationMode === "NoopAnimations";

          _ck(_v, 11, 0, currVal_5, currVal_6);

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).inline;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color !== "warn";

          _ck(_v, 13, 0, currVal_7, currVal_8);
        });
      }

      function View_EndLifeUpdateComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "nav", [["class", "nav-redirect"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["class", "proyecto-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [["class", "a-redirect"], ["href", "/"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < Regresar a proyectos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 63, "div", [["class", "principal-container container-total"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 25, "nav", [["class", "nav-steps"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 24, "div", [["class", "mdl-stepper-horizontal-alternative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-one-selected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToMaterialStage() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "mdl-stepper-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Producci\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-two"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToConstructionStage() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "mdl-stepper-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Construcci\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-three"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.goToUsageStage() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "div", [["class", "mdl-stepper-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Uso "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 5, "div", [["class", "mdl-stepper-step step-four"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "div", [["class", "mdl-stepper-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "mdl-stepper-tag aux-yellow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Fin de vida "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "div", [["class", "mdl-stepper-bar-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 36, "section", [["class", "container-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 33, "section", [["class", "container-sheets"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 25, "div", [["class", "container-image"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"], [], {
          ngSwitch: [0, "ngSwitch"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], {
          ngSwitchCase: [0, "ngSwitchCase"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 6, "div", [["class", "list-elements"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 5, "mat-selection-list", [["class", "mat-selection-list mat-list-base"], ["role", "listbox"]], [[1, "aria-multiselectable", 0], [1, "aria-disabled", 0], [1, "tabindex", 0]], [[null, "selectionChange"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._onFocus() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._keydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("selectionChange" === en) {
            var pd_2 = _co.onGroupsChange(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).selectedOptions.selected) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSelectionList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSelectionList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 1753088, [["sheets", 4]], 1, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
          multiple: [0, "multiple"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          options: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_EndLifeUpdateComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EndLifeUpdateComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 3, "div", [["class", "section-continue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 2, "button", [["class", "yellow-button custom-continue mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.continueStep($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Continuar "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = _co.selectedSheet;

          _ck(_v, 35, 0, currVal_1);

          var currVal_2 = "Cimentaci\xF3n";

          _ck(_v, 37, 0, currVal_2);

          var currVal_3 = "Muros interiores";

          _ck(_v, 39, 0, currVal_3);

          var currVal_4 = "Muros exteriores";

          _ck(_v, 41, 0, currVal_4);

          var currVal_5 = "Pisos";

          _ck(_v, 43, 0, currVal_5);

          var currVal_6 = "Techos";

          _ck(_v, 45, 0, currVal_6);

          var currVal_7 = "Entrepiso";

          _ck(_v, 47, 0, currVal_7);

          var currVal_8 = "Estructura";

          _ck(_v, 49, 0, currVal_8);

          var currVal_9 = "Puertas";

          _ck(_v, 51, 0, currVal_9);

          var currVal_10 = "Ventanas";

          _ck(_v, 53, 0, currVal_10);

          var currVal_11 = "Inst. especiales";

          _ck(_v, 55, 0, currVal_11);

          var currVal_12 = "Otros";

          _ck(_v, 57, 0, currVal_12);

          var currVal_16 = false;

          _ck(_v, 63, 0, currVal_16);

          var currVal_17 = _co.sheetNames;

          _ck(_v, 66, 0, currVal_17);

          var currVal_18 = _co.indexSheet !== undefined;

          _ck(_v, 68, 0, currVal_18);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.nameProject;

          _ck(_v, 2, 0, currVal_0);

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).multiple;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).disabled.toString();

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._tabIndex;

          _ck(_v, 61, 0, currVal_13, currVal_14, currVal_15);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).disabled || null;
          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._animationMode === "NoopAnimations";

          _ck(_v, 70, 0, currVal_19, currVal_20);
        });
      }

      function View_EndLifeUpdateComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-end-life-update", [], null, null, null, View_EndLifeUpdateComponent_0, RenderType_EndLifeUpdateComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _end_life_update_component__WEBPACK_IMPORTED_MODULE_23__["EndLifeUpdateComponent"], [_core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_24__["ProjectsService"], _core_services_catalogs_catalogs_service__WEBPACK_IMPORTED_MODULE_25__["CatalogsService"], _core_services_end_life_end_life_service__WEBPACK_IMPORTED_MODULE_26__["EndLifeService"], _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_27__["MaterialsService"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialog"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var EndLifeUpdateComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-end-life-update", _end_life_update_component__WEBPACK_IMPORTED_MODULE_23__["EndLifeUpdateComponent"], View_EndLifeUpdateComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "ap5K":
    /*!*********************************************************************!*\
      !*** ./src/app/end-life-update/end-life-update.module.ngfactory.js ***!
      \*********************************************************************/

    /*! exports provided: EndLifeUpdateModuleNgFactory */

    /***/
    function ap5K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndLifeUpdateModuleNgFactory", function () {
        return EndLifeUpdateModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _end_life_update_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./end-life-update.module */
      "R8XQ");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _components_end_life_update_end_life_update_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/end-life-update/end-life-update.component.ngfactory */
      "ThhV");
      /* harmony import */


      var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
      "9cE2");
      /* harmony import */


      var _components_intermedial_intermedial_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/intermedial/intermedial.component.ngfactory */
      "wT4G");
      /* harmony import */


      var _components_pass_step_pass_step_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/pass-step/pass-step.component.ngfactory */
      "cmNO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _end_life_update_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./end-life-update-routing.module */
      "rbV8");
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


      var _components_end_life_update_end_life_update_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./components/end-life-update/end-life-update.component */
      "r/X5");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var EndLifeUpdateModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_end_life_update_module__WEBPACK_IMPORTED_MODULE_1__["EndLifeUpdateModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _components_end_life_update_end_life_update_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["EndLifeUpdateComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _components_intermedial_intermedial_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["IntermedialComponentNgFactory"], _components_pass_step_pass_step_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["PassStepComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _end_life_update_routing_module__WEBPACK_IMPORTED_MODULE_19__["EndLifeUpdateRoutingModule"], _end_life_update_routing_module__WEBPACK_IMPORTED_MODULE_19__["EndLifeUpdateRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_30__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_37__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_37__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_38__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_40__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _material_material_module__WEBPACK_IMPORTED_MODULE_45__["MaterialModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_45__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_46__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _end_life_update_module__WEBPACK_IMPORTED_MODULE_1__["EndLifeUpdateModule"], _end_life_update_module__WEBPACK_IMPORTED_MODULE_1__["EndLifeUpdateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], function () {
          return [[{
            path: "",
            component: _components_end_life_update_end_life_update_component__WEBPACK_IMPORTED_MODULE_47__["EndLifeUpdateComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "cmNO":
    /*!***************************************************************************************!*\
      !*** ./src/app/end-life-update/components/pass-step/pass-step.component.ngfactory.js ***!
      \***************************************************************************************/

    /*! exports provided: RenderType_PassStepComponent, View_PassStepComponent_0, View_PassStepComponent_Host_0, PassStepComponentNgFactory */

    /***/
    function cmNO(module, __webpack_exports__, __webpack_require__) {
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
      "RV00");
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
      "7FHI");
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
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Asegurese de guardar los cambios antes de continuar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.continueOnly($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Continuar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancelar"]))], function (_ck, _v) {
          _ck(_v, 2, 0);

          var currVal_3 = "primary";

          _ck(_v, 9, 0, currVal_3);

          var currVal_6 = "primary";

          _ck(_v, 12, 0, currVal_6);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationMode === "NoopAnimations";

          _ck(_v, 8, 0, currVal_1, currVal_2);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled || null;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._animationMode === "NoopAnimations";

          _ck(_v, 11, 0, currVal_4, currVal_5);
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
    "pX07":
    /*!***************************************************************************************************!*\
      !*** ./src/app/end-life-update/components/intermedial/intermedial.component.scss.shim.ngstyle.js ***!
      \***************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function pX07(module, __webpack_exports__, __webpack_require__) {
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
    "r/X5":
    /*!*****************************************************************************************!*\
      !*** ./src/app/end-life-update/components/end-life-update/end-life-update.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: EndLifeUpdateComponent */

    /***/
    function rX5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndLifeUpdateComponent", function () {
        return EndLifeUpdateComponent;
      });
      /* harmony import */


      var _intermedial_intermedial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../intermedial/intermedial.component */
      "8lQQ");
      /* harmony import */


      var _pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../pass-step/pass-step.component */
      "7FHI");

      var EndLifeUpdateComponent = /*#__PURE__*/function () {
        function EndLifeUpdateComponent(projectsService, catalogsService, endLifeService, materialsService, router, dialog) {
          var _this = this;

          _classCallCheck(this, EndLifeUpdateComponent);

          this.projectsService = projectsService;
          this.catalogsService = catalogsService;
          this.endLifeService = endLifeService;
          this.materialsService = materialsService;
          this.router = router;
          this.dialog = dialog;
          this.dataArrayEC = [];
          this.dataArrayTD = [];
          this.catalogsService.getSourceInformation().subscribe(function (data) {
            var fuentes = [];
            data.map(function (fuente) {
              if (fuente.name_source_information !== 'Mexicaniuh - CADIS') {
                fuentes.push(fuente);
              }
            });
            _this.catalogoFuentes = fuentes;
          });
          this.projectsService.getProjectById(localStorage.getItem('idProyectoConstrucción')).subscribe(function (data) {
            _this.nameProject = data.name_project;
            _this.projectId = data.id;
          });
          this.catalogsService.getEnergyUnits().subscribe(function (data) {
            var energia = [];
            data.map(function (unidad) {
              if (unidad.name_energy_unit === 'Hrs') {
                energia.push(unidad);
              }
            });
            _this.catalogoUnidadEnergia = energia;
          });
          this.endLifeService.getECDP().subscribe(function (data) {
            var ECDP = [];
            data.map(function (item) {
              if (item.project_id === parseInt(localStorage.getItem('idProyectoConstrucción'), 10)) {
                ECDP.push(item);
              }
            });
            _this.ECDP = ECDP;
          });
        }

        _createClass(EndLifeUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sheetNames = ['Cimentación', 'Muros interiores', 'Muros exteriores', 'Pisos', 'Techos', 'Entrepiso', 'Estructura', 'Puertas', 'Ventanas', 'Inst. especiales', 'Otros'];
            this.indexSheet = undefined;
            this.dataArrayTD.push([]);
          }
        }, {
          key: "onGroupsChange",
          value: function onGroupsChange(options) {
            var _this2 = this;

            var selectedSheet; // map these MatListOptions to their values

            options.map(function (option) {
              selectedSheet = option.value;
            }); // take index of selection

            this.indexSheet = this.sheetNames.indexOf(selectedSheet); // map data exist to edit

            var getDataECPD = [];
            this.ECDP.map(function (item) {
              var prevData = [];

              if (item.section_id === _this2.indexSheet + 1) {
                prevData['id'] = item.id;
                prevData['cantidad'] = item.quantity;
                prevData['fuente'] = item.source_information_id;
                prevData['energy_unit_id'] = item.energy_unit_id;
                getDataECPD.push(prevData);
              }
            });
            var i;

            for (i = 0; i <= this.sheetNames.length; i++) {
              if (this.indexSheet === i) {
                this.dataArrayEC = getDataECPD;

                if (this.EC !== undefined) {
                  this.dataArrayEC = this.EC[i];
                }

                if (this.dataArrayEC === undefined) {
                  this.dataArrayEC = getDataECPD;
                }
              }
            }

            this.selectedSheet = selectedSheet;
            this.dataArrayEC === undefined ? this.dataArrayEC = [] : this.dataArrayEC;
            this.dataArrayTD === undefined ? this.dataArrayTD = [] : this.dataArrayTD;

            if (this.dataArrayEC.length === 0) {
              this.dataArrayEC.push([]);
            }

            if (this.dataArrayTD.length === 0) {
              this.dataArrayTD.push([]);
            }

            this.onSaveECNatural();
          }
        }, {
          key: "removeFormEC",
          value: function removeFormEC(i, id) {
            this.endLifeService.deleteECDP(id).subscribe(function () {
              console.log("Se elimin\xF3 ".concat(id));
            });
            this.dataArrayEC.splice(i, i);
          }
        }, {
          key: "addFormEC",
          value: function addFormEC() {
            if (this.dataArrayEC === undefined) {
              this.dataArrayEC = [];
            }

            this.dataArrayEC.push([]);
          }
        }, {
          key: "onSaveECNatural",
          value: function onSaveECNatural() {
            var i;

            if (this.EC === undefined) {
              this.EC = [];
            }
            /*if (this.TD === undefined) {
              this.TD = [];
            }*/


            for (i = 0; i <= this.sheetNames.length; i++) {
              if (this.indexSheet === i) {
                this.EC[i] = this.dataArrayEC; // this.TD[i] = this.dataArrayTD;
              }
            }
          }
        }, {
          key: "onSaveEC",
          value: function onSaveEC() {
            var _this3 = this;

            var i;

            if (this.EC === undefined) {
              this.EC = [];
            }
            /*if (this.TD === undefined) {
              this.TD = [];
            }*/


            for (i = 0; i <= this.sheetNames.length; i++) {
              if (this.indexSheet === i) {
                this.EC[i] = this.dataArrayEC; // this.TD[i] = this.dataArrayTD;
              }
            }

            Object.entries(this.EC).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  ec = _ref2[1];

              var ecAny;
              ecAny = ec;

              if (_this3.indexSheet === parseInt(key)) {
                ecAny.map(function (data) {
                  if (data.id !== undefined) {
                    _this3.endLifeService.deleteECDP(data.id).subscribe(function () {
                      console.log("Se elimin\xF3 ".concat(data.id));
                    });
                  }

                  try {
                    _this3.endLifeService.addECDP({
                      quantity: data.cantidad,
                      unit_id: 2,
                      source_information_id: data.fuente,
                      section_id: parseInt(key, 10) + 1,
                      project_id: parseInt(localStorage.getItem('idProyectoConstrucción'), 10)
                    }).subscribe(function (data) {
                      console.log(data);
                    });
                  } catch (e) {
                    console.log('No hay que eliminar***');
                  }
                });
              }
            });
          }
        }, {
          key: "saveStepFour",
          value: function saveStepFour() {}
        }, {
          key: "goToMaterialStage",
          value: function goToMaterialStage() {
            var _this4 = this;

            var dialogRef = this.dialog.open(_pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_1__["PassStepComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result["continue"]) {
                _this4.materialsService.getMaterialSchemeProyects().subscribe(function (msp) {
                  var schemaFilter = msp.filter(function (schema) {
                    return schema.project_id == localStorage.getItem('idProyectoConstrucción');
                  });

                  if (schemaFilter.length === 0) {
                    _this4.router.navigateByUrl('materials-stage');
                  } else {
                    _this4.router.navigateByUrl('material-stage-update');
                  }
                });
              }
            });
          }
        }, {
          key: "goToConstructionStage",
          value: function goToConstructionStage() {
            var _this5 = this;

            var dialogRef = this.dialog.open(_pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_1__["PassStepComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result["continue"]) {
                _this5.materialsService.getConstructionStage().subscribe(function (cse) {
                  var schemaFilter = cse.filter(function (schema) {
                    return schema.project_id == localStorage.getItem('idProyectoConstrucción');
                  });
                  console.log(schemaFilter);

                  if (schemaFilter.length === 0) {
                    _this5.router.navigateByUrl('construction-stage');
                  } else {
                    _this5.router.navigateByUrl('construction-stage-update');
                  }
                });
              }
            });
          }
        }, {
          key: "goToUsageStage",
          value: function goToUsageStage() {
            var _this6 = this;

            var dialogRef = this.dialog.open(_pass_step_pass_step_component__WEBPACK_IMPORTED_MODULE_1__["PassStepComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result["continue"]) {
                _this6.materialsService.getACR().subscribe(function (acr) {
                  var schemaFilter = acr.filter(function (schema) {
                    return schema.project_id == localStorage.getItem('idProyectoConstrucción');
                  });

                  if (schemaFilter.length === 0) {
                    _this6.router.navigateByUrl('usage-stage');
                  } else {
                    _this6.router.navigateByUrl('usage-stage-update');
                  }
                });
              }
            });
          }
        }, {
          key: "goToEndLife",
          value: function goToEndLife() {
            this.router.navigateByUrl('end-life-stage');
          }
        }, {
          key: "continueStep",
          value: function continueStep(event) {
            console.log('continuar!!!!');
            event.preventDefault();
            var dialogRef = this.dialog.open(_intermedial_intermedial_component__WEBPACK_IMPORTED_MODULE_0__["IntermedialComponent"], {
              width: '680px',
              data: {}
            });
            dialogRef.afterClosed().subscribe(function (result) {// this.ngOnInit();
            });
          }
        }]);

        return EndLifeUpdateComponent;
      }();
      /***/

    },

    /***/
    "rbV8":
    /*!*******************************************************************!*\
      !*** ./src/app/end-life-update/end-life-update-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: EndLifeUpdateRoutingModule */

    /***/
    function rbV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndLifeUpdateRoutingModule", function () {
        return EndLifeUpdateRoutingModule;
      });
      /* harmony import */


      var _components_end_life_update_end_life_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/end-life-update/end-life-update.component */
      "r/X5");

      var routes = [{
        path: '',
        component: _components_end_life_update_end_life_update_component__WEBPACK_IMPORTED_MODULE_0__["EndLifeUpdateComponent"]
      }];

      var EndLifeUpdateRoutingModule = function EndLifeUpdateRoutingModule() {
        _classCallCheck(this, EndLifeUpdateRoutingModule);
      };
      /***/

    },

    /***/
    "wT4G":
    /*!*******************************************************************************************!*\
      !*** ./src/app/end-life-update/components/intermedial/intermedial.component.ngfactory.js ***!
      \*******************************************************************************************/

    /*! exports provided: RenderType_IntermedialComponent, View_IntermedialComponent_0, View_IntermedialComponent_Host_0, IntermedialComponentNgFactory */

    /***/
    function wT4G(module, __webpack_exports__, __webpack_require__) {
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
      "pX07");
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
      "8lQQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
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
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "header-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [["class", "title-standard-second-light mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Asegurese de guardar los cambios antes de continuar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "close-modal"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onNoClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" X "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "center mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.continueStep($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Ir al home"]))], function (_ck, _v) {
          _ck(_v, 2, 0);

          var currVal_3 = "primary";

          _ck(_v, 9, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._animationMode === "NoopAnimations";

          _ck(_v, 8, 0, currVal_1, currVal_2);
        });
      }

      function View_IntermedialComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-intermedial", [], null, null, null, View_IntermedialComponent_0, RenderType_IntermedialComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _intermedial_component__WEBPACK_IMPORTED_MODULE_7__["IntermedialComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var IntermedialComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-intermedial", _intermedial_component__WEBPACK_IMPORTED_MODULE_7__["IntermedialComponent"], View_IntermedialComponent_Host_0, {}, {}, []);
      /***/

    }
  }]);
})();
//# sourceMappingURL=end-life-update-end-life-update-module-ngfactory-es5.js.map