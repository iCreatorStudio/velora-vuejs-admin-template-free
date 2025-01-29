import { createPinia } from 'pinia'
import type { App } from 'vue'
import vuetify from '@plugins/vuetify/vuetify'
import { loadFonts } from '@plugins/webfontloader'

import router from '@/router'

export function registerPlugins(app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(createPinia())
}
