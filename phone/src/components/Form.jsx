import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            phone: ""
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addContacts({
            ...this.state
        })
    }

    render() {


        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="jumbotron w-75">
                    <form className="" onSubmit={this.onSubmit}>
                        <div class="form-group d-flex justify-content-center">
                            <label for="name" className="pt-4 pr-3">Name</label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                class="form-control w-75"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <label for="phone" className="pt-4 pr-3">Phone</label>
                            <input
                                name="phone"
                                type="text"
                                id="phone"
                                class="form-control w-75"
                                value={this.state.phone}
                                onChange={this.onChange}
                            />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>



        )
    }
}
