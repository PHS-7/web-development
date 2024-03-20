function Hero({ name, img }) {
    return (
        <div>
            <h3>name: {name}</h3>
            <img src={img} alt="hero image" width={200} height={200}></img>
        </div>
    );
}

function Enemy({ name, img }) {
    return (
        <div>
            <h3>name: {name}</h3>
            <img src={img} alt="enemy image" width={200} height={200}></img>
        </div>
    );
}

function Arena() {
    return (
        <div>
            <h1>Arena</h1>
            <Hero name={"Homem-aranha"} img={"https://wp-content.bluebus.com.br/wp-content/uploads/2014/04/Mike-Mitchell-Marvel-Portraits-Time-mitchell_spiderman_press.jpg"}></Hero>
            <Enemy name={"Doutor octopus"} img={"https://wp-content.bluebus.com.br/wp-content/uploads/2014/04/Mike-Mitchell-Marvel-Portraits-Time-doc-ock.jpg"}></Enemy>
        </div>
    );
}
function World({ children }) {
    return (
        <Arena></Arena>
    )
}
export { Arena, Hero, Enemy, World }