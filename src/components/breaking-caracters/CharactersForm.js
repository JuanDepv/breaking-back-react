import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const CharactersForm = ({show, setShow, handleSubmitFilter}) => {

    const history = useHistory();

    const [ value, handleInputChange, reset ] = useForm({ searchName: '', searchNickName: '' })

    const { searchName, searchNickName } = value

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchName === '' || searchNickName === '') {
            // history.push(`?name=&nick=`)
            toast.error('Missing fields to fill...')
          } else {
            history.push(`?name=${searchName}&nick=${searchNickName}`)
            handleSubmitFilter()
          }
    }

    const handleReset = () => {
        reset({ searchName: '', searchNickName: '' })
        history.push(`/breakingbad`)
    }

    return (
        <>
            {show && (
                <div className="mt-2 animate__animated animate__fadeIn">
                    <h1>Search Form</h1>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        name="searchName"
                                        value={ searchName }
                                        onChange={handleInputChange}
                                        placeholder="search by name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>nickname</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        name="searchNickName"
                                        value={ searchNickName }
                                        onChange={ handleInputChange }
                                        placeholder="search by nickName" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="outline-primary" onClick={() => setShow(false)} className="mr-4">Hide Form</Button>
                        <Button variant="outline-primary" onClick={handleReset} className="mr-4">Reset</Button>
                        <Button variant="outline-primary" type="submit">Search</Button>
                    </Form>
                </div>
            )}
        </>
    )
}

export default CharactersForm

CharactersForm.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func
}
