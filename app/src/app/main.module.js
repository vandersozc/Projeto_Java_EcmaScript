import * as angular from 'angular'

import { default as uiRouter } from '@uirouter/angularjs'
import { default as uiNotification } from 'angular-ui-notification'
import { default as inputMasks } from 'angular-input-masks'
import { default as flatpickr } from 'ng-flatpickr'
import { mainConfig } from './main/config'
import { plantaConfig } from './planta/plantaConfig'
import { usuarioConfig } from './usuario/usuarioConfig'
import { familiaConfig } from './plantaFamilia/familiaConfig'
import { utilizacaoConfig } from './plantaUtilizacao/utilizacaoConfig'

require('angular-i18n/angular-locale_pt-br.js')

export const appModule = 'app'

var modulo = angular.module(appModule, [uiRouter, uiNotification, inputMasks, flatpickr.name])

modulo.config(mainConfig(modulo))
      .config(plantaConfig(modulo))
      .config(usuarioConfig(modulo))
      .config(familiaConfig(modulo))
      .config(utilizacaoConfig(modulo))
