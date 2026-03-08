import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [phone, setPhone] = useState("")
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

const navigate = useNavigate()

const handleRegister = async (e) => {

e.preventDefault()

setError("")
setLoading(true)

try {

await axios.post(
"http://localhost:5000/api/auth/register",
{
name,
email,
password,
phone
}
)

alert("User registered successfully")

navigate("/login")

} catch (err) {

setError(
err.response?.data?.message || "Registration failed"
)

}

setLoading(false)

}

return (

<div className="login-container">

<form onSubmit={handleRegister}>

<h2>Register</h2>

{error && (
<p style={{color:"#ff6b6b", marginBottom:"10px"}}>
{error}
</p>
)}

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

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

<input
type="tel"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
required
/>

<button type="submit" disabled={loading}>
{loading ? "Registering..." : "Register"}
</button>

<p>
Already have an account? <a href="/login">Login</a>
</p>

</form>

</div>

)

}

export default Register