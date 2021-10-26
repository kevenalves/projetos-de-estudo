const url = "https://economia.awesomeapi.com.br/last/USD"

const dolarHoje = () => {
    const input = document.getElementById("dolar")
    const usd = input.value

    fetch(url).then(response => response.json()).then(dolar => {
        let valor = dolar.USDBRL.ask
        let resultado = usd * valor

        document.getElementById("real").value = resultado.toFixed(2)

    }).catch(e => {
        console.log(e)
    })
}

dolarHoje()


const realHoje = () => {
    const input = document.getElementById("real")
    const real = input.value

    fetch(url).then(response => response.json()).then(dolar => {
        let valor = dolar.USDBRL.ask
        let resultado = real / valor

        document.getElementById("dolar").value = resultado.toFixed(2)

    }).catch(e => {
        console.log(e)
    })

}
