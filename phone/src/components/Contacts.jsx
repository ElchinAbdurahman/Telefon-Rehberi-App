import React, { Component } from 'react'
import List from "./List"
import Form from "./Form"
export default class Contacts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [{
                id:0,
                name: "Elchin Abdurahman",
                phone: "+994505291597"
            },
            {
                id:1,
                name: "Elmar Nasrulla",
                phone: "+994505591577"
            },
            {
                id:3,
                name: "Majnun Abdurahman",
                phone: "+994505391507"
            }]
        }
    }


    addContacts = (contact) => {
           const {contacts}=this.state
           contacts.push(contact)
           this.setState({
               contacts
           })
    }

    // removeContacts=(data)=>{
    //     const {contacts}=this.state
    //     contacts.shift(data)
    //     this.setState({
    //         contacts
    //     })
    // }

    render() {

        return (
            <div>
                <List contacts={this.state.contacts} />
                <Form addContacts={this.addContacts}/>
            </div>
        )
    }
}
