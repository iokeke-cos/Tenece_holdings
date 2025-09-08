import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../../blogData';
import './Blog.css';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The benefits of a clean and organized home office",
      excerpt: "Tired of a chaotic workspace? A clean and organized home office isn't just about appearances—it's a game-changer for your productivity, focus, and overall well-being.",
      date: "September 10, 2023"
    },
    {
      id: 2,
      title: "Why you should consider hiring a cleaning service",
      excerpt: "Want to reclaim your free time and come home to a sparkling clean space? Discover why a professional cleaning service might be the smartest investment you can make.",
      date: "September 15, 2023"
    },
    {
      id: 3,
      title: "The benefits of professional window cleaning",
      excerpt: "Stop seeing the world through a smudged lens. Professional window cleaning is the clear solution to a brighter home and a better view.",
      date: "September 20, 2023"
    },
    {
      id: 4,
      title: "7 Common Cleaning Mistakes You're Probably Making",
      excerpt: "Even the most seasoned cleaners can make a few mistakes that prevent them from achieving a truly clean home. Read on to discover if you're guilty of these errors and how to fix them.",
      date: "August 5, 2025"
    },
    {
      id: 5,
      title: "Our Top 5 Tips for a Spotless Kitchen",
      excerpt: "Cleaning the kitchen can feel like a chore, but with the right approach, it can be quick and painless. Learn our five favorite techniques for a sparkling clean space.",
      date: "August 20, 2025"
    },
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Our Blog</h1>
        <p>Expert tips, guides, and insights for a cleaner, healthier home.</p>
      </header>

      <main className="blog-main">
        <div className="blog-list">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-post-card">
              <h2>{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <p className="post-date">Published on {post.date}</p>
              <Link to={`/blog/${post.id}`} className="read-more-link">Read More</Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}