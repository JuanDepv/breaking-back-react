import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link className="navbar-brand" to="/">BreakingBad</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active" 
                        className="nav-item nav-link" 
                        to="/">Home</NavLink>
                    <NavLink
                        activeClassName="active" 
                        className="nav-item nav-link" 
                        to="/breakingbad">bad</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
