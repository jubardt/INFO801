import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
require('@/assets/main.scss');

import liste from '@/components/listes.vue'
import requete from '@/components/requete.vue'

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        { path: '/liste', component: liste },
        { path: '/requete', component: requete },
    ],
})


createApp(App)
    .use(router)
    .mount('#app')
