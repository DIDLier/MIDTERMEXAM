import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import EventFeedback from "./pages/EventFeedBack";

type Page = "Home" | "About" | "Services" | "Contact" | "Book Request" | "Event Feedback";

export default function App() {
  const [active, setActive] = useState<Page>("Home");

  const renderPage = (): React.ReactElement => {
    switch (active) {
      case "Home":           return <Home setActive={setActive} />;
      case "About":          return <About />;
      case "Services":       return <Services />;
      case "Contact":        return <Contact />;
      case "Book Request":   return <BookRequest />;
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
    </div>
  );
}