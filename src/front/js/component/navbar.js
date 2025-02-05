import React, { useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const [navbarSearchTerm, setNavbarSearchTerm] = useState("");
    const [offcanvasSearchTerm, setOffcanvasSearchTerm] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("user");

    const handleNavbarInputChange = (e) => {
        setNavbarSearchTerm(e.target.value);
    };

    const handleOffcanvasInputChange = (e) => {
        setOffcanvasSearchTerm(e.target.value);
    };

    const handleLogout = () => {
        actions.logout();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
        window.location.reload(); 
    };
    

    const handleSearch = (e) => {
        e.preventDefault();
        const searchTerm = e.target.classList.contains("form-navbar")
            ? navbarSearchTerm
            : offcanvasSearchTerm;

        const routes = {
            europa: "/europa",
            asia: "/asia",
            africa: "/africa",
            sevilla: "/sevilla",
            barcelona: "/barcelona",
            madrid: "/madrid",
            krabi: "/krabi",
            bangkok: "/bangkok",
            ayuttayah: "/ayuttayah",
            marrakech: "/marrakech",
            essaouira: "/essaouira",
            merzouga: "/merzouga",
        };

        const lowerCaseTerm = searchTerm.toLowerCase();
        if (routes[lowerCaseTerm]) {
            navigate(routes[lowerCaseTerm]); 
        } else {
            alert("Destino no encontrado."); 
        }
    };

    return (
        <nav className="navbar navbar-dark navbar-expanded-lg fixed-top" >
            <div className="container-fluid d-flex">

                <button
                    className="menu navbar-toggler d-flex"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="" style={{ color: "white" }}>
                        <p>Menu</p>
                        <i className="fa-solid fa-bars"></i>
                    </span>
                </button>

              
                {!token && (
                    <>
                        <div className="text-Navbar d-none d-lg-flex">
                            TripGeeks: Conecta con el mundo a través de tus viajes
                        </div>
                        <div className="auth-container">
                            <div>
                                <Link to="/login">
                                    <span className="textlogin">Iniciar Sesión</span>
                                </Link>
                                <Link to="/Registro">
                                    <span className="textlogin">Registrarse</span>
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                
                {token && <p className="bienvenido-text">!Bienvenido, {userName}¡</p>}

                <form className="form form-navbar" onSubmit={handleSearch}>
                    <input
                        className="label d-none d-lg-flex"
                        type="text"
                        placeholder="Busca tu destino"
                        value={navbarSearchTerm}
                        onChange={handleNavbarInputChange}
                    />
                    <button className="search-button d-none d-lg-flex" type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                    </button>
                </form>
            </div>

            <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navega con nosotros</h5>
                    </Link>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link to="/" style={{ textDecoration: "none", color: "black" }} className="nav-link active" aria-current="page">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="#" id="aQueEsperasDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ¿A qué esperas?
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="aQueEsperasDropdown">
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle" href="#" id="destinosDropdown" role="button">
                                        Destinos
                                    </a>
                                    <ul className="destinos-paises dropdown-menu" aria-labelledby="destinosDropdown">
                                        <Link to="/europa" style={{ textDecoration: "none" }}>
                                            <li><span className="dropdown-item">Europa</span></li>
                                        </Link>
                                        <Link to="/asia" style={{ textDecoration: "none" }}>
                                            <li><span className="dropdown-item">Asia</span></li>
                                        </Link>
                                        <Link to="/africa" style={{ textDecoration: "none" }}>
                                            <li><span className="dropdown-item">África</span></li>
                                        </Link>
                                    </ul>
                                </li>
                                <Link to="/quienessomos" style={{ textDecoration: "none" }}>
                                    <li>
                                        <a className="dropdown-item" href="#">¿Quiénes somos?</a>
                                    </li>
                                </Link>
                                {token && (
                                    <>
                                        <li><Link className="dropdown-item" to="/perfil" style={{ textDecoration: "none" }}>Tu Perfil</Link></li>
                                        <li><Link className="dropdown-item" to="/newpost" style={{ textDecoration: "none" }}>Nueva Historia</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={handleLogout}>Cerrar Sesión</button></li>
                                    </>
                                )}
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Soporte</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="search-label d-flex mt-3" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="text" placeholder="Busca tu destino" aria-label="Search" value={offcanvasSearchTerm} onChange={handleOffcanvasInputChange} />
                        <button className="btn btn-info" type="submit" style={{ fontWeight: "bold" }}>Buscar</button>
                    </form>
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
