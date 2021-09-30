import conversion from 'src/app/calculos/Conversiones.json';
import transporte from 'src/app/calculos/transportes.json';
import subetapasInfo from 'src/app/calculos/Subetapas.json';
import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class Calculos {
  materiales_EPIC: number;
  materiales_EPD: number;
  conversion_list: any = conversion;
  transporte_list: any = transporte;
  subetapas_list: any = subetapasInfo;
  projectsList: [];
  materialList: [];
  materialSchemeDataList: [];
  materialSchemeProyectList: [];
  potentialTypesList: [];
  standarsList: [];
  CSEList: [];
  SIDList: [];
  SIList: [];
  ACRList: [];
  ECDList: [];
  TEDList: [];
  TEList: [];
  ULList: [];
  ECDPList: [];
  sectionList: [];

  impactosIgnorar2 = [
    'PARNR',
    'POT',
    'Human toxicity',
    'Fresh water aquatic ecotox.',
    'Marine aquatic ecotoxicity',
    'Terrestrial ecotoxicity',
  ];
  nombreImpactosCompleto = [];

  constructor(
  ) {}

  OperacionesDeFase(idProyecto,info) {
    
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
    let Datos = {};
    let schemeProyect = null;

    schemeProyect = this.materialSchemeProyectList.filter(
      (msp) => msp['project_id'] == idProyecto
    );

    let impacto_ban = true;
    let nameImpacto: string;
    let materialesIgnorados = [];

    this.materiales_EPIC = 0;
    this.potentialTypesList.forEach((impacto, index) => {
      this.impactosIgnorar2.forEach((ignorar) => {
        if (impacto['name_potential_type'] === ignorar) {
          impacto_ban = false;
        }
      });
      if (impacto_ban) {
        nameImpacto = impacto['name_complete_potential_type'];
        nameImpacto = this.ajustarNombre(nameImpacto);
        Datos[nameImpacto] = {};
        let resultado_impacto = 0;
        //Cálculos de la sección de producción
        let etapas = [2, 3, 4]; //Subetaps A1 A2 y A3
        Datos[nameImpacto]['Producción'] = {};
        let banderaMaterialEP = false;
        etapas.forEach((subetapa) => {
          let subproceso = this.standarsList.filter(
            (s) => s['id'] == subetapa
          )[0]['name_standard'];
          if (schemeProyect.length > 0) {
            schemeProyect.forEach((ps, num) => {
              let baseDatosMaterial = this.materialList.filter((bs)=> bs['id']==ps['material_id']);
              if(baseDatosMaterial[0]['database_from']==='EPDs'){
                let materiales_subetapa = this.materialSchemeDataList.filter(
                  (msd) =>
                    msd['material_id'] == ps['material_id'] &&
                    msd['standard_id'] == subetapa &&
                    msd['potential_type_id'] == impacto['id']
                );
                if (materiales_subetapa.length > 0) {
                  banderaMaterialEP = false;
                  materiales_subetapa.forEach((material, index) => {
                    resultado_impacto =
                      resultado_impacto +
                      materiales_subetapa[index]['value'] * ps['quantity'];
                  });
                } else {
                  banderaMaterialEP = true;
                }
              }else{
                if (!materialesIgnorados.includes(ps['comercial_name'])) {
                  materialesIgnorados.push(ps['comercial_name']);
                  this.materiales_EPIC = this.materiales_EPIC + 1;
                }
              }
            });
          }
          Datos[nameImpacto]['Producción'][subproceso] = resultado_impacto;
          resultado_impacto = 0;
        });
        this.materiales_EPD = schemeProyect.length - this.materiales_EPIC;
        //console.log('resultado producción = ',resultado_impacto)
        resultado_impacto = 0;
        //Construcción
        Datos[nameImpacto]['Construccion'] = {};
        //A4 Transporte
        if (schemeProyect.length > 0) {
          schemeProyect.forEach((ps) => {
            let baseDatosMaterial = this.materialList.filter((bs)=> bs['id']==ps['material_id']);
              if(baseDatosMaterial[0]['database_from']==='EPDs'){
                let internacional;
                let nacional;
                if (ps['distance_init'] == null) {
                  internacional = 0;
                } else {
                  let transporteSeleccionado = 1;
                  if (ps['transport_id_origin'] != null) {
                    transporteSeleccionado = ps['transport_id_origin'];
                  }
                  let value_transport = this.transporte_list.filter(
                    (val) =>
                      val['id_potencial'] == impacto['id'] &&
                      val['id_transport'] == transporteSeleccionado
                  );
                  internacional = value_transport[0]['valor'] * ps['distance_init'];
                }
                if (ps['distance_end'] == null) {
                  nacional = 0;
                } else {
                  let transporteSeleccionado = 4;
                  if (ps['transport_id_end'] != null) {
                    transporteSeleccionado = ps['transport_id_end'];
                  }
                  let value_transport = this.transporte_list.filter(
                    (val) =>
                      val['id_potencial'] == impacto['id'] &&
                      val['id_transport'] == transporteSeleccionado
                  );
                  nacional = value_transport[0]['valor'] * ps['distance_end'];
                }
                let conversion_val = this.conversion_list.filter(
                  (val) => val['id_material'] == ps['material_id']
                );
                let peso = 1;
                if (conversion_val.length > 0) {
                  peso = conversion_val[0]['value'];
                }
                let materiales_subetapa = this.materialSchemeDataList.filter(
                  (msd) =>
                    msd['material_id'] == ps['material_id'] &&
                    msd['standard_id'] == 1
                );
                if (materiales_subetapa.length < 1) {
                  resultado_impacto =
                    resultado_impacto +
                    peso * ps['quantity'] * (nacional + internacional);
                }
              }
          });
        }
        Datos[nameImpacto]['Construccion']['A4'] = resultado_impacto;
      
        resultado_impacto = 0;
        //A5 instalación
        let CSEs = this.CSEList.filter((c) => c['project_id'] == idProyecto);
        if (CSEs.length > 0) {
          CSEs.forEach((CSE) => {
            let energia = this.SIDList.filter(
              (sid) =>
                sid['sourceInformarion_id'] == CSE['source_information_id'] &&
                sid['potential_type_id'] == impacto['id']
            );
            if (energia.length > 0) {
              resultado_impacto =
                resultado_impacto + energia[0]['value'] * CSE['quantity'];
            }
          });
        }
        Datos[nameImpacto]['Construccion']['A5'] = resultado_impacto;
        //console.log('A5:',resultado_impacto);
        //Uso
        resultado_impacto = 0;
        Datos[nameImpacto]['Uso'] = {};
        //B4
        //las etapas son las mismas que en la sección de producción
        etapas.forEach((subetapa) => {
          if (schemeProyect.length > 0) {
            schemeProyect.forEach((ps, num) => {
              let baseDatosMaterial = this.materialList.filter((bs)=> bs['id']==ps['material_id']);
              if(baseDatosMaterial[0]['database_from']==='EPDs'){
                let materiales_subetapa = this.materialSchemeDataList.filter(
                  (msd) =>
                    msd['material_id'] == ps['material_id'] &&
                    msd['standard_id'] == subetapa &&
                    msd['potential_type_id'] == impacto['id']
                );
                if (materiales_subetapa.length > 0) {
                  materiales_subetapa.forEach((material, index) => {
                    resultado_impacto =
                      resultado_impacto +
                      materiales_subetapa[index]['value'] *
                        ps['quantity'] *
                        ps['replaces'];
                  });
                }
              }
            });
          }
        });
        Datos[nameImpacto]['Uso']['B4'] = resultado_impacto;
        //console.log('B4: ',resultado_impacto)
        resultado_impacto = 0;
        //B6
        //Se obtiene consumo anual
        let listaACR = this.ACRList.filter(
          (acr) => acr['project_id'] == idProyecto
        );
        if (listaACR.length > 0) {
          let consumos = this.ECDList.filter(
            (ecd) => ecd['annual_consumption_required_id'] == listaACR[0]['id']
          );
          let vidaUtilID = this.projectsList.filter(
            (p) => p['id'] == idProyecto
          )[0]['useful_life_id'];
          let vidaUtil: any = this.ULList.filter(
            (ul) => ul['id'] == vidaUtilID
          )[0]['name_useful_life'];
          try {
            vidaUtil = parseFloat(vidaUtil);
          } catch {
            vidaUtil = 1;
          }
          consumos.forEach((consumo) => {
            let valor_impacto = this.TEDList.filter(
              (sid) =>
                sid['type_energy_id'] == consumo['type'] &&
                sid['potential_type_id'] == impacto['id']
            );
            if (valor_impacto.length > 0) {
              resultado_impacto =
                resultado_impacto +
                vidaUtil * valor_impacto[0]['value'] * consumo['quantity'];
            }
          });
        }
        Datos[nameImpacto]['Uso']['B6'] = resultado_impacto;
        //console.log('Uso:',resultado_impacto)
        //Fin de vida
        resultado_impacto = 0;
        Datos[nameImpacto]['FinDeVida'] = {};
        //C1
        let ECDPs = this.ECDPList.filter((c) => c['project_id'] == idProyecto);
        if (ECDPs.length > 0) {
          ECDPs.forEach((ECDP) => {
            let energia = this.SIDList.filter(
              (sid) =>
                sid['sourceInformarion_id'] == ECDP['source_information_id'] &&
                sid['potential_type_id'] == impacto['id']
            );
            resultado_impacto =
              resultado_impacto + ECDP['quantity'] * energia[0]['value'];
          });
        }
        Datos[nameImpacto]['FinDeVida']['C1'] = resultado_impacto;
        //C2
        Datos[nameImpacto]['FinDeVida']['C2'] = 0;
        //C3
        Datos[nameImpacto]['FinDeVida']['C3'] = 0;
        //C4
        Datos[nameImpacto]['FinDeVida']['C4'] = 0;
        //console.log('Fin de vida',resultado_impacto)
      }
      impacto_ban = true;
    });

    return Datos;
  }

  ValoresProcentaje(data,ignorar) {
    let auxsumetapa = {};
    Object.keys(data).forEach((element) => {
      let auxsumimpacto = 0;
      auxsumetapa[element] = {};
      let flag = true;
      Object.keys(data[element]).forEach((etapa) => {
        ignorar.forEach(element => {
          if(element == etapa)
            flag=false;
        });
        Object.keys(data[element][etapa]).forEach((subetapa) => {
          if(flag){
            auxsumimpacto = auxsumimpacto + data[element][etapa][subetapa];
          }
        });
        flag = true;
      });
      Object.keys(data[element]).forEach((etapa) => {
        flag = true;
        ignorar.forEach(element => {
          if(element == etapa)
            flag=false
        });
        auxsumetapa[element][etapa] = {};
        auxsumetapa[element][etapa]['num'] = 0;
        if(flag){
          Object.keys(data[element][etapa]).forEach((subetapa) => {
            auxsumetapa[element][etapa]['num'] =
              auxsumetapa[element][etapa]['num'] + data[element][etapa][subetapa];
          });
        }
        auxsumetapa[element][etapa]['num'] =
          auxsumetapa[element][etapa]['num'].toExponential(2);
        auxsumetapa[element][etapa]['porcentaje'] = (
          (auxsumetapa[element][etapa]['num'] / auxsumimpacto) *
          100
        ).toFixed(2);
      });
    });

    return auxsumetapa;
  }

  ValoresProcentajeSubeapa(data,ignorar) {
    let auxsumetapa = {};
    let flag = true;
    Object.keys(data).forEach((element) => {
      let auxsumimpacto = 0;
      auxsumetapa[element] = {};
      Object.keys(data[element]).forEach((etapa) => {
        ignorar.forEach(element => {
          if(element == etapa)
            flag=false;
        });
        if(flag){
          Object.keys(data[element][etapa]).forEach((subetapa) => {
            auxsumimpacto = auxsumimpacto + data[element][etapa][subetapa];
          });
        }
        flag=true;
      });
      Object.keys(data[element]).forEach((etapa) => {
        ignorar.forEach(element => {
          if(element == etapa)
            flag=false;
        });
        auxsumetapa[element][etapa] = {};
        Object.keys(data[element][etapa]).forEach((subetapa) => {
          auxsumetapa[element][etapa][subetapa] = {};
          if(flag){
            auxsumetapa[element][etapa][subetapa]['num'] =
              data[element][etapa][subetapa].toExponential(2);
          }else{
            auxsumetapa[element][etapa][subetapa]['num'] = 0;
          }
          auxsumetapa[element][etapa][subetapa]['porcentaje'] = (
            (auxsumetapa[element][etapa][subetapa]['num'] / auxsumimpacto) *
            100
          ).toFixed(1);
        });
        flag=true
      });
    });

    return auxsumetapa;
  }

  Porcentaje(data) {
    let sum = 0;
    let auxdata = [];
    data.forEach((element) => {
      sum = sum + Number(element);
    });
    data.forEach((element) => {
      auxdata.push((Number(element) / sum * 100).toFixed(1));
    });
    return auxdata;
  }

  ImpactosSeleccionados(potList) {
    let impacto_ban = true;
    let auxNombre = [];
    let auxnombreSalto: string;
    auxNombre.push("ciclo de vida")
    potList.forEach((impacto, index) => {
      this.impactosIgnorar2.forEach((ignorar) => {
        if (impacto['name_potential_type'] === ignorar) {
          impacto_ban = false;
        }
      });
      if (impacto_ban) {
        auxnombreSalto = impacto['name_complete_potential_type'];
        auxNombre.push(auxnombreSalto);
        //auxNombre.push(this.ajustarNombre(auxnombreSalto));
      }
      impacto_ban = true;
    });
    return auxNombre;
  }

  FiltradoDeImpactos(data) {
    let aux = [9, 10, 11, 12, 13, 14];
    let b = true;
    let auxdata = [];
    data.forEach((element, index) => {
      aux.forEach((ignorar) => {
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

  ajustarNombre(name: string) {
    let help = name;
    let spacios=0;
    let numC=0;
    let maxlinea=0;
    for (let i of help){
      if(i===' '){
        spacios=spacios+1;
        if(spacios==1 && maxlinea >= 9){
          help = [help.slice(0, numC), '\n', help.slice(numC)].join('');
          spacios=0;
          maxlinea = 0;
          numC=numC+1;
        }
        if(spacios==2){
          help = [help.slice(0, numC), '\n', help.slice(numC)].join('');
          spacios=0;
          numC=numC+1;
        }
      }
      maxlinea=maxlinea+1;
      numC=numC+1;
    }
    
    //console.log(help);
    return help
  }

  findColor(subetapa) {
    let sub = this.subetapas_list.filter((s) => s['abreviacion'] === subetapa);
    return sub[0]['color'];
  }

  findSubetapas(etapa) {
    return this.subetapas_list.filter((s) => s['etapa'] == etapa);
  }
}
