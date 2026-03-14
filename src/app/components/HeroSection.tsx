import hero from "../../assets/hero.png"

export default function HeroSection() {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "38px auto 0",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "28px",
          overflow: "hidden",
          minHeight: "520px",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.12)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "#fff",
            padding: "24px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "Georgia, serif",
              fontSize: "84px",
              fontWeight: 400,
              letterSpacing: "1px",
            }}
          >
            #ART COLLECTION
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "22px",
            }}
          >
            Handmade paintings & creative prints you'll love
          </p>
        </div>
      </div>
    </section>
  )
}
