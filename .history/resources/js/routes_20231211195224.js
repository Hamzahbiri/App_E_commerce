import Accueil from './components/accueil.vue';
import Viewarticles from "./Components/Viewarticles.vue";
import Viewarticles from "./Components/Viewcategories.vue";
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
        name: 'Viewcategories',
        path: '/listcategories',
        component: Viewcategories
}    
    
];
