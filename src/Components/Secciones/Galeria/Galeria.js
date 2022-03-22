import React, { useEffect, useState } from 'react'
import { Header } from '../../Ui/Header'
import { Carrusel } from './Carrusel';
import { images } from '../../../Resources/resources';
import { useDispatch, useSelector } from 'react-redux';
import { startSavingImages } from '../../../actions/galeria';

export const Galeria = () => {

  const dispatch = useDispatch();

  const [images, setImages] = useState([]);

  const { imagenes } = useSelector(state => state.galeria);

  useEffect(() => {
    dispatch(startSavingImages());
  }, []);


  useEffect(() => {

    setImages([])

    imagenes.map(imagen => {

      setImages(images => [...images, imagen.imagen]);

    });

  }, [imagenes]);

  return (
    <>
      <Header titulo="Galeria" />
      {
        images.length > 0
          ?
          <Carrusel imagenes={images} />
          :
          <h1>No hay imagenes para mostrar</h1>
        }
    </>
  )
}