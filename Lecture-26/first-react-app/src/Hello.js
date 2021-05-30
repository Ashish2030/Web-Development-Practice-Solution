// Class component
import React,{Component} from 'react';


class Hello extends Component{

    constructor(props) {
        super(props);
        // console.log(props);
    }

    render() {
        
        return (<h1>Hello from {this.props.from} to {this.props.to}</h1>)
    }
}

export default Hello;

