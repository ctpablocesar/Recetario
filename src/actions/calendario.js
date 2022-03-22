import Swal from 'sweetalert2';

import { fetchSinToken } from "../Helpers/fetch"
import { types } from "../Types/types"
import { finishLoading, startLoading } from "./ui"

export const startSavingCalendario = () => {
    return async (dispatch) => {
        dispatch(startLoading())
        const resp = await fetchSinToken('cale')
        const body = await resp.json()
        if (body.ok) {
            dispatch(saveCalendario(body.calendario[0].imagen))
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

const saveCalendario = (img) => ({
    type: types.saveCalendario,
    payload: img
})