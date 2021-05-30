import React, { Component } from 'react';
import './Blog.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class ShowBlog extends Component {

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
        const blog = await axios.get(`/blogs/${this.props.match.params.id}`);
        this.setState({
            title: blog.data.title,
            img: blog.data.img,
            author: blog.data.author,
            text: blog.data.text
        })
    }

    deleteBlogHandler = async() => {
        await axios.delete(`/blogs/${this.props.match.params.id}`);
        this.props.history.push('/blogs');
    }

    render() {
        return (
            <div>
                <article className="Blog">
                <h2>{this.state.title}</h2>
                <img src={this.state.img} alt={this.state.title} />
                <h3>{this.state.author}</h3>
                <p>{this.state.text}</p>
                <Link to={`/blogs/${this.props.match.params.id}/edit`}>
                    <Button variant="primary" style={{margin:'20px'}}>Edit</Button>
                </Link>
                <Button onClick={this.deleteBlogHandler} variant="danger">Delete</Button>
            </article>
            </div>
        );
    }
}

export default ShowBlog;
