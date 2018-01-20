import swal from 'sweetalert2'

export default class PlantaCadController {

    constructor($stateParams, $state, PlantaService) {
        this.cadastro = {};
        this.title = 'Adicionando planta';
        this._service = PlantaService
        if ($stateParams.id) {
            this.title = 'Editando planta';
            this._service.buscar($stateParams.id)
               .then(data => {
                   this.cadastro = data
               })
        }
        this._state = $state;
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
            this._state.go('planta.list')
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

PlantaCadController.$inject = ['$stateParams', '$state', 'PlantaService', 'Notification']
