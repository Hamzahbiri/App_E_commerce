import Accueil from './components/accueil.vue';
import Viewarticles from "./Components/Viewarticles.vue";
import Viewcategories from "./Components/Viewcategories.vue";
import Viewscategories from "./Components/Viewscategories.vue";
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
}    ,
{
        name: 'Viewcategories',
        path: '/listcategories',
        component: Viewcategories
}    
    
];
