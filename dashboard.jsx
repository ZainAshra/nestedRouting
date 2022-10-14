import React from 'react'
import { Router, Route, Routes,Link } from 'react-router-dom'
import Message from './dashboard_screen/message';
import Feedback from './dashboard_screen/feedback';
import Notification from './dashboard_screen/notification';

const Dashboard = () => {
    return (
     

<>
      
      <h1>dashboard</h1>
      <li onClick={mfeedback}> l</li>


            {/* <Router>

            <div>

                <Link to={"message"}>Message</Link>
                <Link to={"feedback"}>Feedback</Link>
                <Link to={"notification"}>Notification</Link>
            </div>

                <Routes>
                    <Route path='message' element={<Message/>}></Route>
                    <Route path='feedback' element={<Feedback/>}></Route>
                    <Route path='notification' element={<Notification/>}></Route>
                </Routes>
            </Router> */}
            </>
        
    )
}

export default Dashboard
