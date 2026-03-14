

import { deleteTransaction } from "../api/transactionApi"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function TransactionList({ transactions, refresh }) {

const navigate = useNavigate()

const [search,setSearch] = useState("")
const [filterType,setFilterType] = useState("name")
const [showMenu,setShowMenu] = useState(false)
const [selectedType,setSelectedType] = useState("")


/* DELETE */

const remove = async(id)=>{
await deleteTransaction(id)
refresh()
}


/* FILTER LOGIC */

const filtered = transactions.filter(t => {

if(filterType === "name"){
return t.person.toLowerCase().includes(search.toLowerCase())
}

if(filterType === "date"){
return t.date.includes(search)
}

if(filterType === "type"){
return selectedType === "" || t.type === selectedType
}

return true

})


return(

<div>

 <br />


{/* FILTER BOX */}

<div className="filter-box">

{/* INPUT */}

{filterType === "date" ? (

<input
type="date"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

) : filterType === "type" ? (

<select
value={selectedType}
onChange={(e)=>setSelectedType(e.target.value)}
>
<option value="">All Types</option>
<option value="lent">Money Given</option>
<option value="borrowed">Money Borrowed</option>
</select>

) : (

<input
placeholder="Search person..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

)}

{/* FILTER ICON */}

<div className="filter-icon" onClick={()=>setShowMenu(!showMenu)}>
⏬
</div>


{/* FILTER MENU */}

{showMenu && (

<div className="filter-menu">

<p onClick={()=>{setFilterType("name");setShowMenu(false)}}>Filter by Name</p>

<p onClick={()=>{setFilterType("date");setShowMenu(false)}}>Filter by Date</p>

<p onClick={()=>{setFilterType("type");setShowMenu(false)}}>Filter by Type</p>

</div>

)}

</div>


{/* TRANSACTIONS */}

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

<button
onClick={()=>navigate("/add",{state:t})}
>
Edit
</button>

<button
onClick={()=>remove(t.id)}
>
Delete
</button>

</div>

</div>

))}

</div>

)

}

export default TransactionList