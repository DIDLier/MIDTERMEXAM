import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import EventFeedback from "./pages/EventFeedback";

type Page = "Home" | "About" | "Services" | "Contact" | "Book Request" | "Event Feedback";

export default function App() {
  const [active, setActive] = useState<Page>("Home");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string): void => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const renderPage = (): React.ReactElement => {
    switch (active) {
      case "Home":           return <Home setActive={setActive} />;
      case "About":          return <About />;
      case "Services":       return <Services />;
      case "Contact":        return <Contact showToast={showToast} />;
      case "Book Request":   return <BookRequest showToast={showToast} />;
      case "Event Feedback": return <EventFeedback />;
      default:               return <Home setActive={setActive} />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar active={active} setActive={setActive} />
      <main className="flex-grow-1">
        {renderPage()}
      </main>
      <Footer />

      {/* Simple toast notification */}
      {toast && (
        <div
          className="position-fixed bottom-0 end-0 m-4 alert alert-dark alert-dismissible"
          role="alert"
          style={{ zIndex: 9999, minWidth: 280 }}
        >
          {toast}
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => setToast(null)}
          />
        </div>
      )}
    </div>
  );
}
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Navbar active={active} setActive={setActive} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer />
      <Toast message={toast} />
    </div>
  );
}
