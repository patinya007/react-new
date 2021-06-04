import React, { useState } from 'react'
import Header from './Header'
import '../Page/AddUser.css'
import Crud from './CRUD'



function AddUser() {
   
    return (
        <div className='AddUser'>
            <Header />
            <Crud />
        </div>
    )
}

export default AddUser;