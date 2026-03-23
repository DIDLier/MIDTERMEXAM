interface Service {
    icon: string;
    title: string;
    desc: string;
  }
  
  const services: Service[] = [
    { icon: "📚", title: "Book Request Submission",          desc: "Submit requests to borrow books from the library and track their status in real time." },
    { icon: "📝", title: "Event Feedback Submission",        desc: "Rate and review campus events you attended to help improve future activities." },
    { icon: "🏛️", title: "Access University Event Info",    desc: "Stay informed on upcoming seminars, cultural events, and academic activities." },
    { icon: "📖", title: "Explore Academic Resources",       desc: "Browse e-learning platforms, digital libraries, and academic reference materials." },
    { icon: "🎓", title: "Academic Advising",                desc: "Get guidance on course selection, academic planning, and career pathways." },
    { icon: "🏥", title: "Health & Wellness Services",       desc: "Access student wellness programs, medical consultations, and mental health support." },
  ];
  
  export default function Services() {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.5rem" }}>
          What We Offer
        </p>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Services</h1>
        <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.7, fontWeight: 300, maxWidth: 520, marginBottom: "2.5rem" }}>
          Everything you need, right at your fingertips. Browse our full suite of academic and campus support services.
        </p>
  
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem", transition: "all 0.2s", cursor: "default" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1a1f2e"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{s.icon}</div>
              <h6 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{s.title}</h6>
              <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  