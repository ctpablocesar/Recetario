import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';
import { Footer} from './Footer';
export const Error = () => {
  return (

    <div className='error_404'>
      <Header titulo="Pagina no encontrada" />
      <div style={{ fontSize: `2.1rem` }}>
        <center className="my-5 py-4">

          <h2>Error 404</h2>
          <p>Página no encontrada</p>
          <p><i className="fas fa-times"></i></p>
          <NavLink to='/Inicio' >
              <button type="button" className="btn btn-2 btn-ing">
                  <span className=''>Inicio</span>
              </button>
          </NavLink>
        </center>
      </div>
      <Footer/>
    </div>
  );
};
