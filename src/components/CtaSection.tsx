import Image from "next/image";
import ContactForm from "./ContactForm";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 953 }}>
      {/* Background: aerial coastal photo */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 relative">
          <Image
            src="/images/cta-home-roof.webp"
            alt="Florida home roof"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/images/cta-bg-aerial.webp"
            alt="Aerial Florida coastline"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />

      <div
        className="relative container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12"
        style={{ maxWidth: 1320, zIndex: 1 }}
      >
        {/* Left: Company text */}
        <div className="w-full lg:w-1/2">
          <h2
            className="font-ethno text-white mb-6"
            style={{ fontSize: 48, lineHeight: "52px", letterSpacing: "-0.03em" }}
          >
            TRUST CAPE CORAL&apos;S MOST TRUSTED ROOFER
          </h2>
          <p
            className="font-visbydb text-white mb-8"
            style={{ fontSize: 18, lineHeight: "28px" }}
          >
            Roof EZ is a proud, veteran-owned and operated Florida roofing company. Our headline
            &ldquo;Where We Make it EASY&rdquo; is more than just a motto for us, it&apos;s also our promise to the way
            we provide service! We offer all residential and commercial services from new roofs, re-roofs,
            repairs, and inspections utilizing the most advanced equipment and expert installation services.
          </p>
          <div className="mt-6">
            <Image
              src="/images/chamber-commerce.svg"
              alt="Chamber of Commerce of Cape Coral - Roof EZ"
              width={180}
              height={100}
            />
          </div>
        </div>

        {/* Right: Form card */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div style={{ width: "100%", maxWidth: 500 }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
