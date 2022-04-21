<template>
  <div class="all">
  <h1 class="title">Requête</h1>

  <div v-for="element in listeRequete" :key="element.id">
    <!--<div class="box container-req">-->
      <!--<h2 class="title">{{element.fabriquant}}</h2>
      <h3>Cout : {{element.cout}}</h3>
      <h3>Délai : {{element.delai}}</h3>
      <h3>Quantité : {{element.quantite}}</h3>-->
      <!--<h2 class="subtitle">Contre-proposition</h2>
      <h4>Reponse:{{element.reponse}}</h4>
      <h4>Cout : {{element.cout}}</h4>
      <h4>Délai : {{element.delai}}</h4>
      <h4>Quantité : {{element.quantite}}</h4>
      <h4>Sujet : {{element.sujet}}</h4>

      <div v-for="el in element.caracteristiques" :key="el.id">
        <h4>{{el}}</h4>
      </div>

    </div>-->
    <contrePropositionCard v-bind:proposition="element"></contrePropositionCard>
  </div>
  </div>
</template>

<script>
const request = require('request');
import contrePropositionCard from './cards/ContrePropositionCard.vue'

export default {
  name: "listes",
  props: ['propId'],
  components: {
    contrePropositionCard,
  },
  data() {
    return {
      listeRequete: [],
      isLoaded: false,
    }
  },
  mounted() {
    /*request('http://localhost:3000/contrePropositions', { json: true }, (err, res) => {
      if (err) { return console.log(err); }
      this.listeRequete = res.body;
      this.isLoaded = true;
    });*/
    console.log(this.$route.params.id);


    var options = {
    url:"http://localhost:3000/contrePropositions",
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            "proposition_id": this.$route.params.id
        })
    };

    request(options, (err, res) => {
        console.log(JSON.parse(res.body));
        this.listeRequete = JSON.parse(res.body);
        this.isLoaded = true;
        //console.log(this.listeRequete);
    });
  }
}
</script>

<style scoped>



</style>