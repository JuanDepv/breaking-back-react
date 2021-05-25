import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.breakingbadapi.com/',
    headers : {
        'content-type': 'application/json'
    }
})

export const breaKingCharacters = async () => {
    const response = await api.get(`/api/characters`)
    const { data } = response
    return data
}

export const breaKingCharactersByQuote = async (author) => {
    const response = await api.get(`/api/quote?author=${encodeURI(author)}`)
    const { data } = response
    return data
}