type Page = "Home" | "About" | "Services" | "Contact" | "Book Request" | "Event Feedback";

interface HomeProps {
  setActive: (page: Page) => void;
}

export default function Home({ setActive }: HomeProps) {
  return (
    <div className="container py-5">

      <div className="mb-5">
        <h2 className="mb-2">Welcome to the Student Portal</h2>
        <p className="text-muted">
          Access campus services, submit book requests, and share event feedback all in one place.
        </p>
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-dark" onClick={() => setActive("Book Request")}>
            Request a Book
          </button>
          <button className="btn btn-outline-secondary" onClick={() => setActive("Services")}>
            View Services
          </button>
        </div>
      </div>

      <hr />

      <div className="row g-3 my-4">
        {[
          { num: "4,200+", label: "Active Students" },
          { num: "18,000", label: "Library Books" },
          { num: "240",    label: "Faculty Members" },
          { num: "10000%",    label: "Satisfaction Rate" },
        ].map((s, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="border rounded p-3 text-center">
              <div className="fs-4 fw-bold">{s.num}</div>
              <div className="text-muted small">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div className="mt-4">
        <h5 className="mb-3">Announcements</h5>
        <ul className="list-group">
          {[
            { date: "March 20, 2026", title: "Final Exam Schedule for 2nd Semester Now Available" },
            { date: "March 18, 2026", title: "Library Hours Extended During Finals Week" },
            { date: "March 15, 2026", title: "Online Enrollment for Summer Classes Opens April 1" },
          ].map((a, i) => (
            <li className="list-group-item" key={i}>
              <div className="text-muted small">{a.date}</div>
              <div>{a.title}</div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}