import index from './views/index.vue';
import grid from './views/grid.vue';
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
    }
]
export default routers;