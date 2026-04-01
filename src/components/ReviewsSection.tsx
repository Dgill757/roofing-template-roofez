import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    name: "Michelle Tapp",
    platform: "google",
    text: "Not only was Austin incredibly helpful throughout the whole process, but he was quick to jump on any issue that arose. He was readily available for any questions & was always timely & professional. His team also did a…",
  },
  {
    name: "Heather Cox",
    platform: "facebook",
    text: "From the start everyone has been helpful, professional, and absolutely amazing. Have not had a bad attitude or feel like a inconvenience with all my questions they have been happy to answer all my questions professionally…",
  },
  {
    name: "Jiri Vilim",
    platform: "facebook",
    text: "My recent experience with Roof EZ left me thoroughly impressed. From the initial consultation to the final inspection, they demonstrated professionalism, expertise, and outstanding service. I contracted Roof EZ on a large-scale project…",
  },
  {
    name: "Jessica Fladung",
    platform: "google",
    text: "I worked with Nick from start to finish, and I'm glad I did. He responded to me instantly all throughout the process and always kept me updated…whether it was time frames, what to expect, or any other concerns I had.",
  },
];

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "google") {
    return (
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "#4285F4" }}
      >
        <span className="text-white font-bold text-sm">G</span>
      </div>
    );
  }
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{ background: "#1877F2" }}
    >
      <span className="text-white font-bold text-sm">f</span>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      className="py-16"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: "url('/images/review-back.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        {/* Heading */}
        <h2
          className="font-ethno text-center mb-12"
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
          HEAR FROM OUR CUSTOMERS
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left sidebar: Logo + ratings */}
          <div className="lg:w-1/4 flex flex-col items-center gap-6 justify-center">
            <Image src="/images/logo-1.svg" alt="Roof EZ" width={200} height={95} />
            <div className="space-y-4 w-full">
              {[
                { icon: "/images/google-5star.svg", score: "5.0", label: "Google" },
                { icon: "/images/facebook-rating.svg", score: "4.8", label: "Facebook" },
                { icon: "/images/yelp-rating.svg", score: "5.0", label: "Yelp" },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <Image src={r.icon} alt={r.label} width={44} height={44} />
                  <div>
                    <div className="font-visbyxb text-white text-2xl">{r.score}</div>
                    <div className="text-yellow-400 text-base">★★★★★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 2x2 review grid */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <div key={review.name} className="review-card">
                <div className="flex items-center justify-between mb-3">
                  <h4
                    className="font-ethno text-white"
                    style={{ fontSize: 18, letterSpacing: "0.02em" }}
                  >
                    {review.name.toUpperCase()}
                  </h4>
                  <PlatformIcon platform={review.platform} />
                </div>
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="font-visbydb text-gray-300" style={{ fontSize: 15, lineHeight: "24px" }}>
                  {review.text}
                </p>
                <Link
                  href="/reviews/"
                  className="mt-3 inline-block font-visbyxb text-orange-400 hover:text-orange-300 transition-colors text-sm"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* View All Reviews CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/reviews/"
            className="font-visbyxb text-white border border-orange-500 px-10 py-3 hover:bg-orange-500 hover:text-black transition-all"
            style={{ fontSize: 18 }}
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
