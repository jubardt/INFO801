const express = require("express");
const ContreProposition = require("./model/ContreProposition.js");
const Proposition = require("./model/Proposition.js");
const app = express();
const port = 3000;
let proposition = new Proposition();

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
    var contreProp = new ContreProposition();
    res.json(contreProp);
    console.log(contreProp);
  })


app.listen(port, () => console.log(`Example app listening on port ${port}!`));