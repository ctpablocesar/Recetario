import React from 'react'
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../actions/contacto';
import { useForm } from '../../../Hooks/useForm';

import {Footer } from '../../Ui/Footer';
/* import { images } from '../../../Resources/resources' */

export const Contacto = () => {

  const dispatch = useDispatch()

  const [value, handleInputChange, reset] = useForm({ nombre: '', telefono: '', correo: '', asunto: '', mensaje: '' });

  const { nombre, telefono, correo, asunto, mensaje } = value

  const handleSendMessage = (e) => {
    e.preventDefault()
    dispatch(sendMessage(value))
    setTimeout(() => {
      reset()
    }, 500);
  }

  return (
    <div>
      <div className="px-4 pt-5  text-center border-bottom">
        <h1 className="display-4 fw-bold">¡Contáctanos!</h1>
          <div className="col-lg-6 mx-auto">
            <div className="page-section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="bg-white contact4 overflow-hidden position-relative">
                    <div className="row no-gutters">
                      <div className="container p-0">
                        <div className="col-lg-12 contact-box mb-4">
                          <form className="pt-3" onSubmit={handleSendMessage}>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group pt-2 ml-3">
                                  <input
                                    className="form-control text-dark"
                                    type="text"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleInputChange}
                                    placeholder="Nombre"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group pt-2 ml-3">
                                  <input
                                    id="telrow"
                                    className="form-control text-dark"
                                    type="number"
                                    name="telefono"
                                    value={telefono}
                                    onChange={handleInputChange}
                                    placeholder="Teléfono"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group pt-2 ml-3">
                                  <input
                                    className="form-control text-dark"
                                    type="email"
                                    name="correo"
                                    value={correo}
                                    onChange={handleInputChange}
                                    placeholder="Correo Electrónico"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group pt-2 ml-3">
                                  <input
                                    className="form-control text-dark"
                                    type="text"
                                    name="asunto"
                                    value={asunto}
                                    onChange={handleInputChange}
                                    placeholder="Asunto"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group pt-2 ml-3">
                                  <textarea
                                    className="form-control text-dark"
                                    rows="3"
                                    name="mensaje"
                                    value={mensaje}
                                    onChange={handleInputChange}
                                    placeholder="Mensaje"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-12 d-flex justify-content-center pt-2 ml-3">
                                <button
                                  type="submit"
                                  className="btn btn-2 btn-ing px-3 py-2">
                                  <span> Enviar</span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="overflow-hidden" >
        </div>
      </div>
          <Footer/>
    </div>
  )
}
