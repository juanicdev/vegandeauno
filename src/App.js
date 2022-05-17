import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardItem from './components/Card/Card'
import CardClass from './components/Card/CardClass'
import CardList from './components/CardList/CardList'
import SnackBar from './components/SnackBar/SnackBar'
import Modal from './components/Modal/Modal'
import React, { useEffect, useState } from "react";
import Title from './components/Title/Title'



function App() {

 

  let styleCustom = {
    color : 'green',
    border : '1px solid',
    marginBottom: '20'
  }


  /* Estilos en linea con doble {{}}*/
  const [open, setOpen] = useState(false)
  
  const handleClose = () => {
    setOpen = (false)
  }

  return (
    <div className="App">
      <NavBar />
      <div className='hero'>
        <div className="hero-txt">
          <h1 /*style={styleCustom}*/>Vegan de a uno</h1>
          <p>Tu tienda de confianza</p>
        </div>
      </div>
      <Title>
        <h3>Productos Seleccionados</h3>
      </Title>
      <CardList />
      <Title>
        Productos Discontinuados
      </Title>
      <CardList />

      <button onClick={() => setOpen(true)}></button>
      <Modal handleClose= {handleClose} open={open}>
        <h1>MODAL</h1>
       </Modal>
    </div>
    

  );
}

export default App;
