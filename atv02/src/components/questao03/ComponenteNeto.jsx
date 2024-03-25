import Contexto from "./Contexto"
import React, { useContext } from 'react';

const ComponenteNeto = () => {
    let numero = useContext(Contexto) + 2
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'
    return (
        <>
            <h1>Neto</h1>
            <img src={url} alt="Pokemon"></img>
        </>
    )
}

export default ComponenteNeto;