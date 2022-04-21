<template>
    <article class="message is-info">
        <div class="message-header">
            <p>Proposition: {{proposition.sujet}}</p>
        </div>
        <div class="message-body" @click="goTo('/liste/'+proposition._id)">
            <h1 class="title"><strong>Description:</strong> {{proposition.description}} </h1>
            <h1 class="title"><strong>Cout:</strong> {{proposition.cout}} €</h1>
            <h1 class="title"><strong>Délai:</strong> {{proposition.delai}} </h1>
            <h1 class="title"><strong>Quantité:</strong> {{proposition.quantite}} unité(s)</h1>
            <p class="title"><strong>Caractérisque du produit:</strong> {{proposition.caracteristiques}}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: ['proposition'],
    methods: {
        goTo(path){
            this.$router.push(path);
        },
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