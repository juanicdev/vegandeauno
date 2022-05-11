import React from 'react' // No es obligatorio desde la version 17

//Components = UpperCamelCase
const NavBar = () => {
    return (
        //start NavBar
        // Fragment "etiqueta fantasma (si quiero sumar algun elemnto sin tener que agruparlo en un nodo )" = <></>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Vegan <br/>de a uno</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          <div className="collapse navbar-collapse mastHead-buttons" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Ayuda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mi cuenta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Carrito</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
      //ends NavBar
    )
}

export default NavBar