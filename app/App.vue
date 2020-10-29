<template>
<!-- La partie <template> contient le HTML de ce composant -->
    <div>
        <Header></Header>
        <RouterView></RouterView>
        <Footer></Footer>
    </div>
</template>

<script>
// Ici on place le JS du composant, c'est ici qu'on trouve la logique du composant)
import Vue from "vue";

// Importer les composants à utiliser ici
import Header from './components/Header';
import Footer from './components/Footer';

export default Vue.extend({
  // on définit des données valables dans ce composant
  
  // je préviens mon composant App qu'il peut utiliser le composant Header
  components: {
      Header,
      Footer,
     
  },




});
</script>

<style lang="scss">


</style>