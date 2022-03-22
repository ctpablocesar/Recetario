import { Link, NavLink } from 'react-router-dom';
import { images } from '../../Resources/resources';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import '../../Styles/styles.css';



export const Navbar = () => {

    

    useEffect(() => {
        
        const logo = document.querySelector('.logof');

        gsap.from(logo, {
            rotate: 360
        })

    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-c-primary" >
                <div className="container-fluid">
                    <Link to='/Inicio' className="navbar-brand">
                        <img
                            src={images.logo}
                            className="logof"
                            alt="Logo"
                            // height="90"
                            width="300"
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/Inicio' className="nav-link fs-4 font-serif">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Recetas' className="nav-link diseño-active fs-4 font-serif">
                                    Recetas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Galeria' className="nav-link diseño-active fs-4 font-serif">
                                    Galeria
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Contacto' className="nav-link diseño-active fs-4 font-serif">
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    <div className="d-flex">
                        <a href="http://carrillodavid.utdgrupoti.com/#/">
                            <button type="button" className="btn btn-2 me-2 btn-reg">Ingresar</button>
                        </a>
                        
                        <NavLink to='/Registrarse' >
                            <button type="button" className="btn btn-2 btn-ing">
                                <span className=''>Registrarse</span>
                            </button>
                        </NavLink>
                        
                    </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
