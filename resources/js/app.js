import './bootstrap'
import { Quasar } from 'quasar'
import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'
import Notifications from '@kyvg/vue3-notification'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar CSS
import '../css/quasar.css'
import 'remixicon/fonts/remixicon.css'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
    title: () => `${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Quasar)
            .use(Notifications)
            .mount(el)
    },
    progress: {
        color: '#4B5563',
    },
})
