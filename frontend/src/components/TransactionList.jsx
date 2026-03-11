// import { deleteTransaction } from "../api/transactionApi"
// import { useState } from "react"

// function TransactionList({ transactions, refresh, setEditData }) {

// const [search,setSearch] = useState("")

// const remove = async (id)=>{
// await deleteTransaction(id)
// refresh()
// }

// const filtered = transactions.filter(t =>
// t.person.toLowerCase().includes(search.toLowerCase())
// )

// return(

// <div>

// <h2>Transactions</h2>

// <input
// placeholder="Search person..."
// value={search}
// onChange={(e)=>setSearch(e.target.value)}
// />

// {filtered.map((t)=>(

// <div key={t.id} className="transaction">

// <div>
// <strong>{t.person}</strong>
// <p>₹{t.amount}</p>
// <p>{t.type}</p>
// <p>{new Date(t.date).toLocaleDateString()}</p>
// <p>{t.note}</p>
// </div>

// <div>

// <button onClick={()=>setEditData(t)}>
// Edit
// </button>

// <button onClick={()=>remove(t.id)}>
// Delete
// </button>

// </div>

// </div>

// ))}

// </div>

// )

// }

// export default TransactionList

import { deleteTransaction } from "../api/transactionApi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function TransactionList({ transactions, refresh }) {

const [search,setSearch] = useState("")
const navigate = useNavigate()


/* DELETE TRANSACTION */

const remove = async (id)=>{

const confirmDelete = window.confirm("Delete this transaction?")

if(!confirmDelete) return

try{

await deleteTransaction(id)
refresh()

}catch(err){

console.log(err)

}

}


/* SEARCH FILTER */

const filtered = transactions.filter(t =>
t.person.toLowerCase().includes(search.toLowerCase())
)


return(

<div>

<h2>Transactions</h2>

<input
placeholder="Search person..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>


{filtered.map((t)=>(

<div key={t.id} className="transaction">

<div>

<strong>{t.person}</strong>

<p>₹{t.amount}</p>

<p>{t.type}</p>

<p>{new Date(t.date).toLocaleDateString()}</p>

{t.note && <p>{t.note}</p>}

</div>


<div>

{/* EDIT BUTTON */}

<button
onClick={()=>navigate("/add-transaction", { state: t })}
>
Edit
</button>


{/* DELETE BUTTON */}

<button onClick={()=>remove(t.id)}>
Delete
</button>

</div>

</div>

))}

</div>

)

}

export default TransactionList