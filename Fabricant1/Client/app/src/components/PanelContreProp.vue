<template>
    <h1 class="title">Proposition</h1>
    <div v-if="isLoaded">
        <PropositionCard v-bind:proposition="proposition"/>
    </div>

    <div v-if="!isMaitreOeuvre && contrePropositions==null" id="form">
        <div class="field">
        <label class="label">Réponse proposition: </label>
        <div class="control">
        <textarea id="reponse" class="textarea" placeholder="Cette production de raquette doit permettre ..."/>
        </div>
        <p class="help">Réponse à la demande du client émise en plus de vos estimations sur les caractéristiques du projet</p>
        </div>
    
        <div class="field">
            <label class="label">Cout: </label>
            <div class="control">
                <input id="cout" class="input" type="number" placeholder="60 000 €">
            </div>
            <p class="help">Cout estimé du projet en <strong>€</strong></p>
        </div>

        <div class="field">
            <label class="label">Délai: </label>
            <div class="control">
                <input id="delai" class="input" type="text" placeholder="5 mois">
            </div>
            <p class="help">Estimation du délai de production</p>
        </div>

        <div class="field">
            <label class="label">Quantité: </label>
            <div class="control">
                <input id="quantite" class="input" type="number" placeholder="60 000">
            </div>
            <p class="help">Estimation du cout de production en €</p>
        </div>

        <div id="caracteristiques">
            <label class="label">Caractérisque: </label>
            <div class="field" id="listCaract">
                <div class="control">
                <input class="input" type="text" placeholder="Resistant">
                </div>
                
            </div>

            <button class="button is-primary" @click="addCaract">+</button>
            
        </div>
        <button class="button is-primary" @click="sendContreProp">Envoyer contre proposition</button>
    </div>
    <div v-else-if="!isMaitreOeuvre && contrePropositions!=null">
        <div class="field">
            <label class="label">Réponse proposition: </label>
            <div class="control">
                <textarea id="reponse" class="textarea" placeholder="Cette production de raquette doit permettre ..." readonly/>
            </div>
            <p class="help">Réponse à la demande du client émise en plus de vos estimations sur les caractéristiques du projet</p>
        </div>
    
        <div class="field">
            <label class="label">Cout: </label>
            <div class="control">
                <input id="cout" class="input" type="number" placeholder="60 000 €" readonly>
            </div>
            <p class="help">Cout estimé du projet en <strong>€</strong></p>
        </div>

        <div class="field">
            <label class="label">Délai: </label>
            <div class="control">
                <input id="delai" class="input" type="text" placeholder="5 mois" readonly>
            </div>
            <p class="help">Esitmation du délai de production</p>
        </div>

        <div class="field">
            <label class="label">Quantité: </label>
            <div class="control">
                <input id="quantite" class="input" type="number" placeholder="60 000" readonly>
            </div>
            <p class="help">Estimation du cout de production en €</p>
        </div>

        <div id="caracteristiques">
            <label class="label">Caractérisque: </label>
            <div class="field" id="listCaract">
                <div class="control">
                <input class="input" type="text" placeholder="Resistant">
                </div>
                
            </div>

            <button class="button is-primary" @click="addCaract">+</button>

        </div>
        <strong>Votre proposition n'a pas encore été traité par le client</strong>
    </div>
    <div v-else-if="isMaitreOeuvre && contrePropositions!=null">
      <div class="field">
            <label class="label">Réponse proposition: </label>
            <div class="control">
                <textarea id="reponse" class="textarea" placeholder="Cette production de raquette doit permettre ..." readonly/>
            </div>
            <p class="help">Réponse à la demande du client émise en plus de vos estimations sur les caractéristiques du projet</p>
        </div>
    
        <div class="field">
            <label class="label">Cout: </label>
            <div class="control">
                <input id="cout" class="input" type="number" placeholder="60 000 €" readonly>
            </div>
            <p class="help">Cout estimé du projet en <strong>€</strong></p>
        </div>

        <div class="field">
            <label class="label">Délai: </label>
            <div class="control">
                <input id="delai" class="input" type="text" placeholder="5 mois" readonly>
            </div>
            <p class="help">Esitmation du délai de production</p>
        </div>

        <div class="field">
            <label class="label">Quantité: </label>
            <div class="control">
                <input id="quantite" class="input" type="number" placeholder="60 000" readonly>
            </div>
            <p class="help">Estimation du cout de production en €</p>
        </div>

        <div id="caracteristiques">
            <label class="label">Caractérisque: </label>
            <div class="field" id="listCaract">
                <div class="control">
                <input class="input" type="text" placeholder="Resistant">
                </div>
                
            </div>

            <button class="button is-primary" @click="addCaract">+</button>

        </div>
        <button class="button is-primary">Valider la contre-proposition</button>
        <strong>La proposition n'a pas encore été traité par le client</strong>
    </div>
    <div v-else>
        Aucune contre proposition n'a encore été émise par le fabriquant ou sa dernière proposition à été refusé par le client
    </div>

</template>
<script>
import PropositionCard from './cards/PropositionCard.vue';
export default {
    name:"PanelContreProp",
    components:{
        PropositionCard
    },
    data(){
        return {
            proposition: null,
            contrePropositions: null,
            isLoaded: false,
            isMaitreOeuvre: false,
            idProp:null
        }
    },
    mounted(){
        this.idProp = this.$route.params.id;
        this.isMaitreOeuvre = localStorage.getItem("userfab1") == "true";
    },
    methods:{
        addCaract(){
            var caract = document.getElementById("listCaract");
            var input = document.createElement("input");
            input.setAttribute("class","input");
            input.setAttribute("type","text");
            input.setAttribute("placeholder","Resistant");
            caract.appendChild(input);
        },
        sendContreProp(){

        }
    }
}
</script>

<style scoped>
    #form{
        width: 50% !important;
        margin:0 auto !important;
    }
</style>