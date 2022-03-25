import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ScrollToTop from 'react-scroll-up';
import { Contacto } from '../Secciones/Contacto/Contacto';
import { Galeria } from '../Secciones/Galeria/Galeria';
import { Inicio } from '../Secciones/Inicio/Inicio';
import { RecetaCompleta } from '../Secciones/Recetas/RecetaCompleta';
import { Recetas } from '../Secciones/Recetas/Recetas';
import { Registrarse } from '../Secciones/Registrarse/Registrarse';
import { Reset } from '../Secciones/Reset/Reset';
import { ResetPassword } from '../Secciones/Reset/ResetPassword';
import { Error } from '../Ui/Error';
import { Navbar } from '../Ui/Navbar';





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
                    <Route path="/reset-password/:token" component={Reset} />
                    <Route path="/reset" component={ResetPassword} />
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