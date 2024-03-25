import React, { useContext } from "react";
import Contexto from "./Contexto";
import ComponenteFilho from "./ComponenteFilho"

const ComponenteAvo = () => {
    let numero = useContext(Contexto)
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

    return (
        <>
            <h1>Avô</h1>
            <img src={url} alt="Pokemon"></img>
            <Contexto.Provider value={numero}>
                <ComponenteFilho />
            </Contexto.Provider>
        </>
    )
}

export default ComponenteAvo