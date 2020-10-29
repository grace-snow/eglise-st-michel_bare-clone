// on récupère le code de Vue depuis les node_modules
import Vue from 'vue';

// on récupère le code de notre composant App depuis le fichier App.vue (dans le même répertoire que ce fichier)
// App est un composant (notre composant racine)
import App from './App.vue';

import router from './router/router';

// on démarre notre application Vue 
// en instanciant notre composant App dans l'élément '#app"
// déclarer qu'on utilise l'instance de VueRouter définie dans "router/router.js"
new Vue({ 
    router, // revient à écrire router: router
    render: createElement => createElement(App) 
}).$mount('#app');
// $ mount = utilise le premier élément donné

