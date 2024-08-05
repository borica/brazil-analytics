// Import Quasar css
import 'quasar/src/css/index.sass'

import './styles/quasar.sass'
import iconSet from 'quasar/icon-set/mdi-v7.js'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import { Dialog, Loading, Notify, type QuasarPluginOptions } from 'quasar'

import 'quasar/src/css/index.sass'
import '@/styles/quasar.sass'

export const qOptions: Partial<QuasarPluginOptions> = {
  config: {
    dark: false
  },
  plugins: {
   Loading, Notify, Dialog
  },
  iconSet: iconSet
}