class ContreProposition{
    proposition;
    fabriquant = "";
    cout = 0;
    delai = 0;
    quantite =0;
    caracteristiques = [];

    constructor(proposition,fabriquant,cout,delai,quantite,caracteristiques){
        this.proposition = proposition;
        this.fabriquant = fabriquant;
        this.cout = cout;
        this.delai = delai;
        this.quantite = quantite;
        this.caracteristiques = caracteristiques;
    }

}

module.exports = ContreProposition;
