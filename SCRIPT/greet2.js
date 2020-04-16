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
    console.log("Attention : PRM = NULL")
}
else {
    document.getElementById("prenom0").innerHTML = prm;
}