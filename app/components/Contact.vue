<template>
<!-- prevent = bloqué la soumission pour récupérer des données -->
    <form v-on:submit.prevent="checkForm" action="" name="contact" method="POST" data-netlify="true" class="form">
    <div class="field ">
  <label class="label  title is-4">Email</label>
  <!--v-model pour cibler l'input la data renvoie l'input et inversement -->
  <div class="control has-icons-left has-icons-right pb-4 ">
    <input 
    v-model="email"
    id="email"
    name="email"
    class="input" 
    type="email" 
    placeholder="Entrez svp une adresse email" 
    >

    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
 
<div class="field">
  <label class="label title is-4 ">Sujet</label>
  <div class="control">
    <div class="">
     <div class="control has-icons-left has-icons-right">
    <input
    v-model="sujet" 
    id="sujet"
    class="input" 
    type="text" 
    placeholder="Sujet" 
    value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
    </div>
  </div>
</div>

<div class="field">
  <label class="label title is-4">Message</label>
  <div class="control pb-4">
    <textarea 
    v-model="texte"
    id="texte" 
    class="textarea is-rounded" 
    placeholder="Text">
    </textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox title is-6 pb-4">
      <input type="checkbox">
     Je suis d'accord avec les conditions
    </label>
  </div>
</div>



 <!-- ici on affiche une liste d'erreurs (ul) -->
            <ul class="error-list" v-if="errorList.length > 0">
            <!-- pour chaque message dans errorList = faire une boucle = v-for -->
            <!-- on affiche un li  -->
                <li v-for="error in errorList" v-bind:key="error.id">{{ error.message }}</li>
            </ul>
<!-- envoi du mail via mail to -->
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link"><a href="">Envoyer</a></button>
  </div>
  <div class="control">
    <button class="button is-link"><router-link :to= "{name:'Home'}">Annuler</router-link></button>
  </div>
</div>
<a href="mailto:thomasroszak@hotmail.fr" target="_blank" class="menu"><img src="" border="0" title="Envoyez moi un message">Contact</a>
</form>

</template>

<!-- récupération de la donnée email dans data -->
<script>
export default {
  data: function() {
    return {
      sujet:"",
      email: "",
      texte:"",
      errorList: [],
      
    }
  },
  methods: {
    checkForm: function() {
            // à chaque vérification on repart d'une liste d'erreur vide
            // on rajoutera les éventuelles erreurs dans cet array dans la suite de la méthode
            this.errorList = [];
            // on vérifie que l email contient 3 caractères ou +
            // on utilise this pour accéder aux datas de ce composant
            // (raccourci magique créé par VueJS)
            if (this.email.length < 3) {
                // on ajoute le message d'erreur dans un objet qui sera ajouté à l'array errorList
                this.errorList.push({
                    id: this.errorList.length + 1, // on affecte à id le numéro de l'erreur dans l'array
                    message: 'L email est incorrect !'
                });
          }
          if (this.sujet.length < 3) {
                // on ajoute le message d'erreur dans un objet qui sera ajouté à l'array errorList
                this.errorList.push({
                    id: this.errorList.length + 1, // on affecte à id le numéro de l'erreur dans l'array
                    message: 'Merci  svp de remplir le champs Sujet !'
                });
            }
            if (this.texte.length < 3) {
                // on ajoute le message d'erreur dans un objet qui sera ajouté à l'array errorList
                this.errorList.push({
                    id: this.errorList.length + 1, // on affecte à id le numéro de l'erreur dans l'array
                    message: 'Merci  svp de saisir votre message !'
                });
            }
    }
}
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/_formulaire';

</style>