import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNewProjectComponent } from '../add-new-project/add-new-project.component';
import { ChooseTypeOfProjectComponent } from '../choose-type-of-project/choose-type-of-project.component';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { Calculos } from '../../../calculos/calculos';
import { CatalogsService } from './../../../core/services/catalogs/catalogs.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { ChangeNameProjectComponent } from '../change-name-project/change-name-project.component';
import { ConstructionStageService } from 'src/app/core/services/construction-stage/construction-stage.service';
import { EndLifeService } from './../../../core/services/end-life/end-life.service';
import { ElectricitConsumptionService } from './../../../core/services/electricity-consumption/electricit-consumption.service';

@Component({
  selector: 'app-home-evamed',
  templateUrl: './home-evamed.component.html',
  styleUrls: ['./home-evamed.component.scss'],
})
export class HomeEvamedComponent implements OnInit {
  nombre: string;
  filtroUsoSeleccionado: any;
  filtroCatalogoUsos: any;
  catalogoUsos: any;
  catalogoPaises: any;
  catalogoTipo: any;
  catalogoVidaUtil: any;
  catalogoEsqHabitacional: any;
  catalogoEstados: any;
  catalogoCiudades: any;
  usoSeleccionado: number;
  paisSeleccionado: string;
  tipoSeleccionado: string;
  vidaUtilSeleccionado: string;
  esqHabitacionalSeleccionado: string;
  estadoSeleccionado: any;
  ciudadSeleccionada: any;
  superficieConstruida: string;
  superficieHabitable: string;
  noNiveles: string;
  optionSelected: string;
  projectsList: any = 0;
  tempProjectsList: any = 0;
  countProjectList: number;
  user: string;
  sector: string;
  nameProject: string;
  tagProject: string;
  sections: any;
  dataMaterial: any;
  catologoImpactoAmbiental: any;
  auxDataProjectList: any;
  ConstructiveSystemElements: any;
  sourceInformation: any;
  ACR: any;
  ECD: any;
  ECDP: any;

