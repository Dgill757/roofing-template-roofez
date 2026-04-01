"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";

const CATEGORIES = ["SHOW ALL", "POOL SOLAR", "ROOFING", "ROOFS", "GUTTER", "ASPHALT"] as const;

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("SHOW ALL");

  const filteredPosts =
    activeCategory === "SHOW ALL"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Category filter bar */}
      <div style={{ background: "rgb(30,30,30)", padding: "20px 0" }}>
        <div
          className="container mx-auto px-6 flex flex-wrap gap-3"
          style={{ maxWidth: 1320 }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-visbydb uppercase"
                style={{
                  background: isActive ? "#FF7600" : "transparent",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                  border: `1px solid ${isActive ? "#FF7600" : "rgba(255,255,255,0.2)"}`,
                  padding: "8px 20px",
                  borderRadius: 4,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog card grid */}
      <div style={{ background: "rgb(15,15,15)", padding: "60px 0" }}>
        <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
