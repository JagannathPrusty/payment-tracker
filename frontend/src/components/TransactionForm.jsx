// import { useState,useEffect } from "react"
// import { addTransaction,updateTransaction } from "../api/transactionApi"

// function TransactionForm({ refresh, editData, setEditData }) {

// const [person,setPerson] = useState("")
// const [amount,setAmount] = useState("")
// const [type,setType] = useState("lent")
// const [date,setDate] = useState("")
// const [note,setNote] = useState("")

// useEffect(()=>{
// if(editData){

// setPerson(editData.person)
// setAmount(editData.amount)
// setType(editData.type)
// setDate(editData.date)
// setNote(editData.note || "")

// }
// },[editData])


// const handleSubmit = async(e)=>{

// e.preventDefault()

// const data = {person,amount,type,date,note}

// if(editData){

// await updateTransaction(editData.id,data)
// setEditData(null)

// }else{

// await addTransaction(data)

// }

// setPerson("")
// setAmount("")
// setDate("")
// setNote("")

// refresh()

// }

// return(

// <form onSubmit={handleSubmit}>

// <h2>{editData ? "Edit Transaction" : "Add Transaction"}</h2>

// <input
// placeholder="Person"
// value={person}
// onChange={(e)=>setPerson(e.target.value)}
// required
// />

// <input
// type="number"
// placeholder="Amount"
// value={amount}
// onChange={(e)=>setAmount(e.target.value)}
// required
// />

// <select value={type} onChange={(e)=>setType(e.target.value)}>
// <option value="lent">I Gave</option>
// <option value="borrowed">I Borrowed</option>
// </select>

// <input
// type="datetime-local"
// value={date}
// onChange={(e)=>setDate(e.target.value)}
// required
// />

// <input
// placeholder="Note"
// value={note}
// onChange={(e)=>setNote(e.target.value)}
// />

// <button type="submit">
// {editData ? "Update" : "Add"}
// </button>

// </form>

// )

// }

// export default TransactionForm

import { useState, useEffect } from "react"
import { addTransaction, updateTransaction } from "../api/transactionApi"

function TransactionForm({ refresh, editData, setEditData }) {

const [person,setPerson] = useState("")
const [amount,setAmount] = useState("")
const [type,setType] = useState("lent")
const [date,setDate] = useState("")
const [dueDate,setDueDate] = useState("")
const [note,setNote] = useState("")


/* ==========================
   EDIT TRANSACTION
========================== */

useEffect(()=>{

if(editData){

setPerson(editData.person)
setAmount(editData.amount)
setType(editData.type)
setDate(editData.date)
setNote(editData.note)
setDueDate(editData.due_date || "")

}

},[editData])


/* ==========================
   SUBMIT
========================== */

const handleSubmit = async(e)=>{

e.preventDefault()

const data = {
person,
type,
amount,
date,
note,
due_date: dueDate
}

try{

if(editData){

await updateTransaction(editData.id,data)
setEditData(null)

}else{

await addTransaction(data)

}

refresh()

}catch(err){

console.log(err)

}

setPerson("")
setAmount("")
setType("lent")
setDate("")
setDueDate("")
setNote("")

}


/* ==========================
   UI
========================== */

return(

<form onSubmit={handleSubmit}>

<h2>Add Transaction</h2>

<label>Person</label>
<input
type="text"
placeholder="Person"
value={person}
onChange={(e)=>setPerson(e.target.value)}
required
/>

<label>Amount</label>
<input
type="number"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
required
/>

<label>Type</label>
<select
value={type}
onChange={(e)=>setType(e.target.value)}
>
<option value="lent">I Gave</option>
<option value="borrowed">I Borrowed</option>
</select>

<label>Date</label>
<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
required
/>

{/* 🔴 DUE DATE INPUT */}

<label>Due Date</label>
<input
type="date"
value={dueDate}
onChange={(e)=>setDueDate(e.target.value)}
required
/>

<label>Note</label>
<input
type="text"
placeholder="Note"
value={note}
onChange={(e)=>setNote(e.target.value)}
/>

<button type="submit">
{editData ? "Update" : "Add"}
</button>

</form>

)

}

export default TransactionForm