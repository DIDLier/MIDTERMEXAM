interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;
  return (
    <div style={{
      position: "fixed", bottom: "2rem", right: "2rem",
      background: "#1a1f2e", color: "#fff",
      padding: "0.9rem 1.5rem", borderRadius: "10px",
      fontSize: "0.88rem", fontWeight: 500,
      display: "flex", alignItems: "center", gap: "0.6rem",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)", zIndex: 9999,
      borderLeft: "4px solid #4ade80",
      animation: "slideUp 0.3s ease",
    }}>
      {message}
      <style>{`@keyframes slideUp { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }`}</style>
    </div>
  );
}
