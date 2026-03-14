export default function AnnouncementBar() {
  const items = [
    "Free Shipping Above ₹999",
    "Limited Edition Art Drops",
    "Custom Paintings Available",
    "Free Shipping Above ₹999",
    "Limited Edition Art Drops",
    "Custom Paintings Available",
  ]

  return (
    <div
      style={{
        background: "#e27074",
        color: "#fff",
        fontSize: "14px",
        padding: "12px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "28px",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "max-content",
          padding: "0 24px",
        }}
      >
        {items.map((item, index) => (
          <span key={index}>
            {item}
            {index !== items.length - 1 ? "  |" : ""}
          </span>
        ))}
      </div>
    </div>
  )
}
