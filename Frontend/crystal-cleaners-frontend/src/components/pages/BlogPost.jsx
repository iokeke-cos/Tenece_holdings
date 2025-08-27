// src/components/pages/BlogPost.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../../blogData'; // Import the data file
import './BlogPost.css'; // You'll create this CSS file next

export default function BlogPost() {
  const { postId } = useParams(); // Get the postId from the URL

  // Find the blog post that matches the ID
  const post = blogPosts.find(p => p.id === parseInt(postId));

  // If no post is found, display a message
  if (!post) {
    return (
      <div className="blog-post-full">
        <h1>404 - Post Not Found</h1>
        <p>Sorry, the blog post you're looking for does not exist.</p>
        <Link to="/blog">Return to Blog</Link>
      </div>
    );
  }

  // Display the full content of the post
  return (
    <div className="blog-post-full">
      <header className="blog-post-header">
        <h1>{post.title}</h1>
        <p className="blog-post-date">Published on {post.date}</p>
      </header>
      <main className="blog-post-content">
        <p>{post.content}</p>
      </main>
      <Link to="/blog" className="return-link">← Back to all posts</Link>
    </div>
  );
}