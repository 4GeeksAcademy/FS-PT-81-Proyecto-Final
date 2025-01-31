import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Europa } from "./pages/europe";
import { Sevilla } from "./pages/sevilla";
import { Barcelona } from "./pages/barcelona";
import { Madrid } from "./pages/madrid";
import {Marrakech} from "./pages/marrakech";
import { Essaouira } from "./pages/essaouira";
import { Merzouga } from "./pages/merzouga";
import {Krabi} from "./pages/krabi";
import { Bangkok } from "./pages/bangkok";
import { Ayuttayah } from "./pages/ayuttayah";
import { Asia } from "./pages/asia";
import { Africa } from "./pages/africa";

import { Registro} from "./component/formularioRegistro.js";
import {LoginVista} from "./component/loginvista.js";
import { PerfilVista } from "./pages/vistaPerfil.js";
import { RecuperacionContraseña  } from "./component/recuperacionContraseña.js";
import { QuienesSomos } from "./pages/quienesSomos.js";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Europa />} path="/europa" />
                        <Route element={<Sevilla />} path="/sevilla" />
                        <Route element = {<Barcelona />} path= "/barcelona"/>
                        <Route element= {<Madrid />} path ="/madrid" />
                        <Route element={<Africa />} path="/africa" />
                        <Route element = {<Marrakech />} path ="/marrakech" />                      
                        <Route element={<Essaouira />} path ="/essaouira" />
                        <Route element={<Merzouga />} path ="/merzouga" />                       
                        <Route element={<Asia />} path="/asia" />
                        <Route element={<Krabi />} path="/krabi" />
                        <Route element={<Bangkok />} path="/bangkok" />
                        <Route element={<Ayuttayah />} path="/ayuttayah" />
                       <Route element= {<QuienesSomos />} path ="/quienessomos" />
                        <Route element = {<LoginVista />} path= "/login" />
                        <Route element = {<Registro />} path= "/Registro" />
                        <Route element = {<PerfilVista />} path= "/Perfil" />
                       <Route element = {<RecuperacionContraseña/>} path= "/recuperar-contrasena" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
