const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;

    let pesoRaw = document.getElementById("peso").value.replace(",", ".");
    let alturaRaw = document.getElementById("altura").value.replace(",", ".");

    let peso = parseFloat(pesoRaw);
    let altura = parseFloat(alturaRaw);
    let classif = "";

    if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        let result = document.getElementById("result");
        result.className = "result erro";
        result.innerHTML = "Preencha todos os campos corretamente.";
        return;
    }

    let altMetro = altura < 3 ? altura : altura / 100;

    const imc = peso / (altMetro * altMetro);

    if (imc < 18.5) {
        classif = "Abaixo do peso normal";
    } else if (imc <= 24.9) {
        classif = "Peso normal";
    } else if (imc <= 29.9) {
        classif = "Excesso de peso";
    } else if (imc <= 34.9) {
        classif = "Obesidade classe I";
    } else if (imc <= 39.9) {
        classif = "Obesidade classe II";
    } else {
        classif = "Obesidade classe III";
    }

    let result = document.getElementById("result");
    result.className = "result";
    result.innerHTML = nome + ", seu IMC é " + imc.toFixed(2) + " e sua classificação é " + classif + ".";
});

form.addEventListener("reset", function () {
    let result = document.getElementById("result");
    result.className = "";
    result.innerHTML = "";
});