import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const serviceButtons = [
  { label: "Roof Repair", href: "/roof-repair/" },
  { label: "Re-Roofing", href: "/reroofing/" },
  { label: "New Construction", href: "/new-construction-roofing/" },
  { label: "Solar", href: "/solar-roofing/" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 900 }}>
      {/* Video background */}
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)", zIndex: 1 }} />

      <div
        className="relative container mx-auto px-6 py-20 flex flex-col md:flex-row items-start gap-12"
        style={{ maxWidth: 1320, zIndex: 2 }}
      >
        {/* Left: Heading + CTA */}
        <div className="flex-1 pt-8 md:pt-16">
          {/* Location tag */}
          <h2
            className="flex items-center gap-3 font-ethno text-black mb-1"
            style={{ fontSize: 54, lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            <Image src="/images/location-icon.svg" alt="" width={33} height={33} />
            <span style={{ color: "#020202", textShadow: "0 0 20px rgba(255,255,255,0.8)" }}>
              Southwest Florida
            </span>
          </h2>

          {/* Main headline with orange gradient stroke */}
          <h1
            className="font-ethno text-center"
            style={{
              fontSize: 57,
              lineHeight: "63px",
              letterSpacing: "-0.05em",
              background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "6px transparent",
              color: "white",
              marginBottom: 5,
            }}
          >
            Top Quality Florida Roofing Company
          </h1>

          {/* Divider line */}
          <div className="flex justify-center my-4">
            <Image src="/images/divider-line.svg" alt="" width={200} height={10} />
          </div>

          {/* Subtitle */}
          <p
            className="text-center font-visbydb"
            style={{ color: "#020202", fontSize: 19, lineHeight: "28px", marginBottom: 20 }}
          >
            If you&apos;re looking for an{" "}
            <Link href="/roofing-services/" style={{ color: "#0d6efd" }}>
              expert Florida roofer
            </Link>
            , look no further than the professionals at Roof EZ. Contact us today for a free estimate!
          </p>

          {/* Service buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {serviceButtons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className="btn-black font-visbyxb"
                style={{ height: 42 }}
              >
                <span>→ {btn.label.toUpperCase()}</span>
              </Link>
            ))}
          </div>

          {/* Rating badges */}
          <div className="flex items-center justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <Image src="/images/google-5star.svg" alt="Google" width={40} height={40} />
              <div>
                <div className="font-visbyxb text-white text-xl">5.0</div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/facebook-rating.svg" alt="Facebook" width={40} height={40} />
              <div>
                <div className="font-visbyxb text-white text-xl">4.8</div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/yelp-rating.svg" alt="Yelp" width={40} height={40} />
              <div>
                <div className="font-visbyxb text-white text-xl">5.0</div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form card */}
        <div className="w-full md:w-auto flex-shrink-0" style={{ width: 519 }}>
          <ContactForm showLogo />
        </div>
      </div>
    </section>
  );
}
