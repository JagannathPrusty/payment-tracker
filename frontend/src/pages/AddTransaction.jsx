// import { useNavigate } from "react-router-dom"
// import TransactionForm from "../components/TransactionForm"

// function AddTransaction(){

// const navigate = useNavigate()

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

// <h2>Add New Transaction</h2>

// <TransactionForm/>

// </div>

// )

// }

// export default AddTransaction

import { useNavigate } from "react-router-dom"
import TransactionForm from "../components/TransactionForm"

function AddTransaction(){

const navigate = useNavigate()

return(

<div className="container">

{/* Top Buttons */}

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

<h2>Add New Transaction</h2>

<TransactionForm/>

</div>

)

}

export default AddTransaction