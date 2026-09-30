// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtém os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.querySelector("select#currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipula o input amount para receber apenas números
amount.addEventListener("input", () => {
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

// Captura o submit do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
})

// Função de conversão de moeda
function convertCurrency(amount, price, symbol) {
    try{

        //Exibe o valor da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula e exibe o resultado total
        let total = amount * price
        result.textContent = formatCurrencyBRL(total)
        

        // Aplica a classe que exibe o footer com o resultado
        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)

        // Remove a classe do footer, ocultando-o da tela
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    // Converte para Number para utilizar o toLocaleString
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}