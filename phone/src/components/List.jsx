import React, { Component } from 'react'
import "../css/List.css"
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: ""
        }

    }


    // removeItem = () => {
    //     this.props.removeContacts({
    //         ...contact.id
    //     })
    // }


    onChangeFilterText = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }

    render() {

        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLocaleLowerCase()
                ) !== -1;


            }
        )
        return (
            <div className="d-flex justify-content-center mt-5">
                <div class="card text-center w-75">
                    <div class="card-header d-flex justify-content-center">
                        <input
                            value={this.state.filterText}
                            onChange={this.onChangeFilterText}
                            type="text"
                            className="form-control w-75"
                            placeholder="Filter Name or Phone Number" />
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            {
                                filteredContacts.map(
                                    contact =>

                                        <div>

                                            <li key={contact.id} class="list-group-item d-flex justify-content-between align-items-center">
                                                {contact.name}
                                                <span class="">{contact.phone}</span>
                                            </li>

                                        </div>





                                )
                            }

                        </ul>
                        {/* <button className="btn btn-danger" onClick={this.removeItem}> Delete </button> */}
                    </div>

                </div>
            </div>
        )
    }
}

export default List