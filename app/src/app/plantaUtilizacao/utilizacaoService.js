import AbstractCrudService from "../abstract.crud.service";

export default class UtilizacaoService extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/eplants-web/api/plantasutilizacao')
  }
}
UtilizacaoService.$inject = ['$http']