  public doughnutChartType = 'doughnut';
  public pieChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    events: ['click'],
    elements: { arc: { borderWidth: 0 } },
    tooltips: { enabled: false },
    hover: { mode: null },
    plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          size: 8,
        },
      },
    },
  };
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    //tooltips: { enabled: false },
    hover: { mode: null },
    legend: { display: false },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  public pieChartOptions_elementos = {
    elements: { arc: { borderWidth: 0 } },
    tooltips: { enabled: false },
    hover: { mode: null },
    plugins: {
      datalabels: false,
    },
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private calculos: Calculos,
    private projectsService: ProjectsService,
    private catalogsService: CatalogsService,
    private projects: ProjectsService,
    private constructionStageService: ConstructionStageService,
    private users: UserService,
    private endLifeService: EndLifeService,
    private electricitConsumptionService: ElectricitConsumptionService
  ) {
    this.catalogsService.usesCatalog().subscribe((data) => {
      this.catalogoUsos = data;
      this.filtroCatalogoUsos = data;
      this.filtroCatalogoUsos.push({ id: 0, name_use: 'Todos' });
    });

    this.catalogsService.countriesCatalog().subscribe((data) => {
      this.catalogoPaises = [];
      data.map((item) => {
        if (item.id === 1) {
          this.catalogoPaises.push(item);
        }
      });
    });

    this.catalogsService.typeProjectCatalog().subscribe((data) => {
      this.catalogoTipo = data;
    });

    this.catalogsService.usefulLifeCatalog().subscribe((data) => {
      this.catalogoVidaUtil = data;
    });

    this.catalogsService.housingSchemeCatalog().subscribe((data) => {
      this.catalogoEsqHabitacional = data;
    });

    this.catalogsService.getPotentialTypes().subscribe((data) => {
      this.catologoImpactoAmbiental = this.calculos.FiltradoDeImpactos(data);
    });

    this.catalogsService.getSections().subscribe((sections) => {
      this.sections = sections;
    });

    this.projectsService
      .getMaterialSchemeProyect()
      .subscribe((dataMaterial) => {
        this.dataMaterial = dataMaterial;
      });

    this.users
      .searchUser(localStorage.getItem('email-login'))
      .subscribe((data) => {
        this.user = data[0].name;
        this.sector = data[0].institution;
        localStorage.setItem('email-id', data[0].id);
        this.projectsList = [];
        this.auxDataProjectList = [];

        this.projects.getProjects().subscribe((data) => {
          data.map((item) => {
            if (
              item.user_platform_id ===
              parseInt(localStorage.getItem('email-id'), 10)
            ) {
              let calculosOperacionesDeFase = null;

              calculosOperacionesDeFase = this.calculos.OperacionesDeFase(
                item.id
              );

              let auxDatos: Record<string, any> = {
                id: item.id,
                datos: this.calculos.OperacionesDeFase(item.id),
                etapasIgnoradas: [],
                porcentaje: this.calculos.ValoresProcentaje(
                  calculosOperacionesDeFase,
                  []
                ),
                porcentajeSubepata: this.calculos.ValoresProcentajeSubeapa(
                  calculosOperacionesDeFase,
                  []
                ),
                banderaEtapa: false,
                etapaSeleccionada: 'Ninguna',
                subetasMostrada: [{ abreviacion: 'nada', color: '#FFFFFF' }],
                impactoCompleteSelect:
                  this.catologoImpactoAmbiental[0][
                    'name_complete_potential_type'
                  ],
                impactoSelect: this.calculos.ajustarNombre(
                  this.catologoImpactoAmbiental[0][
                    'name_complete_potential_type'
                  ]
                ),
                unit_impacto:
                  this.catologoImpactoAmbiental[0]['unit_potential_type'],
                TipoGraficaActiva: { Pie: true, Bar: false },
                idsTextBotones: {
                  Producción: 'ProducciónTInfo'.concat(String(item.id)),
                  Construccion: 'ConstruccionTInfo'.concat(String(item.id)),
                  Uso: 'UsoTInfo'.concat(String(item.id)),
                  FinDeVida: 'FinDeVidaTInfo'.concat(String(item.id)),
                },
                idsBotones: {
                  Producción: 'ProducciónTextInfo'.concat(String(item.id)),
                  Construccion: 'ConstruccionTextInfo'.concat(String(item.id)),
                  Uso: 'UsoTextInfo'.concat(String(item.id)),
                  FinDeVida: 'FinDeVidaTextInfo'.concat(String(item.id)),
                },
                iconosCambio: {
                  Producción: 'visibility_off',
                  Construccion: 'visibility_off',
                  Uso: 'visibility_off',
                  FinDeVida: 'visibility_off',
                },
                dataGraficaPieUso: this.DataPieUso(this.serchUseData(item.id)),
                dataGraficaBar: this.cargarDataBar(
                  this.calculos.ValoresProcentajeSubeapa(
                    this.calculos.OperacionesDeFase(item.id),
                    []
                  ),
                  this.calculos.ajustarNombre(
                    this.catologoImpactoAmbiental[0][
                      'name_complete_potential_type'
                    ]
                  ),
                  []
                ),
                dataGraficaPie: this.cargaDataPie(
                  this.calculos.ValoresProcentajeSubeapa(
                    this.calculos.OperacionesDeFase(item.id),
                    []
                  ),
                  this.calculos.ajustarNombre(
                    this.catologoImpactoAmbiental[0][
                      'name_complete_potential_type'
                    ]
                  ),
                  []
                ),
              };

              this.auxDataProjectList.push(auxDatos);
              this.projectsList.push(item);
            }
            this.countProjectList = this.projectsList.length;
          });
          this.auxDataProjectList.reverse();
          this.projectsList.reverse();
          this.tempProjectsList = this.projectsList;
        });
      });

    this.catalogsService.getStates().subscribe((data) => {
      this.catalogoEstados = data;
    });

    this.constructionStageService
      .getConstructiveSystemElement()
      .subscribe((data) => {
        const CSE = [];
        data.map((item) => {
          CSE.push(item);
        });
        this.ConstructiveSystemElements = CSE;
      });

    this.catalogsService
      .getSourceInformation()
      .subscribe((sourceInformation) => {
        this.sourceInformation = sourceInformation;
      });

    this.electricitConsumptionService.getACR().subscribe((data) => {
      const ACR = [];
      data.map((item) => {
        ACR.push(item);
      });
      this.ACR = ACR;
    });

    this.electricitConsumptionService.getECD().subscribe((data) => {
      const ECD = [];
      data.map((item) => {
        ECD.push(item);
      });
      this.ECD = ECD;
    });

    this.endLifeService.getECDP().subscribe((data) => {
      this.ECDP = data;
    });
  }

  ngOnInit(): void {}

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  serchSections(projectId) {
    let sectionsExist = [];

    try {
      this.sections.map((section) => {
        this.dataMaterial.map((material) => {
          if (
            material.project_id === projectId &&
            material.section_id === section.id
          ) {
            sectionsExist.push(section);
          }
        });
      });
    } catch (e) {
      console.log(e);
    }

    return sectionsExist.filter(this.onlyUnique);
  }

  serchSC(projectId, scId) {
    let listSC = [];

    try {
      this.sections.map((section) => {
        this.dataMaterial.map((material) => {
          if (
            material.project_id === projectId &&
            material.section_id === section.id &&
            section.id === scId
          ) {
            listSC.push(material.construction_system);
          }
        });
      });
    } catch (e) {
      console.log(e);
    }

    return listSC.filter(this.onlyUnique);
  }

  serchConstructiveSection(projectId) {
    let sectionsExist = [];
    try {
      this.sections.map((section) => {
        this.ConstructiveSystemElements.map((cs) => {
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

  serchEndLifeSection(projectId) {
    let sectionsExist = [];
    try {
      this.sections.map((section) => {
        this.ECDP.map((ecpd) => {
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

  serchDetailConstruction(projectId, scId) {
    let list = [];

    try {
      this.sections.map((section) => {
        this.ConstructiveSystemElements.map((cs) => {
          if (
            cs.project_id === projectId &&
            cs.section_id === section.id &&
            section.id === scId
          ) {
            this.sourceInformation.map((si) => {
              if (si.id === cs.source_information_id) {
                list.push({
                  quantity: cs.quantity,
                  source_information: si.name_source_information,
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

  serchUseData(projectId) {
    let dataList = [];
    try {
      this.ACR.map((data) => {
        if (projectId === data.project_id) {
          this.ECD.map((data2) => {
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

  DataPieUso(data) {
    let aux = [];
    let auxdata = [];

    data.forEach((element) => {
      aux.push(element['quantity']);
    });

    auxdata = [
      {
        data: aux,
        backgroundColor: ['#DFDFDF', '#767676', '#C3C3C3'],
      },
    ];

    return auxdata;
  }

  selectUse(id) {
    this.projectsList = [];
    this.tempProjectsList.map((item) => {
      if (item.use_id === id) {
        this.projectsList.push(item);
      }

      if (id === 0) {
        this.projectsList.push(item);
      }
    });
    this.projectsList.reverse();
  }

  openDialogCTOP() {
    const dialogRef = this.dialog.open(ChooseTypeOfProjectComponent, {
      width: '900px',
      data: {
        optionSelected: 'Huella de carbono',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      try {
        this.optionSelected = result.optionSelected;
        this.router.navigateByUrl('do-files');
      } catch (e) {
        console.log('close modal');
      }
    });
  }

  deleteProject(id) {
    this.projects.deleteProject(id).subscribe((data) => {
      this.users
        .searchUser(localStorage.getItem('email-login'))
        .subscribe((data) => {
          localStorage.setItem('email-id', data[0].id);
          this.projectsList = [];
          this.projects.getProjects().subscribe((data) => {
            data.map((item) => {
              if (
                item.user_platform_id ===
                parseInt(localStorage.getItem('email-id'), 10)
              ) {
                this.projectsList.push(item);
              }
              this.countProjectList = this.projectsList.length;
            });
            this.projectsList.reverse();
          });
        });
    });
  }

  renameProject(id) {
    const dialogRef = this.dialog.open(ChangeNameProjectComponent, {
      width: '680px',
      data: {
        nameProject: this.nameProject,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.projectsService.getProjectById(id).subscribe((data: any) => {
        this.projectsService
          .updateProduct(id, {
            id,
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
            city_id_origin: data.city_id_origin,
          })
          .subscribe((data2) => {
            console.log(data2);
            location.reload();
          });
      });
    });
  }

  duplicateProject(projectId) {
    this.projectsService
      .getProjectById(projectId)
      .subscribe((projectData: any) => {
        this.projectsService
          .addProject({
            name_project: `${projectData.name_project} - Copy`,
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
            unit_text: projectData.unit_text,
            description_material: projectData.description_material,
            distance: null,
          })
          .subscribe((newProjectData) => {
            localStorage.setItem('newProjectDataId', newProjectData.id);
            // Duplicar construcción
            this.ConstructiveSystemElements.map((cs) => {
              if (cs.project_id === projectId) {
                this.constructionStageService
                  .addConstructiveSistemElement({
                    quantity: cs.quantity,
                    project_id: newProjectData.id,
                    section_id: cs.section_id,
                    constructive_process_id: cs.constructive_process_id,
                    volume_unit_id: cs.volume_unit_id,
                    energy_unit_id: cs.energy_unit_id,
                    bulk_unit_id: cs.bulk_unit_id,
                    source_information_id: cs.source_information_id,
                  })
                  .subscribe((dataResultConstruction) => {
                    console.log('resultado de construcción');
                    console.log(dataResultConstruction);
                    // Duplicar Producción
                    this.dataMaterial.map((material) => {
                      if (material.project_id === projectId) {
                        this.projectsService
                          .addSchemeProject({
                            construction_system: material.construction_system,
                            comercial_name: material.comercial_name,
                            quantity: material.quantity,
                            provider_distance: material.provider_distance,
                            material_id: material.material_id,
                            project_id: newProjectData.id,
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
                          })
                          .subscribe((dataResulMaterial) => {
                            console.log('resultado de materiales');
                            console.log(dataResulMaterial);
                          });
                      }
                    });
                  });
              }
            }).then(
              this.electricitConsumptionService
                .getACR()
                .subscribe((dataAllACR) => {
                  dataAllACR.map((acr) => {
                    if (acr.project_id === projectId) {
                      // Duplicar Uso
                      this.electricitConsumptionService
                        .addACR({
                          project_id: parseInt(
                            localStorage.getItem('newProjectDataId')
                          ),
                          quantity: acr.quantity,
                          unit_id: acr.unit_id,
                        })
                        .subscribe((dataNewACR) => {
                          console.log('Resultado de add NewACR');
                          console.log(dataNewACR);
                          this.electricitConsumptionService
                            .getECD()
                            .subscribe((dataAllECD) => {
                              dataAllECD.map((ecd) => {
                                if (
                                  ecd.annual_consumption_required_id === acr.id
                                ) {
                                  this.electricitConsumptionService
                                    .addECD({
                                      quantity: ecd.quantity,
                                      percentage: ecd.percentage,
                                      source: ecd.source,
                                      annual_consumption_required_id:
                                        dataNewACR.id,
                                      unit_id: ecd.unit_id,
                                      type: ecd.type,
                                    })
                                    .subscribe((dataNewECD) => {
                                      console.log('Resultado de add New ECD');
                                      console.log(dataNewECD);
                                      this.users
                                        .searchUser(
                                          localStorage.getItem('email-login')
                                        )
                                        .subscribe((data) => {
                                          localStorage.setItem(
                                            'email-id',
                                            data[0].id
                                          );
                                          this.projectsList = [];
                                          this.projects
                                            .getProjects()
                                            .subscribe((data) => {
                                              data.map((item) => {
                                                if (
                                                  item.user_platform_id ===
                                                  parseInt(
                                                    localStorage.getItem(
                                                      'email-id'
                                                    ),
                                                    10
                                                  )
                                                ) {
                                                  this.projectsList.push(item);
                                                }
                                                this.countProjectList =
                                                  this.projectsList.length;
                                              });
                                              this.projectsList.reverse();
                                            });
                                        });
                                    });
                                }
                              });
                            });
                        });
                    }
                  });
                })
            );
          });
      });
  }

  selectImpactoAmbiental(impacto, indexRecivido) {
    this.auxDataProjectList[indexRecivido].impactoSelect =
      this.calculos.ajustarNombre(impacto);
    this.auxDataProjectList[indexRecivido].impactoCompleteSelect = impacto;
    this.auxDataProjectList[indexRecivido].etapasIgnoradas = [];
    this.catologoImpactoAmbiental.forEach((element) => {
      if (element.name_complete_potential_type === impacto) {
        this.auxDataProjectList[indexRecivido].unit_impacto =
          element.unit_potential_type;
      }
    });
    this.auxDataProjectList[indexRecivido].dataGraficaPie = this.cargaDataPie(
      this.auxDataProjectList[indexRecivido].porcentajeSubepata,
      this.auxDataProjectList[indexRecivido].impactoSelect,
      this.auxDataProjectList[indexRecivido].etapasIgnoradas
    );
    this.auxDataProjectList[indexRecivido].dataGraficaBar = this.cargarDataBar(
      this.auxDataProjectList[indexRecivido].porcentajeSubepata,
      this.auxDataProjectList[indexRecivido].impactoSelect,
      this.auxDataProjectList[indexRecivido].etapasIgnoradas
    );
  }

  selectEtapa(etapa, i, id) {
    let auxSubetapas = this.calculos.findSubetapas(etapa);
    this.auxDataProjectList[i].subetasMostrada = auxSubetapas;
    if (this.auxDataProjectList[i].etapaSeleccionada === etapa) {
      let auxid = etapa.concat('TextInfo'.concat(String(id)));
      let auxidText = etapa.concat('TInfo'.concat(String(id)));
      document.getElementById(auxid).className = 'button-info';
      document.getElementById(auxidText).style.color = '#767676';
      this.auxDataProjectList[i].banderaEtapa = false;
      this.auxDataProjectList[i].etapaSeleccionada = 'Ninguna';
      this.auxDataProjectList[i].subetasMostrada = [
        { abreviacion: 'nada', color: '#FFFFFF' },
      ];
    } else {
      if (this.auxDataProjectList[i].etapaSeleccionada != 'Ninguna') {
        let auxid = this.auxDataProjectList[i].etapaSeleccionada.concat(
          'TextInfo'.concat(String(id))
        );
        let auxidText = this.auxDataProjectList[i].etapaSeleccionada.concat(
          'TInfo'.concat(String(id))
        );
        document.getElementById(auxid).className = 'button-info';
        document.getElementById(auxidText).style.color = '#767676';
      }
      this.auxDataProjectList[i].banderaEtapa = true;
      this.auxDataProjectList[i].etapaSeleccionada = etapa;
      let auxid = this.auxDataProjectList[i].etapaSeleccionada.concat(
        'TextInfo'.concat(String(id))
      );
      document.getElementById(auxid).className = 'button-info-select';
      let color = {
        Producción: '#4DBE89',
        Construccion: '#0DADBA',
        Uso: '#8F5091',
        FinDeVida: '#DEA961',
      };
      Object.keys(color).forEach((element) => {
        if (element === etapa) {
          let auxid = etapa.concat('TextInfo'.concat(String(id)));
          let auxidText = etapa.concat('TInfo'.concat(String(id)));
          document.getElementById(auxidText).style.color = color[element];
          document.getElementById(auxid).style.borderColor = color[element];
        }
      });
    }
  }

  cargarDataBar(data, impactoU, etapasI) {
    let auxColor = [];
    let aux = [];
    let auxl = [];
    let banderaEtapa = true;
    let auxdata2 = [];
    Object.keys(data).forEach((element) => {
      if (element === impactoU) {
        Object.keys(data[element]).forEach((ciclo) => {
          etapasI.forEach((ei) => {
            if (ei === ciclo) {
              banderaEtapa = false;
            }
          });
          if (banderaEtapa) {
            Object.keys(data[element][ciclo]).forEach((subetapa) => {
              auxl.push(subetapa);
              auxdata2.push(data[element][ciclo][subetapa].num);
              auxColor.push(this.calculos.findColor(subetapa));
            });
          }
          banderaEtapa = true;
        });
      }
    });

    auxdata2 = this.calculos.Porcentaje(auxdata2);

    aux = [
      {
        data: auxdata2,
        backgroundColor: auxColor,
      },
    ];
    return { datos: aux, labels: auxl };
  }

  cargaDataPie(data, impactoU, etapasI) {
    let auxColor = [];
    let aux = [];
    let banderaEtapa = true;
    let auxdata2 = [];
    Object.keys(data).forEach((element) => {
      if (element === impactoU) {
        Object.keys(data[element]).forEach((ciclo) => {
          etapasI.forEach((ei) => {
            if (ei === ciclo) {
              banderaEtapa = false;
            }
          });
          if (banderaEtapa) {
            Object.keys(data[element][ciclo]).forEach((subetapa) => {
              auxdata2.push(data[element][ciclo][subetapa].num);
              auxColor.push(this.calculos.findColor(subetapa));
            });
          }
          banderaEtapa = true;
        });
      }
    });

    auxdata2 = this.calculos.Porcentaje(auxdata2);

    aux = [
      {
        data: auxdata2,
        backgroundColor: auxColor,
      },
    ];
    return aux;
  }

  eliminarEtapa(etapa, i) {
    if (this.auxDataProjectList[i].etapasIgnoradas.includes(etapa)) {
      this.auxDataProjectList[i].etapasIgnoradas.forEach((element, index) => {
        if (element === etapa) {
          this.auxDataProjectList[i].iconosCambio[etapa] = 'visibility_off';
          this.auxDataProjectList[i].etapasIgnoradas.splice(index, 1);
        }
      });
    } else {
      this.auxDataProjectList[i].iconosCambio[etapa] = 'visibility';
      this.auxDataProjectList[i].etapasIgnoradas.push(etapa);
    }

    this.auxDataProjectList[i].porcentaje = this.calculos.ValoresProcentaje(
      this.auxDataProjectList[i].datos,
      this.auxDataProjectList[i].etapasIgnoradas
    );

    this.auxDataProjectList[i].porcentajeSubepata =
      this.calculos.ValoresProcentajeSubeapa(
        this.auxDataProjectList[i].datos,
        this.auxDataProjectList[i].etapasIgnoradas
      );

    this.auxDataProjectList[i].dataGraficaPie = this.cargaDataPie(
      this.calculos.ValoresProcentajeSubeapa(
        this.calculos.OperacionesDeFase(this.auxDataProjectList[i].id),
        []
      ),
      this.auxDataProjectList[i].impactoSelect,
      this.auxDataProjectList[i].etapasIgnoradas
    );
    this.auxDataProjectList[i].dataGraficaBar = this.cargarDataBar(
      this.calculos.ValoresProcentajeSubeapa(
        this.calculos.OperacionesDeFase(this.auxDataProjectList[i].id),
        []
      ),
      this.auxDataProjectList[i].impactoSelect,
      this.auxDataProjectList[i].etapasIgnoradas
    );
  }

  cambioGrafica(i, grafica) {
    if (grafica === 'Pie') {
      this.auxDataProjectList[i].TipoGraficaActiva['Pie'] = true;
      this.auxDataProjectList[i].TipoGraficaActiva['Bar'] = false;
    }
    if (grafica === 'Bar') {
      this.auxDataProjectList[i].TipoGraficaActiva['Pie'] = false;
      this.auxDataProjectList[i].TipoGraficaActiva['Bar'] = true;
    }
    console.log(this.auxDataProjectList[i].dataGraficaBar);
  }

  openDialogANP() {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
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
        noNiveles: this.noNiveles,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      try {
        this.projectsService
          .addProject({
            name_project: result.nombre,
            builded_surface: parseInt(result.superficieConstruida, 10),
            living_area: parseInt(result.superficieHabitable, 10),
            tier: parseInt(result.noNiveles, 10),
            use_id: result.usoSeleccionado,
            type_id:
              result.tipoSeleccionado === undefined
                ? null
                : result.tipoSeleccionado,
            country_id: result.paisSeleccionado,
            useful_life_id: result.vidaUtilSeleccionado,
            housing_scheme_id:
              result.esqHabitacionalSeleccionado === undefined
                ? null
                : result.esqHabitacionalSeleccionado,
            user_platform_id: parseInt(localStorage.getItem('email-id'), 10),
            city_id_origin:
              result.ciudadSeleccionada === undefined
                ? null
                : result.ciudadSeleccionada,
            distance: null,
          })
          .subscribe((data) => {
            sessionStorage.setItem('primaryDataProject', JSON.stringify(data));

            sessionStorage.setItem(
              'estadoSeleccionado',
              result.estadoSeleccionado
            );
            this.openDialogCTOP();
          });
      } catch (e) {
        console.log('close modal');
      }
    });
  }

  redirectResultados(id) {
    sessionStorage.setItem('projectID', id);
    this.router.navigateByUrl('resultados');
  }

  updateMaterial(id) {
    localStorage.setItem('idProyectoConstrucción', id);
    this.router.navigateByUrl('material-stage-update');
  }

  updateConstruction(id) {
    localStorage.setItem('idProyectoConstrucción', id);
    this.router.navigateByUrl('construction-stage-update');
  }

  updateUso(id) {
    localStorage.setItem('idProyectoConstrucción', id);
    this.router.navigateByUrl('usage-stage-update');
  }
}
