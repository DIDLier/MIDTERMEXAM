import { useState } from "react";

interface Event {
  date: string;
  title: string;
  location: string;
}

interface FeedbackForm {
  selectedEvent: string;
  attendeeName: string;
  attendeeEmail: string;
  recommend: string;
  comments: string;
}

const EVENTS: Event[] = [
  { date: "Mar 28", title: "Science Fair 2026", location: "Main Gym" },
  { date: "Apr 3",  title: "Campus Job Fair",   location: "Hall B" },
  { date: "Apr 10", title: "Cultural Night",    location: "Auditorium" },
];

const EMPTY: FeedbackForm = {
  selectedEvent: "", attendeeName: "",
  attendeeEmail: "", recommend: "", comments: "",
};

export default function EventFeedback() {
  const [form, setForm] = useState<FeedbackForm>(EMPTY);

  const set = (field: keyof FeedbackForm, val: string): void => {
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (): void => {
    if (!form.selectedEvent) {
      alert("Please select an event before submitting.");
      return;
    }
    alert("Feedback submitted! Thank you for your response.");
    setForm(EMPTY);
  };

  return (
    <div className="container py-5">

      <h2 className="mb-2">Event Feedback</h2>
      <p className="text-muted mb-4">
        Select an event and share your feedback to help us improve future activities.
      </p>

      <hr />

      <div className="row g-4 mt-2">

        {/* Form */}
        <div className="col-md-8">
          <h5 className="mb-3">Feedback Form</h5>

          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Select Event <span className="text-danger">*</span></label>
              <select
                className="form-select"
                value={form.selectedEvent}
                onChange={(e) => set("selectedEvent", e.target.value)}
              >
                <option value="">Choose an event...</option>
                {EVENTS.map((ev, i) => (
                  <option key={i} value={ev.title}>
                    {ev.title} — {ev.date}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Your Name</label>
              <input
                className="form-control"
                placeholder="Juan dela Cruz"
                value={form.attendeeName}
                onChange={(e) => set("attendeeName", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="juan@school.edu"
                value={form.attendeeEmail}
                onChange={(e) => set("attendeeEmail", e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Would you recommend this event?</label>
              <select
                className="form-select"
                value={form.recommend}
                onChange={(e) => set("recommend", e.target.value)}
              >
                <option value="">Select...</option>
                <option>Definitely</option>
                <option>Probably</option>
                <option>Not Sure</option>
                <option>Probably Not</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Comments and Suggestions</label>
              <textarea
                className="form-control"
                rows={4}
                placeholder="Share what you liked or what could be improved..."
                value={form.comments}
                onChange={(e) => set("comments", e.target.value)}
              />
            </div>
            <div className="col-12">
              <button className="btn btn-dark" onClick={handleSubmit}>
                Submit Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events List */}
        <div className="col-md-4">
          <h5 className="mb-3">Upcoming Events</h5>
          <ul className="list-group">
            {EVENTS.map((ev, i) => (
              <li
                key={i}
                className={`list-group-item list-group-item-action ${form.selectedEvent === ev.title ? "active" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => set("selectedEvent", ev.title)}
              >
                <div className="fw-semibold">{ev.title}</div>
                <div className="small">{ev.date} — {ev.location}</div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
export default function EventFeedback() {
  const [form, setForm] = useState<FeedbackForm>(EMPTY);

  const set = (field: keyof FeedbackForm, val: string): void => {
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (): void => {
    if (!form.selectedEvent) {
      alert("Please select an event before submitting.");
      return;
    }
    alert("Feedback submitted! Thank you for your response.");
    setForm(EMPTY);
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}>
      <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.5rem" }}>
        Share Your Experience
      </p>
      <h1 style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Event Feedback</h1>
      <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.7, fontWeight: 300, maxWidth: 520, marginBottom: "2.5rem" }}>
        Help us improve future events. Select an event and share your thoughts below.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
        {/* Form */}
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Select Event <span style={{ color: "#ef4444" }}>*</span></label>
            <select value={form.selectedEvent} onChange={(e) => set("selectedEvent", e.target.value)} style={inputStyle}>
              <option value="">Choose an event…</option>
              {EVENTS.map((ev, i) => (
                <option key={i} value={ev.title}>{ev.title} ({ev.date})</option>
              ))}
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input placeholder="Juan dela Cruz" value={form.attendeeName} onChange={(e) => set("attendeeName", e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="juan@school.edu" value={form.attendeeEmail} onChange={(e) => set("attendeeEmail", e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Would you recommend this event?</label>
            <select value={form.recommend} onChange={(e) => set("recommend", e.target.value)} style={inputStyle}>
              <option value="">Select…</option>
              <option>Definitely</option>
              <option>Probably</option>
              <option>Not Sure</option>
              <option>Probably Not</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={labelStyle}>Comments & Suggestions</label>
            <textarea rows={4} placeholder="Share what you liked or what could be improved…" value={form.comments} onChange={(e) => set("comments", e.target.value)} style={{ ...inputStyle, resize: "vertical", height: "auto" }} />
          </div>

          <button onClick={handleSubmit} style={{ background: "#1a1f2e", color: "#fff", border: "none", padding: "0.7rem 1.6rem", borderRadius: "8px", fontSize: "0.88rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            Submit Feedback
          </button>
        </div>

        {/* Event Cards */}
        <div>
          <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.75rem" }}>
            Upcoming Events
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {EVENTS.map((ev, i) => (
              <div
                key={i}
                onClick={() => set("selectedEvent", ev.title)}
                style={{
                  background: form.selectedEvent === ev.title ? "#f0fdf4" : "#fff",
                  border: `1px solid ${form.selectedEvent === ev.title ? "#86efac" : "#e5e7eb"}`,
                  borderRadius: "10px", padding: "1rem 1.25rem", cursor: "pointer", transition: "all 0.15s",
                }}
              >
                <div style={{ fontSize: "0.68rem", color: "#16a34a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>{ev.date}</div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{ev.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#6b7280" }}>📍 {ev.location}</div>
                <span style={{ display: "inline-block", marginTop: "0.5rem", background: "#f0fdf4", color: "#16a34a", fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.06em", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                  {ev.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
