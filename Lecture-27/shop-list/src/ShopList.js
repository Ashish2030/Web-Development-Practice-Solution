import React, { Component } from 'react'
import Form from './Form'

class ShopList extends Component {

    constructor() {
        super();

        this.state = {
            items: [
                {
                    name: 'Rice',
                    qty:2
                },
                {
                    name: 'Wheat',
                    qty:10
                },

            ]
        }
    }

    createItemHandler=(item)=> {
        const newItems = this.state.items.slice();
        newItems.push(item);
        this.setState({ items: newItems });
    }


    render() {

        let items = this.state.items.map((i,idx) => {
            return <li key={idx}>{ i.name } - {i.qty} </li>
        })


        return (
            <div>
                <h1>Shopping List</h1>
                <ul>
                    {items}
                </ul>

                <Form createItem={this.createItemHandler} />

            </div>
        )
    }
}

export default ShopList;
