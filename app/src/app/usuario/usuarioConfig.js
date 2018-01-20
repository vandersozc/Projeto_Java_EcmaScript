import UsuarioListController from './usuarioList.controller'
import UsuarioCadController from './usuarioCad.controller'

import UsuarioService from './usuarioService'

export const usuarioConfig = (modulo) => {

  modulo.service('UsuarioService', UsuarioService)
  
  return ['$stateProvider', '$urlRouterProvider', 
   ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('usuario', {
        template: require('@views/default.html'),
        url: '/usuarios',
        onEnter: ['$state', function($state) {
          $state.go('usuario.list')
        }]
      })
      .state('usuario.list', {
        template: require('@views/usuario/usuarioList.html'),
        url: '/list',
        controller: UsuarioListController,
        controllerAs: 'vm'
      })
      .state('usuario.new', {
        template: require('@views/usuario/usuarioCad.html'),
        url: '/new',
        controller: UsuarioCadController,
        controllerAs: 'vm'
      })
      .state('usuario.edit', {
        template: require('@views/usuario/usuarioCad.html'),
        url: '/{id}',
        controller: UsuarioCadController,
        controllerAs: 'vm'
      });
  }]
}
