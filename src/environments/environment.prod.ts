// genear api
const api_evamed = 'http://127.0.0.1:8000/api-projects';
// apis
const projects = '/projects/';
const uses = '/uses/';
const countries = '/countries/';
const type_project = '/type-project/';
const useful_life = '/useful-life/';

export const environment = {
  production: true,
  api_projects: `${api_evamed}${projects}`,
  api_uses: `${api_evamed}${uses}`,
  api_countries: `${api_evamed}${countries}`,
  api_type_project: `${api_evamed}${type_project}`,
  api_useful_life: `${api_evamed}${useful_life}`,
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
