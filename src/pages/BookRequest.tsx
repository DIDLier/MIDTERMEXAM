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

interface PreviewRowProps {
  label: string;
  val: string;
}

const EMPTY: BookForm = { studentId: "", name: "", email: "", bookTitle: "", author: "", isbn: "", purpose: "", date: "", notes: "" };

const inputStyle: React.CSSProperties = {
  width: "100%", background: "#fff", border: "1px solid #e5e7eb",
  borderRadius: "8px", padding: "0.65rem 0.9rem", fontSize: "0.9rem",
  fontFamily: "inherit", outline: "none", boxSizing: "border-box", display: "block",
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "0.72rem", fontWeight: 600,
  letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.4rem",
};

function PreviewRow({ label, val }: PreviewRowProps) {
  return (
    <div style={{ marginBottom: "0.9rem" }}>
      <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "#9ca3af", marginBottom: "0.2rem" }}>{label}</div>
      <div style={{ fontSize: "0.9rem", color: val ? "#111" : "#d1d5db", fontStyle: val ? "normal" : "italic" }}>{val || "Not filled yet"}</div>
    </div>
  );
}

export default function BookRequest({ showToast }: BookRequestProps) {
  const [form, setForm] = useState<BookForm>(EMPTY);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (): void => {
    if (!form.studentId || !form.bookTitle) {
      showToast("⚠️ Student ID and Book Title are required.");
      return;
    }
    showToast("📚 Book request submitted successfully!");
    setForm(EMPTY);
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}>
      <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.5rem" }}>
        Library Services
      </p>
      <h1 style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Book Request</h1>
      <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.7, fontWeight: 300, maxWidth: 520, marginBottom: "2.5rem" }}>
        Fill in the details below to request a book from the library. The preview updates in real time.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {/* Form */}
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div><label style={labelStyle}>Student ID <span style={{ color: "#ef4444" }}>*</span></label><input name="studentId" value={form.studentId} onChange={handle} placeholder="2024-00123" style={inputStyle} /></div>
            <div><label style={labelStyle}>Full Name</label><input name="name" value={form.name} onChange={handle} placeholder="Juan dela Cruz" style={inputStyle} /></div>
          </div>
          <div style={{ marginBottom: "1rem" }}><label style={labelStyle}>Email</label><input name="email" type="email" value={form.email} onChange={handle} placeholder="juan@school.edu" style={inputStyle} /></div>
          <div style={{ marginBottom: "1rem" }}><label style={labelStyle}>Book Title <span style={{ color: "#ef4444" }}>*</span></label><input name="bookTitle" value={form.bookTitle} onChange={handle} placeholder="Introduction to Algorithms" style={inputStyle} /></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div><label style={labelStyle}>Author</label><input name="author" value={form.author} onChange={handle} placeholder="Thomas H. Cormen" style={inputStyle} /></div>
            <div><label style={labelStyle}>ISBN</label><input name="isbn" value={form.isbn} onChange={handle} placeholder="978-0262033848" style={inputStyle} /></div>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Purpose</label>
            <select name="purpose" value={form.purpose} onChange={handle} style={inputStyle}>
              <option value="">Select purpose…</option>
              <option>Research</option>
              <option>Class Requirement</option>
              <option>Thesis / Dissertation</option>
              <option>Personal Study</option>
            </select>
          </div>
          <div style={{ marginBottom: "1rem" }}><label style={labelStyle}>Preferred Pickup Date</label><input name="date" type="date" value={form.date} onChange={handle} style={inputStyle} /></div>
          <div style={{ marginBottom: "1.5rem" }}><label style={labelStyle}>Additional Notes</label><textarea name="notes" value={form.notes} onChange={handle} rows={3} placeholder="Any special instructions…" style={{ ...inputStyle, resize: "vertical", height: "auto" }} /></div>
          <button onClick={submit} style={{ background: "#1a1f2e", color: "#fff", border: "none", padding: "0.7rem 1.6rem", borderRadius: "8px", fontSize: "0.88rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            Submit Request
          </button>
        </div>

        {/* Live Preview */}
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem", position: "sticky", top: 80, alignSelf: "start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #e5e7eb" }}>
            <span>📋</span>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "#6b7280" }}>Request Preview</span>
          </div>
          <PreviewRow label="Student ID"  val={form.studentId} />
          <PreviewRow label="Full Name"   val={form.name} />
          <PreviewRow label="Email"       val={form.email} />
          <PreviewRow label="Book Title"  val={form.bookTitle} />
          <PreviewRow label="Author"      val={form.author} />
          <PreviewRow label="ISBN"        val={form.isbn} />
          <PreviewRow label="Pickup Date" val={form.date} />
          <PreviewRow label="Notes"       val={form.notes} />
          {form.purpose && (
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "8px", padding: "0.75rem 1rem", marginTop: "0.5rem" }}>
              <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, color: "#16a34a", marginBottom: "0.2rem" }}>Purpose</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#16a34a" }}>{form.purpose}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
