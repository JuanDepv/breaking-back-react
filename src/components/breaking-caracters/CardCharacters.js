import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardCharacters = ({ name, nickname, birthday, img, portrayed, status }) => {
    return (
        <Col md={4} sm={12}>
            <Card className="box bg-dark text-white mb-4 animate__animated animate__fadeIn">
                <Card.Img 
                    variant="top" style={{'objectFit': 'cover', 'objectPosition': 'top'}} 
                    src={img} 
                    alt={nickname} 
                    width={100} 
                    height={300} />
                <Card.Body>
                    <Card.Title>{ name.toLowerCase() }</Card.Title>
                    <Card.Text>
                        { nickname.toLowerCase() }
                    </Card.Text>
                    <Card.Text>
                        { birthday === 'Unknown' ? 'n/a' : birthday }
                    </Card.Text>
                    <Card.Text>
                        {portrayed} - {status}
                    </Card.Text>
                    <Link className="btn btn-outline-info" to={`./quotes/${name}`}>
                        quotes...
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardCharacters
