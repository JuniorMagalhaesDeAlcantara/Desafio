function calcula() {
    // obtém tempo digitado pelo usuário 
    var tempoMinuto = document.getElementById("tempo").value;
    // obtém valores selecionado pelo usuário
    var origemDDD = document.getElementById("origem").value;
    var destinoDDD = document.getElementById("destino").value;
    var plano = document.getElementById("plano").value;



    if (origemDDD === "011") {
        switch (destinoDDD) {
            case "011":
                alert("Ligações Local não são calculadas nesse plano!!");
                break;
            case "016":
                valorComFalemais = (tempoMinuto - plano) * 2.09;
                valorSemFalemais = (tempoMinuto * 1.90);
                break;
            case "017":
                valorComFalemais = (tempoMinuto - plano) * 1.87;
                valorSemFalemais = (tempoMinuto * 1.70);
                break;
            case "018":
                valorComFalemais = (tempoMinuto - plano) * 0.99;
                valorSemFalemais = (tempoMinuto * 0.90);
                break;

        }

    }
    if (origemDDD === "016") {
        switch (destinoDDD) {
            case "011":
                valorComFalemais = (tempoMinuto - plano) * 3.19;
                valorSemFalemais = (tempoMinuto * 2.90);
                break;
            case "016":
                alert("Ligações Local não são calculadas nesse plano!!");
                break;
            case "017":
                valorComFalemais = (tempoMinuto - plano) * 2.97;
                valorSemFalemais = (tempoMinuto * 2.70);
                break;
            case "018":
                valorComFalemais = (tempoMinuto - plano) * 2.09;
                valorSemFalemais = (tempoMinuto * 1.90);
                break;

        }

    }
    if (origemDDD === "017") {
        switch (destinoDDD) {
            case "011":
                valorComFalemais = (tempoMinuto - plano) * 2.97;
                valorSemFalemais = (tempoMinuto * 2.70);
                break;
            case "016":
                valorComFalemais = (tempoMinuto - plano) * 3.19;
                valorSemFalemais = (tempoMinuto * 2.90);
                break;
            case "017":
                alert("Ligações Local não são calculadas nesse plano!!");
                break;
            case "018":
                valorComFalemais = (tempoMinuto - plano) * 2.09;
                valorSemFalemais = (tempo * 1.90);
                break;

        }

    }
    if (origemDDD === "018") {
        switch (destinoDDD) {
            case "011":
                valorComFalemais = (tempoMinuto - plano) * 2.09;
                valorSemFalemais = (tempoMinuto * 1.90);
                break;
            case "016":
                valorComFalemais = (tempoMinuto - plano) * 3.19;
                valorSemFalemais = (tempoMinuto * 2.90);
                break;
            case "017":
                valorComFalemais = (tempoMinuto - plano) * 2.97;
                valorSemFalemais = (tempoMinuto * 2.70);
                break;
            case "018":
                alert("Ligações Local não são calculadas nesse plano!!");
                break;

        }

    }

    if (valorComFalemais <= 0) {
        document.getElementById("SemFalemais").textContent = "R$: " + valorSemFalemais.toFixed(2);
        document.getElementById("ComFalemais").textContent = "R$: 0.00"
    } else {
        document.getElementById("SemFalemais").textContent = "R$: " + valorSemFalemais.toFixed(2);
        document.getElementById("ComFalemais").textContent = "R$: " + valorComFalemais.toFixed(2);

    }
}