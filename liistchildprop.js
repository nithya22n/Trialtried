const Childprops = (props) => {
    let movie = props.item;

    return (
        <div className="movies">
            <div className="movielist">
                {movie.map((data)=>{
                    return(
                        <div className="moviedetails">
                            <h1>{data.title}</h1>
                            <h2>{data.actor}</h2>
                            <button>delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
      );
}
 
export default Childprops;