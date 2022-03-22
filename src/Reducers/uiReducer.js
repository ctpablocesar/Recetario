import { types } from "../Types/types"

const initialState = {
    checking: false,
    saving: false
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.startLoading:
            return {
                ...state,
                checking: true,
            }

        case types.finishLoading:
            return {
                ...state,
                checking: false
            }

        default:
            return state
    }

}