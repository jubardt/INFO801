<template>
    <article class="message is-info">
        <div class="message-header">
            <p>Proposition</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <h1 class="title"> {{proposition.sujet}}</h1>
            <h1 class="title"><strong>Cout:</strong> {{proposition.cout}} €</h1>
            <h1 class="title"><strong>Délai:</strong> {{proposition.delai}} </h1>
            <h1 class="title"><strong>Quantité:</strong> {{proposition.quantite}} unité(s)</h1>
            <p class="title"><strong>Caractérisque du produit:</strong> {{proposition.caracteristiques}}</p>
        </div>
    </article>
</template>

<script>

/*    Proposition {
      sujet: 'test',
      cout: '45554354',
      delai: '54',
      quantite: '45456',
      caracteristiques: [Array],
      id: 8
    }*/ 
export default {
    props: ['proposition'],
}
</script>

<style scoped>


</style>