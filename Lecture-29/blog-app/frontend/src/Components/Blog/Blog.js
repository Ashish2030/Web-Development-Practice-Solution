import React, { Component } from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <article className="Blog">
                <h2>{this.props.title}</h2>
                <img src={this.props.img} alt={this.props.title} />
                <h3>{this.props.author}</h3>
                <p>{this.props.text}</p>
                <Link to={`/blogs/${this.props.id}`}>
                    <Button variant="info">More Info</Button>
                </Link>
            </article>
        );
    }
}

export default Blog;
