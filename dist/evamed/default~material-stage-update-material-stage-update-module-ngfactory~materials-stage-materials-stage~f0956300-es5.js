(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~material-stage-update-material-stage-update-module-ngfactory~materials-stage-materials-stage~f0956300"], {
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
    "l+DN":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/autocomplete/index.ngfactory.js ***!
      \************************************************************************/

    /*! exports provided: MatAutocompleteModuleNgFactory, RenderType_MatAutocomplete, View_MatAutocomplete_0, View_MatAutocomplete_Host_0, MatAutocompleteNgFactory */

    /***/
    function lDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteModuleNgFactory", function () {
        return MatAutocompleteModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MatAutocomplete", function () {
        return RenderType_MatAutocomplete;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatAutocomplete_0", function () {
        return View_MatAutocomplete_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MatAutocomplete_Host_0", function () {
        return View_MatAutocomplete_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAutocompleteNgFactory", function () {
        return MatAutocompleteNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
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
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var MatAutocompleteModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], [])]);
      });

      var styles_MatAutocomplete = [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"];

      var RenderType_MatAutocomplete = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_MatAutocomplete,
        data: {}
      });

      function View_MatAutocomplete_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[2, 0], ["panel", 1]], null, 2, "div", [["class", "mat-autocomplete-panel"], ["role", "listbox"]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_1 = "mat-autocomplete-panel";
          var currVal_2 = _co._classList;

          _ck(_v, 1, 0, currVal_1, currVal_2);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.id;

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_MatAutocomplete_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
          template: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
          panel: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2]], null, 0, null, View_MatAutocomplete_1))], null, null);
      }

      function View_MatAutocomplete_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "mat-autocomplete", [["class", "mat-autocomplete"]], null, null, null, View_MatAutocomplete_0, RenderType_MatAutocomplete)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocomplete"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1228800, null, 2, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocomplete"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
          optionGroups: 1
        })], null, null);
      }

      var MatAutocompleteNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-autocomplete", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocomplete"], View_MatAutocomplete_Host_0, {
        disableRipple: "disableRipple",
        displayWith: "displayWith",
        autoActiveFirstOption: "autoActiveFirstOption",
        panelWidth: "panelWidth",
        classList: "class"
      }, {
        optionSelected: "optionSelected",
        opened: "opened",
        closed: "closed",
        optionActivated: "optionActivated"
      }, ["*"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~material-stage-update-material-stage-update-module-ngfactory~materials-stage-materials-stage~f0956300-es5.js.map