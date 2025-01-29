// Components
import App from '@/App.vue'

// styles
import '@styles/index.scss'

// user custom style file
import '@styles/user-custom/style.scss'

// Plugins
import { registerPlugins } from '@plugins/vuetify/index'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
