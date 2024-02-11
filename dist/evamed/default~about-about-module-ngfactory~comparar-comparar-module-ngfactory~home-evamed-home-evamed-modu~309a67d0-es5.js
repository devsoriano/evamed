(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~about-about-module-ngfactory~comparar-comparar-module-ngfactory~home-evamed-home-evamed-modu~309a67d0"], {
    /***/
    "Ynp+":
    /*!******************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/button-toggle.js ***!
      \******************************************************************/

    /*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleGroupMultiple, MatButtonToggleModule */

    /***/
    function Ynp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
        return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () {
        return MatButtonToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () {
        return MatButtonToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () {
        return MatButtonToggleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function () {
        return MatButtonToggleGroupMultiple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () {
        return MatButtonToggleModule;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "CtHx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/button-toggle/button-toggle.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Represents the default options for the button toggle that can be configured
       * using the `MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS` injection token.
       * @record
       */


      function MatButtonToggleDefaultOptions() {}

      if (false) {}
      /**
       * Injection token that can be used to configure the
       * default options for all button toggles within an app.
       * @type {?}
       */


      var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
      /**
       * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)].
       * \@docs-private
       * @type {?}
       */

      var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatButtonToggleGroup;
        }),
        multi: true
      };
      /**
       * @deprecated Use `MatButtonToggleGroup` instead.
       * \@breaking-change 8.0.0
       */

      var MatButtonToggleGroupMultiple = function MatButtonToggleGroupMultiple() {
        _classCallCheck(this, MatButtonToggleGroupMultiple);
      };
      /** @type {?} */


      var _uniqueIdCounter = 0;
      /**
       * Change event object emitted by MatButtonToggle.
       */

      var MatButtonToggleChange =
      /**
       * @param {?} source
       * @param {?} value
       */
      function MatButtonToggleChange(source, value) {
        _classCallCheck(this, MatButtonToggleChange);

        this.source = source;
        this.value = value;
      };

      if (false) {}
      /**
       * Exclusive selection button toggle group that behaves like a radio-button group.
       */


      var MatButtonToggleGroup = /*#__PURE__*/function () {
        /**
         * @param {?} _changeDetector
         * @param {?=} defaultOptions
         */
        function MatButtonToggleGroup(_changeDetector, defaultOptions) {
          _classCallCheck(this, MatButtonToggleGroup);

          this._changeDetector = _changeDetector;
          this._vertical = false;
          this._multiple = false;
          this._disabled = false;
          /**
           * The method to be called in order to update ngModel.
           * Now `ngModel` binding is not supported in multiple selection mode.
           */

          this._controlValueAccessorChangeFn =
          /**
          * @return {?}
          */
          function () {};
          /**
           * onTouch function registered via registerOnTouch (ControlValueAccessor).
           */


          this._onTouched =
          /**
          * @return {?}
          */
          function () {};

          this._name = "mat-button-toggle-group-".concat(_uniqueIdCounter++);
          /**
           * Event that emits whenever the value of the group changes.
           * Used to facilitate two-way data binding.
           * \@docs-private
           */

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Event emitted when the group's value changes.
           */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        }
        /**
         * `name` attribute for the underlying `input` element.
         * @return {?}
         */


        _createClass(MatButtonToggleGroup, [{
          key: "name",
          get: function get() {
            return this._name;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            var _this = this;

            this._name = value;

            if (this._buttonToggles) {
              this._buttonToggles.forEach(
              /**
              * @param {?} toggle
              * @return {?}
              */
              function (toggle) {
                toggle.name = _this._name;

                toggle._markForCheck();
              });
            }
          }
          /**
           * Whether the toggle group is vertical.
           * @return {?}
           */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * Value of the toggle group.
           * @return {?}
           */

        }, {
          key: "value",
          get: function get() {
            /** @type {?} */
            var selected = this._selectionModel ? this._selectionModel.selected : [];

            if (this.multiple) {
              return selected.map(
              /**
              * @param {?} toggle
              * @return {?}
              */
              function (toggle) {
                return toggle.value;
              });
            }

            return selected[0] ? selected[0].value : undefined;
          }
          /**
           * @param {?} newValue
           * @return {?}
           */
          ,
          set: function set(newValue) {
            this._setSelectionByValue(newValue);

            this.valueChange.emit(this.value);
          }
          /**
           * Selected button toggles in the group.
           * @return {?}
           */

        }, {
          key: "selected",
          get: function get() {
            /** @type {?} */
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            return this.multiple ? selected : selected[0] || null;
          }
          /**
           * Whether multiple button toggles can be selected.
           * @return {?}
           */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether multiple button toggle group is disabled.
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (this._buttonToggles) {
              this._buttonToggles.forEach(
              /**
              * @param {?} toggle
              * @return {?}
              */
              function (toggle) {
                return toggle._markForCheck();
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this$_selectionModel;

            (_this$_selectionModel = this._selectionModel).select.apply(_this$_selectionModel, _toConsumableArray(this._buttonToggles.filter(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle.checked;
            })));
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param {?} value Value to be set to the model.
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            this._changeDetector.markForCheck();
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /**
           * Dispatch change event with current selection and group value.
           * @return {?}
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            /** @type {?} */
            var selected = this.selected;
            /** @type {?} */

            var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
            /** @type {?} */

            var event = new MatButtonToggleChange(
            /** @type {?} */
            source, this.value);

            this._controlValueAccessorChangeFn(event.value);

            this.change.emit(event);
          }
          /**
           * Syncs a button toggle's selected state with the model value.
           * @param {?} toggle Toggle to be synced.
           * @param {?} select Whether the toggle should be selected.
           * @param {?=} isUserInput Whether the change was a result of a user interaction.
           * @param {?=} deferEvents Whether to defer emitting the change events.
           * @return {?}
           */

        }, {
          key: "_syncButtonToggle",
          value: function _syncButtonToggle(toggle, select) {
            var _this2 = this;

            var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var deferEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            // Deselect the currently-selected toggle, if we're in single-selection
            // mode and the button being toggled isn't selected at the moment.
            if (!this.multiple && this.selected && !toggle.checked) {
              /** @type {?} */
              this.selected.checked = false;
            }

            if (this._selectionModel) {
              if (select) {
                this._selectionModel.select(toggle);
              } else {
                this._selectionModel.deselect(toggle);
              }
            } else {
              deferEvents = true;
            } // We need to defer in some cases in order to avoid "changed after checked errors", however
            // the side-effect is that we may end up updating the model value out of sequence in others
            // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


            if (deferEvents) {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this2._updateModelValue(isUserInput);
              });
            } else {
              this._updateModelValue(isUserInput);
            }
          }
          /**
           * Checks whether a button toggle is selected.
           * @param {?} toggle
           * @return {?}
           */

        }, {
          key: "_isSelected",
          value: function _isSelected(toggle) {
            return this._selectionModel && this._selectionModel.isSelected(toggle);
          }
          /**
           * Determines whether a button toggle should be checked on init.
           * @param {?} toggle
           * @return {?}
           */

        }, {
          key: "_isPrechecked",
          value: function _isPrechecked(toggle) {
            if (typeof this._rawValue === 'undefined') {
              return false;
            }

            if (this.multiple && Array.isArray(this._rawValue)) {
              return this._rawValue.some(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return toggle.value != null && value === toggle.value;
              });
            }

            return toggle.value === this._rawValue;
          }
          /**
           * Updates the selection state of the toggles in the group based on a value.
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this3 = this;

            this._rawValue = value;

            if (!this._buttonToggles) {
              return;
            }

            if (this.multiple && value) {
              if (!Array.isArray(value)) {
                throw Error('Value must be an array in multiple-selection mode.');
              }

              this._clearSelection();

              value.forEach(
              /**
              * @param {?} currentValue
              * @return {?}
              */
              function (currentValue) {
                return _this3._selectValue(currentValue);
              });
            } else {
              this._clearSelection();

              this._selectValue(value);
            }
          }
          /**
           * Clears the selected toggles.
           * @private
           * @return {?}
           */

        }, {
          key: "_clearSelection",
          value: function _clearSelection() {
            this._selectionModel.clear();

            this._buttonToggles.forEach(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle.checked = false;
            });
          }
          /**
           * Selects a value if there's a toggle that corresponds to it.
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            /** @type {?} */
            var correspondingOption = this._buttonToggles.find(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle.value != null && toggle.value === value;
            });

            if (correspondingOption) {
              correspondingOption.checked = true;

              this._selectionModel.select(correspondingOption);
            }
          }
          /**
           * Syncs up the group's value with the model and emits the change event.
           * @private
           * @param {?} isUserInput
           * @return {?}
           */

        }, {
          key: "_updateModelValue",
          value: function _updateModelValue(isUserInput) {
            // Only emit the change event for user input.
            if (isUserInput) {
              this._emitChangeEvent();
            } // Note: we emit this one no matter whether it was a user interaction, because
            // it is used by Angular to sync up the two-way data binding.


            this.valueChange.emit(this.value);
          }
        }]);

        return MatButtonToggleGroup;
      }();

      MatButtonToggleGroup.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-button-toggle-group',
          providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
            provide: MatButtonToggleGroupMultiple,
            useExisting: MatButtonToggleGroup
          }],
          host: {
            'role': 'group',
            'class': 'mat-button-toggle-group',
            '[attr.aria-disabled]': 'disabled',
            '[class.mat-button-toggle-vertical]': 'vertical',
            '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
          },
          exportAs: 'matButtonToggleGroup'
        }]
      }];
      /** @nocollapse */

      MatButtonToggleGroup.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatButtonToggleGroup.propDecorators = {
        _buttonToggles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatButtonToggle;
          }), {
            // Note that this would technically pick up toggles
            // from nested groups, but that's not a case that we support.
            descendants: true
          }]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };

      if (false) {} // Boilerplate for applying mixins to the MatButtonToggle class.

      /**
       * \@docs-private
       */


      var MatButtonToggleBase = function MatButtonToggleBase() {
        _classCallCheck(this, MatButtonToggleBase);
      };
      /** @type {?} */


      var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
      /**
       * Single button inside of a toggle group.
       */


      var MatButtonToggle = /*#__PURE__*/function (_MatButtonToggleMixin) {
        _inherits(MatButtonToggle, _MatButtonToggleMixin);

        var _super = _createSuper(MatButtonToggle);

        /**
         * @param {?} toggleGroup
         * @param {?} _changeDetectorRef
         * @param {?} _elementRef
         * @param {?} _focusMonitor
         * @param {?} defaultTabIndex
         * @param {?=} defaultOptions
         */
        function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
        defaultTabIndex, defaultOptions) {
          var _this4;

          _classCallCheck(this, MatButtonToggle);

          _this4 = _super.call(this);
          _this4._changeDetectorRef = _changeDetectorRef;
          _this4._elementRef = _elementRef;
          _this4._focusMonitor = _focusMonitor;
          _this4._isSingleSelector = false;
          _this4._checked = false;
          /**
           * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
           */

          _this4.ariaLabelledby = null;
          _this4._disabled = false;
          /**
           * Event emitted when the group value changes.
           */

          _this4.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** @type {?} */

          var parsedTabIndex = Number(defaultTabIndex);
          _this4.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
          _this4.buttonToggleGroup = toggleGroup;
          _this4.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
          return _this4;
        }
        /**
         * Unique ID for the underlying `button` element.
         * @return {?}
         */


        _createClass(MatButtonToggle, [{
          key: "buttonId",
          get: function get() {
            return "".concat(this.id, "-button");
          }
          /**
           * The appearance style of the button.
           * @return {?}
           */

        }, {
          key: "appearance",
          get: function get() {
            return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._appearance = value;
          }
          /**
           * Whether the button is checked.
           * @return {?}
           */

        }, {
          key: "checked",
          get: function get() {
            return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (newValue !== this._checked) {
              this._checked = newValue;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked);
              }

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Whether the button is disabled.
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            /** @type {?} */
            var group = this.buttonToggleGroup;
            this._isSingleSelector = group && !group.multiple;
            this._type = this._isSingleSelector ? 'radio' : 'checkbox';
            this.id = this.id || "mat-button-toggle-".concat(_uniqueIdCounter++);

            if (this._isSingleSelector) {
              this.name = group.name;
            }

            if (group) {
              if (group._isPrechecked(this)) {
                this.checked = true;
              } else if (group._isSelected(this) !== this._checked) {
                // As as side effect of the circular dependency between the toggle group and the button,
                // we may end up in a state where the button is supposed to be checked on init, but it
                // isn't, because the checked value was assigned too early. This can happen when Ivy
                // assigns the static input value before the `ngOnInit` has run.
                group._syncButtonToggle(this, this._checked);
              }
            }

            this._focusMonitor.monitor(this._elementRef, true);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /** @type {?} */
            var group = this.buttonToggleGroup;

            this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
            // on the next tick in order to avoid "changed after checked" errors.


            if (group && group._isSelected(this)) {
              group._syncButtonToggle(this, false, false, true);
            }
          }
          /**
           * Focuses the button.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus(options) {
            this._buttonElement.nativeElement.focus(options);
          }
          /**
           * Checks the button toggle due to an interaction with the underlying native button.
           * @return {?}
           */

        }, {
          key: "_onButtonClick",
          value: function _onButtonClick() {
            /** @type {?} */
            var newChecked = this._isSingleSelector ? true : !this._checked;

            if (newChecked !== this._checked) {
              this._checked = newChecked;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

                this.buttonToggleGroup._onTouched();
              }
            } // Emit a change event when it's the single selector


            this.change.emit(new MatButtonToggleChange(this, this.value));
          }
          /**
           * Marks the button toggle as needing checking for change detection.
           * This method is exposed because the parent button toggle group will directly
           * update bound properties of the radio button.
           * @return {?}
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            // When the group value changes, the button will not be notified.
            // Use `markForCheck` to explicit update button toggle's status.
            this._changeDetectorRef.markForCheck();
          }
        }]);

        return MatButtonToggle;
      }(_MatButtonToggleMixinBase);

      MatButtonToggle.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-button-toggle',
          template: "<button #button class=\"mat-button-toggle-button mat-focus-indicator\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"name || null\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <div class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </div>\n</button>\n\n<div class=\"mat-button-toggle-focus-overlay\"></div>\n<div class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          exportAs: 'matButtonToggle',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disableRipple'],
          host: {
            '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
            '[class.mat-button-toggle-checked]': 'checked',
            '[class.mat-button-toggle-disabled]': 'disabled',
            '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
            'class': 'mat-button-toggle',
            // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
            // but can still receive focus from things like cdkFocusInitial.
            '[attr.tabindex]': '-1',
            '[attr.id]': 'id',
            '[attr.name]': 'null',
            '(focus)': 'focus()'
          },
          styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"]
        }]
      }];
      /** @nocollapse */

      MatButtonToggle.ctorParameters = function () {
        return [{
          type: MatButtonToggleGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatButtonToggle.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        _buttonElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['button']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/button-toggle/button-toggle-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatButtonToggleModule = function MatButtonToggleModule() {
        _classCallCheck(this, MatButtonToggleModule);
      };

      MatButtonToggleModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
          declarations: [MatButtonToggleGroup, MatButtonToggle]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/button-toggle/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=button-toggle.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~about-about-module-ngfactory~comparar-comparar-module-ngfactory~home-evamed-home-evamed-modu~309a67d0-es5.js.map