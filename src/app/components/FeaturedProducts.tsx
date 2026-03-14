import bulb from "../../assets/custom-bulb-deco.png"
import cd from "../../assets/custom-wall-cd.png"
import ocean from "../../assets/ocean-vinyl.png"
import xmas from "../../assets/xmas-postcard.png"
import animal from "../../assets/animal-canvas.png"
import hamper from "../../assets/gift-hamper.png"

export default function FeaturedProducts(){

const products=[

{title:"Custom Bulb Deco",price:"₹299",img:bulb},
{title:"Custom Wall CD Hanging",price:"₹299",img:cd},
{title:"Ocean on Vinyl",price:"₹499",img:ocean},
{title:"Custom Xmas Postcard",price:"₹150",img:xmas},
{title:"Animal Canvas",price:"₹599",img:animal},
{title:"Mystery Craft Hamper",price:"₹1299",img:hamper}

]

return(

<div className="container">

<h2 style={{textAlign:"center",fontSize:"40px",fontFamily:"serif"}}>

Featured Products

</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"30px"
}}>

{products.map(p=>(

<div key={p.title} style={{background:"white",padding:"15px",borderRadius:"10px"}}>

<img src={p.img}/>

<h3>{p.title}</h3>

<p style={{color:"#e35c5c"}}>{p.price}</p>

<button style={{
background:"#e35c5c",
color:"white",
border:"none",
padding:"10px",
borderRadius:"5px",
width:"100%"
}}>

Add to Cart

</button>

</div>

))}

</div>

</div>

)

}
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
