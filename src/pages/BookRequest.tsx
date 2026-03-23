import { useState } from "react";

interface BookForm {
  studentId: string;
  name: string;
  email: string;
  bookTitle: string;
  author: string;
  purpose: string;
  date: string;
  notes: string;
}

const EMPTY: BookForm = {
  studentId: "", name: "", email: "",
  bookTitle: "", author: "",
  purpose: "", date: "", notes: "",
};

export default function BookRequest() {
  const [form, setForm] = useState<BookForm>(EMPTY);
  const [submittedData, setSubmittedData] = useState<BookForm | null>(null);

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (): void => {
    if (!form.studentId || !form.bookTitle) {
      alert("Please fill in Student ID and Book Title.");
      return;
    }
    
    setSubmittedData(form);
    alert("Book request submitted successfully!");
    setForm(EMPTY);
  };

  return (
    <div className="container py-5">

      <h2 className="mb-2">Book Request</h2>
      <p className="text-muted mb-4">
        Fill out the form below to request a book from the library.
      </p>

      <hr />

      <div className="row g-4 mt-2">

        <div className="col-md-12">
          <h5 className="mb-3">Request Form</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Student ID <span className="text-danger">*</span></label>
              <input name="studentId" value={form.studentId} onChange={handle}
                className="form-control" placeholder="20201234" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input name="name" value={form.name} onChange={handle}
                className="form-control" placeholder="Juan dela Cruz" />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input name="email" type="email" value={form.email} onChange={handle}
                className="form-control" placeholder="juan@s.school.edu" />
            </div>
            <div className="col-12">
              <label className="form-label">Book Title <span className="text-danger">*</span></label>
              <input name="bookTitle" value={form.bookTitle} onChange={handle}
                className="form-control" placeholder="Mein Kampf" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Author</label>
              <input name="author" value={form.author} onChange={handle}
                className="form-control" placeholder="Thomas H. Cormen" />
            </div>
            <div className="col-12">
              <label className="form-label">Purpose</label>
              <select name="purpose" value={form.purpose} onChange={handle} className="form-select">
                <option value="">Select purpose...</option>
                <option>Research</option>
                <option>Class Requirement</option>
                <option>Thesis / Dissertation</option>
                <option>Personal Study</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Preferred Pickup Date</label>
              <input name="date" type="date" value={form.date} onChange={handle}
                className="form-control" />
            </div>
            <div className="col-12">
              <label className="form-label">Additional Notes</label>
              <textarea name="notes" value={form.notes} onChange={handle}
                className="form-control" rows={3} placeholder="Any special instructions..." />
            </div>
            <div className="col-12">
              <button className="btn btn-dark" onClick={submit}>
                Submit Request
              </button>
            </div>
          </div>
        </div>

      </div>

      {submittedData && (
        <div className="mt-5">
          <h5 className="mb-3">Recently Submitted Request</h5>
          <div className="border rounded p-3 bg-light">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                {[
                  ["Student ID", submittedData.studentId],
                  ["Full Name", submittedData.name],
                  ["Email", submittedData.email],
                  ["Book Title", submittedData.bookTitle],
                  ["Author", submittedData.author],
                  ["Purpose", submittedData.purpose],
                  ["Pickup Date", submittedData.date],
                  ["Notes", submittedData.notes],
                ].map(([label, val], i) => (
                  <tr key={i}>
                    <td className="text-muted small fw-semibold" style={{ width: "30%" }}>{label}</td>
                    <td className="small">{val || <span className="text-muted fst-italic">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}