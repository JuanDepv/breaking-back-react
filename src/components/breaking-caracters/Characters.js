import React, { useEffect, useState } from 'react'
import * as queyString from 'query-string'
import { Col, Container, Row, Button } from 'react-bootstrap'

import CardCharacters from './CardCharacters'
import CharactersForm from './CharactersForm'
import Loading from '../ui/Loanding'
import Pagination from '../ui/Pagination'

import { useFetch } from '../../hooks/useFetch'
import { usePagination } from '../../hooks/usePagination'
import { PER_PAGE } from '../../helpers/constants'
import { breaKingCharacters } from '../../services/services'
import { useLocation } from 'react-router'

const Characters = () => {

    const location = useLocation()
    const { name, nick } = queyString.parse(location.search)

    const [showForm, setShowForm] = useState(false)
    const { data, loading } = useFetch({service: breaKingCharacters})
    const { next, prev, currentPage, currenCharacters, maxPage } = usePagination(data, PER_PAGE)

    const handleSubmitFilter = () => {
        if(location.search === "") return currenCharacters()
        if(name === "" && nick === "") return currenCharacters()

        return data.filter((f) => f.name.toLowerCase().includes(name) && f.nickname.toLowerCase().includes(nick))
    }

    useEffect(() => {
    }, [currenCharacters, data])

    if(loading) return <Loading loading={loading} />

    return (
        <Container>
            <CharactersForm 
                show={showForm}
                setShow={setShowForm}
                handleSubmitFilter={handleSubmitFilter} />
            <Row>
                <Col md={6}>
                    {
                        location.search === "" || name === "" || nick === "" ?
                        (<Pagination 
                            currentPage={currentPage} 
                            prev={prev}
                            next={next}
                            maxPage={maxPage} 
                        />)
                        : 
                        (
                            <div></div>
                        )
                            
                    }
                </Col>
                <Col md={6} className="text-center my-5 animate__animated animate__fadeIn">
                    {!showForm && <Button variant="outline-dark" onClick={() => setShowForm(true)}>Busqueda</Button>}
                </Col>
            </Row>
            <Row>
                {
                    location.search === "" ?
                        
                            (currenCharacters().map((caracters) => (
                                <CardCharacters key={caracters.char_id} {...caracters} /> 
                            )))
                        
                        : 
                            ( handleSubmitFilter().map((caracters) => (
                                    <CardCharacters key={caracters.char_id} {...caracters} /> 
                            )))
                }
            </Row>
        </Container>
    )
}

export default Characters
