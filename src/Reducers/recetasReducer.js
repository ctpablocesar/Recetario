import { types } from "../Types/types"

const initialState = {
    recetas: [],
    receta: {}
}

export const recetasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveRecetas:
            return {
                ...state,
                recetas: action.payload
            }
        case types.saveRecetaSimple:
            return {
                ...state,
                recetas: action.payload
            }
        case types.saveRecetaAvanzada:
            return {
                ...state,
                recetas: action.payload
            }
        case types.saveRecetaTipo:
            return {
                ...state,
                recetas: action.payload
            }
        case types.saveRecetaTiempo:
            return {
                ...state,
                recetas: action.payload
            }
        case types.saveRecetaCompleta:
            return {
                ...state,
                receta: action.payload
            }
        default:
            return state
    }
}