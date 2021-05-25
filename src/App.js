import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './routers/AppRouter'
// import Navbar from './components/ui/Navbar'

const App = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000} />
            <AppRouter />
        </>
    )
}

export default App
