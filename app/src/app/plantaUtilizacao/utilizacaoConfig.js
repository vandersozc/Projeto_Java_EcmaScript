import UtilizacaoListController from './utilizacaoList.controller'
import UtilizacaoCadController from './utilizacaoCad.controller'

import UtilizacaoService from './utilizacaoService'

export const utilizacaoConfig = (modulo) => {

  modulo.service('UtilizacaoService', UtilizacaoService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('utilizacao', {
        template: require('@views/default.html'),
        url: '/plantasutilizacao',
        onEnter: ['$state', function($state) {
          $state.go('utilizacao.list')
        }]
      })
      .state('utilizacao.list', {
        template: require('@views/plantaUtilizacao/utilizacaoList.html'),
        url: '/list',
        controller: UtilizacaoListController,
        controllerAs: 'vm'
      })
      .state('utilizacao.new', {
        template: require('@views/plantaUtilizacao/utilizacaoCad.html'),
        url: '/new',
        controller: UtilizacaoCadController,
        controllerAs: 'vm'
      })
      .state('utilizacao.edit', {
        template: require('@views/plantaUtilizacao/utilizacaoCad.html'),
        url: '/{id}',
        controller: UtilizacaoCadController,
        controllerAs: 'vm'
      });
  }]
}
