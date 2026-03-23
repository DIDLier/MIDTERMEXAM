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
  { date: "Apr 3",  title: "SHS INTRAMURALS",   location: "Main Gym" },
  { date: "Apr 10", title: "Intramurals",    location: "Main Gym" },
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
    alert("Feedback submitted!");
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
                <option value="">Choose an event</option>
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
                <option>PROBABLY</option>
                <option>MAYBE</option>
                <option>NAH</option>
                <option>NAH UH</option>
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

        <div className="col-md-4">
          <h5 className="mb-3">Upcoming Events</h5>
          <ul className="list-group">
            {EVENTS.map((ev, i) => (
              <li
                key={i}
                className="list-group-item"
              >
                <div className="fw-semibold">{ev.title}</div>
                <div className="small text-muted">{ev.date} — {ev.location}</div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}