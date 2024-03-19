const Filho = ({ altura, peso }) => {
    function calculaPesoIdeal() {
        let imc = peso / (altura * altura)
        if (imc < 18) {
            return (
                <h3>Abaixo do peso</h3>
            );
        } else if (imc > 25) {
            return (
                <h3>Acima do peso</h3>
            );
        } else {
            return (
                <h3>Peso Ideal</h3>
            );
        }
    }
    return (
        <div>
            <h1>Filho</h1>
            <h3>altura: {altura}</h3>
            <h3>peso: {peso}</h3>
            <h3>imc: {peso / (altura * altura)}</h3>
            {calculaPesoIdeal()}
        </div>
    );
}

export default Filho;