import Swal from 'sweetalert2';

import { fetchSinToken } from "../Helpers/fetch"
import { types } from "../Types/types"
import { finishLoading, startLoading } from "./ui"

export const startLoadingRecetas = () => {
    return async (dispatch) => {
        dispatch(startLoading())
        const resp = await fetchSinToken('recetas')
        const body = await resp.json()
        if (body.ok) {
            dispatch(saveRecetas(body.recetas))
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

const saveRecetas = (anuncios) => ({
    type: types.saveRecetas,
    payload: anuncios
})

export const startLoadingRecetaSimple = (titulo) => {
    return async (dispatch) => {
        dispatch(startLoading())
        const resp = await fetchSinToken(`recetas/titulo/${titulo}`)
        const body = await resp.json()
        if (body.ok) {
            dispatch(saveRecetaSimple(body.recetas))
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

const saveRecetaSimple = (receta) => ({
    type: types.saveRecetaSimple,
    payload: receta
})

export const startLoadingRecetaAvanzada = (contenido) => {

    return async (dispatch) => {
        if (!!contenido) {
            dispatch(startLoading())
            const resp = await fetchSinToken(`recetas/contenido/${contenido}`)
            const body = await resp.json()
            if (body.ok) {
                dispatch(saveRecetaAvanzada(body.recetas))
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
}

const saveRecetaAvanzada = (recetas) => ({
    type: types.saveRecetaAvanzada,
    payload: recetas
})

export const startLoadingRecetaTipo = (tipo) => {

    return async (dispatch) => {
        if (!!tipo) {
            dispatch(startLoading())
            const resp = await fetchSinToken(`recetas/tipo/${tipo}`)
            const body = await resp.json()
            if (body.ok) {
                dispatch(saveRecetaTipo(body.recetas))
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
}

const saveRecetaTipo = (recetas) => ({
    type: types.saveRecetaTipo,
    payload: recetas
})

export const startLoadingRecetaTiempo = (tiempo) => {

    return async (dispatch) => {
        if (!!tiempo) {
            dispatch(startLoading())
            const resp = await fetchSinToken(`recetas/tiempo/${tiempo}`)
            const body = await resp.json()
            if (body.ok) {
                dispatch(saveRecetaTiempo(body.recetas))
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
}

const saveRecetaTiempo = (recetas) => ({
    type: types.saveRecetaTiempo,
    payload: recetas
})

export const startLoadingRecetaCompleta = (id) => {

    return async (dispatch) => {

        if (!!id) {
            dispatch(startLoading())
            const resp = await fetchSinToken(`recetas/receta/${id}`)

            const body = await resp.json()

            if (body.ok) {
                dispatch(saveRecetaCompleta(body.receta))
            }
            dispatch(finishLoading())
        }
    }
}

const saveRecetaCompleta = (receta) => ({
    type: types.saveRecetaCompleta,
    payload: receta
})