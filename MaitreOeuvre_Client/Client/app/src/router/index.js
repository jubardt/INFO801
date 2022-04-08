import { createRouter, createWebHistory } from 'vue-router';
import listes from '@/components/listes.vue'
import requete from '@/components/requete.vue'


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
    }

    //Ajouter la route
];

const router = createRouter({
        history: createWebHistory(),
        routes
    }
)

export default router;