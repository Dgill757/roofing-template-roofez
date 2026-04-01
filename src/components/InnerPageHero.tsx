import Image from "next/image";

interface InnerPageHeroProps {
  title: string;
  subtitle: string;
}

export default function InnerPageHero({ title, subtitle }: InnerPageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: 622, padding: "203px 0 167px" }}
    >
      {/* Shared roofing video background */}
      <video
        src="/videos/inner-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -9 }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)", zIndex: -1 }} />

      <div className="container mx-auto px-6 text-center" style={{ maxWidth: 1320 }}>
        {/* Orange gradient title */}
        <h1
          className="font-ethno uppercase"
          style={{
            fontSize: 57,
            lineHeight: "63px",
            letterSpacing: "-0.05em",
            background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 16,
          }}
        >
          {title}
        </h1>

        {/* Divider */}
        <div className="flex justify-center my-4">
          <Image src="/images/divider-line.svg" alt="" width={200} height={10} />
        </div>

        {/* Subtitle */}
        <p
          className="font-visbybold text-white mx-auto"
          style={{ fontSize: 19, lineHeight: "28px", maxWidth: 800 }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
