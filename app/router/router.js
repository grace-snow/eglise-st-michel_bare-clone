/**
 * Ici on déclare notre objet VueRouter, puis on l'exporter
 */

// importer la classe VueRouter

import Vue from "vue";
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import ContactView from '../views/ContactView';
import MessesView from '../views/MessesView';
import EvenementsView from '../views/EvenementsView';
import DonsView from '../views/DonsView';
import MentionsLegalesView from '../views/MentionsLegalesView';
import ErrorView from '../views/ErrorView';
import StMichelView from '../views/StMichelView';
import ContactDeuxView from '../views/ContactDeuxView';
import ImagesView from '../views/ImagesView';

// informer Vue qu'il doit utiliser le VueRouter
// VueRouter est un "plugin" pour vue
Vue.use(VueRouter);

// déclarer un array qui contient les routes
// une route est un objet qui contient
// - un clé path (nom imposé) => l'url de cette route
// - une clé component (nom imposé) => le composant à afficher
// chaque route correspond à une url qu'on veut pouvoir utiliser dans notre application, le but ici est d'associer un composant à chaque url
// les composants qui affichent les pages sont des "views", elles servent d'intermiédiaire pour garder le caractère autonome de nos simples components
const routeList = [

    {name: 'Home', path: '/', component: HomeView},
    {name: 'Contact', path: '/', component: ContactView},
    {name: 'Messes', path: '/Messes', component: MessesView},
    {name: 'Evenements', path: '/Evenements', component: EvenementsView},
    {name: 'Dons', path: '/Dons', component: DonsView},
    {name: 'MentionsLegales', path: '/MentionsLegales', component: MentionsLegalesView},
 // mettre le path '*' pour envoyer vers une page d'erreur   
    {name: 'Error', path: '*', component: ErrorView},
    {name: 'StMichel', path: '/StMichel', component: StMichelView},
    {name: 'ContactDeux', path: '/ContactDeux', component: ContactDeuxView},
    {name: 'Images', path: '/Images', component: ImagesView},

];

// déclarer un nouveau routeur avec ces routes
// on donne au routeur (via l'objet en argument) la liste des routes (forcément à la clé "routes", nom imposé)
// on déclare aussi qu'on utilise le mode "history" => avoir des urls de la forme "/chemin" et non "#/chemin"
const router = new VueRouter({
    routes: routeList,
    // mettre l'url en de façon 'lisible' = mode history
    mode: "history"
});

// exporter ce routeur
export default router;