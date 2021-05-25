import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'

const ModalAddComents = ({quotei, quote, author, show, handleClose, handleAddComent}) => {

    const [ values, handleInputChange, reset ] = useForm({coment: ''})
    const { coment } = values

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Coment</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) => handleAddComent(e, quotei, quote, author, coment, reset, handleClose)}>
                     <Modal.Body>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>addComent</Form.Label>
                            <Form.Control 
                                as="textarea"
                                name="coment"
                                value={coment}
                                onChange={handleInputChange}
                                rows={3} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={() => handleClose(false)}>Close</Button>
                        <Button variant="info" type="submit">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default ModalAddComents
