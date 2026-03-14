import hero from "../../assets/hero.png"

export default function HeroSection(){

return(

<div className="container">

<div style={{
position:"relative",
borderRadius:"20px",
overflow:"hidden"
}}>

<img src={hero}/>

<div style={{
position:"absolute",
top:"40%",
left:"50%",
transform:"translate(-50%,-50%)",
color:"white",
textAlign:"center"
}}>

<h1 style={{fontSize:"60px",fontFamily:"serif"}}>

#ART COLLECTION

</h1>

<p>

Handmade paintings & creative prints you'll love

</p>

</div>

</div>

</div>

)

}            zIndex: 2,
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
