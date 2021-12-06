import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "./Header";

// useHistory replaced useNavigate / telah berubah jadi useNavigate

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/update")
        }
    },[])

    async function signUp() {
        let item = { name, email, pass }
        console.warn(item);

        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "content-type": 'aplication/json',
                "Accept": 'aplication/json'
            }
        })
        result = await result.json();
        console.warn("result", result);

        // Masukan ke local storage agar ketika sign langsung sudah terisi
        localStorage.setItem('user-info', JSON.stringify(result))
        navigate("/add")

    }

    return (
        // karena tidak ada div maka kita kasih fragment
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Halaman Register</h1>

            {/* nama */}
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Nama" />

            {/* email */}
            <br />
            <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email" />

            {/* password */}
            <br />
            <input type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="form-control"
                placeholder="Password" />

            {/* Button */}
            <br />
            <button className="btn-primary" onClick={() => signUp()}>
                Sign-Up
            </button>
        </div>
        </>
    )
}
export default Register