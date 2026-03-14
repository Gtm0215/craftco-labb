import paintings from "../../assets/paintings.png"
import customPaintings from "../../assets/custom-paintings.png"
import bookmarks from "../../assets/bookmarks.png"
import postcards from "../../assets/postcards.png"

export default function CategoryGrid(){

const categories=[
{title:"Paintings",img:paintings},
{title:"Custom Paintings",img:customPaintings},
{title:"Bookmarks",img:bookmarks},
{title:"Postcards",img:postcards}
]

return(

<div className="container">

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px"
}}>

{categories.map(cat=>(

<div key={cat.title}>

<img src={cat.img} style={{borderRadius:"10px"}}/>

<h3 style={{textAlign:"center"}}>

{cat.title}

</h3>

</div>

))}

</div>

</div>

)

}              backgroundImage: `url(${item.image})`,
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
