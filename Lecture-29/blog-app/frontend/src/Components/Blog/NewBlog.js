import React, { Component } from 'react';
import axios from 'axios';

class NewBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            author: '',
            text:''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = async(e) => {
        e.preventDefault();
        await axios.post('/blogs', this.state);
        // Redirect to /blogs page
        this.props.history.push('/blogs');
    }


    render() {
        return (
            <div style={{width:'70vw',margin:'10px auto',border:'1px solid #ccc',padding:'16px',fontSize:'24px'}}>
                <h1>Add New Blog</h1>
                <form onSubmit={this.submitHandler}>
                    
                    <label htmlFor="title">Title</label>

                    <br/>
                    <br/>

                    <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={this.changeHandler}
                    />
                    <br/>
                    <br/>
                    <label htmlFor="imgurl">Image URL</label>
                    <br/>
                    <br/>
                    <input
                        id="imgurl"
                        type="text"
                        placeholder="Image Url"
                        name="img"
                        onChange={this.changeHandler}
                    />
                    <br/>
                    <br/>
                    <label htmlFor="author">Author</label>
                    <br/>
                    <br/>
                    <input
                        id="author"
                        type="text"
                        placeholder="Author"
                        name="author"
                        onChange={this.changeHandler}
                    />
                    <br/>
                    <br/>
                    <label htmlFor="text">Your Blog Goes Here!</label>
                    <br/>
                    <br/>
                    <textarea
                        cols="50"
                        rows="5"
                        id="text"
                        name="text"
                        onChange={this.changeHandler}
                    >
                       
                    </textarea>
                    <br/>
                    <br/>
                    <button>Submit!!</button>
                </form>
            </div>
        );
    }
}

export default NewBlog;
