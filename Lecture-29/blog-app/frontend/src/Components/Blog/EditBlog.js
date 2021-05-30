import axios from 'axios';
import React, { Component } from 'react';

class EditBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            author: '',
            text:''
        }
    }


    async componentDidMount() {
        const blog = await axios.get(`/blogs/${this.props.match.params.id}/edit`);
        this.setState({
            title: blog.data.title,
            img: blog.data.img,
            author: blog.data.author,
            text:blog.data.text
        })
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = async(e)=>{
        e.preventDefault();
        await axios.patch(`/blogs/${this.props.match.params.id}`,this.state);
        this.props.history.push(`/blogs/${this.props.match.params.id}`);
    }


    render() {
        return (
                <div style={{width:'70vw',margin:'10px auto',border:'1px solid #ccc',padding:'16px',fontSize:'24px'}}>
                <h1>Edit Blog</h1>
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
                        value={this.state.title}
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
                        value={this.state.img}
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
                        value={this.state.author}
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
                        value={this.state.text}
                    >
                       
                    </textarea>
                    <br/>
                    <br/>
                    <button>Save</button>
                </form>
            </div>
          
        );
    }
}

export default EditBlog;
