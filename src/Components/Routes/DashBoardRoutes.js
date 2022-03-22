import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import ScrollToTop from 'react-scroll-up';


import { Navbar } from '../Ui/Navbar';


import { Recetas } from '../Secciones/Recetas/Recetas';
import { Contacto } from '../Secciones/Contacto/Contacto';
import { RecetaCompleta } from '../Secciones/Recetas/RecetaCompleta';
import { Registrarse } from '../Secciones/Registrarse/Registrarse';
import { Galeria } from '../Secciones/Galeria/Galeria';
import { Error } from '../Ui/Error';
import {Inicio} from '../Secciones/Inicio/Inicio'

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route path="/Inicio" component={Inicio} />
                    <Route path="/Recetas" component={Recetas} />
                    <Route path="/Receta/:id" component={RecetaCompleta} />
                    <Route path="/Contacto" component={Contacto} />
                    <Route path="/Registrarse" component={Registrarse} />
                    <Route path="/Galeria" component={Galeria} />
                    <Route path="/Error" component={Error} />
                    <Redirect to="/Inicio" />
                </Switch>
            </div>
            {/* <Footer /> */}
            <ScrollToTop showUnder={200}>
                <i className="fas fa-arrow-up go-up"></i>
            </ScrollToTop >
        </>
    )
}