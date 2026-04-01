"use client";

import Image from "next/image";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  category: string;
  featuredImgUrl: string;
  featuredImgAlt: string;
}

export default function BlogPostHeader({
  title,
  date,
  category,
  featuredImgUrl,
  featuredImgAlt,
}: BlogPostHeaderProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <section style={{ background: "rgb(15,15,15)", padding: "60px 0 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>
        {/* Category tag */}
        <p
          className="font-visbydb"
          style={{
            color: "#FF7600",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {category}
        </p>

        {/* H1 title */}
        <h1
          className="font-ethno uppercase"
          style={{
            color: "white",
            fontSize: 38,
            lineHeight: "48px",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            marginBottom: 16,
            maxWidth: 860,
          }}
        >
          {title}
        </h1>

        {/* Meta row */}
        <div
          className="font-visbydb"
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            marginBottom: 32,
            color: "rgba(255,255,255,0.5)",
            fontSize: 13,
          }}
        >
          <span>By Roof EZ</span>
          <span>{date}</span>

          {/* Social share buttons */}
          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              style={{
                background: "rgba(255,120,0,0.15)",
                border: "1px solid #FF7600",
                color: "#FF7600",
                width: 32,
                height: 32,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              style={{
                background: "rgba(255,120,0,0.15)",
                border: "1px solid #FF7600",
                color: "#FF7600",
                width: 32,
                height: 32,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              style={{
                background: "rgba(255,120,0,0.15)",
                border: "1px solid #FF7600",
                color: "#FF7600",
                width: 32,
                height: 32,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured image */}
        <div
          style={{
            width: "100%",
            height: 480,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={featuredImgUrl}
            alt={featuredImgAlt}
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
