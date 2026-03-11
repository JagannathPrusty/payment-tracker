// import { Doughnut } from "react-chartjs-2"
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// ChartJS.register(ArcElement, Tooltip, Legend)

// function Dashboard({ transactions }) {

// let lent = 0
// let borrowed = 0

// transactions.forEach(t=>{
// if(t.type === "lent") lent += Number(t.amount)
// else borrowed += Number(t.amount)
// })

// const balance = lent - borrowed

// const data = {
// labels:["Money Given","Money Borrowed"],
// datasets:[
// {
// data:[lent,borrowed],
// backgroundColor:[
// "#22c55e",
// "#ef4444"
// ],
// borderWidth:2,
// hoverOffset:20
// }
// ]
// }

// const options = {
// responsive:true,
// maintainAspectRatio:false,
// plugins:{
// legend:{
// position:"bottom"
// }
// },
// animation:{
// animateRotate:true,
// animateScale:true,
// duration:1200
// },
// cutout:"65%"
// }

// return(

// <div>

// <div className="dashboard">

// <div className="card">
// <h3>Total Lent</h3>
// <p>₹{lent}</p>
// </div>

// <div className="card">
// <h3>Total Borrowed</h3>
// <p>₹{borrowed}</p>
// </div>

// <div className="card">
// <h3>Balance</h3>
// <p>₹{balance}</p>
// </div>

// </div>

// <div className="chart-container">
// <Doughnut data={data} options={options}/>
// </div>

// </div>

// )

// }

// export default Dashboard

import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { useNavigate } from "react-router-dom"

ChartJS.register(ArcElement, Tooltip, Legend)

function Dashboard({ transactions }) {

const navigate = useNavigate()

let lent = 0
let borrowed = 0

transactions.forEach(t => {
if (t.type === "lent") {
lent += Number(t.amount)
} else {
borrowed += Number(t.amount)
}
})

const balance = lent - borrowed

const data = {
labels: ["Money Given", "Money Borrowed"],
datasets: [
{
data: [lent, borrowed],
backgroundColor: [
"#22c55e",
"#ef4444"
],
borderWidth: 2,
hoverOffset: 20
}
]
}

const options = {
responsive: true,
maintainAspectRatio: false,
plugins: {
legend: {
position: "bottom"
}
},
animation: {
animateRotate: true,
animateScale: true,
duration: 1200
},
cutout: "65%"
}

return (

<div>

{/* Summary Cards */}

<div className="dashboard">

<div className="card">
<h3>Total Lent</h3>
<p>₹{lent}</p>
</div>

<div className="card">
<h3>Total Borrowed</h3>
<p>₹{borrowed}</p>
</div>

<div className="card">
<h3>Balance</h3>
<p>₹{balance}</p>
</div>

</div>


{/* Chart */}

<div className="chart-container">
<Doughnut data={data} options={options}/>
</div>


{/* Buttons under graph */}

<div style={{
display: "flex",
justifyContent: "center",
gap: "20px",
marginTop: "25px"
}}>

<button
onClick={() => navigate("/add-transaction")}
style={{
padding: "12px 25px",
background: "#d4af37",
border: "none",
borderRadius: "8px",
fontWeight: "bold",
cursor: "pointer"
}}
>
Add Transaction
</button>

<button
onClick={() => navigate("/transactions")}
style={{
padding: "12px 25px",
background: "#d4af37",
border: "none",
borderRadius: "8px",
fontWeight: "bold",
cursor: "pointer"
}}
>
View Transactions
</button>

</div>

</div>

)

}

export default Dashboard