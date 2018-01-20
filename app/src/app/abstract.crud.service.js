export default class AbstractCrudService {
  
  constructor($http, url) {
    this._http = $http
    this._url = url
  }

  pesquisar(filterField, filterValue, order) {
    return this._http.get(`${this._url}/all`, {
      params: {
        filterField,
        filterValue,
        order
      }
    })
      .then(response => response.data)
  }

  buscar(id) {
    return this._http.get(`${this._url}/${id}`)
      .then(response => response.data)
  }

  salvar(cadastro) {
    if (cadastro.id) {
      return this._http.put(`${this._url}/${cadastro.id}`, cadastro)
    } else {
      return this._http.post(this._url, cadastro)
    }
  }

  excluir(id) {
    return this._http.delete(`${this._url}/${id}`)
  }

}