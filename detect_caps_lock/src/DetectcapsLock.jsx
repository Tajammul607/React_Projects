import { useEffect, useState } from "react"

const DetectcapsLock =()=>{
    const [capsMode,setCapsMode]=useState(false);
    function handleCapsLock(event){
        if(event.getModifierState('CapsLock')){
            setCapsMode(true)
        }else{
            setCapsMode(false)
        }
    }

    return(
        <>
        <h3> detect wether the CapsLock is on/off</h3>

        <input 
        onKeyUp={handleCapsLock} 
        type="text"
        placeholder="Enter some text"
        className="input"/>
        


        {
            capsMode &&
            (
                <p className='caps-lock-warning'>Warning : Caps Lock is ON....</p>
            )
        }
        </>
    )
}

export default DetectcapsLock;