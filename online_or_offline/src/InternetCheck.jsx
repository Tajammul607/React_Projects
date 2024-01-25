import { useEffect, useState } from "react";

const InternetCheck =()=>{    
    const [isOnline,setOnline]=useState(navigator.onLine)

    useEffect ( ()=>{
        function handleStatusChange(){
            setOnline(navigator.onLine)
        }

        window.addEventListener('online' ,handleStatusChange),
        window.addEventListener('offline', handleStatusChange)

        return () => {
            window.removeEventListener('online',handleStatusChange)
            window.removeEventListener('offline',handleStatusChange)
        }
    },[isOnline])
    return (
        <div className="container">
           <h3>Let check the connection </h3>
           {isOnline ?
          (
             <h3 className="online">WOW, You are Online</h3> 
          ) :
          (
           <h3 className="offline">Oops check you're connection</h3>
          )}
        </div>
    )
}

export default InternetCheck;