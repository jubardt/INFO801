<template>
  <h1 class="title">
    Gestion des demandes des fabriquants
  </h1>
  <div class="wrapper" @click="goTo('/liste')">
    <button class="button is-primary">
      Nouvelle demande aux fabriquants
    </button>
    <button class="button is-primary" @click="goTo('/requete')">
      Liste des reponses des fabriquants
    </button>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button{
  margin-top: 20px;
  width: 50%;
}
</style>
