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

        </div>
    </article>
</template>

<script>
export default {
    props: ['proposition'],
}
</script>

<style scoped>
    article{
        width: 50% !important;
        margin: 0 auto !important;
        margin-bottom: 50px !important;
    }

</style>