//Componente Contenedor
import CardItem from "../Card/Card"
import { useState, useEffect }  from  'react';

const CardList = () => {
    const [products, setProducts] = useState ([])
    const productos = [
        {
            title : 'Hamburguesa de Carne',
            price : 2500,
            image : 'karnevil.png',
            description: 'Hamburguesa a base de plantas, sabor carne',
            stock: 5,
            id: 3,
            initial: 1,
        }, {
            title : 'Hamburguesa de Pollo',
            price : 2503,
            image : 'chickenvil.png',
            description: 'Hamburguesa a base de plantas, sabor pollo',
            stock: 5,
            id: 4,
            initial: 1,
        }, {
            title : 'Hamburguesa de Carne',
            price : 2500,
            image : 'karnevil.png',
            description: 'Hamburguesa a base de plantas, sabor carne',
            stock: 5,
            id: 6,
            initial: 1,
        }, {
            title : 'Hamburguesa de Pollo',
            price : 2503,
            image : 'chickenvil.png',
            description: 'Hamburguesa a base de plantas, sabor pollo',
            stock: 5,
            id: 7,
            initial: 1,
        }, 
    ]
    
    const getProducts = () => {
        return new Promise( (resolve, reject)   => {
            resolve (productos)
        })
    }
    


useEffect(() => {
    getProducts() 
    .then( (response) => {
        console.log("Respuesta Promesa", response)
        setProducts(response)
    })
    .catch ( (err) => {
        console.log("Fallo la llamada")
    })
    .finally( () => {
        console.log("Finally: Termino la promesa")
    })
    

}, [])
    
   

    return(
    <div className= "container">
    {
        
        products.map( ({title, price, image, stock, initial}) => {
            return(
                <div>
                <CardItem title={title}  price={price} image={image} stock={stock} initial={initial}/>
                </div>
            )
        }) 
    }
        {/* <CardItem title="Hamburguesa de Carne"  price={2500} image={"karnevil.png"} />
        <CardItem title="Hamburguesa de Pollo"  price={2503} image={"chickenvil.png"}/>
        <CardItem title="Hamburguesa de Carne"  price={2500} image={"karnevil.png"} />
        <CardItem title="Hamburguesa de Pollo"  price={2503} image={"chickenvil.png"}/> */}
    </div>
    )
}

export default CardList