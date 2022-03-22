import Swal from 'sweetalert2';

import { fetchSinToken } from "../Helpers/fetch"
import { types } from "../Types/types"
import { finishLoading, startLoading } from "./ui"

export const startLoadingNoticias = () => {
    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchSinToken('noticias')
        const body = await resp.json()

        if (body.ok) {
            dispatch(saveNoticias(body.noticias))
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

const saveNoticias = (noticias) => ({
    type: types.saveNoticias,
    payload: noticias
})