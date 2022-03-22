import { types } from "../Types/types"

const initialState = {
    frase: {
        imagen: '',
        titulo: '',
        frase: ''
    }
}

export const fraseReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveFrase:
            return {
                ...state,
                frase: action.payload
            }
        default:
            return state
    }

}