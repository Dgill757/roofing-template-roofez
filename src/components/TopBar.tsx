export default function TopBar() {
  return (
    <div className="relative overflow-hidden" style={{ padding: "30px 0 15px", background: "transparent" }}>
      {/* Video background */}
      <video
        src="/videos/top-header-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        <div className="flex items-center justify-between">
          {/* Left: Schedule button */}
          <a href="/contact-us/" target="_blank" rel="noopener noreferrer" className="btn-black" style={{ height: 42 }}>
            <span>Schedule Your Free Estimate</span>
          </a>
          {/* Right: Phone number */}
          <a
            href="tel:239-788-6108"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black"
            style={{ height: 42 }}
          >
            <span
              className="font-ethno"
              style={{ fontSize: 27, letterSpacing: "-0.07em", lineHeight: "40px" }}
            >
              239-788-6108
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
