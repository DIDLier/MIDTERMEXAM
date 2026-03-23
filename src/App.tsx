import { useState } from "react";
import type { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import EventFeedback from "./pages/EventFeedBack";

type Page = "Home" | "About" | "Services" | "Contact" | "Book Request" | "Event Feedback";

export default function App() {
  const [active, setActive] = useState<Page>("Home");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string): void => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const renderPage = (): ReactElement => {
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