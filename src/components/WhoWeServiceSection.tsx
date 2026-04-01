import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "RESIDENTIAL ROOFING IN FLORIDA",
    desc: "Your home deserves the best protection; we're here to provide it. Our residential roofing services ensure your roof withstands Florida's weather. From shingles to metal roofing, we offer durable and stylish options tailored to your needs, guaranteeing peace of mind and a beautiful home.",
    href: "/residential-roofing/",
    img: "/images/residential-roofing.webp",
    imgAlt: "Residential Roofing in Florida - Roof EZ",
  },
  {
    title: "COMMERCIAL ROOFING IN FLORIDA",
    desc: "Protect your business investment with our expert commercial roofing services. We specialize in a variety of commercial roofing systems, from flat roofs to metal roofing, providing durable solutions for any commercial property in Florida.",
    href: "/commercial-roofing/",
    img: "/images/commercial-roofing.webp",
    imgAlt: "Commercial Roofing in Florida - Roof EZ",
  },
];

export default function WhoWeServiceSection() {
  return (
    <section
      className="py-16"
      style={{ background: "#020202" }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        <h2
          className="font-ethno text-center mb-10"
          style={{
            fontSize: 52,
            lineHeight: "56px",
            letterSpacing: "-0.03em",
            background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WHO WE SERVICE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="relative block group overflow-hidden">
              <Image
                src={card.img}
                alt={card.imgAlt}
                width={660}
                height={460}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: 460 }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                style={{ background: "rgba(0,0,0,0.45)" }}
              >
                <h3
                  className="font-ethno text-white mb-3"
                  style={{ fontSize: 30, lineHeight: "36px", letterSpacing: "-0.02em" }}
                >
                  {card.title}
                </h3>
                {/* Orange line */}
                <div className="flex justify-center mb-4">
                  <Image src="/images/orange-line.svg" alt="" width={120} height={8} />
                </div>
                <p
                  className="font-visbydb text-white hidden group-hover:block transition-all"
                  style={{ fontSize: 16, lineHeight: "24px", maxWidth: 480 }}
                >
                  {card.desc}
                </p>
                <span
                  className="mt-4 btn-orange hidden group-hover:inline-flex"
                  style={{ fontSize: 16, padding: "10px 24px" }}
                >
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
