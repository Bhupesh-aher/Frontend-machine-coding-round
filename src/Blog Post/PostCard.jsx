import React from 'react'

const PostCard = ({post}) => {

    const {title, body, tags, reactions, views} = post;
    return (
        <div className='card'>
            <h4>{title}</h4>
            <p>{body}</p>
            <div className='tags'>
                {tags.map((tag, index) => (
                <span className='tag' key={index}>#{tag}</span>
            ))}
            </div>
            <div className='meta'>
                <p>👍{reactions.likes} | 👎{reactions.dislikes} | 👁️{views}</p>
            </div>
        </div>
    )
}

export default PostCard