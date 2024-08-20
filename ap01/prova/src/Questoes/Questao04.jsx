import { useEffect, useState } from "react"

const Questao04 = () => {
    const [data, setData] = useState([])
    const receberDados = new Promise(resolve => {
        resolve(
            [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47361567 }
            ]
        )
    })
    useEffect(
        () => {
            receberDados.then(
                data => setData(data)
            )
        }, []
    )
    function imprimir() {
        const populacoes = data.map(i => i.population)
        const max = Math.max(...populacoes)
        const min = Math.min(...populacoes)
        return data.filter(i => i.population === max || i.population === min).map(e=>
            <div>
                <p>capital: {e.capital}</p>
                <p>População: {e.population}</p>
            </div>
        )
    }
    return (
        <>
            <h1>Questão </h1>
            {imprimir()}
        </>
    )
}

export default Questao04