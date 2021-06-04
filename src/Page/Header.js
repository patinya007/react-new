import React, { useContext } from 'react'
import logo from '../images/123.png'
import firebaseConfig from '../config'
import { SidebarData } from "../components/SidebarData";
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
const Header = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <>
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
            <div className="sidebar">
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                onClick={() => {window.location.pathname = val.link}}
                            >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}
export default Header;