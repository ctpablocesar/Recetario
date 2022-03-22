import Swal from 'sweetalert2';

import { fetchSinToken } from "../Helpers/fetch"
import { types } from "../Types/types"
import { finishLoading, startLoading } from "./ui"

export const startSavingImages = () => {
    return async (dispatch) => {
        dispatch(startLoading())
        const resp = await fetchSinToken('galeria')
        const body = await resp.json()

        if (body.ok) {
            dispatch(saveImages(body.galeria))
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

const saveImages = (images) => ({
    type: types.saveImages,
    payload: images
})