import React, { Component } from 'react'
import Navitems from './Navitems'
import "./Navbar.css"


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        }) 
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="เมนูหลัก" tolink="/" activenav={this.activeitem}></Navitems>
                    <Navitems item="ข้อมูลสมาชิก" tolink="/about" activenav={this.activeitem}></Navitems>
                    <Navitems item="ข้อมูลร้านค้า" tolink="/education" activenav={this.activeitem}></Navitems>
                    <Navitems item="ข้อมูลหมวดหมู่" tolink="/skills" activenav={this.activeitem}></Navitems>
                    <Navitems item="อันดับสถานที่" tolink="/contact" activenav={this.activeitem}></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
