<template>
    <article class="message is-warning">
        <div class="message-header">
            <p>Contre proposition de fabriquant</p>
        </div>
        <div class="message-body">
            <h1 class="title"><strong>Réponse du fabriquant:</strong> {{proposition.reponse}} </h1>
            <h1 class="title"><strong>Cout:</strong> {{proposition.cout}} € </h1>
            <h1 class="title"><strong>Délai:</strong> {{proposition.delai}} </h1>
            <h1 class="title"><strong>Quantite:</strong> {{proposition.quantite}} </h1>
            <h1 class="title"><strong>Caractérisques:</strong> {{proposition.caracteristiques}} </h1>
            <button class="button is-primary">Accepter</button>
            <button class="button is-warning" @click="deleteContre">Refuser(Contre proposition insatisfaisante)</button>
        </div>
    </article>
</template>

<script>
const request = require('request');
export default {
    props: ['proposition'],
    data() {
        return {
            isAccepted: false,
        }
    },
    mounted(){
        console.log(this.proposition.proposition);
    },
    methods:{
        deleteContre(){
            var options = {
                url:"http://localhost:3000/deleteContreProposition",
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        "proposition_id": this.proposition._id
                    })
                };

                request(options, (err, res) => {
                    console.log(res.body);
                    alert("Refus de la proposition confirmé");
                    this.$router.push("/liste/"+this.proposition.proposition);
                    location.reload();
                });
        }
    }
}
</script>

<style scoped>
    article{
        width: 50% !important;
        margin: 0 auto !important;
        margin-bottom: 50px !important;
    }

</style>