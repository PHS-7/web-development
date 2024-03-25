import Contexto from "./Contexto.jsx"
import React, { useContext } from 'react';
import ComponenteNeto from './ComponenteNeto'

const ComponenteFilho = () => {
    let numero = useContext(Contexto) + 1
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

    return (
        <>
            <h1>Filho</h1>
            <img src={url} alt="Pokemon"></img>
            <ComponenteNeto />
        </>
    )
}

export default ComponenteFilho;