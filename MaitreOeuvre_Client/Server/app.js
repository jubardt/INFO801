const express = require("express");
const ContreProposition = require("./model/ContreProposition.js");
const ListeProp = require("./model/ListeProp.js");
const Proposition = require("./model/Proposition.js");
var cors = require('cors')
const mongoose = require("mongoose");
const app = express();
const portAPI = 3000;

const WebSocketServer = require('ws');
const portSocket = 9000;
const wss = new WebSocketServer.Server({ port: portSocket })

app.use(cors());
app.use(express.json());

///MODEL POUR LA BDD////
const PropositionSchema = new mongoose.Schema({
  sujet: String,
  description: String,
  cout: Number,
  delai: String,
  quantite: Number,
  estValide: Boolean,
  caracteristiques: [String],
})

const ContrePropositionSchema = new mongoose.Schema({
  proposition: { type: mongoose.Schema.Types.ObjectId, ref: "Proposition" },
  reponse: String,
  cout: Number,
  delai: String,
  quantite: Number,
  estValide: Boolean,
  estAccepte: Boolean,
  caracteristiques: [String],
})

const PropositionBDD = mongoose.model("Proposition", PropositionSchema);
const ContrePropositionBDD = mongoose.model("ContreProposition", ContrePropositionSchema);




//////TEST MONGOOSE//////
main().catch(error => console.error(error));

async function main() {

  //INITIALISATION DES LISTES DE PROPOSITIONS ET DE CONTRE-PROPOSITIONS
  await mongoose.connect("mongodb://localhost:27017/app");
  /*const test = new PropositionBDD({sujet:"test",description:"Une batterie de test pour voir si ça marche",cout:0,delai:"5 jours",quantite:0,estValide:false,caracteristiques:["Robuste","Métallique","flexible"]});
  await test.save();
  const testContre = new ContrePropositionBDD({proposition:test._id,reponse:"Une batterie de test pour voir si ça marche",cout:0,delai:"5 jours",quantite:0,estValide:false,estAccepte:false,caracteristiques:["Robuste","Métallique","flexible"]});
  testContre.save();
  const propositionsBDD = await PropositionBDD.find();
  const contrePropositionBDD = await ContrePropositionBDD.find();
  console.log(propositionsBDD);
  console.log(contrePropositionBDD);*/


  //////EXEMPLES MONGOOSE//////

  /*const kittySchema = new mongoose.Schema({
    name: String
  });
  
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
  
  
  const kitten = mongoose.model("kitten", kittySchema);
  const silence = new kitten({ name: "Silence" });
  const prout = new kitten({ name: 'prout' });
  await prout.save();
  await silence.save();

  
  const kittens = await kitten.find();
  //console.log(kittens);
  console.log(prout._id);
  const pouet = await kitten.find({ _id: prout._id });
  console.log(pouet);*/
}




//Variables globales
let proposition = new Proposition();
let contrePropositions = new ListeProp();
let propositions = new ListeProp();

///GESTION DE L'API ET DES ENDPONTS/////////////////


///POST////////////////////////

app.post("/addProposition", (req,res) => {
  (async() => {
    var propAdd = await addProposition(req.body.demande,req.body.description,req.body.cout,req.body.delai,req.body.caracteristiques,req.body.quantite);
    console.log(propAdd);
    res.status(200).send("ajout réussi !");
  })();
})

app.post("/addContreProposition", (req,res) => {
  (async() => {
    var contrePropAdd = await addContreProposition(req.body.proposition_id,req.body.reponse,req.body.cout,req.body.delai,req.body.quantite,req.body.caracteristiques);
    console.log(contrePropAdd);
    res.status(200).send("ajout réussi !");
  })();
})

