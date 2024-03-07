import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from '@/pages/HomePage'
import VideosPage from '@/pages/VideosPage'
import SobrePage from '@/pages/SobrePage'
import ContatoPage from '@/pages/ContatoPage'

const routes = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/videos',
        component:VideosPage
    },
    {
        path:'/about',
        component:SobrePage
    },
    {
        path:'/contato',
        component:ContatoPage
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;