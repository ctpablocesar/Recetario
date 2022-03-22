import { fetchSinToken } from "../Helpers/fetch"
import Swal from 'sweetalert2';

export const sendMessage = ({ nombre, telefono, correo, asunto, mensaje }) => {
    return async () => {
        const resp = await fetchSinToken('contacto', { nombre, telefono, correo, asunto, mensaje }, 'POST')
        const body = await resp.json()
        if (body.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: body.msg,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

export const crearUsuario = (value) => {
    return async () => {

        const { nombre, correo, contraseña } = value

        const resp = await fetchSinToken('auth/new', { name: nombre, email: correo, password: contraseña, rol: 'user' }, 'POST')
        const body = await resp.json()

        console.log(body);

        if (body.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: body.msg,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}