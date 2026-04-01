import InnerPageSidebar from "./InnerPageSidebar";

interface InnerPageLayoutProps {
  children: React.ReactNode;
}

export default function InnerPageLayout({ children }: InnerPageLayoutProps) {
  return (
    <section
      style={{
        backgroundImage: "url('/images/tab-back-grd.png')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top center",
        padding: "84px 0 40px",
      }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        <div className="flex gap-8 items-start">
          {/* Left: main article content */}
          <div className="flex-1 min-w-0">{children}</div>

          {/* Right: sidebar with form */}
          <div className="shrink-0" style={{ width: 370 }}>
            <InnerPageSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
