// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtém os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.querySelector("select#currency")

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
    console.log(amount, price, symbol)
}
