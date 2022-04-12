const express = require("express");
const ContreProposition = require("./model/ContreProposition.js");
const ListeProp = require("./model/ListeProp.js");
const Proposition = require("./model/Proposition.js");
var cors = require('cors')
const app = express();
const portAPI = 3000;

const WebSocketServer = require('ws');
const { CP1250_BIN } = require("mysql/lib/protocol/constants/charsets");
const portSocket = 9000;
const wss = new WebSocketServer.Server({ port: portSocket })



//Variables globales
let proposition = new Proposition();
let contrePropositions = new ListeProp();
let propositions = new ListeProp();


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
app.use(express.json());

app.post("/addProposition", (req,res) => {
  //console.log(req);
  propositions.ajouter(new Proposition(req.body.demande,req.body.cout,req.body.delai,req.body.caracteristiques,req.body.quantite));
  console.log(propositions);
  res.send("super nickel");
})

app.get("/proposition", (req,res) => {
   res.json(proposition);
    proposition = new Proposition();
    console.log(proposition);
    res.json(contrePropositions);
 })

 app.get("/propositions", (req,res) => {
   res.json(propositions);
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


app.listen(portAPI, () => console.log(`Example app listening on port ${portAPI}!`));



///GESTION DU WEBSOCKET
wss.on("connection", ws => {
  ws.on("message", (data,isBinary) =>{
    console.log("message reçu: "+data);
    ws.send("Oui je t'entends !!!!!");
  });
});
console.log("The WebSocket server is running on port "+portSocket);