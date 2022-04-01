const Movies_list = (props) => {
  let movies = props.items;
  let title = props.title;
  let handleDelete = props.func;
  let info = props.appData;


  return (
    <div className="movies_list">
    
    <div className="info1">
    {info.map((value)=>{
        return (
          <div className="title1">
            <h2>{value.title}</h2>
            <p>{value.desc}</p>
          </div>
        )
      })
      };      
    </div>
   
      <h1>{title}</h1>
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
};
export default Movies_list;
