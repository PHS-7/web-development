import { useState } from "react"
const Pokemom = () => {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [comp, setComp] = useState("")
    function rotacionar() {
        if (comp === "") setComp("back/")
        else (setComp(""))
    }
    return (
        <>
            <div>
                <h1>Questao02</h1>
                <img src={url + comp + "25.png"} alt="pokemom" />
                <button onClick={() => { rotacionar() }}>Virar</button>
            </div>
        </>
    )
}

export default Pokemom