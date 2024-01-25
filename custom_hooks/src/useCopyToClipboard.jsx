import { useCallback } from "react";
import { useState } from "react"

const useCopyToClipboard=(content) => {
     const [isCopied,setIsCopied]=useState(false);

     const copy=useCallback(()=>{
        navigator.clipboard
        .writeText(content)
        .then(()=>setIsCopied(true))
        .then(setTimeout(()=>setIsCopied(false),1234))
        .catch((err)=>console.log(err))
     },[content]);

     return [isCopied,copy]
}

export {useCopyToClipboard}