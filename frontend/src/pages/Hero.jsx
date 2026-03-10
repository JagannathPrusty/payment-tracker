import { useNavigate } from "react-router-dom";

function LandingPage() {

const navigate = useNavigate()

return (

<div style={styles.container}>

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap');

*{box-sizing:border-box;margin:0;padding:0}

html{scroll-behavior:smooth}

/* Animations */

@keyframes fadeUp{
from{opacity:0;transform:translateY(30px)}
to{opacity:1;transform:translateY(0)}
}

@keyframes floatCard{
0%,100%{transform:translateY(0)}
50%{transform:translateY(-10px)}
}

.hero-title{animation:fadeUp .9s ease both}
.hero-sub{animation:fadeUp .9s .15s ease both}
.hero-btns{animation:fadeUp .9s .3s ease both}
.dashboard-float{animation:floatCard 5s ease-in-out infinite}

/* Hover */

.card-hover{transition:all .3s ease}
.card-hover:hover{transform:translateY(-6px);box-shadow:0 25px 45px rgba(0,0,0,.1)}

.btn-primary{transition:all .25s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(79,70,229,.35)}

.login-btn:hover{background:#4338ca}

/* RESPONSIVE */

@media(max-width:900px){

nav{
flex-direction:column;
gap:15px;
padding:16px 20px !important;
}

.hero-title{
font-size:40px !important;
}

.hero-btns{
flex-direction:column;
align-items:center;
}

.btn-primary,.btn-secondary{
width:220px;
}

}

@media(max-width:600px){

.hero-title{
font-size:32px !important;
}

.hero-sub{
font-size:16px !important;
}

section{
padding:70px 20px !important;
}

}

`}</style>


{/* NAVBAR */}

<nav style={styles.nav}>

<h2 style={styles.logo}>PaymentTracker</h2>

<div style={styles.navLinks}>

<a href="#features">Features</a>

<a href="#how">How It Works</a>

<button
className="login-btn"
style={styles.loginBtn}
onClick={()=>navigate("/login")}
>
Login
</button>

</div>

</nav>


{/* HERO */}

<section style={styles.hero}>

<h1 className="hero-title" style={styles.title}>
Track Money Between <br/>
<span style={styles.titleAccent}>Friends</span>
</h1>

<p className="hero-sub" style={styles.subtitle}>
Never forget who owes you money again.
Manage payments, debts and reminders
with one simple dashboard.
</p>

<div className="hero-btns" style={styles.heroButtons}>

<button
className="btn-primary"
style={styles.primaryBtn}
onClick={()=>navigate("/register")}
>
Create Free Account
</button>

<button
className="btn-secondary"
style={styles.secondaryBtn}
onClick={()=>navigate("/login")}
>
Get Started →
</button>

</div>

</section>


{/* FEATURES */}

<section id="features" style={styles.section}>

<h2 style={styles.sectionTitle}>Features</h2>

<div style={styles.grid}>

<div className="card-hover" style={styles.card}>
<h3>Track Payments</h3>
<p>Record money you give or receive.</p>
</div>

<div className="card-hover" style={styles.card}>
<h3>Due Date Reminders</h3>
<p>Get reminders for pending payments.</p>
</div>

<div className="card-hover" style={styles.card}>
<h3>Secure Accounts</h3>
<p>Your data is protected and private.</p>
</div>

<div className="card-hover" style={styles.card}>
<h3>Clean Dashboard</h3>
<p>All your financial data in one place.</p>
</div>

</div>

</section>


{/* HOW IT WORKS */}

<section id="how" style={styles.sectionAlt}>

<h2 style={styles.sectionTitle}>How It Works</h2>

<div style={styles.steps}>

<div style={styles.stepCard}>
<h3>1. Add Contact</h3>
<p>Add a friend or client.</p>
</div>

<div style={styles.stepCard}>
<h3>2. Log Payment</h3>
<p>Record who paid what.</p>
</div>

<div style={styles.stepCard}>
<h3>3. Set Due Date</h3>
<p>Track repayment deadlines.</p>
</div>

<div style={styles.stepCard}>
<h3>4. Settle Up</h3>
<p>Mark transactions complete.</p>
</div>

</div>

</section>


{/* DASHBOARD */}

<section style={styles.section}>

<h2 style={styles.sectionTitle}>Dashboard Preview</h2>

<div className="dashboard-float" style={styles.dashboard}>

<p>Alex → +$200</p>
<p>Sam → -$50</p>
<p>Jordan → +$120</p>

<hr style={{margin:"15px 0"}}/>

<h3>Net Balance: +$270</h3>

</div>

</section>


{/* CTA */}

<section style={styles.cta}>

<h2 style={styles.ctaTitle}>
Start Tracking Your Payments Today
</h2>

<button
className="btn-primary"
style={styles.primaryBtn}
onClick={()=>navigate("/register")}
>
Create Free Account
</button>

</section>


{/* FOOTER */}

<footer style={styles.footer}>

<p>© 2026 PaymentTracker</p>

<div style={styles.footerLinks}>
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Contact</a>
</div>

</footer>

</div>

)

}

const styles={

container:{
fontFamily:"Outfit, sans-serif",
background:"#f8faff",
color:"#0f172a"
},

nav:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"18px clamp(20px,5vw,70px)",
background:"#fff",
position:"sticky",
top:0,
zIndex:10
},

logo:{
fontFamily:"Playfair Display, serif",
fontSize:"22px",
color:"#4f46e5"
},

navLinks:{
display:"flex",
gap:"25px",
alignItems:"center"
},

loginBtn:{
padding:"8px 20px",
background:"#4f46e5",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer"
},

hero:{
padding:"clamp(100px,12vw,140px) 20px",
textAlign:"center",
background:"linear-gradient(135deg,#4f46e5,#7c3aed)",
color:"white"
},

title:{
fontFamily:"Playfair Display, serif",
fontSize:"clamp(44px,6vw,70px)",
fontWeight:"900",
marginBottom:"20px"
},

titleAccent:{
fontStyle:"italic",
color:"#c7d2fe"
},

subtitle:{
fontSize:"18px",
maxWidth:"600px",
margin:"0 auto 40px",
lineHeight:"1.7"
},

heroButtons:{
display:"flex",
justifyContent:"center",
gap:"15px",
flexWrap:"wrap"
},

primaryBtn:{
padding:"14px 30px",
border:"none",
background:"#fff",
color:"#4f46e5",
borderRadius:"10px",
fontWeight:"600",
cursor:"pointer"
},

secondaryBtn:{
padding:"14px 30px",
border:"2px solid white",
background:"transparent",
color:"white",
borderRadius:"10px",
cursor:"pointer"
},

section:{
padding:"90px 20px",
textAlign:"center"
},

sectionAlt:{
padding:"90px 20px",
background:"#eef2ff",
textAlign:"center"
},

sectionTitle:{
fontFamily:"Playfair Display, serif",
fontSize:"38px",
marginBottom:"40px"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
maxWidth:"1000px",
margin:"auto"
},

card:{
background:"white",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 10px 25px rgba(0,0,0,0.05)"
},

steps:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"20px",
maxWidth:"900px",
margin:"auto"
},

stepCard:{
background:"white",
padding:"25px",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.05)"
},

dashboard:{
background:"#111827",
color:"white",
padding:"30px",
borderRadius:"14px",
maxWidth:"420px",
width:"100%",
margin:"auto"
},

cta:{
padding:"100px 20px",
textAlign:"center",
background:"linear-gradient(135deg,#4f46e5,#7c3aed)",
color:"white"
},

ctaTitle:{
fontSize:"38px",
marginBottom:"30px"
},

footer:{
padding:"30px",
background:"#111827",
color:"white",
textAlign:"center"
},

footerLinks:{
display:"flex",
justifyContent:"center",
gap:"20px",
marginTop:"10px"
}

}

export default LandingPage