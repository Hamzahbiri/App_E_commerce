import Accueil from './components/accueil.vue';
import Viewarticles from "./Components/Article/Viewarticles.vue";
import Viewcategories from "./Components/Viewcategories.vue";
import Viewscategories from "./Components/Viewscategories.vue";
import Addarticle from "./Components/Article/Addarticle.vue";

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
        name: 'Viewscategories',
        path: '/listscategories',
        component: Viewscategories
}
,
{
        name: 'Addarticle',
        path: '/Addarticle',
        component: Addarticle
}    
    
];
