import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
class Crud extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            item_id: '',
            email: '',
            name: '',
            lastname: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    item_id: item,
                    email: items[item].email,
                    name: items[item].name,
                    lastname: items[item].lastname,
                })
            }
            this.setState({
                items: newState
            })
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();

        if (this.state.item_id != '') {
            return this.updateItem();
        }

        const itemsRef = firebase.database().ref('items')
        const item = {
            email: this.state.email,
            name: this.state.name,
            lastname: this.state.lastname
        }
        itemsRef.push(item)
        this.setState({
            item_id: '',
            email: '',
            name: '',
            lastname:'',
        })
    }


    handleUpdate = (item_id = null, email = null, name = null, lastname =null) => {
        this.setState({ item_id, email, name })
    }

    updateItem() {

        var obj = { email: this.state.email, name: this.state.name,lastname: this.state.lastname }

        const itemsRef = firebase.database().ref('/items')

        itemsRef.child(this.state.item_id).update(obj);

        this.setState({
            item_id: '',
            email: '',
            name: '',
            lastname:'',
        })

    }

    removeItem(itemId) {
        const itemsRef = firebase.database().ref('/items');
        itemsRef.child(itemId).remove();
    }

    render() {
        return (
            <div className="Crud">
                <nav class="navbar navbar-light bg-primary">
                    <span class="navbar-brand mb-0 h1">เพิ่มผู้ใช้งาน</span>
                </nav>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-8">
                                <div className="form-row">
                                    <div className="box1">
                                        <input type="email"
                                         name="email" 
                                         className="form-t" 
                                         placeholder="Email" 
                                         onChange={this.handleChange} value={this.state.email} 
                                         />
                                        <input type="name" 
                                        name="name" 
                                        className="form-l" 
                                        placeholder="Name" 
                                        onChange={this.handleChange} value={this.state.name} 
                                        />
                                        <input type="lastname" 
                                        name="lastname" 
                                        className="form-t" 
                                        placeholder="Lastname" 
                                        onChange={this.handleChange} value={this.state.lastname} 
                                        />
                                        <button class="btn-s" > Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <table className="table1">
                        <tr className="thead1">
                            <th width="5%">email</th>
                            <th width="5%">name</th>
                            <th width="5%">lastname</th>
                            <th width="5%">Edit</th>
                            <th width="5%">Delete</th>
                        </tr>
                        {
                            this.state.items.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.name}</td>
                                        <td>{item.lastname}</td>
                                        <td><button className="btn-edituser" onClick={() => this.handleUpdate(item.item_id, item.email, item.name, item.lastname)}>Edit</button></td>
                                        <td><button className="btn-delete" onClick={() => this.removeItem(item.item_id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        );
    }
}

export default Crud;