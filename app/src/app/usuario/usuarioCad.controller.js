import swal from 'sweetalert2'


export default class UsuarioCadController {

    constructor($stateParams, $state, UsuarioService, Notification) {
        this.cadastro = {};
        this.title = 'Adicionando usuário';
        this._service = UsuarioService
        if ($stateParams.id) {
            this.title = 'Editando usuário';
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
            this._state.go('usuario.list')
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

UsuarioCadController.$inject = ['$stateParams', '$state', 'UsuarioService', 'Notification']