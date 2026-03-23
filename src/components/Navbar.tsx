type Page = "Home" | "About" | "Services" | "Contact" | "Book Request" | "Event Feedback";

interface NavbarProps {
  active: Page;
  setActive: (page: Page) => void;
}

const links: Page[] = ["Home", "About", "Services", "Contact", "Book Request", "Event Feedback"];

export default function Navbar({ active, setActive }: NavbarProps) {
  return (
    <nav style={{ background: "#1a1f2e", padding: "0 2rem", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>Student Portal</span>
        <div style={{ display: "flex", gap: "0.1rem" }}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              style={{
                background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
                color: active === link ? "#ffffff" : "#9ca3af",
                fontWeight: active === link ? 600 : 400,
                fontSize: "0.85rem", padding: "0.45rem 0.85rem",
                borderBottom: active === link ? "2px solid #fff" : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
