export default function Header(){

return(

<div style={{
background:"white",
borderBottom:"1px solid #eee"
}}>

<div className="container">

<h1 style={{
textAlign:"center",
fontFamily:"serif",
fontSize:"40px"
}}>
craftco.lab
</h1>

<div style={{
display:"flex",
justifyContent:"center",
gap:"30px",
marginTop:"10px"
}}>

<a>Categories</a>
<a>Store</a>
<a>Track Order</a>
<a>Contact Us</a>

</div>

</div>

</div>

)

}
          <nav
            style={{
              display: "flex",
              gap: "38px",
              fontSize: "18px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
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
              fontSize: "26px",
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
