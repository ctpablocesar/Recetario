import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLoadingRecetaCompleta } from '../../../actions/recetas';
import '../../../Styles/recetacompleta.css';
import { Header } from '../../Ui/Header';

export const RecetaCompleta = ({ uid }, props) => {

  const dispatch = useDispatch();

  const { receta } = useSelector(state => state.recetas);

  const [idReceta, setIdReceta] = useState('');

  useEffect(() => {
    const id = window.location.href.split('/');
    setIdReceta(id[5]);
    dispatch(startLoadingRecetaCompleta(idReceta));
    setTimeout(() => {
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(startLoadingRecetaCompleta(idReceta));
    setTimeout(() => {
    }, 500);
  }, [idReceta]);

  return (
    <>
      <Header titulo={!!receta.titulo ? receta.titulo : 'Receta inexistente'} />
      <div className='contenedor'>
        {/* <h1>Titulo</h1> */}


        {

          !!receta.titulo
            ?
            <>
              <div className='cont-descripcion'>
                <h2> Descripcion</h2>
                <p className='texto-descripcion'>{receta.descripcion}</p>
              </div>
              <div className='cont-etiquetas'>
                <p> Tipo: {receta.ocacion}</p>
                <p> Tiempo: {receta.tiempo}</p>
                {/* <p> Etiquietas</p> */}
              </div>
              <div className='cont-descripcion'>
                <h2>Ingredientes</h2>
                <p className=' texto-descripcion'>{receta.ingredientes}</p>
              </div>
              <div className='cont-descripcion'>
                <h2>Instrucciones</h2>
                <p className=' texto-descripcion'>{receta.procedimiento}</p>
              </div>
            </>
            :
            <>
              <br />
              <h1>Receta inexistente</h1>
              <br />
            </>

        }


      </div>

    </>
  );

};
