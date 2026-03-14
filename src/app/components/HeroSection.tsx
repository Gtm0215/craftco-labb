import hero from "../../../assets/hero.png"

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "520px",
        overflow: "hidden",
        borderRadius: "16px",
        margin: "40px auto",
        maxWidth: "1400px"
      }}
    >
      <img
        src={hero}
        alt="Hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          color: "#ffffff",
          padding: "24px"
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 500,
            marginBottom: "10px"
          }}
        >
          #ART COLLECTION
        </h1>

        <p
          style={{
            fontSize: "20px"
          }}
        >
          Handmade paintings & creative prints you'll love
        </p>
      </div>
    </section>
  )
}
