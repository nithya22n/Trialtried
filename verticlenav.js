import Image1 from "../src/images/videoimg.svg";
import Image2 from "../src/images/homeoutline.svg";
import Image3 from "../src/images/helpoutline.svg";
import Image4 from "../src/images/movielist.svg";
import Image5 from "../src/images/call.svg";
import { Link } from "react-router-dom";

const VerticleNav = () => {
  return (
    <div className="verticle">
      <div className="list">
        <ul>
          <li>
          <Link to="/">
              <img src={Image1} alt="" style={{ width: "50px" }} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={Image1} alt="" style={{ width: "50px" }} />
            </Link>
            <p>movies Center</p>
          </li>
          <li>
            <Link to="/prophome1" className="home">
              <img src={Image2} alt="" style={{ width: "25px" }} />home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="doubt">
              <img src={Image5} alt="" style={{ width: "25px" }} />
              contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="about">
              <img src={Image3} alt="" style={{ width: "25px" }} />
              about
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="movielist">
              <img src={Image4} alt="" style={{ width: "25px" }} />
              favorites
            </Link>
          </li>
          <li>
            <Link to="/addmovies" className="movielist">
              <img src={Image4} alt="" style={{ width: "25px" }} />
              ADDMovies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerticleNav;
