import React from 'react'
import "./style.css"
import PostData from './PostData'
import PostCard from "./PostCard"

const BlogPosts = () => {
  return (
    <div className='main-container'>
        <h3>Blog Posts</h3>
        <div className='post-grid'>
            {PostData.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default BlogPosts