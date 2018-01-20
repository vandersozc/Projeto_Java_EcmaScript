import PlantaListController from './plantaList.controller'
import PlantaCadController from './plantaCad.controller'

import PlantaService from './plantaService'

export const plantaConfig = (modulo) => {

  modulo.service('PlantaService', PlantaService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('planta', {
        template: require('@views/default.html'),
        url: '/plantas',
        onEnter: ['$state', function($state) {
          $state.go('planta.list')
        }]
      })
      .state('planta.list', {
        template: require('@views/planta/plantaList.html'),
        url: '/list',
        controller: PlantaListController,
        controllerAs: 'vm'
      })
      .state('planta.new', {
        template: require('@views/planta/plantaCad.html'),
        url: '/new',
        controller: PlantaCadController,
        controllerAs: 'vm'
      })
      .state('planta.edit', {
        template: require('@views/planta/plantaCad.html'),
        url: '/{id}',
        controller: PlantaCadController,
        controllerAs: 'vm'
      });
  }]
}
