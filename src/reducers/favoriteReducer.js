import { types } from "../types"

export const favoriteReducer = (state, action) => {
    switch (action.type) {
        case types.favorite_add:
            return [
                ...state,
                action.payload 
            ]
            // return {
            //     ...state,
            //     favorite: [ ...state.favorite, action.payload ]
            // }
        default:
            return state
    }
}