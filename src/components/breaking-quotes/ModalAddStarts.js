import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'

const ModalAddStarts = ({quotei, quote, author, show, handleClose, handleAddStart}) => {

    const [ values, handleInputChange, reset ] = useForm({startAdd: ''})
    const [ start, ] = useState([1,2,3,4,5])
    const { startAdd } = values

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add start</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) => handleAddStart(e, quotei, quote, author, startAdd, reset, handleClose)}>
                     <Modal.Body>
                        <Form.Group>
                            <Form.Label>AddStart</Form.Label>
                            <Form.Control as="select" 
                                name="startAdd"
                                value={startAdd}
                                onChange={handleInputChange}>
                                {start.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}
                            </Form.Control>
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

export default ModalAddStarts
