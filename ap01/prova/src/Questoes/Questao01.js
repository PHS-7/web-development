const Questao01A = () => {
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ]
    return (
        <>
            <h1>Questao01A</h1>
            <Questao01B lista={lista} />
        </>
    )
}

function Questao01B({lista}){
    function maior(lista){
        return lista.map(obj => Math.max(...Object.values(obj)));
    }

    const maiores = maior(lista);

    return (
        <>
            <h1>Questao01B</h1>
            <h3>
                {maiores.join(', ')}
            </h3>
        </>
    )
}

export {Questao01A, Questao01B}