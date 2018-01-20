import swal from 'sweetalert2'

export default class PlantaListController {

    constructor(PlantaService, Notification) {
        this.filterField = 'nomeComum'
        this.filterValue = ''
        this.order = 'nomeComun'
        this.lista = []
        this._service = PlantaService
        this._notify = Notification
        this.carregar()
    }

    carregar() {
        this._service.pesquisar(this.filterField, this.filterValue, this.order)
            .then(data => {
                this.lista = data
            })
            .catch(error => {
                console.log(error)
            })
    }

    excluir(id) {
        swal({
            title: 'Remover registro',
            text: 'Deseja realmente remover o usuário',
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then(resp => {
            return resp.value ?
                this._service.excluir(id) :
                Promise.reject({ type: 'warning', message: 'Operação cancelada' })
        }).then(response => {
            swal({
                text: "Registro excluído com sucesso",
                type: 'success',
                timer: 1900,
                showConfirmButton: false,
            })
            this.carregar()
        }).catch(erro => {
            swal({
                text: "Erro ao excluir o registro",
                type: 'error',
                timer: 1900,
                showConfirmButton: false,
            })
        })
    }
}

PlantaListController.$inject = ['PlantaService', 'Notification']