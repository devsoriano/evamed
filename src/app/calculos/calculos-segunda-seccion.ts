import subetapasInfo from 'src/app/calculos/Subetapas.json';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CalculosSegundaSeccion {
  
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
  PTList:[];
  conversionList:[];
  impactosIgnorar2 = [
    'PARNR',
    'POT',
    'Human toxicity',
    'Fresh water aquatic ecotox.',
    'Marine aquatic ecotoxicity',
    'Terrestrial ecotoxicity',
  ];

  OperacionesDeFasePorElementoConstructivo(idProyecto,info,BD) {
    
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
    this.conversionList =  info.conversionList;
    
    let Datos = {};
    let schemeProyect = null;

    schemeProyect = this.materialSchemeProyectList.filter(
      (msp) => msp['project_id'] == idProyecto
    );

    let impacto_ban = true;
    let nameImpacto: string;

    this.potentialTypesList.forEach((impacto, index) => {
      this.impactosIgnorar2.forEach((ignorar) => {
        if (impacto['name_potential_type'] === ignorar) {
          impacto_ban = false;
        }
      });
      if (impacto_ban) {
        nameImpacto = impacto['name_complete_potential_type'];
        nameImpacto = this.ajustarNombre(nameImpacto);
        //console.log(nameImpacto)
        Datos[nameImpacto] = {};
        let elementoscreados=[];
        let sumaParaReempazos = {};
        let auxMaterialesTransporte = {};
        let auxMaterialesYaSumados={};
        //Cálculos de la sección de producción
        let etapas = [2, 3, 4]; //Subetaps A1 A2 y A3
        let banderaMaterialEP = false;
        etapas.forEach((subetapa) => {
          if (schemeProyect.length > 0) {
            schemeProyect.forEach((ps, num) => {
              let baseDatosMaterial = this.materialList.filter((bs)=> bs['id']==ps['material_id']);
              if(BD[baseDatosMaterial[0]['database_from']]){
                if(baseDatosMaterial[0]['database_from']==='EPiC'){
                  let materiales_subetapa = this.materialSchemeDataList.filter(
                    (msd) =>
                    msd['material_id'] == ps['material_id'] &&
                    msd['standard_id'] == 1 &&
                    msd['potential_type_id'] == impacto['id']
                    );
                    if (materiales_subetapa.length > 0) {
                      banderaMaterialEP = false;
                      materiales_subetapa.forEach((material, index) => {
                      if(!elementoscreados.includes(ps['section_id'])){
                        elementoscreados.push(ps['section_id']);
                        Datos[nameImpacto][ps['section_id']]=0;
                        sumaParaReempazos[ps['section_id']]={};
                        auxMaterialesYaSumados[ps['section_id']] = [];
                        auxMaterialesTransporte[ps['section_id']] = [];
                      }
                      Datos[nameImpacto][ps['section_id']] =
                      Datos[nameImpacto][ps['section_id']]+
                        materiales_subetapa[index]['value'] * ps['quantity'];
                    });
                  }
                }else{
                  let materiales_subetapa = this.materialSchemeDataList.filter(
                    (msd) =>
                    msd['material_id'] == ps['material_id'] &&
                    msd['standard_id'] == subetapa &&
                    msd['potential_type_id'] == impacto['id']
                    );
                    if (materiales_subetapa.length > 0) {
                    banderaMaterialEP = false;
                    materiales_subetapa.forEach((material, index) => {
                      if(!elementoscreados.includes(ps['section_id'])){
                        elementoscreados.push(ps['section_id']);
                        Datos[nameImpacto][ps['section_id']]=0;
                        sumaParaReempazos[ps['section_id']]={};
                        auxMaterialesYaSumados[ps['section_id']] = [];
                        auxMaterialesTransporte[ps['section_id']] = [];
                      }
                      Datos[nameImpacto][ps['section_id']] =
                      Datos[nameImpacto][ps['section_id']]+
                        materiales_subetapa[index]['value'] * ps['quantity'];
                    });
                  }
                }
              }
            });
          }
        });
        //A4 Transporte
        if (schemeProyect.length > 0) {
          schemeProyect.forEach((ps) => {
            let baseDatosMaterial = this.materialList.filter((bs)=> bs['id']==ps['material_id']);
            let internacional;
            let nacional;
            if (ps['distance_init'] == null) {
              internacional = 0;
            } else {
              let transporteSeleccionado = 1;
              if (ps['transport_id_origin'] != null) {
                transporteSeleccionado = ps['transport_id_origin'];
              }
              let value_transport = this.PTList.filter(
                (val) =>
                  val['potential_type_id'] == impacto['id'] &&
                  val['transport_id'] == transporteSeleccionado
              );
              internacional = value_transport[0]['value'] * ps['distance_init'];
            }
            if (ps['distance_end'] == null) {
              nacional = 0;
            } else {
              let transporteSeleccionado = 4;
              if (ps['transport_id_end'] != null) {
                transporteSeleccionado = ps['transport_id_end'];
              }
              let value_transport = this.PTList.filter(
                (val) =>
                  val['potential_type_id'] == impacto['id'] &&
                  val['transport_id'] == transporteSeleccionado
              );
              nacional = value_transport[0]['value'] * ps['distance_end'];
            }
            let conversion_val = this.conversionList.filter(
              (val) => val['material_id'] == ps['material_id']
            );
            let peso = 1;
            if (conversion_val.length > 0) {
              peso = conversion_val[0]['value'];
            }
            if(BD[baseDatosMaterial[0]['database_from']]){
              if(!elementoscreados.includes(ps['section_id'])){
                elementoscreados.push(ps['section_id']);
                Datos[nameImpacto][ps['section_id']]=0;
                sumaParaReempazos[ps['section_id']]={}
                auxMaterialesTransporte[ps['section_id']] = [];
                auxMaterialesYaSumados[ps['section_id']] = [];
              }
              if(!auxMaterialesTransporte[ps['section_id']].includes(ps['material_id'])){
                sumaParaReempazos[ps['section_id']][ps['material_id']]=0;
                auxMaterialesTransporte[ps['section_id']].push(ps['material_id']);
              }
              sumaParaReempazos[ps['section_id']][ps['material_id']] +=  peso * ps['quantity'] * (nacional + internacional);
              
              Datos[nameImpacto][ps['section_id']] =
              Datos[nameImpacto][ps['section_id']] +
                peso * ps['quantity'] * (nacional + internacional);
            }
          });
        }
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
              if(!elementoscreados.includes(CSE['section_id'])){
                elementoscreados.push(CSE['section_id']);
                Datos[nameImpacto][CSE['section_id']]=0;
              }
              Datos[nameImpacto][CSE['section_id']] =
              Datos[nameImpacto][CSE['section_id']] + energia[0]['value'] * CSE['quantity'];
            }
          });
        }
        //B4
        //las etapas son las mismas que en la sección de producción
        etapas.forEach((subetapa) => {
          if (schemeProyect.length > 0) {
            schemeProyect.forEach((ps, num) => {
              let baseDatosMaterial = this.materialList.filter((bs)=> bs['id']==ps['material_id']);
              if(BD[baseDatosMaterial[0]['database_from']]){
                if(baseDatosMaterial[0]['database_from']==='EPiC'){
                  let materiales_subetapa = this.materialSchemeDataList.filter(
                    (msd) =>
                      msd['material_id'] == ps['material_id'] &&
                      msd['standard_id'] == 1 &&
                      msd['potential_type_id'] == impacto['id']
                  );
                  if (materiales_subetapa.length > 0) {
                    materiales_subetapa.forEach((material, index) => {
                      let auxValorProduccionTransporte = 0;
                      if(!elementoscreados.includes(ps['section_id'])){
                        elementoscreados.push(ps['section_id']);
                        Datos[nameImpacto][ps['section_id']]=0;
                      }
                      
                      if(!auxMaterialesYaSumados[ps['section_id']].includes(ps['material_id'])){
                        let valSum =sumaParaReempazos[ps['section_id']][ps['material_id']];
                        if(valSum!=undefined){
                          auxValorProduccionTransporte += valSum;
                        }
                        auxMaterialesYaSumados[ps['section_id']].push(ps['material_id']);
                      }
                      Datos[nameImpacto][ps['section_id']] =
                      Datos[nameImpacto][ps['section_id']] +
                        ((materiales_subetapa[index]['value'] *
                          ps['quantity']) + auxValorProduccionTransporte) *
                          ps['replaces'];
                    });
                  }
                }else{
                  let materiales_subetapa = this.materialSchemeDataList.filter(
                    (msd) =>
                      msd['material_id'] == ps['material_id'] &&
                      msd['standard_id'] == subetapa &&
                      msd['potential_type_id'] == impacto['id']
                  );
                  if (materiales_subetapa.length > 0) {
                    materiales_subetapa.forEach((material, index) => {
                      let auxValorProduccionTransporte = 0;
                      if(!elementoscreados.includes(ps['section_id'])){
                        elementoscreados.push(ps['section_id']);
                        Datos[nameImpacto][ps['section_id']]=0;
                      }
                      
                      if(!auxMaterialesYaSumados[ps['section_id']].includes(ps['material_id'])){
                        let valSum =sumaParaReempazos[ps['section_id']][ps['material_id']];
                        if(valSum!=undefined){
                          auxValorProduccionTransporte += valSum;
                        }
                        auxMaterialesYaSumados[ps['section_id']].push(ps['material_id']);
                      }
                      Datos[nameImpacto][ps['section_id']] =
                      Datos[nameImpacto][ps['section_id']] +
                        ((materiales_subetapa[index]['value'] *
                          ps['quantity']) + auxValorProduccionTransporte) *
                          ps['replaces'];
                    });
                  }
                }
              }
            });
          }
        });
        //C1
        let ECDPs = this.ECDPList.filter((c) => c['project_id'] == idProyecto);
        if (ECDPs.length > 0) {
          ECDPs.forEach((ECDP) => {
            let energia = this.SIDList.filter(
              (sid) =>
                sid['sourceInformarion_id'] == ECDP['source_information_id'] &&
                sid['potential_type_id'] == impacto['id']
            );
            if(!elementoscreados.includes(ECDP['section_id'])){
                    elementoscreados.push(ECDP['section_id']);
                    Datos[nameImpacto][ECDP['section_id']]=0;
                  }
                  Datos[nameImpacto][ECDP['section_id']] =
                  Datos[nameImpacto][ECDP['section_id']] +
                    ECDP['quantity'] * energia[0]['value'];
          });
        }
      }
      
      //console.log(Datos[nameImpacto])

      impacto_ban = true;
    });

    return Datos;
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
    
    return help
  }

}
