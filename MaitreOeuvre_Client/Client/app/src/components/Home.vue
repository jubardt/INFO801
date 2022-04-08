<template>
  <h1 class="title">
    Gestion des demandes des fabriquants
  </h1>
  <div class="wrapper">
    <button class="button is-primary"  @click="goTo('/requete')">
      Nouvelle offre
    </button>
    <button class="button is-primary" @click="goTo('/liste')">
      Liste des reponses des fabriquants
    </button>
  </div>
</template>

<script>
export default {
    name: 'Home',
    methods:{
        goTo(path){
            this.$router.push(path);
        },
    }
}
</script>

<style>

</style>