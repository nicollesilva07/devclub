const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const InputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currencyvalue-toconvert"); // Valor em real
    const currencyValueConverted = document.querySelector(".currencyvalue"); // Outras moedas

    console.log(currencySelect.value);
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.3;
    const realToday = 1.0; // Valor do Real Brasileiro

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(InputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(InputCurrencyValue / libraToday);
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(InputCurrencyValue / realToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(InputCurrencyValue);
}

function changeCurrency() {
    const dolarname = document.getElementById("dolarname");
    const currencyImage = document.querySelector(".currencyimg");

    if (currencySelect.value == "dolar") {
        dolarname.innerHTML = "Dólar americano";
        currencyImage.src = "/Img/estados-unidos(1).png"; // Corrigido
    }

    if (currencySelect.value == "euro") {
        dolarname.innerHTML = "Euro";
        currencyImage.src = "/Img/euro.png"; // Corrigido
    }

    if (currencySelect.value == "libra") {
        dolarname.innerHTML = "Libra";
        currencyImage.src = "/Img/libra 1.png"; // Corrigido
    }

    if (currencySelect.value == "real") {
        dolarname.innerHTML = "Real Brasileiro";
        currencyImage.src = "/Img/brasil 2.png"; // Adicione a imagem do Brasil
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);