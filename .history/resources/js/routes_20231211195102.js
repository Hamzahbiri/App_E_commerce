import Accueil from './components/accueil.vue';
import Viewarticles from "./Components/Viewarticles.vue";
export const routes = [
{
name: 'accueil',
path: '/',
component: Accueil
},
{
    name: 'Viewarticles',
    path: '/listarticles',
    component: Viewarticles
    }
    ,
    {
        name: 'Viewarticles',
        path: '/listcategories',
        component: Viewcategories
        }
    
];
