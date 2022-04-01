import { useState, useEffect } from "react";
import Movies_list from "../movieprop";
import Home1 from "../prophome1";

const Useeffect = () => {
  let [movies, setMovies] = useState([{title:"movies"}]);
  let [name, setName] = useState("ross");

//   let handleDelete = (id) => {};
  let change = () => {
    setName("chandler");
  };

  useEffect(() => {
    console.log("use effect executed");
  }, [movies]);

  return (
    <div className="home">
        {/* <h1>{movies[0].title}</h1> */}
      {/* <h1>{name}</h1>
      <button onClick={change}>change</button> */}
      {/* <movielist items={movies} title={"all movies"} func={handleDelete}/>
        <movielist items={movies.filter((data)=>(data.languages==="kannada"))}/> */}
    </div>
  );
};

export default Useeffect;
