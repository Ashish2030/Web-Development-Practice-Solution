import React, { Component } from 'react'

class Form extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            qty:''
        }
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.createItem(this.state);
        this.setState({ name: '', qty: '' });
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                
                <input
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="Item Name"
                    value={this.state.name}
                />
                <input
                    type="text"
                    name="qty"
                    onChange={this.changeHandler}
                    placeholder="Quantity"
                    value={this.state.qty}
                />


                <button>Add Item!</button>
            </form>
        )
    }
}

export default Form;
