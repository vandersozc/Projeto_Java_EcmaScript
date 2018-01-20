import swal from 'sweetalert2'


export default class UtilizacaoCadController {

    constructor($stateParams, $state, UtilizacaoService, Notification) {
        this.cadastro = {};
        this.title = 'Adicionando utilização';
        this._service = UtilizacaoService
        if ($stateParams.id) {
            this.title = 'Editando utilização';
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
            this._state.go('utilizacao.list')
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

UtilizacaoCadController.$inject = ['$stateParams', '$state', 'UtilizacaoService', 'Notification']