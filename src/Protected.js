import Header from "./Header"
import AddProducts from "./AddProducts"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"


function Protected(){
    const navigate = useNavigate()
    useEffect(()=>{
    if(!localStorage.getItem("user-info")){
        navigate("/register")
    }
    },[])

    return (
        <div>
            <AddProducts/>
        </div>
    )

}
export default Protected

