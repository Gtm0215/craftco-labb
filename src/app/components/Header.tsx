export default function Header() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e8e2e2"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "28px 24px 24px"
        }}
      >
        {/* Logo */}
        <div
          style={{
            textAlign: "center",
            fontSize: "64px",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            marginBottom: "26px"
          }}
        >
          craftco.lab
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px"
          }}
        >
          <div style={{ width: "180px" }} />

          <nav
            style={{
              display: "flex",
              gap: "38px",
              fontSize: "18px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <a href="#">Categories</a>
            <a href="#">Store</a>
            <a href="#">Track Order</a>
            <a href="#">Contact Us</a>
          </nav>

          <div
            style={{
              width: "180px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "18px",
              fontSize: "26px"
            }}
          >
            <span>⌕</span>
            <span>◦</span>
            <span>♡</span>
            <span>🛒</span>
          </div>
        </div>
      </div>
    </header>
  )
}
