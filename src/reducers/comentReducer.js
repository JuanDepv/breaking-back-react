import { types } from "../types"

export const comentReducer = (state = {}, action) => {
    switch (action.type) {
        case types.coments_add:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}