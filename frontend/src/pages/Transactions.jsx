// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { getTransactions } from "../api/transactionApi"
// import TransactionList from "../components/TransactionList"

// function Transactions(){

// const [transactions,setTransactions] = useState([])
// const navigate = useNavigate()

// const loadTransactions = async () => {

// try{

// const res = await getTransactions()
// setTransactions(res.data)

// }catch(err){

// if(err.response?.status === 401){
// navigate("/login")
// }

// }

// }

// useEffect(()=>{

// const token = localStorage.getItem("token")

// if(!token){
// navigate("/login")
// return
// }

// loadTransactions()

// },[])

// return(

// <div className="container">

// <button
// onClick={()=>navigate("/dashboard")}
// style={{
// marginBottom:"20px",
// padding:"10px 18px",
// background:"#d4af37",
// border:"none",
// borderRadius:"8px",
// cursor:"pointer",
// fontWeight:"bold"
// }}
// >
// ← Back
// </button>

// <h2 className="section-title">
// Transaction History
// </h2>

// <span className="count-badge">
// {transactions.length}
// </span>

// <TransactionList
// transactions={transactions}
// refresh={loadTransactions}
// />

// </div>

// )

// }

// export default Transactions

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTransactions } from "../api/transactionApi"
import TransactionList from "../components/TransactionList"

function Transactions(){

const [transactions,setTransactions] = useState([])
const [filtered,setFiltered] = useState([])

const [searchDate,setSearchDate] = useState("")
const [searchType,setSearchType] = useState("")

const navigate = useNavigate()


/* LOAD TRANSACTIONS */

const loadTransactions = async () => {

try{

const res = await getTransactions()
setTransactions(res.data)
setFiltered(res.data)

}catch(err){

if(err.response?.status === 401){
navigate("/login")
}

}

}


/* FILTER SEARCH */

useEffect(()=>{

let data = [...transactions]

if(searchDate){
data = data.filter(t =>
t.date?.slice(0,10) === searchDate
)
}

if(searchType){
data = data.filter(t =>
t.type === searchType
)
}

setFiltered(data)

},[searchDate,searchType,transactions])


useEffect(()=>{

const token = localStorage.getItem("token")

if(!token){
navigate("/login")
return
}

loadTransactions()

},[])


return(

<div className="container">

<button
className="back-btn"
onClick={()=>navigate("/dashboard")}
>
← Back
</button>

<h2 className="page-title">Transaction History</h2>


{/* SEARCH SECTION */}

<div className="search-box">

<input
type="date"
value={searchDate}
onChange={(e)=>setSearchDate(e.target.value)}
/>

<select
value={searchType}
onChange={(e)=>setSearchType(e.target.value)}
>

<option value="">All Types</option>
<option value="lent">Money Given</option>
<option value="borrowed">Money Borrowed</option>

</select>

</div>


<span className="count-badge">
{filtered.length}
</span>


<TransactionList
transactions={filtered}
refresh={loadTransactions}
/>

</div>

)

}

export default Transactions