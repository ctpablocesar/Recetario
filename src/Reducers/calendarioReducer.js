import { types } from "../Types/types"

const initialState = {
    calendario: ''
}

export const calendarioReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveCalendario:
            return {
                ...state,
                calendario: action.payload
            }
        default:
            return state
    }

}