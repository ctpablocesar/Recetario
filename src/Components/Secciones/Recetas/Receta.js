import React from 'react'
import Moment from 'react-moment';

import 'moment/locale/es';
import { Link } from 'react-router-dom';

export const Receta = ({ receta }) => {

    const { titulo, descripcion, tiempo, fecha, ocacion, id } = receta;

    const newDescripcion = descripcion.length > 30 ? `${descripcion.slice(0, 30)}` : descripcion;

    return (
        <div className="card col-sm-5 tarjeta-noticias m-3">
            <div className="row no-gutters">
                <Link className='text-decoration-none text-body' to={`/receta/${id}`}>
                    {/* <div className="col-sm-5 p-3">
                    <img className="card-img" src={imagen} alt="imagen del anuncio" />
                </div> */}
                    <div className="col-sm-12">
                        <div className="card-body">
                            <h5 className="card-title"><strong>{titulo}</strong></h5>
                            <p className="card-text"><strong>Descripcion: </strong>{newDescripcion}
                                {
                                    descripcion.length > 30 &&
                                    <span>...</span>
                                }
                            </p>
                            <div className='etiquetas-receta'>
                                <p className="card-text"><strong>Tipo: </strong>{ocacion}</p>
                                <p className="card-text"><strong>Tiempo: </strong>{tiempo}</p>
                            </div>
                            <p className="card-text text-right"><small className="text-muted"> <Moment fromNow>{fecha}</Moment></small></p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
