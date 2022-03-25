import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { resetPassword } from '../../../actions/password';
import { useForm } from '../../../Hooks/useForm';
import { Footer } from '../../Ui/Footer';


export const Reset = () => {

    const dispatch = useDispatch();

    const [token, setToken] = useState('');

    const [value, handleInputChange, reset] = useForm({ password: '', passwordNew: '' });

    const { password, passwordNew } = value

    useEffect(() => {
        const token = window.location.href.split('/');
        setToken(token[5]);
        setTimeout(() => {
        }, 500);
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (password !== passwordNew) {
            reset();
            Swal.fire({
                icon: 'error',
                title: 'Las contraseñas no coinciden',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            const tamanio = password.length;
            if (tamanio < 6) {
                Swal.fire({
                    icon: 'error',
                    title: 'La contraseña debe tener al menos 6 caracteres',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                dispatch(resetPassword(token, password));
                Swal.fire({
                    icon: 'success',
                    title: 'Contraseña actualizada',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    return (
        <div>
            <div className="px-4 pt-5  text-center border-bottom">
                <h1 className="display-4 fw-bold">Restablecer contraseña</h1>
                <div className="col-lg-6 mx-auto">
                    <div className="page-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="bg-white contact4 overflow-hidden position-relative">
                                    <div className="row no-gutters">
                                        <div className="container p-0">
                                            <div className="col-lg-12 contact-box mb-4">
                                                <form className="pt-3" onSubmit={handleUpdate}>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group pt-2 ml-3">
                                                                <label htmlFor="password">Contraseña</label>
                                                                <input
                                                                    className="form-control text-dark"
                                                                    type="password"
                                                                    name="password"
                                                                    value={password}
                                                                    onChange={handleInputChange}
                                                                    placeholder="********"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group pt-2 ml-3">
                                                                <label htmlFor="passwordNew">Confirmar contraseña</label>
                                                                <input
                                                                    className="form-control text-dark"
                                                                    type="password"
                                                                    name="passwordNew"
                                                                    value={passwordNew}
                                                                    onChange={handleInputChange}
                                                                    placeholder="********"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 d-flex justify-content-center pt-2 ml-3">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-2 btn-ing px-3 py-2">
                                                                <span>Restablecer</span>
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
