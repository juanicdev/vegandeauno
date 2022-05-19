//Componente Contenedor
import CardItem from "../Card/Card"

const CardList = () => {
    const productos = [
        {
            title : "Hamburguesa de Carne",
            price : "2500",
            image : "karnevil.png",
        }, {
            title : "",
            price : "",
            image : "",
        }, {
            title : "",
            price : "",
            image : "",
        } 
    ]
    return(
    <div className= "container">
        <CardItem title="Hamburguesa de Carne"  price={2500} image={"karnevil.png"} />
        <CardItem title="Hamburguesa de Pollo"  price={2503} image={"chickenvil.png"}/>
        <CardItem title="Hamburguesa de Carne"  price={2500} image={"karnevil.png"} />
        <CardItem title="Hamburguesa de Pollo"  price={2503} image={"chickenvil.png"}/>
    </div>
    )
}

export default CardList