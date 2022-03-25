import Swal from "sweetalert2"
import { fetchSinToken } from "../Helpers/fetch"
import { finishLoading, startLoading } from "./ui"

export const sendLinkNewPassword = (email) => {
    return async (dispatch) => {
        dispatch(startLoading())
        try {
            const response = await fetchSinToken(`password`, {correo:email}, 'POST')
            const body = await response.json()

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha enviado un link para recuperar la contraseña',
                    text: 'Revisa tu correo',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: body.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            console.log(error)
        }
        dispatch(finishLoading())
    }
}

export const resetPassword = (token, password) => {

    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchSinToken(`password/reset`, { token, password: password }, 'POST');

        const body = await resp.json()

        if (body.ok) {
            Swal.fire({
                icon: 'success',
                title: body.msg,
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

        dispatch(finishLoading())

    }


}
