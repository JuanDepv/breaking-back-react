import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

const MainPage = () => {

    const favorite = () => {
        return JSON.parse(localStorage.getItem('favorite')) || []
    }

    const comments = () => {
        return JSON.parse(localStorage.getItem('coments')) || []
    }

    const start = () => {
        return JSON.parse(localStorage.getItem('starts')) || []
    }

    return (
        <>
            <Container>
                <h1>My favorite Quotes</h1>
                <Row>   
                    { favorite().length === 0 && 
                        <Col md={12}>
                            <Alert variant='warning' className="mt-5">
                                Not have favorites...
                            </Alert>
                        </Col>
                    }
                    {favorite().map((f) => (
                        <Col md={4} key={f.quote_id}>
                            <Card  className="box bg-dark text-white mb-4 animate__animated animate__fadeIn">
                                <Card.Body>
                                    <Card.Title>{ f.author }</Card.Title>
                                    <Card.Text>
                                        { f.quote }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <hr/>

                <h1>Coments</h1>
                <Row>
                    { comments().length === 0 && 
                        <Col md={12}>
                            <Alert variant='warning' className="mt-5">
                                Not have comments...
                            </Alert>
                        </Col>
                    }
                    {comments().map((c) => (
                        <Col md={4} key={c.coment} >
                            <Card className="box bg-info text-white mb-4 animate__animated animate__fadeIn">
                                <Card.Body>
                                    <Card.Title>{ c.author }</Card.Title>
                                    <Card.Text>
                                        { c.quote }
                                    </Card.Text>
                                    <Card.Subtitle>
                                        Coment: { c.coment }
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <hr/>

                <h1>Start</h1>
                <Row>
                    { start().length === 0 && 
                        <Col md={12}>
                            <Alert variant='warning' className="mt-5">
                                Not have quotes...
                            </Alert>
                        </Col>
                    }
                    {start().map((s) => (
                        <Col md={4} key={s.startAdd}>
                            <Card className="box bg-warning text-white mb-4 animate__animated animate__fadeIn">
                                <Card.Body>
                                    <Card.Title>{ s.author }</Card.Title>
                                    <Card.Text>
                                        { s.quote }
                                    </Card.Text>
                                    <Card.Subtitle>
                                        start of phrase: { s.startAdd }
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default MainPage
