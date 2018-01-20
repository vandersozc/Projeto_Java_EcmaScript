import AbstractCrudService from "../abstract.crud.service";

export default class PlantaService extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/eplants-web/api/plantas')
  }
}
PlantaService.$inject = ['$http']