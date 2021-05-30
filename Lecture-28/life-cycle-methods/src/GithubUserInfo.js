import React, { Component } from 'react'
import axios from 'axios';

class GithubUserInfo extends Component {

    constructor(props) {
        console.log("INSIDE CONSTRUCTOR")
        super(props);
        this.state = {
            username: '',
            imageUrl:''
        }
    }
    // componentDidMount() {
    //     const url = `https://api.github.com/users/${this.props.username}`;

    //     axios.get(url)
    //         .then(user => {
    //             this.setState({ imageUrl: user.data.avatar_url, username: user.data.name });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    async componentDidMount() {
        console.log("INSIDE COMPONENT DID MOUNT");
        const url = `https://api.github.com/users/${this.props.username}`;
        const user = await axios.get(url);
       
        this.setState({ imageUrl: user.data.avatar_url, username: user.data.name });
    }

    componentDidUpdate(prevProps,prevState) {
        console.log("INSIDE COMPONENT DID UPDATE");
        console.log(prevState);
        console.log(this.state);
    }

    

    render() {

        console.log("INSIDE RENDER");

        let usr,image;

        if (!this.state.username) {
            usr='Anonymous'
        } else {
            usr = this.state.username;
        }

        if (!this.state.imageUrl) {
            image=<p>Image Does not exist</p>
        } else {
            image=<img src={this.state.imageUrl} alt="" />
        }

        return (
            <div>
                <h1>Username :{usr}</h1>
                {image}
            </div>
        )
    }
}

export default GithubUserInfo;
