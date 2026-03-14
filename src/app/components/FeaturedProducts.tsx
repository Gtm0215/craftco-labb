import customBulbDeco from "../../assets/custom-bulb-deco.png"
import customWallCd from "../../assets/custom-wall-cd.png"
import oceanVinyl from "../../assets/ocean-vinyl.png"
import xmasPostcard from "../../assets/xmas-postcard.png"
import animalCanvas from "../../assets/animal-canvas.png"
import giftHamper from "../../assets/gift-hamper.png"

const products = [
  { title: "Custom Bulb Deco", price: "₹299", image: customBulbDeco },
  { title: "Custom Wall CD Hanging", price: "₹299", image: customWallCd },
  { title: "Ocean on Vinyl", price: "₹499", image: oceanVinyl },
  { title: "Custom Xmas Postcard", price: "₹150", image: xmasPostcard },
  { title: "Animal Canvas", price: "₹599", image: animalCanvas },
  { title: "Mystery Craft Hamper for Gifting", price: "₹1,299", image: giftHamper },
]

export default function FeaturedProducts() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "56px auto 0",
        padding: "0 24px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "58px",
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          margin: "0 0 34px",
        }}
      >
        Featured Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.title}
            style={{
              background: "#fff",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ height: "340px", overflow: "hidden" }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ padding: "20px 24px 26px" }}>
              <h3
                style={{
                  margin: "0 0 14px",
                  fontSize: "22px",
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {product.title}
              </h3>

              <p
                style={{
                  margin: "0 0 20px",
                  color: "#e06c73",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {product.price}
              </p>

              <button
                style={{
                  width: "100%",
                  border: "none",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  background: "#de6d75",
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
