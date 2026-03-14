const faqs = [
  {
    q: "Do you take custom orders?",
    a: "Yes, custom paintings and personalized handmade products are available.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are dispatched within a few days and delivered based on your location.",
  },
  {
    q: "Do you offer gift packaging?",
    a: "Yes, selected products can be packed beautifully for gifting.",
  },
]

export default function FAQSection() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "56px auto 0",
        padding: "0 24px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          margin: "0 0 24px",
        }}
      >
        FAQs
      </h2>

      <div style={{ display: "grid", gap: "16px" }}>
        {faqs.map((item) => (
          <div
            key={item.q}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "22px 24px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {item.q}
            </div>
            <div
              style={{
                color: "#555",
                lineHeight: 1.6,
                fontSize: "16px",
              }}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
