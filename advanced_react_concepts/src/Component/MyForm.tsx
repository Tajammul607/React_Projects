import React, { useState } from "react";
import{ FormData} from './MyForm.types'

const MyForm: React.FC<FormData> =({title,subtitle,isSubmit})=>{

    const [mail,setMail]= useState<string>("")
    const [password,setPassword]=useState<string>("");

   function submitData(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault()
    }
    return (
        <>
        
        <h1>{title}</h1>
        <h2>{subtitle}</h2>


        <form onSubmit={submitData}>
            <input type="mail"
            value={mail}
            onChange={e=>setMail(e.target.value)}
            name="Email" 
            placeholder="Enter Mail-Id" />
            <br></br>
            <input type="password"
             value={password}
            onChange={e=> setPassword(e.target.value)}
             placeholder="Enter you're password" /><br></br>
            <input type="submit" name="" id="" />
        </form>
        <h1>{isSubmit}</h1>
        </>
    )
}

export default MyForm;