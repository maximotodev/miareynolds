"use client";
import { useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import PostList from "./PostList";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        {/* post list */}
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default Blog;
