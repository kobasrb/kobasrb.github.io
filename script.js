/* On ajoute une fonction à chaque partie principale. */
/* On va faire en sorte que lorsqu'une partie s'affiche, les autres disparaissent.*/

function fonction_start() {
    document.getElementById("clones").style.display = "block";
    document.getElementById("droides").style.display = "none";
    document.getElementById("jedis").style.display = "none";
    document.getElementById("mandaloriens").style.display = "none";
    document.getElementById("next").style.display = "block";
    document.getElementById("case").checked = false;
}


function fonction_droides() {
    document.getElementById("droides").style.display = "block";
    document.getElementById("clones").style.display = "none";
    document.getElementById("jedis").style.display = "none";
    document.getElementById("mandaloriens").style.display = "none";
    document.getElementById("case").checked = false;
    document.getElementById("accueil-menu").style.display = "none";
}

function fonction_jedis() {
    document.getElementById("jedis").style.display = "block";
    document.getElementById("clones").style.display = "none";
    document.getElementById("droides").style.display = "none";
    document.getElementById("mandaloriens").style.display = "none";
    /* On rajoute une commande pour fermer le menu hamburger quand on clique sur un lien.*/
    document.getElementById("case").checked = false;
    document.getElementById("accueil-menu").style.display = "none";
}

function fonction_mandaloriens() {
    document.getElementById("mandaloriens").style.display = "block";
    document.getElementById("clones").style.display = "none";
    document.getElementById("droides").style.display = "none";
    document.getElementById("jedis").style.display = "none";
    document.getElementById("case").checked = false;
    document.getElementById("accueil-menu").style.display = "none";
}

function fonction_contact() {
    document.getElementById("case").checked = false;
}

function fonction_next() {

    if(document.getElementById("clones").style.display === "block"){
        document.getElementById("clones").style.display = "none";
        document.getElementById("droides").style.display = "block";
        document.getElementById("accueil-menu").style.display = "none";
    } else if(document.getElementById("droides").style.display === "block"){
        document.getElementById("droides").style.display = "none";
        document.getElementById("jedis").style.display = "block";
    } else if(document.getElementById("jedis").style.display === "block"){
        document.getElementById("jedis").style.display = "none";
        document.getElementById("mandaloriens").style.display = "block";
        document.getElementById("next").style.display = "none";
    }
}


/* On ajoute un petit son de Star Wars Battlefront 2 de 2005 pour les connaisseurs, à chaque clic sur la page.*/

function fonction_audio() {
    var audio = document.getElementById("audio");
    audio.play();
    audio.volume = 0.2;
  }
  