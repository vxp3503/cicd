import axios from "axios"
import { useEffect, useState } from "react"
import Properties from "../Properties/properties";
function Hello(){

    const [resdata , setResdata]= useState("");
    const [status, setStatus]=useState("")

    useEffect(()=>{
        // const call = async ()=>{
        //     const response=await axios.get(Properties.url) 
        //     console.log(JSON.stringify(response.data))
        //     setResdata(response.data)
        //     setStatus(response.status)
        //     console.log(response)
        //  }
        //  call()
         fetch(Properties.url)
         .then((response)=>{
            setStatus(response.status)
             return response.json()})
         .then((data,status)=>{
             console.log(data.greetingResponse)
             setResdata(JSON.stringify(data.greetingResponse))
            })
    },[])
    return (
        <>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <div style={{width:"100%"}}>Welcome</div>
        {/* <div style={{width:"100%"}}>{resdata}</div> */}
        {status=='200'?
        <li>{resdata}</li>:""}
        {/* <div style={{ marginTop:"50px"}}>{status}</div> */}
        </div>
        </>
    )
}
export default Hello