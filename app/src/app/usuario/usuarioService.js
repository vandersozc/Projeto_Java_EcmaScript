import AbstractCrudService from "../abstract.crud.service";

export default class UsuarioService extends AbstractCrudService {

  constructor($http) {
    super($http, 'http://localhost:8080/eplants-web/api/usuarios')
  }
}
UsuarioService.$inject = ['$http']
