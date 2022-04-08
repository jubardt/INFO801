const express = require("express");
const ContreProposition = require("./model/ContreProposition.js");
const ListeContreProp = require("./model/ListeContreProp.js");
const Proposition = require("./model/Proposition.js");
var cors = require('cors')
const app = express();
const portAPI = 3000;

const WebSocketServer = require('ws');
const portSocket = 9000;
const wss = new WebSocketServer.Server({ port: portSocket })



//Variables globales
let proposition = new Proposition();
let contrePropositions = new ListeContreProp();


//GESTION DE LA BDD
/*var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "pswd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/






///GESTION DE L'API
app.use(cors());
app.get("/", (req,res) => {
   const liste = [
     {
       id: 1,
       name: "Robert",
       description: "Bonjour je m'appelle robert et je veux créer des raquetes de bad"
     },
     {
       id: 2,
       name: "Thomas",
       description: "Je créer ma marque de ballon de volley que j'appelerais BASTOS 3000"
     },
     {
       id: 3,
       name: "Zohir",
       description: "Pour les personnes se faisant mal aux skis, je veux créer des protections de skis pour les chevilles et ainsi les protéger de tout danger, même les potaux"
     },
   ];

  res.json(liste);
})

app.get("/proposition", (req,res) => {
   res.json(proposition);
    proposition = new Proposition();
    console.log(proposition);
 })

 app.get("/contreprop", (req,res) => {
   contrePropositions.vider();
    contrePropositions.ajouter(new ContreProposition());
    contrePropositions.ajouter(new ContreProposition());
    contrePropositions.ajouter(new ContreProposition());
    var contreProp = new ContreProposition(new ContreProposition(),"Coca Cola");
    contrePropositions.ajouter(contreProp);
    res.json(contrePropositions);
    //contrePropositions.supprimer(contreProp);
    console.log(contrePropositions);
  })


app.listen(portAPI, () => console.log(`Example app listening on port ${portAPI}!`));



///GESTION DU WEBSOCKET
wss.on("connection", ws => {
  console.log("nouvelle connection");
  ws.on("message", (data,isBinary) =>{
    console.log("message reçu: "+data);
    ws.send("Oui je t'entends !!!!!");
  });
});
console.log("The WebSocket server is running on port "+portSocket);