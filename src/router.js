import index from './views/index.vue';
import grid from './views/grid.vue';
import button from './views/button.vue';
import icon from './views/icon';
import card from './views/card';
const routers = [
    {
        path: '/',
        meta: {
            title: 'index'
        },
        component: index
    },
    {
        path: '/grid',
        meta: {
            title: 'grid'
        },
        component: grid
    },
    {
        path: '/button',
        meta: {
            title: 'button'
        },
        component: button
    },
    {
        path: '/icon',
        meta: {
            title: 'icon'
        },
        component: icon
    },
    {
        path: '/card',
        meta: {
            title: 'card'
        },
        component: card
    }
]
export default routers;