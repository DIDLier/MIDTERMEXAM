const values: string[] = [
    "Accessibility for all students",
    "Transparency in processes",
    "Continuous improvement",
    "Student-centered design",
    "Data privacy & security",
  ];
  
  export default function About() {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.5rem" }}>
          About Us
        </p>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
          About the Student Portal
        </h1>
        <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.7, fontWeight: 300, maxWidth: 520, marginBottom: "2.5rem" }}>
          The Student Portal is the official digital gateway of our institution, connecting students to the services and resources they need to thrive.
        </p>
  
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          {/* Our Story */}
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
            <h5 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>Our Story</h5>
            <p style={{ color: "#6b7280", fontSize: "0.92rem", lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              Founded in 2018, the Student Portal was created to eliminate friction in student–institution interactions. What started as a simple request system has grown into a comprehensive platform used by thousands daily.
            </p>
          </div>
  
          {/* Core Values */}
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
            <h5 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>Core Values</h5>
            {values.map((v, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 0", borderBottom: i < values.length - 1 ? "1px solid #f3f4f6" : "none", fontSize: "0.88rem" }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a1f2e", flexShrink: 0, display: "inline-block" }} />
                {v}
              </div>
            ))}
          </div>
  
          {/* Mission */}
          <div style={{ gridColumn: "span 2", background: "#1a1f2e", color: "#fff", borderRadius: "12px", padding: "2.5rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "0.75rem", color: "#fff" }}>Our Mission</h4>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                To empower every student with seamless access to institutional services, fostering an environment where academic success is supported at every step.
              </p>
            </div>
            <span style={{ fontSize: "4rem", flexShrink: 0 }}>🎓</span>
          </div>
        </div>
      </div>
    );
  }
  