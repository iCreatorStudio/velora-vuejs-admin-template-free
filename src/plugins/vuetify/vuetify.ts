import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { icons } from './icons'
import theme from '@plugins/vuetify/theme'
import defaults from '@plugins/vuetify/defaults'

import '@styles/skins/index.scss'
import '@styles/vuetify/_overrides.scss'
import 'vuetify/styles'

// icons
import '@plugins/iconify/icons.css'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  aliases: {
    ApiBtn: VBtn,
  },
  theme,
  defaults,
  icons,
})
