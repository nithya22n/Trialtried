import { useState , useEffect } from "react";

const Favorites = () => {
  let [movies, setmovies] = useState([]);

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
  })
 },[]);
      
    }, 3000);
  return ( 
        
    <div className="favorites">
      <h1>Fovorite Movies</h1>
      
          {movies.map((data) => {
        return (
          <div className="Details">
            <h2>{data.title}</h2>
            <p>written and directed by{data.director}</p>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
          </div>
        );
      })};
        
    </div>
   );
}
 
export default Favorites;