interface ContactProps {
    showToast: (msg: string) => void;
  }
  
  interface ContactInfo {
    label: string;
    value: string;
  }
  
  const info: ContactInfo[] = [
    { label: "Office Location", value: "F309" },
    { label: "Email",           value: "MSI@e.ubaguio.edu" },
    { label: "Phone",           value: "0923118732" },
    { label: "Office Hours",    value: "Mon–Fri, 8:00 AM – 5:00 PM" },
  ];
  
  const inputStyle: React.CSSProperties = {
    width: "100%", background: "#fff", border: "1px solid #e5e7eb",
    borderRadius: "8px", padding: "0.65rem 0.9rem", fontSize: "0.9rem",
    fontFamily: "inherit", outline: "none", boxSizing: "border-box", display: "block",
  };
  
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.72rem", fontWeight: 600,
    letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.4rem",
  };
  
  export default function Contact({ showToast }: ContactProps) {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.5rem" }}>
          Get in Touch
        </p>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Contact Us</h1>
        <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.7, fontWeight: 300, maxWidth: 520, marginBottom: "2.5rem" }}>
          Have questions? Reach out to the student services team and we'll get back to you promptly.
        </p>
  
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2.5rem" }}>
          {/* Info tiles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {info.map((c, i) => (
              <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1rem 1.25rem" }}>
                <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "#9ca3af", marginBottom: "0.3rem" }}>{c.label}</div>
                <div style={{ fontWeight: 500, fontSize: "0.9rem" }}>{c.value}</div>
              </div>
            ))}
          </div>
  
          {/* Form */}
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div><label style={labelStyle}>Your Name</label><input type="text" placeholder="Juan dela Cruz" style={inputStyle} /></div>
              <div><label style={labelStyle}>Email Address</label><input type="email" placeholder="juan@s.ubaguio.edu" style={inputStyle} /></div>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Subject</label>
              <input type="text" placeholder="Inquiry about enrollment" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>Message</label>
              <textarea rows={5} placeholder="Write your message here…" style={{ ...inputStyle, resize: "vertical", height: "auto" }} />
            </div>
            <button
              style={{ background: "#1a1f2e", color: "#fff", border: "none", padding: "0.7rem 1.6rem", borderRadius: "8px", fontSize: "0.88rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}
              onClick={() => showToast(" Message sent! We'll reply within 24 hours.")}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    );
  }
  