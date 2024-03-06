import React from "react";
// 01: Function

// function MeusDados() {
//     return (
//         <div>
//             <h1>Nome: Pedro Henrique& Vitor Loula</h1>
//             <h1>Curso: Engenharia de Software</h1>
//             <h1>Universidade: UFC - <i>Campus</i> Quixadá</h1>
//         </div>
//     )
// }


// 02: Arrow Function com return
// const MeusDados = () => {
//     return (
//         <div>
//             <h1>Nome: Pedro Henrique & Vitor Loula</h1>
//             <h1>Curso: Engenharia de Software</h1>
//             <h1>Universidade: UFC - <i>Campus</i> Quixadá</h1>
//         </div>
//     )
// }



// 03: Arrow function sem retorno

const MeusDados = () => <div>
    <h1 style={{fontFamily: "monospace"}}>Nome: Pedro Henrique & Vitor Loula</h1>
    <h1>Curso: Engenharia de Software</h1>
    <h1>Universidade: UFC - <i>Campus</i> Quixadá</h1>

</div>

// class MeusDados extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1 style={{ color: 'green' }}>Pedro Henrique</h1>
//                 <h1>Engenharia de Software</h1>
//                 <h1>UFC-Quixadá</h1>
//             </>
//         )
//     }
// }


export default MeusDados;