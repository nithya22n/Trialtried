import error from "../images/404error.jpg";
const PageNotFound = () => {
    return (  
        <div className="notfound">
            <h1>Sorry.. Page Not Found</h1><br /><br />
            <img src={error} alt="" style={{height:'250px' ,alignItems:'center', margin:'45px'}}/>
        </div>
    );
}
 
export default PageNotFound;