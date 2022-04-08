<template>
  <h1>Requête</h1>

  <div v-for="element in listeRequete" :key="element.id">
    <h2>{{element}}</h2>
  </div>

  <button class="button" @click="test()">test</button>
</template>

<script>
let listeRequete;
const request = require('request');

export default {
  name: "listes",
  data() {
    return {
      listeRequete: ["caca", "coucou", "salut"]
    }
  },
  mounted() {
    request('http://localhost:3000/contreprop', { json: true }, (err, res) => {
      if (err) { return console.log(err); }
      console.log(res.body);
      listeRequete = res.body.liste;
      console.log(listeRequete.length);
    });
  },
  methods:{
    test(){
      listeRequete.forEach(element => {
        console.log(element.fabriquant);
      });
    }

  }
}
</script>

<style scoped>

</style>