import React, { useReducer, useEffect } from 'react'
import { useParams } from 'react-router'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

import CardQuote from './CardCharacters'
import Loading from '../ui/Loanding'

import { breaKingCharactersByQuote } from '../../services/services'
import { containsObject, initComent, initFavorite, initStart } from '../../helpers/Helper'
import { favoriteReducer } from '../../reducers/favoriteReducer'
import { comentReducer } from '../../reducers/comentReducer'
import { qualifyReducer } from '../../reducers/qualifyReducer'
import { useFetch } from '../../hooks/useFetch'
import { types } from '../../types'
import AlertMessage from '../ui/AlertMessage'



const CharactersQuote = ({history}) => {
    // hooks
    const [favorite, dispatchFavorite] = useReducer(favoriteReducer, [], initFavorite)
    const [coments, dispatchsComent] = useReducer(comentReducer, [], initComent)
    const [start, dispatchStart] = useReducer(qualifyReducer, [], initStart)
    const { name } = useParams()
    
    // custom hooks
    const { data, loading } = useFetch({ service: breaKingCharactersByQuote, params: name })


    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorite))
        localStorage.setItem('coments', JSON.stringify(coments))
        localStorage.setItem('starts', JSON.stringify(start))
    }, [favorite, coments, start])

    const handleReturn = () => {
        history.push('/breakingbad')
    }
    const handleAddFavorite = (quote_id, quote, author) => {
        const newFavorite = { quote_id: quote_id, quote: quote, author: author }
        // console.log(favorite.some((f) => f.quote_id === newFavorite.quote_id))
        if(containsObject(newFavorite, favorite)) {
            toast.error('ya lo agregaste a los favoritos')
            return
        } else {
            dispatchFavorite({
                type: types.favorite_add,
                payload: newFavorite,
            })
            toast.success('agregado a los favoritos')
        }
    }

    const handleAddComent = (e, quotei, quote, author, coment, reset, handleClose) => {
        e.preventDefault()
        const newComent = {quotei, quote, author, coment}
        dispatchsComent({
            type: types.coments_add,
            payload: newComent
        })

        reset({coment: ''})
        handleClose(false)
        toast.success('comment add...')
    }

    const handleAddStart = (e, quotei, quote, author, startAdd, reset, handleClose) => {
        e.preventDefault()
        const newStart = {quotei, quote, author, startAdd}
        dispatchStart({
            type: types.qualify_add,
            payload: newStart
        })
        reset({startAdd: ''})
        handleClose(false)
        toast.success('start add...')
    }

    if(loading) return <Loading loading={loading} />

    return (
        <Container>
            <Row>
                <Col>
                    <Button className='btn btn-dark mt-3' onClick={handleReturn}>Volver</Button>
                </Col>
                {data.length === 0 && (
                    <AlertMessage message="Not have quotes..." btnColor="warning" />
                )}
            </Row>
            <Row>
                {data.map((quote) => (
                    <CardQuote 
                        key={quote.quote_id} 
                        {...quote} 
                        favorite={handleAddFavorite}
                        handleAddComent={handleAddComent}
                        handleAddStart={handleAddStart}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default CharactersQuote
