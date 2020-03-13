import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className='post-container'>
            <div className='post-score'>
                <p>Score</p>
                <p>{props.score}</p>
            </div>
            <div className='post-author'>
                <p className='post-title'>{props.title}</p>
                <p className='post-userName'>Author: {props.user}</p>
            </div>
            <div className='post-info'>
                {props.link ?
                    <p><a className='post-link' href={props.link}>Link</a></p>
                    : null
                }
                <p className='post-date'>Created at: {props.date.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Post;