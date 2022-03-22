import { types } from "../Types/types"

const initialState = {
    imagenes: []
}

export const galeriaReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveImages:
            return {
                ...state,
                imagenes: action.payload
            }
        default:
            return state
    }

}