import { useEffect, useState } from "react";
import Movies_list from "./movieprop";
import Image3 from "../src/images/videoimg.svg"
const Home1 = () => {
  let [movies, setmovies] = useState([]);
  let [info , setinfo] = useState([]);
  let [pending,ispending]= useState('true')

  let handleDelete = (id) => {
    let newMovies = movies.filter((item) => item.id != id);
    setmovies(newMovies);
   
  };

  useEffect(()=>{
   setTimeout(() => {
    fetch("http://localhost:4000/movies")
    .then( res =>{
   return res.json();
 })
 .then(data=>{
   console.log(data);
   setmovies(data);
   ispending(false)
 })

 fetch("http://localhost:4000/info")
 .then( res =>{
return res.json();
})
.then(data=>{
console.log(data);
setinfo(data);
ispending(false)
})
},[]);
     
   }, 3000);

  

  return (
    <div className="home">
      {pending && <img src={Image3} alt="" style={{width:"100px"}} />}
      <Movies_list
        items={movies}
        appData={info}
        title={"All famous movies"}
        func={handleDelete}
      />
      {/* <Movies_list
        items={movies.filter((data) => data.lang == "Telugu")}
        title={"Telugu Movies"}
      />
      <Movies_list
        items={movies.filter((data) => data.lang == "kannada")}
        title={"Kannada Movies"}
      /> */}
    </div>
  );
};
export default Home1;
