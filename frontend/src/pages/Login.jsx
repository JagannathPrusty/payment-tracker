import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")
const [loading,setLoading] = useState(false)

const navigate = useNavigate()


/* ===============================
   LOGIN FUNCTION
================================ */

const handleLogin = async(e)=>{

e.preventDefault()

setError("")
setLoading(true)

try{

const res = await axios.post(
"http://payment-tracker-backend-ns4x.onrender.com/api/auth/login",
{email,password}
)

localStorage.setItem("token",res.data.token)
localStorage.setItem("user",JSON.stringify(res.data.user))

navigate("/")

}catch(err){

setError(
err.response?.data?.message || "Login failed"
)

}

setLoading(false)

}


return(

<div className="login-container">

<form onSubmit={handleLogin}>

<h2>Login</h2>

{error && (
<p style={{color:"#ff6b6b",marginBottom:"10px"}}>
{error}
</p>
)}

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit" disabled={loading}>

{loading ? "Logging in..." : "Login"}

</button>

<p>
Don't have an account?{" "}
<a href="/register">Register</a>
</p>

</form>

</div>

)

}

export default Login