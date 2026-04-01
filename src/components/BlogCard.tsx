import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article style={{ background: "#191919", overflow: "hidden" }}>
      {/* Image */}
      <Link href={`/blog/${post.slug}`} aria-label={post.title}>
        <div className="relative" style={{ aspectRatio: "3/2" }}>
          <Image
            src={post.imgUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: 20 }}>
        {/* Category */}
        <p
          className="font-visbydb uppercase"
          style={{
            color: "#FF7600",
            fontSize: 12,
            letterSpacing: "0.08em",
            marginBottom: 6,
          }}
        >
          {post.category}
        </p>

        {/* Title */}
        <h2
          className="font-visbyheavy uppercase"
          style={{
            color: "#ffffff",
            fontSize: 17,
            lineHeight: "24px",
            marginBottom: 8,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p
          className="font-visbydb"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 14,
            lineHeight: "22px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${post.slug}`}
          className="font-visbyxb uppercase"
          style={{
            color: "#FF7600",
            fontSize: 13,
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}
        >
          READ MORE
        </Link>
      </div>
    </article>
  );
}
