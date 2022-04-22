import { createRouter, createWebHistory } from 'vue-router';
import listes from '@/components/listes.vue'
import Home from '@/components/Home.vue'
import newOffre from '@/components/newOffre.vue'
import ListPropositions from '@/components/ListPropositions.vue'


const routes = [
    {
        name: 'liste',
        path: '/liste/:id',
        component: listes,
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
    },
    {
        name: 'offre',
        path: '/offre',
        component: newOffre,
    },
    {
        name: 'offreListe',
        path: '/',
        component: ListPropositions,
    }

    //Ajouter la route
];

const router = createRouter({
        history: createWebHistory(),
        routes
    }
)

export default router;