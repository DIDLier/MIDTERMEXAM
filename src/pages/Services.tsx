interface Service {
  title: string;
  desc: string;
}

const services: Service[] = [
  { title: "Book Request Submission",       desc: "Submit requests to borrow books from the library." },
  { title: "Event Feedback Submission",     desc: "Share your feedback on campus events you attended." },
  { title: "University Event Information",  desc: "View upcoming seminars, activities, and campus events." },
  { title: "Academic Resources",            desc: "Browse digital libraries and e-learning platforms." },
  { title: "Academic Advising",             desc: "Get help with course selection and academic planning." },
  { title: "Health and Wellness",           desc: "Access medical consultations and wellness programs." },
];

export default function Services() {
  return (
    <div className="container py-5">

      <h2 className="mb-2">Services</h2>
      <p className="text-muted mb-4">
        Browse the available services offered through the Student Portal.
      </p>

      <hr />

      <div className="row g-3 mt-2">
        {services.map((s, i) => (
          <div className="col-md-6" key={i}>
            <div className="border rounded p-3 h-100">
              <h6 className="fw-semibold mb-1">{s.title}</h6>
              <p className="text-muted small mb-0">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
