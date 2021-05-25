import { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import ModalAddComents from './ModalAddComents'
import ModalAddStarts from './ModalAddStarts'

const CardQuote = ({ quote_id, quote, author, favorite, handleAddComent, handleAddStart }) => {

    const [showComent, setShowComent] = useState(false)
    const [showStart, setStart] = useState(false)

    return (
        <>
            <ModalAddComents 
                quotei={quote_id}
                quote={quote}
                author={author}
                handleAddComent={handleAddComent}
                show={showComent}
                handleClose={setShowComent}  />
            <ModalAddStarts 
                quotei={quote_id}
                quote={quote}
                author={author}
                handleAddStart={handleAddStart}
                show={showStart} 
                handleClose={setStart} />
            <Col md={4} sm={12}>
                <Card className="box my-4 animate__animated animate__fadeIn">
                    <Card.Body>
                        <Card.Title>{ author }</Card.Title>
                        <Card.Text>
                            {quote}
                        </Card.Text>

                        {/* actions for add -> favorite-phrases */}
                        <Button variant="outline-info" className="mr-2" onClick={() => favorite(quote_id, quote, author)}>
                            <i className="fas fa-plus"></i><span> favorites</span>
                        </Button>
                        <Button 
                            variant="outline-warning" 
                            className="mr-2" onClick={() => setShowComent(true)}>
                            <i className="fas fa-comments"></i>
                        </Button>
                        <Button 
                            variant="outline-warning" onClick={() => setStart(true)}>
                            <i className="fas fa-star"></i> 
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default CardQuote
