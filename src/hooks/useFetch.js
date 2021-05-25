import { useState, useEffect } from 'react'

export const useFetch = (initialState = {}) => {

    const [values, ] = useState(initialState)

    const {service, params} = values

    const [state, setState] = useState({ data: [], loading: true });

    useEffect(() => {
        service(params)
            .then((data) => {
                setState({
                    data: data,
                    loading: false
                })
            })
    }, [service, params])

    return state
}
