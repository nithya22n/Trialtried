import {useState} from "react";
import Childprops from "./liistchildprop";

const Parentprops = () => {
    let [movie,setmovie]=useState([
        {actor:"hiccup",title:"dragon",language:"english",id:1},
        {actor:"elsa",title:"frozen",language:"english",id:2},
        {actor:"mirabe",title:"encanto",language:"english",id:3},
        {actor:"manu",title:"ewww",language:"kannada",id:4}

    ])
    return (  
        <div className="parent">
            <Childprops item={movie}/>
        </div>
    );
}
 
export default Parentprops;