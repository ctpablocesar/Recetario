import { types } from "../Types/types"

const initialState = {
    noticias: []    
}

export const noticiasReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveNoticias:
            return {
                ...state,
                noticias: action.payload
            }
        default:
            return state
    }

}