//////UPDATE///////////////////
app.post("/updateProposition", (req,res) => {
  (async() => {
    var propAdd = await updateProposition(req.body.proposition_id,req.body.demande,req.body.description,req.body.cout,req.body.delai,req.body.caracteristiques,req.body.quantite);
    console.log(propAdd);
    res.status(200).send("ajout réussi !");
    const caca = await getPropositions();
    console.log(caca); 
  })();
})

app.post("/updateContreProposition", (req,res) => {
  (async() => {
    var propAdd = await updateContreProposition(req.body.proposition_id,req.body.reponse,req.body.cout,req.body.delai,req.body.quantite,req.body.caracteristiques,req.body.estValide,req.body.estAccepte);
    res.status(200).send("ajout réussi !");
    const caca = await getContrePropositions();
    console.log(caca); 
  })();
})







/////GET////////////////////////

app.get("/proposition", (req,res) => {
   res.json(proposition);
    proposition = new Proposition();
    console.log(proposition);
    res.json(contrePropositions);
 })

 app.get("/propositions", (req,res) => {
  (async() => {
    const props = await getPropositions();
    console.log(props);
    res.status(200).send(props); 
  })();

})

 app.get("/contreprop", (req,res) => {
   contrePropositions.vider();
    contrePropositions.ajouter(new ContreProposition());
    contrePropositions.ajouter(new ContreProposition());
    contrePropositions.ajouter(new ContreProposition());
    res.json(contrePropositions);
    //contrePropositions.supprimer(contreProp);
    console.log(contrePropositions);
  })

  app.post("/contrePropositions", (req,res) => {
    (async() => {
      const props = await getContrePropositions(req.body.proposition_id);
      console.log(props);
      res.status(200).send(props); 
    })();
   })




app.listen(portAPI, () => console.log(`Example app listening on port ${portAPI}!`));



///GESTION DU WEBSOCKET ENTRE LES ESPACES DE TUPLES
wss.on("connection", ws => {
  ws.on("message", (data,isBinary) =>{
    console.log("message reçu: "+data);
    ws.send("Oui je t'entends !!!!!");
  });
});
console.log("The WebSocket server is running on port "+portSocket);




////////ADD////////////////////
//Ajout d'une proposition
async function addProposition(demande,description,cout,delai,caracteristiques,quantite) {
  const propositionBDD = new PropositionBDD({sujet:demande,description:description,cout:cout,delai:delai,caracteristiques:caracteristiques,estValide:false,quantite:quantite});
  await propositionBDD.save();
  return propositionBDD;
}

//Renvoi la liste des contre propositions d'une proposition
async function addContreProposition( proposition_id,reponse,cout,delai,quantite,caracteristiques) {
  const contre = new ContrePropositionBDD({proposition:proposition_id,reponse:reponse,cout:cout,delai:delai,quantite:quantite,estValide:false,estAccepte:false,caracteristiques:caracteristiques});
  await contre.save();
  return contre;
}


///////UPDATE////////////////////
async function updateProposition(proposition_id,demande,description,cout,delai,caracteristiques,quantite, estValide) {
  PropositionBDD.updateOne({_id:proposition_id},{sujet:demande,description:description,cout:cout,delai:delai,caracteristiques:caracteristiques,estValide:estValide,quantite:quantite},function(err,res){});
}

async function updateContreProposition(proposition_id,reponse,cout,delai,quantite,caracteristiques,estValide,estAccepte) {
  ContrePropositionBDD.updateOne({_id:proposition_id},{
  reponse: reponse,
  cout: cout,
  delai: delai,
  quantite: quantite,
  estValide: estValide,
  estAccepte: estAccepte,
  caracteristiques: caracteristiques},function(err,res){});
}

/////GET//////////
async function getContrePropositions(id_proposition) {
  const contrePropositionBDD = await ContrePropositionBDD.find({proposition:id_proposition});
  return contrePropositionBDD;
}

//Renvoi la liste des propositions
async function getPropositions() {
  const propositionsBDD =  await PropositionBDD.find();
  return propositionsBDD;
}

