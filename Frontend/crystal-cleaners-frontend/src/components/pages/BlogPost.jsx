import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../../blogData';
import './BlogPost.css';

export default function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className="blog-post-full">
        <h1>404 - Post Not Found</h1>
        <p>Sorry, the blog post you're looking for does not exist.</p>
        <Link to="/blog">Return to Blog</Link>
      </div>
    );
  }

  // Split the content to wrap the first paragraph
  const contentParagraphs = post.content.split(/\n\s*\n/);
  const firstParagraph = contentParagraphs[0];
  const remainingContent = contentParagraphs.slice(1).join('\n\n');

  return (
    <div className="blog-post-full">
      <header className="blog-post-header">
        <h1>{post.title}</h1>
        <p className="blog-post-date">Published on {post.date}</p>
      </header>
      
      <main className="blog-post-content">
        <div className="content-with-image">
          <img
            src={post.image}
            alt={post.title}
            className="blog-post-image"
          />
          <p>{firstParagraph}</p>
        </div>
        
        {remainingContent && <p>{remainingContent}</p>}

      </main>
      
      <Link to="/blog" className="return-link">← Back to all posts</Link>
    </div>
  );
}