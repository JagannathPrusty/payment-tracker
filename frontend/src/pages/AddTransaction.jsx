import { useNavigate, useLocation } from "react-router-dom"
import TransactionForm from "../components/TransactionForm"

function AddTransaction(){

const navigate = useNavigate()
const location = useLocation()

const editData = location.state || null

return(

<div className="container">

<div style={{
display:"flex",
justifyContent:"space-between",
marginBottom:"20px"
}}>

<button
onClick={()=>navigate("/dashboard")}
style={{
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

<button
onClick={()=>navigate("/transactions")}
style={{
padding:"10px 18px",
background:"#d4af37",
border:"none",
borderRadius:"8px",
cursor:"pointer",
fontWeight:"bold",
color:"#fff"
}}
>
View Transactions
</button>

</div>

<h2>
{editData ? "Edit Transaction" : "Add New Transaction"}
</h2>

<TransactionForm editData={editData}/>

</div>

)

}

export default AddTransaction