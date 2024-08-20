import { useEffect, useState } from "react"

const Questao04 = () => {

    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)

    const receberDados = new Promise(resolve => {
        resolve(
            [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47361567 }
            ]
        )
    })
    return (
        <>
            <h1>Questão </h1>
            <h3>População: </h3>
            <p>Maior: {maior}           Menor: {menor}</p>
        </>
    )
}

export default Questao04