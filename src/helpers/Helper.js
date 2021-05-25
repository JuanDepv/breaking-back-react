export const containsObject = (obj, list) => {
    for (let x in list) {
        if (list.hasOwnProperty(x) && list[x].quote_id === obj.quote_id) {
            return true
        }
    }
    return false
}

export const initFavorite = () => {
    return JSON.parse(localStorage.getItem('favorite')) || []
}

export const initComent = () => {
    return JSON.parse(localStorage.getItem('coments')) || []
}

export const initStart = () => {
    return JSON.parse(localStorage.getItem('starts')) || []
}