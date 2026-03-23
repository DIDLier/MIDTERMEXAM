export default function Contact() {
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
            <li className="mb-2"><strong>Location:</strong> Admin Building, Room 307</li>
            <li className="mb-2"><strong>Email:</strong> SIT@e.portal.edu</li>
            <li className="mb-2"><strong>Phone:</strong> +639423244</li>
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
              <input type="email" className="form-control" placeholder="juan@s.school.edu" />
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
                onClick={() => alert("Message sent! We will reply within 24 hours.")}
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