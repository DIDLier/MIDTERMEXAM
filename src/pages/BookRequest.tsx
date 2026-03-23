import { useState } from "react";

interface BookForm {
  studentId: string;
  name: string;
  email: string;
  bookTitle: string;
  author: string;
  isbn: string;
  purpose: string;
  date: string;
  notes: string;
}

interface BookRequestProps {
  showToast: (msg: string) => void;
}

const EMPTY: BookForm = {
  studentId: "", name: "", email: "",
  bookTitle: "", author: "", isbn: "",
  purpose: "", date: "", notes: "",
};

export default function BookRequest({ showToast }: BookRequestProps) {
  const [form, setForm] = useState<BookForm>(EMPTY);

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (): void => {
    if (!form.studentId || !form.bookTitle) {
      showToast("Please fill in Student ID and Book Title.");
      return;
    }
    showToast("Book request submitted successfully!");
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

        {/* Form */}
        <div className="col-md-7">
          <h5 className="mb-3">Request Form</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Student ID <span className="text-danger">*</span></label>
              <input name="studentId" value={form.studentId} onChange={handle}
                className="form-control" placeholder="2024-00123" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input name="name" value={form.name} onChange={handle}
                className="form-control" placeholder="Juan dela Cruz" />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input name="email" type="email" value={form.email} onChange={handle}
                className="form-control" placeholder="juan@school.edu" />
            </div>
            <div className="col-12">
              <label className="form-label">Book Title <span className="text-danger">*</span></label>
              <input name="bookTitle" value={form.bookTitle} onChange={handle}
                className="form-control" placeholder="Introduction to Algorithms" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Author</label>
              <input name="author" value={form.author} onChange={handle}
                className="form-control" placeholder="Thomas H. Cormen" />
            </div>
            <div className="col-md-6">
              <label className="form-label">ISBN</label>
              <input name="isbn" value={form.isbn} onChange={handle}
                className="form-control" placeholder="978-0262033848" />
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

        {/* Live Preview */}
        <div className="col-md-5">
          <h5 className="mb-3">Preview</h5>
          <div className="border rounded p-3 bg-light">
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                {[
                  ["Student ID",   form.studentId],
                  ["Full Name",    form.name],
                  ["Email",        form.email],
                  ["Book Title",   form.bookTitle],
                  ["Author",       form.author],
                  ["ISBN",         form.isbn],
                  ["Purpose",      form.purpose],
                  ["Pickup Date",  form.date],
                  ["Notes",        form.notes],
                ].map(([label, val], i) => (
                  <tr key={i}>
                    <td className="text-muted small fw-semibold" style={{ width: "40%" }}>{label}</td>
                    <td className="small">{val || <span className="text-muted fst-italic">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
