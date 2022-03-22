import React, { useState } from 'react'
import gsap from 'gsap'
import '../../../Styles/carrusel.css'

export const Carrusel = ({ imagenes }) => {

    const tamaño = (imagenes.length) - 1;

    const [indice, setIndice] = useState(0);

    const siguiente = () => {

        indice > tamaño - 1 ? setIndice(0) : setIndice(indice + 1);

        setTimeout(() => {

            const img = document.querySelector('.carrusel-img');

            gsap.from(img, {
                opacity: 0,
                x: 100,
                duration: 2,
            })
        }, 30);

    }

    const anterior = () => {

        indice == 0 ? setIndice(tamaño) : setIndice(indice - 1);
        setTimeout(() => {
            const img = document.querySelector('.carrusel-img');

            gsap.from(img, {
                opacity: 0,
                x: -100,
                duration: 1,
            })

        }, 30);

    }

    return (
        <div className='container-carrusel'>
            <div className="carrusel">
                {
                    tamaño > 0
                    &&
                    <div className="flecha" onClick={anterior} >
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                }
                <div className="carrusel-img">
                    <img src={imagenes[indice]} alt="imagen" width='500' height='500' />
                </div>
                {
                    tamaño > 0
                    &&
                    <div className="flecha" onClick={siguiente}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                }
            </div>
        </div>
    )
}