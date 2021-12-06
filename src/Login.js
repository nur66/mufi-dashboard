import Header from "./Header"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/update")
        }
    },[])

    async function loginButton(){
        console.warn(email, password);
        let item = {email, password}
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(item),
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }

    return(
        <div>
            <Header />
            <h1>Halaman Login</h1>
            <br/>
            <div className="col-sm-6 offset-sm-3">
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                    className="form-control"
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                    className="form-control"
                />
                <br />
                <button onClick={loginButton} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login