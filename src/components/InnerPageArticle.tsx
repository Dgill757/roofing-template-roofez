import { articleContent } from "@/data/article-content";

interface Props {
  slug: string;
}

export default function InnerPageArticle({ slug }: Props) {
  const content = articleContent[slug] ?? articleContent["_default"];

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
