import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import CharactersQuote from '../components/breaking-quotes/CharactersQuote';
import Characters from '../components/breaking-caracters/Characters';
import MainPage from '../components/ui/MainPage';
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/myLibrary' component={MainPage} />
                    <Route exact path='/quotes/:name' component={CharactersQuote} />
                    <Route exact path='/breakingbad' component={Characters} />
                    <Redirect to='/brekingbad' />
                </Switch>
            </Router>
        </>
    )
}

export default AppRouter
