import React from 'react'
import PropTypes from 'prop-types'
import MoonLoader from 'react-spinners/MoonLoader'

const Loading = ({loading}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div style={{'height': '90vh'}} className="mt-5 d-flex justify-content-center align-items-center" >
                        <MoonLoader loading={loading} size={70} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading

Loading.propTypes = {
    loading: PropTypes.bool.isRequired,
}