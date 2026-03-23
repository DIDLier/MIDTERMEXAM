type Page = "Home" | "About" | "Services" | "Contact" | "Book Request" | "Event Feedback";

interface HomeProps {
  setActive: (page: Page) => void;
}

interface Stat {
  num: string;
  label: string;
}

interface Announcement {
  date: string;
  title: string;
}

const stats: Stat[] = [
  { num: "4,200+", label: "Active Students" },
  { num: "18,000", label: "Library Books" },
  { num: "240",    label: "Faculty Members" },
  { num: "96%",    label: "Satisfaction Rate" },
];

const announcements: Announcement[] = [
  { date: "March 20, 2026", title: "Final Exam Schedule for 2nd Semester Now Available" },
  { date: "March 18, 2026", title: "Library Hours Extended During Finals Week" },
  { date: "March 15, 2026", title: "Online Enrollment for Summer Classes Opens April 1" },
];

export default function Home({ setActive }: HomeProps) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}>
      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "4rem", paddingBottom: "3rem", borderBottom: "1px solid #e5e7eb" }}>
        <div>
          <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.5rem" }}>
            Welcome to the
          </p>
          <h1 style={{ fontSize: "2.8rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1rem" }}>
            Student Portal
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
            Access all campus services, submit requests, and stay connected with school events — all in one organized platform.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={() => setActive("Services")}
              style={{ background: "#1a1f2e", color: "#fff", border: "none", padding: "0.7rem 1.6rem", borderRadius: "8px", fontSize: "0.88rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}
            >
              Explore Services
            </button>
            <button
              onClick={() => setActive("Book Request")}
              style={{ background: "transparent", color: "#374151", border: "1px solid #d1d5db", padding: "0.7rem 1.6rem", borderRadius: "8px", fontSize: "0.88rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}
            >
              Request a Book
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: "1.5rem", borderRadius: "10px", textAlign: "center", background: i === 0 ? "#1a1f2e" : "#f9fafb", border: i === 0 ? "none" : "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: i === 0 ? "#fff" : "#111", letterSpacing: "-0.02em" }}>{s.num}</div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500, color: i === 0 ? "rgba(255,255,255,0.6)" : "#9ca3af", marginTop: "0.2rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements */}
      <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "1rem" }}>
        Latest Announcements
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
        {announcements.map((a, i) => (
          <div
            key={i}
            style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem", transition: "all 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1a1f2e")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
          >
            <div style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 500, marginBottom: "0.4rem" }}>{a.date}</div>
            <div style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.5 }}>{a.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
