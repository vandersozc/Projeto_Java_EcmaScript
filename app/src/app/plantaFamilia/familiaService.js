import AbstractCrudService from "../abstract.crud.service";

export default class FamiliaService extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/eplants-web/api/plantasfamilia')
  }
}
FamiliaService.$inject = ['$http']
