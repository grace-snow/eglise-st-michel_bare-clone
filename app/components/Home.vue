<template>
  <div class="tile is-ancestor " >
    
  <div class="tile is-vertical is-8">
    <div class="tile">
            <div class="tile is-parent is-vertical">
        <article class="tile is-child ">
          <p class="title has-text-centered "><router-link :to= "{name: 'Evenements'}" >Evènements</router-link></p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto molestias obcaecati debitis sed hic veritatis perferendis, ut error, sapiente numquam cum culpa tempore? Rerum, numquam pariatur voluptate vero earum repellat perferendis culpa illo quae saepe dignissimos sit porro ab corporis deserunt facilis sint ullam quia iste. Amet, corrupti hic.</p>
        </article>
        <article class="tile is-child ">
          <p class="title has-text-centered"><router-link :to="{name: 'ContactDeux'}">Contact</router-link></p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cupiditate labore excepturi aut fugiat illo est possimus temporibus dignissimos non.</p>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child ">
          <p class="title has-text-centered "><router-link :to= "{name:'StMichel'}"> St Michel</router-link></p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto molestias obcaecati debitis sed hic veritatis perferendis, ut error, sapiente numquam cum culpa tempore? Rerum, numquam pariatur voluptate vero earum repellat perferendis culpa illo quae saepe dignissimos sit porro ab corporis deserunt facilis sint ullam quia iste. Amet, corrupti hic.</p>
        </article>
        <article class="tile is-child ">
          <p class="title has-text-centered "><router-link :to= "{name:'Images'}"> Galerie d'images </router-link></p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cupiditate labore excepturi aut fugiat illo est possimus temporibus dignissimos non.</p>
        </article>
      </div>
      
    </div>
   
 </div>
</div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_home';

</style>