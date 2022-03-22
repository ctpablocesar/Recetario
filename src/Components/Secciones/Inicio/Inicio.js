import { Link, NavLink } from 'react-router-dom';
import React from 'react'
import { images } from '../../../Resources/resources';


export const Inicio = () => {
  
    return (
      <>
        <div className="px-4 py-5 text-center hero-section hv-100">
          <Link to='/Inicio' className="navbar-brand">
              <img
                  src={images.logo}
                  className="logof"
                  alt="Logo"
                  // height="90"
                  width="300"
              />
          </Link>
          <h1 className="display-5 fw-bold">Recetario S2C</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
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
      </>
    )
  }