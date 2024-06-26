import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/PageHome.vue';
import Sobre from './pages/PageSobre.vue';
import Balanco from './pages/PageBalancos.vue';
import CadastroProduto from './pages/PageCadastroProduto.vue';
import MinhaConta from './pages/PageMinhaConta.vue';
import PageLogin from './pages/PageLogin.vue';
import CriarConta from './pages/PageCriarConta.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/Sobre',
            component: Sobre
        },
        {
            path: '/Balanco',
            component: Balanco
        },
        {
            path: '/Produtos',
            component: CadastroProduto
        },
        {
            path: '/MinhaConta',
            component: MinhaConta
        },
        {
            path: '/Login',
            component: PageLogin
        },
        {
            path: '/Login/CriarConta',
            component: CriarConta
        }
    ]
});

export default router;