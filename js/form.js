function controlForm() {
    var nom = document.formulaire.nom;
    var prenom = document.formulaire.prenom;
    var sexe = document.formulaire.gender.value;
    var mail = document.formulaire.mail;
    var tel = document.formulaire.tel.value;
    var objet = document.formulaire.obj;
    var but = document.formulaire.but;
    var pb = document.formulaire.pb;
    var idee = document.formulaire.suggestions.value;
    var destination = document.formulaire.destination.value;

    if(!nom.value) { nom.classList.add("not-valid"); }
    if(!prenom.value) { prenom.classList.add("not-valid"); }
    if(!mail.value) { mail.classList.add("not-valid"); }

    if(nom.value && prenom.value && mail.value){
        var presentation;
        if(sexe == "female"){ presentation = "Madame " ;}
        else if(sexe == "male"){ presentation = "Monsieur "; }
        else { presentation = ""; }

        var element = document.getElementsByClassName("texte-form");
        var value = 'Bonjour <strong>' + presentation + nom.value + ' ' + prenom.value + '</strong><br>Nous avons bien pris en compte vos remarques ! Un retour vous sera fait par mail dans quelques jours à l\'\adresse suivante  <strong>' + mail.value + '</strong><br>L\'\objet de votre de mande est <strong>' + objet.options[objet.selectedIndex].text + '</strong><br>Vous avez choisi comme destination de prédilection <strong>' + destination + '</strong><br>Merci de nous avoir accordé de votre temps ! ';

        element[0].innerHTML = value;

        if(objet.value == "error"){
            but.parentElement.parentElement.classList.remove("obj-not-selected");
            pb[0].parentElement.parentElement.classList.add("obj-not-selected");
        }
        document.formulaire.reset();
    }
}

function undefinedChamp() {
    var nom = document.formulaire.nom;
    var prenom = document.formulaire.prenom;
    var mail = document.formulaire.mail;
    var ele = [nom, prenom, mail];

    for(var i = 0; i < ele.length; i++){
        ele[i].addEventListener("click", function(){
            if(this.classList.length > 0){
                this.classList.remove("not-valid");
            }
        });
    }
}

function resetButton() {
    var nom = document.formulaire.nom;
    var prenom = document.formulaire.prenom;
    var mail = document.formulaire.mail;
    var ele = [nom, prenom, mail];

    for(var i = 0; i < ele.length; i++){
        if(ele[i].classList.length > 0){
            ele[i].classList.remove("not-valid");
        }
    }

    var value = document.formulaire.obj.value;
    var but = document.formulaire.but.parentElement.parentElement;
    var pb = document.formulaire.pb[0].parentElement.parentElement;

    if(value == "error") {
        but.classList.remove("obj-not-selected");
        pb.classList.add("obj-not-selected");
    }

    var element = document.getElementsByClassName("texte-form");
    element[0].innerHTML = "";
}

function getChamp(){
    var value = document.formulaire.obj.value;
    var but = document.formulaire.but.parentElement.parentElement;
    var pb = document.formulaire.pb[0].parentElement.parentElement;

    if(value == "error" && but.classList.length < 2) {
        but.classList.add("obj-not-selected");
        if(pb.classList.length == 2) { pb.classList.remove("obj-not-selected"); }
    }
    else if(value == "image" && pb.classList.length < 2) {
        pb.classList.add("obj-not-selected");
        if(but.classList.length == 2) { but.classList.remove("obj-not-selected"); }
    }
}
