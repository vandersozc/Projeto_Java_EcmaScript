import FamiliaListController from './familiaList.controller'
import FamiliaCadController from './familiaCad.controller'

import FamiliaService from './familiaService'

export const familiaConfig = (modulo) => {

  modulo.service('FamiliaService', FamiliaService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('familia', {
        template: require('@views/default.html'),
        url: '/plantasfamilia',
        onEnter: ['$state', function($state) {
          $state.go('familia.list')
        }]
      })
      .state('familia.list', {
        template: require('@views/plantaFamilia/familiaList.html'),
        url: '/list',
        controller: FamiliaListController,
        controllerAs: 'vm'
      })
      .state('familia.new', {
        template: require('@views/plantaFamilia/familiaCad.html'),
        url: '/new',
        controller: FamiliaCadController,
        controllerAs: 'vm'
      })
      .state('familia.edit', {
        template: require('@views/plantaFamilia/familiaCad.html'),
        url: '/{id}',
        controller: FamiliaCadController,
        controllerAs: 'vm'
      });
  }]
}
