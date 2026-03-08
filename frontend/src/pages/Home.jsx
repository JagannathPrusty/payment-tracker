import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getTransactions, getNotifications } from "../api/transactionApi"

import Dashboard from "../components/Dashboard"
import TransactionForm from "../components/TransactionForm"
import TransactionList from "../components/TransactionList"

function Home() {

const [transactions, setTransactions] = useState([])
const [notifications, setNotifications] = useState([])
const [editData, setEditData] = useState(null)
const [loaded, setLoaded] = useState(false)

const navigate = useNavigate()


/* ===============================
   LOAD TRANSACTIONS + NOTIFICATIONS
================================ */

const loadData = async () => {

try{

const res = await getTransactions()
setTransactions(res.data)

const notify = await getNotifications()
setNotifications(notify.data)

}catch(err){

console.log(err)

if(err.response?.status === 401){
navigate("/login")
}

}

}


/* ===============================
   CHECK LOGIN + PAGE LOAD
================================ */

useEffect(()=>{

const token = localStorage.getItem("token")

if(!token){
navigate("/login")
return
}

loadData().then(()=>{

setTimeout(()=>{
setLoaded(true)
},80)

})

},[])


/* ===============================
   LOGOUT
================================ */

const handleLogout = ()=>{

localStorage.removeItem("token")
localStorage.removeItem("user")

navigate("/login")

}


return(

<div className={`page-wrapper ${loaded ? "page-loaded" : ""}`}>

{/* Background effects */}

<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="orb orb-3"></div>
<div className="noise-overlay"></div>


<div className="container">


{/* HEADER */}

<header className="site-header">

<div className="header-top">

<div className="header-pill">
<span className="pill-dot"></span>
Personal Finance Dashboard
</div>

<button className="logout-btn" onClick={handleLogout}>
Logout
</button>

</div>

<h1 className="title">
Budget<span className="title-accent"> Tracker</span>
</h1>

<p className="title-sub">
Your money, beautifully visualised
</p>

<div className="header-divider">
<span></span>
<span className="divider-diamond">◆</span>
<span></span>
</div>

</header>


{/* ===============================
   NOTIFICATION DASHBOARD
================================ */}

{notifications.length > 0 && (

<div className="notification-box">

<h3>⚠ Payment Reminders</h3>

{notifications.map((n,i)=>(

<div key={i} className="notification-item">

{n.person} should return <b>₹{n.amount}</b>  
(Due: {new Date(n.due_date).toLocaleDateString()})

</div>

))}

</div>

)}


{/* ===============================
   DASHBOARD
================================ */}

<section className="anim-block" style={{animationDelay:"0.1s"}}>

<Dashboard transactions={transactions}/>

</section>


{/* ===============================
   FORM
================================ */}

<section className="middle-section anim-block" style={{animationDelay:"0.2s"}}>

<TransactionForm
refresh={loadData}
editData={editData}
setEditData={setEditData}
/>

</section>


{/* ===============================
   TRANSACTION LIST
================================ */}

<section className="anim-block" style={{animationDelay:"0.3s"}}>

<div className="list-header">

<h2 className="section-title">
Transaction History
</h2>

<span className="count-badge">
{transactions.length}
</span>

</div>

<TransactionList
transactions={transactions}
refresh={loadData}
setEditData={setEditData}
/>

</section>


</div>
</div>

)

}

export default Home