import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className="foot">
      <div className="footer-content">
        <h3>Recetario S2C</h3>
        <ul className="socials">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2022 <NavLink to="/Inicio"><a href="#">Recetario S2C</a></NavLink>  </p>
        <div className="footer-menu">
          <ul className="">
            <li className="nav-item">
              <NavLink to='/Inicio'>
                <a >Inicio</a>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Recetas'>
                <a >Recetas</a>
              </NavLink>
            </li>
            <li >
              <NavLink to='/Contacto'>
                <a >Contacto</a>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
}

