import index from './views/index.vue';
import grid from './views/grid.vue';
import button from './views/button.vue';
import selectOptions from './views/selectOptions.vue';
import icon from './views/icon';
import card from './views/card';
import modal from './views/modal';
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
    },
    {
        path: '/selectOptions',
        meta: {
            title: 'selectOptions'
        },
        component: selectOptions
    },
    {
        path: '/modal',
        meta: {
            title: 'modal'
        },
        component: modal
    },
]
export default routers;