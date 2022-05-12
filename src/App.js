import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import NavBar from './components/NavBar/NavBar'
import CardItem from './components/Card/Card'
import CardClass from './components/Card/CardClass'
import CardList from './components/CardList/CardList'
import SnackBar from './components/SnackBar/SnackBar'

function App() {

  let styleCustom = {
    color : 'green',
    border : '1px solid',
    marginBottom: '20'
  }

  /* Estilos en linea con doble {{}}*/
  
  return (
    <div className="App">
      <NavBar />
      <div className='hero'>
        <div className="hero-txt">
          <h1 /*style={styleCustom}*/>Vegan de a uno</h1>
          <p>Tu tienda de confianza</p>
        </div>
      </div>
      <CardList />
      


    </div>

    

  );
}

export default App;
