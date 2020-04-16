let selecteur = 1;
function gauche() {
    selecteur -= 1;
    if(selecteur <= 0) {
        selecteur = 1;
       
    }
    selection();
}
function droite() {
    selecteur += 1;
    if(selecteur >= 13) {
        selecteur = 12;
        selection();
    }
    selection();
}

function selection(){
if(selecteur == 1) {
     document.getElementById("vigne").src = "../MEDIAS/gege.jpg";
     document.getElementById("lgdavt").innerHTML = "Notre bon vieux tonton gégé";
     fxphoto();
}
else if(selecteur == 2) {
    document.getElementById("vigne").src = "../MEDIAS/fossile.jpg";
    document.getElementById("lgdavt").innerHTML = "Tata Mauricette, le sosie officiel de la reine d'Angletterre";
    fxphoto();
}
else if(selecteur == 3) {
    document.getElementById("vigne").src = "../MEDIAS/mac.jpg";
    document.getElementById("lgdavt").innerHTML = "MacGyver en version 2019";
    fxphoto();
}
else if(selecteur == 4) {
    document.getElementById("vigne").src = "../MEDIAS/rageux.jpg";
    document.getElementById("lgdavt").innerHTML = "Kévin quand il a encore perdu à Candy Crush";
    fxphoto();
}
else if(selecteur == 5) {
    document.getElementById("vigne").src = "../MEDIAS/fouine.jpg";
    document.getElementById("lgdavt").innerHTML = "Gné ?";
    fxphoto();
}
else if(selecteur == 6) {
    document.getElementById("vigne").src = "../MEDIAS/perv.png";
    document.getElementById("lgdavt").innerHTML = "Oups j'ai trop zoomé";
    fxphoto();
}
else if(selecteur == 7) {
    document.getElementById("vigne").src = "../MEDIAS/kurt.jpg";
    document.getElementById("lgdavt").innerHTML = "Le sosie officieux de Kurt Cobain";
    fxphoto();
}
else if(selecteur == 8) {
    document.getElementById("vigne").src = "../MEDIAS/michel.jpg";
    document.getElementById("lgdavt").innerHTML = "Michel de la compta";
    fxphoto();
}
else if(selecteur == 9) {
    document.getElementById("vigne").src = "../MEDIAS/thomas.jpeg";
    document.getElementById("lgdavt").innerHTML = "TCHOU-TCHOUUUUUUUU";
    fxphoto();
}
else if(selecteur == 10) {
    document.getElementById("vigne").src = "../MEDIAS/santa.jpg";
    document.getElementById("lgdavt").innerHTML = "Coucou mon petit 😉";
    fxphoto();
}
else if(selecteur == 11) {
    document.getElementById("vigne").src = "../MEDIAS/tortue.jpg";
    document.getElementById("lgdavt").innerHTML = "Il sait faire ses lacets";
    fxphoto();
}
else if(selecteur == 12) {
    document.getElementById("vigne").src = "../MEDIAS/dora.jpg";
    document.getElementById("lgdavt").innerHTML = "Mais où est donc chippeur ?";
    fxphoto();
}
else {
    alert("Erreur");
}
}

function detection() {
    var touche = event.keyCode;
    if (touche == 37) {
        gauche(); 
    }
    else if (touche == 39) {
        droite();
    }
}

function fx00() {
    if (document.getElementById('nom').value === 'Exemple : Trompe') {
        document.getElementById('nom').value = '';
    }
}

function fx01() {
    if (document.getElementById('nom').value === '') {
        document.getElementById('nom').value = 'Exemple : Trompe';
    }
}

function fx10() {
    if (document.getElementById('prenom').value === 'Exemple : Donald') {
        document.getElementById('prenom').value = '';
    }
}

function fx11() {
    if (document.getElementById('prenom').value === '') {
        document.getElementById('prenom').value = 'Exemple : Donald';
    }
}

function fx20() {
    if (document.getElementById('email').value === 'Ex. : jaime@les.kiwis') {
        document.getElementById('email').value = '';
    }
}

function fx21() {
    if (document.getElementById('email').value === '') {
        document.getElementById('email').value = 'Ex. : jaime@les.kiwis';
    }
}

function fx30() {
    if (document.getElementById('nompre').value === 'Patrick ?') {
        document.getElementById('nompre').value = '';
    }
}

function fx31() {
    if (document.getElementById('nompre').value === '') {
        document.getElementById('nompre').value = 'Patrick ?';
    }
}

function fx40() {
    if (document.getElementById('sujet').value === 'Un bug ?') {
        document.getElementById('sujet').value = '';
    }
}

function fx41() {
    if (document.getElementById('sujet').value === '') {
        document.getElementById('sujet').value = 'Un bug ?';
    }
}

function coucou() {
    if (selecteur == 7) {
        let audio = document.querySelector("audio");
        audio.play();
    }
}

function er() {
    let audio = document.querySelector("audio");
    audio.play();
    setTimeout(ham, 4796)
}

function ham(){
    document.getElementById("ph").src = "../MEDIAS/ham.jpg";
    setTimeout(dis, 11849)
}

function dis(){ 
    document.getElementById("ph").src = "../MEDIAS/empty.png";
}

function kiwi() {
	setTimeout(kiwi0, 31000);
}

function kiwi0() {
	let audio1 = document.querySelector("audio");
	audio1.play();
}

function fxphoto() {
    xphoto = selecteur;
}

function fxp() {
    if (document.getElementById("nom").value === "Exemple : Trompe" || document.getElementById("nom").value === "") {
        let xnom = "Trompe";
        localStorage.setItem("snom", xnom);
    } else {
        let xnom = document.getElementById("nom").value;
        localStorage.setItem("snom", xnom);
    }

    if (document.getElementById("prenom").value === "Exemple : Donald" || document.getElementById("prenom").value === "Exemple : Donald") {
        let xprenom = "Donald";
        localStorage.setItem("sprenom", xprenom);
    } else {
        let xprenom = document.getElementById("prenom").value;
        localStorage.setItem("sprenom", xprenom);
    }
    
    localStorage.setItem("sphoto", xphoto);
    let xdate0 = document.getElementById("date0").value;
    localStorage.setItem("sdate0", xdate0);
    let xdate1 = document.getElementById("date1").value;
    localStorage.setItem("sdate1", xdate1);
    let xfun = document.getElementById("fun").value;
    localStorage.setItem("sfun", xfun);
    if (document.getElementById("email").value === "Ex. : jaime@les.kiwis" || document.getElementById("email").value === "") {
        let xemail = "une quelconque adresse email";
        localStorage.setItem("semail", xemail);
    } else {
        let xemail = document.getElementById("email").value;
        localStorage.setItem("semail", xemail);
    }
}
