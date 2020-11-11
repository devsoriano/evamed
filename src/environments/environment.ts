// genear api
const api_evamed = 'http://127.0.0.1:8000/api-projects';
// apis
const projects = '/projects/';
const uses = '/uses/';
const countries = '/countries/';
const type_project = '/type-project/';
const useful_life = '/useful-life/';
const housing_scheme = '/housing-scheme/';
const materials = '/materials/';
const source_information = '/source-information/';
const bulk_units = '/bulk-units/';
const energy_units = '/energy-units/'
const volume_units = '/volume-units/'

export const environment = {
  production: false,
  api_projects: `${api_evamed}${projects}`,
  api_uses: `${api_evamed}${uses}`,
  api_countries: `${api_evamed}${countries}`,
  api_type_project: `${api_evamed}${type_project}`,
  api_useful_life: `${api_evamed}${useful_life}`,
  api_housing_scheme: `${api_evamed}${housing_scheme}`,
  api_materials: `${api_evamed}${materials}`,
  api_source_information: `${api_evamed}${source_information}`,
  api_bulk_units: `${api_evamed}${bulk_units}`,
  api_energy_units: `${api_evamed}${energy_units}`,
  api_volume_units: `${api_evamed}${volume_units}`,
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
