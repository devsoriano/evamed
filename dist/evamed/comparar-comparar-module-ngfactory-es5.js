(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comparar-comparar-module-ngfactory"], {
    /***/
    "1U8D":
    /*!**************************************************!*\
      !*** ./src/app/pie-chart/pie-chart.component.ts ***!
      \**************************************************/

    /*! exports provided: PieChartComponent */

    /***/
    function U8D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () {
        return PieChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/calculos/Subetapas.json */
      "j2Il");

      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/app/calculos/Subetapas.json */
      "j2Il", 1);

      var PieChartComponent = /*#__PURE__*/function () {
        function PieChartComponent() {
          _classCallCheck(this, PieChartComponent);

          this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subetapas_list = src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_1__;
          this.idSubetapas = {};
          this.colores = [['#2E9A67', '#4DBE89', '#60E3A6', '#1f8253'], ['#148A93', '#0da8b6', '#64dee6', '#67c1c9'], ['#8F5091', '#d37cd4', '#8c4c90', '#6c1d6c'], ['#DEA961', '#d99d1c', '#d59a3d', '#f5e381'], ['#4DBE89', '#148A93', '#8F5091', '#DEA961']];
          this.colores_elementos = [['#4DBE89', 'rgb(77, 170, 137)', 'rgb(77, 160, 137)', 'rgb(77, 150, 137)', 'rgb(77, 140, 137)', 'rgb(77, 130, 137)', 'rgb(77, 120, 137)', 'rgb(77, 110, 137)'], ['#148A93', 'rgb(20, 128, 147)', 'rgb(20, 118, 147)', 'rgb(20, 108, 147)', 'rgb(20, 98, 147)', 'rgb(20, 88, 147)', 'rgb(20, 78, 147)', 'rgb(20, 68, 147)', 'rgb(20, 58, 147)'], ['#8F5091', 'rgb(143, 70, 145)', 'rgb(143, 60, 145)', 'rgb(143, 50, 145)', 'rgb(143, 40, 145)', 'rgb(143, 30, 145)', 'rgb(143, 20, 145)', 'rgb(143, 10, 145)', 'rgb(143, 0, 145)'], ['#DEA961', 'rgb(222, 179, 97)', 'rgb(222, 169, 97)', 'rgb(222, 159, 97)', 'rgb(222, 149, 97)', 'rgb(222, 139, 97)', 'rgb(222, 129, 97)', 'rgb(222, 119, 97)', 'rgb(222, 109, 97)']];
          this.pieChartType = 'doughnut';
          this.pieChartOptions = {
            elements: {
              arc: {
                borderWidth: 0
              }
            },
            hover: {
              mode: null
            },
            tooltips: {
              enabled: false
            },
            plugins: {
              datalabels: {
                color: '#FFFFFF',
                font: {
                  size: 7
                }
              },
              legend: {
                position: 'bottom'
              }
            }
          };
          this.pieChartOptions_elementos = {
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
                  size: 7
                }
              }
            }
          };
          this.pieChartData = [];
          this.pieChartLabels = [];
          this.pieChartColor = [];
          this.etapa = '';
          this.showngraph = false;
          this.elemento_seleccionado = ' ';
          this.showlast = false;
          this.subetapas = [];
          this.totales = [];
        }

        _createClass(PieChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.Bandera_resultado == 1) {
              this.cargarDatos(' ', this.id);
            } else {
              this.cargarDatos(this.id, this.indicador);
              this.inputProyect.forEach(function (proyecto) {
                _this.subetapas = [].concat(_toConsumableArray(_this.subetapas), [{
                  idProyecto: proyecto.id,
                  eliminadas: []
                }]);
              });
            }

            console.log("Pie");
          } //cambio en la carga de gráficas dependiendo de la sección de resultados

        }, {
          key: "cambioIndicadorElementos",
          value: function cambioIndicadorElementos(ID, value, bandera) {
            this.id = ID;
            this.Bandera_resultado = bandera;

            if (this.Bandera_resultado == 1) {
              this.cargarDatos(" ", value);
            } else {
              this.cargarDatos(this.id, value);
            }
          } //cambio de ID en la gráfica de pie sección 3 de resutados

        }, {
          key: "cambioID",
          value: function cambioID(Id, IDproyecto) {
            if (IDproyecto == this.proyecto) {
              if (this.Bandera_resultado == 3) {
                this.cargarDatos(Id, ' ');
              }
            }
          }
        }, {
          key: "findSubetapa",
          value: function findSubetapa(etapa) {
            var aux = this.subetapas_list.filter(function (s) {
              return s['abreviacion'] == etapa;
            });

            if (aux.length > 0) {
              return aux[0].nombre_subeatapa;
            } else {
              return 'suma exacta';
            }
          }
        }, {
          key: "findUnidad",
          value: function findUnidad() {
            var final_unit;
            var impacto = this.indicador.replace(/\n/g, '');
            impacto = impacto.replace(/\s/g, '');
            this.unidades.forEach(function (element) {
              var aux_element = element['name_complete_potential_type'].replace(/\s/g, '');

              if (impacto === aux_element) {
                final_unit = element['unit_potential_type'];
              }
            });
            return final_unit;
          }
        }, {
          key: "cargarDatos",
          value: function cargarDatos(ID, indicador) {
            var _this2 = this;

            var auxdata;
            var color;
            var auxlabel = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];
            var auxlabel_dos = ['Materiales', 'Construccion', 'Uso', 'FinDeVida'];
            var auxdataLabel = [];
            var auxdatos = [];
            var datos = [];
            var aux = [];
            this.pieChartLabels = []; //carga datos para sección de resultados "Elementos constructivos por ciclo de vida"

            if (this.Bandera_resultado == 1) {
              this.pieChartData = [];
              var auxColor = {
                '#5A1002': 'rgb(90,16,2)',
                '#902511': 'rgb(144,37,17)',
                '#BE3218': 'rgb(190,50,24)',
                '#EB3F20': 'rgb(235,63,32)',
                '#EB5720': 'rgb(235,87,32)',
                '#EB7620': 'rgb(235,118,32)',
                '#EB9520': 'rgb(235,149,32)',
                '#EBC420': 'rgb(235,196,32)',
                '#EBDB20': 'rgb(235,219,32)',
                '#CCEB20': 'rgb(204,235,32)',
                '#76EB20': 'rgb(118,235,32)'
              };
              var suma = 0;
              var auxhelp = [];
              Object.keys(this.inputProyect).forEach(function (element, index) {
                var resultado_actual = _this2.inputProyect[element];
                suma = suma + resultado_actual;
                auxhelp = [].concat(_toConsumableArray(auxhelp), [resultado_actual]);
              });
              auxdatos = auxhelp.sort(function (n1, n2) {
                if (n1 > n2) {
                  return 1;
                }

                if (n1 < n2) {
                  return -1;
                }

                return 0;
              });
              auxdatos = auxdatos.reverse();
              var sumaOtros = 0;
              var ColorDesplegado = [];
              var help = auxColor[this.colorDispercion].match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
              var cambioR = help[1];
              var cambioG = help[2];
              var cambioB = help[3];
              auxdatos.forEach(function (element, index) {
                if (index <= 2) {
                  aux.push((element / suma * 100).toFixed(2));
                  var auxrgbcolor = 'rgb(';
                  auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');

                  if (255 - cambioR >= 40) {
                    cambioR = (Number(cambioR) + 40).toString();
                  } else if (cambioG - 40 >= 0) {
                    cambioG = (Number(cambioG) - 40).toString();
                  } else {
                    cambioB = (Number(cambioB) + 40).toString();
                  }

                  ColorDesplegado.push(auxrgbcolor);
                } else {
                  sumaOtros = sumaOtros + element;
                }
              });

              if (auxdatos.length > 3) {
                aux.push((sumaOtros / suma * 100).toFixed(2));
                var auxrgbcolor = 'rgb(';
                auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');

                if (255 - cambioR >= 40) {
                  cambioR = (Number(cambioR) + 40).toString();
                } else if (cambioG - 40 >= 0) {
                  cambioG = (Number(cambioG) - 40).toString();
                } else {
                  cambioB = (Number(cambioB) + 40).toString();
                }

                ColorDesplegado.push(auxrgbcolor);
              }

              auxdata = [{
                data: aux,
                backgroundColor: ColorDesplegado
              }];
              this.pieChartData = [].concat(_toConsumableArray(this.pieChartData), [auxdata]);
              this.showMe_elementos = true;
            } else if (this.Bandera_resultado == 2) {
              this.pieChartData = [];

              if (indicador === ' ') {} else {
                this.inputProyect.forEach(function (proyecto, numProyect) {
                  //let auxid = proyecto.id
                  _this2.idSubetapas[numProyect] = {};
                  aux = proyecto.Datos[indicador];
                  Object.keys(auxlabel).forEach(function (element) {
                    if (auxlabel[element] === ID) {
                      color = _this2.colores[element];
                      auxdatos = aux[auxlabel[element]];
                      var auxSuma = 0;
                      Object.keys(aux[auxlabel[element]]).forEach(function (marcador, index) {
                        auxSuma = auxSuma + auxdatos[marcador];
                      });

                      _this2.totales.push(auxSuma.toExponential(2).toString().concat(_this2.findUnidad()));

                      Object.keys(aux[auxlabel[element]]).forEach(function (marcador, index) {
                        var abreviacion = marcador.concat(" - ");
                        var auxnamelabel = abreviacion.concat(_this2.findSubetapa(marcador)).concat(" : ");
                        auxnamelabel = auxnamelabel.concat(auxdatos[marcador].toExponential(2).toString());
                        _this2.idSubetapas[numProyect][index] = marcador.concat(numProyect);
                        auxdataLabel = [].concat(_toConsumableArray(auxdataLabel), [auxnamelabel.concat(_this2.findUnidad())]);
                        datos = [].concat(_toConsumableArray(datos), [(auxdatos[marcador] / auxSuma * 100).toFixed(2).toString()]);
                      });
                    }
                  });
                  auxdata = [{
                    data: datos,
                    backgroundColor: color
                  }];
                  _this2.pieChartColor = color;
                  _this2.pieChartData = [].concat(_toConsumableArray(_this2.pieChartData), [auxdata]);
                  _this2.pieChartLabels = [].concat(_toConsumableArray(_this2.pieChartLabels), [auxdataLabel]);
                  datos = [];
                  auxdataLabel = [];
                });
              }
            } else {
              this.pieChartData = [];
              Object.keys(auxlabel_dos).forEach(function (element) {
                if (auxlabel_dos[element] === ID) {
                  color = _this2.colores_elementos[element];
                }
              });
              auxdata = [{
                data: [4, 6, 6, 10, 10, 4, 3, 4, 4],
                backgroundColor: color
              }];
              this.pieChartData = [].concat(_toConsumableArray(this.pieChartData), [auxdata]);
            }
          }
        }, {
          key: "onChartClick",
          value: function onChartClick(e) {
            var _this3 = this;

            var aux;
            var auxd = [{
              Materiales: '#4DBE89'
            }, {
              Construccion: '#148A93'
            }, {
              Uso: '#8F5091'
            }, {
              FinDeVida: '#DEA961'
            }];

            if (this.chartDir.chart.getElementAtEvent(event)[0] != undefined) {
              if (this.bandera_click == 0) {
                Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(function (element) {
                  if (element == '_model') {
                    aux = _this3.chartDir.chart.getElementAtEvent(event)[0][element];
                    Object.keys(aux).forEach(function (item) {
                      if (item == 'backgroundColor') {
                        auxd.forEach(function (label) {
                          Object.keys(label).forEach(function (select) {
                            if (label[select] == aux[item]) {
                              _this3.acomodoDatos(select);
                            }
                          });
                        });
                      }
                    });
                  }
                });
              } else {
                Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(function (element) {
                  if (element == '_model') {
                    aux = _this3.chartDir.chart.getElementAtEvent(event)[0][element];

                    _this3.acomodoDatos(aux.backgroundColor);
                  }
                });
              }
            }
          }
        }, {
          key: "DeleteSubetapa",
          value: function DeleteSubetapa(subetapa, id) {
            var _this4 = this;

            var flag = true;
            var aux = '';

            var _iterator = _createForOfIteratorHelper(subetapa),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;

                if (i === ' ') {
                  flag = false;
                }

                if (flag) {
                  aux = aux.concat(i);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var subselect = aux;
            var idS = aux.concat(id);

            if (this.subetapas[id].eliminadas.includes(subselect)) {
              this.subetapas[id].eliminadas.forEach(function (datos, index) {
                if (datos === subselect) {
                  document.getElementById(idS).className = 'quitartachado';

                  _this4.subetapas[id].eliminadas.splice(index, 1);
                }
              });
            } else {
              document.getElementById(idS).className = 'tachar';
              this.subetapas[id].eliminadas.push(subselect);
            }

            this.RedistribucionGrafica(this.id, this.indicador);
          }
        }, {
          key: "RedistribucionGrafica",
          value: function RedistribucionGrafica(ID, indicador) {
            var _this5 = this;

            var auxdata;
            var color;
            var auxlabel = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];
            var auxdatos = [];
            var datos = [];
            var aux = [];
            this.pieChartData = [];
            this.inputProyect.forEach(function (proyecto, numProyect) {
              aux = proyecto.Datos[indicador];
              Object.keys(auxlabel).forEach(function (element) {
                if (auxlabel[element] === ID) {
                  color = _this5.colores[element];
                  auxdatos = aux[auxlabel[element]];
                  var auxSuma = 0;
                  var flag = true;
                  Object.keys(aux[auxlabel[element]]).forEach(function (marcador, index) {
                    _this5.subetapas[numProyect].eliminadas.forEach(function (element) {
                      if (element == marcador) {
                        flag = false;
                      }
                    });

                    if (flag) {
                      //console.log(marcador,auxSuma,auxdatos[marcador])
                      auxSuma = auxSuma + auxdatos[marcador];
                    }

                    flag = true;
                  });
                  _this5.totales[numProyect] = auxSuma.toExponential(2).toString().concat(_this5.findUnidad());
                  Object.keys(aux[auxlabel[element]]).forEach(function (marcador, index) {
                    _this5.subetapas[numProyect].eliminadas.forEach(function (element) {
                      if (element == marcador) {
                        flag = false;
                      }
                    });

                    if (flag) {
                      datos = [].concat(_toConsumableArray(datos), [(auxdatos[marcador] / auxSuma * 100).toFixed(2).toString()]);
                    } else {
                      datos = [].concat(_toConsumableArray(datos), [0]);
                    }

                    flag = true;
                  });
                }
              });
              auxdata = [{
                data: datos,
                backgroundColor: color
              }];
              _this5.pieChartData = [].concat(_toConsumableArray(_this5.pieChartData), [auxdata]);
              datos = [];
            });
          } //Acomoda datos para mandar a llamar la siguiente gráfica

        }, {
          key: "acomodoDatos",
          value: function acomodoDatos(value) {
            var data;

            if (this.bandera_click == 0) {
              if (value == this.etapa) {
                this.etapa = ' ';
                this.showngraph = false;
              } else {
                this.etapa = value;
                this.showngraph = true;
              }

              data = {
                etapa: this.etapa,
                show: this.showngraph
              };
            } else {
              if (this.elemento_seleccionado == value) {
                this.elemento_seleccionado = ' ';
                this.showlast = false;
              } else {
                this.elemento_seleccionado = value;
                this.showlast = true;
              }

              data = {
                etapa: this.elemento_seleccionado,
                show: this.showlast
              };
            } // console.log('pie',this.pieChartData)


            this.ClickEvent.emit(data);
          }
        }]);

        return PieChartComponent;
      }();
      /***/

    },

    /***/
    "5MZ9":
    /*!******************************************************!*\
      !*** ./src/app/calculos/calculos-segunda-seccion.ts ***!
      \******************************************************/

    /*! exports provided: CalculosSegundaSeccion */

    /***/
    function MZ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculosSegundaSeccion", function () {
        return CalculosSegundaSeccion;
      });
      /* harmony import */


      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/calculos/Subetapas.json */
      "j2Il");

      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/app/calculos/Subetapas.json */
      "j2Il", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CalculosSegundaSeccion = /*#__PURE__*/function () {
        function CalculosSegundaSeccion() {
          _classCallCheck(this, CalculosSegundaSeccion);

          this.subetapas_list = src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0__;
          this.impactosIgnorar2 = ['PARNR', 'POT', 'Human toxicity', 'Fresh water aquatic ecotox.', 'Marine aquatic ecotoxicity', 'Terrestrial ecotoxicity'];
        }

        _createClass(CalculosSegundaSeccion, [{
          key: "OperacionesDeFasePorElementoConstructivo",
          value: function OperacionesDeFasePorElementoConstructivo(idProyecto, info, BD) {
            var _this6 = this;

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
            schemeProyect = this.materialSchemeProyectList.filter(function (msp) {
              return msp['project_id'] == idProyecto;
            });
            var impacto_ban = true;
            var nameImpacto;
            this.potentialTypesList.forEach(function (impacto, index) {
              _this6.impactosIgnorar2.forEach(function (ignorar) {
                if (impacto['name_potential_type'] === ignorar) {
                  impacto_ban = false;
                }
              });

              if (impacto_ban) {
                nameImpacto = impacto['name_complete_potential_type'];
                nameImpacto = _this6.ajustarNombre(nameImpacto);
                Datos[nameImpacto] = {};
                var elementoscreados = [];
                var sumaParaReempazos = {};
                var auxMaterialesTransporte = {};
                var auxMaterialesYaSumados = {}; //Cálculos de la sección de producción

                var etapas = [2, 3, 4]; //Subetaps A1 A2 y A3

                var banderaMaterialEP = false;

                if (schemeProyect.length > 0) {
                  schemeProyect.forEach(function (ps, num) {
                    var baseDatosMaterial = _this6.materialList.filter(function (bs) {
                      return bs['id'] == ps['material_id'];
                    });

                    if (BD[baseDatosMaterial[0]['database_from']]) {
                      if (baseDatosMaterial[0]['database_from'] === 'EPiC') {
                        var materiales_subetapa = _this6.materialSchemeDataList.filter(function (msd) {
                          return msd['material_id'] == ps['material_id'] && msd['standard_id'] == 1 && msd['potential_type_id'] == impacto['id'];
                        });

                        if (materiales_subetapa.length > 0) {
                          banderaMaterialEP = false;
                          materiales_subetapa.forEach(function (material, index) {
                            if (!elementoscreados.includes(ps['section_id'])) {
                              elementoscreados.push(ps['section_id']);
                              Datos[nameImpacto][ps['section_id']] = 0;
                              sumaParaReempazos[ps['section_id']] = {};
                              auxMaterialesYaSumados[ps['section_id']] = [];
                              auxMaterialesTransporte[ps['section_id']] = [];
                            }

                            Datos[nameImpacto][ps['section_id']] = Datos[nameImpacto][ps['section_id']] + materiales_subetapa[index]['value'] * ps['quantity'];
                          });
                        }
                      } else {
                        etapas.forEach(function (subetapa) {
                          var materiales_subetapa = _this6.materialSchemeDataList.filter(function (msd) {
                            return msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'];
                          });

                          if (materiales_subetapa.length > 0) {
                            banderaMaterialEP = false;
                            materiales_subetapa.forEach(function (material, index) {
                              if (!elementoscreados.includes(ps['section_id'])) {
                                elementoscreados.push(ps['section_id']);
                                Datos[nameImpacto][ps['section_id']] = 0;
                                sumaParaReempazos[ps['section_id']] = {};
                                auxMaterialesYaSumados[ps['section_id']] = [];
                                auxMaterialesTransporte[ps['section_id']] = [];
                              }

                              Datos[nameImpacto][ps['section_id']] = Datos[nameImpacto][ps['section_id']] + materiales_subetapa[index]['value'] * ps['quantity'];
                            });
                          }
                        });
                      }
                    }
                  });
                } //A4 Transporte


                if (schemeProyect.length > 0) {
                  schemeProyect.forEach(function (ps) {
                    var baseDatosMaterial = _this6.materialList.filter(function (bs) {
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

                      var value_transport = _this6.PTList.filter(function (val) {
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

                      var _value_transport = _this6.PTList.filter(function (val) {
                        return val['potential_type_id'] == impacto['id'] && val['transport_id'] == _transporteSeleccionado;
                      });

                      nacional = _value_transport[0]['value'] * ps['distance_end'];
                    }

                    var conversion_val = _this6.conversionList.filter(function (val) {
                      return val['material_id'] == ps['material_id'];
                    });

                    var peso = 1;

                    if (conversion_val.length > 0) {
                      peso = conversion_val[0]['value'];
                    }

                    if (BD[baseDatosMaterial[0]['database_from']]) {
                      if (!elementoscreados.includes(ps['section_id'])) {
                        elementoscreados.push(ps['section_id']);
                        Datos[nameImpacto][ps['section_id']] = 0;
                        sumaParaReempazos[ps['section_id']] = {};
                        auxMaterialesTransporte[ps['section_id']] = [];
                        auxMaterialesYaSumados[ps['section_id']] = [];
                      }

                      if (!auxMaterialesTransporte[ps['section_id']].includes(ps['material_id'])) {
                        sumaParaReempazos[ps['section_id']][ps['material_id']] = 0;
                        auxMaterialesTransporte[ps['section_id']].push(ps['material_id']);
                      }

                      sumaParaReempazos[ps['section_id']][ps['material_id']] += peso * ps['quantity'] * (nacional + internacional);
                      Datos[nameImpacto][ps['section_id']] = Datos[nameImpacto][ps['section_id']] + peso * ps['quantity'] * (nacional + internacional);
                    }
                  });
                } //A5 instalación


                var CSEs = _this6.CSEList.filter(function (c) {
                  return c['project_id'] == idProyecto;
                });

                if (CSEs.length > 0) {
                  CSEs.forEach(function (CSE) {
                    var energia = _this6.SIDList.filter(function (sid) {
                      return sid['sourceInformarion_id'] == CSE['source_information_id'] && sid['potential_type_id'] == impacto['id'];
                    });

                    if (energia.length > 0) {
                      if (!elementoscreados.includes(CSE['section_id'])) {
                        elementoscreados.push(CSE['section_id']);
                        Datos[nameImpacto][CSE['section_id']] = 0;
                      }

                      Datos[nameImpacto][CSE['section_id']] = Datos[nameImpacto][CSE['section_id']] + energia[0]['value'] * CSE['quantity'];
                    }
                  });
                } //B4
                //las etapas son las mismas que en la sección de producción


                if (schemeProyect.length > 0) {
                  schemeProyect.forEach(function (ps, num) {
                    var baseDatosMaterial = _this6.materialList.filter(function (bs) {
                      return bs['id'] == ps['material_id'];
                    });

                    if (BD[baseDatosMaterial[0]['database_from']]) {
                      if (!elementoscreados.includes(ps['section_id'])) {
                        elementoscreados.push(ps['section_id']);
                        Datos[nameImpacto][ps['section_id']] = 0;
                      }

                      var valSum = sumaParaReempazos[ps['section_id']][ps['material_id']];

                      if (valSum != undefined) {
                        Datos[nameImpacto][ps['section_id']] = Datos[nameImpacto][ps['section_id']] + valSum * ps['replaces'];
                      }

                      if (baseDatosMaterial[0]['database_from'] === 'EPiC') {
                        var materiales_subetapa = _this6.materialSchemeDataList.filter(function (msd) {
                          return msd['material_id'] == ps['material_id'] && msd['standard_id'] == 1 && msd['potential_type_id'] == impacto['id'];
                        });

                        if (materiales_subetapa.length > 0) {
                          materiales_subetapa.forEach(function (material, index) {
                            //let auxValorProduccionTransporte = 0;
                            if (!elementoscreados.includes(ps['section_id'])) {
                              elementoscreados.push(ps['section_id']);
                              Datos[nameImpacto][ps['section_id']] = 0;
                            }

                            Datos[nameImpacto][ps['section_id']] = Datos[nameImpacto][ps['section_id']] + materiales_subetapa[index]['value'] * ps['quantity'] * ps['replaces'];
                          });
                        }
                      } else {
                        etapas.forEach(function (subetapa) {
                          var materiales_subetapa = _this6.materialSchemeDataList.filter(function (msd) {
                            return msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'];
                          });

                          if (materiales_subetapa.length > 0) {
                            materiales_subetapa.forEach(function (material, index) {
                              var auxValorProduccionTransporte = 0;

                              if (!elementoscreados.includes(ps['section_id'])) {
                                elementoscreados.push(ps['section_id']);
                                Datos[nameImpacto][ps['section_id']] = 0;
                              }

                              Datos[nameImpacto][ps['section_id']] = Datos[nameImpacto][ps['section_id']] + materiales_subetapa[index]['value'] * ps['quantity'] * ps['replaces'];
                            });
                          }
                        });
                      }
                    }
                  });
                } //C1


                var ECDPs = _this6.ECDPList.filter(function (c) {
                  return c['project_id'] == idProyecto;
                });

                if (ECDPs.length > 0) {
                  ECDPs.forEach(function (ECDP) {
                    var energia = _this6.SIDList.filter(function (sid) {
                      return sid['sourceInformarion_id'] == ECDP['source_information_id'] && sid['potential_type_id'] == impacto['id'];
                    });

                    if (!elementoscreados.includes(ECDP['section_id'])) {
                      elementoscreados.push(ECDP['section_id']);
                      Datos[nameImpacto][ECDP['section_id']] = 0;
                    }

                    Datos[nameImpacto][ECDP['section_id']] = Datos[nameImpacto][ECDP['section_id']] + ECDP['quantity'] * energia[0]['value'];
                  });
                }
              }

              impacto_ban = true;
            });
            return Datos;
          }
        }, {
          key: "ajustarNombre",
          value: function ajustarNombre(name) {
            var help = name;
            var spacios = 0;
            var numC = 0;
            var maxlinea = 0;

            var _iterator2 = _createForOfIteratorHelper(help),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var i = _step2.value;

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
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return help;
          }
        }]);

        return CalculosSegundaSeccion;
      }();

      CalculosSegundaSeccion.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        factory: function CalculosSegundaSeccion_Factory() {
          return new CalculosSegundaSeccion();
        },
        token: CalculosSegundaSeccion,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "5wQT":
    /*!**************************************************************************!*\
      !*** ./src/app/comparar/component/comparar/styleSD.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function wQT(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".div-second-tab[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: auto;\n}\n.div-second-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0px;\n  color: #707070;\n  opacity: 1;\n  font-size: 15px;\n  margin-top: 35px;\n}\n.div-second-tab[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 65px;\n  margin: auto;\n  background-color: #ffffff;\n}\n.div-second-tab[_ngcontent-%COMP%]   .linea-select[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 65px;\n  margin: auto;\n  background-color: #e3c500;\n}\n.div-second-tab[_ngcontent-%COMP%]   .indicadores[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 32px;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-between;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-sin-selecciomar[_ngcontent-%COMP%] {\n  width: 144px;\n  height: 34px;\n  background: #efefef;\n  border-radius: 4px;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  margin: 5px;\n  border: 0;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-sin-selecciomar[_ngcontent-%COMP%]   .color-texto[_ngcontent-%COMP%] {\n  color: #767676;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-seleccionado[_ngcontent-%COMP%] {\n  width: 144px;\n  height: 34px;\n  background: #ffffff;\n  border-radius: 4px;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  border: 1px solid #edc903;\n  box-shadow: 0px 3px 6px #00000029;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-seleccionado[_ngcontent-%COMP%]   .color-texto[_ngcontent-%COMP%] {\n  color: #343434;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .button-elemento-seleccionado[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 34px;\n  background: none;\n  text-align: left;\n  font-size: 13px;\n  border: 0;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .button-icono[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: none;\n  text-align: left;\n  border-radius: 50%;\n  padding: 0px;\n  border: none;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .button-icono[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #aca8a8;\n  padding: 0px;\n  border-radius: 50%;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .button-icono-seleccionado[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: none;\n  text-align: left;\n  border-radius: 50%;\n  padding: 0px;\n  border: none;\n}\n.div-second-tab[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .button-icono-seleccionado[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #aca8a8;\n  padding: 0px;\n  border-radius: 50%;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.espacio-img[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n  height: 277px;\n  margin: 10px;\n}\n.espacio-img[_ngcontent-%COMP%]   .edificio-individual[_ngcontent-%COMP%] {\n  height: 205px;\n  width: 300px;\n  background-color: #EDEDED;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  font-size: 13px;\n  margin: 5px;\n  border: 0;\n}\n.espacio-img[_ngcontent-%COMP%]   .edificio-individual-seleccionado[_ngcontent-%COMP%] {\n  height: 205px;\n  width: 300px;\n  background: #ffffff;\n  border-radius: 4px;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  margin: 5px;\n  border: 1px solid #edc903;\n  box-shadow: 0px 3px 6px #00000029;\n}\n.espacio-img[_ngcontent-%COMP%]   .complemento-edificio[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  height: auto;\n  margin: 10px;\n}\n.espacio-img[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  margin-top: 48px;\n  padding-left: 16px;\n}\n.img-edificio[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  \n}\n.img-edificio[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 144px;\n  height: auto;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  font-size: 13px;\n  margin: 5px;\n  border: 0;\n}\n.img-edificio-seleccionado[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 50px;\n  margin-left: 52px;\n  margin-bottom: 40px;\n  \n}\n.img-edificio-seleccionado[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 144px;\n  height: auto;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  font-size: 13px;\n  margin: 5px;\n  border: 1px solid #edc903;\n  border-radius: 11px;\n  box-shadow: 0px 3px 6px #00000029;\n}\n.last-div-section-two[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .button-graph[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  margin-left: 56px;\n  margin-right: 56px;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .button-graph[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2px;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .seccion[_ngcontent-%COMP%] {\n  display: flex;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .seccion[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 450px;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .seccion[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 478px;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .circulo-color-tabla[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 29px;\n  border-radius: 50%;\n  padding-top: 7px;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .graficas-dispercion[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.last-div-section-two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  letter-spacing: 0px;\n  color: #343434;\n  opacity: 1;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .mat-column-no[_ngcontent-%COMP%] {\n  width: 32px;\n  padding-right: 24px;\n  text-align: center;\n  color: #aca8a8;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .mat-column-porcentaje[_ngcontent-%COMP%] {\n  width: 32px;\n  padding-right: 12px;\n  padding-left: 12px;\n  text-align: center;\n  color: #aca8a8;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .mat-column-numero[_ngcontent-%COMP%] {\n  width: 40px;\n  padding-right: 6px;\n  padding-left: 6px;\n  text-align: center;\n  color: #aca8a8;\n}\n.last-div-section-two[_ngcontent-%COMP%]   .mat-column-material[_ngcontent-%COMP%] {\n  color: #aca8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVTRC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVOO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUNOO0FBRUk7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0FBQU47QUFDTTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFSO0FBQ1E7RUFDRSxjQUFBO0FBQ1Y7QUFHTTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLGlDQUFBO0FBSFI7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQU1NO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLFNBQUE7QUFQUjtBQVNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVBSO0FBUVE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTlY7QUFTTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFQUjtBQVFRO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5WO0FBWUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBVEY7QUFXRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBVEo7QUFXRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQVRKO0FBV0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVEo7QUFhRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWVBO0VBQ0kscUJBQUE7RUFJQSxrQkFBQTtFQVdBOzs7Ozs7Ozs7SUFBQTtBQWhCSjtBQU1JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSk47QUFrQkE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQWFBOzs7Ozs7Ozs7SUFBQTtBQWxCSjtBQU1JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFKTjtBQWtCQTtFQUNJLHFCQUFBO0FBZko7QUFnQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWROO0FBZ0JNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFkUjtBQWlCSTtFQUNFLGFBQUE7QUFmTjtBQWlCUTtFQUNFLFlBQUE7QUFmVjtBQWlCUTtFQUNFLFlBQUE7QUFmVjtBQW9CSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWxCTjtBQXFCSTtFQUNFLFlBQUE7QUFuQk47QUFzQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQXBCTjtBQXVCSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXJCTjtBQXdCSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBdEJOO0FBeUJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF2Qk47QUEwQkk7RUFDRSxjQUFBO0FBeEJOIiwiZmlsZSI6InN0eWxlU0Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtc2Vjb25kLXRhYiB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcCB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZG90IHtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAubGluZWEtc2VsZWN0e1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzYzUwMDtcclxuICAgIH1cclxuICAgIC5pbmRpY2Fkb3Jlc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIH1cclxuICBcclxuICAgIC5ib3RvbmVzLWVsZW1lbnRvcy1jb250cnVjdGl2b3Mge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAuZXNwYWNpby1zaW4tc2VsZWNjaW9tYXIge1xyXG4gICAgICAgIC8vcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICB3aWR0aDogMTQ0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIC5jb2xvci10ZXh0byB7XHJcbiAgICAgICAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmVzcGFjaW8tc2VsZWNjaW9uYWRvIHtcclxuICAgICAgICAvL3BhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvL21hcmdpbjogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGM5MDM7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICAgIC5jb2xvci10ZXh0byB7XHJcbiAgICAgICAgICBjb2xvcjogIzM0MzQzNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmJ1dHRvbi1lbGVtZW50by1zZWxlY2Npb25hZG8ge1xyXG4gICAgICAgIC8vcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIC8vY29sb3I6ICM3Njc2NzY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAvL21hcmdpbjogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgfVxyXG4gICAgICAuYnV0dG9uLWljb25vIHtcclxuICAgICAgICB3aWR0aDogMzRweDtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdGVyaWFsLWljb25zLm1hdC1pY29uLW5vLWNvbG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAjYWNhOGE4O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJ1dHRvbi1pY29uby1zZWxlY2Npb25hZG8ge1xyXG4gICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xyXG4gICAgICAgICAgY29sb3I6ICNhY2E4YTg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZXNwYWNpby1pbWd7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDI3N3B4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAuZWRpZmljaW8taW5kaXZpZHVhbHtcclxuICAgIGhlaWdodDogMjA1cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLmVkaWZpY2lvLWluZGl2aWR1YWwtc2VsZWNjaW9uYWRve1xyXG4gICAgaGVpZ2h0OiAyMDVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGM5MDM7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgfVxyXG4gIC5jb21wbGVtZW50by1lZGlmaWNpb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIC5jaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1lZGlmaWNpbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvL21hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiA1MnB4O1xyXG4gICAgLy9tYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgaHlwaGVuczogYXV0bztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIC5jdWFkcm8tY29sb3J7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgfSovXHJcbn1cclxuICBcclxuLmltZy1lZGlmaWNpby1zZWxlY2Npb25hZG8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxNDRweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGM5MDM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIH1cclxuICAgIC8qaW1nIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VEQzkwMztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICB3aWR0aDogMjk1cHg7XHJcbiAgICAgIGhlaWdodDogMjMycHg7XHJcbiAgICB9Ki9cclxufVxyXG5cclxuLmxhc3QtZGl2LXNlY3Rpb24tdHdvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC5idXR0b24tZ3JhcGgge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNTZweDtcclxuICBcclxuICAgICAgbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VjY2lvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIHdpZHRoOiA0NzhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5jaXJjdWxvLWNvbG9yLXRhYmxhIHtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB3aWR0aDogMjlweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmdyYWZpY2FzLWRpc3BlcmNpb24ge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogIzM0MzQzNDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtY29sdW1uLW5vIHtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNhY2E4YTg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LWNvbHVtbi1wb3JjZW50YWplIHtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2FjYThhODtcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtY29sdW1uLW51bWVybyB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjYWNhOGE4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdC1jb2x1bW4tbWF0ZXJpYWwge1xyXG4gICAgICBjb2xvcjogI2FjYThhODtcclxuICAgIH1cclxufSJdfQ== */"];
      /***/
    },

    /***/
    "6ybh":
    /*!****************************************************************!*\
      !*** ./src/app/bar-chart-simple/bar-chart-simple.component.ts ***!
      \****************************************************************/

    /*! exports provided: BarChartSimpleComponent */

    /***/
    function ybh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartSimpleComponent", function () {
        return BarChartSimpleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BarChartSimpleComponent = /*#__PURE__*/function () {
        function BarChartSimpleComponent() {
          _classCallCheck(this, BarChartSimpleComponent);

          this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.barChartOptions = {
            responsive: true,
            events: ['click'],
            tooltips: {
              enabled: false
            },
            hover: {
              mode: null
            },
            legend: {
              display: false
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
          this.barChartLabels = ['Materiales', 'Construccion', 'Uso', 'FinDeVida'];
          this.barChartLabelsSecond = ['Grava', 'Arena', 'Varilla', 'Cemento', 'Cal', 'Ladrillo'];
          this.barChartType = 'bar';
          this.barChartLegend = false;
          this.barChartPlugins = [];
          this.showngraph = false;
          this.etapa = '';
          this.barChartData = [{
            data: [45, 37, 60, 70],
            backgroundColor: ['#4DBE89', '#148A93', '#8F5091', '#DEA961']
          }];
          this.color_select = [['#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89'], ['#148A93', '#148A93', '#148A93', '#148A93', '#148A93', '#148A93'], ['#8F5091', '#8F5091', '#8F5091', '#8F5091', '#8F5091', '#8F5091'], ['#DEA961', '#DEA961', '#DEA961', '#DEA961', '#DEA961', '#DEA961']];
          this.barChartDataSecond = [];
        }

        _createClass(BarChartSimpleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.showlastGr) {
              if (this.banderaDispercion) {
                this.CargarDatosDispercion();
              } else {
                this.CargarDatos(this.elemento, this.ciclo);
              }
            }
          } //Carga de datos, dependiendo de la sección mostrada

        }, {
          key: "CargarDatos",
          value: function CargarDatos(elemento, ciclo) {
            var _this7 = this;

            var auxlabel = ['Materiales', 'Construccion', 'Uso', 'FinDeVida'];
            var auxdatos = [28, 20, 12, 40, 25, 5];
            var auxdata;
            var color;
            Object.keys(auxlabel).forEach(function (element) {
              if (auxlabel[element] === ciclo) {
                color = _this7.color_select[element];
              }
            });
            auxdata = [{
              data: auxdatos,
              backgroundColor: color
            }];
            this.barChartDataSecond = [].concat(_toConsumableArray(this.barChartDataSecond), [auxdata]);
          }
        }, {
          key: "CargarDatosDispercion",
          value: function CargarDatosDispercion() {
            var _this8 = this;

            var suma = 0;
            var auxdatos = [];
            var auxhelp = [];
            var aux = [];
            var auxdata = [];
            this.barChartDataSecond = [];
            this.barChartLabelsSecond = [];
            var auxColor = {
              '#5A1002': 'rgb(90,16,2)',
              '#902511': 'rgb(144,37,17)',
              '#BE3218': 'rgb(190,50,24)',
              '#EB3F20': 'rgb(235,63,32)',
              '#EB5720': 'rgb(235,87,32)',
              '#EB7620': 'rgb(235,118,32)',
              '#EB9520': 'rgb(235,149,32)',
              '#EBC420': 'rgb(235,196,32)',
              '#EBDB20': 'rgb(235,219,32)',
              '#CCEB20': 'rgb(204,235,32)',
              '#76EB20': 'rgb(118,235,32)'
            };
            Object.keys(this.info).forEach(function (element, index) {
              var resultado_actual = _this8.info[element];
              suma = suma + resultado_actual;
              auxhelp = [].concat(_toConsumableArray(auxhelp), [resultado_actual]);
            });
            auxdatos = auxhelp.sort(function (n1, n2) {
              if (n1 > n2) {
                return 1;
              }

              if (n1 < n2) {
                return -1;
              }

              return 0;
            });
            auxdatos = auxdatos.reverse();
            var sumaOtros = 0;
            var ColorDesplegado = [];
            var help = auxColor[this.colorDispercion].match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
            var cambioR = help[1];
            var cambioG = help[2];
            var cambioB = help[3];
            auxdatos.forEach(function (element, index) {
              if (index <= 2) {
                aux.push((element / suma * 100).toFixed(2));
                _this8.barChartLabelsSecond = [].concat(_toConsumableArray(_this8.barChartLabelsSecond), [(index + 1).toString()]);
                var auxrgbcolor = 'rgb(';
                auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');

                if (255 - cambioR >= 40) {
                  cambioR = (Number(cambioR) + 40).toString();
                } else if (cambioG - 40 >= 0) {
                  cambioG = (Number(cambioG) - 40).toString();
                } else {
                  cambioB = (Number(cambioB) + 40).toString();
                }

                ColorDesplegado.push(auxrgbcolor);
              } else {
                sumaOtros = sumaOtros + element;
              }
            });

            if (auxdatos.length > 3) {
              this.barChartLabelsSecond = [].concat(_toConsumableArray(this.barChartLabelsSecond), ['otros']);
              aux.push((sumaOtros / suma * 100).toFixed(2));
              var auxrgbcolor = 'rgb(';
              auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');

              if (255 - cambioR >= 40) {
                cambioR = (Number(cambioR) + 40).toString();
              } else if (cambioG - 40 >= 0) {
                cambioG = (Number(cambioG) - 40).toString();
              } else {
                cambioB = (Number(cambioB) + 40).toString();
              }

              ColorDesplegado.push(auxrgbcolor);
            }

            auxdata = [{
              data: aux,
              backgroundColor: ColorDesplegado
            }];
            this.barChartDataSecond = [].concat(_toConsumableArray(this.barChartDataSecond), [auxdata]);
          } //Acomoda datos para mandar a llamar la siguiente gráfica

        }, {
          key: "acomodoDatos",
          value: function acomodoDatos(value) {
            if (value == this.etapa) {
              this.etapa = ' ';
              this.showngraph = false;
            } else {
              this.etapa = value;
              this.showngraph = true;
            }

            var data = {
              etapa: this.etapa,
              show: this.showngraph
            };
            this.ClickEvent.emit(data);
          } //detección de click

        }, {
          key: "onChartClick",
          value: function onChartClick(e) {
            var _this9 = this;

            var aux;

            if (this.chartDir.chart.getElementAtEvent(event)[0] != undefined) {
              Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(function (element) {
                if (element == '_model') {
                  aux = _this9.chartDir.chart.getElementAtEvent(event)[0][element];
                  Object.keys(aux).forEach(function (item) {
                    if (item == 'label') {
                      _this9.acomodoDatos(aux[item]);
                    }
                  });
                }
              });
            }
          }
        }]);

        return BarChartSimpleComponent;
      }();
      /***/

    },

    /***/
    "7feb":
    /*!*************************************************************************************************!*\
      !*** ./src/app/comparar/component/graficas-tercer-seccion/graficas-tercer-seccion.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: GraficasTercerSeccionComponent */

    /***/
    function feb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraficasTercerSeccionComponent", function () {
        return GraficasTercerSeccionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chartjs-plugin-datalabels */
      "qb46");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);

      var GraficasTercerSeccionComponent = /*#__PURE__*/function () {
        function GraficasTercerSeccionComponent() {
          _classCallCheck(this, GraficasTercerSeccionComponent);

          this.CambioEstadoTercerSeccion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.InfoMostrada = [];
          this.botones_elementos_constructivos = [];
          this.elementoContructivoSelecionado = " ";
          this.unidadImpactoAmiental = "";
          this.CicloColores = {
            FinDeVida: '#DEA961',
            Uso: '#8F5091',
            Construccion: '#148A93',
            Producción: '#4DBE89',
            General: '#707070',
            B4: '#8F5091',
            A4: '#148A93',
            A1: '#4DBE89',
            A2: '#319F6B',
            A3: '#368460',
            'A1-A3': '#1DF28E'
          };
          this.CicloColoresBW = {
            Producción: 'rgba(77,190,137,0.2)',
            Construccion: 'rgba(20,136,147,0.2)',
            Uso: 'rgba(143,80,145,0.2)',
            B4: 'rgba(143, 80, 145, 0.2)',
            A4: 'rgba(20, 138, 147, 0.2)',
            A1: 'rgba(77, 190, 137, 0.2)',
            A2: 'rgba(49, 159, 107, 0.2)',
            A3: 'rgba(54, 132, 96, 0.2)',
            'A1-A3': 'rgba(29, 242, 142, 0.2)'
          };
          this.CicloColoresRGB = {
            Uso: 'rgb(143, 80, 145)',
            Construccion: 'rgb(20, 138, 147)',
            Producción: 'rgb(77, 190, 137)',
            B4: 'rgb(143, 80, 145)',
            A4: 'rgb(20, 138, 147)',
            A1: 'rgb(77, 190, 137)',
            A2: 'rgb(49, 159, 107)',
            A3: 'rgb(54, 132, 96)',
            'A1-A3': 'rgb(29, 242, 142)'
          };
          this.displayedColumnsDispercion = ['no', 'material', 'porcentaje', 'numero'];
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
          this.pieChartOptionsDos = {
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
                formatter: function formatter(val, ctx) {
                  return ctx.chart.data.labels[ctx.dataIndex];
                },
                color: '#FFFFFF',
                font: {
                  size: 8
                }
              }
            }
          };
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__];
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
        }

        _createClass(GraficasTercerSeccionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.botones_elementos_constructivos = this.Secciones;
            this.AjusteDatos();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.actualizarEstado();
          }
        }, {
          key: "AjusteDatos",
          value: function AjusteDatos() {
            var _this10 = this;

            this.inputProyect.forEach(function (proyecto) {
              var aux = {};

              var auxData = proyecto.data['materiales'][_this10.impactoAmbientalMostrado.toString()];

              aux['id'] = proyecto.idproyecto;
              aux['nombre'] = proyecto.nombre;
              aux['CicloGraficaPie'] = _this10.EstadoSeccion[aux['id']]['flagPie'];
              aux['CicloGraficaBar'] = _this10.EstadoSeccion[aux['id']]['fragBar'];
              aux['ElementosConstructivosGrafica'] = false;
              aux['DispercionElementoGrafica'] = false;
              aux['flagAgruparProduccion'] = _this10.EstadoSeccion[aux['id']]['agruparProduccion'];
              aux['textoBotonAgrupar'] = "Desagrupar";
              aux['DatosMateriales'] = proyecto.data['materiales'][_this10.impactoAmbientalMostrado.toString()];
              aux['DispercionElementos'] = proyecto.data['Calculos'][_this10.impactoAmbientalMostrado.toString()];

              if (_this10.FaseSeleccionada != ' ' || _this10.EstadoSeccion[aux['id']]['cicloSeleccionado'] != ' ') {
                var flagExisteSub = false;
                var seleccion = " ";

                if (_this10.FaseSeleccionada != ' ') {
                  seleccion = _this10.FaseSeleccionada.toString();
                  flagExisteSub = true;
                } else {
                  seleccion = _this10.EstadoSeccion[aux['id']]['cicloSeleccionado'];
                  Object.keys(auxData).forEach(function (E) {
                    if (seleccion === E) {
                      flagExisteSub = true;
                    } else {
                      Object.keys(auxData[E]).forEach(function (subE) {
                        if (seleccion === subE) {
                          flagExisteSub = true;
                        }
                      });
                    }
                  });
                }

                if (!flagExisteSub) {
                  aux['CicloSeleccionado'] = ' ';
                  aux['DatosElementosConstructivos'] = [];
                  aux['iconosElementosConstrucivos'] = {};
                  aux['infoTabla'] = _this10.IniciarTablaMateriales(aux['DatosMateriales'], "", 0, aux['flagAgruparProduccion'], " ");

                  var auxgrafica = _this10.IniciarGraficaMateriales(aux['DatosMateriales'], "", "General", 0, aux['flagAgruparProduccion'], "");

                  aux['DataGraficaMateriales'] = auxgrafica['grafica'];
                  aux['labelsMateriales'] = auxgrafica['labels'];
                  aux['Coloreslementos'] = {};
                } else {
                  aux['CicloSeleccionado'] = seleccion;
                  aux['Coloreslementos'] = _this10.ColoresElementos(aux['DispercionElementos'], seleccion, aux['flagAgruparProduccion']);
                  aux['DatosElementosConstructivos'] = _this10.GraficaElementosContructivos(aux['Coloreslementos']['valores'], aux['Coloreslementos']['colores']);
                  aux['ElementosConstructivosGrafica'] = true;
                  aux['infoTabla'] = _this10.IniciarTablaMateriales(aux['DatosMateriales'], aux['CicloSeleccionado'], 1, aux['flagAgruparProduccion'], " ");

                  var _auxgrafica = _this10.IniciarGraficaMateriales(aux['DatosMateriales'], aux['CicloSeleccionado'], aux['CicloSeleccionado'], 1, aux['flagAgruparProduccion'], aux['Coloreslementos']);

                  aux['DataGraficaMateriales'] = _auxgrafica['grafica'];
                  aux['labelsMateriales'] = _auxgrafica['labels'];
                  aux['iconosElementosConstrucivos'] = _this10.AjustarElementosMostrados(proyecto.data['Calculos'][_this10.impactoAmbientalMostrado.toString()], seleccion.toString(), aux['flagAgruparProduccion']);
                }
              } else {
                aux['DatosElementosConstructivos'] = [];
                aux['CicloSeleccionado'] = ' ';
                aux['iconosElementosConstrucivos'] = {};
                aux['infoTabla'] = _this10.IniciarTablaMateriales(aux['DatosMateriales'], "", 0, aux['flagAgruparProduccion'], " ");

                var _auxgrafica2 = _this10.IniciarGraficaMateriales(aux['DatosMateriales'], "", "General", 0, aux['flagAgruparProduccion'], "");

                aux['DataGraficaMateriales'] = _auxgrafica2['grafica'];
                aux['labelsMateriales'] = _auxgrafica2['labels'];
                aux['Coloreslementos'] = {};
              } //console.log(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()]);


              aux['DatosCicloVida'] = _this10.GraficaCicloVida(proyecto.data['Calculos'][_this10.impactoAmbientalMostrado.toString()], aux['CicloSeleccionado'], aux['flagAgruparProduccion'], auxData);
              aux['LabelsCicloVida'] = _this10.graficaCicloVidaBar(aux['DatosMateriales'], aux['flagAgruparProduccion']);
              aux['LabelsElementos'] = _this10.EncontrarLabelsElementos(proyecto.data['Calculos'][_this10.impactoAmbientalMostrado.toString()], aux['CicloSeleccionado']);
              aux['CicloVida'] = proyecto.data['Calculos'][_this10.impactoAmbientalMostrado.toString()];
              aux['ElementoConstructivoSeleccionado'] = ' ';
              aux['nombreSeccionMostrado'] = ' ';
              aux['idsIconosElementos'] = _this10.llenarIdsBotones(_this10.Secciones, proyecto.idproyecto);
              aux['coloresBotonesElementos'] = _this10.llenarColoresBotonesElementos(_this10.Secciones, aux['Coloreslementos']['colores'], aux['Coloreslementos']['orden']);

              var botonesCiclo = _this10.llenarBotonesCiclo(aux['flagAgruparProduccion'], aux['id'], aux['DatosMateriales']);

              aux['botonesCiclo'] = botonesCiclo['botones'];
              aux['ids_RespuestasBotones'] = botonesCiclo;

              _this10.InfoMostrada.push(aux);
            });
            this.unidadImpactoAmiental = this.findUnidad();
          }
        }, {
          key: "findUnidad",
          value: function findUnidad() {
            var final_unit;
            var impacto = this.impactoAmbientalMostrado.replace(/\n/g, '');
            impacto = impacto.replace(/\s/g, '');
            this.unidades.forEach(function (element) {
              var aux_element = element['name_complete_potential_type'].replace(/\s/g, '');

              if (impacto === aux_element) {
                final_unit = element['unit_potential_type'];
              }
            });
            return final_unit;
          }
        }, {
          key: "encontrarSubetapas",
          value: function encontrarSubetapas(data) {
            var aux = {};
            Object.keys(data).forEach(function (Etapa) {
              aux[Etapa] = [];
              Object.keys(data[Etapa]).forEach(function (SubE) {
                aux[Etapa].push(SubE);
              });
            });
            return aux;
          }
        }, {
          key: "actualizarEstado",
          value: function actualizarEstado() {
            var _this11 = this;

            //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
            var etapas = ['Producción', 'Construccion', 'Uso'];
            this.InfoMostrada.forEach(function (proyecto, index) {
              var auxSubetapas = _this11.encontrarSubetapas(_this11.InfoMostrada[index]['DatosMateriales']);

              if (_this11.InfoMostrada[index]['CicloSeleccionado'] != ' ') {
                var ciclo = _this11.InfoMostrada[index]['CicloSeleccionado'];

                if (_this11.InfoMostrada[index]['flagAgruparProduccion'] && etapas.includes(ciclo)) {
                  auxSubetapas[ciclo].forEach(function (auxC) {
                    document.getElementById(_this11.InfoMostrada[index]['id'].toString().concat(auxC.concat('botonC'))).className = 'espacio-seleccionado';
                  });
                } else {
                  var elementoDom = document.getElementById(_this11.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC')));

                  if (elementoDom != null) {
                    elementoDom.className = 'espacio-seleccionado';
                  }
                }
              }
            });
          }
        }, {
          key: "llenarBotonesCiclo",
          value: function llenarBotonesCiclo(agrupar, idP, data) {
            var _this12 = this;

            var botones = {
              'idsBotones': {},
              'botones': [],
              'respuesta': {},
              'colores': {}
            };

            if (agrupar) {
              //Todas las subetapas
              var auxBotones = ['A1', 'A2', 'A3', 'A4', 'B4'];
              var auxBotonesEtapa = {};
              var auxA1A3 = false;
              Object.keys(data.Producción).forEach(function (subE) {
                if (subE === 'A1-A3') {
                  auxA1A3 = true;
                }
              });

              if (auxA1A3) {
                auxBotones = ['A1', 'A2', 'A3', 'A1-A3', 'A4', 'B4'];
                auxBotonesEtapa = {
                  'A1': 'Producción',
                  'A2': 'Producción',
                  'A3': 'Producción',
                  'A1-A3': 'Producción',
                  'A4': 'Construccion',
                  'B4': 'Uso'
                };
              } else {
                auxBotonesEtapa = {
                  'A1': 'Producción',
                  'A2': 'Producción',
                  'A3': 'Producción',
                  'A4': 'Construccion',
                  'B4': 'Uso'
                };
              }

              auxBotones.forEach(function (element) {
                var bandera = true;

                _this12.FasesEliminadas.forEach(function (etapaElimanada) {
                  if (auxBotonesEtapa[element] === etapaElimanada) {
                    bandera = false;
                  }
                });

                if (bandera) {
                  botones['botones'].push(element);
                  botones['idsBotones'][element] = idP.toString().concat(element.concat('botonC'));
                  botones['respuesta'][element] = element;
                  botones['colores'][element] = _this12.CicloColores[element];
                }
              });
            } else {
              //producción agrupado
              var _auxBotones = {
                'A1 - A3': 'Producción',
                'A4': 'Construccion',
                'B4': 'Uso'
              };
              Object.keys(_auxBotones).forEach(function (element) {
                var bandera = true;

                _this12.FasesEliminadas.forEach(function (etapaElimanada) {
                  if (_auxBotones[element] === etapaElimanada) {
                    bandera = false;
                  }
                });

                if (bandera) {
                  botones['botones'].push(element);
                  botones['idsBotones'][element] = idP.toString().concat(_auxBotones[element].concat('botonC'));
                  botones['respuesta'][element] = _auxBotones[element];
                  botones['colores'][element] = _this12.CicloColores[_auxBotones[element]];
                }
              });
            }

            return botones;
          }
        }, {
          key: "EncontrarLabelsElementos",
          value: function EncontrarLabelsElementos(data, ciclo) {
            var _this13 = this;

            var aux = [];
            Object.keys(data).forEach(function (fase) {
              if (ciclo === fase) {
                Object.keys(data[fase]).forEach(function (subetapa) {
                  Object.keys(data[fase][subetapa]).forEach(function (ElementoC) {
                    var banderaElemento = true;

                    _this13.ElementosContructivosEliminados.forEach(function (ElementoI) {
                      if (ElementoI === ElementoC) {
                        banderaElemento = false;
                      }
                    });

                    if (banderaElemento) {
                      aux.push(ElementoC);
                    }
                  });
                });
              }
            });
            return aux;
          }
        }, {
          key: "GraficaElementosContructivos",
          value: function GraficaElementosContructivos(data, colores) {
            var aux = [];
            aux = [{
              data: data,
              backgroundColor: colores
            }];
            return aux;
          }
        }, {
          key: "ColoresElementos",
          value: function ColoresElementos(data, ciclo, flagAgrupar) {
            var _this14 = this;

            var auxColoresElementos = [];
            var auxcolordos = [];
            var auxcolor = [];
            var valores = [];
            var help = this.CicloColoresRGB[ciclo].match(/rgb?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
            var cambioR = help[1];
            var cambioG = help[2];
            var cambioB = help[3];
            var auxValores = {};
            var suma = 0;
            var auxSubetapas = this.encontrarSubetapas(data);
            Object.keys(data).forEach(function (fase) {
              if (ciclo === fase || flagAgrupar) {
                Object.keys(data[fase]).forEach(function (subetapa) {
                  var flagSubetapa = false;

                  if (flagAgrupar) {
                    if (subetapa == ciclo) {
                      flagSubetapa = true;
                    } else {
                      //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                      Object.keys(auxSubetapas).forEach(function (auxetapa) {
                        if (auxetapa === ciclo) {
                          auxSubetapas[ciclo].forEach(function (auxsub) {
                            if (subetapa === auxsub) {
                              flagSubetapa = true;
                            }
                          });
                        }
                      });
                    }
                  } else {
                    flagSubetapa = true;
                  }

                  if (flagSubetapa) {
                    Object.keys(data[fase][subetapa]).forEach(function (ElementoC) {
                      var banderaElemento = true;

                      _this14.ElementosContructivosEliminados.forEach(function (ElementoI) {
                        if (ElementoI === ElementoC) {
                          banderaElemento = false;
                        }
                      });

                      if (banderaElemento) {
                        suma = suma + data[fase][subetapa][ElementoC];
                      }
                    });
                  }
                });
                var elementosExistente = [];
                Object.keys(data[fase]).forEach(function (subetapa) {
                  var flagSubetapa = false;

                  if (flagAgrupar) {
                    if (subetapa == ciclo) {
                      flagSubetapa = true;
                    } else {
                      //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                      Object.keys(auxSubetapas).forEach(function (auxetapa) {
                        if (auxetapa === ciclo) {
                          auxSubetapas[ciclo].forEach(function (auxsub) {
                            if (subetapa === auxsub) {
                              flagSubetapa = true;
                            }
                          });
                        }
                      });
                    }
                  } else {
                    flagSubetapa = true;
                  }

                  if (flagSubetapa) {
                    Object.keys(data[fase][subetapa]).forEach(function (ElementoC) {
                      var banderaElemento = true;

                      _this14.ElementosContructivosEliminados.forEach(function (ElementoI) {
                        if (ElementoI === ElementoC) {
                          banderaElemento = false;
                        }
                      });

                      if (banderaElemento) {
                        if (!elementosExistente.includes(ElementoC)) {
                          auxColoresElementos.push(ElementoC);
                          elementosExistente.push(ElementoC);
                          var auxrgbcolor = 'rgb(';
                          auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');
                          var auxrgbacolor = 'rgba(';
                          auxrgbacolor = auxrgbacolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(',').concat('0.2').concat(')');
                          auxcolor.push(auxrgbcolor);
                          auxcolordos.push(auxrgbacolor);

                          if (255 - cambioR >= 40) {
                            cambioR = (Number(cambioR) + 40).toString();
                          } else if (cambioG - 40 >= 0) {
                            cambioG = (Number(cambioG) - 40).toString();
                          } else {
                            cambioB = (Number(cambioB) + 40).toString();
                          }

                          auxValores[ElementoC] = 0;
                        }

                        auxValores[ElementoC] += data[fase][subetapa][ElementoC];
                      }
                    });
                  }
                });
              }
            });
            Object.keys(auxValores).forEach(function (elementoC) {
              valores.push((auxValores[elementoC] / suma * 100).toFixed(2));
            });
            var resultado = {
              'orden': auxColoresElementos,
              'colores': auxcolor,
              'coloresbtw': auxcolordos,
              'valores': valores
            };
            return resultado;
          }
        }, {
          key: "GraficaCicloVida",
          value: function GraficaCicloVida(data, flagColor, flagAgrupar, dataProyecto) {
            var _this15 = this;

            var aux = [];
            var auxdata = [];
            var auxcolor = [];
            var Data = {};
            var suma = 0;
            var subetpascreadas = [];
            Object.keys(data).forEach(function (etapa, index) {
              var bandera = true;

              _this15.FasesEliminadas.forEach(function (element) {
                //Asegurar que el ciclo de vida no este eliminado
                if (element === etapa) {
                  bandera = false;
                }
              });

              if (bandera) {
                Object.keys(data[etapa]).forEach(function (subetapa) {
                  var subEtpaOEtapa;
                  Object.keys(data[etapa][subetapa]).forEach(function (ElementoC) {
                    if (flagAgrupar) {
                      subEtpaOEtapa = subetapa;

                      if (!subetpascreadas.includes(subetapa)) {
                        Data[subEtpaOEtapa] = 0;
                        subetpascreadas.push(subetapa);
                      }
                    } else {
                      subEtpaOEtapa = etapa;

                      if (!subetpascreadas.includes(etapa)) {
                        Data[subEtpaOEtapa] = 0;
                        subetpascreadas.push(etapa);
                      }
                    }

                    var banderaElemento = true;

                    _this15.ElementosContructivosEliminados.forEach(function (ElementoI) {
                      //Para asegurar que el elemento constructivo no este eliminado
                      if (ElementoI === ElementoC) {
                        banderaElemento = false;
                      }
                    });

                    if (banderaElemento) {
                      Data[subEtpaOEtapa] = Data[subEtpaOEtapa] + data[etapa][subetapa][ElementoC];
                      suma = suma + data[etapa][subetapa][ElementoC];
                    }
                  });
                });
              }
            });
            Object.keys(Data).forEach(function (etapa, index) {
              auxdata.push((Data[etapa] / suma * 100).toFixed(2));
            });

            if (flagColor != ' ') {
              var auxSubetapas = this.encontrarSubetapas(dataProyecto); //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}

              var etapas = ['Producción', 'Construccion', 'Uso'];

              if (flagAgrupar && etapas.includes(flagColor)) {
                Object.keys(auxSubetapas).forEach(function (auxEt) {
                  if (auxEt === flagColor) {
                    auxSubetapas[auxEt].forEach(function (auxC) {
                      auxcolor.push(_this15.CicloColores[auxC]);
                    });
                  } else {
                    auxSubetapas[auxEt].forEach(function (auxC) {
                      auxcolor.push(_this15.CicloColoresBW[auxC]);
                    });
                  }
                });
              } else {
                Object.keys(Data).forEach(function (etapa, index) {
                  if (etapa === flagColor) {
                    auxcolor.push(_this15.CicloColores[etapa]);
                  } else {
                    auxcolor.push(_this15.CicloColoresBW[etapa]);
                  }
                });
              }
            } else {
              Object.keys(Data).forEach(function (etapa, index) {
                auxcolor.push(_this15.CicloColores[etapa]);
              });
            }

            aux = [{
              data: auxdata,
              backgroundColor: auxcolor
            }];
            return aux;
          }
        }, {
          key: "graficaCicloVidaBar",
          value: function graficaCicloVidaBar(data, flagAgrupar) {
            var _this16 = this;

            var aux = [];

            if (flagAgrupar) {
              var auxBotones = ['A1', 'A2', 'A3', 'A4', 'B4'];
              var auxBotonesEtapa = {};
              var auxA1A3 = false;
              Object.keys(data.Producción).forEach(function (subE) {
                if (subE === 'A1-A3') {
                  auxA1A3 = true;
                }
              });

              if (auxA1A3) {
                auxBotones = ['A1', 'A2', 'A3', 'A1-A3', 'A4', 'B4'];
                auxBotonesEtapa = {
                  'A1': 'Producción',
                  'A2': 'Producción',
                  'A3': 'Producción',
                  'A1-A3': 'Producción',
                  'A4': 'Construccion',
                  'B4': 'Uso'
                };
              } else {
                auxBotonesEtapa = {
                  'A1': 'Producción',
                  'A2': 'Producción',
                  'A3': 'Producción',
                  'A4': 'Construccion',
                  'B4': 'Uso'
                };
              }

              auxBotones.forEach(function (element) {
                var bandera = true;

                _this16.FasesEliminadas.forEach(function (etapaElimanada) {
                  if (auxBotonesEtapa[element] === etapaElimanada) {
                    bandera = false;
                  }
                });

                if (bandera) {
                  aux.push(element);
                }
              });
            } else {
              var _auxBotones2 = {
                'A1 - A3': 'Producción',
                'A4': 'Construccion',
                'B4': 'Uso'
              };
              Object.keys(_auxBotones2).forEach(function (element) {
                var bandera = true;

                _this16.FasesEliminadas.forEach(function (etapaElimanada) {
                  if (_auxBotones2[element] === etapaElimanada) {
                    bandera = false;
                  }
                });

                if (bandera) {
                  aux.push(element);
                }
              });
            }

            return aux;
          }
        }, {
          key: "cambioGrafica",
          value: function cambioGrafica(flag, idP) {
            var _this17 = this;

            var aux = {};

            if (flag == 1) {
              this.InfoMostrada.forEach(function (proyecto, index) {
                if (proyecto.id == idP) {
                  _this17.InfoMostrada[index]['CicloGraficaPie'] = true;
                  _this17.InfoMostrada[index]['CicloGraficaBar'] = false;
                  var resultado = {
                    'pie': true,
                    'bar': false
                  };
                  aux = {
                    'idProyecto': idP,
                    'cambioEn': 'CambioGrafica',
                    'cambio': resultado
                  };

                  _this17.CambioEstadoTercerSeccion.emit(aux);
                }
              });
            } else {
              this.InfoMostrada.forEach(function (proyecto, index) {
                if (proyecto.id == idP) {
                  _this17.InfoMostrada[index]['CicloGraficaPie'] = false;
                  _this17.InfoMostrada[index]['CicloGraficaBar'] = true;
                  var resultado = {
                    'pie': false,
                    'bar': true
                  };
                  aux = {
                    'idProyecto': idP,
                    'cambioEn': 'CambioGrafica',
                    'cambio': resultado
                  };

                  _this17.CambioEstadoTercerSeccion.emit(aux);
                }
              });
            }
          } //Selección de una etapa del ciclo de vida, en un proyecto individual

        }, {
          key: "onChartClick",
          value: function onChartClick(ciclo, idP) {
            var _this18 = this;

            this.InfoMostrada.forEach(function (proyecto, index) {
              if (proyecto.id == idP) {
                var resultado = " ";

                if (proyecto['CicloSeleccionado'] === ciclo) {
                  document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC'))).className = 'espacio-sin-selecciomar';
                  _this18.InfoMostrada[index]['CicloSeleccionado'] = ' ';
                  resultado = ' ';
                  _this18.InfoMostrada[index]['DatosCicloVida'] = _this18.GraficaCicloVida(_this18.InfoMostrada[index]['CicloVida'], _this18.InfoMostrada[index]['CicloSeleccionado'], _this18.InfoMostrada[index]['flagAgruparProduccion'], _this18.InfoMostrada[index]['DatosMateriales']);
                  _this18.InfoMostrada[index]['LabelsCicloVida'] = _this18.graficaCicloVidaBar(_this18.InfoMostrada[index]['DatosMateriales'], _this18.InfoMostrada[index]['flagAgruparProduccion']);
                  _this18.InfoMostrada[index]['ElementosConstructivosGrafica'] = false;
                  _this18.InfoMostrada[index]['infoTabla'] = _this18.IniciarTablaMateriales(_this18.InfoMostrada[index]['DatosMateriales'], "", 0, _this18.InfoMostrada[index]['flagAgruparProduccion'], " ");

                  var auxgrafica = _this18.IniciarGraficaMateriales(_this18.InfoMostrada[index]['DatosMateriales'], "", "General", 0, _this18.InfoMostrada[index]['flagAgruparProduccion'], "");

                  _this18.InfoMostrada[index]['DataGraficaMateriales'] = auxgrafica['grafica'];
                  _this18.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
                  _this18.InfoMostrada[index]['iconosElementosConstrucivos'] = {};
                } else {
                  if (_this18.InfoMostrada[index]['CicloSeleccionado'] === " ") {
                    document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC'))).className = 'espacio-seleccionado';
                  } else {
                    var etapas = ['Producción', 'Construccion', 'Uso'];

                    var auxSubetapas = _this18.encontrarSubetapas(_this18.InfoMostrada[index]['DatosMateriales']); //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']};


                    var auxCiclo = _this18.InfoMostrada[index]['CicloSeleccionado'];

                    if (_this18.InfoMostrada[index]['flagAgruparProduccion'] && etapas.includes(auxCiclo)) {
                      auxSubetapas[auxCiclo].forEach(function (auxC) {
                        if (auxC === ciclo) {
                          document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat(auxC.concat('botonC'))).className = 'espacio-seleccionado';
                        } else {
                          document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat(auxC.concat('botonC'))).className = 'espacio-sin-selecciomar';
                        }
                      });
                    } else {
                      document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat(_this18.InfoMostrada[index]['CicloSeleccionado'].concat('botonC'))).className = 'espacio-sin-selecciomar';
                      document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat(ciclo.concat('botonC'))).className = 'espacio-seleccionado';
                    }
                  }

                  if (_this18.InfoMostrada[index]['ElementoConstructivoSeleccionado'] != " ") {
                    var elementoDom = document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat('texto'.concat(_this18.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString())));

                    if (elementoDom != null) {
                      document.getElementById(_this18.InfoMostrada[index]['id'].toString().concat('texto'.concat(_this18.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
                    }

                    _this18.InfoMostrada[index]['ElementoConstructivoSeleccionado'] = " ";
                  }

                  _this18.InfoMostrada[index]['CicloSeleccionado'] = ciclo;
                  resultado = ciclo;
                  _this18.InfoMostrada[index]['Coloreslementos'] = _this18.ColoresElementos(_this18.InfoMostrada[index]['DispercionElementos'], _this18.InfoMostrada[index]['CicloSeleccionado'], _this18.InfoMostrada[index]['flagAgruparProduccion']);
                  _this18.InfoMostrada[index]['iconosElementosConstrucivos'] = _this18.AjustarElementosMostrados(_this18.InfoMostrada[index]['DispercionElementos'], ciclo, _this18.InfoMostrada[index]['flagAgruparProduccion']);
                  _this18.InfoMostrada[index]['DatosElementosConstructivos'] = _this18.GraficaElementosContructivos(_this18.InfoMostrada[index]['Coloreslementos']['valores'], _this18.InfoMostrada[index]['Coloreslementos']['colores']);
                  _this18.InfoMostrada[index]['DatosCicloVida'] = _this18.GraficaCicloVida(_this18.InfoMostrada[index]['CicloVida'], _this18.InfoMostrada[index]['CicloSeleccionado'], _this18.InfoMostrada[index]['flagAgruparProduccion'], _this18.InfoMostrada[index]['DatosMateriales']);
                  _this18.InfoMostrada[index]['LabelsCicloVida'] = _this18.graficaCicloVidaBar(_this18.InfoMostrada[index]['DatosMateriales'], _this18.InfoMostrada[index]['flagAgruparProduccion']);
                  _this18.InfoMostrada[index]['ElementosConstructivosGrafica'] = true;
                  _this18.InfoMostrada[index]['infoTabla'] = _this18.IniciarTablaMateriales(_this18.InfoMostrada[index]['DatosMateriales'], _this18.InfoMostrada[index]['CicloSeleccionado'], 1, _this18.InfoMostrada[index]['flagAgruparProduccion'], " ");

                  var _auxgrafica3 = _this18.IniciarGraficaMateriales(_this18.InfoMostrada[index]['DatosMateriales'], _this18.InfoMostrada[index]['CicloSeleccionado'], _this18.InfoMostrada[index]['CicloSeleccionado'], 1, _this18.InfoMostrada[index]['flagAgruparProduccion'], _this18.InfoMostrada[index]['Coloreslementos']);

                  _this18.InfoMostrada[index]['DataGraficaMateriales'] = _auxgrafica3['grafica'];
                  _this18.InfoMostrada[index]['labelsMateriales'] = _auxgrafica3['labels'];
                  _this18.InfoMostrada[index]['coloresBotonesElementos'] = _this18.llenarColoresBotonesElementos(_this18.Secciones, _this18.InfoMostrada[index]['Coloreslementos']['colores'], _this18.InfoMostrada[index]['Coloreslementos']['orden']);
                }

                var aux = {
                  'idProyecto': idP,
                  'cambioEn': 'CicloVida',
                  'cambio': resultado
                };

                _this18.CambioEstadoTercerSeccion.emit(aux);
              }
            });
          }
        }, {
          key: "AjustarColoresGraficaElementos",
          value: function AjustarColoresGraficaElementos(datacolores, elementoSeleccionado) {
            var aux = [];
            var auxcolores = [];

            if (elementoSeleccionado.toString() === ' ') {
              datacolores['orden'].forEach(function (elemento, index) {
                auxcolores.push(datacolores['colores'][index]);
              });
            } else {
              datacolores['orden'].forEach(function (elemento, index) {
                if (elementoSeleccionado.toString() === elemento) {
                  auxcolores.push(datacolores['colores'][index]);
                } else {
                  auxcolores.push(datacolores['coloresbtw'][index]);
                }
              });
            }

            aux = [{
              data: datacolores['valores'],
              backgroundColor: auxcolores
            }];
            return aux;
          }
        }, {
          key: "onChartClickElemento",
          value: function onChartClickElemento(idelemento, idP) {
            var _this19 = this;

            this.InfoMostrada.forEach(function (proyecto, index) {
              if (proyecto.id == idP) {
                var resultado = " ";

                if (proyecto.ElementoConstructivoSeleccionado === ' ') {
                  _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'] = idelemento;
                  resultado = idelemento;
                  _this19.InfoMostrada[index]['DatosElementosConstructivos'] = _this19.AjustarColoresGraficaElementos(proyecto.Coloreslementos, _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
                  var ciclo = _this19.InfoMostrada[index]['CicloSeleccionado'];

                  var auxgrafica = _this19.IniciarGraficaMateriales(_this19.InfoMostrada[index]['DatosMateriales'], _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'], ciclo, 2, _this19.InfoMostrada[index]['flagAgruparProduccion'], _this19.InfoMostrada[index]['Coloreslementos']);

                  _this19.InfoMostrada[index]['DataGraficaMateriales'] = auxgrafica['grafica'];
                  _this19.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
                  _this19.InfoMostrada[index]['infoTabla'] = _this19.IniciarTablaMateriales(_this19.InfoMostrada[index]['DatosMateriales'], _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'], 2, _this19.InfoMostrada[index]['flagAgruparProduccion'], _this19.InfoMostrada[index]['CicloSeleccionado']);

                  var seccioninfo = _this19.Secciones.filter(function (bs) {
                    return bs['id'] == idelemento;
                  });

                  _this19.InfoMostrada[index]['nombreSeccionMostrado'] = seccioninfo[0]['name_section'];
                  _this19.InfoMostrada[index]['DispercionElementoGrafica'] = true;
                  document.getElementById(_this19.InfoMostrada[index]['id'].toString().concat('texto'.concat(idelemento.toString()))).className = 'espacio-seleccionado';
                } else {
                  if (proyecto.ElementoConstructivoSeleccionado != idelemento) {
                    document.getElementById(_this19.InfoMostrada[index]['id'].toString().concat('texto'.concat(_this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
                    _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'] = idelemento;
                    resultado = idelemento;
                    _this19.InfoMostrada[index]['DatosElementosConstructivos'] = _this19.AjustarColoresGraficaElementos(proyecto.Coloreslementos, _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
                    var _ciclo = _this19.InfoMostrada[index]['CicloSeleccionado'];

                    var _auxgrafica4 = _this19.IniciarGraficaMateriales(_this19.InfoMostrada[index]['DatosMateriales'], _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'], _ciclo, 2, _this19.InfoMostrada[index]['flagAgruparProduccion'], _this19.InfoMostrada[index]['Coloreslementos']);

                    _this19.InfoMostrada[index]['DataGraficaMateriales'] = _auxgrafica4['grafica'];
                    _this19.InfoMostrada[index]['labelsMateriales'] = _auxgrafica4['labels'];
                    _this19.InfoMostrada[index]['infoTabla'] = _this19.IniciarTablaMateriales(_this19.InfoMostrada[index]['DatosMateriales'], _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'], 2, _this19.InfoMostrada[index]['flagAgruparProduccion'], _this19.InfoMostrada[index]['CicloSeleccionado']);

                    var _seccioninfo = _this19.Secciones.filter(function (bs) {
                      return bs['id'] == idelemento;
                    });

                    _this19.InfoMostrada[index]['nombreSeccionMostrado'] = _seccioninfo[0]['name_section'];
                    _this19.InfoMostrada[index]['DispercionElementoGrafica'] = true;
                    document.getElementById(_this19.InfoMostrada[index]['id'].toString().concat('texto'.concat(idelemento.toString()))).className = 'espacio-seleccionado';
                  } else {
                    document.getElementById(_this19.InfoMostrada[index]['id'].toString().concat('texto'.concat(_this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
                    _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado'] = ' ';
                    resultado = " ";
                    _this19.InfoMostrada[index]['nombreSeccionMostrado'] = ' ';
                    _this19.InfoMostrada[index]['DatosElementosConstructivos'] = _this19.AjustarColoresGraficaElementos(proyecto.Coloreslementos, _this19.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
                    _this19.InfoMostrada[index]['DispercionElementoGrafica'] = false;
                    _this19.InfoMostrada[index]['infoTabla'] = _this19.IniciarTablaMateriales(_this19.InfoMostrada[index]['DatosMateriales'], _this19.InfoMostrada[index]['CicloSeleccionado'], 1, _this19.InfoMostrada[index]['flagAgruparProduccion'], " ");

                    var _auxgrafica5 = _this19.IniciarGraficaMateriales(_this19.InfoMostrada[index]['DatosMateriales'], _this19.InfoMostrada[index]['CicloSeleccionado'], _this19.InfoMostrada[index]['CicloSeleccionado'], 1, _this19.InfoMostrada[index]['flagAgruparProduccion'], _this19.InfoMostrada[index]['Coloreslementos']);

                    _this19.InfoMostrada[index]['DataGraficaMateriales'] = _auxgrafica5['grafica'];
                    _this19.InfoMostrada[index]['labelsMateriales'] = _auxgrafica5['labels'];
                  }
                }
              }
            });
          }
        }, {
          key: "sumadatos",
          value: function sumadatos(data) {
            var res = 0;
            Object.keys(data).forEach(function (material) {
              var resultado_actual = data[material];
              res = res + resultado_actual;
            });
            return res;
          }
        }, {
          key: "acomodaMayoraMenor",
          value: function acomodaMayoraMenor(data) {
            var auxhelp = [];
            var auxdatos = [];
            Object.keys(data).forEach(function (material) {
              auxhelp = [].concat(_toConsumableArray(auxhelp), [data[material]]);
            });
            auxdatos = auxhelp.sort(function (n1, n2) {
              if (n1 > n2) {
                return 1;
              }

              if (n1 < n2) {
                return -1;
              }

              return 0;
            });
            return auxdatos.reverse();
          }
        }, {
          key: "IniciarGraficaMateriales",
          value: function IniciarGraficaMateriales(data, elementoSeleccionado, color, filtro, flagAgrupar, coloresElementos) {
            var _this20 = this;

            var aux = [];
            var auxgrafica = [];
            var auxlabel = [];
            var auxdatos = [];
            var suma = 0;
            var materialesExistentes = [];
            var auxmateriales = {};
            var auxSubetapas = this.encontrarSubetapas(data);
            Object.keys(data).forEach(function (elemento) {
              if (filtro == 0) {
                //Sin seleccionar algun filtro
                var flagEtapa = true;

                _this20.FasesEliminadas.forEach(function (auxfaseEliminada) {
                  if (auxfaseEliminada === elemento) {
                    flagEtapa = false;
                  }
                });

                if (flagEtapa) {
                  Object.keys(data[elemento]).forEach(function (subetapa) {
                    Object.keys(data[elemento][subetapa]).forEach(function (elementoC) {
                      var banderaElemento = true;

                      _this20.ElementosContructivosEliminados.forEach(function (ElementoI) {
                        if (ElementoI === elementoC) {
                          banderaElemento = false;
                        }
                      });

                      if (banderaElemento) {
                        Object.keys(data[elemento][subetapa][elementoC]).forEach(function (material) {
                          if (!materialesExistentes.includes(material)) {
                            materialesExistentes.push(material);
                            auxmateriales[material] = 0;
                          }

                          auxmateriales[material] += data[elemento][subetapa][elementoC][material];
                        });
                      }
                    });
                  });
                }

                suma = _this20.sumadatos(auxmateriales);
                auxdatos = _this20.acomodaMayoraMenor(auxmateriales);
              } else if (filtro == 1) {
                //Si se selecciona una fase del ciclo de vida
                if (elementoSeleccionado === elemento || flagAgrupar) {
                  Object.keys(data[elemento]).forEach(function (subetapa) {
                    var flagSubetapa = false;

                    if (flagAgrupar) {
                      if (subetapa == elementoSeleccionado) {
                        flagSubetapa = true;
                      } else {
                        //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                        Object.keys(auxSubetapas).forEach(function (auxetapa) {
                          if (auxetapa === elementoSeleccionado) {
                            auxSubetapas[auxetapa].forEach(function (auxSub) {
                              if (subetapa === auxSub) {
                                flagSubetapa = true;
                              }
                            });
                          }
                        });
                      }
                    } else {
                      flagSubetapa = true;
                    }

                    if (flagSubetapa) {
                      Object.keys(data[elemento][subetapa]).forEach(function (elementoC) {
                        var banderaElemento = true;

                        _this20.ElementosContructivosEliminados.forEach(function (ElementoI) {
                          if (ElementoI === elementoC) {
                            banderaElemento = false;
                          }
                        });

                        if (banderaElemento) {
                          Object.keys(data[elemento][subetapa][elementoC]).forEach(function (material) {
                            if (!materialesExistentes.includes(material)) {
                              materialesExistentes.push(material);
                              auxmateriales[material] = 0;
                            }

                            auxmateriales[material] += data[elemento][subetapa][elementoC][material];
                          });
                        }
                      });
                    }
                  });
                }

                suma = _this20.sumadatos(auxmateriales);
                auxdatos = _this20.acomodaMayoraMenor(auxmateriales);
              } else {
                //Si se selecciona un elemento constructivo
                if (color === elemento || flagAgrupar) {
                  Object.keys(data[elemento]).forEach(function (subetapa) {
                    var flagSubetapa = false;

                    if (flagAgrupar) {
                      if (subetapa == color) {
                        flagSubetapa = true;
                      } else {
                        //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                        Object.keys(auxSubetapas).forEach(function (auxetapa) {
                          if (auxetapa === color) {
                            auxSubetapas[auxetapa].forEach(function (auxsub) {
                              if (subetapa === auxsub) {
                                flagSubetapa = true;
                              }
                            });
                          }
                        });
                      }
                    } else {
                      flagSubetapa = true;
                    }

                    if (flagSubetapa) {
                      Object.keys(data[elemento][subetapa]).forEach(function (elementoC) {
                        if (elementoC === elementoSeleccionado.toString()) {
                          Object.keys(data[elemento][subetapa][elementoC]).forEach(function (material) {
                            if (!materialesExistentes.includes(material)) {
                              materialesExistentes.push(material);
                              auxmateriales[material] = 0;
                            }

                            auxmateriales[material] += data[elemento][subetapa][elementoC][material];
                            suma += data[elemento][subetapa][elementoC][material];
                          });
                        }
                      });
                    }
                  });
                }
              }
            });
            var sumaOtros = 0;

            if (filtro == 2) {
              suma = this.sumadatos(auxmateriales);
              auxdatos = this.acomodaMayoraMenor(auxmateriales);
            }

            auxdatos.forEach(function (element, index) {
              if (index <= 2) {
                aux.push((element / suma * 100).toFixed(2));
                auxlabel = [].concat(_toConsumableArray(auxlabel), [(index + 1).toString()]);
              } else {
                sumaOtros = sumaOtros + element;
              }
            });

            if (sumaOtros > 0) {
              aux.push((sumaOtros / suma * 100).toFixed(2));
              auxlabel = [].concat(_toConsumableArray(auxlabel), ['otros']);
            }

            if (filtro != 2) {
              auxgrafica = [{
                data: aux,
                backgroundColor: this.CicloColores[color]
              }];
            } else {
              var auxColor = "";
              coloresElementos['orden'].forEach(function (element, index) {
                if (element === elementoSeleccionado.toString()) {
                  auxColor = coloresElementos['colores'][index];
                }
              });
              auxgrafica = [{
                data: aux,
                backgroundColor: auxColor
              }];
            }

            return {
              'grafica': auxgrafica,
              'labels': auxlabel
            };
          }
        }, {
          key: "IniciarTablaMateriales",
          value: function IniciarTablaMateriales(data, elementoSeleccionado, filtro, flagAgrupar, ciclo) {
            var _this21 = this;

            var infoTablaDispercion = [];
            var suma = 0;
            var auxdatos = [];
            var auxidsMateriales = [];
            var materialesExistentes = [];
            var auxmateriales = {};
            var auxSubetapas = this.encontrarSubetapas(data);
            Object.keys(data).forEach(function (elemento) {
              if (filtro == 0) {
                //Sin seleccionar algun filtro
                var flagEtapa = true;

                _this21.FasesEliminadas.forEach(function (auxfaseEliminada) {
                  if (auxfaseEliminada === elemento) {
                    flagEtapa = false;
                  }
                });

                if (flagEtapa) {
                  Object.keys(data[elemento]).forEach(function (subetapa) {
                    Object.keys(data[elemento][subetapa]).forEach(function (elementoC) {
                      var banderaElemento = true;

                      _this21.ElementosContructivosEliminados.forEach(function (ElementoI) {
                        if (ElementoI === elementoC) {
                          banderaElemento = false;
                        }
                      });

                      if (banderaElemento) {
                        Object.keys(data[elemento][subetapa][elementoC]).forEach(function (material) {
                          if (!materialesExistentes.includes(material)) {
                            materialesExistentes.push(material);
                            auxmateriales[material] = 0;
                          }

                          auxmateriales[material] += data[elemento][subetapa][elementoC][material];
                        });
                      }
                    });
                  });
                }

                suma = _this21.sumadatos(auxmateriales);
                auxdatos = _this21.acomodaMayoraMenor(auxmateriales);
              } else if (filtro == 1) {
                //Si se selecciona una fase del ciclo de vida
                if (elementoSeleccionado === elemento || flagAgrupar) {
                  Object.keys(data[elemento]).forEach(function (subetapa) {
                    var flagSubetapa = false;

                    if (flagAgrupar) {
                      if (subetapa == elementoSeleccionado) {
                        flagSubetapa = true;
                      } else {
                        //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                        Object.keys(auxSubetapas).forEach(function (auxetapa) {
                          if (auxetapa === elementoSeleccionado) {
                            auxSubetapas[auxetapa].forEach(function (auxSub) {
                              if (subetapa === auxSub) {
                                flagSubetapa = true;
                              }
                            });
                          }
                        });
                      }
                    } else {
                      flagSubetapa = true;
                    }

                    if (flagSubetapa) {
                      Object.keys(data[elemento][subetapa]).forEach(function (elementoC) {
                        var banderaElemento = true;

                        _this21.ElementosContructivosEliminados.forEach(function (ElementoI) {
                          if (ElementoI === elementoC) {
                            banderaElemento = false;
                          }
                        });

                        if (banderaElemento) {
                          Object.keys(data[elemento][subetapa][elementoC]).forEach(function (material) {
                            if (!materialesExistentes.includes(material)) {
                              materialesExistentes.push(material);
                              auxmateriales[material] = 0;
                            }

                            auxmateriales[material] += data[elemento][subetapa][elementoC][material];
                          });
                        }
                      });
                    }
                  });
                }

                suma = _this21.sumadatos(auxmateriales);
                auxdatos = _this21.acomodaMayoraMenor(auxmateriales);
              } else {
                if (ciclo === elemento || flagAgrupar) {
                  Object.keys(data[elemento]).forEach(function (subetapa) {
                    var flagSubetapa = false;

                    if (flagAgrupar) {
                      if (subetapa == ciclo) {
                        flagSubetapa = true;
                      } else {
                        //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                        Object.keys(auxSubetapas).forEach(function (auxetapa) {
                          if (auxetapa === ciclo) {
                            auxSubetapas[auxetapa].forEach(function (auxsub) {
                              if (subetapa === auxsub) {
                                flagSubetapa = true;
                              }
                            });
                          }
                        });
                      }
                    } else {
                      flagSubetapa = true;
                    }

                    if (flagSubetapa) {
                      Object.keys(data[elemento][subetapa]).forEach(function (elementoC) {
                        if (elementoC === elementoSeleccionado.toString()) {
                          Object.keys(data[elemento][subetapa][elementoC]).forEach(function (material) {
                            if (!materialesExistentes.includes(material)) {
                              materialesExistentes.push(material);
                              auxmateriales[material] = 0;
                            }

                            auxmateriales[material] += data[elemento][subetapa][elementoC][material];
                            suma += data[elemento][subetapa][elementoC][material];
                          });
                        }
                      });
                    }
                  });
                }
              }
            });

            if (filtro == 0) {
              auxdatos.forEach(function (num) {
                Object.keys(auxmateriales).forEach(function (material, index) {
                  if (!auxidsMateriales.includes(material)) {
                    if (num == auxmateriales[material]) {
                      auxidsMateriales.push(material);
                    }
                  }
                });
              });
            } else if (filtro == 1) {
              auxdatos.forEach(function (num) {
                Object.keys(auxmateriales).forEach(function (material, index) {
                  if (!auxidsMateriales.includes(material)) {
                    if (num == auxmateriales[material]) {
                      auxidsMateriales.push(material);
                    }
                  }
                });
              });
            } else {
              auxdatos = this.acomodaMayoraMenor(auxmateriales);
              auxdatos.forEach(function (num) {
                Object.keys(auxmateriales).forEach(function (material, index) {
                  if (!auxidsMateriales.includes(material)) {
                    if (num == auxmateriales[material]) {
                      auxidsMateriales.push(material);
                    }
                  }
                });
              });
            }

            var num = 0;
            auxidsMateriales.forEach(function (material, ii) {
              var aux = {};

              var helpMaterial = _this21.materiales.filter(function (_ref) {
                var id = _ref.id;
                return id == material;
              });

              num = num + 1;
              aux['no'] = num;
              aux['material'] = helpMaterial[0]['name_material'];
              aux['porcentaje'] = (auxdatos[ii] / suma * 100).toFixed(2);
              aux['numero'] = auxdatos[ii].toExponential(2);
              infoTablaDispercion.push(aux);
            });
            return infoTablaDispercion;
          }
        }, {
          key: "llenarIdsBotones",
          value: function llenarIdsBotones(elementos, idProyecto) {
            var iconos = {};
            elementos.forEach(function (element) {
              iconos[element.id.toString()] = {};
              iconos[element.id.toString()]['idTEXTO'] = idProyecto.toString().concat('texto'.concat(element.id.toString()));
            });
            return iconos;
          }
        }, {
          key: "llenarColoresBotonesElementos",
          value: function llenarColoresBotonesElementos(elementos, colores, orden) {
            var iconos = {};
            elementos.forEach(function (element) {
              var count = 0;
              var flagColor = true;

              if (orden != undefined) {
                var _iterator3 = _createForOfIteratorHelper(orden),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var i = _step3.value;

                    if (i === element['id'].toString()) {
                      iconos[element.id.toString()] = colores[count];
                      flagColor = false;
                    }

                    count++;
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              if (flagColor) {
                iconos[element.id.toString()] = '#EFEFEF';
              }
            });
            return iconos;
          }
        }, {
          key: "AjustarElementosMostrados",
          value: function AjustarElementosMostrados(auxDatos, ciclo, flagAgrupar) {
            var _this22 = this;

            var iconos = {};
            var auxSubetapas = this.encontrarSubetapas(auxDatos);
            this.Secciones.forEach(function (element) {
              var flag = false;
              var auxidelemento = element['id'];
              Object.keys(auxDatos).forEach(function (fase) {
                if (ciclo === fase || flagAgrupar) {
                  Object.keys(auxDatos[fase]).forEach(function (subetapas) {
                    var flagSubetapa = false;

                    if (flagAgrupar) {
                      if (subetapas == ciclo) {
                        flagSubetapa = true;
                      } else {
                        //let auxSubetapas={'Producción':['A1','A2','A3'],'Construccion':['A4'],'Uso':['B4']}
                        Object.keys(auxSubetapas).forEach(function (auxetapa) {
                          if (auxetapa === ciclo) {
                            auxSubetapas[ciclo].forEach(function (auxsub) {
                              if (subetapas === auxsub) {
                                flagSubetapa = true;
                              }
                            });
                          }
                        });
                      }
                    } else {
                      flagSubetapa = true;
                    }

                    if (flagSubetapa) {
                      Object.keys(auxDatos[fase][subetapas]).forEach(function (idelemento) {
                        if (idelemento == auxidelemento.toString()) {
                          flag = true;

                          _this22.ElementosContructivosEliminados.forEach(function (elementoEliminado) {
                            if (elementoEliminado === idelemento) {
                              flag = false;
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });

              if (flag) {
                iconos[auxidelemento.toString()] = {};
                iconos[auxidelemento.toString()]['habilitado'] = false;
              } else {
                iconos[auxidelemento.toString()] = {};
                iconos[auxidelemento.toString()]['habilitado'] = true;
              }
            });
            return iconos;
          }
        }, {
          key: "agrupacionDeProduccion",
          value: function agrupacionDeProduccion(idP) {
            var _this23 = this;

            this.InfoMostrada.forEach(function (proyecto, index) {
              if (proyecto.id == idP) {
                var resultado = true;
                var aux = {};

                if (_this23.InfoMostrada[index]['flagAgruparProduccion']) {
                  _this23.InfoMostrada[index]['flagAgruparProduccion'] = false;
                  _this23.InfoMostrada[index]['textoBotonAgrupar'] = "Desagrupar";
                  resultado = false;
                } else {
                  _this23.InfoMostrada[index]['flagAgruparProduccion'] = true;
                  _this23.InfoMostrada[index]['textoBotonAgrupar'] = "Agrupar";
                }

                aux = {
                  'idProyecto': idP,
                  'cambioEn': 'AgruparProducción',
                  'cambio': resultado
                };

                _this23.CambioEstadoTercerSeccion.emit(aux);

                if (_this23.InfoMostrada[index]['CicloSeleccionado'] != " ") {
                  if (_this23.InfoMostrada[index]['flagAgruparProduccion']) {
                    document.getElementById(_this23.InfoMostrada[index]['id'].toString().concat(_this23.InfoMostrada[index]['CicloSeleccionado'].concat('botonC'))).className = 'espacio-sin-selecciomar';
                  } else {
                    //let auxBotonesEtapa = {'A1':'Producción','A2':'Producción','A3':'Producción', 'A4':'Construccion', 'B4':'Uso'}
                    var auxBotonesEtapa = {};
                    var auxA1A3 = false;
                    Object.keys(_this23.InfoMostrada[index]['DatosMateriales']['Producción']).forEach(function (subE) {
                      if (subE === 'A1-A3') {
                        auxA1A3 = true;
                      }
                    });

                    if (auxA1A3) {
                      auxBotonesEtapa = {
                        'A1': 'Producción',
                        'A2': 'Producción',
                        'A3': 'Producción',
                        'A1-A3': 'Producción',
                        'A4': 'Construccion',
                        'B4': 'Uso'
                      };
                    } else {
                      auxBotonesEtapa = {
                        'A1': 'Producción',
                        'A2': 'Producción',
                        'A3': 'Producción',
                        'A4': 'Construccion',
                        'B4': 'Uso'
                      };
                    }

                    Object.keys(auxBotonesEtapa).forEach(function (element) {
                      if (auxBotonesEtapa[element] === _this23.InfoMostrada[index]['CicloSeleccionado']) {
                        document.getElementById(_this23.InfoMostrada[index]['id'].toString().concat(element.concat('botonC'))).className = 'espacio-sin-selecciomar';
                      }
                    });
                  }

                  _this23.InfoMostrada[index]['CicloSeleccionado'] = ' ';
                  _this23.InfoMostrada[index]['infoTabla'] = _this23.IniciarTablaMateriales(_this23.InfoMostrada[index]['DatosMateriales'], "", 0, _this23.InfoMostrada[index]['flagAgruparProduccion'], " ");

                  var auxgrafica = _this23.IniciarGraficaMateriales(_this23.InfoMostrada[index]['DatosMateriales'], "", "General", 0, _this23.InfoMostrada[index]['flagAgruparProduccion'], "");

                  _this23.InfoMostrada[index]['DataGraficaMateriales'] = auxgrafica['grafica'];
                  _this23.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
                  _this23.InfoMostrada[index]['ElementosConstructivosGrafica'] = false;
                  _this23.InfoMostrada[index]['DatosElementosConstructivos'] = [];
                  _this23.InfoMostrada[index]['iconosElementosConstrucivos'] = {};
                  _this23.InfoMostrada[index]['Coloreslementos'] = {};
                }

                _this23.InfoMostrada[index]['ElementoConstructivoSeleccionado'] = " ";
                _this23.InfoMostrada[index]['DatosCicloVida'] = _this23.GraficaCicloVida(_this23.InfoMostrada[index]['CicloVida'], _this23.InfoMostrada[index]['CicloSeleccionado'], _this23.InfoMostrada[index]['flagAgruparProduccion'], _this23.InfoMostrada[index]['DatosMateriales']);
                _this23.InfoMostrada[index]['LabelsCicloVida'] = _this23.graficaCicloVidaBar(_this23.InfoMostrada[index]['DatosMateriales'], _this23.InfoMostrada[index]['flagAgruparProduccion']);

                var botonesCiclo = _this23.llenarBotonesCiclo(_this23.InfoMostrada[index]['flagAgruparProduccion'], _this23.InfoMostrada[index]['id'], _this23.InfoMostrada[index]['DatosMateriales']);

                _this23.InfoMostrada[index]['botonesCiclo'] = botonesCiclo['botones'];
                _this23.InfoMostrada[index]['ids_RespuestasBotones'] = botonesCiclo;
                aux = {
                  'idProyecto': idP,
                  'cambioEn': 'CicloVida',
                  'cambio': " "
                };

                _this23.CambioEstadoTercerSeccion.emit(aux);
              }
            });
          }
        }]);

        return GraficasTercerSeccionComponent;
      }();
      /***/

    },

    /***/
    "9MWN":
    /*!********************************************************************!*\
      !*** ./src/app/pie-chart/pie-chart.component.scss.shim.ngstyle.js ***!
      \********************************************************************/

    /*! exports provided: styles */

    /***/
    function MWN(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".graficas-especificas[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 12px;\n  grid-template-columns: repeat(1, 450px);\n  height: auto;\n}\n\n.mostrar-subetapas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mostrar-subetapas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 5px;\n}\n\n.mostrar-subetapas[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.mostrar-subetapas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n}\n\n.totales-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-left: 34px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 19px;\n  width: 19px;\n  border-radius: 50%;\n  display: inline-flex;\n  margin-right: 10px;\n}\n\n.text-subetapas[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  font-size: 10px;\n  letter-spacing: 0px;\n  color: #767676;\n  opacity: 1;\n}\n\n.tachar[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.quitartachado[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.graficas-especificas-seccionUno[_ngcontent-%COMP%] {\n  display: grid;\n  font-size: 12px;\n  grid-template-columns: repeat(2, 386px);\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  row-gap: 10px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBpZS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWZpY2FzLWVzcGVjaWZpY2FzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCA0NTBweCk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubW9zdHJhci1zdWJldGFwYXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgYXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRvdGFsZXMtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzRweDtcclxufVxyXG5cclxuLmRvdCB7XHJcbiAgaGVpZ2h0OiAxOXB4O1xyXG4gIHdpZHRoOiAxOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LXN1YmV0YXBhcyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzc2NzY3NjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGFjaGFye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4ucXVpdGFydGFjaGFkb3tcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFmaWNhcy1lc3BlY2lmaWNhcy1zZWNjaW9uVW5ve1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDM4NnB4KTtcclxuICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gIHJvdy1nYXA6IDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"];
      /***/
    },

    /***/
    "9ldO":
    /*!*************************************************************************************!*\
      !*** ./src/app/comparar/component/comparar/comparar.component.scss.shim.ngstyle.js ***!
      \*************************************************************************************/

    /*! exports provided: styles */

    /***/
    function ldO(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".mat-master[_ngcontent-%COMP%] {\n  width: 940px;\n}\n\n.container-principal-tab[_ngcontent-%COMP%] {\n  width: 940px;\n}\n\n.sectionOne[_ngcontent-%COMP%] {\n  color: #92be00;\n  padding: 0px;\n}\n\n.sectionOne[_ngcontent-%COMP%]   a.return-proyecto[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.sectionOne[_ngcontent-%COMP%]   a.tittle-proyect[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #343434;\n  opacity: 1;\n}\n\n.sectionOne[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #92be00;\n  font-size: 15px;\n}\n\n  .mat-tab-label .mat-tab-label-content {\n  font-size: 12px;\n}\n\n.div-proyectos-mostrados[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: 250px auto;\n  margin-bottom: 15px;\n}\n\n.div-proyectos-mostrados[_ngcontent-%COMP%]   .menu-proyectos[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 2px solid;\n  border-radius: 10px;\n  border-color: #cbcbcb;\n  opacity: 1;\n  letter-spacing: 0px;\n  color: #767676;\n  opacity: 1;\n  font-size: 12px;\n  width: 237px;\n  height: 35px;\n  text-align: left;\n}\n\n.div-proyectos-mostrados[_ngcontent-%COMP%]   .menu-proyectos[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #767676;\n  padding: 0px;\n}\n\n.button-graph[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.button-graph[_ngcontent-%COMP%]   .card.datos[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.button-graph[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #e2dddd;\n  margin-right: 0;\n  padding: 0;\n  padding-left: 11px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  font-size: 12px;\n  letter-spacing: 0px;\n  color: #343434;\n  opacity: 1;\n  height: 33px;\n  border-radius: 9px;\n}\n\n.button-graph[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #343434;\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\nng-template[_ngcontent-%COMP%] {\n  letter-spacing: 0px;\n  color: #343434;\n  opacity: 1;\n  font-size: 12px;\n}\n\np.text-duplicados[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0px;\n  padding-top: 21px;\n  color: #767676;\n  opacity: 1;\n}\n\n.uno[_ngcontent-%COMP%] {\n  background: #4dbe89;\n}\n\n.dos[_ngcontent-%COMP%] {\n  background: #148a93;\n}\n\n.tres[_ngcontent-%COMP%] {\n  background: #8f5091;\n}\n\n.cuatro[_ngcontent-%COMP%] {\n  background: #dea961;\n}\n\n.boton-ojito-select[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 0px;\n  border: none;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.boton-ojito-select[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 26px;\n}\n\n.boton-select[_ngcontent-%COMP%] {\n  width: 117px;\n  height: 39px;\n  margin-left: 8px;\n  background-color: #ffffff;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 5px;\n  border-color: #ffffff;\n}\n\n.bases-datos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bases-datos[_ngcontent-%COMP%]   p.text-duplicados[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0px;\n  padding-top: 21px;\n  color: #767676;\n  opacity: 1;\n}\n\nseccion-ciclo[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nFases-ciclo[_ngcontent-%COMP%] {\n  display: inline-block;\n  -moz-column-gap: 0px;\n       column-gap: 0px;\n  height: 20px;\n}\n\n.icon-fases[_ngcontent-%COMP%] {\n  width: 28px;\n  border-radius: 0px 10px 10px 0px;\n  opacity: 1;\n  color: #ffffff;\n  text-align: center;\n}\n\n.card-fases[_ngcontent-%COMP%] {\n  width: 40px;\n  font-family: normal normal normal;\n  font-size: 10px;\n  background: #efefef;\n}\n\nmat-select[_ngcontent-%COMP%] {\n  width: 218px;\n  height: 40px;\n  background: #ffffff;\n  border: 2px solid #cbcbcb;\n  opacity: 1;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110px 110px 110px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  row-gap: 5px;\n  align-content: center;\n  align-items: center;\n  height: 100px;\n  text-align: left;\n  font-size: 10px;\n  letter-spacing: 0px;\n  color: #767676;\n  opacity: 1;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n  .mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #a8d024 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tcGFyYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQU47O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBRUU7RUFDRSxZQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFDSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDTjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBREY7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQURGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUFKOztBQU1BO0VBQ0UscUJBQUE7QUFIRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUNBOztFQUVFLG9DQUFBO0FBRUYiLCJmaWxlIjoiY29tcGFyYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LW1hc3RlciB7XHJcbiAgd2lkdGg6IDk0MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXByaW5jaXBhbC10YWIge1xyXG4gIHdpZHRoOiA5NDBweDtcclxufVxyXG5cclxuLnNlY3Rpb25PbmUge1xyXG4gIGNvbG9yOiAjOTJiZTAwO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgYS5yZXR1cm4tcHJveWVjdG8ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgYS50aXR0bGUtcHJveWVjdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzM0MzQzNDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvciB7XHJcbiAgICBjb2xvcjogIzkyYmUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kaXYtcHJveWVjdG9zLW1vc3RyYWRvcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgLm1lbnUtcHJveWVjdG9zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNjYmNiY2I7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAyMzdweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvciB7XHJcbiAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idXR0b24tZ3JhcGgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgLmNhcmQuZGF0b3Mge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkZGRkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjMzQzNDM0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdGVyaWFsLWljb25zLm1hdC1pY29uLW5vLWNvbG9yIHtcclxuICAgICAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubmctdGVtcGxhdGUge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbnAudGV4dC1kdXBsaWNhZG9zIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBwYWRkaW5nLXRvcDogMjFweDtcclxuICBjb2xvcjogIzc2NzY3NjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udW5vIHtcclxuICBiYWNrZ3JvdW5kOiAjNGRiZTg5O1xyXG59XHJcblxyXG4uZG9zIHtcclxuICBiYWNrZ3JvdW5kOiAjMTQ4YTkzO1xyXG59XHJcblxyXG4udHJlcyB7XHJcbiAgYmFja2dyb3VuZDogIzhmNTA5MTtcclxufVxyXG5cclxuLmN1YXRybyB7XHJcbiAgYmFja2dyb3VuZDogI2RlYTk2MTtcclxufVxyXG5cclxuLmJvdG9uLW9qaXRvLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gIG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdGVyaWFsLWljb25zLm1hdC1pY29uLW5vLWNvbG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3Rvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMTdweDtcclxuICBoZWlnaHQ6IDM5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYmFzZXMtZGF0b3N7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcC50ZXh0LWR1cGxpY2Fkb3Mge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMXB4O1xyXG4gICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5zZWNjaW9uLWNpY2xvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuRmFzZXMtY2ljbG8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2x1bW4tZ2FwOiAwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uaWNvbi1mYXNlcyB7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcmQtZmFzZXMge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBub3JtYWwgbm9ybWFsIG5vcm1hbDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxubWF0LXNlbGVjdCB7XHJcbiAgd2lkdGg6IDIxOHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYmNiY2I7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwcHggMTEwcHggMTEwcHg7XHJcbiAgY29sdW1uLWdhcDogMTBweDtcclxuICByb3ctZ2FwOiA1cHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjNzY3Njc2O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcclxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZDAyNCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"];
      /***/
    },

    /***/
    "DPO7":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/comparar/component/graficas-tercer-seccion/graficas-tercer-seccion.component.ngfactory.js ***!
      \***********************************************************************************************************/

    /*! exports provided: RenderType_GraficasTercerSeccionComponent, View_GraficasTercerSeccionComponent_0, View_GraficasTercerSeccionComponent_Host_0, GraficasTercerSeccionComponentNgFactory */

    /***/
    function DPO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_GraficasTercerSeccionComponent", function () {
        return RenderType_GraficasTercerSeccionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_GraficasTercerSeccionComponent_0", function () {
        return View_GraficasTercerSeccionComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_GraficasTercerSeccionComponent_Host_0", function () {
        return View_GraficasTercerSeccionComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraficasTercerSeccionComponentNgFactory", function () {
        return GraficasTercerSeccionComponentNgFactory;
      });
      /* harmony import */


      var _graficas_tercer_seccion_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./graficas-tercer-seccion.component.scss.shim.ngstyle */
      "msxo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/table/index.ngfactory */
      "K0NO");
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


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
      "XE/z");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button-toggle/index.ngfactory */
      "Fyq5");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _node_modules_angular_cdk_scrolling_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/cdk/scrolling/index.ngfactory */
      "vzXe");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _graficas_tercer_seccion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./graficas-tercer-seccion.component */
      "7feb");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_GraficasTercerSeccionComponent = [_graficas_tercer_seccion_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_GraficasTercerSeccionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_GraficasTercerSeccionComponent,
        data: {}
      });

      function View_GraficasTercerSeccionComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "canvas-container seccionTresPie"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""], ["height", "292px"], ["width", "217px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
          datasets: [0, "datasets"],
          options: [1, "options"],
          chartType: [2, "chartType"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.context.$implicit.DatosCicloVida;
          var currVal_1 = _co.pieChartOptions;
          var currVal_2 = _co.doughnutChartType;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_GraficasTercerSeccionComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "canvas-container seccionTresBar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""], ["height", "305px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          legend: [4, "legend"],
          plugins: [5, "plugins"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.context.$implicit.DatosCicloVida;
          var currVal_1 = _v.parent.context.$implicit.LabelsCicloVida;
          var currVal_2 = _co.barChartOptions;
          var currVal_3 = _co.barChartType;
          var currVal_4 = _co.barChartLegend;
          var currVal_5 = _co.barChartPlugins;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_GraficasTercerSeccionComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "botones-elementos-contructivos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "espacio-sin-selecciomar"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "button", [["class", "button-elemento-seleccionado color-texto"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onChartClick(_v.parent.context.$implicit.ids_RespuestasBotones["respuesta"][_v.context.$implicit], _v.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "button-icon"]], [[4, "background-color", null]], null, null, null, null))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.ids_RespuestasBotones["idsBotones"][_v.context.$implicit], "");

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit;

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _v.parent.context.$implicit.ids_RespuestasBotones.colores[_v.context.$implicit];

          _ck(_v, 5, 0, currVal_2);
        });
      }

      function View_GraficasTercerSeccionComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "botones-elementos-contructivos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "espacio-sin-selecciomar"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "button", [["class", "button-elemento-seleccionado color-texto"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onChartClickElemento(_v.context.$implicit.id, _v.parent.parent.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "button-icon"]], [[4, "background-color", null]], null, null, null, null))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.parent.context.$implicit.idsIconosElementos[_v.context.$implicit.id]["idTEXTO"], "");

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.parent.parent.context.$implicit.iconosElementosConstrucivos[_v.context.$implicit.id]["habilitado"];

          _ck(_v, 2, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.name_section;

          _ck(_v, 4, 0, currVal_2);

          var currVal_3 = _v.parent.parent.context.$implicit.coloresBotonesElementos[_v.context.$implicit.id];

          _ck(_v, 5, 0, currVal_3);
        });
      }

      function View_GraficasTercerSeccionComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "canvas-container seccionTresPie"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""], ["height", "292px"], ["width", "217px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
          datasets: [0, "datasets"],
          options: [1, "options"],
          chartType: [2, "chartType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "seccion_botones_elementos_constructivos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GraficasTercerSeccionComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.parent.context.$implicit.DatosElementosConstructivos;
          var currVal_1 = _co.pieChartOptionsDos;
          var currVal_2 = _co.doughnutChartType;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = _co.botones_elementos_constructivos;

          _ck(_v, 6, 0, currVal_3);
        }, null);
      }

      function View_GraficasTercerSeccionComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No. "]))], null, null);
      }

      function View_GraficasTercerSeccionComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.no;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_GraficasTercerSeccionComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Material "]))], null, null);
      }

      function View_GraficasTercerSeccionComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.material;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_GraficasTercerSeccionComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" % "]))], null, null);
      }

      function View_GraficasTercerSeccionComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.porcentaje;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_GraficasTercerSeccionComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.unidadImpactoAmiental;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_GraficasTercerSeccionComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.numero;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_GraficasTercerSeccionComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatHeaderRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], [], null, null)], null, null);
      }

      function View_GraficasTercerSeccionComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], [], null, null)], null, null);
      }

      function View_GraficasTercerSeccionComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 127, "mat-card", [["class", "card-indicador mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 39, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "subtitulo-proyecto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "titulo-proyecto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dispersi\xF3n del impacto ambiental "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" por elementos constructivos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Exportar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["camera_rear"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GraficasTercerSeccionComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GraficasTercerSeccionComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "seccion_botones_elementos_constructivos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GraficasTercerSeccionComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 17, "div", [["class", "button-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 14, "mat-button-toggle-group", [["class", "mat-button-toggle-group"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          _buttonToggles: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.cambioGrafica(1, _v.context.$implicit.id) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 245760, [[1, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["pie_chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.cambioGrafica(2, _v.context.$implicit.id) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 245760, [[1, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["bar_chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "button", [["class", "espacio-sin-selecciomar color-texto"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.agrupacionDeProduccion(_v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](41, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dispersi\xF3n del impacto en fase del cico de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" por impactos elementos constructivos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_GraficasTercerSeccionComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 0, 77, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](53, null, ["Dispersi\xF3n del impacto ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 73, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "div", [["class", "canvas-container seccionTresBar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""], ["height", "205px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 999424, [["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          legend: [4, "legend"],
          plugins: [5, "plugins"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 69, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Materiales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 66, "div", [["class", "example-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 65, "table", [["class", "mat-table"], ["mat-table", ""]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatTable_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"]], {
          dataSource: [0, "dataSource"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          _contentColumnDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _contentRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          _contentHeaderRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _contentFooterRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CDK_TABLE"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CDK_TABLE"]]], {
          sticky: [0, "sticky"],
          name: [1, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[6, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[9, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[13, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[12, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CDK_TABLE"]]], {
          name: [0, "name"],
          stickyEnd: [1, "stickyEnd"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[16, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](120, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[4, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_GraficasTercerSeccionComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"]])], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 15, 0);

          var currVal_6 = _v.context.$implicit.CicloGraficaPie;

          _ck(_v, 18, 0, currVal_6);

          var currVal_7 = _v.context.$implicit.CicloGraficaBar;

          _ck(_v, 20, 0, currVal_7);

          var currVal_8 = _v.context.$implicit.botonesCiclo;

          _ck(_v, 23, 0, currVal_8);

          _ck(_v, 28, 0);

          _ck(_v, 31, 0);

          _ck(_v, 33, 0);

          _ck(_v, 36, 0);

          _ck(_v, 38, 0);

          var currVal_31 = _v.context.$implicit.ElementosConstructivosGrafica;

          _ck(_v, 49, 0, currVal_31);

          var currVal_33 = _v.context.$implicit.DataGraficaMateriales;
          var currVal_34 = _v.context.$implicit.labelsMateriales;
          var currVal_35 = _co.barChartOptions;
          var currVal_36 = _co.barChartType;
          var currVal_37 = _co.barChartLegend;
          var currVal_38 = _co.barChartPlugins;

          _ck(_v, 57, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38);

          var currVal_39 = _v.context.$implicit.infoTabla;

          _ck(_v, 64, 0, currVal_39);

          var currVal_40 = "";
          var currVal_41 = "no";

          _ck(_v, 72, 0, currVal_40, currVal_41);

          var currVal_42 = "material";

          _ck(_v, 85, 0, currVal_42);

          var currVal_43 = "porcentaje";

          _ck(_v, 98, 0, currVal_43);

          var currVal_44 = "numero";
          var currVal_45 = "";

          _ck(_v, 111, 0, currVal_44, currVal_45);

          var currVal_46 = _co.displayedColumnsDispercion;

          _ck(_v, 123, 0, currVal_46);

          var currVal_47 = _co.displayedColumnsDispercion;

          _ck(_v, 126, 0, currVal_47);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.nombre;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled || null;
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._animationMode === "NoopAnimations";

          _ck(_v, 11, 0, currVal_2, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).inline;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color !== "warn";

          _ck(_v, 14, 0, currVal_4, currVal_5);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).disabled;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).vertical;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).appearance === "standard";

          _ck(_v, 25, 0, currVal_9, currVal_10, currVal_11);

          var currVal_12 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).buttonToggleGroup;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).checked;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).disabled;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).appearance === "standard";
          var currVal_16 = 0 - 1;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).id;

          var currVal_18 = null;

          _ck(_v, 30, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).inline;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).color !== "warn";

          _ck(_v, 32, 0, currVal_19, currVal_20);

          var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).buttonToggleGroup;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).checked;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).appearance === "standard";
          var currVal_25 = 0 - 1;

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).id;

          var currVal_27 = null;

          _ck(_v, 35, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).inline;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).color !== "warn";

          _ck(_v, 37, 0, currVal_28, currVal_29);

          var currVal_30 = _v.context.$implicit.textoBotonAgrupar;

          _ck(_v, 41, 0, currVal_30);

          var currVal_32 = _v.context.$implicit.nombreSeccionMostrado;

          _ck(_v, 53, 0, currVal_32);
        });
      }

      function View_GraficasTercerSeccionComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "cdk-virtual-scroll-viewport", [["appendOnly", ""], ["class", "viewport cdk-virtual-scroll-viewport"], ["itemSize", "50"]], [[2, "cdk-virtual-scroll-orientation-horizontal", null], [2, "cdk-virtual-scroll-orientation-vertical", null]], null, null, _node_modules_angular_cdk_scrolling_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_CdkVirtualScrollViewport_0"], _node_modules_angular_cdk_scrolling_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_CdkVirtualScrollViewport"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkScrollable"], null, [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkVirtualScrollViewport"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkFixedSizeVirtualScroll"], [], {
          itemSize: [0, "itemSize"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["VIRTUAL_SCROLL_STRATEGY"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["_fixedSizeVirtualScrollStrategyFactory"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkFixedSizeVirtualScroll"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 245760, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkVirtualScrollViewport"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["VIRTUAL_SCROLL_STRATEGY"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ScrollDispatcher"], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ViewportRuler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_GraficasTercerSeccionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = "50";

          _ck(_v, 2, 0, currVal_2);

          _ck(_v, 4, 0);

          var currVal_3 = _co.InfoMostrada;

          _ck(_v, 6, 0, currVal_3);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).orientation === "horizontal";
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).orientation !== "horizontal";

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      function View_GraficasTercerSeccionComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-graficas-tercer-seccion", [], null, null, null, View_GraficasTercerSeccionComponent_0, RenderType_GraficasTercerSeccionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _graficas_tercer_seccion_component__WEBPACK_IMPORTED_MODULE_22__["GraficasTercerSeccionComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var GraficasTercerSeccionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-graficas-tercer-seccion", _graficas_tercer_seccion_component__WEBPACK_IMPORTED_MODULE_22__["GraficasTercerSeccionComponent"], View_GraficasTercerSeccionComponent_Host_0, {
        inputProyect: "inputProyect",
        impactoAmbientalMostrado: "impactoAmbientalMostrado",
        ElementosContructivosEliminados: "ElementosContructivosEliminados",
        FasesEliminadas: "FasesEliminadas",
        FaseSeleccionada: "FaseSeleccionada",
        materiales: "materiales",
        Secciones: "Secciones",
        EstadoSeccion: "EstadoSeccion",
        unidades: "unidades"
      }, {
        CambioEstadoTercerSeccion: "CambioEstadoTercerSeccion"
      }, []);
      /***/

    },

    /***/
    "EQUR":
    /*!************************************************************!*\
      !*** ./src/app/image-edificio/image-edificio.component.ts ***!
      \************************************************************/

    /*! exports provided: ImageEdificioComponent */

    /***/
    function EQUR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageEdificioComponent", function () {
        return ImageEdificioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ImageEdificioComponent = /*#__PURE__*/function () {
        function ImageEdificioComponent() {
          _classCallCheck(this, ImageEdificioComponent);

          this.seleccion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nivelesLocal = [];
          this.elementosList = {
            1: 'Cimentacion',
            2: 'MurosExteriores',
            3: 'MurosInteriores',
            4: 'Piso',
            5: 'Techo',
            6: 'Entrepiso',
            7: 'Estructura',
            8: 'Puertas',
            9: 'Ventanas',
            10: 'Losas'
          };
          this.canvasw = 300;
          this.canvash = 205;
          this.elementoCambio = "";
          this.imageObj5 = new Image();
          this.imageName5 = "../assets/images/elementos-individuales/5_solo.png";
          this.imageObj6 = new Image();
          this.imageName6 = "../assets/images/elementos-individuales/6_solo.png";
          this.imageObj1 = new Image();
          this.imageName1 = "../assets/images/elementos-individuales/1_solo.png";
          this.imageObj7 = new Image();
          this.imageName7 = "../assets/images/elementos-individuales/7_solo.png";
          this.imageObj10 = new Image();
          this.imageName10 = "../assets/images/elementos-individuales/10_solo.png";
          this.imageObj2 = new Image();
          this.imageName2 = "../assets/images/elementos-individuales/2_solo.png";
          this.imageObj3 = new Image();
          this.imageName3 = "../assets/images/elementos-individuales/3_solo.png";
          this.imageObj4 = new Image();
          this.imageName4 = "../assets/images/elementos-individuales/4_solo.png";
          this.imageObj8 = new Image();
          this.imageName8 = "../assets/images/elementos-individuales/8_solo.png";
          this.imageObj9 = new Image();
          this.imageName9 = "../assets/images/elementos-individuales/9_solo.png";
        }

        _createClass(ImageEdificioComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this24 = this;

            if (this.impactoSeleccionado != null) {
              var auximpacto = this.impactoSeleccionado['index'];
              this.nivelesLocal = this.nivelesProyect[auximpacto.toString()];
            }

            this.canvas5 = this.canvasTecho.nativeElement;
            this.ctx5 = this.canvas5.getContext('2d');
            this.canvas5.width = this.canvasw;
            this.canvas5.height = this.canvash;
            this.imageObj5.src = this.imageName5; //Entrespiso

            this.canvas6 = this.canvasEntrepiso.nativeElement;
            this.ctx6 = this.canvas6.getContext('2d');
            this.canvas6.width = this.canvasw;
            this.canvas6.height = this.canvash;
            this.imageObj6.src = this.imageName6; //cimentación

            this.canvas1 = this.canvasCimentacion.nativeElement;
            this.ctx1 = this.canvas1.getContext('2d');
            this.canvas1.width = this.canvasw;
            this.canvas1.height = this.canvash;
            this.imageObj1.src = this.imageName1; //Estructura

            this.canvas7 = this.canvasEstructura.nativeElement;
            this.ctx7 = this.canvas7.getContext('2d');
            this.canvas7.width = this.canvasw;
            this.canvas7.height = this.canvash;
            this.imageObj7.src = this.imageName7; //Losas

            this.canvas10 = this.canvasLosas.nativeElement;
            this.ctx10 = this.canvas10.getContext('2d');
            this.canvas10.width = this.canvasw;
            this.canvas10.height = this.canvash;
            this.imageObj10.src = this.imageName10; //Muros Ext

            this.canvas2 = this.canvasMurosExteriores.nativeElement;
            this.ctx2 = this.canvas2.getContext('2d');
            this.canvas2.width = this.canvasw;
            this.canvas2.height = this.canvash;
            this.imageObj2.src = this.imageName2; //Muros Int

            this.canvas3 = this.canvasMurosInteriores.nativeElement;
            this.ctx3 = this.canvas3.getContext('2d');
            this.canvas3.width = this.canvasw;
            this.canvas3.height = this.canvash;
            this.imageObj3.src = this.imageName3; //Piso

            this.canvas4 = this.canvasPiso.nativeElement;
            this.ctx4 = this.canvas4.getContext('2d');
            this.canvas4.width = this.canvasw;
            this.canvas4.height = this.canvash;
            this.imageObj4.src = this.imageName4; //Puertas

            this.canvas8 = this.canvasPuertas.nativeElement;
            this.ctx8 = this.canvas8.getContext('2d');
            this.canvas8.width = this.canvasw;
            this.canvas8.height = this.canvash;
            this.imageObj8.src = this.imageName8; //Ventanas

            this.canvas9 = this.canvasVentanas.nativeElement;
            this.ctx9 = this.canvas9.getContext('2d');
            this.canvas9.width = this.canvasw;
            this.canvas9.height = this.canvash;
            this.imageObj9.src = this.imageName9;
            setTimeout(function () {
              return _this24.funcionRealizar();
            }, 500);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "draw",
          value: function draw() {
            //Techo
            this.ctx5.clearRect(0, 0, this.canvas5.width, this.canvas5.height);
            this.ctx5.drawImage(this.imageObj5, 0, 0, this.canvas5.width, this.canvas5.height); //Entrepiso

            this.ctx6.clearRect(0, 0, this.canvas6.width, this.canvas6.height);
            this.ctx6.drawImage(this.imageObj6, 0, 0, this.canvas6.width, this.canvas6.height); //cimentación

            this.ctx1.clearRect(0, 0, this.canvas1.width, this.canvas1.height);
            this.ctx1.drawImage(this.imageObj1, 0, 0, this.canvas1.width, this.canvas1.height); //Estructura

            this.ctx7.clearRect(0, 0, this.canvas7.width, this.canvas7.height);
            this.ctx7.drawImage(this.imageObj7, 0, 0, this.canvas7.width, this.canvas7.height); //Losas

            this.ctx10.clearRect(0, 0, this.canvas10.width, this.canvas10.height);
            this.ctx10.drawImage(this.imageObj10, 0, 0, this.canvas10.width, this.canvas10.height); //Muros Ext

            this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
            this.ctx2.drawImage(this.imageObj2, 0, 0, this.canvas2.width, this.canvas2.height); //Muros Int

            this.ctx3.clearRect(0, 0, this.canvas3.width, this.canvas3.height);
            this.ctx3.drawImage(this.imageObj3, 0, 0, this.canvas3.width, this.canvas3.height); //Piso

            this.ctx4.clearRect(0, 0, this.canvas4.width, this.canvas4.height);
            this.ctx4.drawImage(this.imageObj4, 0, 0, this.canvas4.width, this.canvas4.height); //Puertas

            this.ctx8.clearRect(0, 0, this.canvas8.width, this.canvas8.height);
            this.ctx8.drawImage(this.imageObj8, 0, 0, this.canvas8.width, this.canvas8.height); //Ventanas

            this.ctx9.clearRect(0, 0, this.canvas9.width, this.canvas9.height);
            this.ctx9.drawImage(this.imageObj9, 0, 0, this.canvas9.width, this.canvas9.height);
          }
        }, {
          key: "funcionRealizar",
          value: function funcionRealizar() {
            var _this25 = this;

            this.draw();
            this.edificioSinSeleccion();

            if (this.elementoSeleccionado != " " && this.impactoSeleccionado != null) {
              var colorResaltado = "";
              this.nivelesLocal.forEach(function (nivel, index) {
                if (nivel == Number(_this25.elementoSeleccionado)) {
                  colorResaltado = _this25.inputPtoyect[index];
                }
              });
              this.edificioUnElemento(colorResaltado);
            } else if (this.elementoSeleccionado != " " && this.impactoSeleccionado === null) {
              this.edificioUnElemento("#17202A");
            } else if (this.elementoSeleccionado === " " && this.impactoSeleccionado != null) {
              this.edificioVariosElementos();
            }
          } //Poner elementos del edificio sin colores resaltados por selección

        }, {
          key: "edificioSinSeleccion",
          value: function edificioSinSeleccion() {
            this.ajusteColorTecho("#B3B6B7");
            this.ajusteColorEntrepiso("#B3B6B7");
            this.ajusteColorCimentación("#B3B6B7");
            this.ajusteColorEstructura("#B3B6B7");
            this.ajusteColorLosas("#FFFFFF");
            this.ajusteColorMurosExt("#FFFFFF");
            this.ajusteColorMurosInt("#FFFFFF");
            this.ajusteColorPiso("#FFFFFF");
            this.ajusteColorPuertas("#B3B6B7");
            this.ajusteColorVentanas("#B3B6B7");
          } //Resaltar solo un elemento seleccionado.

        }, {
          key: "edificioUnElemento",
          value: function edificioUnElemento(coloraResaltar) {
            if (Number(this.elementoSeleccionado) == 1) {
              this.ajusteColorCimentación(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 2) {
              this.ajusteColorMurosExt(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 3) {
              this.ajusteColorMurosInt(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 4) {
              this.ajusteColorPiso(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 5) {
              this.ajusteColorTecho(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 6) {
              this.ajusteColorEntrepiso(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 7) {
              this.ajusteColorEstructura(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 8) {
              this.ajusteColorPuertas(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 9) {
              this.ajusteColorVentanas(coloraResaltar);
            } else if (Number(this.elementoSeleccionado) == 10) {
              this.ajusteColorLosas(coloraResaltar);
            }
          } //Resaltar todos los elementos del proyecto con sus colores respecto al impacto ambiental

        }, {
          key: "edificioVariosElementos",
          value: function edificioVariosElementos() {
            var _this26 = this;

            var data = {};
            Object.keys(this.elementosList).forEach(function (element) {
              data[element] = {
                'color': '',
                'flag': false
              };
            });
            this.nivelesLocal.forEach(function (nivel, index) {
              if (nivel <= 10) {
                data[nivel]['flag'] = true;
                data[nivel]['color'] = _this26.inputPtoyect[index];
              }
            });

            if (data[1]['flag']) {
              this.ajusteColorCimentación(data[1]['color']);
            }

            if (data[2]['flag']) {
              this.ajusteColorMurosExt(data[2]['color']);
            }

            if (data[3]['flag']) {
              this.ajusteColorMurosInt(data[3]['color']);
            }

            if (data[4]['flag']) {
              this.ajusteColorPiso(data[4]['color']);
            }

            if (data[5]['flag']) {
              this.ajusteColorTecho(data[5]['color']);
            }

            if (data[6]['flag']) {
              this.ajusteColorEntrepiso(data[6]['color']);
            }

            if (data[7]['flag']) {
              this.ajusteColorEstructura(data[7]['color']);
            }

            if (data[8]['flag']) {
              this.ajusteColorPuertas(data[8]['color']);
            }

            if (data[9]['flag']) {
              this.ajusteColorVentanas(data[9]['color']);
            }

            if (data[10]['flag']) {
              this.ajusteColorLosas(data[10]['color']);
            }
          } //Ajustes de colores 

        }, {
          key: "ajusteColorTecho",
          value: function ajusteColorTecho(color) {
            this.ctx5.globalCompositeOperation = "source-in";
            this.ctx5.fillStyle = color;
            this.ctx5.fillRect(50, 0, this.canvas5.width, this.canvas5.height);
          }
        }, {
          key: "ajusteColorEntrepiso",
          value: function ajusteColorEntrepiso(color) {
            this.ctx6.globalCompositeOperation = "source-in";
            this.ctx6.fillStyle = color;
            this.ctx6.fillRect(50, 0, this.canvas6.width, this.canvas6.height);
          }
        }, {
          key: "ajusteColorCimentaci\xF3n",
          value: function ajusteColorCimentación(color) {
            this.ctx1.globalCompositeOperation = "source-in";
            this.ctx1.fillStyle = color;
            this.ctx1.fillRect(50, 0, this.canvas1.width, this.canvas1.height);
          }
        }, {
          key: "ajusteColorEstructura",
          value: function ajusteColorEstructura(color) {
            this.ctx7.globalCompositeOperation = "source-in";
            this.ctx7.fillStyle = color;
            this.ctx7.fillRect(50, 0, this.canvas7.width, this.canvas7.height);
          }
        }, {
          key: "ajusteColorLosas",
          value: function ajusteColorLosas(color) {
            this.ctx10.globalCompositeOperation = "source-in";
            this.ctx10.fillStyle = color;
            this.ctx10.fillRect(50, 0, this.canvas10.width, this.canvas10.height);
          }
        }, {
          key: "ajusteColorMurosExt",
          value: function ajusteColorMurosExt(color) {
            this.ctx2.globalCompositeOperation = "source-in";
            this.ctx2.fillStyle = color;
            this.ctx2.fillRect(50, 0, this.canvas2.width, this.canvas2.height);
          }
        }, {
          key: "ajusteColorMurosInt",
          value: function ajusteColorMurosInt(color) {
            this.ctx3.globalCompositeOperation = "source-in";
            this.ctx3.fillStyle = color;
            this.ctx3.fillRect(50, 0, this.canvas3.width, this.canvas3.height);
          }
        }, {
          key: "ajusteColorPiso",
          value: function ajusteColorPiso(color) {
            this.ctx4.globalCompositeOperation = "source-in";
            this.ctx4.fillStyle = color;
            this.ctx4.fillRect(50, 0, this.canvas4.width, this.canvas4.height);
          }
        }, {
          key: "ajusteColorPuertas",
          value: function ajusteColorPuertas(color) {
            this.ctx8.globalCompositeOperation = "source-in";
            this.ctx8.fillStyle = color;
            this.ctx8.fillRect(50, 0, this.canvas8.width, this.canvas8.height);
          }
        }, {
          key: "ajusteColorVentanas",
          value: function ajusteColorVentanas(color) {
            this.ctx9.globalCompositeOperation = "source-in";
            this.ctx9.fillStyle = color;
            this.ctx9.fillRect(50, 0, this.canvas9.width, this.canvas9.height);
          }
        }, {
          key: "seleccionIMG",
          value: function seleccionIMG() {
            var aux = [this.idImg, this.idP];
            this.seleccion.emit(aux);
          }
        }]);

        return ImageEdificioComponent;
      }();
      /***/

    },

    /***/
    "I7HB":
    /*!**********************************************************************!*\
      !*** ./src/app/image-edificio/image-edificio.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_ImageEdificioComponent, View_ImageEdificioComponent_0, View_ImageEdificioComponent_Host_0, ImageEdificioComponentNgFactory */

    /***/
    function I7HB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ImageEdificioComponent", function () {
        return RenderType_ImageEdificioComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ImageEdificioComponent_0", function () {
        return View_ImageEdificioComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ImageEdificioComponent_Host_0", function () {
        return View_ImageEdificioComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageEdificioComponentNgFactory", function () {
        return ImageEdificioComponentNgFactory;
      });
      /* harmony import */


      var _image_edificio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./image-edificio.component.scss.shim.ngstyle */
      "vyJP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _image_edificio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-edificio.component */
      "EQUR");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ImageEdificioComponent = [_image_edificio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ImageEdificioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ImageEdificioComponent,
        data: {}
      });

      function View_ImageEdificioComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          canvasTecho: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
          canvasEntrepiso: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, {
          canvasCimentacion: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 4, {
          canvasEstructura: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 5, {
          canvasLosas: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 6, {
          canvasMurosExteriores: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 7, {
          canvasMurosInteriores: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 8, {
          canvasPiso: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 9, {
          canvasPuertas: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 10, {
          canvasVentanas: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 21, "div", [["class", "principal_img"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.seleccionIMG() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 20, "div", [["class", "imagen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, [[1, 0], ["canvasTecho", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, [[2, 0], ["canvasEntrepiso", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, [[4, 0], ["canvasEstructura", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, [[3, 0], ["canvasCimentacion", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, [[5, 0], ["canvasLosas", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, [[6, 0], ["canvasMurosExteriores", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, [[7, 0], ["canvasMurosInteriores", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, [[8, 0], ["canvasPiso", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, [[9, 0], ["canvasPuertas", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "div", [["class", "elemento"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, [[10, 0], ["canvasVentanas", 1]], null, 0, "canvas", [], null, null, null, null, null))], null, null);
      }

      function View_ImageEdificioComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-image-edificio", [], null, null, null, View_ImageEdificioComponent_0, RenderType_ImageEdificioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _image_edificio_component__WEBPACK_IMPORTED_MODULE_2__["ImageEdificioComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ImageEdificioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-image-edificio", _image_edificio_component__WEBPACK_IMPORTED_MODULE_2__["ImageEdificioComponent"], View_ImageEdificioComponent_Host_0, {
        idP: "idP",
        idImg: "idImg",
        inputPtoyect: "inputPtoyect",
        elementoSeleccionado: "elementoSeleccionado",
        impactoSeleccionado: "impactoSeleccionado",
        niveles: "niveles",
        nivelesProyect: "nivelesProyect"
      }, {
        seleccion: "seleccion"
      }, []);
      /***/

    },

    /***/
    "Mu1H":
    /*!**************************************************************************!*\
      !*** ./src/app/comparar/component/comparar/styleSU.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function Mu1H(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".div-impactos-ambientales[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.div-impactos-ambientales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0px;\n  color: #343434;\n  opacity: 1;\n  font-size: 12px;\n}\n.div-impactos-ambientales[_ngcontent-%COMP%]   .icons-options[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-top: 9px;\n}\n.div-impactos-ambientales[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: inline-grid;\n  grid-template-columns: 122px 122px 122px;\n}\n.div-impactos-ambientales[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .button-impactos[_ngcontent-%COMP%] {\n  width: 47px !important;\n  height: 32px !important;\n}\n.div-impactos-ambientales[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  box-sizing: border-box;\n  align-items: center;\n  flex-direction: row;\n  display: flex;\n}\n.campo-grafica-bar[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 810px;\n  height: auto;\n}\n.campo-grafica-bar[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 65px;\n  margin: auto;\n  background-color: #ffffff;\n}\n.campo-grafica-bar[_ngcontent-%COMP%]   .linea-select[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 65px;\n  margin: auto;\n  background-color: #e3c500;\n}\n.campo-grafica-bar[_ngcontent-%COMP%]   .indicadores[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 32px;\n}\n.tabla[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.Tabla-Datos[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  text-align: center;\n  font-size: 12px;\n  width: 795px;\n  overflow: auto;\n}\n.Tabla-Datos[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n.Tabla-Datos[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.Tabla-Datos[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  font-size: 1.2em;\n  padding-top: 15px;\n  padding-right: 16px;\n}\n.secondary-text[_ngcontent-%COMP%] {\n  letter-spacing: 0px;\n  color: #343434;\n  opacity: 1;\n  font-size: 12px;\n  margin-top: 52px;\n}\n.div-secondary-graph[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: 161px auto;\n}\n.div-secondary-graph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0px;\n  color: #343434;\n  opacity: 1;\n  font-size: 13px;\n}\n.div-secondary-graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.div-secondary-graph[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  display: flex;\n}\n.div-secondary-graph[_ngcontent-%COMP%]   .boton-principal[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  text-align: left;\n  background-color: #efefefc7;\n  border: none;\n  width: 99px;\n  height: 39px;\n  font-size: 12px;\n  color: #767676;\n}\n.div-secondary-graph[_ngcontent-%COMP%]   .boton-icono[_ngcontent-%COMP%] {\n  background: #efefef;\n  border-radius: 0px 10px 10px 0px;\n  border: 0px;\n  padding: 1px;\n}\n.div-secondary-graph[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  border-radius: 0px 10px 10px 0px;\n  height: 39px;\n  margin-left: 0px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVTVS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUVOO0FBQUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7QUFDTjtBQUFNO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUVSO0FBRUk7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFOO0FBSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUlBO0VBQ0ksYUFBQTtBQURKO0FBSUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREo7QUFHSTtFQUNFLGtCQUFBO0FBRE47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFJTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9BO0VBQ0ksb0JBQUE7RUFDQSxpQ0FBQTtBQUpKO0FBTUk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUpOO0FBT0k7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFMTjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBTk47QUFTSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUE47QUFVSTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJOO0FBV0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFUTiIsImZpbGUiOiJzdHlsZVNVLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LWltcGFjdG9zLWFtYmllbnRhbGVzIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHAge1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogIzM0MzQzNDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmljb25zLW9wdGlvbnMge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIycHggMTIycHggMTIycHg7XHJcbiAgICAgIC5idXR0b24taW1wYWN0b3Mge1xyXG4gICAgICAgIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIG1hdC1idXR0b24tdG9nZ2xlIHtcclxuICAgICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYW1wby1ncmFmaWNhLWJhciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAuZG90IHtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAubGluZWEtc2VsZWN0e1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzYzUwMDtcclxuICAgIH1cclxuICAgIC5pbmRpY2Fkb3Jlc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5UYWJsYS1EYXRvcyB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDc5NXB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgXHJcbiAgICB0aCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIHRyIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBcclxuICAgICAgJiB0ZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2Vjb25kYXJ5LXRleHQge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjMzQzNDM0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDUycHg7XHJcbn1cclxuXHJcbi5kaXYtc2Vjb25kYXJ5LWdyYXBoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNjFweCBhdXRvO1xyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIGNvbG9yOiAjMzQzNDM0O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICBcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJvdG9uLXByaW5jaXBhbCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWZjNztcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB3aWR0aDogOTlweDtcclxuICAgICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJvdG9uLWljb25vIHtcclxuICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBtYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMC4xcHg7XHJcbiAgICB9XHJcbn0iXX0= */"];
      /***/
    },

    /***/
    "O9Yt":
    /*!*****************************************************!*\
      !*** ./src/app/comparar/comparar-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CompararRoutingModule */

    /***/
    function O9Yt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompararRoutingModule", function () {
        return CompararRoutingModule;
      });
      /* harmony import */


      var _component_comparar_comparar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./component/comparar/comparar.component */
      "jdSv");

      var routes = [{
        path: '',
        component: _component_comparar_comparar_component__WEBPACK_IMPORTED_MODULE_0__["CompararComponent"]
      }];

      var CompararRoutingModule = function CompararRoutingModule() {
        _classCallCheck(this, CompararRoutingModule);
      };
      /***/

    },

    /***/
    "OGnt":
    /*!**************************************************************************!*\
      !*** ./src/app/bar-chart-simple/bar-chart-simple.component.ngfactory.js ***!
      \**************************************************************************/

    /*! exports provided: RenderType_BarChartSimpleComponent, View_BarChartSimpleComponent_0, View_BarChartSimpleComponent_Host_0, BarChartSimpleComponentNgFactory */

    /***/
    function OGnt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_BarChartSimpleComponent", function () {
        return RenderType_BarChartSimpleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BarChartSimpleComponent_0", function () {
        return View_BarChartSimpleComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BarChartSimpleComponent_Host_0", function () {
        return View_BarChartSimpleComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartSimpleComponentNgFactory", function () {
        return BarChartSimpleComponentNgFactory;
      });
      /* harmony import */


      var _bar_chart_simple_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bar-chart-simple.component.scss.shim.ngstyle */
      "c9av");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _bar_chart_simple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bar-chart-simple.component */
      "6ybh");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_BarChartSimpleComponent = [_bar_chart_simple_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_BarChartSimpleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_BarChartSimpleComponent,
        data: {}
      });

      function View_BarChartSimpleComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "div-principal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, [[null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartClick" === en) {
            var pd_0 = _co.onChartClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          legend: [4, "legend"],
          plugins: [5, "plugins"]
        }, {
          chartClick: "chartClick"
        })], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.barChartData;
          var currVal_1 = _co.barChartLabels;
          var currVal_2 = _co.barChartOptions;
          var currVal_3 = _co.barChartType;
          var currVal_4 = _co.barChartLegend;
          var currVal_5 = _co.barChartPlugins;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_BarChartSimpleComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "div-principal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          legend: [4, "legend"],
          plugins: [5, "plugins"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.barChartDataSecond[0];
          var currVal_1 = _co.barChartLabelsSecond;
          var currVal_2 = _co.barChartOptions;
          var currVal_3 = _co.barChartType;
          var currVal_4 = _co.barChartLegend;
          var currVal_5 = _co.barChartPlugins;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_BarChartSimpleComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          chartDir: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BarChartSimpleComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BarChartSimpleComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.showGr;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.showlastGr;

          _ck(_v, 4, 0, currVal_1);
        }, null);
      }

      function View_BarChartSimpleComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bar-chart-simple", [], null, null, null, View_BarChartSimpleComponent_0, RenderType_BarChartSimpleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _bar_chart_simple_component__WEBPACK_IMPORTED_MODULE_4__["BarChartSimpleComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var BarChartSimpleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bar-chart-simple", _bar_chart_simple_component__WEBPACK_IMPORTED_MODULE_4__["BarChartSimpleComponent"], View_BarChartSimpleComponent_Host_0, {
        showGr: "showGr",
        idProyect: "idProyect",
        showlastGr: "showlastGr",
        ciclo: "ciclo",
        elemento: "elemento",
        info: "info",
        banderaDispercion: "banderaDispercion",
        colorDispercion: "colorDispercion"
      }, {
        ClickEvent: "ClickEvent"
      }, []);
      /***/

    },

    /***/
    "Ox0D":
    /*!******************************************************************!*\
      !*** ./src/app/radial-chart/radial-chart.component.ngfactory.js ***!
      \******************************************************************/

    /*! exports provided: RenderType_RadialChartComponent, View_RadialChartComponent_0, View_RadialChartComponent_Host_0, RadialChartComponentNgFactory */

    /***/
    function Ox0D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_RadialChartComponent", function () {
        return RenderType_RadialChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_RadialChartComponent_0", function () {
        return View_RadialChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_RadialChartComponent_Host_0", function () {
        return View_RadialChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadialChartComponentNgFactory", function () {
        return RadialChartComponentNgFactory;
      });
      /* harmony import */


      var _radial_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./radial-chart.component.scss.shim.ngstyle */
      "mX7C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/material/card/index.ngfactory */
      "YHaq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _radial_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./radial-chart.component */
      "llJ9");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_RadialChartComponent = [_radial_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_RadialChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_RadialChartComponent,
        data: {}
      });

      function View_RadialChartComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "mat-card", [["class", "mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 4, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, 2, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 2, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 2, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _co.radarChartData[_v.context.index];
          var currVal_4 = _co.radarChartLabels;
          var currVal_5 = _co.radarChartOptions;
          var currVal_6 = _co.radarChartType;

          _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.Nombre;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.subtitulo;

          _ck(_v, 7, 0, currVal_2);
        });
      }

      function View_RadialChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          chartDir: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "graficas-especificas"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RadialChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [], null, null, null, null, null))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.inputProyect;

          _ck(_v, 3, 0, currVal_0);
        }, null);
      }

      function View_RadialChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-radial-chart", [], null, null, null, View_RadialChartComponent_0, RenderType_RadialChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _radial_chart_component__WEBPACK_IMPORTED_MODULE_7__["RadialChartComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var RadialChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-radial-chart", _radial_chart_component__WEBPACK_IMPORTED_MODULE_7__["RadialChartComponent"], View_RadialChartComponent_Host_0, {
        inputProyect: "inputProyect",
        showMe: "showMe",
        id: "id",
        impactos: "impactos"
      }, {}, []);
      /***/

    },

    /***/
    "Z2uH":
    /*!************************************************************!*\
      !*** ./src/app/bar-chart/bar-chart.component.ngfactory.js ***!
      \************************************************************/

    /*! exports provided: RenderType_BarChartComponent, View_BarChartComponent_0, View_BarChartComponent_Host_0, BarChartComponentNgFactory */

    /***/
    function Z2uH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_BarChartComponent", function () {
        return RenderType_BarChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BarChartComponent_0", function () {
        return View_BarChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BarChartComponent_Host_0", function () {
        return View_BarChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartComponentNgFactory", function () {
        return BarChartComponentNgFactory;
      });
      /* harmony import */


      var _bar_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bar-chart.component.scss.shim.ngstyle */
      "p5Tu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _bar_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bar-chart.component */
      "k7d8");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_BarChartComponent = [_bar_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_BarChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_BarChartComponent,
        data: {}
      });

      function View_BarChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          chartDir: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, [[null, "chartClick"], [null, "chartHover"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartClick" === en) {
            var pd_0 = _co.onChartClick($event) !== false;
            ad = pd_0 && ad;
          }

          if ("chartHover" === en) {
            var pd_1 = _co.onChartHover($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
          datasets: [0, "datasets"],
          labels: [1, "labels"],
          options: [2, "options"],
          chartType: [3, "chartType"],
          legend: [4, "legend"],
          plugins: [5, "plugins"]
        }, {
          chartClick: "chartClick",
          chartHover: "chartHover"
        })], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.barChartData;
          var currVal_1 = _co.barChartLabels;
          var currVal_2 = _co.barChartOptions;
          var currVal_3 = _co.barChartType;
          var currVal_4 = _co.barChartLegend;
          var currVal_5 = _co.barChartPlugins;

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
        }, null);
      }

      function View_BarChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["BarChartComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var BarChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bar-chart", _bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["BarChartComponent"], View_BarChartComponent_Host_0, {
        inputProyects: "inputProyects",
        porcentaje: "porcentaje",
        showMe: "showMe",
        Bandera_bar: "Bandera_bar",
        Columna_seleccionada: "Columna_seleccionada",
        banera_enfoqueSerie_externo: "banera_enfoqueSerie_externo",
        serie_input: "serie_input",
        bandera_enfoqueColumna: "bandera_enfoqueColumna",
        elementoConstructivo: "elementoConstructivo",
        impactoAmbiental: "impactoAmbiental",
        impactos: "impactos"
      }, {
        lastClickEvent: "lastClickEvent",
        ClickEvent: "ClickEvent"
      }, []);
      /***/

    },

    /***/
    "c9av":
    /*!**********************************************************************************!*\
      !*** ./src/app/bar-chart-simple/bar-chart-simple.component.scss.shim.ngstyle.js ***!
      \**********************************************************************************/

    /*! exports provided: styles */

    /***/
    function c9av(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".div-principal[_ngcontent-%COMP%] {\n  display: block;\n  margin: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhci1jaGFydC1zaW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUNIIiwiZmlsZSI6ImJhci1jaGFydC1zaW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmRpdi1wcmluY2lwYWx7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXJnaW46IDUwcHg7XHJcbiB9XHJcbiJdfQ== */"];
      /***/
    },

    /***/
    "cm8W":
    /*!*********************************************!*\
      !*** ./src/app/comparar/comparar.module.ts ***!
      \*********************************************/

    /*! exports provided: CompararModule */

    /***/
    function cm8W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompararModule", function () {
        return CompararModule;
      });

      var CompararModule = function CompararModule() {
        _classCallCheck(this, CompararModule);
      };
      /***/

    },

    /***/
    "fIzW":
    /*!*****************************************************!*\
      !*** ./src/app/calculos/calculos-tercer-seccion.ts ***!
      \*****************************************************/

    /*! exports provided: CalculosTercerSeccion */

    /***/
    function fIzW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculosTercerSeccion", function () {
        return CalculosTercerSeccion;
      });
      /* harmony import */


      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/calculos/Subetapas.json */
      "j2Il");

      var src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! src/app/calculos/Subetapas.json */
      "j2Il", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CalculosTercerSeccion = /*#__PURE__*/function () {
        function CalculosTercerSeccion() {
          _classCallCheck(this, CalculosTercerSeccion);

          this.subetapas_list = src_app_calculos_Subetapas_json__WEBPACK_IMPORTED_MODULE_0__;
          this.impactosIgnorar2 = ['PARNR', 'POT', 'Human toxicity', 'Fresh water aquatic ecotox.', 'Marine aquatic ecotoxicity', 'Terrestrial ecotoxicity'];
        }

        _createClass(CalculosTercerSeccion, [{
          key: "OperacionesDeFasePorElementoConstructivoCicloVida",
          value: function OperacionesDeFasePorElementoConstructivoCicloVida(idProyecto, info, BD) {
            var _this27 = this;

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
            var DatosMateriales = {};
            var schemeProyect = null;
            schemeProyect = this.materialSchemeProyectList.filter(function (msp) {
              return msp['project_id'] == idProyecto;
            });
            var impacto_ban = true;
            var nameImpacto;
            this.potentialTypesList.forEach(function (impacto, index) {
              _this27.impactosIgnorar2.forEach(function (ignorar) {
                if (impacto['name_potential_type'] === ignorar) {
                  impacto_ban = false;
                }
              });

              if (impacto_ban) {
                nameImpacto = impacto['name_complete_potential_type'];
                nameImpacto = _this27.ajustarNombre(nameImpacto);
                console.log(nameImpacto);
                Datos[nameImpacto] = {};
                DatosMateriales[nameImpacto] = {};
                Datos[nameImpacto]['Producción'] = {
                  'A1': {},
                  'A2': {},
                  'A3': {}
                };
                Datos[nameImpacto]['Construccion'] = {
                  'A4': {}
                };
                Datos[nameImpacto]['Uso'] = {
                  'B4': {}
                };
                DatosMateriales[nameImpacto]['Producción'] = {
                  'A1': {},
                  'A2': {},
                  'A3': {}
                };
                DatosMateriales[nameImpacto]['Construccion'] = {
                  'A4': {}
                };
                DatosMateriales[nameImpacto]['Uso'] = {
                  'B4': {}
                };
                var elementoscreados = [];
                var sumaParaReempazos = {};
                var auxMaterialesTransporte = {};
                var auxMaterialesYaSumados = {}; //Cálculos de la sección de producción

                var etapas = [2, 3, 4]; //Subetaps A1 A2 y A3

                etapas.forEach(function (subetapa) {
                  elementoscreados = [];
                  var auxSub = "A".concat((subetapa - 1).toString()); //console.log(subetapa)

                  if (schemeProyect.length > 0) {
                    schemeProyect.forEach(function (ps, num) {
                      var baseDatosMaterial = _this27.materialList.filter(function (bs) {
                        return bs['id'] == ps['material_id'];
                      });

                      if (BD[baseDatosMaterial[0]['database_from']]) {
                        if (baseDatosMaterial[0]['database_from'] === 'EPiC') {
                          var elementoscreadosA1A3 = [];

                          var materiales_subetapa = _this27.materialSchemeDataList.filter(function (msd) {
                            return msd['material_id'] == ps['material_id'] && msd['standard_id'] == 1 && msd['potential_type_id'] == impacto['id'];
                          });

                          if (materiales_subetapa.length > 0) {
                            var flagExisteA1A3 = false;
                            Object.keys(Datos[nameImpacto]['Producción']).forEach(function (sube) {
                              if (sube === 'A1-A3') {
                                flagExisteA1A3 = true;
                              }
                            });

                            if (!flagExisteA1A3) {
                              Datos[nameImpacto]['Producción']['A1-A3'] = {};
                              DatosMateriales[nameImpacto]['Producción']['A1-A3'] = {};
                            }

                            materiales_subetapa.forEach(function (material, index) {
                              if (!elementoscreadosA1A3.includes(ps['section_id'])) {
                                elementoscreadosA1A3.push(ps['section_id']);
                                Datos[nameImpacto]['Producción']['A1-A3'][ps['section_id']] = 0;
                                DatosMateriales[nameImpacto]['Producción']['A1-A3'][ps['section_id']] = {};
                                sumaParaReempazos[ps['section_id']] = {};
                                auxMaterialesYaSumados[ps['section_id']] = [];
                                auxMaterialesTransporte[ps['section_id']] = [];
                              }

                              var auxres = materiales_subetapa[index]['value'] * ps['quantity'];
                              DatosMateriales[nameImpacto]['Producción']['A1-A3'][ps['section_id']][ps['material_id']] = auxres;
                              Datos[nameImpacto]['Producción']['A1-A3'][ps['section_id']] = Datos[nameImpacto]['Producción']['A1-A3'][ps['section_id']] + auxres; //console.log(ps['material_id'],DatosMateriales[nameImpacto]['Producción'][auxSub][ps['section_id']][ps['material_id']],"res",auxres)
                            });
                          }
                        } else {
                          var _materiales_subetapa = _this27.materialSchemeDataList.filter(function (msd) {
                            return msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'];
                          });

                          if (_materiales_subetapa.length > 0) {
                            _materiales_subetapa.forEach(function (material, index) {
                              if (!elementoscreados.includes(ps['section_id'])) {
                                elementoscreados.push(ps['section_id']);
                                Datos[nameImpacto]['Producción'][auxSub][ps['section_id']] = 0;
                                DatosMateriales[nameImpacto]['Producción'][auxSub][ps['section_id']] = {};
                                sumaParaReempazos[ps['section_id']] = {};
                                auxMaterialesYaSumados[ps['section_id']] = [];
                                auxMaterialesTransporte[ps['section_id']] = [];
                              }

                              var auxres = _materiales_subetapa[index]['value'] * ps['quantity']; //console.log(DatosMateriales[nameImpacto]['Producción'][auxSub])

                              DatosMateriales[nameImpacto]['Producción'][auxSub][ps['section_id']][ps['material_id']] = auxres;
                              Datos[nameImpacto]['Producción'][auxSub][ps['section_id']] = Datos[nameImpacto]['Producción'][auxSub][ps['section_id']] + auxres; //console.log(ps['material_id'],DatosMateriales[nameImpacto]['Producción'][auxSub][ps['section_id']][ps['material_id']],"res",auxres)
                            });
                          }
                        }
                      }
                    });
                  }
                }); //console.log(DatosMateriales[nameImpacto])
                //A4 Transporte

                elementoscreados = [];

                if (schemeProyect.length > 0) {
                  schemeProyect.forEach(function (ps) {
                    var baseDatosMaterial = _this27.materialList.filter(function (bs) {
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

                      var value_transport = _this27.PTList.filter(function (val) {
                        return val['potential_type_id'] == impacto['id'] && val['transport_id'] == transporteSeleccionado;
                      });

                      internacional = value_transport[0]['value'] * ps['distance_init'];
                    }

                    if (ps['distance_end'] == null) {
                      nacional = 0;
                    } else {
                      var _transporteSeleccionado2 = 4;

                      if (ps['transport_id_end'] != null) {
                        _transporteSeleccionado2 = ps['transport_id_end'];
                      }

                      var _value_transport2 = _this27.PTList.filter(function (val) {
                        return val['potential_type_id'] == impacto['id'] && val['transport_id'] == _transporteSeleccionado2;
                      });

                      nacional = _value_transport2[0]['value'] * ps['distance_end'];
                    }

                    var conversion_val = _this27.conversionList.filter(function (val) {
                      return val['material_id'] == ps['material_id'];
                    });

                    var peso = 1;

                    if (conversion_val.length > 0) {
                      peso = conversion_val[0]['value'];
                    }

                    if (BD[baseDatosMaterial[0]['database_from']]) {
                      var auxres = peso * ps['quantity'] * (nacional + internacional);

                      if (auxres != 0) {
                        if (!elementoscreados.includes(ps['section_id'])) {
                          elementoscreados.push(ps['section_id']);
                          Datos[nameImpacto]['Construccion']['A4'][ps['section_id']] = 0;
                          DatosMateriales[nameImpacto]['Construccion']['A4'][ps['section_id']] = {};
                          sumaParaReempazos[ps['section_id']] = {};
                          auxMaterialesYaSumados[ps['section_id']] = [];
                          auxMaterialesTransporte[ps['section_id']] = [];
                        }

                        if (!auxMaterialesTransporte[ps['section_id']].includes(ps['material_id'])) {
                          sumaParaReempazos[ps['section_id']][ps['material_id']] = 0;
                          auxMaterialesTransporte[ps['section_id']].push(ps['material_id']);
                        }

                        sumaParaReempazos[ps['section_id']][ps['material_id']] += peso * ps['quantity'] * (nacional + internacional);
                        DatosMateriales[nameImpacto]['Construccion']['A4'][ps['section_id']][ps['material_id']] = auxres;
                        Datos[nameImpacto]['Construccion']['A4'][ps['section_id']] = Datos[nameImpacto]['Construccion']['A4'][ps['section_id']] + auxres;
                      }
                    }
                  });
                }

                elementoscreados = []; //B4 USO
                //las etapas son las mismas que en la sección de producción

                etapas.forEach(function (subetapa) {
                  if (schemeProyect.length > 0) {
                    schemeProyect.forEach(function (ps, num) {
                      if (ps['replaces'] != 0) {
                        var baseDatosMaterial = _this27.materialList.filter(function (bs) {
                          return bs['id'] == ps['material_id'];
                        });

                        if (BD[baseDatosMaterial[0]['database_from']]) {
                          var auxSumaParaReemplazo = sumaParaReempazos[ps['section_id']][ps['material_id']];

                          if (auxSumaParaReemplazo != undefined) {
                            if (!elementoscreados.includes(ps['section_id'])) {
                              elementoscreados.push(ps['section_id']);
                              Datos[nameImpacto]['Uso']['B4'][ps['section_id']] = 0;
                              DatosMateriales[nameImpacto]['Uso']['B4'][ps['section_id']] = {};
                            }

                            DatosMateriales[nameImpacto]['Uso']['B4'][ps['section_id']][ps['material_id']] = auxSumaParaReemplazo;
                            console.log(DatosMateriales[nameImpacto]['Uso']['B4'][ps['section_id']][ps['material_id']], auxSumaParaReemplazo);
                            Datos[nameImpacto]['Uso']['B4'][ps['section_id']] = Datos[nameImpacto]['Uso']['B4'][ps['section_id']] + auxSumaParaReemplazo;
                          }

                          if (baseDatosMaterial[0]['database_from'] === 'EPiC') {
                            var materiales_subetapa = _this27.materialSchemeDataList.filter(function (msd) {
                              return msd['material_id'] == ps['material_id'] && msd['standard_id'] == 1 && msd['potential_type_id'] == impacto['id'];
                            });

                            if (materiales_subetapa.length > 0) {
                              materiales_subetapa.forEach(function (material, index) {
                                if (!elementoscreados.includes(ps['section_id'])) {
                                  elementoscreados.push(ps['section_id']);
                                  Datos[nameImpacto]['Uso']['B4'][ps['section_id']] = 0;
                                  DatosMateriales[nameImpacto]['Uso']['B4'][ps['section_id']] = {};
                                }

                                var auxres = materiales_subetapa[index]['value'] * ps['quantity'] * ps['replaces'];
                                DatosMateriales[nameImpacto]['Uso']['B4'][ps['section_id']][ps['material_id']] += auxres;
                                Datos[nameImpacto]['Uso']['B4'][ps['section_id']] = Datos[nameImpacto]['Uso']['B4'][ps['section_id']] + auxres;
                              });
                            }
                          } else {
                            var _materiales_subetapa2 = _this27.materialSchemeDataList.filter(function (msd) {
                              return msd['material_id'] == ps['material_id'] && msd['standard_id'] == subetapa && msd['potential_type_id'] == impacto['id'];
                            });

                            if (_materiales_subetapa2.length > 0) {
                              _materiales_subetapa2.forEach(function (material, index) {
                                if (!elementoscreados.includes(ps['section_id'])) {
                                  elementoscreados.push(ps['section_id']);
                                  Datos[nameImpacto]['Uso']['B4'][ps['section_id']] = 0;
                                  DatosMateriales[nameImpacto]['Uso']['B4'][ps['section_id']] = {};
                                }

                                var auxres = _materiales_subetapa2[index]['value'] * ps['quantity'] * ps['replaces'];
                                DatosMateriales[nameImpacto]['Uso']['B4'][ps['section_id']][ps['material_id']] += auxres;
                                Datos[nameImpacto]['Uso']['B4'][ps['section_id']] = Datos[nameImpacto]['Uso']['B4'][ps['section_id']] + auxres;
                              });
                            }
                          }
                        }
                      }
                    });
                  }
                });
              }

              impacto_ban = true;
            });
            console.log(DatosMateriales);
            var resultado = {
              'materiales': DatosMateriales,
              'Calculos': Datos
            };
            return resultado;
          }
        }, {
          key: "ajustarNombre",
          value: function ajustarNombre(name) {
            var help = name;
            var spacios = 0;
            var numC = 0;
            var maxlinea = 0;

            var _iterator4 = _createForOfIteratorHelper(help),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var i = _step4.value;

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
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return help;
          }
        }]);

        return CalculosTercerSeccion;
      }();

      CalculosTercerSeccion.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        factory: function CalculosTercerSeccion_Factory() {
          return new CalculosTercerSeccion();
        },
        token: CalculosTercerSeccion,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "jMqV":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/slide-toggle.js ***!
      \*****************************************************************/

    /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

    /***/
    function jMqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
        return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
        return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
        return MatSlideToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
        return MatSlideToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
        return MatSlideToggleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
        return MatSlideToggleRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
        return _MatSlideToggleRequiredValidatorModule;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/slide-toggle/slide-toggle-config.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Default `mat-slide-toggle` options that can be overridden.
       * @record
       */


      function MatSlideToggleDefaultOptions() {}

      if (false) {}
      /**
       * Injection token to be used to override the default options for `mat-slide-toggle`.
       * @type {?}
       */


      var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return {
            disableToggleValue: false
          };
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/slide-toggle/slide-toggle.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Increasing integer for generating unique ids for slide-toggle components.

      /** @type {?} */

      var nextUniqueId = 0;
      /**
       * \@docs-private
       * @type {?}
       */

      var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatSlideToggle;
        }),
        multi: true
      };
      /**
       * Change event object emitted by a MatSlideToggle.
       */

      var MatSlideToggleChange =
      /**
       * @param {?} source
       * @param {?} checked
       */
      function MatSlideToggleChange(source, checked) {
        _classCallCheck(this, MatSlideToggleChange);

        this.source = source;
        this.checked = checked;
      };

      if (false) {} // Boilerplate for applying mixins to MatSlideToggle.

      /**
       * \@docs-private
       */


      var MatSlideToggleBase =
      /**
       * @param {?} _elementRef
       */
      function MatSlideToggleBase(_elementRef) {
        _classCallCheck(this, MatSlideToggleBase);

        this._elementRef = _elementRef;
      };

      if (false) {}
      /** @type {?} */


      var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
      /**
       * Represents a slidable "switch" toggle that can be moved between on and off.
       */


      var MatSlideToggle = /*#__PURE__*/function (_MatSlideToggleMixinB) {
        _inherits(MatSlideToggle, _MatSlideToggleMixinB);

        var _super = _createSuper(MatSlideToggle);

        /**
         * @param {?} elementRef
         * @param {?} _focusMonitor
         * @param {?} _changeDetectorRef
         * @param {?} tabIndex
         * @param {?} _ngZone
         * @param {?} defaults
         * @param {?=} _animationMode
         * @param {?=} _dir
         */
        function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex,
        /**
         * @deprecated `_ngZone` and `_dir` parameters to be removed.
         * @breaking-change 10.0.0
         */
        _ngZone, defaults, _animationMode, _dir) {
          var _this28;

          _classCallCheck(this, MatSlideToggle);

          _this28 = _super.call(this, elementRef);
          _this28._focusMonitor = _focusMonitor;
          _this28._changeDetectorRef = _changeDetectorRef;
          _this28.defaults = defaults;
          _this28._animationMode = _animationMode;

          _this28._onChange =
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {};

          _this28._onTouched =
          /**
          * @return {?}
          */
          function () {};

          _this28._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
          _this28._required = false;
          _this28._checked = false;
          /**
           * Name value will be applied to the input element if present.
           */

          _this28.name = null;
          /**
           * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
           */

          _this28.id = _this28._uniqueId;
          /**
           * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
           */

          _this28.labelPosition = 'after';
          /**
           * Used to set the aria-label attribute on the underlying input element.
           */

          _this28.ariaLabel = null;
          /**
           * Used to set the aria-labelledby attribute on the underlying input element.
           */

          _this28.ariaLabelledby = null;
          /**
           * An event will be dispatched each time the slide-toggle changes its value.
           */

          _this28.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * An event will be dispatched each time the slide-toggle input is toggled.
           * This event is always emitted when the user toggles the slide toggle, but this does not mean
           * the slide toggle's value has changed.
           */

          _this28.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * An event will be dispatched each time the slide-toggle is dragged.
           * This event is always emitted when the user drags the slide toggle to make a change greater
           * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
           * the user toggles the slide toggle to change its value.
           * @deprecated No longer being used. To be removed.
           * \@breaking-change 10.0.0
           */

          _this28.dragChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this28.tabIndex = parseInt(tabIndex) || 0;
          return _this28;
        }
        /**
         * Whether the slide-toggle is required.
         * @return {?}
         */


        _createClass(MatSlideToggle, [{
          key: "required",
          get: function get() {
            return this._required;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the slide-toggle element is checked or not.
           * @return {?}
           */

        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Returns the unique id for the visual hidden input.
           * @return {?}
           */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this29 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(
            /**
            * @param {?} focusOrigin
            * @return {?}
            */
            function (focusOrigin) {
              // Only forward focus manually when it was received programmatically or through the
              // keyboard. We should not do this for mouse/touch focus for two reasons:
              // 1. It can prevent clicks from landing in Chrome (see #18269).
              // 2. They're already handled by the wrapping `label` element.
              if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                _this29._inputElement.nativeElement.focus();
              } else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(
                /**
                * @return {?}
                */
                function () {
                  return _this29._onTouched();
                });
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /**
           * Method being called whenever the underlying input emits a change event.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_onChangeEvent",
          value: function _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
            // `disableToggleValue: true`, the slide toggle's value does not change, and the
            // checked state of the underlying input needs to be changed back.

            if (this.defaults.disableToggleValue) {
              this._inputElement.nativeElement.checked = this.checked;
              return;
            } // Sync the value from the underlying input element with the component instance.


            this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.

            this._emitChangeEvent();
          }
          /**
           * Method being called whenever the slide-toggle has been clicked.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
          /**
           * Implemented as part of ControlValueAccessor.
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
          /**
           * Implemented as part of ControlValueAccessor.
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /**
           * Implemented as part of ControlValueAccessor.
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /**
           * Implemented as a part of ControlValueAccessor.
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Focuses the slide-toggle.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus(options) {
            this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
          }
          /**
           * Toggles the checked state of the slide-toggle.
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;

            this._onChange(this.checked);
          }
          /**
           * Emits a change event on the `change` output. Also notifies the FormControl about the change.
           * @private
           * @return {?}
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._onChange(this.checked);

            this.change.emit(new MatSlideToggleChange(this, this.checked));
          }
          /**
           * Method being called whenever the label text changes.
           * @return {?}
           */

        }, {
          key: "_onLabelTextChange",
          value: function _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and its children.
            this._changeDetectorRef.detectChanges();
          }
        }]);

        return MatSlideToggle;
      }(_MatSlideToggleMixinBase);

      MatSlideToggle.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-slide-toggle',
          exportAs: 'matSlideToggle',
          host: {
            'class': 'mat-slide-toggle',
            '[id]': 'id',
            // Needs to be `-1` so it can still receive programmatic focus.
            '[attr.tabindex]': 'disabled ? null : -1',
            '[attr.aria-label]': 'null',
            '[attr.aria-labelledby]': 'null',
            '[class.mat-checked]': 'checked',
            '[class.mat-disabled]': 'disabled',
            '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
          providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
          inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
        }]
      }];
      /** @nocollapse */

      MatSlideToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      MatSlideToggle.propDecorators = {
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['toggleBar']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatSlideToggleRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Material slide-toggle components with the required attribute in a
       * template-driven form. The default validator for required form controls asserts
       * that the control value is not undefined but that is not appropriate for a slide-toggle
       * where the value is always defined.
       *
       * Required slide-toggle form controls are valid when checked.
       */

      var MatSlideToggleRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

        var _super2 = _createSuper(MatSlideToggleRequiredValidator);

        function MatSlideToggleRequiredValidator() {
          _classCallCheck(this, MatSlideToggleRequiredValidator);

          return _super2.apply(this, arguments);
        }

        return MatSlideToggleRequiredValidator;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"]);

      MatSlideToggleRequiredValidator.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
          providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/slide-toggle/slide-toggle-module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * This module is used by both original and MDC-based slide-toggle implementations.
       */
      // tslint:disable-next-line:class-name

      var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
        _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
      };

      _MatSlideToggleRequiredValidatorModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [MatSlideToggleRequiredValidator],
          declarations: [MatSlideToggleRequiredValidator]
        }]
      }];

      var MatSlideToggleModule = function MatSlideToggleModule() {
        _classCallCheck(this, MatSlideToggleModule);
      };

      MatSlideToggleModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
          exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlideToggle]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: src/material/slide-toggle/public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=slide-toggle.js.map

      /***/
    },

    /***/
    "jdSv":
    /*!*******************************************************************!*\
      !*** ./src/app/comparar/component/comparar/comparar.component.ts ***!
      \*******************************************************************/

    /*! exports provided: CompararComponent */

    /***/
    function jdSv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompararComponent", function () {
        return CompararComponent;
      });
      /* harmony import */


      var src_app_bar_chart_simple_bar_chart_simple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/bar-chart-simple/bar-chart-simple.component */
      "6ybh");
      /* harmony import */


      var src_app_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/bar-chart/bar-chart.component */
      "k7d8");
      /* harmony import */


      var src_app_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pie-chart/pie-chart.component */
      "1U8D");
      /* harmony import */


      var src_app_radial_chart_radial_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/radial-chart/radial-chart.component */
      "llJ9");
      /* harmony import */


      var _image_edificio_image_edificio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../image-edificio/image-edificio.component */
      "EQUR");
      /* harmony import */


      var _component_graficas_tercer_seccion_graficas_tercer_seccion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../component/graficas-tercer-seccion/graficas-tercer-seccion.component */
      "7feb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CompararComponent = /*#__PURE__*/function () {
        function CompararComponent(materials, projects, analisis, router, users, calculos, calculosSegunaSeccion, calculosTercerSeccion, componentFactoryResolver) {
          var _this30 = this;

          _classCallCheck(this, CompararComponent);

          this.materials = materials;
          this.projects = projects;
          this.analisis = analisis;
          this.router = router;
          this.users = users;
          this.calculos = calculos;
          this.calculosSegunaSeccion = calculosSegunaSeccion;
          this.calculosTercerSeccion = calculosTercerSeccion;
          this.componentFactoryResolver = componentFactoryResolver;
          this.barChartComponent = src_app_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"];
          this.radialChart = src_app_radial_chart_radial_chart_component__WEBPACK_IMPORTED_MODULE_3__["RadialChartComponent"];
          this.pieChart = src_app_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"];
          this.barChartSimpleComponent = src_app_bar_chart_simple_bar_chart_simple_component__WEBPACK_IMPORTED_MODULE_0__["BarChartSimpleComponent"];
          this.graficasTercerSeccionComponent = _component_graficas_tercer_seccion_graficas_tercer_seccion_component__WEBPACK_IMPORTED_MODULE_5__["GraficasTercerSeccionComponent"];
          this.ImgEdificioComponent = _image_edificio_image_edificio_component__WEBPACK_IMPORTED_MODULE_4__["ImageEdificioComponent"];
          this.selector = 'Ninguno';
          this.showVar = false;
          this.showVar_1 = false;
          this.ID = ' ';
          this.proyecto = {
            nombre: ' ',
            num_epic: 0,
            num_epd: 0
          };
          this.banderaGrapg = 0;
          this.proyect = [];
          this.proyect_active = [];
          this.outproyect_bar = [];
          this.outproyect_radar = [];
          this.outproyect_pie = [];
          this.outproyect_bar_elementos = [];
          this.outproyect_pie_bar_elementos = [];
          this.hover = true;
          this.bandera_porcentaje = true;
          this.bandera_num = false;
          this.Impactos_menu = [];
          this.indicador_elegido = false;
          this.bandera_resultado = 0;
          this.show_elementos = true;
          this.Impactos_ambientales = true;
          this.Impactos_Elementos = false;
          this.Elementos_constructivos = false;
          this.show_Dispercion = false;
          this.delete_fase = true;
          this.bandera_por_metro = false;
          this.DBList = [];
          this.labelPosition = 'porcentaje';
          this.proyectosMostrados_elementos = [];
          this.bandera_graph_bar = false;
          this.botones_elementos_constructivos = [];
          this.impacto_seleccionado = ' ';
          this.bandera_serie_Seleccionada = false;
          this.resultdosGraficos = true;
          this.resultdosTabla = false;
          this.DatosTabla = [];
          this.classBotones = 'boton-principal';
          this.fasesEliminadas = [];
          this.elementosContructivosEliminados = [];
          this.elementosContructivosEliminadosElementos = [];
          this.elementoContructivoSelecionado = ' ';
          this.iconosElementosConstrucivos = {};
          this.proyectosMostrados = [];
          this.idsIconosElementos = {};
          this.cargaElementos = false;
          this.imgSeleccionadaElemento = ' ';
          this.nombreProyectoElegidoSeleccionadoElementos = ' ';
          this.elementoSeleccionadoMostrado = ' ';
          this.impactoSeleccionadoElementoConstructivo = ' ';
          this.iconos = {
            Producción: 'visibility',
            Construccion: 'visibility',
            Uso: 'visibility',
            FinDeVida: 'visibility'
          };
          this.iconosCambioElementos = {
            Producción: 'visibility',
            Construccion: 'visibility',
            Uso: 'visibility',
            FinDeVida: 'visibility'
          };
          this.ciclosDeVidaIgnoradasElementos = [];
          this.idsImgEdificios = [];
          this.idProyectoSeleccionadoImagen = ' ';
          this.banderaTipoGraficaDispercion = true;
          this.infoTablaDispercion = [];
          this.displayedColumnsDispercion = ['no', 'material', 'porcentaje', 'numero'];
          this.colorGraficaDispercion = ' ';
          this.nivelesExistententesElementosConstructivos = [];
          this.coloresExistententesElementosConstructivos = [];
          this.impactoSeleccionadoElementoConstructivoGrafica = null;
          this.banderaAjusteElememtos = false;
          this.catologoImpactoAmbiental = [];
          this.elementosConstructivosMostradosElementos = {};
          this.elementosConstructivosMostradosElementosPorProyecto = {};
          this.cicloVidaSeleccionadoElemento = ' ';
          this.flagMaterialesDispercion = true;
          this.flagSinMaterialesDispercion = false;
          this.estadoTercerSeccion = {};
          this.unidadImpactoAmientalTabla = '';
          this.idsImpactosAmbientales = {}; //basesDatos={'EDPs':true,'EPic':false,'MEX':false}

          this.basesDatos = {};
          this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
          this.botones_grafica_activos = false;
          this.columnsToDisplay = [];
          this.users.searchUser(localStorage.getItem('email-login')).subscribe(function (data) {
            localStorage.setItem('email-id', data[0].id);
            _this30.projectsList = [];

            _this30.projects.getProjects().subscribe(function (data) {
              data.map(function (item) {
                if (item.user_platform_id === parseInt(localStorage.getItem('email-id'), 10)) {
                  _this30.projectsList.push(item);
                }
              });
            });
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([this.analisis.getTypeEnergy(), this.materials.getMaterials(), this.analisis.getMaterialSchemeData(), this.analisis.getMaterialSchemeProyect(), this.analisis.getPotentialTypes(), this.analisis.getStandars(), this.analisis.getConstructiveSystemElement(), this.analisis.getSourceInformationData(), this.analisis.getSourceInformation(), this.analisis.getAnnualConsumptionRequired(), this.analisis.getElectricityConsumptionData(), this.analisis.getTypeEnergyData(), this.analisis.getUsefulLife(), this.analisis.getECDP(), this.analisis.getSectionsList(), this.analisis.getMaterials(), this.analisis.getPotentialTransport(), this.analisis.getConversion(), this.analisis.getDB()]).subscribe(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 19),
                TE = _ref3[0],
                materialData = _ref3[1],
                materialSchemeData = _ref3[2],
                materialSchemeProyect = _ref3[3],
                potentialTypes = _ref3[4],
                standards = _ref3[5],
                CSE = _ref3[6],
                SID = _ref3[7],
                SI = _ref3[8],
                ACR = _ref3[9],
                ECD = _ref3[10],
                TED = _ref3[11],
                UL = _ref3[12],
                ECDP = _ref3[13],
                sectionsList = _ref3[14],
                materiales = _ref3[15],
                PT = _ref3[16],
                conversions = _ref3[17],
                DB = _ref3[18];

            _this30.materialList = materialData;
            _this30.materialSchemeDataList = materialSchemeData;
            _this30.materialSchemeProyectList = materialSchemeProyect;
            _this30.potentialTypesList = potentialTypes;

            var aux = _this30.calculos.FiltradoDeImpactos(potentialTypes);

            _this30.catologoImpactoAmbiental = aux;

            _this30.llenarIdsBotonesImpactos(aux);

            _this30.selectedValue = _this30.catologoImpactoAmbiental[0]['name_complete_potential_type'];
            _this30.impactoAmbientalSeleccionado = _this30.calculos.ajustarNombre(_this30.catologoImpactoAmbiental[0]['name_complete_potential_type']);
            _this30.standarsList = standards;
            _this30.CSEList = CSE;
            _this30.SIDList = SID;
            _this30.SIList = SI;
            _this30.ACRList = ACR;
            _this30.ECDList = ECD;
            _this30.TEDList = TED;
            _this30.TEList = TE;
            _this30.ULList = UL;
            _this30.ECDPList = ECDP;
            _this30.sectionList = sectionsList;
            _this30.materiales = materiales;
            _this30.PTList = PT;
            _this30.conversionList = conversions;
            _this30.botones_elementos_constructivos = sectionsList;

            _this30.BDInicio(DB);

            _this30.llenarIdsBotones(sectionsList);

            _this30.idProyectoActivo = parseInt(sessionStorage.getItem('projectID'));
            _this30.columnsToDisplay = _this30.calculos.ImpactosSeleccionados(_this30.potentialTypesList);

            _this30.menu_inicio();
          });
        }

        _createClass(CompararComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //Regreso a la página de inicio

        }, {
          key: "returnHome",
          value: function returnHome() {
            this.router.navigateByUrl('home-evamed');
          } //ids Necesarios para modificar en html

        }, {
          key: "llenarIdsBotonesImpactos",
          value: function llenarIdsBotonesImpactos(catalogo) {
            var _this31 = this;

            this.idsImpactosAmbientales = {
              idsCiclo: [],
              idsElementos: []
            };
            catalogo.forEach(function (impacto) {
              var auxIDCiclo = impacto['id'].toString().concat('LineaImpactoCiclo');
              var auxIDElementos = impacto['id'].toString().concat('LineaImpactoElememtos');

              _this31.idsImpactosAmbientales['idsCiclo'].push(auxIDCiclo);

              _this31.idsImpactosAmbientales['idsElementos'].push(auxIDElementos); //this.idsImpactosAmbientales['respuesta'].push(impacto['id'])

            });
          } //inicio de Base de datos que se consideran para los calculos

        }, {
          key: "BDInicio",
          value: function BDInicio(listaBD) {
            var _this32 = this;

            this.DBList = [];
            this.basesDatos = {};
            listaBD.forEach(function (element) {
              _this32.DBList.push(element['name']);

              _this32.basesDatos[element['name']] = false;
            });
          } //eliminar fase de ciclo de visa y redistribución;

        }, {
          key: "ajusteDeGraficaFASE",
          value: function ajusteDeGraficaFASE(fase) {
            var _this33 = this;

            if (this.fasesEliminadas.includes(fase)) {
              this.fasesEliminadas.forEach(function (element, index) {
                if (element == fase) {
                  _this33.fasesEliminadas.splice(index, 1);

                  document.getElementById(fase.concat('Ojo')).className = 'boton-icono';
                  _this33.iconos[fase] = 'visibility';
                }
              });
            } else {
              this.iconos[fase] = 'visibility_off';
              document.getElementById(fase.concat('Ojo')).className = 'boton-ojito-select';
              this.fasesEliminadas.push(fase);
            }

            this.outproyect_bar = [];
            this.proyect_active.forEach(function (element) {
              var data = _this33.llamarCalculos(element);

              var analisis = _this33.getAnalisisBarras(element, data);

              _this33.outproyect_bar.push(analisis);
            });
            this.fasesEliminadas.forEach(function (value) {
              _this33.outproyect_bar.forEach(function (proyecto, index) {
                var indicadores = Object.keys(proyecto.Datos);
                indicadores.forEach(function (element) {
                  delete _this33.outproyect_bar[index].Datos[element][value];
                });
              });
            });

            if (this.resultdosGraficos) {
              this.iniciaBarras();
            } else {
              this.TablaResultados();
            }
          } //agregar proyecto a graficas

        }, {
          key: "iniciar_graficas",
          value: function iniciar_graficas(id) {
            var _this34 = this;

            if (this.proyect_active.some(function (item) {
              return item == id;
            })) {
              return;
            }

            this.proyect_active.push(id);
            this.idsImgEdificios.push(id.toString().concat('imagen'));

            if (this.proyect_active.length > 1) {
              this.banderaAjusteElememtos = true;
            }

            var data = this.llamarCalculos(id);
            var analisis = this.getAnalisisBarras(id, data);
            var analisisRad = this.getAnalisisRadial(id, data);
            var analisisPie = this.getAnalisisPie(id, data);
            var analisisBarDos = this.getAnalisisBarrasElementosConstructivos(id);
            var analisisPieBarDos = this.getAnalisisPieBarSegunaSeccion(id);
            var analisisPieTres = this.getAnalisisElementos(id);
            this.proyect.forEach(function (proyecto, index) {
              if (proyecto.id == id && proyecto.id != _this34.idProyectoActivo) {
                _this34.proyect[index].num_epic = _this34.calculos.materiales_EPIC;
                _this34.proyect[index].num_epd = _this34.calculos.materiales_EPD;
                _this34.proyect[index].card = true;
                _this34.proyectosMostrados = [].concat(_toConsumableArray(_this34.proyectosMostrados), [{
                  num: _this34.proyect_active.length,
                  Nombre: _this34.proyect[index].Nombre,
                  id: _this34.proyect[index].id
                }]);
              }
            });
            this.banderaAjusteElememtos = false;
            this.outproyect_bar.push(analisis);
            this.outproyect_radar.push(analisisRad);
            this.outproyect_pie.push(analisisPie);
            this.outproyect_bar_elementos.push(analisisBarDos);
            this.outproyect_pie_bar_elementos.push(analisisPieBarDos);

            if (this.Impactos_ambientales) {
              //elementos de la dección 1
              if (this.ID != ' ') {
                document.getElementById(this.ID).className = 'boton-principal';
              }
            }

            if (this.resultdosTabla) {
              this.TablaResultados();
            } else {
              this.iniciaBarras();
            }

            if (this.Impactos_Elementos) {
              //elementos de la sección 2
              this.iniciaBarrasSeccionDos();

              if (this.imgSeleccionadaElemento != ' ') {
                this.DispercionAP(this.imgSeleccionadaElemento, ' ');
              }

              Object.keys(this.iconosElementosConstrucivos).forEach(function (element) {
                if (_this34.iconosElementosConstrucivos[element]['habilitado'] === false) {
                  document.getElementById(_this34.idsIconosElementos[element]['idTEXTO']).className = 'espacio-sin-selecciomar';
                }
              });
              this.catologoImpactoAmbiental.forEach(function (impacto) {
                var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                var elementosflag = document.getElementById(auxID);

                if (elementosflag != null) {
                  elementosflag.className = 'dot';
                }
              });
              this.graficabar(null);
            }

            this.containerGraficas.clear();
            this.receiveSelector(null);
            this.banderaGrapg == 0;
            this.proyectosMostrados_elementos = [].concat(_toConsumableArray(this.proyectosMostrados_elementos), [{
              idproyecto: id,
              nombre: analisis.Nombre,
              data: analisisPieTres
            }]);
            this.estadoTercerSeccion[id] = {
              agruparProduccion: false,
              cicloSeleccionado: ' ',
              flagPie: true,
              fragBar: false
            };

            if (this.Elementos_constructivos) {
              this.iniciarSeccionTres();
            }

            this.showVar = false;
            this.showVar_1 = false;
            this.banderaGrapg = 0;
            return;
          }
        }, {
          key: "iniciaBarras",
          value: function iniciaBarras() {
            var _this35 = this;

            if (this.resultdosGraficos) {
              this.container.clear();
              var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartComponent);
              var grafica = this.container.createComponent(componentFactory);
              grafica.instance.porcentaje = this.bandera_porcentaje;
              grafica.instance.inputProyects = this.outproyect_bar;
              grafica.instance.showMe = true;
              grafica.instance.Bandera_bar = false;
              grafica.instance.Columna_seleccionada = this.selector;
              grafica.instance.banera_enfoqueSerie_externo = this.bandera_serie_Seleccionada;
              grafica.instance.serie_input = this.serie_Seleccionada;
              grafica.instance.impactos = this.potentialTypesList;
              grafica.instance.lastClickEvent.subscribe(function (e) {
                return _this35.receiveSelector(e);
              });
            }
          }
        }, {
          key: "iniciarImgEdificio",
          value: function iniciarImgEdificio() {
            var _this36 = this;

            this.containerImgEdificio.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ImgEdificioComponent);
            var containers = {};
            this.proyect_active.forEach(function (proyecto, index) {
              //console.log(this.elementosConstructivosMostradosElementosPorProyecto[proyecto]);
              var auxN = 'imgEdificio'.concat(proyecto);
              containers[auxN] = _this36.containerImgEdificio.createComponent(componentFactory);
              containers[auxN].instance.inputPtoyect = _this36.coloresExistententesElementosConstructivos;
              containers[auxN].instance.elementoSeleccionado = _this36.elementoContructivoSelecionado;
              containers[auxN].instance.niveles = _this36.nivelesExistententesElementosConstructivos;
              containers[auxN].instance.idImg = _this36.idsImgEdificios[index];
              containers[auxN].instance.idP = _this36.proyect_active[index];
              containers[auxN].instance.impactoSeleccionado = _this36.impactoSeleccionadoElementoConstructivoGrafica;
              containers[auxN].instance.nivelesProyect = _this36.elementosConstructivosMostradosElementosPorProyecto[proyecto];
              containers[auxN].instance.seleccion.subscribe(function (e) {
                return _this36.recepcionAP(e);
              });
            });
            /**
             const imgEdificioC = this.containerImgEdificio.createComponent(componentFactory);
             imgEdificioC.instance.inputPtoyect = this.coloresExistententesElementosConstructivos;
             imgEdificioC.instance.elementoSeleccionado = this.elementoContructivoSelecionado;
             imgEdificioC.instance.niveles = this.nivelesExistententesElementosConstructivos;
             imgEdificioC.instance.idImg = this.idsImgEdificios[0];
             imgEdificioC.instance.idP = this.proyect_active[0];
             imgEdificioC.instance.impactoSeleccionado = this.impactoSeleccionadoElementoConstructivoGrafica;
             imgEdificioC.instance.seleccion.subscribe((e) => this.recepcionAP(e));
             */
            //const imfEdificioCDOS = this.containerImgEdificio.createComponent(componentFactory);
            //imfEdificioCDOS.instance.inputPtoyect = 2;
          } //creación de gráfica de barras para la sección de impactos ambientales por
          //elementos onstructivos

        }, {
          key: "iniciaBarrasSeccionDos",
          value: function iniciaBarrasSeccionDos() {
            var _this37 = this;

            this.containerBarGrafica.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartComponent);
            var grafica = this.containerBarGrafica.createComponent(componentFactory);
            grafica.instance.inputProyects = this.outproyect_bar_elementos;
            grafica.instance.showMe = false;
            grafica.instance.Bandera_bar = this.bandera_graph_bar;
            grafica.instance.porcentaje = true;
            grafica.instance.elementoConstructivo = this.elementoContructivoSelecionado;
            grafica.instance.impactoAmbiental = this.impactoSeleccionadoElementoConstructivoGrafica;
            grafica.instance.ClickEvent.subscribe(function (e) {
              return _this37.receiveSelectorDos(e);
            });
          }
        }, {
          key: "iniciarSeccionTres",
          value: function iniciarSeccionTres() {
            var _this38 = this;

            this.containerGraficaT.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.graficasTercerSeccionComponent);
            var grafica = this.containerGraficaT.createComponent(componentFactory);
            grafica.instance.impactoAmbientalMostrado = this.impactoAmbientalSeleccionado;
            grafica.instance.ElementosContructivosEliminados = this.elementosContructivosEliminadosElementos;
            grafica.instance.FaseSeleccionada = this.cicloVidaSeleccionadoElemento;
            grafica.instance.FasesEliminadas = this.ciclosDeVidaIgnoradasElementos;
            grafica.instance.inputProyect = this.proyectosMostrados_elementos;
            grafica.instance.materiales = this.materialList;
            grafica.instance.Secciones = this.sectionList;
            grafica.instance.EstadoSeccion = this.estadoTercerSeccion;
            grafica.instance.unidades = this.potentialTypesList;
            grafica.instance.CambioEstadoTercerSeccion.subscribe(function (e) {
              return _this38.cambioEstadoTercerSección(e);
            });
          }
        }, {
          key: "iniciaRadiales",
          value: function iniciaRadiales() {
            this.containerGraficas.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.radialChart);
            var grafica = this.containerGraficas.createComponent(componentFactory);
            grafica.instance.inputProyect = this.outproyect_radar;
            grafica.instance.showMe = this.showVar_1;
            grafica.instance.id = this.ID;
            grafica.instance.impactos = this.potentialTypesList;
          }
        }, {
          key: "iniciaPie",
          value: function iniciaPie() {
            this.containerGraficas.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.pieChart);
            var grafica = this.containerGraficas.createComponent(componentFactory);
            grafica.instance.inputProyect = this.outproyect_pie;
            grafica.instance.showMePartially = this.showVar;
            grafica.instance.indicador = this.selector;
            grafica.instance.id = this.ID;
            grafica.instance.Bandera_resultado = 2;
            grafica.instance.unidades = this.potentialTypesList;
          }
        }, {
          key: "llamarCalculosTercerSeccion",
          value: function llamarCalculosTercerSeccion(idProyecto) {
            var DatosCalculos = {
              TEList: this.TEList,
              projectsList: this.projectsList,
              materialList: this.materialList,
              materialSchemeDataList: this.materialSchemeDataList,
              materialSchemeProyectList: this.materialSchemeProyectList,
              potentialTypesList: this.potentialTypesList,
              standarsList: this.standarsList,
              CSEList: this.CSEList,
              SIDList: this.SIDList,
              SIList: this.SIList,
              ACRList: this.ACRList,
              ECDList: this.ECDList,
              TEDList: this.TEDList,
              ULList: this.ULList,
              ECDPList: this.ECDPList,
              sectionList: this.sectionList,
              PTList: this.PTList,
              conversionList: this.conversionList
            };
            var aux = this.calculosTercerSeccion.OperacionesDeFasePorElementoConstructivoCicloVida(idProyecto, DatosCalculos, this.basesDatos); //console.log(aux)

            return aux;
          }
        }, {
          key: "getAnalisisElementos",
          value: function getAnalisisElementos(idProyecto) {
            return this.llamarCalculosTercerSeccion(idProyecto);
          }
        }, {
          key: "llamarCalculos",
          value: function llamarCalculos(idProyecto) {
            var DatosCalculos = {
              TEList: this.TEList,
              projectsList: this.projectsList,
              materialList: this.materialList,
              materialSchemeDataList: this.materialSchemeDataList,
              materialSchemeProyectList: this.materialSchemeProyectList,
              potentialTypesList: this.potentialTypesList,
              standarsList: this.standarsList,
              CSEList: this.CSEList,
              SIDList: this.SIDList,
              SIList: this.SIList,
              ACRList: this.ACRList,
              ECDList: this.ECDList,
              TEDList: this.TEDList,
              ULList: this.ULList,
              ECDPList: this.ECDPList,
              sectionList: this.sectionList,
              PTList: this.PTList,
              conversionList: this.conversionList
            };
            var auxdata = this.calculos.OperacionesDeFase(idProyecto, DatosCalculos, this.basesDatos);
            var auxDatos = auxdata[0];
            return auxDatos;
          }
        }, {
          key: "getAnalisisBarras",
          value: function getAnalisisBarras(idProyecto, data) {
            var _this39 = this;

            //Creación de espacio para guardar los datos del proyecto
            var analisisProyectos = {
              Nombre: this.projectsList.filter(function (p) {
                return p['id'] == idProyecto;
              })[0]['name_project'],
              id: idProyecto,
              Datos: {}
            };
            var auxDatos = data;
            Object.keys(auxDatos).forEach(function (impacto) {
              analisisProyectos.Datos[impacto] = {};
              Object.keys(auxDatos[impacto]).forEach(function (fase) {
                analisisProyectos.Datos[impacto][fase] = 0;
                Object.keys(auxDatos[impacto][fase]).forEach(function (subetapa) {
                  analisisProyectos.Datos[impacto][fase] = analisisProyectos.Datos[impacto][fase] + auxDatos[impacto][fase][subetapa];
                });

                if (_this39.bandera_por_metro) {
                  var superficieConstruida = 0;

                  if (fase === 'Uso') {
                    superficieConstruida = _this39.calculos.projectsList.filter(function (p) {
                      return p['id'] == idProyecto;
                    })[0]['living_area'];
                  } else {
                    superficieConstruida = _this39.calculos.projectsList.filter(function (p) {
                      return p['id'] == idProyecto;
                    })[0]['builded_surface'];
                  }

                  analisisProyectos.Datos[impacto][fase] = analisisProyectos.Datos[impacto][fase] / superficieConstruida;
                }
              });
            });
            return analisisProyectos;
          }
        }, {
          key: "getAnalisisRadial",
          value: function getAnalisisRadial(idProyecto, data) {
            var _this40 = this;

            var analisisProyectos = {
              Nombre: this.calculos.projectsList.filter(function (p) {
                return p['id'] == idProyecto;
              })[0]['name_project'],
              id: idProyecto,
              Datos: {}
            };
            var auxDatos = data;
            var auxFases = [];
            Object.keys(auxDatos).forEach(function (impacto) {
              Object.keys(auxDatos[impacto]).forEach(function (fase) {
                if (!auxFases.includes(fase)) {
                  auxFases.push(fase);
                  analisisProyectos.Datos[fase] = {};
                }

                analisisProyectos.Datos[fase][impacto] = 0;
                Object.keys(auxDatos[impacto][fase]).forEach(function (subetapa) {
                  analisisProyectos.Datos[fase][impacto] = analisisProyectos.Datos[fase][impacto] + auxDatos[impacto][fase][subetapa];
                });

                if (_this40.bandera_por_metro) {
                  var superficieConstruida = 0;

                  if (fase === 'Uso') {
                    superficieConstruida = _this40.calculos.projectsList.filter(function (p) {
                      return p['id'] == idProyecto;
                    })[0]['living_area'];
                  } else {
                    superficieConstruida = _this40.calculos.projectsList.filter(function (p) {
                      return p['id'] == idProyecto;
                    })[0]['builded_surface'];
                  }

                  analisisProyectos.Datos[fase][impacto] = analisisProyectos.Datos[fase][impacto] / superficieConstruida;
                }
              });
            });
            return analisisProyectos;
          }
        }, {
          key: "getAnalisisPie",
          value: function getAnalisisPie(idProyecto, data) {
            var _this41 = this;

            var analisisProyectos = {
              Nombre: this.calculos.projectsList.filter(function (p) {
                return p['id'] == idProyecto;
              })[0]['name_project'],
              id: idProyecto,
              Datos: {}
            };
            var auxDatos = data;
            Object.keys(auxDatos).forEach(function (impacto) {
              var impacto_ambiental = impacto.replace(/\n/g, ' ');
              analisisProyectos.Datos[impacto_ambiental] = {};
              Object.keys(auxDatos[impacto]).forEach(function (fase) {
                analisisProyectos.Datos[impacto_ambiental][fase] = auxDatos[impacto][fase];

                if (_this41.bandera_por_metro) {
                  var superficieConstruida = 0;

                  if (fase === 'Uso') {
                    superficieConstruida = _this41.calculos.projectsList.filter(function (p) {
                      return p['id'] == idProyecto;
                    })[0]['living_area'];
                  } else {
                    superficieConstruida = _this41.calculos.projectsList.filter(function (p) {
                      return p['id'] == idProyecto;
                    })[0]['builded_surface'];
                  }

                  Object.keys(analisisProyectos.Datos[impacto_ambiental][fase]).forEach(function (subetapa) {
                    analisisProyectos.Datos[impacto_ambiental][fase][subetapa] = analisisProyectos.Datos[impacto_ambiental][fase][subetapa] / superficieConstruida;
                  });
                }
              });
            });
            return analisisProyectos;
          }
        }, {
          key: "getAnalisisPieBarSegunaSeccion",
          value: function getAnalisisPieBarSegunaSeccion(idProyecto) {
            //Calculos y obtención de datos para crear correctamente las gráficas de barras
            var analisisProyectos = {
              Nombre: this.calculos.projectsList.filter(function (p) {
                return p['id'] == idProyecto;
              })[0]['name_project'],
              id: idProyecto,
              Datos: {}
            };
            var auxData = {};
            var auxDatosDos = this.llamarCalculosTercerSeccion(idProyecto);
            Object.keys(auxDatosDos['materiales']).forEach(function (impactoAmbiental) {
              auxData[impactoAmbiental] = {};
              var seccionesCreadas = [];
              var materialSeccion = {};
              Object.keys(auxDatosDos['materiales'][impactoAmbiental]).forEach(function (cicloVida) {
                Object.keys(auxDatosDos['materiales'][impactoAmbiental][cicloVida]).forEach(function (subEtapa) {
                  Object.keys(auxDatosDos['materiales'][impactoAmbiental][cicloVida][subEtapa]).forEach(function (seccion) {
                    if (!seccionesCreadas.includes(seccion)) {
                      auxData[impactoAmbiental][seccion] = {};
                      materialSeccion[seccion] = [];
                      seccionesCreadas.push(seccion);
                    }

                    Object.keys(auxDatosDos['materiales'][impactoAmbiental][cicloVida][subEtapa][seccion]).forEach(function (material) {
                      if (!materialSeccion[seccion].includes(material)) {
                        auxData[impactoAmbiental][seccion][material] = 0;
                        materialSeccion[seccion].push(material);
                      }

                      auxData[impactoAmbiental][seccion][material] += auxDatosDos['materiales'][impactoAmbiental][cicloVida][subEtapa][seccion][material];
                    });
                  });
                });
              });
            });
            analisisProyectos['Datos'] = auxData;
            return analisisProyectos;
          }
        }, {
          key: "AjustePorMetro",
          value: function AjustePorMetro(flag) {
            var _this42 = this;

            this.outproyect_bar = [];
            this.outproyect_pie = [];
            this.outproyect_radar = [];
            this.fasesEliminadas = [];
            this.proyect_active.forEach(function (id) {
              if (flag == 0) {
                _this42.bandera_por_metro = true;
              } else {
                _this42.bandera_por_metro = false;
              }

              var data = _this42.llamarCalculos(id);

              var analisis = _this42.getAnalisisBarras(id, data);

              var analisisRad = _this42.getAnalisisRadial(id, data);

              var analisisPie = _this42.getAnalisisPie(id, data);

              _this42.outproyect_bar.push(analisis);

              _this42.outproyect_radar.push(analisisRad);

              _this42.outproyect_pie.push(analisisPie);
            });

            if (this.resultdosGraficos) {
              this.containerGraficas.clear();
              this.receiveSelector(null);
              this.ID = ' ';
              this.iniciaBarras();
            } else {
              this.TablaResultados();
            }
          } //creación de tabla de resultado

        }, {
          key: "TablaResultados",
          value: function TablaResultados() {
            var _this43 = this;

            this.botones_grafica_activos = true;
            this.container.clear();
            var auxL = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];
            var aux_color = ['#4DBE89', '#148A93', '#8F5091', '#DEA961', '#767676']; //se prepara la información por filas

            var aux = [];
            var flagMasProyectos = false;
            var auxtotal = {};
            var auxImpactosTotal = {};
            this.outproyect_bar.forEach(function (element) {
              auxtotal[element.id] = {};
              auxImpactosTotal[element.id] = [];
              Object.keys(element.Datos).forEach(function (impacto) {
                var auxNombreImpacto = impacto.replace(/\n/g, '');

                if (!auxImpactosTotal[element.id].includes(auxNombreImpacto)) {
                  auxtotal[element.id][auxNombreImpacto] = 0;
                  auxImpactosTotal[element.id].push(auxNombreImpacto);
                }
              });
            });
            auxL.forEach(function (ciclo, index) {
              var auxdata = {};
              var auximpactos = [];
              auxdata['ciclo de vida'] = ciclo;
              var flagCiclo = true;

              _this43.fasesEliminadas.forEach(function (cicloEliminado) {
                if (ciclo === cicloEliminado) {
                  flagCiclo = false;
                }
              });

              if (flagCiclo) {
                _this43.outproyect_bar.forEach(function (element) {
                  Object.keys(element.Datos).forEach(function (impacto) {
                    var auxNombreImpacto = impacto.replace(/\n/g, '');
                    var resultado = element.Datos[impacto][ciclo];
                    var resultadoExponencial = resultado.toExponential(2);

                    if (!auximpactos.includes(auxNombreImpacto)) {
                      auximpactos.push(auxNombreImpacto);
                      auxdata[auxNombreImpacto] = resultadoExponencial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                      auxtotal[element.id][auxNombreImpacto] += resultado;
                    } else {
                      flagMasProyectos = true;
                      var last = auxdata[auxNombreImpacto].toString();
                      auxdata[auxNombreImpacto] = last.concat("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");
                      auxdata[auxNombreImpacto] = auxdata[auxNombreImpacto].concat(resultadoExponencial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                      auxtotal[element.id][auxNombreImpacto] += resultado;
                    }
                  });
                });

                auximpactos = [];
                aux = [].concat(_toConsumableArray(aux), [{
                  data: auxdata,
                  color: aux_color[index]
                }]);
              }

              if (ciclo === 'FinDeVida') {
                auxdata = {};
                Object.keys(auxtotal).forEach(function (element, indexproyectos) {
                  if (indexproyectos == 0) {
                    Object.keys(auxtotal[element]).forEach(function (impacto) {
                      var resultado = auxtotal[element][impacto];
                      var resultadoExponencial = resultado.toExponential(2);
                      auxdata[impacto] = resultadoExponencial;
                    });
                  } else {
                    Object.keys(auxtotal[element]).forEach(function (impacto) {
                      var resultado = auxtotal[element][impacto];
                      var resultadoExponencial = resultado.toExponential(2);
                      var last = auxdata[impacto].toString();
                      auxdata[impacto] = last.concat("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");
                      auxdata[impacto] = auxdata[impacto].concat(resultadoExponencial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                    });
                  }
                });
                auxdata['ciclo de vida'] = 'Total';
                aux = [].concat(_toConsumableArray(aux), [{
                  data: auxdata,
                  color: aux_color[index + 1]
                }]);
              }

              if (ciclo === 'FinDeVida' && flagMasProyectos == true) {
                auxdata = {};
                var numProyecto = 0;

                _this43.outproyect_bar.forEach(function (element) {
                  numProyecto = numProyecto + 1;
                  Object.keys(element.Datos).forEach(function (impacto) {
                    var auxNombreImpacto = impacto.replace(/\n/g, '');

                    if (!auximpactos.includes(auxNombreImpacto)) {
                      auximpactos.push(auxNombreImpacto);
                      auxdata[auxNombreImpacto] = numProyecto.toString();
                    } else {
                      var last = auxdata[auxNombreImpacto].toString();
                      auxdata[auxNombreImpacto] = last.concat("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");
                      auxdata[auxNombreImpacto] = auxdata[auxNombreImpacto].concat(numProyecto.toString());
                    }
                  });
                });

                aux = [{
                  data: auxdata,
                  color: aux_color[index + 1]
                }].concat(_toConsumableArray(aux));
              }
            });
            this.DatosTabla = aux;
            this.resultdosTabla = true;
            this.resultdosGraficos = false;
          } //regreso a gráfica

        }, {
          key: "GraficasResultados",
          value: function GraficasResultados() {
            this.botones_grafica_activos = false;
            this.resultdosTabla = false;
            this.resultdosGraficos = true;
            this.iniciaBarras();
          }
        }, {
          key: "ajusteUsoBaseDatos",
          value: function ajusteUsoBaseDatos(seleccion) {
            var _this44 = this;

            this.outproyect_bar = [];
            this.outproyect_pie = [];
            this.outproyect_radar = [];
            this.outproyect_bar_elementos = [];
            this.iconosElementosConstrucivos = {};
            this.outproyect_pie_bar_elementos = [];
            this.proyectosMostrados_elementos = [];
            this.estadoTercerSeccion = {};
            this.elementosConstructivosMostradosElementos = {};
            Object.keys(this.basesDatos).forEach(function (bd) {
              var flag = false;
              seleccion.forEach(function (bdSelect) {
                if (bdSelect === bd) {
                  flag = true;
                }
              });
              _this44.basesDatos[bd] = flag;
            });
            this.proyect_active.forEach(function (id) {
              var data = _this44.llamarCalculos(id);

              var analisis = _this44.getAnalisisBarras(id, data);

              var analisisRad = _this44.getAnalisisRadial(id, data);

              var analisisPie = _this44.getAnalisisPie(id, data);

              var analisisPieBarDos = _this44.getAnalisisPieBarSegunaSeccion(id);

              var analisisPieTres = _this44.getAnalisisElementos(id); //sección uno


              _this44.outproyect_bar.push(analisis);

              _this44.outproyect_radar.push(analisisRad);

              _this44.outproyect_pie.push(analisisPie); //sección dos


              var analisisBarDos = _this44.getAnalisisBarrasElementosConstructivos(id);

              _this44.outproyect_bar_elementos.push(analisisBarDos); //sección tres


              _this44.outproyect_pie_bar_elementos.push(analisisPieBarDos);

              _this44.proyectosMostrados_elementos = [].concat(_toConsumableArray(_this44.proyectosMostrados_elementos), [{
                idproyecto: id,
                nombre: analisis.Nombre,
                data: analisisPieTres
              }]);
              _this44.estadoTercerSeccion[id] = {
                'agruparProduccion': false,
                'cicloSeleccionado': " ",
                'flagPie': true,
                'fragBar': false
              };
            }); //Se reinicia la sección 1

            if (this.Impactos_ambientales) {
              if (this.resultdosGraficos) {
                this.containerGraficas.clear();
                this.receiveSelector(null);
                this.ID = ' ';
              }
            }

            if (this.resultdosGraficos) {
              this.iniciaBarras();
            } else {
              this.TablaResultados();
            } //se reinicia la sección 2


            if (this.Impactos_Elementos) {
              this.iniciaBarrasSeccionDos();

              if (this.imgSeleccionadaElemento != ' ') {
                this.DispercionAP(this.imgSeleccionadaElemento, ' ');
              }

              Object.keys(this.iconosElementosConstrucivos).forEach(function (element) {
                if (_this44.iconosElementosConstrucivos[element]['habilitado'] === false) {
                  document.getElementById(_this44.idsIconosElementos[element]['idTEXTO']).className = 'espacio-sin-selecciomar';
                }
              });
              this.catologoImpactoAmbiental.forEach(function (impacto) {
                var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                var elementosflag = document.getElementById(auxID);

                if (elementosflag != null) {
                  elementosflag.className = 'dot';
                }
              });
              this.graficabar(null);
            } //se reinicia la sección tres


            if (this.Elementos_constructivos) {
              this.iniciarSeccionTres();
            }
          } //termino de cambio de sección

        }, {
          key: "finShow",
          value: function finShow() {
            if (this.Impactos_ambientales) {
              var auxEtapas = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];

              if (this.ID === ' ') {
                auxEtapas.forEach(function (etapa) {
                  document.getElementById(etapa).className = 'boton-principal';
                });
              }

              if (this.selector == null) {
                this.catologoImpactoAmbiental.forEach(function (impacto) {
                  var auxID = impacto['id'].toString().concat('LineaImpactoCiclo');
                  var elementosflag = document.getElementById(auxID);

                  if (elementosflag != null) {
                    elementosflag.className = 'dot';
                  }
                });
                this.containerGraficas.clear();
              }
            }

            if (this.Impactos_Elementos) {
              // this.impactoSeleccionadoElementoConstructivo != ' ' &&
              //this.elementoContructivoSelecionado != ' '
              if (this.imgSeleccionadaElemento === ' ') {
                this.idsImgEdificios.forEach(function (img) {
                  document.getElementById(img).className = 'edificio-individual';
                });
              }

              if (this.impactoSeleccionadoElementoConstructivo === ' ') {
                //this.show_Dispercion = false;
                this.catologoImpactoAmbiental.forEach(function (impacto) {
                  var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                  var elementosflag = document.getElementById(auxID);

                  if (elementosflag != null) {
                    elementosflag.className = 'dot';
                  }
                });
                this.graficabar(null);
              }
            }
          } //controlar la activación de elementos en la interacción con los tipos de resultados

        }, {
          key: "show",
          value: function show($event) {
            if ($event == 0) {
              this.Impactos_ambientales = true;
              this.Impactos_Elementos = false;
              this.Elementos_constructivos = false;
              this.bandera_graph_bar = false;
              this.impacto_seleccionado = ' ';
            } else if ($event == 1) {
              this.Impactos_ambientales = false;
              this.Impactos_Elementos = true;
              this.Elementos_constructivos = false;
              this.bandera_graph_bar = true;
              this.iniciaBarrasSeccionDos();
              this.iniciarImgEdificio();
            } else {
              this.Impactos_ambientales = false;
              this.Impactos_Elementos = false;
              this.Elementos_constructivos = true;
              this.impacto_seleccionado = ' ';
              this.iniciarSeccionTres();
            }

            this.ResetTabs($event);
          }
        }, {
          key: "getAnalisisBarrasElementosConstructivos",
          value: function getAnalisisBarrasElementosConstructivos(idProyecto) {
            //Calculos y obtención de datos para crear correctamente las gráficas de barras
            var analisisProyectos = {
              Nombre: this.calculos.projectsList.filter(function (p) {
                return p['id'] == idProyecto;
              })[0]['name_project'],
              id: idProyecto,
              Datos: {}
            };
            var DatosCalculos = {
              TEList: this.TEList,
              projectsList: this.projectsList,
              materialList: this.materialList,
              materialSchemeDataList: this.materialSchemeDataList,
              materialSchemeProyectList: this.materialSchemeProyectList,
              potentialTypesList: this.potentialTypesList,
              standarsList: this.standarsList,
              CSEList: this.CSEList,
              SIDList: this.SIDList,
              SIList: this.SIList,
              ACRList: this.ACRList,
              ECDList: this.ECDList,
              TEDList: this.TEDList,
              ULList: this.ULList,
              ECDPList: this.ECDPList,
              sectionList: this.sectionList,
              PTList: this.PTList,
              conversionList: this.conversionList
            };
            var auxDatos = this.calculosSegunaSeccion.OperacionesDeFasePorElementoConstructivo(idProyecto, DatosCalculos, this.basesDatos);
            this.AjustarElementosMostrados(auxDatos); //console.log(this.iconosElementosConstrucivos)

            this.AjustarElementosMostradosElemntos(auxDatos);
            analisisProyectos['Datos'] = auxDatos;
            return analisisProyectos;
          }
        }, {
          key: "AjustarElementosMostrados",
          value: function AjustarElementosMostrados(auxDatos) {
            var _this45 = this;

            if (this.elementoContructivoSelecionado != ' ') {
              var elementoDom = document.getElementById('texto'.concat(this.elementoContructivoSelecionado));

              if (elementoDom != null) {
                elementoDom.className = 'espacio-sin-selecciomar';
              }
            }

            this.impactoSeleccionadoElementoConstructivo = ' ';
            this.impactoSeleccionadoElementoConstructivoGrafica = null;
            this.elementoContructivoSelecionado = ' ';

            if (Object.keys(this.iconosElementosConstrucivos).length == 0) {
              this.sectionList.forEach(function (element) {
                //Aqui falta de que en caso de que se otro proyecto y tenga más o menos elementos que no cause problemas y se activen o desactiven bien los botones
                var flag = false;
                var auxidelemento = element['id'];
                Object.keys(auxDatos).forEach(function (impacto) {
                  Object.keys(auxDatos[impacto]).forEach(function (idelemento) {
                    if (idelemento == auxidelemento.toString()) {
                      flag = true;
                    }
                  });
                });

                if (flag) {
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()] = {};
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()]['icono'] = 'visibility';
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()]['habilitado'] = false;
                } else {
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()] = {};
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()]['icono'] = 'visibility_off';
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()]['habilitado'] = true;
                }
              });
            }

            if (this.banderaAjusteElememtos) {
              this.sectionList.forEach(function (element) {
                //Aqui falta de que en caso de que se otro proyecto y tenga más o menos elementos que no cause problemas y se activen o desactiven bien los botones
                var flag = false;
                var auxidelemento = element['id'];

                var auximpacto = _this45.calculosSegunaSeccion.ajustarNombre(_this45.potentialTypesList[0]['name_complete_potential_type']);

                Object.keys(auxDatos[auximpacto]).forEach(function (idelemento) {
                  if (idelemento == auxidelemento.toString()) {
                    flag = true;
                  }
                });

                if (flag) {
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()] = {};
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()]['icono'] = 'visibility';
                  _this45.iconosElementosConstrucivos[auxidelemento.toString()]['habilitado'] = false;
                }
              });
            }
          }
        }, {
          key: "AjustarElementosMostradosElemntos",
          value: function AjustarElementosMostradosElemntos(auxDatos) {
            var _this46 = this;

            if (Object.keys(this.elementosConstructivosMostradosElementos).length == 0) {
              this.sectionList.forEach(function (element) {
                //Aqui falta de que en caso de que se otro proyecto y tenga más o menos elementos que no cause problemas y se activen o desactiven bien los botones
                var flag = false;
                var auxidelemento = element['id'];

                var auximpacto = _this46.calculosSegunaSeccion.ajustarNombre(_this46.potentialTypesList[0]['name_complete_potential_type']);

                Object.keys(auxDatos[auximpacto]).forEach(function (idelemento) {
                  if (idelemento == auxidelemento.toString()) {
                    flag = true;
                  }
                });

                if (flag) {
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()] = {};
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['nombre'] = element['name_section'];
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['habilitado'] = false;
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['check'] = true;
                } else {
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()] = {};
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['nombre'] = element['name_section'];
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['habilitado'] = true;
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['check'] = false;
                }
              });
            }

            if (this.banderaAjusteElememtos) {
              this.sectionList.forEach(function (element) {
                var flag = false;
                var auxidelemento = element['id'];

                var auximpacto = _this46.calculosSegunaSeccion.ajustarNombre(_this46.potentialTypesList[0]['name_complete_potential_type']);

                Object.keys(auxDatos[auximpacto]).forEach(function (idelemento) {
                  if (idelemento == auxidelemento.toString()) {
                    flag = true;
                  }
                });

                if (flag) {
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()] = {};
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['nombre'] = element['name_section'];
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['habilitado'] = false;
                  _this46.elementosConstructivosMostradosElementos[auxidelemento.toString()]['check'] = true;
                }
              });
            }
          } //Se cargan los proyetcos existentes y se configura el menu

        }, {
          key: "menu_inicio",
          value: function menu_inicio() {
            var _this47 = this;

            this.projectsList.forEach(function (proyecto) {
              if (proyecto['id'] == _this47.idProyectoActivo) {
                _this47.proyecto.nombre = proyecto['name_project'];
                _this47.proyecto.num_epic = _this47.calculos.materiales_EPIC;
                _this47.proyecto.num_epd = _this47.calculos.materiales_EPD;
                return;
              }

              _this47.proyect = [].concat(_toConsumableArray(_this47.proyect), [{
                Nombre: proyecto['name_project'],
                id: proyecto['id'],
                num_epic: 0,
                card: false,
                num_epd: 0
              }]);
            });
            this.iniciar_graficas(this.idProyectoActivo);
          } //activar gráfica de porcentaje

        }, {
          key: "porcentaje",
          value: function porcentaje(val, val2) {
            if (val == this.bandera_porcentaje) {
              return;
            }

            this.receiveSelector(null);
            this.bandera_porcentaje = val;
            this.ID = ' ';
            this.iniciaBarras();
            this.containerGraficas.clear();
            return;
          } //quitar proyecto a las gráficas

        }, {
          key: "quitarProyecto",
          value: function quitarProyecto(ID) {
            var _this48 = this;

            this.proyect.forEach(function (proyecto, index) {
              if (proyecto.id == ID) {
                _this48.proyect[index].card = false;
              }
            });
            this.proyect_active.forEach(function (element, index) {
              if (element === ID) {
                _this48.idsImgEdificios.splice(index, 1);
              }
            });
            this.proyect_active = this.proyect_active.filter(function (item) {
              return item != ID;
            });
            this.proyectosMostrados = this.proyectosMostrados.filter(function (_ref4) {
              var id = _ref4.id;
              return id != ID;
            });
            var nump = 1;
            this.proyect_active.forEach(function (element, index) {
              _this48.proyectosMostrados.forEach(function (pr, numproy) {
                if (pr.id == element) {
                  nump = nump + 1;
                  _this48.proyectosMostrados[numproy].num = nump;
                }
              });
            });
            this.proyectosMostrados_elementos = this.proyectosMostrados_elementos.filter(function (_ref5) {
              var idproyecto = _ref5.idproyecto;
              return idproyecto != ID;
            });
            this.outproyect_bar = this.outproyect_bar.filter(function (_ref6) {
              var id = _ref6.id;
              return id != ID;
            });
            this.outproyect_radar = this.outproyect_radar.filter(function (_ref7) {
              var id = _ref7.id;
              return id != ID;
            });
            this.outproyect_pie = this.outproyect_pie.filter(function (_ref8) {
              var id = _ref8.id;
              return id != ID;
            });
            this.outproyect_bar_elementos = this.outproyect_bar_elementos.filter(function (_ref9) {
              var id = _ref9.id;
              return id != ID;
            });
            this.iconosElementosConstrucivos = {};
            this.elementosConstructivosMostradosElementos = {};
            delete this.estadoTercerSeccion[ID];
            this.outproyect_bar_elementos.forEach(function (element, index) {
              if (index < 1) {
                _this48.banderaAjusteElememtos = false;
              } else {
                _this48.banderaAjusteElememtos = true;
              }

              _this48.AjustarElementosMostrados(element.Datos);

              _this48.AjustarElementosMostradosElemntos(element.Datos);
            });
            this.banderaAjusteElememtos = false;

            if (this.resultdosTabla) {
              this.TablaResultados();
            } else {
              this.iniciaBarras();
            }

            if (this.Impactos_ambientales) {
              this.containerGraficas.clear();
              this.receiveSelector(null);

              if (this.ID != ' ') {
                document.getElementById(this.ID).className = 'boton-principal';
              }
            }

            this.ID = ' ';
            this.selector = null;

            if (this.Impactos_Elementos) {
              this.iniciaBarrasSeccionDos();

              if (this.imgSeleccionadaElemento != ' ') {
                this.DispercionAP(this.imgSeleccionadaElemento, ' ');
              }

              if (this.elementoContructivoSelecionado != ' ') {
                document.getElementById('texto'.concat(this.elementoContructivoSelecionado)).className = 'espacio-sin-selecciomar';
              }

              this.catologoImpactoAmbiental.forEach(function (impacto) {
                var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                var elementosflag = document.getElementById(auxID);

                if (elementosflag != null) {
                  elementosflag.className = 'dot';
                }
              });
              this.graficabar(null);
            }

            this.elementoContructivoSelecionado = ' ';
            this.imgSeleccionadaElemento = ' ';

            if (this.Elementos_constructivos) {
              this.iniciarSeccionTres();
            }

            Object.keys(this.estadoTercerSeccion).forEach(function (pr) {
              _this48.estadoTercerSeccion[pr] = {
                'agruparProduccion': false,
                'cicloSeleccionado': " ",
                'flagPie': true,
                'fragBar': false
              };
            });
          } //interacción con la gráfca de bar

        }, {
          key: "receiveSelector",
          value: function receiveSelector($event) {
            //cordinate with bar graph
            var aux;

            if (Array.isArray($event)) {
              var sl;
              $event.forEach(function (element, index) {
                if (index == 0) {
                  sl = element;
                } else {
                  sl = sl.concat(' ', element);
                }
              });
              aux = sl;
            } else {
              aux = $event;
            }

            this.showVar_1 = false;
            this.showVar = false;
            this.selector = aux;

            if ($event == null) {
              this.bandera = 0;
              this.hover = true;

              if (this.ID != ' ') {
                var IDDom = document.getElementById(this.ID);

                if (IDDom != null) {
                  IDDom.className = 'boton-principal';
                }

                this.ID = ' ';
              }

              this.catologoImpactoAmbiental.forEach(function (impacto) {
                var auxID = impacto['id'].toString().concat('LineaImpactoCiclo');
                var elementosflag = document.getElementById(auxID);

                if (elementosflag != null) {
                  elementosflag.className = 'dot';
                }
              });
            } else {
              this.bandera = 1;
              this.hover = false;

              if (this.ID != ' ') {
                document.getElementById(this.ID).className = 'boton-principal';
              }

              this.catologoImpactoAmbiental.forEach(function (impacto) {
                var auxnameI = impacto['name_complete_potential_type'].replace(/\s/g, '');
                var auxnameIS = aux.replace(/\s/g, '');

                if (auxnameIS === auxnameI) {
                  var auxID = impacto['id'].toString().concat('LineaImpactoCiclo');
                  document.getElementById(auxID).className = 'linea-select';
                } else {
                  var _auxID = impacto['id'].toString().concat('LineaImpactoCiclo');

                  document.getElementById(_auxID).className = 'dot';
                }
              }); //catologoImpactoAmbiental

              this.ID = ' ';
            }

            this.containerGraficas.clear();
          } //Despliegue gráficas de pie o radar

        }, {
          key: "grafica",
          value: function grafica(x) {
            //activate graph selectioned
            if (this.ID != ' ') {
              //console.log('in');
              document.getElementById(this.ID).className = 'boton-principal';
            }

            if (this.resultdosGraficos) {
              this.containerGraficas.clear();
              this.bandera_resultado = 2;

              if (this.banderaGrapg == 0) {
                this.banderaGrapg++;
                this.ID = ' ';
              }

              if (x === this.ID) {
                if (this.bandera == 1) {
                  this.showVar = false;
                } else {
                  this.showVar_1 = false;
                  this.hover = true;
                  this.bandera_serie_Seleccionada = false;
                }

                this.banderaGrapg = 0;
                this.ID = ' ';
                this.containerGraficas.clear();
              } else {
                this.ID = x;

                if (this.bandera == 1) {
                  this.showVar = true;
                  this.showVar_1 = false;
                  this.iniciaPie();
                } else {
                  this.showVar_1 = true;
                  this.showVar = false;
                  this.hover = false;
                  this.serie_Seleccionada = x;
                  this.iniciaRadiales();
                }
              }

              if (this.ID != ' ') {
                var boton = document.getElementById(this.ID);
                boton.className = 'boton-select';
              }
            }
          } //despliegue gráfica de pie para sección de resultados

        }, {
          key: "selectImpactoAmbiental",
          value: function selectImpactoAmbiental() {
            this.impactoAmbientalSeleccionado = this.calculos.ajustarNombre(this.selectedValue);
            this.iniciarSeccionTres();
          }
        }, {
          key: "selectEtapa",
          value: function selectEtapa(etapa) {
            var _this49 = this;

            var flag = true;
            this.ciclosDeVidaIgnoradasElementos.forEach(function (etapaEliminada) {
              if (etapaEliminada === etapa) flag = false;
            });

            if (flag) {
              var color = {
                Producción: '#4DBE89',
                Construccion: '#0DADBA',
                Uso: '#8F5091',
                FinDeVida: '#DEA961'
              };
              var auxResultado = ' ';

              if (this.cicloVidaSeleccionadoElemento === ' ') {
                this.cicloVidaSeleccionadoElemento = etapa;
                auxResultado = etapa;
                document.getElementById(etapa.concat('TextoElemento')).className = 'button-info-select';
                Object.keys(color).forEach(function (element) {
                  if (element === etapa) {
                    document.getElementById(etapa.concat('TextoElemento')).style.borderColor = color[element];
                  }
                });
              } else {
                if (this.cicloVidaSeleccionadoElemento != etapa) {
                  document.getElementById(etapa.concat('TextoElemento')).className = 'button-info-select';
                  Object.keys(color).forEach(function (element) {
                    if (element === etapa) {
                      document.getElementById(etapa.concat('TextoElemento')).style.borderColor = color[element];
                    }
                  });
                  document.getElementById(this.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
                  this.cicloVidaSeleccionadoElemento = etapa;
                  auxResultado = etapa;
                } else {
                  document.getElementById(this.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
                  this.cicloVidaSeleccionadoElemento = ' ';
                  auxResultado = ' ';
                }
              }

              Object.keys(this.estadoTercerSeccion).forEach(function (idP) {
                _this49.estadoTercerSeccion[idP]['cicloSeleccionado'] = auxResultado;
              });
              this.iniciarSeccionTres();
            }
          }
        }, {
          key: "eliminarEtapa",
          value: function eliminarEtapa(etapa) {
            var _this50 = this;

            if (this.ciclosDeVidaIgnoradasElementos.includes(etapa)) {
              this.ciclosDeVidaIgnoradasElementos.forEach(function (element, index) {
                if (element === etapa) {
                  _this50.iconosCambioElementos[etapa] = 'visibility';

                  _this50.ciclosDeVidaIgnoradasElementos.splice(index, 1);
                }
              });
            } else {
              this.iconosCambioElementos[etapa] = 'visibility_off';
              this.ciclosDeVidaIgnoradasElementos.push(etapa);

              if (this.cicloVidaSeleccionadoElemento === etapa) {
                document.getElementById(this.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
                this.cicloVidaSeleccionadoElemento = ' ';
              }

              var auxBotonesEtapa = {
                A1: 'Producción',
                A2: 'Producción',
                A3: 'Producción',
                A4: 'Construccion',
                B4: 'Uso'
              };
              Object.keys(this.estadoTercerSeccion).forEach(function (idP) {
                if (_this50.estadoTercerSeccion[idP]['cicloSeleccionado'] === etapa) {
                  _this50.estadoTercerSeccion[idP]['cicloSeleccionado'] = ' ';
                } else if (_this50.estadoTercerSeccion[idP]['cicloSeleccionado'] === auxBotonesEtapa[etapa]) {
                  _this50.estadoTercerSeccion[idP]['cicloSeleccionado'] = ' ';
                }
              });
            }

            this.iniciarSeccionTres();
          }
        }, {
          key: "elementoSeleccionadoElementos",
          value: function elementoSeleccionadoElementos(recive) {
            var _this51 = this;

            if (this.elementosContructivosEliminadosElementos.includes(recive.toString())) {
              this.elementosContructivosEliminadosElementos.forEach(function (element, index) {
                if (element == recive.toString()) {
                  _this51.elementosContructivosEliminadosElementos.splice(index, 1);
                }
              });
            } else {
              this.elementosContructivosEliminadosElementos.push(recive.toString());
            }

            this.iniciarSeccionTres();
          } //resetear secciones

        }, {
          key: "ResetTabs",
          value: function ResetTabs(value) {
            var _this52 = this;

            if (value == 2) {
              this.outproyect_bar_elementos.forEach(function (element, index) {
                if (index < 1) {
                  _this52.banderaAjusteElememtos = false;
                } else {
                  _this52.banderaAjusteElememtos = true;
                }

                _this52.AjustarElementosMostradosElemntos(element.Datos);
              });
              this.banderaAjusteElememtos = false;
            }
          } //cambio entre grafica pie y bar en sección elementos contructivos

        }, {
          key: "change_graph",
          value: function change_graph(value, IDproyect) {
            this.proyectosMostrados_elementos.forEach(function (element) {
              if (element.idproyecto == IDproyect) {
                element.showciclo = false;
                element.showcimenta = false;
                element.ciclo = ' ';
                element.elemento = ' '; //activar pie

                if (value == 1) {
                  element.showbar = false;
                  element.showpie = true;
                } else {
                  //activar bar
                  element.showbar = true;
                  element.showpie = false;
                }
              }
            });
          } //configuración de la sección dispersión del en fase de ciclo de vida

        }, {
          key: "configurarDatos",
          value: function configurarDatos($event, IDproyect) {
            var _this53 = this;

            var auxdatos = $event;
            this.proyectosMostrados_elementos.forEach(function (element) {
              if (element.idproyecto == IDproyect) {
                element.showcimenta = false;
                element.showciclo = auxdatos.show;
                element.ciclo = auxdatos.etapa;

                if (element.showciclo) {
                  _this53.childPie.forEach(function (c) {
                    return c.cambioID(element.ciclo, IDproyect);
                  });
                }
              }
            });
          }
        }, {
          key: "recepcionAP",
          value: function recepcionAP($event) {
            this.DispercionAP($event[0], $event[1]);
          }
        }, {
          key: "DispercionAP",
          value: function DispercionAP(item, proyectoID) {
            var _this54 = this;

            var flagMostrarInfo = false;

            if (item != null) {
              if (this.impactoSeleccionadoElementoConstructivo != ' ' && this.elementoContructivoSelecionado != ' ') {
                if (this.imgSeleccionadaElemento === ' ') {
                  this.show_Dispercion = true;
                  this.imgSeleccionadaElemento = item;
                  this.idProyectoSeleccionadoImagen = proyectoID;
                  document.getElementById(item).className = 'edificio-individual-seleccionado';
                  flagMostrarInfo = true;
                  this.proyectosMostrados_elementos.forEach(function (element) {
                    if (element.idproyecto == proyectoID) {
                      _this54.nombreProyectoElegidoSeleccionadoElementos = element.nombre;
                    }
                  });
                  var elemento = this.sectionList.filter(function (_ref10) {
                    var id = _ref10.id;
                    return id == Number(_this54.elementoContructivoSelecionado);
                  });
                  this.elementoSeleccionadoMostrado = elemento[0]['name_section'];
                } else {
                  if (item != this.imgSeleccionadaElemento) {
                    document.getElementById(this.imgSeleccionadaElemento).className = 'edificio-individual';
                    document.getElementById(item).className = 'edificio-individual-seleccionado';
                    this.imgSeleccionadaElemento = item.toString();
                    this.idProyectoSeleccionadoImagen = proyectoID;
                    flagMostrarInfo = true;
                    this.proyectosMostrados_elementos.forEach(function (element) {
                      if (element.idproyecto == proyectoID) {
                        _this54.nombreProyectoElegidoSeleccionadoElementos = element.nombre;
                      }
                    });

                    var _elemento = this.sectionList.filter(function (_ref11) {
                      var id = _ref11.id;
                      return id == Number(_this54.elementoContructivoSelecionado);
                    });

                    this.elementoSeleccionadoMostrado = _elemento[0]['name_section'];
                  } else {
                    this.show_Dispercion = false;
                    document.getElementById(item).className = 'edificio-individual';
                    this.nombreProyectoElegidoSeleccionadoElementos = ' ';
                    this.imgSeleccionadaElemento = ' ';
                    this.idProyectoSeleccionadoImagen = ' ';
                    this.banderaTipoGraficaDispercion = true;
                  }
                }
              }
            } else {
              flagMostrarInfo = true;
            }

            if (flagMostrarInfo) {
              this.iniciarTabaDispercion();

              if (this.containerGraficasDos != undefined) {
                this.iniciarGraficaEspecificaDispercion();
              }
            }
          }
        }, {
          key: "findUnidad",
          value: function findUnidad(indicador) {
            var final_unit;
            var impacto = indicador.replace(/\n/g, '');
            impacto = impacto.replace(/\s/g, '');
            this.potentialTypesList.forEach(function (element) {
              var aux_element = element['name_complete_potential_type'].replace(/\s/g, '');

              if (impacto === aux_element) {
                final_unit = element['unit_potential_type'];
              }
            });

            if (indicador != undefined) {}

            return final_unit;
          }
        }, {
          key: "iniciarTabaDispercion",
          value: function iniciarTabaDispercion() {
            var _this55 = this;

            this.infoTablaDispercion = []; //'color-'no', 'material', 'porcentaje', 'numero'
            //console.log(this.outproyect_pie_bar_elementos)

            this.outproyect_pie_bar_elementos.forEach(function (element) {
              if (element['id'] == _this55.idProyectoSeleccionadoImagen) {
                var auxhelp = [];
                var suma = 0;
                var auxdatos = [];
                Object.keys(element.Datos).forEach(function (impacto) {
                  var auxNombre = _this55.calculosSegunaSeccion.ajustarNombre(_this55.impactoSeleccionadoElementoConstructivo);

                  if (impacto === auxNombre) {
                    Object.keys(element.Datos[impacto]).forEach(function (elementoC) {
                      if (elementoC == _this55.elementoContructivoSelecionado) {
                        //Ordear de mayor a menor
                        Object.keys(element.Datos[impacto][elementoC]).forEach(function (material, index) {
                          suma += element.Datos[impacto][elementoC][material];
                          auxhelp = [].concat(_toConsumableArray(auxhelp), [element.Datos[impacto][elementoC][material]]);
                        });
                        auxdatos = auxhelp.sort(function (n1, n2) {
                          if (n1 > n2) {
                            return 1;
                          }

                          if (n1 < n2) {
                            return -1;
                          }

                          return 0;
                        });
                      }
                    });
                  }
                });
                auxdatos = auxdatos.reverse();
                var num = 0;
                var auxColor = {
                  '#5A1002': 'rgb(90,16,2)',
                  '#902511': 'rgb(144,37,17)',
                  '#BE3218': 'rgb(190,50,24)',
                  '#EB3F20': 'rgb(235,63,32)',
                  '#EB5720': 'rgb(235,87,32)',
                  '#EB7620': 'rgb(235,118,32)',
                  '#EB9520': 'rgb(235,149,32)',
                  '#EBC420': 'rgb(235,196,32)',
                  '#EBDB20': 'rgb(235,219,32)',
                  '#CCEB20': 'rgb(204,235,32)',
                  '#76EB20': 'rgb(118,235,32)'
                };

                if (auxdatos.length == 0) {
                  _this55.flagMaterialesDispercion = false;
                  _this55.flagSinMaterialesDispercion = true;
                } else {
                  var colorhelp = auxColor[_this55.colorGraficaDispercion].match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);

                  var cambioR = colorhelp[1];
                  var cambioG = colorhelp[2];
                  var cambioB = colorhelp[3];
                  auxdatos.forEach(function (lugar, ii) {
                    Object.keys(element.Datos).forEach(function (impacto) {
                      var auxNombre = _this55.calculosSegunaSeccion.ajustarNombre(_this55.impactoSeleccionadoElementoConstructivo);

                      if (impacto === auxNombre) {
                        _this55.unidadImpactoAmientalTabla = impacto;
                        Object.keys(element.Datos[impacto]).forEach(function (elementoC) {
                          if (elementoC == _this55.elementoContructivoSelecionado) {
                            Object.keys(element.Datos[impacto][elementoC]).forEach(function (material, index) {
                              var aux = {};

                              if (lugar == element.Datos[impacto][elementoC][material]) {
                                //Sección para determinar el color en la tabla con relación a la gráfica
                                var auxrgbcolor = 'rgb(';

                                if (ii <= 2) {
                                  auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');

                                  if (255 - cambioR >= 40) {
                                    cambioR = (Number(cambioR) + 40).toString();
                                  } else if (cambioG - 40 >= 0) {
                                    cambioG = (Number(cambioG) - 40).toString();
                                  } else {
                                    cambioB = (Number(cambioB) + 40).toString();
                                  }
                                } else {
                                  auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(colorhelp[2]).concat(',').concat(colorhelp[3]).concat(')');
                                }

                                aux['color'] = auxrgbcolor;

                                var helpMaterial = _this55.materiales.filter(function (_ref12) {
                                  var id = _ref12.id;
                                  return id == material;
                                });

                                num = num + 1;
                                aux['no'] = num;
                                aux['material'] = helpMaterial[0]['name_material'];
                                aux['porcentaje'] = (element.Datos[impacto][elementoC][material] / suma * 100).toFixed(2);
                                aux['numero'] = element.Datos[impacto][elementoC][material].toExponential(2);

                                _this55.infoTablaDispercion.push(aux);
                              }
                            });
                          }
                        });
                      }
                    });
                  });
                  _this55.flagMaterialesDispercion = true;
                  _this55.flagSinMaterialesDispercion = false;
                }
              }
            });

            if (this.flagMaterialesDispercion) {
              this.unidadImpactoAmientalTabla = this.findUnidad(this.unidadImpactoAmientalTabla);
            }
          }
        }, {
          key: "iniciarGraficaEspecificaDispercion",
          value: function iniciarGraficaEspecificaDispercion() {
            var _this56 = this;

            //true = pie ; false = barras
            var auxDatos;
            var aux = {};
            this.outproyect_pie_bar_elementos.forEach(function (element) {
              if (element['id'] == _this56.idProyectoSeleccionadoImagen) {
                Object.keys(element.Datos).forEach(function (impacto) {
                  var auxNombre = _this56.calculosSegunaSeccion.ajustarNombre(_this56.impactoSeleccionadoElementoConstructivo);

                  if (impacto === auxNombre) {
                    Object.keys(element.Datos[impacto]).forEach(function (elementoC) {
                      if (elementoC == _this56.elementoContructivoSelecionado) {
                        Object.keys(element.Datos[impacto][elementoC]).forEach(function (material, index) {
                          aux[material] = element.Datos[impacto][elementoC][material];
                        });
                      }
                    });
                  }
                });
              }
            });
            this.asignarColorGraficaDispercion();

            if (this.banderaTipoGraficaDispercion) {
              this.containerGraficasDos.clear();
              var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.pieChart);
              var grafica = this.containerGraficasDos.createComponent(componentFactory);
              grafica.instance.inputProyect = aux;
              grafica.instance.showMePartially = this.showVar;
              grafica.instance.indicador = this.selector;
              grafica.instance.id = this.ID;
              grafica.instance.Bandera_resultado = 1;
              grafica.instance.unidades = this.potentialTypesList;
              grafica.instance.colorDispercion = this.colorGraficaDispercion;
            } else {
              this.containerGraficasDos.clear();

              var _componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartSimpleComponent);

              var _grafica = this.containerGraficasDos.createComponent(_componentFactory);

              _grafica.instance.banderaDispercion = true;
              _grafica.instance.info = aux;
              _grafica.instance.showGr = false;
              _grafica.instance.showlastGr = true;
              _grafica.instance.colorDispercion = this.colorGraficaDispercion;
            }
          }
        }, {
          key: "cambioDeTipoGraficaDispercion",
          value: function cambioDeTipoGraficaDispercion(bandera) {
            this.banderaTipoGraficaDispercion = bandera;
            this.DispercionAP(null, this.idProyectoSeleccionadoImagen);
          } //configuración de la sección dispersión del impacto en cimentación

        }, {
          key: "configurarData",
          value: function configurarData($event, IDproyect) {
            var _this57 = this;

            var auxdatos = $event;
            this.proyectosMostrados_elementos.forEach(function (element) {
              if (element.idproyecto == IDproyect) {
                element.showcimenta = auxdatos.show;
                element.elemento = auxdatos.etapa;

                if (element.showcimenta) {
                  _this57.childBarSimple.forEach(function (c) {
                    return c.CargarDatos(element.elemento, element.ciclo);
                  });
                }
              }
            });
          }
        }, {
          key: "receiveSelectorDos",
          value: function receiveSelectorDos($event) {
            //cordinate with bar graph
            var aux = ' ';
            this.impactoSeleccionadoElementoConstructivoGrafica = $event['selec'];

            if ($event['seleccion'] != null) {
              if (Array.isArray($event['seleccion'])) {
                var sl;
                $event['seleccion'].forEach(function (element, index) {
                  if (index == 0) {
                    sl = element;
                  } else {
                    sl = sl.concat('', element);
                  }
                });
                aux = sl;
              } else {
                aux = $event['seleccion'];
              }

              this.catologoImpactoAmbiental.forEach(function (impacto) {
                var auxnameI = impacto['name_complete_potential_type'].replace(/\s/g, '');
                var auxnameIS = aux.replace(/\s/g, '');

                if (auxnameIS === auxnameI) {
                  var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                  document.getElementById(auxID).className = 'linea-select';
                } else {
                  var _auxID2 = impacto['id'].toString().concat('LineaImpactoElememtos');

                  document.getElementById(_auxID2).className = 'dot';
                }
              });
              var auxnombre = this.calculos.ajustarNombre(aux);
              this.elementosConstructivosMostradosElementosPorProyecto = $event['nivelesProyectos'];
              this.nivelesExistententesElementosConstructivos = $event['niveles'][auxnombre];
              this.coloresExistententesElementosConstructivos = $event['color'];
              this.graficabar(aux);
              this.asignarColorGraficaDispercion();
            } else {
              this.catologoImpactoAmbiental.forEach(function (impacto) {
                var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                var elementosflag = document.getElementById(auxID);

                if (elementosflag != null) {
                  elementosflag.className = 'dot';
                }
              });
              this.graficabar(null);
            }
          }
        }, {
          key: "asignarColorGraficaDispercion",
          value: function asignarColorGraficaDispercion() {
            var _this58 = this;

            if (this.impactoSeleccionadoElementoConstructivo != ' ') {
              if (this.elementoContructivoSelecionado != ' ') {
                this.nivelesExistententesElementosConstructivos.forEach(function (element, index) {
                  if (element == Number(_this58.elementoContructivoSelecionado)) {
                    _this58.colorGraficaDispercion = _this58.coloresExistententesElementosConstructivos[index];
                  }
                });
              }
            }
          }
        }, {
          key: "graficabar",
          value: function graficabar(item) {
            var _this59 = this;

            if (Number.isInteger(item)) {
              //En caso de oprimir un elemento constructivo
              if (this.elementoContructivoSelecionado === ' ') {
                this.elementoContructivoSelecionado = item.toString();

                if (this.impactoSeleccionadoElementoConstructivo === ' ') {
                  //Opción sin seleccionar ningún impacto ambiental se selecciona un elemento;
                  document.getElementById('texto'.concat(item.toString())).className = 'espacio-seleccionado';
                  this.iniciaBarrasSeccionDos();
                } else {
                  //Opción con un impacto elemento seleccionado y todos los botones prendidos
                  Object.keys(this.iconosElementosConstrucivos).forEach(function (element) {
                    if (_this59.iconosElementosConstrucivos[element]['habilitado'] === false) {
                      if (element === item.toString()) {
                        document.getElementById(_this59.idsIconosElementos[element]['idTEXTO']).className = 'espacio-seleccionado';
                      } else {
                        document.getElementById(_this59.idsIconosElementos[element]['idTEXTO']).className = 'espacio-sin-selecciomar';
                      }
                    }
                  }); //Actualizar grafica para que se ilumen el elemento solo del impacto seleccionado

                  this.iniciaBarrasSeccionDos();

                  if (this.imgSeleccionadaElemento != ' ') {
                    this.show_Dispercion = true;
                  }
                }
              } else {
                //En caso de tener un elemento constructivo ya seleccionado
                if (item != this.elementoContructivoSelecionado) {
                  //Cambio de elemento seleccionado
                  document.getElementById('texto'.concat(this.elementoContructivoSelecionado)).className = 'espacio-sin-selecciomar';
                  document.getElementById('texto'.concat(item.toString())).className = 'espacio-seleccionado';
                  this.elementoContructivoSelecionado = item.toString();
                  this.iniciaBarrasSeccionDos();
                } else {
                  //quitar la selección del elemento constructivo
                  document.getElementById('texto'.concat(item.toString())).className = 'espacio-sin-selecciomar';
                  this.elementoContructivoSelecionado = ' ';
                  this.impactoSeleccionadoElementoConstructivo = ' ';
                  this.impactoSeleccionadoElementoConstructivoGrafica = null;
                  this.catologoImpactoAmbiental.forEach(function (impacto) {
                    var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                    var elementosflag = document.getElementById(auxID);

                    if (elementosflag != null) {
                      elementosflag.className = 'dot';
                    }
                  });
                  this.iniciaBarrasSeccionDos();

                  if (this.imgSeleccionadaElemento != ' ') {
                    //Quitar la selección dela imagen seleccionado y que se desactiven las graficas de las potencias de impactos
                    document.getElementById(this.imgSeleccionadaElemento).className = 'img-edificio';
                    this.imgSeleccionadaElemento = ' ';
                    this.show_Dispercion = false;
                  }
                }
              }
            } else {
              //cuando se presiona un impacto ambiental
              if (item === null) {
                //Se elimina la selección del impacto ambiental
                this.impactoSeleccionadoElementoConstructivo = ' ';
                this.impactoSeleccionadoElementoConstructivoGrafica = null;
                Object.keys(this.iconosElementosConstrucivos).forEach(function (element) {
                  if (_this59.iconosElementosConstrucivos[element]['habilitado'] === false) {
                    document.getElementById(_this59.idsIconosElementos[element]['idTEXTO']).className = 'espacio-sin-selecciomar';
                  }
                });
                this.elementoContructivoSelecionado = ' ';

                if (this.imgSeleccionadaElemento != ' ') {
                  //Quitar la selección dela imagen seleccionado y que se desactiven las graficas de las potencias de impactos
                  document.getElementById(this.imgSeleccionadaElemento).className = 'img-edificio';
                  this.imgSeleccionadaElemento = ' ';
                }

                this.show_Dispercion = false;
                this.catologoImpactoAmbiental.forEach(function (impacto) {
                  var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
                  var elementosflag = document.getElementById(auxID);

                  if (elementosflag != null) {
                    elementosflag.className = 'dot';
                  }
                });
              } else {
                //seleccionar un impacto ambiental
                if (this.impactoSeleccionadoElementoConstructivo === ' ') {
                  this.impactoSeleccionadoElementoConstructivo = item;

                  if (this.elementoContructivoSelecionado === ' ') {
                    //Opción sin seleccionar ningún elemento constructivo se seleccionan todos los elementos;
                    Object.keys(this.iconosElementosConstrucivos).forEach(function (element) {
                      if (_this59.iconosElementosConstrucivos[element]['habilitado'] === false) {
                        document.getElementById(_this59.idsIconosElementos[element]['idTEXTO']).className = 'espacio-seleccionado';
                      }
                    });
                  } else {
                    //recetear el impacto constructivo seleccionado
                    if (this.imgSeleccionadaElemento != ' ') {
                      this.show_Dispercion = true;
                    }
                  }
                } else {
                  //cambio de selección en el impacto ambiental
                  this.impactoSeleccionadoElementoConstructivo = item;

                  if (this.elementoContructivoSelecionado != ' ') {
                    this.asignarColorGraficaDispercion();

                    if (this.imgSeleccionadaElemento != ' ') {
                      this.show_Dispercion = true;
                    }
                  }
                }
              }
            }

            if (this.show_Dispercion) {
              var elemento = this.sectionList.filter(function (_ref13) {
                var id = _ref13.id;
                return id == Number(_this59.elementoContructivoSelecionado);
              });
              this.elementoSeleccionadoMostrado = elemento[0]['name_section'];
              this.DispercionAP(null, this.idProyectoSeleccionadoImagen);
            }

            this.iniciarImgEdificio();
          }
        }, {
          key: "AjusteGraficaElementosContructivos",
          value: function AjusteGraficaElementosContructivos(item) {
            var _this60 = this;

            if (this.elementosContructivosEliminados.includes(item.toString())) {
              this.elementosContructivosEliminados.forEach(function (element, index) {
                if (element == item.toString()) {
                  _this60.elementosContructivosEliminados.splice(index, 1);

                  document.getElementById('ojo'.concat(item.toString())).className = 'button-icono';
                  _this60.iconosElementosConstrucivos[item.toString()]['icono'] = 'visibility';
                }
              });
            } else {
              this.iconosElementosConstrucivos[item.toString()]['icono'] = 'visibility_off';
              document.getElementById('ojo'.concat(item.toString())).className = 'button-icono-seleccionado';
              this.elementosContructivosEliminados.push(item.toString());
            }

            this.outproyect_bar_elementos = [];
            this.proyect_active.forEach(function (element) {
              var analisis = _this60.getAnalisisBarrasElementosConstructivos(element);

              _this60.outproyect_bar_elementos.push(analisis);
            });
            this.elementosContructivosEliminados.forEach(function (value) {
              _this60.outproyect_bar_elementos.forEach(function (proyecto, index) {
                var indicadores = Object.keys(proyecto.Datos);
                indicadores.forEach(function (element) {
                  delete _this60.outproyect_bar_elementos[index].Datos[element][value];
                });
              });
            });
            this.iniciaBarrasSeccionDos();

            if (this.imgSeleccionadaElemento != ' ') {
              this.DispercionAP(this.imgSeleccionadaElemento, ' ');
            }

            Object.keys(this.iconosElementosConstrucivos).forEach(function (element) {
              if (_this60.iconosElementosConstrucivos[element]['habilitado'] === false) {
                document.getElementById(_this60.idsIconosElementos[element]['idTEXTO']).className = 'espacio-sin-selecciomar';
              }
            });
            this.catologoImpactoAmbiental.forEach(function (impacto) {
              var auxID = impacto['id'].toString().concat('LineaImpactoElememtos');
              var elementosflag = document.getElementById(auxID);

              if (elementosflag != null) {
                elementosflag.className = 'dot';
              }
            });
            this.graficabar(null);
          }
        }, {
          key: "llenarIdsBotones",
          value: function llenarIdsBotones(elementos) {
            var _this61 = this;

            elementos.forEach(function (element) {
              _this61.idsIconosElementos[element.id.toString()] = {};
              _this61.idsIconosElementos[element.id.toString()]['idOJO'] = 'ojo'.concat(element.id.toString());
              _this61.idsIconosElementos[element.id.toString()]['idTEXTO'] = 'texto'.concat(element.id.toString());
            });
            this.cargaElementos = true;
          }
        }, {
          key: "cambioEstadoTercerSecci\xF3n",
          value: function cambioEstadoTercerSección(cambio) {
            var _this62 = this;

            Object.keys(this.estadoTercerSeccion).forEach(function (idP) {
              if (cambio['idProyecto'].toString() === idP) {
                if (cambio['cambioEn'] === 'CicloVida') {
                  if (_this62.cicloVidaSeleccionadoElemento != ' ') {
                    document.getElementById(_this62.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
                    _this62.cicloVidaSeleccionadoElemento = ' ';
                  }

                  _this62.estadoTercerSeccion[idP]['cicloSeleccionado'] = cambio['cambio'];
                } else if (cambio['cambioEn'] === 'CambioGrafica') {
                  //'flagPie':true,
                  //'fragBar':false
                  _this62.estadoTercerSeccion[idP]['flagPie'] = cambio['cambio'].pie;
                  _this62.estadoTercerSeccion[idP]['fragBar'] = cambio['cambio'].bar;
                } else {
                  _this62.estadoTercerSeccion[idP]['agruparProduccion'] = cambio['cambio'];
                }
              }
            });
          }
        }]);

        return CompararComponent;
      }();
      /***/

    },

    /***/
    "k7d8":
    /*!**************************************************!*\
      !*** ./src/app/bar-chart/bar-chart.component.ts ***!
      \**************************************************/

    /*! exports provided: BarChartComponent */

    /***/
    function k7d8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
        return BarChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chartjs-plugin-datalabels */
      "qb46");
      /* harmony import */


      var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);

      var BarChartComponent = /*#__PURE__*/function () {
        function BarChartComponent() {
          _classCallCheck(this, BarChartComponent);

          this.colores = {
            FinDeVida: '#DEA961',
            Uso: '#8F5091',
            Construccion: '#148A93',
            Producción: '#4DBE89'
          };
          this.coloresBWGraph2Nuevo = ['rgb(90, 16, 2,0.5)', 'rgb(144, 37, 17,0.5)', 'rgb(190, 50, 24,0.5)', 'rgb(235, 63, 32,0.5)', 'rgb(235, 87, 32,0.5)', 'rgb(235, 118, 32,0.5)', 'rgb(235, 173, 32,0.5)', 'rgb(235, 196, 32,0.5)', 'rgb(235, 219, 32,0.5)', 'rgb(204, 235, 32,0.5)', 'rgb(118, 235, 32,0.5)'];
          this.coloresGraph2Nuevo = ['#5A1002', '#902511', '#BE3218', '#EB3F20', '#EB5720', '#EB7620', '#EB9520', '#EBC420', '#EBDB20', '#CCEB20', '#76EB20'];
          this.coloresBW = {
            Producción: '#B1B1B1',
            Construccion: '#6A6A6A',
            Uso: '#686868',
            FinDeVida: '#969696'
          };
          this.auxColor = [];
          this.auxColorBW = [];
          this.ElementosEnNiveles = [];
          this.banderaImpacto = false;
          this.lastClick = 'Ninguno';
          this.hovered = null;
          this.centrosX = {};
          this.proyectos = [];
          this.auxElementos = {};
          this.auxElemntosData = {};
          this.lastClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.maxValue = 0;
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
            events: ['touchstart', 'mousemove', 'click'],
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
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__, {
            afterDraw: this.agregaTitulosProyectos.bind(this),
            beforeInit: function beforeInit(chart) {
              chart.data.labels.forEach(function (e, i, a) {
                if (/\n/.test(e)) {
                  a[i] = e.split(/\n/);
                }
              });
            }
          }];
        }

        _createClass(BarChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.iniciaIndicadores();
            this.iniciaDatos();
            this.ajustaEjeY();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this63 = this;

            // Ya que se inicializa el componente
            this.canvas = this.chartDir.chart.canvas;
            this.canvas.addEventListener('mousemove', function (e) {
              _this63.onHover(e);
            });
            this.canvas.addEventListener('mousedown', function (e) {
              _this63.onMouseDown(e);
            });
          } // configuración de datos (lectura de datos de entrada)

        }, {
          key: "ajustaEjeY",
          value: function ajustaEjeY() {
            // se se usan porcentajes, limita el eje y de 0 a 100
            if (this.porcentaje) {
              this.barChartOptions.scales = {
                yAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    max: 100,
                    fontSize: 11
                  }
                }],
                xAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    max: 100,
                    fontSize: 11
                  }
                }]
              };
            } else {
              this.barChartOptions.scales = {
                yAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    max: this.maxValue,
                    fontSize: 11
                  }
                }],
                xAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    max: 100,
                    fontSize: 11
                  }
                }]
              };
            }
          }
        }, {
          key: "iniciaIndicadores",
          value: function iniciaIndicadores() {
            var _this64 = this;

            // se obtienen todos los indicadores en los proyectos
            this.barChartLabels = [];

            if (this.Bandera_bar) {
              this.inputProyects.forEach(function (proyecto) {
                Object.keys(proyecto.Datos).forEach(function (indicador) {
                  if (!_this64.barChartLabels.includes(indicador)) {
                    _this64.barChartLabels = [].concat(_toConsumableArray(_this64.barChartLabels), [indicador]);
                  }
                });
              });
            } else {
              this.inputProyects.forEach(function (proyecto) {
                Object.keys(proyecto.Datos).forEach(function (indicador) {
                  var auxAbr = '';

                  _this64.impactos.forEach(function (impacto) {
                    var auxNameImpacto = _this64.ajustarNombre(impacto['name_complete_potential_type']);

                    if (indicador === auxNameImpacto) {
                      auxAbr = impacto['name_potential_type'];
                    }
                  });

                  var auxIndicador = indicador.concat('\n(', auxAbr, ')');

                  if (!_this64.barChartLabels.includes(auxIndicador)) {
                    _this64.barChartLabels = [].concat(_toConsumableArray(_this64.barChartLabels), [auxIndicador]);
                  }

                  proyecto.Datos[indicador].total = 0;
                  proyecto.Datos[indicador].total = Object.values(proyecto.Datos[indicador]).reduce(function (a, b) {
                    return a + b;
                  }, 0);
                  _this64.maxValue = Math.max(_this64.maxValue, proyecto.Datos[indicador].total);
                });
              });
            }
          }
        }, {
          key: "iniciaDatos",
          value: function iniciaDatos() {
            var _this65 = this;

            // le da el formato necesario a los datos para que se puedan graficar
            var datos = [];
            this.barChartData = [];
            this.ElementosEnNiveles = [];

            if (this.Bandera_bar) {
              //Sección para la gráfica de barras mostradas en los impactos ambientales por elementos constructivos
              var numElementos = 0;
              this.inputProyects.forEach(function (proyecto, numProyecto) {
                var auxData = {};
                var auxDatos = {};
                var auxDataElementos = {};
                var auxDatosElementos = {};
                var niveles_existentes = [];
                _this65.auxElemntosData[proyecto.id] = {};

                _this65.barChartLabels.forEach(function (indicador) {
                  Object.keys(proyecto.Datos[indicador.toString()]).forEach(function (element, index) {
                    var helpn = 'n'.concat(index.toString());
                    auxDatos[helpn] = [];
                    auxDatosElementos[helpn] = [];

                    if (!niveles_existentes.includes(helpn)) {
                      numElementos = numElementos + 1;
                      niveles_existentes.push(helpn);
                    }
                  });
                });

                _this65.barChartLabels.forEach(function (indicador, indexLabel) {
                  _this65.auxElementos[indicador.toString()] = [];
                  _this65.auxElemntosData[proyecto.id][indexLabel.toString()] = [];
                  var suma = 0; //creaición de los espacios para guardar los valores por niveles

                  Object.keys(proyecto.Datos[indicador.toString()]).forEach(function (element, index) {
                    suma = suma + proyecto.Datos[indicador.toString()][element];
                  }); //acomodar conforme porcentajes y en orden para niveles

                  var auxdatos = [];
                  var help = [];
                  Object.keys(proyecto.Datos[indicador.toString()]).forEach(function (element, index) {
                    help = [].concat(_toConsumableArray(help), [proyecto.Datos[indicador.toString()][element]]);
                  });
                  auxdatos = help.sort(function (n1, n2) {
                    if (n1 > n2) {
                      return 1;
                    }

                    if (n1 < n2) {
                      return -1;
                    }

                    return 0;
                  });
                  auxdatos = auxdatos.reverse(); //se guarda el nivel de cada elemento constructivo dependiendo del impacto ambiental

                  auxdatos.forEach(function (datoC, index) {
                    Object.keys(proyecto.Datos[indicador.toString()]).forEach(function (element) {
                      if (datoC == proyecto.Datos[indicador.toString()][element]) {
                        _this65.auxElementos[indicador.toString()].push(element);

                        _this65.auxElemntosData[proyecto.id][indexLabel.toString()].push(element);
                      }
                    });
                  }); //Pasar a porsentaje

                  auxdatos.forEach(function (datoC, index) {
                    var resultado = (datoC * 100 / suma).toFixed(2);
                    auxdatos[index] = resultado;
                  }); //se guardan por niveles dependiendo del impacto ambiental

                  auxdatos.forEach(function (element, index) {
                    var helpn = 'n'.concat(index.toString());
                    auxData[helpn] = element;
                    auxDataElementos[helpn] = _this65.auxElementos[indicador.toString()][index];
                  }); //se llenan los niveles en orden

                  Object.keys(auxDatos).forEach(function (element) {
                    Object.keys(auxData).forEach(function (valor) {
                      if (element === valor) {
                        auxDatos[element].push(auxData[valor]);
                      }
                    });
                  });
                  Object.keys(auxDatosElementos).forEach(function (element) {
                    Object.keys(auxDataElementos).forEach(function (valor) {
                      if (element === valor) {
                        auxDatosElementos[element].push(auxDataElementos[valor]);
                      }
                    });
                  });
                });

                _this65.auxColor = _this65.coloresGraph2Nuevo;
                _this65.auxColorBW = _this65.coloresBWGraph2Nuevo;
                Object.keys(auxDatosElementos).forEach(function (etapa) {
                  _this65.ElementosEnNiveles.push(auxDatosElementos[etapa]);
                });
                Object.keys(auxDatos).forEach(function (etapa, index) {
                  datos = [].concat(_toConsumableArray(datos), [{
                    data: auxDatos[etapa],
                    label: etapa,
                    stack: proyecto,
                    backgroundColor: _this65.coloresGraph2Nuevo[index],
                    hoverBackgroundColor: _this65.coloresGraph2Nuevo[index]
                  }]);
                });
              });
            } else {
              datos = [];
              this.inputProyects.forEach(function (proyecto) {
                var auxDatos = {
                  Producción: [],
                  Construccion: [],
                  Uso: [],
                  FinDeVida: []
                };

                _this65.barChartLabels.forEach(function (indicador) {
                  var auxIndicador = _this65.reajusteNombre(indicador.toString());

                  Object.keys(auxDatos).forEach(function (etapa) {
                    var indicadores = Object.keys(proyecto.Datos);

                    if (!indicadores.includes(auxIndicador.toString()) || !Object.keys(proyecto.Datos[auxIndicador.toString()]).includes(etapa)) {
                      auxDatos[etapa] = [].concat(_toConsumableArray(auxDatos[etapa]), [0]);
                    } else {
                      auxDatos[etapa] = [].concat(_toConsumableArray(auxDatos[etapa]), [_this65.porcentaje ? (proyecto.Datos[auxIndicador.toString()][etapa] * 100 / proyecto.Datos[auxIndicador.toString()].total).toFixed(2) : proyecto.Datos[auxIndicador.toString()][etapa].toExponential(2)]);
                    }
                  });
                }); //console.log(auxDatos)


                Object.keys(auxDatos).forEach(function (etapa) {
                  datos = [].concat(_toConsumableArray(datos), [{
                    data: auxDatos[etapa],
                    label: etapa,
                    stack: proyecto.Nombre,
                    backgroundColor: _this65.colores[etapa],
                    hoverBackgroundColor: _this65.colores[etapa]
                  }]);
                });
              });
            }

            this.barChartData = datos;

            if (this.Bandera_bar) {
              if (this.impactoAmbiental != null) {
                if (this.elementoConstructivo != ' ') {
                  this.banderaImpacto = true;
                  this.focusColumnas(this.impactoAmbiental);
                  this.banderaImpacto = false;
                }
              } else {
                if (this.elementoConstructivo != ' ') {
                  this.focusSeries(this.elementoConstructivo);
                }
              }
            }
          }
        }, {
          key: "reajusteNombre",
          value: function reajusteNombre(name) {
            var help = name;
            var aux = name;
            var flag = true;

            for (var _i = help.length - 1; _i >= 0; _i--) {
              if (flag) {
                aux = aux.slice(0, _i);
              }

              if (help[_i] === '\n') {
                flag = false;
              }
            }

            return aux;
          } // configurcion de estilo (Titulos de proyectos)

        }, {
          key: "iniciaPosiciones",
          value: function iniciaPosiciones(chart) {
            var _this66 = this;

            // Se encuentran las posiciones de las barras
            var labels = chart['$datalabels']['_labels'];
            this.centrosX = {};
            this.proyectos = [];
            labels.some(function (label) {
              if (_this66.Bandera_bar) {
                var proyecto = label['$context']['dataset'].stack.Nombre;
                var elemento = label['_el'];
                var x = elemento['_view'].x;

                if (_this66.centrosX[proyecto] == undefined) {
                  _this66.centrosX[proyecto] = [];
                  _this66.proyectos = [proyecto].concat(_toConsumableArray(_this66.proyectos));
                }

                if (x != NaN) {
                  if (!_this66.centrosX[proyecto].includes(x)) {
                    _this66.centrosX[proyecto].push(x);
                  }
                }
              } else {
                var _proyecto = label['$context']['dataset'].stack;
                var _elemento2 = label['_el'];
                var _x = _elemento2['_view'].x;

                if (_this66.centrosX[_proyecto] == undefined) {
                  _this66.centrosX[_proyecto] = [];
                  _this66.proyectos = [_proyecto].concat(_toConsumableArray(_this66.proyectos));
                }

                if (!_this66.centrosX[_proyecto].includes(_x)) {
                  _this66.centrosX[_proyecto].push(_x);
                }
              }
            });
          }
        }, {
          key: "agregaTitulosProyectos",
          value: function agregaTitulosProyectos(chart) {
            var _this67 = this;

            // Se agrega los titulos de las barras de varios proyectos (solo cuando son más de uno)
            var ctx = chart.canvas.getContext('2d');
            var labels = chart['$datalabels']['_labels'];
            var centroY = chart['boxes'][1].height / 2;
            this.iniciaPosiciones(chart);

            if (chart['$datalabels']['_labels'].length == 0) {
              return;
            }

            ctx.font = chart['$datalabels']['_labels'][0]['_ctx'].font; //'30px Comic Sans MS';

            ctx.fillStyle = 'gray';
            ctx.textAlign = 'center';

            if (this.proyectos.length < 2) {
              return;
            } // ctx.clearRect( 0, 0,this.canvas.width, chart['boxes'][1].height*3/4 );


            this.proyectos.forEach(function (proyecto, index) {
              _this67.centrosX[proyecto].forEach(function (x) {
                ctx.fillText((index + 1).toString(), x, centroY);
              });
            });
          } // Control de eventos en la grafica

        }, {
          key: "onMouseDown",
          value: function onMouseDown(e) {
            var limiteInferior = this.chartDir.chart.height - this.chartDir.chart['boxes'][2].height;
            var limiteSuperior = this.chartDir.chart['boxes'][1].height;

            if (e.offsetY > limiteInferior) {
              // Control de click en etiquetas
              var seleccion = this.getEtiquetaCercana(e);
              this.focusColumnas(seleccion);
            } else if (e.offsetY < limiteSuperior) {
              // Control de click de Proyecto
              this.focusProyecto(e);
            } else {//this.togglePorcentaje();
            }
          }
        }, {
          key: "focusProyecto",
          value: function focusProyecto(e) {
            var _this68 = this;

            // Selecciona todas las barras de un proyecto cuando se hace click en el area superior de la grafica
            var labels = this.chartDir.chart['$datalabels']['_labels'];
            var stack = null;

            if (!this.Bandera_bar) {
              labels.some(function (label) {
                var elemento = label['_el'];

                if (elemento.inXRange(e.offsetX)) {
                  stack = label['$context']['dataset'].stack;
                  return true;
                }
              });

              if (this.lastClick !== stack) {
                this.barChartData.forEach(function (data, index) {
                  var color = new Array(data.data.length);

                  if (data.stack == stack) {
                    color.fill(_this68.colores[data.label]);
                  } else {
                    color.fill(_this68.coloresBW[data.label]);
                  }

                  _this68.barChartData[index].backgroundColor = color;
                  _this68.barChartData[index].hoverBackgroundColor = color;
                });
                this.chartDir.update();
                this.lastClick = stack;
              } else {
                this.resetColores();
                this.lastClick = null;
              }
            }
          }
        }, {
          key: "focusColumnas",
          value: function focusColumnas(seleccion) {
            var _this69 = this;

            var selec = seleccion;

            if (this.lastClick !== seleccion.label) {
              if (this.Bandera_bar) {
                if (this.banderaImpacto) {
                  var nivelesAux = [];
                  var count = -1;
                  this.barChartData.forEach(function (datos, index) {
                    var color = new Array(datos.data.length);
                    var coloraux = [];

                    if (!nivelesAux.includes(datos.label)) {
                      nivelesAux.push(datos.label);
                      count += 1;
                    } else {
                      nivelesAux = [];
                      nivelesAux.push(datos.label);
                      count = 0;
                    }

                    _this69.ElementosEnNiveles[index].forEach(function (element, ii) {
                      if (ii == seleccion.index) {
                        if (element === _this69.elementoConstructivo) {
                          coloraux.push(_this69.auxColor[count]);
                        } else {
                          coloraux.push(_this69.auxColorBW[count]);
                        }
                      } else {
                        coloraux.push(_this69.auxColorBW[count]);
                      }
                    });

                    color = coloraux;
                    _this69.barChartData[index].backgroundColor = color;
                    _this69.barChartData[index].hoverBackgroundColor = color;
                  });
                } else {
                  var _nivelesAux = [];

                  var _count = -1;

                  this.barChartData.forEach(function (datos, index) {
                    var color = new Array(datos.data.length);

                    if (!_nivelesAux.includes(datos.label)) {
                      _nivelesAux.push(datos.label);

                      _count += 1;
                    } else {
                      _nivelesAux = [];

                      _nivelesAux.push(datos.label);

                      _count = 0;
                    }

                    if (_this69.elementoConstructivo != ' ') {
                      var coloraux = [];

                      _this69.ElementosEnNiveles[index].forEach(function (element, ii) {
                        if (ii == seleccion.index) {
                          if (element === _this69.elementoConstructivo) {
                            coloraux.push(_this69.auxColor[_count]);
                          } else {
                            coloraux.push(_this69.auxColorBW[_count]);
                          }
                        } else {
                          coloraux.push(_this69.auxColorBW[_count]);
                        }
                      });

                      color = coloraux;
                    } else {
                      color.fill(_this69.auxColorBW[_count]);
                      color[seleccion.index] = _this69.auxColor[_count];
                    }

                    _this69.barChartData[index].backgroundColor = color;
                    _this69.barChartData[index].hoverBackgroundColor = color;
                  });
                  this.chartDir.update();
                }

                this.lastClick = seleccion.label;
              } else {
                this.barChartData.forEach(function (datos, index) {
                  var color = new Array(datos.data.length);
                  color.fill(_this69.coloresBW[datos.label]);
                  color[seleccion.index] = _this69.colores[datos.label];
                  _this69.barChartData[index].backgroundColor = color;
                  _this69.barChartData[index].hoverBackgroundColor = color;
                });
                this.chartDir.update();
                this.lastClick = seleccion.label;
              }

              this.showMe = false;
            } else {
              if (this.Bandera_bar) {} else {
                this.showMe = true;
              }

              this.resetColores();
              this.lastClick = null;
            }

            if (this.Bandera_bar) {
              //aqui faltara uno que mande el color de los elementos constructivos
              var aux = {
                niveles: this.auxElementos,
                seleccion: this.lastClick,
                color: this.auxColor,
                selec: selec,
                nivelesProyectos: this.auxElemntosData
              }; //console.log(this.auxElementos,this.barChartData)

              this.ClickEvent.emit(aux);
            } else {
              if (this.lastClick !== null) {
                var auxLast = this.lastClick.slice(0, -1);
                this.lastClickEvent.emit(auxLast);
              } else {
                this.lastClickEvent.emit(this.lastClick);
              }
            }
          }
        }, {
          key: "getEtiquetaCercana",
          value: function getEtiquetaCercana(e) {
            // Obtiene la etiqueta mas cercana al click en el eje X de acuerdo con barChartLabels
            var etiquetas = this.chartDir.chart['boxes'][2]['_labelItems'];
            var max = this.chartDir.chart.width;
            var seleccion = '';
            var indice = -1;
            etiquetas.forEach(function (etiqueta, i) {
              var distancia = Math.abs(etiqueta.x - e.offsetX);

              if (distancia < max) {
                max = distancia;
                seleccion = etiqueta.label;
                indice = i;
              }
            });
            return {
              label: seleccion,
              index: indice
            };
          }
        }, {
          key: "onHover",
          value: function onHover(e) {
            // Controla el flujo de hover sobre los elementos de las barras
            //console.log(this.showMe);
            if (this.showMe) {
              if (this.hovered !== null) {
                //console.log(this.showMe);
                var serie = this.chartDir.chart.data.datasets[this.hovered['_datasetIndex']].label;

                if (this.hovered.inRange(e.offsetX, e.offsetY)) {
                  if (this.lastClick !== serie) {
                    this.focusSeries(serie);
                    this.lastClick = serie;
                  }
                } else {
                  this.resetColores();
                  this.hovered = null;
                  this.lastClick = null;
                }
              }
            }
          }
        }, {
          key: "resetColores",
          value: function resetColores() {
            var _this70 = this;

            // Pone todas las series en color normal
            if (this.Bandera_bar) {
              var nivelesAux = [];
              var count = -1;
              this.barChartData.forEach(function (data, index) {
                if (!nivelesAux.includes(data.label)) {
                  nivelesAux.push(data.label);
                  count += 1;
                } else {
                  nivelesAux = [];
                  nivelesAux.push(data.label);
                  count = 0;
                }

                var color = _this70.auxColor[count];
                _this70.barChartData[index].backgroundColor = color;
                _this70.barChartData[index].hoverBackgroundColor = color;
              });
            } else {
              this.barChartData.forEach(function (data, index) {
                var color = _this70.colores[data.label];
                _this70.barChartData[index].backgroundColor = color;
                _this70.barChartData[index].hoverBackgroundColor = color;
              });
            }

            this.chartDir.update();
          }
        }, {
          key: "focusSeries",
          value: function focusSeries(serie) {
            var _this71 = this;

            // Pone la serie seleccionada de color normal, el resto se pone en blanco y negro
            var count = -1;
            var nivelesAux = [];
            this.barChartData.forEach(function (datos, index) {
              var color;

              if (_this71.Bandera_bar) {
                var coloraux = [];

                if (!nivelesAux.includes(datos.label)) {
                  nivelesAux.push(datos.label);
                  count += 1;
                } else {
                  nivelesAux = [];
                  nivelesAux.push(datos.label);
                  count = 0;
                }

                _this71.ElementosEnNiveles[index].forEach(function (element) {
                  if (element === serie) {
                    coloraux.push(_this71.auxColor[count]);
                  } else {
                    coloraux.push(_this71.auxColorBW[count]);
                  }
                });

                color = coloraux;
              } else {
                //console.log(this.banera_enfoqueSerie_externo,serie);
                if (datos.label !== serie) {
                  color = _this71.coloresBW[datos.label];
                } else {
                  color = _this71.colores[datos.label];
                }
              }

              _this71.barChartData[index].backgroundColor = color;
              _this71.barChartData[index].hoverBackgroundColor = color;
            });

            if (this.Bandera_bar) {} else {
              this.chartDir.update();
            }
          }
        }, {
          key: "onChartHover",
          value: function onChartHover(e) {
            // Asigna el elemento de la grafica sobre el cual se hace hover
            this.hovered = this.chartDir.chart.getElementAtEvent(event)[0]; // if(!this.hoverIniciado){
            //   this.hoverIniciado = true;
            //   console.log('hovered')
            // // Ya que se inicializa el componente
            //   this.canvas = this.chartDir.chart.canvas;
            //   this.canvas.addEventListener('mousemove', e => { this.onHover(e); });
            //   this.canvas.addEventListener('mousedown', e => { this.onMouseDown(e); });
            // }
          }
        }, {
          key: "onChartClick",
          value: function onChartClick(e) {}
        }, {
          key: "ajustarNombre",
          value: function ajustarNombre(name) {
            var help = name;
            var spacios = 0;
            var numC = 0;
            var maxlinea = 0;

            var _iterator5 = _createForOfIteratorHelper(help),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var i = _step5.value;

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
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return help;
          }
        }]);

        return BarChartComponent;
      }();
      /***/

    },

    /***/
    "llJ9":
    /*!********************************************************!*\
      !*** ./src/app/radial-chart/radial-chart.component.ts ***!
      \********************************************************/

    /*! exports provided: RadialChartComponent */

    /***/
    function llJ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadialChartComponent", function () {
        return RadialChartComponent;
      });

      var RadialChartComponent = /*#__PURE__*/function () {
        function RadialChartComponent() {
          _classCallCheck(this, RadialChartComponent);

          this.backcolores = ['rgba(77,190,137,0.2)', 'rgba(20,136,147,0.2)', 'rgba(143,80,145,0.2)', 'rgba(222,169,97,0.2)'];
          this.pointcolores = ['#4DBE89', '#148A93', '#8F5091', '#DEA961'];
          this.radarChartOptions = {
            responsive: true,
            layout: {
              padding: 0
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            },
            plugins: {
              datalabels: {
                display: false
              }
            },
            scale: {
              pointLabels: {
                fontSize: 12
              },
              ticks: {
                fontSize: 7
              }
            }
          };
          this.radarChartLabels = [];
          this.radarChartData = [];
          this.radarChartType = 'radar';
        }

        _createClass(RadialChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cargarLabels(this.id);
            this.cargarDatos(this.id);
            console.log("Radar");
          }
        }, {
          key: "cargarLabels",
          value: function cargarLabels(ID) {
            var _this72 = this;

            this.radarChartLabels = [];
            this.subtitulo = ID;
            this.inputProyect.forEach(function (proyecto) {
              Object.keys(proyecto.Datos).forEach(function (indicador) {
                if (indicador === ID) {
                  Object.keys(proyecto.Datos[indicador]).forEach(function (element) {
                    var auxAbr = "";

                    _this72.impactos.forEach(function (impacto) {
                      var auxNameImpacto = _this72.ajustarNombre(impacto['name_complete_potential_type']);

                      if (element === auxNameImpacto) {
                        auxAbr = impacto['name_potential_type'];
                      }
                    });

                    if (!_this72.radarChartLabels.includes(auxAbr)) {
                      _this72.radarChartLabels = [].concat(_toConsumableArray(_this72.radarChartLabels), [auxAbr]);
                    }
                  });
                }
              });
            }); //console.log(this.radarChartLabels)
          }
        }, {
          key: "cargarDatos",
          value: function cargarDatos(ID) {
            var _this73 = this;

            this.radarChartData = [];
            var auxlabel = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];
            var auxdata = [];
            var auxdatos = [];
            var datos = [];
            var bcolor = '';
            var pcolor = '';
            this.cargarLabels(ID);
            this.subtitulo = ID;
            Object.keys(auxlabel).forEach(function (indicador) {
              if (auxlabel[indicador] === ID) {
                bcolor = _this73.backcolores[indicador];
                pcolor = _this73.pointcolores[indicador];
              }
            }); //console.log(suma)

            this.inputProyect.forEach(function (proyecto) {
              var suma = 0;
              var valores_suma = [];
              Object.keys(proyecto.Datos[auxlabel[0]]).forEach(function (element) {
                valores_suma[element] = 0;
              });
              Object.keys(auxlabel).forEach(function (indicador) {
                auxdatos = proyecto.Datos[auxlabel[indicador]];
                Object.keys(proyecto.Datos[auxlabel[indicador]]).forEach(function (element) {
                  valores_suma[element] = valores_suma[element] + auxdatos[element];
                });
              });
              Object.keys(auxlabel).forEach(function (indicador) {
                if (auxlabel[indicador] === ID) {
                  auxdatos = proyecto.Datos[auxlabel[indicador]];
                  Object.keys(proyecto.Datos[auxlabel[indicador]]).forEach(function (element) {
                    datos = [].concat(_toConsumableArray(datos), [(auxdatos[element] * 100 / valores_suma[element]).toFixed(2)]);
                  });
                }
              });
              auxdata = [{
                data: datos,
                backgroundColor: bcolor,
                pointBackgroundColor: pcolor,
                borderColor: "transparent",
                borderWidth: 0.1
              }];
              _this73.radarChartData = [].concat(_toConsumableArray(_this73.radarChartData), [auxdata]);
              datos = [];
              auxdata = [];
              auxdatos = [];
            });
          }
        }, {
          key: "ajustarNombre",
          value: function ajustarNombre(name) {
            var help = name;
            var spacios = 0;
            var numC = 0;
            var maxlinea = 0;

            var _iterator6 = _createForOfIteratorHelper(help),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var i = _step6.value;

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
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return help;
          }
        }]);

        return RadialChartComponent;
      }();
      /***/

    },

    /***/
    "mX7C":
    /*!**************************************************************************!*\
      !*** ./src/app/radial-chart/radial-chart.component.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function mX7C(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".graficas-especificas[_ngcontent-%COMP%] {\n  font-size: 11px;\n  display: grid;\n  grid-template-columns: repeat(2, 386px);\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  height: auto;\n  row-gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJhZGlhbC1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJyYWRpYWwtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhZmljYXMtZXNwZWNpZmljYXMge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMzg2cHgpO1xyXG4gIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHJvdy1nYXA6IDEwcHg7XHJcbn1cclxuIl19 */"];
      /***/
    },

    /***/
    "msxo":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/comparar/component/graficas-tercer-seccion/graficas-tercer-seccion.component.scss.shim.ngstyle.js ***!
      \*******************************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function msxo(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".viewport[_ngcontent-%COMP%] {\n  height: 580px;\n}\n\n.card-indicador[_ngcontent-%COMP%] {\n  display: flex;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #cbcbcb;\n  border-radius: 17px;\n  margin-bottom: 15px;\n  padding: 0%;\n  height: 563px;\n}\n\n.card-indicador[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: normal normal normal;\n  font-size: 12px;\n  letter-spacing: 0px;\n  color: #767676;\n  opacity: 1;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 290px;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: #cbcbcb;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .subtitulo-proyecto[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .subtitulo-proyecto[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #707070;\n  font-size: 14px;\n  border-radius: 0px 10px 10px 0px;\n  height: 39px;\n  margin-left: 0px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.1px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .subtitulo-proyecto[_ngcontent-%COMP%]   .titulo-proyecto[_ngcontent-%COMP%] {\n  width: 143px;\n  position: relative;\n  word-wrap: break-word;\n  overflow: hidden;\n  text-align: justify;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .subtitulo-proyecto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .button-graph[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  margin-left: 40px;\n  margin-right: 30px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .button-graph[_ngcontent-%COMP%]   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .button-graph[_ngcontent-%COMP%]   .espacio-sin-selecciomar[_ngcontent-%COMP%] {\n  width: 82px;\n  height: 34px;\n  background: #EFEFEF;\n  display: flex;\n  align-items: center;\n  margin: 4px;\n  border: 0;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .button-graph[_ngcontent-%COMP%]   .espacio-sin-selecciomar[_ngcontent-%COMP%]   .color-texto[_ngcontent-%COMP%] {\n  color: #767676;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .seccionTresPie[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   .seccionTresBar[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 290px;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: #cbcbcb;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   .seccionTresPie[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 290px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .example-container[_ngcontent-%COMP%] {\n  height: 237px;\n  max-width: 100%;\n  overflow: auto;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   th.mat-header-cell[_ngcontent-%COMP%]:first-of-type, .card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   td.mat-cell[_ngcontent-%COMP%]:first-of-type, .card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 4px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   td[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .mat-column-no[_ngcontent-%COMP%] {\n  width: 27px;\n  padding-right: 6px;\n  text-align: center;\n  color: #787777;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .mat-column-porcentaje[_ngcontent-%COMP%] {\n  width: 32px;\n  padding-right: 12px;\n  padding-left: 12px;\n  text-align: center;\n  color: #787777;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .mat-column-numero[_ngcontent-%COMP%] {\n  width: 39px;\n  padding-right: 6px;\n  padding-left: 6px;\n  text-align: center;\n  color: #787777;\n}\n\n.card-indicador[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .mat-column-material[_ngcontent-%COMP%] {\n  color: #787777;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-sin-selecciomar[_ngcontent-%COMP%] {\n  width: 82px;\n  height: 34px;\n  background: #EFEFEF;\n  display: flex;\n  align-items: center;\n  margin: 4px;\n  border: 0;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-sin-selecciomar[_ngcontent-%COMP%]   .color-texto[_ngcontent-%COMP%] {\n  color: #767676;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-seleccionado[_ngcontent-%COMP%] {\n  width: 82px;\n  height: 34px;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  margin: 4px;\n  border-radius: 0px 10px 10px 0px;\n  border: 1px solid #EDC903;\n  box-shadow: 0px 3px 6px #00000029;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .espacio-seleccionado[_ngcontent-%COMP%]   .color-texto[_ngcontent-%COMP%] {\n  color: #343434;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  background: #efefef;\n  border-radius: 0px 10px 10px 0px;\n  border: 0px;\n  padding: 7px;\n}\n\n.seccion_botones_elementos_constructivos[_ngcontent-%COMP%]   .botones-elementos-contructivos[_ngcontent-%COMP%]   .button-elemento-seleccionado[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 34px;\n  background: none;\n  text-align: left;\n  font-size: 10px;\n  margin: 5px;\n  border: 0;\n  display: flex;\n  align-items: inherit;\n  padding: unset;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ3JhZmljYXMtdGVyY2VyLXNlY2Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUo7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFHUjs7QUFESTtFQUNJLFlBQUE7QUFHUjs7QUFGUTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFJVjs7QUFIVTtFQUNJLGFBQUE7QUFLZDs7QUFKYztFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU1oQjs7QUFKYztFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU1oQjs7QUFKYztFQUNFLGlCQUFBO0FBTWhCOztBQUhVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLWjs7QUFIWTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBS2Q7O0FBSFk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUtkOztBQUpjO0VBQ0UsY0FBQTtBQU1oQjs7QUFGVTtFQUNFLGtCQUFBO0FBSVo7O0FBRlU7RUFDRSxpQkFBQTtBQUlaOztBQURRO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUdWOztBQUZVO0VBQ0Usa0JBQUE7QUFJWjs7QUFBUTtFQUNFLFlBQUE7QUFFVjs7QUFEVTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdaOztBQURVO0VBQ0UsaUJBQUE7QUFHWjs7QUFEVTtFQUNFLGVBQUE7QUFHWjs7QUFEVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdaOztBQUFVO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFWjs7QUFDVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ1o7O0FBRVU7RUFDRSxjQUFBO0FBQVo7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUpGOztBQUtFO0VBQ0UscUJBQUE7QUFISjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBRk47O0FBR007RUFDRSxjQUFBO0FBRFI7O0FBS0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQUhOOztBQUlNO0VBQ0UsY0FBQTtBQUZSOztBQUtJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhOOztBQU1JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBSk4iLCJmaWxlIjoiZ3JhZmljYXMtdGVyY2VyLXNlY2Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3BvcnQge1xyXG4gIGhlaWdodDogNTgwcHg7XHJcbn1cclxuLmNhcmQtaW5kaWNhZG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNjYmNiY2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgaGVpZ2h0OiA1NjNweDtcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2NiY2JjYjtcclxuICAgICAgICAgIC5zdWJ0aXR1bG8tcHJveWVjdG97XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4xcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50aXR1bG8tcHJveWVjdG97XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQzcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnV0dG9uLWdyYXBoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5lc3BhY2lvLXNpbi1zZWxlY2Npb21hcntcclxuICAgICAgICAgICAgICB3aWR0aDogODJweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0VGRUZFRjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgIC5jb2xvci10ZXh0b3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY2Npb25UcmVzUGllIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY2Npb25UcmVzQmFyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2NiY2JjYjtcclxuICAgICAgICAgIC5zZWNjaW9uVHJlc1BpZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzN3B4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0ZHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hdC1jb2x1bW4tbm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjdweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzg3Nzc3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLm1hdC1jb2x1bW4tcG9yY2VudGFqZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICM3ODc3Nzc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAubWF0LWNvbHVtbi1udW1lcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzlweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogIzc4Nzc3NztcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIC5tYXQtY29sdW1uLW1hdGVyaWFse1xyXG4gICAgICAgICAgICBjb2xvcjogIzc4Nzc3NztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uc2VjY2lvbl9ib3RvbmVzX2VsZW1lbnRvc19jb25zdHJ1Y3Rpdm9ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5ib3RvbmVzLWVsZW1lbnRvcy1jb250cnVjdGl2b3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLmVzcGFjaW8tc2luLXNlbGVjY2lvbWFye1xyXG4gICAgICB3aWR0aDogODJweDtcclxuICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRUZFRkVGO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDRweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgICAgLmNvbG9yLXRleHRve1xyXG4gICAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZXNwYWNpby1zZWxlY2Npb25hZG97XHJcbiAgICAgIHdpZHRoOiA4MnB4O1xyXG4gICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VEQzkwMztcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICAuY29sb3ItdGV4dG97XHJcbiAgICAgICAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5idXR0b24taWNvbiB7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnV0dG9uLWVsZW1lbnRvLXNlbGVjY2lvbmFkbyB7XHJcbiAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"];
      /***/
    },

    /***/
    "p5Tu":
    /*!********************************************************************!*\
      !*** ./src/app/bar-chart/bar-chart.component.scss.shim.ngstyle.js ***!
      \********************************************************************/

    /*! exports provided: styles */

    /***/
    function p5Tu(module, __webpack_exports__, __webpack_require__) {
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


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"];
      /***/
    },

    /***/
    "uUPV":
    /*!************************************************************!*\
      !*** ./src/app/pie-chart/pie-chart.component.ngfactory.js ***!
      \************************************************************/

    /*! exports provided: RenderType_PieChartComponent, View_PieChartComponent_0, View_PieChartComponent_Host_0, PieChartComponentNgFactory */

    /***/
    function uUPV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_PieChartComponent", function () {
        return RenderType_PieChartComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PieChartComponent_0", function () {
        return View_PieChartComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_PieChartComponent_Host_0", function () {
        return View_PieChartComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartComponentNgFactory", function () {
        return PieChartComponentNgFactory;
      });
      /* harmony import */


      var _pie_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pie-chart.component.scss.shim.ngstyle */
      "9MWN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../node_modules/@angular/material/card/index.ngfactory */
      "YHaq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pie-chart.component */
      "1U8D");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_PieChartComponent = [_pie_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_PieChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_PieChartComponent,
        data: {}
      });

      function View_PieChartComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "text-subetapas"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "button", [], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.DeleteSubetapa(_v.context.$implicit, _v.parent.context.index) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "span", [["class", "dot"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngStyle: [0, "ngStyle"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, {
          "background-color": 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _ck(_v, 5, 0, _co.pieChartColor[_v.context.index]);

          _ck(_v, 4, 0, currVal_0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.idSubetapas[_v.parent.context.index][_v.context.index], "");

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _v.context.$implicit;

          _ck(_v, 7, 0, currVal_2);
        });
      }

      function View_PieChartComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "div", [["style", "display:block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "mat-card", [["class", "mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 4, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, 2, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 2, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 2, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]], {
          datasets: [0, "datasets"],
          options: [1, "options"],
          chartType: [2, "chartType"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "ul", [["class", "mostrar-subetapas"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PieChartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "p", [["class", "totales-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["Total : ", ""]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _co.pieChartData[_v.context.index];
          var currVal_4 = _co.pieChartOptions;
          var currVal_5 = _co.pieChartType;

          _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5);

          var currVal_6 = _co.pieChartLabels[_v.context.index];

          _ck(_v, 14, 0, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.Nombre;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _co.indicador;

          _ck(_v, 7, 0, currVal_2);

          var currVal_7 = _co.totales[_v.context.index];

          _ck(_v, 17, 0, currVal_7);
        });
      }

      function View_PieChartComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "graficas-especificas-seccionUno"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PieChartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.inputProyect;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_PieChartComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "graficas-especificas"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [["canvas", 1]], null, 1, "canvas", [["baseChart", ""]], null, [[null, "chartClick"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("chartClick" === en) {
            var pd_0 = _co.onChartClick($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 999424, [[1, 4], ["MyChart", 4]], 0, ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]], {
          datasets: [0, "datasets"],
          options: [1, "options"],
          chartType: [2, "chartType"]
        }, {
          chartClick: "chartClick"
        })], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.pieChartData[0];
          var currVal_1 = _co.pieChartOptions_elementos;
          var currVal_2 = _co.pieChartType;

          _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        }, null);
      }

      function View_PieChartComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          chartDir: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PieChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PieChartComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.showMePartially;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.showMe_elementos;

          _ck(_v, 4, 0, currVal_1);
        }, null);
      }

      function View_PieChartComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pie-chart", [], null, null, null, View_PieChartComponent_0, RenderType_PieChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var PieChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-pie-chart", _pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"], View_PieChartComponent_Host_0, {
        inputProyect: "inputProyect",
        showMePartially: "showMePartially",
        id: "id",
        indicador: "indicador",
        Bandera_resultado: "Bandera_resultado",
        proyecto: "proyecto",
        showMe_elementos: "showMe_elementos",
        bandera_click: "bandera_click",
        unidades: "unidades",
        colorDispercion: "colorDispercion"
      }, {
        ClickEvent: "ClickEvent"
      }, []);
      /***/

    },

    /***/
    "vI5e":
    /*!*****************************************************************************!*\
      !*** ./src/app/comparar/component/comparar/comparar.component.ngfactory.js ***!
      \*****************************************************************************/

    /*! exports provided: RenderType_CompararComponent, View_CompararComponent_0, View_CompararComponent_Host_0, CompararComponentNgFactory */

    /***/
    function vI5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CompararComponent", function () {
        return RenderType_CompararComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CompararComponent_0", function () {
        return View_CompararComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CompararComponent_Host_0", function () {
        return View_CompararComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompararComponentNgFactory", function () {
        return CompararComponentNgFactory;
      });
      /* harmony import */


      var _comparar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./comparar.component.scss.shim.ngstyle */
      "9ldO");
      /* harmony import */


      var _styleSU_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./styleSU.scss.shim.ngstyle */
      "Mu1H");
      /* harmony import */


      var _styleSD_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./styleSD.scss.shim.ngstyle */
      "5wQT");
      /* harmony import */


      var _styleST_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./styleST.scss.shim.ngstyle */
      "vpWx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/core/index.ngfactory */
      "CeGm");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/menu/index.ngfactory */
      "qXT7");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/card/index.ngfactory */
      "YHaq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/icon/index.ngfactory */
      "XE/z");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/table/index.ngfactory */
      "K0NO");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/button-toggle/index.ngfactory */
      "Fyq5");
      /* harmony import */


      var _node_modules_angular_material_checkbox_index_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/checkbox/index.ngfactory */
      "y3B+");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/select/index.ngfactory */
      "Y1Mv");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../../../../node_modules/@angular/material/tabs/index.ngfactory */
      "Pwwu");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _comparar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./comparar.component */
      "jdSv");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../../../core/services/materials/materials.service */
      "dxGk");
      /* harmony import */


      var _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../../../core/services/projects/projects.service */
      "kqb2");
      /* harmony import */


      var _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../../../core/services/analisis/analisis.service */
      "hslW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../../../core/services/user/user.service */
      "9APP");
      /* harmony import */


      var _calculos_calculos__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../../../calculos/calculos */
      "MNqV");
      /* harmony import */


      var _calculos_calculos_segunda_seccion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../../../calculos/calculos-segunda-seccion */
      "5MZ9");
      /* harmony import */


      var _calculos_calculos_tercer_seccion__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../../../calculos/calculos-tercer-seccion */
      "fIzW");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CompararComponent = [_comparar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styleSU_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styleSD_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"], _styleST_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_3__["styles"]];

      var RenderType_CompararComponent = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CompararComponent,
        data: {
          "animation": [{
            type: 7,
            name: "detailExpand",
            definitions: [{
              type: 0,
              name: "collapsed",
              styles: {
                type: 6,
                styles: {
                  height: "0px",
                  minHeight: "0"
                },
                offset: null
              },
              options: undefined
            }, {
              type: 0,
              name: "expanded",
              styles: {
                type: 6,
                styles: {
                  height: "*"
                },
                offset: null
              },
              options: undefined
            }, {
              type: 1,
              expr: "expanded <=> collapsed",
              animation: {
                type: 4,
                styles: null,
                timings: "225ms cubic-bezier(0.4, 0.0, 0.2, 1)"
              },
              options: null
            }],
            options: {}
          }]
        }
      });

      function View_CompararComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option mat-focus-indicator"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._selectViaInteraction() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._handleKeydown($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 8568832, [[13, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._getTabIndex();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).multiple;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).active;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).id;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._getAriaSelected();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).disabled.toString();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).disabled;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_9 = _v.context.$implicit;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_CompararComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._checkDisabled($event) !== false;
            ad = pd_0 && ad;
          }

          if ("mouseenter" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._handleMouseEnter() !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _co.iniciar_graficas(_v.context.$implicit.id) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 180224, [[16, 4], [17, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).role;

          var currVal_1 = true;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._highlighted;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._triggersSubmenu;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._getTabIndex();

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).disabled.toString();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).disabled || null;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_7 = _v.context.$implicit.Nombre;

          _ck(_v, 3, 0, currVal_7);
        });
      }

      function View_CompararComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 9, "div", [["class", "button-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 8, "mat-card", [["class", "card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](3, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](4, 0, null, 0, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.quitarProyecto(_v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](6, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](7, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["highlight_off"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](9, 0, [" ", " "]))], function (_ck, _v) {
          _ck(_v, 7, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.num;

          _ck(_v, 3, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 5).disabled || null;
          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 5)._animationMode === "NoopAnimations";

          _ck(_v, 4, 0, currVal_2, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 7).inline;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 7).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 7).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 7).color !== "warn";

          _ck(_v, 6, 0, currVal_4, currVal_5);

          var currVal_6 = _v.context.$implicit.Nombre;

          _ck(_v, 9, 0, currVal_6);
        });
      }

      function View_CompararComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" Impactos ambientales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["por etapas de ciclo de vida "]))], null, null);
      }

      function View_CompararComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], null, null);
      }

      function View_CompararComponent_6(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 0, "span", [["class", "dot"]], [[8, "id", 0]], null, null, null, null))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _co.idsImpactosAmbientales["idsCiclo"][_v.context.index], "");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_CompararComponent_9(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 3, "th", [["class", "tittle-table mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 1, "span", [["style", "white-space: pre-line;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.parent.context.$implicit;

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_CompararComponent_10(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], [[4, "color", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.color;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.data[_v.parent.context.$implicit];

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_CompararComponent_8(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 29, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 30, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 31, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[25, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](8, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[30, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](11, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[29, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"]])], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_CompararComponent_11(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatHeaderRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], [], null, null)], null, null);
      }

      function View_CompararComponent_12(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"], [], null, null)], null, null);
      }

      function View_CompararComponent_7(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 16, "div", [["class", "tabla"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 15, "table", [["class", "Tabla-Datos mat-table"], ["mat-table", ""], ["multiTemplateDataRows", ""]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatTable_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](4, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["Platform"]], {
          dataSource: [0, "dataSource"],
          multiTemplateDataRows: [1, "multiTemplateDataRows"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 25, {
          _contentColumnDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 26, {
          _contentRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 27, {
          _contentHeaderRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 28, {
          _contentFooterRowDefs: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](12, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[27, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](15, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[26, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"]])], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.DatosTabla;
          var currVal_1 = "";

          _ck(_v, 4, 0, currVal_0, currVal_1);

          var currVal_2 = _co.columnsToDisplay;

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _co.columnsToDisplay;

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _co.columnsToDisplay;

          _ck(_v, 15, 0, currVal_4);
        }, null);
      }

      function View_CompararComponent_13(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], null, null);
      }

      function View_CompararComponent_14(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" Impactos ambientales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["por elementos constructivos "]))], null, null);
      }

      function View_CompararComponent_15(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], null, null);
      }

      function View_CompararComponent_16(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 0, "span", [["class", "dot"]], [[8, "id", 0]], null, null, null, null))], null, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _co.idsImpactosAmbientales["idsElementos"][_v.context.index], "");

          _ck(_v, 0, 0, currVal_0);
        });
      }

      function View_CompararComponent_18(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 7, "div", [["class", "botones-elementos-contructivos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 6, "div", [["class", "espacio-sin-selecciomar"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 1, "button", [["class", "button-elemento-seleccionado color-texto"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.graficabar(_v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](3, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](4, 0, null, null, 3, "button", [["class", "button-icono color-texto"]], [[8, "id", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.AjusteGraficaElementosContructivos(_v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](7, 0, ["", ""]))], function (_ck, _v) {
          _ck(_v, 6, 0);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _co.idsIconosElementos[_v.context.$implicit.id]["idTEXTO"], "");

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _co.iconosElementosConstrucivos[_v.context.$implicit.id]["habilitado"];

          _ck(_v, 2, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.name_section;

          _ck(_v, 3, 0, currVal_2);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _co.idsIconosElementos[_v.context.$implicit.id]["idOJO"], "");

          var currVal_4 = _co.iconosElementosConstrucivos[_v.context.$implicit.id]["habilitado"];

          _ck(_v, 4, 0, currVal_3, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).inline;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).color !== "warn";

          _ck(_v, 5, 0, currVal_5, currVal_6);

          var currVal_7 = _co.iconosElementosConstrucivos[_v.context.$implicit.id]["icono"];

          _ck(_v, 7, 0, currVal_7);
        });
      }

      function View_CompararComponent_17(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.botones_elementos_constructivos;

          _ck(_v, 2, 0, currVal_0);
        }, null);
      }

      function View_CompararComponent_19(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 3, "div", [["class", "complemento-edificio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](3, 0, null, null, 0, "button", [["class", "edificio-individual"]], [[8, "id", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.DispercionAP(_co.idsImgEdificios[_v.context.index], _v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit.Nombre;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _co.idsImgEdificios[_v.context.index], "");

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_CompararComponent_20(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], null, null);
      }

      function View_CompararComponent_22(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Sin materiales en estos calculos"]))], null, null);
      }

      function View_CompararComponent_24(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], null, null);
      }

      function View_CompararComponent_25(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" No. "]))], null, null);
      }

      function View_CompararComponent_26(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 1, "div", [["class", "circulo-color-tabla"]], [[4, "background-color", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.color;

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.no;

          _ck(_v, 3, 0, currVal_1);
        });
      }

      function View_CompararComponent_27(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" Material "]))], null, null);
      }

      function View_CompararComponent_28(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.material;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_CompararComponent_29(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" % "]))], null, null);
      }

      function View_CompararComponent_30(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.porcentaje;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_CompararComponent_31(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](2, null, [" ", ""]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.unidadImpactoAmientalTabla;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_CompararComponent_32(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit.numero;

          _ck(_v, 2, 0, currVal_0);
        });
      }

      function View_CompararComponent_33(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatHeaderRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], [], null, null)], null, null);
      }

      function View_CompararComponent_34(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"], [], null, null)], null, null);
      }

      function View_CompararComponent_23(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 89, "div", [["class", "seccion"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 19, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 17, "div", [["class", "button-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](3, 0, null, null, 14, "mat-button-toggle-group", [["class", "mat-button-toggle-group"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](6, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 34, {
          _buttonToggles: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](8, 0, null, null, 4, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.cambioDeTipoGraficaDispercion(true) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](9, 245760, [[34, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](10, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](11, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["pie_chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](13, 0, null, null, 4, "mat-button-toggle", [["class", "mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 14).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.cambioDeTipoGraficaDispercion(false) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](14, 245760, [[34, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](15, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](16, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["bar_chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](18, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Exportar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, [[5, 3], ["GraficasEspecificasDos", 2]], null, 0, null, View_CompararComponent_24)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](21, 0, null, null, 68, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Materiales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](24, 0, null, null, 65, "table", [["class", "mat-table"], ["mat-table", ""]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatTable_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](26, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["Platform"]], {
          dataSource: [0, "dataSource"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 35, {
          _contentColumnDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 36, {
          _contentRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 37, {
          _contentHeaderRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 38, {
          _contentFooterRowDefs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](32, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](34, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 39, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 40, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 41, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[35, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](40, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[40, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](43, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[39, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](45, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](47, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 42, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 43, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 44, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[35, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](53, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[43, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](56, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](58, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](60, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 45, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 46, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 47, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[35, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](66, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[46, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](69, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[45, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](71, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](73, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 48, {
          cell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 49, {
          headerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 50, {
          footerCell: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[35, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](79, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[49, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](82, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[48, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](85, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[37, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 2, null, View_CompararComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](88, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CDK_TABLE"]]], {
          columns: [0, "columns"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, [[36, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"]])], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 6, 0);

          _ck(_v, 9, 0);

          _ck(_v, 11, 0);

          _ck(_v, 14, 0);

          _ck(_v, 16, 0);

          var currVal_21 = _co.infoTablaDispercion;

          _ck(_v, 26, 0, currVal_21);

          var currVal_22 = "no";

          _ck(_v, 34, 0, currVal_22);

          var currVal_23 = "material";

          _ck(_v, 47, 0, currVal_23);

          var currVal_24 = "porcentaje";

          _ck(_v, 60, 0, currVal_24);

          var currVal_25 = "numero";

          _ck(_v, 73, 0, currVal_25);

          var currVal_26 = _co.displayedColumnsDispercion;

          _ck(_v, 85, 0, currVal_26);

          var currVal_27 = _co.displayedColumnsDispercion;

          _ck(_v, 88, 0, currVal_27);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).disabled;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).vertical;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).appearance === "standard";

          _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

          var currVal_3 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9).buttonToggleGroup;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9).checked;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9).disabled;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9).appearance === "standard";
          var currVal_7 = 0 - 1;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9).id;

          var currVal_9 = null;

          _ck(_v, 8, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 11).inline;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 11).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 11).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 11).color !== "warn";

          _ck(_v, 10, 0, currVal_10, currVal_11);

          var currVal_12 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 14).buttonToggleGroup;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 14).checked;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 14).disabled;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 14).appearance === "standard";
          var currVal_16 = 0 - 1;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 14).id;

          var currVal_18 = null;

          _ck(_v, 13, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 16).inline;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 16).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 16).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 16).color !== "warn";

          _ck(_v, 15, 0, currVal_19, currVal_20);
        });
      }

      function View_CompararComponent_21(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 11, "div", [["class", "last-div-section-two"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](3, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" Potenciales impactos ambientales de materiales de construcci\xF3n "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.flagSinMaterialesDispercion;

          _ck(_v, 9, 0, currVal_2);

          var currVal_3 = _co.flagMaterialesDispercion;

          _ck(_v, 11, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.nombreProyectoElegidoSeleccionadoElementos;

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.elementoSeleccionadoMostrado;

          _ck(_v, 5, 0, currVal_1);
        });
      }

      function View_CompararComponent_35(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" Impactos ambientales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["por materiales de construcci\xF3n "]))], null, null);
      }

      function View_CompararComponent_36(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, "mat-option", [["class", "mat-option mat-focus-indicator"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._selectViaInteraction() !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._handleKeydown($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatOption_0"], _node_modules_angular_material_core_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 8568832, [[53, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOptgroup"]]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](2, 0, [" ", " "]))], function (_ck, _v) {
          var currVal_8 = _v.context.$implicit.name_complete_potential_type;

          _ck(_v, 1, 0, currVal_8);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._getTabIndex();

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).selected;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).multiple;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).active;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).id;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1)._getAriaSelected();

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).disabled.toString();

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 1).disabled;

          _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

          var currVal_9 = _v.context.$implicit.name_complete_potential_type;

          _ck(_v, 2, 0, currVal_9);
        });
      }

      function View_CompararComponent_37(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 7, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 6, "mat-checkbox", [["class", "example-margin mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ngModelChange" === en) {
            var pd_0 = (_co.elementosConstructivosMostradosElementos[_v.context.$implicit.id]["check"] = $event) !== false;
            ad = pd_0 && ad;
          }

          if ("change" === en) {
            var pd_1 = _co.elementoSeleccionadoElementos(_v.context.$implicit.id) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_checkbox_index_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_index_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 12763136, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MAT_CHECKBOX_DEFAULT_OPTIONS"]]], {
          disabled: [0, "disabled"]
        }, {
          change: "change"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]]], {
          isDisabled: [0, "isDisabled"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](7, 0, ["", ""]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_14 = _co.elementosConstructivosMostradosElementos[_v.context.$implicit.id]["habilitado"];

          _ck(_v, 2, 0, currVal_14);

          var currVal_15 = _co.elementosConstructivosMostradosElementos[_v.context.$implicit.id]["habilitado"];
          var currVal_16 = _co.elementosConstructivosMostradosElementos[_v.context.$implicit.id]["check"];

          _ck(_v, 4, 0, currVal_15, currVal_16);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 2).id;

          var currVal_1 = null;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 2).indeterminate;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 2).checked;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 2).disabled;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 2).labelPosition == "before";
          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).ngClassUntouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).ngClassTouched;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).ngClassPristine;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).ngClassDirty;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).ngClassValid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).ngClassInvalid;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 6).ngClassPending;

          _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]);

          var currVal_17 = _co.elementosConstructivosMostradosElementos[_v.context.$implicit.id]["nombre"];

          _ck(_v, 7, 0, currVal_17);
        });
      }

      function View_CompararComponent_38(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], null, null);
      }

      function View_CompararComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 1, {
          container: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 2, {
          containerBarGrafica: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 3, {
          containerGraficaT: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 4, {
          containerGraficas: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 5, {
          containerGraficasDos: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 6, {
          containerElementosCiclo: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 7, {
          containerDispercionImpacto: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 8, {
          containerImgEdificio: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 9, {
          childBar: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 10, {
          childPie: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 11, {
          childRadar: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](671088640, 12, {
          childBarSimple: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](12, 0, null, null, 254, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](13, 0, null, null, 10, "div", [["class", "sectionOne"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](14, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.returnHome() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](15, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](16, 0, null, 0, 2, "mat-icon", [["class", "excepction mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](17, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["keyboard_arrow_left"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](19, 0, null, null, 1, "a", [["class", "return-proyecto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["regresar a proyectos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](21, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](22, 0, null, null, 1, "a", [["class", "tittle-proyect"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](23, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](24, 0, null, null, 14, "div", [["class", "bases-datos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](25, 0, null, null, 1, "p", [["class", "text-duplicados"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Duplicados"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](27, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](28, 0, null, null, 1, "p", [["class", "text-duplicados"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Bases de Datos consideradas"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](30, 0, null, null, 8, "mat-select", [["class", "mat-select"], ["multiple", ""], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("selectionChange" === en) {
            var pd_3 = _co.ajusteUsoBaseDatos($event.value) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](33, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MAT_SELECT_CONFIG"]]], {
          multiple: [0, "multiple"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 13, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 14, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 15, {
          customTrigger: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 1, 1, null, View_CompararComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](39, 0, null, null, 20, "div", [["class", "div-proyectos-mostrados"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](40, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](41, 16777216, null, null, 6, "button", [["aria-haspopup", "true"], ["class", "menu-proyectos mat-focus-indicator mat-menu-trigger"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("mousedown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 43)._handleMousedown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("keydown" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 43)._handleKeydown($event) !== false;
            ad = pd_1 && ad;
          }

          if ("click" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 43)._handleClick($event) !== false;
            ad = pd_2 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](42, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](43, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_32__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"]], {
          menu: [0, "menu"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["Selecciona una opci\xF3n a visualizar "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](45, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](46, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["keyboard_arrow_down"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](48, 0, null, null, 8, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](51, 1294336, [["menu", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 16, {
          _allItems: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 17, {
          items: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 18, {
          lazyContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_CompararComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](56, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](57, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](59, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](60, 0, null, null, 206, "mat-card", [["class", "mat-master mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](61, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](62, 0, null, 0, 204, "mat-tab-group", [["class", "container-principal-tab mat-tab-group"], ["mat-stretch-tabs", ""]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], [[null, "selectedIndexChange"], [null, "animationDone"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("selectedIndexChange" === en) {
            var pd_0 = _co.show($event) !== false;
            ad = pd_0 && ad;
          }

          if ("animationDone" === en) {
            var pd_1 = _co.finShow() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](63, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, {
          selectedIndexChange: "selectedIndexChange",
          animationDone: "animationDone"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 19, {
          _allTabs: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabGroup"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](66, 16777216, null, null, 102, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](67, 770048, [[19, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MAT_TAB_GROUP"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 20, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](335544320, 21, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_CompararComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](71, 16384, [[20, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](72, 0, null, 0, 47, "div", [["class", "div-impactos-ambientales"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](73, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Impactos ambientales"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](75, 0, null, null, 44, "div", [["class", "sub-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](76, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](77, 0, null, null, 14, "mat-button-toggle-group", [["class", "mat-button-toggle-group"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](80, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 22, {
          _buttonToggles: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](82, 0, null, null, 4, "mat-button-toggle", [["class", "button-impactos mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 83).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.TablaResultados() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](83, 245760, [[22, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](84, 0, null, 0, 2, "mat-icon", [["class", "icons-options mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](85, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["table_view"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](87, 0, null, null, 4, "mat-button-toggle", [["class", "button-impactos mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 88).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.GraficasResultados() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](88, 245760, [[22, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](89, 0, null, 0, 2, "mat-icon", [["class", "icons-options mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](90, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["bar_chart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](92, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](93, 0, null, null, 10, "mat-button-toggle-group", [["class", "mat-button-toggle-group"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](96, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 23, {
          _buttonToggles: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](98, 0, null, null, 2, "mat-button-toggle", [["class", "button-impactos mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 99).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.porcentaje(true, 1) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](99, 245760, [[23, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], {
          disabled: [0, "disabled"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](101, 0, null, null, 2, "mat-button-toggle", [["class", "button-impactos mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 102).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.porcentaje(false, 1) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](102, 245760, [[23, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], {
          disabled: [0, "disabled"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](104, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](105, 0, null, null, 14, "mat-button-toggle-group", [["class", "mat-button-toggle-group"], ["role", "group"]], [[1, "aria-disabled", 0], [2, "mat-button-toggle-vertical", null], [2, "mat-button-toggle-group-appearance-standard", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroupMultiple"], null, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](108, 1130496, null, 1, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 24, {
          _buttonToggles: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](110, 0, null, null, 4, "mat-button-toggle", [["class", "button-impactos mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 111).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.AjustePorMetro(1) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](111, 245760, [[24, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](112, 0, null, 0, 2, "mat-icon", [["class", "icons-options mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](113, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["border_all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](115, 0, null, null, 4, "mat-button-toggle", [["class", "button-impactos mat-button-toggle"]], [[2, "mat-button-toggle-standalone", null], [2, "mat-button-toggle-checked", null], [2, "mat-button-toggle-disabled", null], [2, "mat-button-toggle-appearance-standard", null], [1, "tabindex", 0], [1, "id", 0], [1, "name", 0]], [[null, "click"], [null, "focus"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("focus" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 116).focus() !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _co.AjustePorMetro(0) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatButtonToggle_0"], _node_modules_angular_material_button_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatButtonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](116, 245760, [[24, 4]], 0, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggle"], [[2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleGroup"]], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [8, null], [2, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](117, 0, null, 0, 2, "mat-icon", [["class", "icons-options mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](118, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["branding_watermark"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](120, 0, null, 0, 4, "div", [["class", "campo-grafica-bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, [[1, 3], ["barContainer", 2]], null, 0, null, View_CompararComponent_5)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](122, 0, null, null, 2, "div", [["class", "indicadores"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](124, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_CompararComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](126, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](127, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](128, 0, null, null, 1, "p", [["class", "secondary-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Dispersi\xF3n de Impacto ambiental por fase de ciclo de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](130, 0, null, 0, 38, "div", [["class", "div-secondary-graph"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](131, 0, null, null, 35, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](132, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Selecciona una fase del ciclo de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](134, 0, null, null, 32, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](135, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](136, 0, null, null, 2, "button", [["class", "boton-principal mat-focus-indicator"], ["id", "Producci\xF3n"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.grafica("Producci\xF3n") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](137, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, [" Producci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](139, 0, null, null, 3, "button", [["class", "boton-icono"], ["id", "Producci\xF3nOjo"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.ajusteDeGraficaFASE("Producci\xF3n") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](140, 0, null, null, 2, "mat-icon", [["class", "uno mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](141, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](142, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](143, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](144, 0, null, null, 2, "button", [["class", "boton-principal mat-focus-indicator"], ["id", "Construccion"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.grafica("Construccion") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](145, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, [" Construcci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](147, 0, null, null, 3, "button", [["class", "boton-icono"], ["id", "ConstruccionOjo"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.ajusteDeGraficaFASE("Construccion") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](148, 0, null, null, 2, "mat-icon", [["class", "dos mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](149, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](150, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](151, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](152, 0, null, null, 2, "button", [["class", "boton-principal mat-focus-indicator"], ["id", "Uso"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.grafica("Uso") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](153, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, [" Uso"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](155, 0, null, null, 3, "button", [["class", "boton-icono"], ["id", "UsoOjo"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.ajusteDeGraficaFASE("Uso") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](156, 0, null, null, 2, "mat-icon", [["class", "tres mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](157, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](158, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](159, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](160, 0, null, null, 2, "button", [["class", "boton-principal mat-focus-indicator"], ["id", "FinDeVida"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.grafica("FinDeVida") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](161, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, [" Fin de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](163, 0, null, null, 3, "button", [["class", "boton-icono"], ["id", "FinDeVidaOjo"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.ajusteDeGraficaFASE("FinDeVida") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](164, 0, null, null, 2, "mat-icon", [["class", "cuatro mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](165, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](166, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](167, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, [[4, 3], ["GraficasEspecificas", 2]], null, 0, null, View_CompararComponent_13)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](169, 16777216, null, null, 24, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](170, 770048, [[19, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MAT_TAB_GROUP"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 32, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](335544320, 33, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_CompararComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](174, 16384, [[32, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](175, 0, null, 0, 10, "div", [["class", "div-second-tab"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, [[2, 3], ["barGraphDos", 2]], null, 0, null, View_CompararComponent_15)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](177, 0, null, null, 2, "div", [["class", "indicadores"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](179, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](180, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" Elementos constructivos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](182, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](183, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](185, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](186, 0, null, 0, 4, "div", [["class", "espacio-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](188, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](189, 0, null, null, 1, "div", [["class", "child"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, [[8, 3], ["imgEdificio", 2]], null, 0, null, View_CompararComponent_20)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](191, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](193, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](194, 16777216, null, null, 72, "mat-tab", [], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](195, 770048, [[19, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MAT_TAB_GROUP"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 51, {
          templateLabel: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](335544320, 52, {
          _explicitContent: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_CompararComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](199, 16384, [[51, 4]], 0, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](200, 0, null, 0, 66, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](201, 0, null, null, 64, "div", [["class", "div-elementos-constructivos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](202, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](203, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Selecciona impacto ambiental"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](205, 0, null, null, 13, "mat-select", [["class", "select-impacto-ambiental mat-select"], ["required", ""], ["role", "listbox"]], [[1, "required", 0], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "selectionChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("keydown" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._handleKeydown($event) !== false;
            ad = pd_0 && ad;
          }

          if ("focus" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._onFocus() !== false;
            ad = pd_1 && ad;
          }

          if ("blur" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._onBlur() !== false;
            ad = pd_2 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_3 = (_co.selectedValue = $event) !== false;
            ad = pd_3 && ad;
          }

          if ("selectionChange" === en) {
            var pd_4 = _co.selectImpactoAmbiental() !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatSelect_0"], _node_modules_angular_material_select_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](208, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["RequiredValidator"], [], {
          required: [0, "required"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](210, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALIDATORS"]], [8, null], [8, null]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](212, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_31__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["LiveAnnouncer"], [2, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MAT_SELECT_CONFIG"]]], {
          required: [0, "required"]
        }, {
          selectionChange: "selectionChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 53, {
          options: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 54, {
          optionGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵqud"](603979776, 55, {
          customTrigger: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](216, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 1, 1, null, View_CompararComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](218, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](219, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](220, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Elementos constructivos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](222, 0, null, null, 2, "section", [["class", "example-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CompararComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](224, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](225, 0, null, null, 40, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](226, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Fases del ciclo de vida"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](228, 0, null, null, 24, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](229, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](230, 0, null, null, 6, "button", [["class", "button-info mat-focus-indicator"], ["id", "Producci\xF3nTextoElemento"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectEtapa("Producci\xF3n") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](231, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](232, 0, null, 0, 4, "div", [["class", "some-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](233, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["Producci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](235, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" A1 - A3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](237, 0, null, null, 3, "button", [["class", "button-icon"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.eliminarEtapa("Producci\xF3n") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](238, 0, null, null, 2, "mat-icon", [["class", "uno mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](239, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](240, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](241, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](242, 0, null, null, 6, "button", [["class", "button-info mat-focus-indicator"], ["id", "ConstruccionTextoElemento"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectEtapa("Construccion") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](243, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](244, 0, null, 0, 4, "div", [["class", "some-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](245, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["A4 - Transporte"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](247, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" de materiales "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](249, 0, null, null, 3, "button", [["class", "button-icon"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.eliminarEtapa("Construccion") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](250, 0, null, null, 2, "mat-icon", [["class", "dos mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](251, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](252, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](253, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](254, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](255, 0, null, null, 6, "button", [["class", "button-info mat-focus-indicator"], ["id", "UsoTextoElemento"], ["mat-stroked-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.selectEtapa("Uso") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](256, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](257, 0, null, 0, 4, "div", [["class", "some-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](258, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["B4 - Reemplazos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](260, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" de materiales "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](262, 0, null, null, 3, "button", [["class", "button-icon"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.eliminarEtapa("Uso") !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](263, 0, null, null, 2, "mat-icon", [["class", "tres mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](264, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](265, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, [[3, 3], ["barGraphTres", 2]], null, 0, null, View_CompararComponent_38))], function (_ck, _v) {
          var _co = _v.component;

          _ck(_v, 17, 0);

          var currVal_20 = "";

          _ck(_v, 33, 0, currVal_20);

          var currVal_21 = _co.DBList;

          _ck(_v, 38, 0, currVal_21);

          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 51);

          _ck(_v, 43, 0, currVal_26);

          _ck(_v, 46, 0);

          _ck(_v, 51, 0);

          var currVal_29 = _co.proyect;

          _ck(_v, 56, 0, currVal_29);

          var currVal_30 = _co.proyectosMostrados;

          _ck(_v, 59, 0, currVal_30);

          _ck(_v, 67, 0);

          _ck(_v, 80, 0);

          _ck(_v, 83, 0);

          _ck(_v, 85, 0);

          _ck(_v, 88, 0);

          _ck(_v, 90, 0);

          _ck(_v, 96, 0);

          var currVal_65 = _co.botones_grafica_activos;

          _ck(_v, 99, 0, currVal_65);

          var currVal_73 = _co.botones_grafica_activos;

          _ck(_v, 102, 0, currVal_73);

          _ck(_v, 108, 0);

          _ck(_v, 111, 0);

          _ck(_v, 113, 0);

          _ck(_v, 116, 0);

          _ck(_v, 118, 0);

          var currVal_95 = _co.catologoImpactoAmbiental;

          _ck(_v, 124, 0, currVal_95);

          var currVal_96 = _co.resultdosTabla;

          _ck(_v, 126, 0, currVal_96);

          _ck(_v, 141, 0);

          _ck(_v, 149, 0);

          _ck(_v, 157, 0);

          _ck(_v, 165, 0);

          _ck(_v, 170, 0);

          var currVal_117 = _co.catologoImpactoAmbiental;

          _ck(_v, 179, 0, currVal_117);

          var currVal_119 = _co.cargaElementos;

          _ck(_v, 185, 0, currVal_119);

          var currVal_120 = _co.outproyect_bar;

          _ck(_v, 188, 0, currVal_120);

          var currVal_121 = _co.show_Dispercion;

          _ck(_v, 193, 0, currVal_121);

          _ck(_v, 195, 0);

          var currVal_145 = "";

          _ck(_v, 208, 0, currVal_145);

          var currVal_146 = _co.selectedValue;

          _ck(_v, 210, 0, currVal_146);

          var currVal_147 = "";

          _ck(_v, 212, 0, currVal_147);

          var currVal_148 = _co.catologoImpactoAmbiental;

          _ck(_v, 218, 0, currVal_148);

          var currVal_149 = _co.botones_elementos_constructivos;

          _ck(_v, 224, 0, currVal_149);

          _ck(_v, 239, 0);

          _ck(_v, 251, 0);

          _ck(_v, 264, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).disabled || null;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15)._animationMode === "NoopAnimations";

          _ck(_v, 14, 0, currVal_0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 17).inline;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 17).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 17).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 17).color !== "warn";

          _ck(_v, 16, 0, currVal_2, currVal_3);

          var currVal_4 = _co.proyecto.nombre;

          _ck(_v, 23, 0, currVal_4);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).id;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).tabIndex;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._getAriaLabel();

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._getAriaLabelledby();

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).required.toString();

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).disabled.toString();

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).errorState;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._optionIds : null;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).multiple;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._ariaDescribedby || null;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33)._getAriaActiveDescendant();

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).disabled;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).errorState;

          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).required;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 33).empty;

          _ck(_v, 30, 1, [currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]);

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 42).disabled || null;
          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 42)._animationMode === "NoopAnimations";
          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 43).menuOpen || null;
          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 43).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 43).menu.panelId : null;

          _ck(_v, 41, 0, currVal_22, currVal_23, currVal_24, currVal_25);

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 46).inline;

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 46).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 46).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 46).color !== "warn";

          _ck(_v, 45, 0, currVal_27, currVal_28);

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 61)._animationMode === "NoopAnimations";

          _ck(_v, 60, 0, currVal_31);

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 63).dynamicHeight;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 63).headerPosition === "below";

          _ck(_v, 62, 0, currVal_32, currVal_33);

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 80).disabled;

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 80).vertical;

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 80).appearance === "standard";

          _ck(_v, 77, 0, currVal_34, currVal_35, currVal_36);

          var currVal_37 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 83).buttonToggleGroup;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 83).checked;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 83).disabled;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 83).appearance === "standard";
          var currVal_41 = 0 - 1;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 83).id;

          var currVal_43 = null;

          _ck(_v, 82, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43);

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 85).inline;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 85).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 85).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 85).color !== "warn";

          _ck(_v, 84, 0, currVal_44, currVal_45);

          var currVal_46 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 88).buttonToggleGroup;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 88).checked;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 88).disabled;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 88).appearance === "standard";
          var currVal_50 = 0 - 1;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 88).id;

          var currVal_52 = null;

          _ck(_v, 87, 0, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52);

          var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 90).inline;

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 90).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 90).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 90).color !== "warn";

          _ck(_v, 89, 0, currVal_53, currVal_54);

          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 96).disabled;

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 96).vertical;

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 96).appearance === "standard";

          _ck(_v, 93, 0, currVal_55, currVal_56, currVal_57);

          var currVal_58 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 99).buttonToggleGroup;

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 99).checked;

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 99).disabled;

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 99).appearance === "standard";
          var currVal_62 = 0 - 1;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 99).id;

          var currVal_64 = null;

          _ck(_v, 98, 0, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64);

          var currVal_66 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 102).buttonToggleGroup;

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 102).checked;

          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 102).disabled;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 102).appearance === "standard";
          var currVal_70 = 0 - 1;

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 102).id;

          var currVal_72 = null;

          _ck(_v, 101, 0, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72);

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 108).disabled;

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 108).vertical;

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 108).appearance === "standard";

          _ck(_v, 105, 0, currVal_74, currVal_75, currVal_76);

          var currVal_77 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 111).buttonToggleGroup;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 111).checked;

          var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 111).disabled;

          var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 111).appearance === "standard";
          var currVal_81 = 0 - 1;

          var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 111).id;

          var currVal_83 = null;

          _ck(_v, 110, 0, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83);

          var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 113).inline;

          var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 113).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 113).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 113).color !== "warn";

          _ck(_v, 112, 0, currVal_84, currVal_85);

          var currVal_86 = !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 116).buttonToggleGroup;

          var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 116).checked;

          var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 116).disabled;

          var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 116).appearance === "standard";
          var currVal_90 = 0 - 1;

          var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 116).id;

          var currVal_92 = null;

          _ck(_v, 115, 0, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92);

          var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 118).inline;

          var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 118).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 118).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 118).color !== "warn";

          _ck(_v, 117, 0, currVal_93, currVal_94);

          var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 137).disabled || null;
          var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 137)._animationMode === "NoopAnimations";

          _ck(_v, 136, 0, currVal_97, currVal_98);

          var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 141).inline;

          var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 141).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 141).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 141).color !== "warn";

          _ck(_v, 140, 0, currVal_99, currVal_100);

          var currVal_101 = _co.iconos["Producci\xF3n"];

          _ck(_v, 142, 0, currVal_101);

          var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 145).disabled || null;
          var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 145)._animationMode === "NoopAnimations";

          _ck(_v, 144, 0, currVal_102, currVal_103);

          var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 149).inline;

          var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 149).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 149).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 149).color !== "warn";

          _ck(_v, 148, 0, currVal_104, currVal_105);

          var currVal_106 = _co.iconos["Construccion"];

          _ck(_v, 150, 0, currVal_106);

          var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 153).disabled || null;
          var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 153)._animationMode === "NoopAnimations";

          _ck(_v, 152, 0, currVal_107, currVal_108);

          var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 157).inline;

          var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 157).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 157).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 157).color !== "warn";

          _ck(_v, 156, 0, currVal_109, currVal_110);

          var currVal_111 = _co.iconos["Uso"];

          _ck(_v, 158, 0, currVal_111);

          var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 161).disabled || null;
          var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 161)._animationMode === "NoopAnimations";

          _ck(_v, 160, 0, currVal_112, currVal_113);

          var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 165).inline;

          var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 165).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 165).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 165).color !== "warn";

          _ck(_v, 164, 0, currVal_114, currVal_115);

          var currVal_116 = _co.iconos["FinDeVida"];

          _ck(_v, 166, 0, currVal_116);

          var currVal_118 = _co.impactoSeleccionadoElementoConstructivo;

          _ck(_v, 183, 0, currVal_118);

          var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 208).required ? "" : null;

          var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).id;

          var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).tabIndex;

          var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._getAriaLabel();

          var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._getAriaLabelledby();

          var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).required.toString();

          var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).disabled.toString();

          var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).errorState;

          var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._optionIds : null;

          var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).multiple;

          var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._ariaDescribedby || null;

          var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212)._getAriaActiveDescendant();

          var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).disabled;

          var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).errorState;

          var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).required;

          var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 212).empty;

          var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 216).ngClassUntouched;

          var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 216).ngClassTouched;

          var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 216).ngClassPristine;

          var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 216).ngClassDirty;

          var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 216).ngClassValid;

          var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 216).ngClassInvalid;

          var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 216).ngClassPending;

          _ck(_v, 205, 1, [currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144]);

          var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 231).disabled || null;
          var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 231)._animationMode === "NoopAnimations";

          _ck(_v, 230, 0, currVal_150, currVal_151);

          var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 239).inline;

          var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 239).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 239).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 239).color !== "warn";

          _ck(_v, 238, 0, currVal_152, currVal_153);

          var currVal_154 = _co.iconosCambioElementos["Producci\xF3n"];

          _ck(_v, 240, 0, currVal_154);

          var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 243).disabled || null;
          var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 243)._animationMode === "NoopAnimations";

          _ck(_v, 242, 0, currVal_155, currVal_156);

          var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 251).inline;

          var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 251).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 251).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 251).color !== "warn";

          _ck(_v, 250, 0, currVal_157, currVal_158);

          var currVal_159 = _co.iconosCambioElementos["Construccion"];

          _ck(_v, 252, 0, currVal_159);

          var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 256).disabled || null;
          var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 256)._animationMode === "NoopAnimations";

          _ck(_v, 255, 0, currVal_160, currVal_161);

          var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 264).inline;

          var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 264).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 264).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 264).color !== "warn";

          _ck(_v, 263, 0, currVal_162, currVal_163);

          var currVal_164 = _co.iconosCambioElementos["Uso"];

          _ck(_v, 265, 0, currVal_164);
        });
      }

      function View_CompararComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 1, "app-comparar", [], null, null, null, View_CompararComponent_0, RenderType_CompararComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 114688, null, 0, _comparar_component__WEBPACK_IMPORTED_MODULE_35__["CompararComponent"], [_core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_36__["MaterialsService"], _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_37__["ProjectsService"], _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_38__["AnalisisService"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["Router"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_40__["UserService"], _calculos_calculos__WEBPACK_IMPORTED_MODULE_41__["Calculos"], _calculos_calculos_segunda_seccion__WEBPACK_IMPORTED_MODULE_42__["CalculosSegundaSeccion"], _calculos_calculos_tercer_seccion__WEBPACK_IMPORTED_MODULE_43__["CalculosTercerSeccion"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CompararComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵccf"]("app-comparar", _comparar_component__WEBPACK_IMPORTED_MODULE_35__["CompararComponent"], View_CompararComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "vpWx":
    /*!**************************************************************************!*\
      !*** ./src/app/comparar/component/comparar/styleST.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function vpWx(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".div-elementos-constructivos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: space-around;\n  height: 150px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  width: 240px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   p[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 393px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   p[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 350px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   p[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   li[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 5px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .button-info[_ngcontent-%COMP%] {\n  border-radius: 10px 0px 0px 10px;\n  width: 99px;\n  height: 39px;\n  background: #efefef;\n  border: 0px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .button-info-select[_ngcontent-%COMP%] {\n  border-radius: 10px 0px 0px 10px;\n  width: 102px;\n  height: 39px;\n  background: #ffffff;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   mat-icon.mat-icon.notranslate.material-icons.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  border-radius: 0px 10px 10px 0px;\n  height: 39px;\n  margin-left: 0px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.1px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .button-icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 39px;\n  background: #efefef;\n  border-radius: 0px 10px 10px 0px;\n  border: 0px;\n  padding: 1px;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3)   .some-text[_ngcontent-%COMP%] {\n  float: left;\n  text-align: left;\n  display: grid;\n  grid-template-columns: repeat(1, auto);\n  grid-template-rows: 12px;\n  font-size: 11px;\n  letter-spacing: 0px;\n  color: #767676;\n  opacity: 1;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 12px;\n  letter-spacing: 0px;\n  color: #707070;\n  opacity: 1;\n}\n.div-elementos-constructivos[_ngcontent-%COMP%]   .select-impacto-ambiental[_ngcontent-%COMP%] {\n  width: 221px;\n  height: 37px;\n  color: #707070;\n  font-size: 12px;\n  background: #ffffff;\n  border-color: #cbcbcb;\n  border-style: solid;\n  border-radius: 10px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVTVC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDTTtFQUNFLFlBQUE7QUFDUjtBQUFRO0VBQ0Usa0JBQUE7QUFFVjtBQUNNO0VBQ0UsWUFBQTtBQUNSO0FBQVE7RUFDRSxrQkFBQTtBQUVWO0FBQ007RUFDRSxZQUFBO0FBQ1I7QUFBUTtFQUNFLGtCQUFBO0FBRVY7QUFBUTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUVWO0FBQVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFVjtBQUFRO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVWO0FBQ1E7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDVjtBQUVRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQVY7QUFFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVY7QUFHUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFEVjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUpOO0FBT0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBTE4iLCJmaWxlIjoic3R5bGVTVC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1lbGVtZW50b3MtY29uc3RydWN0aXZvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICB3aWR0aDogMzkzcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLWluZm8ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogOTlweDtcclxuICAgICAgICAgIGhlaWdodDogMzlweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmJ1dHRvbi1pbmZvLXNlbGVjdCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDJweDtcclxuICAgICAgICAgIGhlaWdodDogMzlweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdGVyaWFsLWljb25zLm1hdC1pY29uLW5vLWNvbG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi1pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5zb21lLXRleHQge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIGF1dG8pO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNlbGVjdC1pbXBhY3RvLWFtYmllbnRhbCB7XHJcbiAgICAgIHdpZHRoOiAyMjFweDtcclxuICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNjYmNiY2I7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"];
      /***/
    },

    /***/
    "vyJP":
    /*!******************************************************************************!*\
      !*** ./src/app/image-edificio/image-edificio.component.scss.shim.ngstyle.js ***!
      \******************************************************************************/

    /*! exports provided: styles */

    /***/
    function vyJP(module, __webpack_exports__, __webpack_require__) {
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


      var styles = [".linea[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.principal_img[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 24px;\n  height: 200px;\n  width: 300px;\n}\n\n.imagen[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.elemento[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGltYWdlLWVkaWZpY2lvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImltYWdlLWVkaWZpY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmVhe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLnByaW5jaXBhbF9pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZW57XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLmVsZW1lbnRve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"];
      /***/
    },

    /***/
    "vzXe":
    /*!****************************************************************!*\
      !*** ./node_modules/@angular/cdk/scrolling/index.ngfactory.js ***!
      \****************************************************************/

    /*! exports provided: CdkScrollableModuleNgFactory, ScrollingModuleNgFactory, RenderType_CdkVirtualScrollViewport, View_CdkVirtualScrollViewport_0, View_CdkVirtualScrollViewport_Host_0, CdkVirtualScrollViewportNgFactory */

    /***/
    function vzXe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkScrollableModuleNgFactory", function () {
        return CdkScrollableModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollingModuleNgFactory", function () {
        return ScrollingModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CdkVirtualScrollViewport", function () {
        return RenderType_CdkVirtualScrollViewport;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CdkVirtualScrollViewport_0", function () {
        return View_CdkVirtualScrollViewport_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CdkVirtualScrollViewport_Host_0", function () {
        return View_CdkVirtualScrollViewport_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewportNgFactory", function () {
        return CdkVirtualScrollViewportNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var CdkScrollableModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], [])]);
      });

      var ScrollingModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"], [])]);
      });

      var styles_CdkVirtualScrollViewport = ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"];

      var RenderType_CdkVirtualScrollViewport = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_CdkVirtualScrollViewport,
        data: {}
      });

      function View_CdkVirtualScrollViewport_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
          _contentWrapper: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["contentWrapper", 1]], null, 1, "div", [["class", "cdk-virtual-scroll-content-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "cdk-virtual-scroll-spacer"]], [[4, "width", null], [4, "height", null]], null, null, null, null))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co._totalContentWidth;
          var currVal_1 = _co._totalContentHeight;

          _ck(_v, 3, 0, currVal_0, currVal_1);
        });
      }

      function View_CdkVirtualScrollViewport_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "cdk-virtual-scroll-viewport", [["class", "cdk-virtual-scroll-viewport"]], [[2, "cdk-virtual-scroll-orientation-horizontal", null], [2, "cdk-virtual-scroll-orientation-vertical", null]], null, null, View_CdkVirtualScrollViewport_0, RenderType_CdkVirtualScrollViewport)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"], null, [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 245760, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIRTUAL_SCROLL_STRATEGY"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]]], null, null)], function (_ck, _v) {
          _ck(_v, 2, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).orientation === "horizontal";
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).orientation !== "horizontal";

          _ck(_v, 0, 0, currVal_0, currVal_1);
        });
      }

      var CdkVirtualScrollViewportNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("cdk-virtual-scroll-viewport", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], View_CdkVirtualScrollViewport_Host_0, {
        orientation: "orientation"
      }, {
        scrolledIndexChange: "scrolledIndexChange"
      }, ["*"]);
      /***/

    },

    /***/
    "zdVm":
    /*!*******************************************************!*\
      !*** ./src/app/comparar/comparar.module.ngfactory.js ***!
      \*******************************************************/

    /*! exports provided: CompararModuleNgFactory */

    /***/
    function zdVm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompararModuleNgFactory", function () {
        return CompararModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _comparar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./comparar.module */
      "cm8W");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../node_modules/@angular/material/dialog/index.ngfactory */
      "9cE2");
      /* harmony import */


      var _component_comparar_comparar_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./component/comparar/comparar.component.ngfactory */
      "vI5e");
      /* harmony import */


      var _bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../bar-chart/bar-chart.component.ngfactory */
      "Z2uH");
      /* harmony import */


      var _radial_chart_radial_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../radial-chart/radial-chart.component.ngfactory */
      "Ox0D");
      /* harmony import */


      var _pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pie-chart/pie-chart.component.ngfactory */
      "uUPV");
      /* harmony import */


      var _bar_chart_simple_bar_chart_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../bar-chart-simple/bar-chart-simple.component.ngfactory */
      "OGnt");
      /* harmony import */


      var _component_graficas_tercer_seccion_graficas_tercer_seccion_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./component/graficas-tercer-seccion/graficas-tercer-seccion.component.ngfactory */
      "DPO7");
      /* harmony import */


      var _image_edificio_image_edificio_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../image-edificio/image-edificio.component.ngfactory */
      "I7HB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "8sFK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "HeVh");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "q59W");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      "GF+f");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _comparar_routing_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./comparar-routing.module */
      "O9Yt");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _component_comparar_comparar_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./component/comparar/comparar.component */
      "jdSv");
      /* harmony import */


      var _core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ../core/services/materials/materials.service */
      "dxGk");
      /* harmony import */


      var _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ../core/services/projects/projects.service */
      "kqb2");
      /* harmony import */


      var _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ../core/services/analisis/analisis.service */
      "hslW");
      /* harmony import */


      var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ../core/services/user/user.service */
      "9APP");
      /* harmony import */


      var _calculos_calculos__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ../calculos/calculos */
      "MNqV");
      /* harmony import */


      var _calculos_calculos_segunda_seccion__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ../calculos/calculos-segunda-seccion */
      "5MZ9");
      /* harmony import */


      var _calculos_calculos_tercer_seccion__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ../calculos/calculos-tercer-seccion */
      "fIzW");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var CompararModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_comparar_module__WEBPACK_IMPORTED_MODULE_1__["CompararModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _component_comparar_comparar_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CompararComponentNgFactory"], _bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["BarChartComponentNgFactory"], _radial_chart_radial_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RadialChartComponentNgFactory"], _pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["PieChartComponentNgFactory"], _bar_chart_simple_bar_chart_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["BarChartSimpleComponentNgFactory"], _component_graficas_tercer_seccion_graficas_tercer_seccion_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["GraficasTercerSeccionComponentNgFactory"], _image_edificio_image_edificio_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ImageEdificioComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_34__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_36__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_36__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_41__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_42__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_42__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_44__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_44__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_45__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_45__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _material_material_module__WEBPACK_IMPORTED_MODULE_48__["MaterialModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_48__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _comparar_routing_module__WEBPACK_IMPORTED_MODULE_50__["CompararRoutingModule"], _comparar_routing_module__WEBPACK_IMPORTED_MODULE_50__["CompararRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_51__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_51__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_52__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_52__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _component_comparar_comparar_component__WEBPACK_IMPORTED_MODULE_54__["CompararComponent"], _component_comparar_comparar_component__WEBPACK_IMPORTED_MODULE_54__["CompararComponent"], [_core_services_materials_materials_service__WEBPACK_IMPORTED_MODULE_55__["MaterialsService"], _core_services_projects_projects_service__WEBPACK_IMPORTED_MODULE_56__["ProjectsService"], _core_services_analisis_analisis_service__WEBPACK_IMPORTED_MODULE_57__["AnalisisService"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_58__["UserService"], _calculos_calculos__WEBPACK_IMPORTED_MODULE_59__["Calculos"], _calculos_calculos_segunda_seccion__WEBPACK_IMPORTED_MODULE_60__["CalculosSegundaSeccion"], _calculos_calculos_tercer_seccion__WEBPACK_IMPORTED_MODULE_61__["CalculosTercerSeccion"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _comparar_module__WEBPACK_IMPORTED_MODULE_1__["CompararModule"], _comparar_module__WEBPACK_IMPORTED_MODULE_1__["CompararModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () {
          return [[{
            path: "",
            component: _component_comparar_comparar_component__WEBPACK_IMPORTED_MODULE_54__["CompararComponent"]
          }]];
        }, [])]);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=comparar-comparar-module-ngfactory-es5.js.map