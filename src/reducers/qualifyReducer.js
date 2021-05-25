import { types } from "../types"

export const qualifyReducer = (state = {}, action) => {
    switch (action.type) {
        case types.qualify_add:
            return [
                ...state,
                action.payload 
            ]
        default:
            return state
    }
}
