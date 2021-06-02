import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import "./Dashboard.css"
import logo from '../images/123.png'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className='dasboard'>
            <div className='head'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='linkarea'>
                <div className="buttonsignout">
                    <button onClick={() => firebaseConfig.auth().signOut()} class="bt1">ออกจากระบบ</button>
                </div>
            </div>
            </div>
            <Route>
                <div className='nav-t'>
                <Navbar />
                </div>
            </Route> 
        </div>
    )
}
export default DashBoard;