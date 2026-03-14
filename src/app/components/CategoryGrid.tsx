import paintings from "../../assets/paintings.png"
import customPaintings from "../../assets/custom-paintings.png"
import bookmarks from "../../assets/bookmarks.png"
import postcards from "../../assets/postcards.png"

const categories = [
  { title: "Paintings", image: paintings },
  { title: "Custom Paintings", image: customPaintings },
  { title: "Bookmarks", image: bookmarks },
  { title: "Postcards", image: postcards },
]

export default function CategoryGrid() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "48px auto 0",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "22px",
        }}
      >
        {categories.map((item) => (
          <div
            key={item.title}
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              minHeight: "370px",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.05))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "22px",
                bottom: "20px",
                color: "#fff",
                fontSize: "26px",
                fontFamily: "Georgia, serif",
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
