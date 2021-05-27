import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Col } from 'react-bootstrap'

const AlertMessage = ({message, btnColor}) => {
    return (
        <>
            <Col md={12}>
                <Alert variant={btnColor} className="mt-5">
                    {message}
                </Alert>
            </Col>
        </>
    )
}

export default AlertMessage

AlertMessage.propTypes = {
    message: PropTypes.string.isRequired,
    btnColor: PropTypes.string.isRequired,
}