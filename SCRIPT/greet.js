document.getElementById("barre").style.visibility = "hidden";

let nm = localStorage.getItem("snom");
if(nm === "Trompe") {
    let nm = "Inconnu";
    document.getElementById("nomv").innerHTML = nm;
}
else if(nm === "") {
    let nm = "Inconnu";
    document.getElementById("nomv").innerHTML = nm;
}
else if(nm === null) {
        let nm = "Inconnu";
    document.getElementById("nomv").innerHTML = nm;
}
else {
    document.getElementById("nomv").innerHTML = nm;
}

let prm = localStorage.getItem("sprenom");
if(prm === "Donald") {
    let prm = "voyageur du web";
    document.getElementById("prenom0").innerHTML = prm;
}
else if(prm === "") {
    let prm = "voyageur du web";
    document.getElementById("prenom0").innerHTML = prm;
}
else if(prm === null) {
        let prm = "voyageur du web";
    document.getElementById("prenom0").innerHTML = prm;
}
else {
    document.getElementById("prenom0").innerHTML = prm;
    document.getElementById("prenomv").innerHTML = prm;
}

if(prm === "Donald") {
    let prm2 = "Inconnu";
    document.getElementById("prenomv").innerHTML = prm2;
}
else if(prm === "") {
    let prm2 = "Inconnu";
    document.getElementById("prenomv").innerHTML = prm2;
}
else if(prm === null) {
    let prm2 = "Inconnu";
    document.getElementById("prenomv").innerHTML = prm2;
}
else {
    document.getElementById("prenomv").innerHTML = prm;
}

let dt0 = localStorage.getItem("sdate0");
if(dt0 === "") {
    let dt0 = "Inconnue";
    document.getElementById("date0v").innerHTML = dt0;
}
else if(dt0 === null) {
        let dt0 = "Inconnue";
    document.getElementById("date0v").innerHTML = dt0;
}
else {
    document.getElementById("date0v").innerHTML = dt0;
}

let dt1 = localStorage.getItem("sdate1");
if(dt1 === "") {
    let dt1 = "Inconnue";
    document.getElementById("date1v").innerHTML = dt1;
}
else if(dt1 === null) {
        let dt1 = "Inconnue";
    document.getElementById("date1v").innerHTML = dt1;
}
else {
    document.getElementById("date1v").innerHTML = dt1;
}

let av = localStorage.getItem("sphoto");
if(av === "") {
    let av = "Inconnu";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === null) {
        let av = "Inconnu";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "1") {
    let av = "Tonton Gégé";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "2") {
    let av = "La reine d'Angleterre (Version LIDL)";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "3") {
    let av = "MacGyver";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "4") {
    let av = " Celui qui perd à Candy Crush";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "5") {
    let av = " Le mec paumé";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "6") {
    let av = "Oups j'ai trop zoomé ";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "7") {
    let av = "Le sosie officieux de Kurt Cobain ";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "8") {
    let av = "Michel de la compta";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "9") {
    let av = "Thomas le train";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "10") {
    let av = "Le gentil papy bizare";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "11") {
    let av = "Notre bon vieux pote Franklin";
    document.getElementById("avatarv").innerHTML = av;
}
else if(av === "12") {
    let av = "Dora l'exploratrice";
    document.getElementById("avatarv").innerHTML = av;
}

let num = localStorage.getItem("sfun");
if(num === "") {
    let num = "Inconnu";
    document.getElementById("numv").innerHTML = num;
}
else if(num === null) {
        let num = "Inconnu";
    document.getElementById("numv").innerHTML = num;
}
else {
    document.getElementById("numv").innerHTML = num;
}

let em = localStorage.getItem("semail");
if(em === "une quelconque adresse email") {
    let em = "Inconnue";
    document.getElementById("emv").innerHTML = em;
}
else if(em === "") {
    let em = "Inconnue";
    document.getElementById("emv").innerHTML = em;
}
else if(em === null) {
        let em = "Inconnue";
    document.getElementById("emv").innerHTML = em;
}
else {
    document.getElementById("emv").innerHTML = em;
}

function avancement() {
    var ava = document.getElementById("avancement");
    var prc = document.getElementById("pourcentage");
    prc.innerHTML = ava.value + "%";
}

function modif(val) {
    var ava = document.getElementById("avancement");
    if((ava.value+val)<=ava.max && (ava.value+val)>=0) {
        ava.value += val;
    }
    avancement();
}

function gomme() {
    document.getElementById("barre").style.visibility = "visible";
    localStorage.removeItem('sphoto');
    modif(14);
    setTimeout(suite, 250)
}

function suite() {
    localStorage.removeItem('snom');
    modif(14);
    setTimeout(suite2, 250)
}

function suite2() {
    localStorage.removeItem('sprenom');
    modif(14);
    setTimeout(suite3, 250)
}

function suite3() {
    localStorage.removeItem('sdate0');
    modif(15);
    setTimeout(suite4, 250)
}

function suite4() {
    localStorage.removeItem('sfun');
    modif(14);
    setTimeout(suite5, 250)
}

function suite5() {
    localStorage.removeItem('semail');
    modif(14);
    setTimeout(suite6, 250);
}

function suite6() {
    localStorage.removeItem('sdate1');
    modif(15);
    setTimeout(fin, 250);
}

function fin() {
    let audio = document.querySelector("audio");
    audio.play();
    alert("Suppresion terminée, fermez ce message pour recharger la page.");
    document.location.reload(true);
}
