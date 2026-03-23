interface ContactProps {
  showToast: (msg: string) => void;
}

export default function Contact({ showToast }: ContactProps) {
  return (
    <div className="container py-5">

      <h2 className="mb-2">Contact Us</h2>
      <p className="text-muted mb-4">
        Reach out to the student services team and we will get back to you.
      </p>

      <hr />

      <div className="row g-4 mt-2">

        {/* Info */}
        <div className="col-md-4">
          <h5 className="mb-3">Office Information</h5>
          <ul className="list-unstyled text-muted">
            <li className="mb-2"><strong>Location:</strong> Admin Building, Room 101</li>
            <li className="mb-2"><strong>Email:</strong> students@portal.edu</li>
            <li className="mb-2"><strong>Phone:</strong> +63 74 123 4567</li>
            <li className="mb-2"><strong>Hours:</strong> Mon–Fri, 8:00 AM – 5:00 PM</li>
          </ul>
        </div>

        {/* Form */}
        <div className="col-md-8">
          <h5 className="mb-3">Send a Message</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Juan dela Cruz" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="juan@school.edu" />
            </div>
            <div className="col-12">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Your subject" />
            </div>
            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={4} placeholder="Write your message here..." />
            </div>
            <div className="col-12">
              <button
                className="btn btn-dark"
                onClick={() => showToast("Message sent! We will reply within 24 hours.")}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
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
  
