import swal from 'sweetalert2'


export default class FamiliaCadController {

    constructor($stateParams, $state, FamiliaService, Notification) {
        this.cadastro = {};
        this.title = 'Adicionando família';
        this._service = FamiliaService
        if ($stateParams.id) {
            this.title = 'Editando família';
            this._service.buscar($stateParams.id)
               .then(data => {
                   this.cadastro = data
               })
        }
        this._state = $state;
        this._notify = Notification
    }

    salvar() {
        this._service.salvar(this.cadastro)
          .then(resp => {
            swal({
                text: "Registro salvo com sucesso",
                type: 'success',
                timer: 1900,
                showConfirmButton: false,
            }) 
            this._state.go('familia.list')
        }).catch(erro => {
            swal({
                text: "Erro ao salvar o registro",
                type: 'error',
                timer: 1900,
                showConfirmButton: false,
            })
        })
    }
}

FamiliaCadController.$inject = ['$stateParams', '$state', 'FamiliaService', 'Notification']