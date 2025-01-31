import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: "#32C8D9" }}>
            <div className="container-fluid d-flex">

                <button
                    className="navbar-toggler d-flex"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation">
                    <span className="" style={{ color: "white" }}>
                        <p>Menu</p><i className="fa-solid fa-bars"></i>
                    </span>
                </button>
                <div
                    className="textNavbar d-flex justify-content-center align-items-center text-align-center"
                    style={{ margin: "auto" }}>
                    "TripGeeks: Conecta con el mundo a través de tus viajes"
                </div>
                <div>
                    <Link to = "/login">
                        <span className="textlogin">Iniciar Sesión</span>
                        </Link>
                        <Link to="/Registro">
                        <span className="textlogin">Registrarse</span>
                        </Link>
                    <input
                        type="text"
                        style={{ borderRadius: "50px", border: "0px", height: "40px" }}
                        placeholder="    ¡Haz tu búsqueda!   "
                    />
                </div>
                <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                Navega con nosotros</h5>
                        </Link>
                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link active" style={{ color: "black" }} aria-current="page">Inicio</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="register" style={{ color: "black" }} href="#">Registrarse</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    style={{ color: "black" }}
                                    href="#"
                                    id="aQueEsperasDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    ¿A qué esperas?
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="aQueEsperasDropdown">
                                    <li className="dropdown-submenu">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            href="#"
                                            id="destinosDropdown"
                                            role="button">
                                            Destinos
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="destinosDropdown">
                                              <Link to="/europa" style={{textDecoration:"none"}}>                                            
                                              <li><span className="dropdown-item" href="#">Europa</span></li>
                                              </Link>
                                              <Link to="/asia" style={{textDecoration:"none"}}>                                             
                                            <li><span className="dropdown-item" href="#">Asia</span></li>
                                            </Link>
                                            <Link to="/africa" style={{textDecoration:"none"}}>
                                            <li><span className="dropdown-item" href="#">África</span></li>
                                            </Link>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="#">¿Quiénes somos?</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Soporte</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-info" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};


document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll('.dropdown-submenu');

  dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
          e.stopPropagation(); 
          const submenu = dropdown.querySelector('.dropdown-menu');
          if (submenu) {
              submenu.classList.toggle('show'); 
          } 
      });
  });
});
