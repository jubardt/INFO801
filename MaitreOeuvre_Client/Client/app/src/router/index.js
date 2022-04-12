import { createRouter, createWebHistory } from 'vue-router';
import listes from '@/components/listes.vue'
import requete from '@/components/requete.vue'
import Home from '@/components/Home.vue'
import newOffre from '@/components/newOffre.vue'


const routes = [
    {
        name: 'liste',
        path: '/liste',
        component: listes,
    },
    {
        name: 'requete',
        path: '/requete',
        component: requete,
    },
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'offre',
        path: '/offre',
        component: newOffre,
    }

    //Ajouter la route
];

const router = createRouter({
        history: createWebHistory(),
        routes
    }
)

export default router;