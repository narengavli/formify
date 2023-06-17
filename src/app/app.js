import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/home'

// import global components
import Navbar from './global/navbar'
import Footer from './global/footer'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App