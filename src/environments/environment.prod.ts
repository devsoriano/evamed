// genear api
const apiEvamed = 'https://evamed-rest-api.herokuapp.com/api-projects';
// apis
const projects = '/projects/';
const uses = '/uses/';
const countries = '/countries/';
const typeProject = '/type-project/';
const usefulLife = '/useful-life/';
const housingScheme = '/housing-scheme/';
const materials = '/materials/';
const sourceInformation = '/source-information/';
const bulkUnits = '/bulk-units/';
const energyUnits = '/energy-units/';
const volumeUnits = '/volume-units/';
const schemeProject = '/material-scheme-project/';
const constructionStage = '/constructive-system-element/';

export const environment = {
  production: true,
  api_projects: `${apiEvamed}${projects}`,
  api_uses: `${apiEvamed}${uses}`,
  api_countries: `${apiEvamed}${countries}`,
  api_type_project: `${apiEvamed}${typeProject}`,
  api_useful_life: `${apiEvamed}${usefulLife}`,
  api_housing_scheme: `${apiEvamed}${housingScheme}`,
  api_materials: `${apiEvamed}${materials}`,
  api_source_information: `${apiEvamed}${sourceInformation}`,
  api_bulk_units: `${apiEvamed}${bulkUnits}`,
  api_energy_units: `${apiEvamed}${energyUnits}`,
  api_volume_units: `${apiEvamed}${volumeUnits}`,
  api_scheme_project: `${apiEvamed}${schemeProject}`,
  api_construction_stage: `${apiEvamed}${constructionStage}`,
  firebaseConfig: {
    apiKey: 'AIzaSyDEygXrnkO5kjueKT_cVtEJKgQlcQx3bdc',
    authDomain: 'platzi-store-1a207.firebaseapp.com',
    databaseURL: 'https://platzi-store-1a207.firebaseio.com',
    projectId: 'platzi-store-1a207',
    storageBucket: 'platzi-store-1a207.appspot.com',
    messagingSenderId: '255188436131',
    appId: '1:255188436131:web:8c3728876042c077f9ab16'
  }
};

