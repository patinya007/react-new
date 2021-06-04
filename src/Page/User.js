import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import './User.css'
class User extends Component {
    render() {
        return (
            <div className="containeradd">
                <Header />
                <div className='add'>
                    <div>
                        <h3>ข้อมูลผู้ใช้งาน</h3>
                    </div>
                    <div className='search-bar'>
                        <input className='search' type='text' placeholder='    ค้นหาข้อมูลผู้ใช้งาน' />
                    </div>
                    <div className='buttonadd'>
                        <Link to='/AddUser'>
                            <button className='btn' type='button'>เพิ่มข้อมูล</button>
                        </Link>  
                    </div>               
                </div>
            </div>
        )
    }
}

export default User;