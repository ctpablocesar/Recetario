import React, { useEffect, useState } from 'react'

import { Receta } from './Receta'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingRecetaAvanzada, startLoadingRecetas, startLoadingRecetaSimple, startLoadingRecetaTiempo, startLoadingRecetaTipo } from '../../../actions/recetas';
import { Footer } from '../../Ui/Footer';
import { useForm } from '../../../Hooks/useForm';

export const Recetas = () => {

    const dispatch = useDispatch();

    const { saving } = useSelector(state => state.ui);

    const { recetas } = useSelector(state => state.recetas)

    const [value, handleInputChange, reset] = useForm({ avanzada: '', simple: '' });

    const [simple, setSimple] = useState(false);

    const [avanzada, setAvanzada] = useState(false);

    const [filtro, setFiltro] = useState(false);

    const [tipo, setTipo] = useState(false);

    const [tiempo, setTiempo] = useState(false);

    const [tiempoValue, setTiempoValue] = useState('corto');

    const [tipoValue, setTipoValue] = useState('desayuno');

    useEffect(() => {
        dispatch(startLoadingRecetaAvanzada(value.avanzada));
    }, [value.avanzada]);

    useEffect(() => {
        dispatch(startLoadingRecetas())
    }, [saving]);

    const handleCargarTodas = () => {
        dispatch(startLoadingRecetas())
        setSimple(false);
        setAvanzada(false);
        setFiltro(false);
    }

    const handleOpenSimple = () => {
        setSimple(true);
        setAvanzada(false);
        setFiltro(false);
    }

    const handleOpenAvanzada = () => {
        setSimple(false);
        setAvanzada(true);
        setFiltro(false);
    }

    const handleOpenFiltro = () => {
        setSimple(false);
        setAvanzada(false);
        setFiltro(true);
    }

    const handleOpenTipo = () => {
        setTipo(true);
        setTiempo(false);
    }

    const handleOpenTiempo = () => {
        setTipo(false);
        setTiempo(true);
    }

    const handleChangeTipo = (e) => {
        e.preventDefault();
        setTipoValue(e.target.value);
        if (tipo) {
            dispatch(startLoadingRecetaTipo(e.target.value));
        }
    }

    const handleChangeTiempo = (e) => {
        e.preventDefault();
        setTiempoValue(e.target.value);
        if (tiempo) {
            dispatch(startLoadingRecetaTiempo(e.target.value));
        }
    }

    const handleSimple = () => {
        dispatch(startLoadingRecetaSimple(value.simple))
    }

    return (
        <>


            <div className="wrapper">
                <article className="content">


                    <div>
                        
                        <div>
                            <h2 className='text-center'>Busqueda</h2>
                            <div className='w-50 d-flex justify-content-around mx-auto m-4'>
                                <button className='btn btn-info' onClick={handleOpenSimple} >Simple</button>
                                <button className='btn btn-info' onClick={handleOpenAvanzada} >Avanzada</button>
                                <button className='btn btn-info' onClick={handleOpenFiltro} >Filtros</button>
                                <button className='btn btn-info' onClick={handleCargarTodas} >Mostrar todas</button>
                            </div>

                            {
                                simple &&
                                <div className='w-75 d-flex justify-content-center mx-auto m-4'>
                                    <input
                                        type="search"
                                        name="simple"
                                        id="simple"
                                        placeholder="¿Qué deseas buscar?"
                                        className='form-control col-sm-3 m-2'
                                        value={value.simple}
                                        onChange={handleInputChange}
                                    />
                                    <button className='btn btn-info m-2' onClick={handleSimple}>Buscar</button>
                                </div>

                            }

                            {
                                avanzada &&
                                <div className='w-75 d-flex justify-content-center mx-auto m-4'>
                                    <label htmlFor="buscar" className='font-weight-bold m-2 align-self-center'>¿Qué deseas buscar?</label>
                                    <input
                                        type="text"
                                        name="avanzada"
                                        id="avanzada"
                                        placeholder="Escribelo aquí"
                                        className='form-control col-sm-3 m-2'
                                        value={value.avanzada}
                                        onChange={handleInputChange}
                                    />
                                </div>

                            }


                            {
                                filtro &&
                                <div className='w-90 d-flex justify-content-center mx-auto m-4'>

                                    <input type='radio' value='tipo' name='selector' className='align-self-center' onClick={handleOpenTipo}></input>
                                    <label htmlFor='tipo' className='p-1 align-self-end'>Tipo</label>
                                    <select
                                        name="tipo"
                                        id="tipo"
                                        className='custom-select col-sm-1 m-2 align-self-center'
                                        value={tipoValue}
                                        onChange={handleChangeTipo}
                                    >
                                        <option value="desayuno">Desayuno</option>
                                        <option value="comida">Comida</option>
                                        <option value="cena">Cena</option>
                                    </select>
                                    <input type='radio' value='tiempo' name='selector' className='align-self-center' onClick={handleOpenTiempo} />
                                    <label className='p-1 align-self-end'>Tiempo</label>
                                    <select
                                        name="tiempo"
                                        id="timepo"
                                        className='custom-select col-sm-1 m-2 align-self-center'
                                        value={tiempoValue}
                                        onChange={handleChangeTiempo}
                                    >
                                        <option value="corto">Corto</option>
                                        <option value="mediano">Mediano</option>
                                        <option value="largo">Largo</option>
                                    </select>
                                </div>
                            }

                        </div>
                        <div className=" cards-responsivas w-100 row justify-content-md-center">

                            {
                                !!recetas[0]
                                    ?
                                    recetas.map((receta) => (
                                        <Receta receta={receta} key={receta.id} />
                                    ))
                                    :
                                    <h1 className='sinContenido'>No hay recetas para mostrar</h1>
                            }

                        </div>
                    </div>

                    <Footer />
                </article>
            </div>

        </>
    )
}














