
/*function Navbar() 
{
   return(
       <div className="navbar">
           <h1>This is navbar Component</h1>
       </div>
   ) 
}

export default Navbar;*/

// instead of writing everything just use sfc-staeless functional components

import Image1 from '../images/homeoutline.svg';
import Image2 from '../images/helpoutline.svg';

const navbar = () => {

    return (
    <div className="navbar">
      <h1>The Blog Center</h1>
     
        <div className="links">
        <ul>
          <li>
            <a href="" className='details'><img src={Image1} alt=""  style={{width:"25px"}}/> </a>
          </li>
          <li>
            <a href="" className='details'><img src={Image2} alt="" style={{width:"25px"}} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
