import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './../screen/home';
import Contact from './../screen/contact';
import Services from './../screen/services';
import About from './../screen/about';
import NotFound from './../screen/notfound';
import Dashboard from './../screen/dashboard';


const MyRoute = () => {
    return (
        <>

            <Router>

                <div>
                    <Link style={{margin:5,padding:4}} to={"home"} >Home</Link>
                    <Link style={{margin:5,padding:4}} to={"contact"} >Contact</Link>
                    <Link style={{margin:5,padding:4}} to={"about"} >About</Link>
                    <Link style={{margin:5,padding:4}} to={"services"} >Services</Link>
                    <Link style={{margin:5,padding:4}} to={"dashboard"} >Dashboard</Link>

                    <Link style={{margin:5,padding:4}} to={"notfound"} >NotFound</Link>



                </div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>



                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='services' element={<Services />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='home' element={<Home />}></Route>
                    <Route path='dashboard' element={<Dashboard/>}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                   



                </Routes>
            </Router>



        </>
    )
}

export default MyRoute;
