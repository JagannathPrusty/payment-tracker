import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTransactions } from "../api/transactionApi"
import TransactionList from "../components/TransactionList"

function Transactions(){

const [transactions,setTransactions] = useState([])
const navigate = useNavigate()

const loadTransactions = async () => {

try{

const res = await getTransactions()
setTransactions(res.data)

}catch(err){

if(err.response?.status === 401){
navigate("/login")
}

}

}

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
onClick={()=>navigate("/dashboard")}
style={{
marginBottom:"20px",
padding:"10px 18px",
background:"#d4af37",
border:"none",
borderRadius:"8px",
cursor:"pointer",
fontWeight:"bold"
}}
>
← Back
</button>

<h2 className="section-title">
Transaction History
</h2>

<span className="count-badge">
{transactions.length}
</span>

<TransactionList
transactions={transactions}
refresh={loadTransactions}
/>

</div>

)

}

export default Transactions