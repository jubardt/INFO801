class Proposition {
    static ID_INC = 1;
    sujet = "";
    cout = 0;
    delai = 0;
    quantite =0;
    caracteristiques = [];



    constructor(sujet="vide",cout=0,delai=0,caracteristiques=[],quantite=0) {
        this.id = Proposition.ID_INC++;
        this.sujet = sujet;
        this.cout = cout;
        this.delai = delai;
        this.caracteristiques = caracteristiques;
        this.quantite = quantite;
        this.caracteristiques.push("résistant");
        this.caracteristiques.push("métaux");
        this.caracteristiques.push("flexible");
    }
};

module.exports = Proposition;