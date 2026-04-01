import { blogPostContent } from "@/data/blog-post-content";

interface Props {
  slug: string;
}

export default function BlogPostArticle({ slug }: Props) {
  const content = blogPostContent[slug];

  if (!content) {
    return (
      <p className="font-visbydb text-white" style={{ fontSize: 15, lineHeight: "26px", opacity: 0.9 }}>
        Content coming soon.
      </p>
    );
  }

  return (
    <article className="text-white" style={{ maxWidth: 760 }}>
      {content.map((block, i) => {
        if (block.tag === "h2") {
          return (
            <h2
              key={i}
              className="font-ethno uppercase mt-10 mb-4"
              style={{
                fontSize: 22,
                lineHeight: "30px",
                letterSpacing: "-0.02em",
                background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {block.text}
            </h2>
          );
        }

        if (block.tag === "h3") {
          return (
            <h3
              key={i}
              className="font-visbyheavy text-white uppercase mt-6 mb-2"
              style={{ fontSize: 17, lineHeight: "26px" }}
            >
              {block.text}
            </h3>
          );
        }

        if (block.tag === "ul") {
          return (
            <ul key={i} className="font-visbydb text-white list-disc pl-6 mb-4" style={{ fontSize: 15 }}>
              {(block.items ?? []).map((item, j) => (
                <li key={j} style={{ marginBottom: 8, lineHeight: "26px" }}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="font-visbydb text-white mb-4"
            style={{ fontSize: 15, lineHeight: "26px", opacity: 0.9 }}
          >
            {block.text}
          </p>
        );
      })}
    </article>
  );
}
