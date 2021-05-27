import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Pagination = ({currentPage, maxPage, prev, next}) => {

    return (
        <div className="text-center my-5">
            <Button variant="outline-primary" onClick={prev} disabled={currentPage === 1 && true}>
            <i className="fas fa-chevron-circle-left"></i>
            </Button>
            <span> { currentPage } </span>
            <Button variant="outline-primary" onClick={next} disabled={currentPage === maxPage && true}>
                <i className="fas fa-chevron-circle-right"></i>
            </Button>
        </div>
    )
}

export default Pagination

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired
}

