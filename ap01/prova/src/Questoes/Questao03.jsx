import { useEffect, useState } from "react"

const Questao03 = () => {

    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)

    async function receberDados() {
        try {
            let res = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            console.log(res)
            let data = await res.json()
            console.log(data)

            let populacoes = data.map((item) => item.population)

            let maior = Math.max(...populacoes)
            let menor = Math.min(...populacoes)

            setMaior(maior)
            setMenor(menor)
        }
        catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        receberDados()
    }, [])
    return (
        <>
            <h1>Questão 3</h1>
            <h3>População: </h3>
            <p>Maior: {maior}           Menor: {menor}</p>
        </>
    )
}

export default Questao03