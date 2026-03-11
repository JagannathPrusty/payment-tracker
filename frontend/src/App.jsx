// import { BrowserRouter,Routes,Route } from "react-router-dom"

// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Register from "./pages/Register"

// function App(){

// const token = localStorage.getItem("token")

// return(

// <BrowserRouter>

// <Routes>

// <Route path="/" element={token ? <Home/> : <Login/>}/>

// <Route path="/login" element={<Login/>}/>

// <Route path="/register" element={<Register/>}/>

// </Routes>

// </BrowserRouter>

// )

// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Hero from "./pages/Hero"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AddTransaction from "./pages/AddTransaction"
import Transactions from "./pages/Transactions"



function App(){

const token = localStorage.getItem("token")

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Hero/>} />

<Route path="/login" element={token ? <Home/> : <Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/dashboard" element={token ? <Home/> : <Login/>} />

<Route path="/add-transaction" element={<AddTransaction/>}/>
<Route path="/transactions" element={<Transactions/>}/>


</Routes>

</BrowserRouter>

)

}

export default App