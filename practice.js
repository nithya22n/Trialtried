import { useState } from "react";

const Practice = () => {
let[name,setname]=useState("nithya")
    const change=()=>{
        setname("changed")
    };

    return ( 
        <div className="practice">
            <h1>{name}</h1>
            <button onClick={change}>change</button>
        </div>
     );
}
 
export default Practice;