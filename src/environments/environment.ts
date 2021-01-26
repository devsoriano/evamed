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
const schemeProjectOriginal = '/material-scheme-project-original/';
const constructionStage = '/constructive-system-element/';
const annualConsumptionRequired = '/annual-consumption-required/';
const typeEnergy = '/type-energy/';
const electricityConsumptionData = '/electricity-consumption-data/';
const treatmentOfGenerateWasted = '/treatment-of-generate-wasted/';
const electricityConsumptionDeconstructiveProcess = '/electricity-consumption-deconstructive-process/';
const materialSchemeData = '/material-scheme-data/';
const potentialTypes = '/potential-types/';
const standards = '/standards/';
const sourceInformationData = '/source-information-data/';
const typeEnergyData = '/type-energy-data/';
const users = '/users-platform/';
const states = '/states/';
const cities = '/cities/';
const localDistances = '/local-distances/';

export const environment = {
  production: false,
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
  api_scheme_project_original: `${apiEvamed}${schemeProject}`,
  api_construction_stage: `${apiEvamed}${constructionStage}`,
  api_annual_consumption_required: `${apiEvamed}${annualConsumptionRequired}`,
  api_type_energy: `${apiEvamed}${typeEnergy}`,
  api_electricity_consumption_data: `${apiEvamed}${electricityConsumptionData}`,
  api_treatment_of_generate_wasted: `${apiEvamed}${treatmentOfGenerateWasted}`,
  api_electricity_consumption_deconstructive_process: `${apiEvamed}${electricityConsumptionDeconstructiveProcess}`,
  api_material_scheme_data: `${apiEvamed}${materialSchemeData}`,
  api_potetnial_types: `${apiEvamed}${potentialTypes}`,
  api_standards: `${apiEvamed}${standards}`,
  api_source_information_data: `${apiEvamed}${sourceInformationData}`,
  api_type_energy_data: `${apiEvamed}${typeEnergyData}`,
  api_users: `${apiEvamed}${users}`,
  api_states: `${apiEvamed}${states}`,
  api_cities: `${apiEvamed}${cities}`,
  api_local_distances: `${apiEvamed}${localDistances}`,
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
