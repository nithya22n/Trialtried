import { useState } from "react";
import { useHistory } from "react-router-dom";
const Addmovies = () => {
  let addMovies = () => {};
  let [title, settitle] = useState(" ");
  let [director, setdirector] = useState(" ");
  let [language, setlanguage] = useState(" ");
  let [actor, setactor] = useState(" ");
  let history = useHistory();

  let handlesubmit = (e) => {
    e.preventDefault();
    let data = { title, director };
    fetch("http://localhost:4000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      alert("movie added successfully");
      history.push("/prophome1");
    });
  };
  return (
    <div className="addmovies">
      <div className="add">
        <form onSubmit={handlesubmit}>
          <h1>Add movies here</h1>
          <label htmlFor="">Moviename</label>
          <input
            type="text"
            required
            placeholder="enter MovieName"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <p>{title}</p>
          <br />
          <br />
          <label htmlFor="">Director</label>
          <input
            type="text"
            required
            placeholder="enter director name"
            value={director}
            onChange={(e) => setdirector(e.target.value)}
          />
          <p>{director}</p>
          <br />
          <br />
          <label htmlFor="">Language</label>
          <input
            type="text"
            required
            placeholder="enter language name"
            value={language}
            onChange={(e) => setlanguage(e.target.value)}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Actor</label>
          <input
            type="text"
            placeholder="enter actor name"
            value={actor}
            onChange={(e) => setactor(e.target.value)}
          />
          <button>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Addmovies;
