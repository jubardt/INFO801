<template>
  <div class="all">
  <h1 class="title">Requête</h1>

  <div v-for="element in listeRequete" :key="element.id">
    <div class="box container-req">
      <h2 class="title">{{element.fabriquant}}</h2>
      <h3>Cout : {{element.cout}}</h3>
      <h3>Délai : {{element.delai}}</h3>
      <h3>Quantité : {{element.quantite}}</h3>
      <h2 class="subtitle">Contre-proposition</h2>
      <h4>Cout : {{element.proposition.cout}}</h4>
      <h4>Délai : {{element.proposition.delai}}</h4>
      <h4>Quantité : {{element.proposition.quantite}}</h4>
      <h4>Sujet : {{element.proposition.sujet}}</h4>

      <div v-for="el in element.proposition.caracteristiques" :key="el.id">
        <h4>{{el}}</h4>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
const request = require('request');

export default {
  name: "listes",
  data() {
    return {
      listeRequete: [],
      isLoaded: false,
    }
  },
  mounted() {
    request('http://localhost:3000/contreprop', { json: true }, (err, res) => {
      if (err) { return console.log(err); }
      this.listeRequete = res.body.liste;
      this.isLoaded = true;
    });
  }
}
</script>

<style scoped>
.box{
  color: white;
  background-color: #2196F3;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.all{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #95794B;
  height: 100%;
  width: 100%;
}


</style>