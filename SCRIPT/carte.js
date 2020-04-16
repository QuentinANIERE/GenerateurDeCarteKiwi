document.getElementById("carteh").style.visibility = "visible";
document.getElementById("nomprenomk").style.visibility = "hidden";
document.getElementById("photok").style.visibility = "hidden";
document.getElementById("datek").style.visibility = "hidden";
document.getElementById("funk").style.visibility = "hidden";
document.getElementById("emailk").style.visibility = "hidden";
document.getElementById("generator").style.visibility = "visible";

document.getElementById("nom0").innerHTML = localStorage.getItem("snom");
document.getElementById("prenom0").innerHTML = localStorage.getItem("sprenom");
document.getElementById("date00").innerHTML = localStorage.getItem("sdate0");
document.getElementById("date10").innerHTML = localStorage.getItem("sdate1");
document.getElementById("fun0").innerHTML = localStorage.getItem("sfun");
document.getElementById("email0").innerHTML = localStorage.getItem("semail");

function fxhs() {
    let audio = document.querySelector("audio");
    audio.play();
    document.getElementById("carteh").style.visibility = "hidden";
    document.getElementById("nomprenomk").style.visibility = "visible";
    document.getElementById("photok").style.visibility = "visible";
    document.getElementById("datek").style.visibility = "visible";
    document.getElementById("funk").style.visibility = "visible";
    document.getElementById("emailk").style.visibility = "visible";
    document.getElementById("generator").style.visibility = "hidden";
}

if (localStorage.getItem("sphoto") == "1") {
    document.getElementById("photo0").src = "../MEDIAS/gege.jpg";
} else if (localStorage.getItem("sphoto") == "2") {
    document.getElementById("photo0").src = "../MEDIAS/fossile.jpg";
} else if (localStorage.getItem("sphoto") == "3") {
    document.getElementById("photo0").src = "../MEDIAS/mac.jpg";
} else if (localStorage.getItem("sphoto") == "4") {
    document.getElementById("photo0").src = "../MEDIAS/rageux.jpg";
} else if (localStorage.getItem("sphoto") == "5") {
    document.getElementById("photo0").src = "../MEDIAS/fouine.jpg";
} else if (localStorage.getItem("sphoto") == "6") {
    document.getElementById("photo0").src = "../MEDIAS/perv.png";
} else if (localStorage.getItem("sphoto") == "7") {
    document.getElementById("photo0").src = "../MEDIAS/kurt.jpg";
} else if (localStorage.getItem("sphoto") == "8") {
    document.getElementById("photo0").src = "../MEDIAS/michel.jpg";
} else if (localStorage.getItem("sphoto") == "9") {
    document.getElementById("photo0").src = "../MEDIAS/thomas.jpeg";
} else if (localStorage.getItem("sphoto") == "10") {
    document.getElementById("photo0").src = "../MEDIAS/santa.jpg";
} else if (localStorage.getItem("sphoto") == "11") {
    document.getElementById("photo0").src = "../MEDIAS/tortue.jpg";
} else if (localStorage.getItem("sphoto") == "12") {
    document.getElementById("photo0").src = "../MEDIAS/dora.jpg";
} else {
    alert("Une erreur est survenue :( Cela est problablement arrivé car vous avez suprimmer vos données. Merci de re-remplir le formulaire");
}