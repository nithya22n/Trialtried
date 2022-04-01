//import logo from './logo.svg';
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Home1 from "./prophome1";
import navbar from "./component/navbar";
import VerticleNav from "./verticlenav";
import Contact from "./contact";
import About from "./about";
import Favorites from "./favorite";
import Addmovies from "./addmovies";
import Login from "./login";
import PageNotFound from "./component/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./practice";

function App() {
  // let age =20;
  // let img="https://ap.starbucksglobalacademy.com/_nuxt/img/badges-cert.a0b9f5a.png"
  // let link = "https://ap.starbucksglobalacademy.com/";
  // let age1=15;
  // let increase = () =>{
  //       age++
  //       console.log(age);
  // }

  return (
    <div className="App">
      {/* <h1>react wow</h1>
      <h2>my age is {age}</h2>
      <a href={link}>starbucks</a>
      <img src={img} alt=""/>
      <p>my age was {age1} before {age}</p>
      <h5>my age is {Math.random()}</h5>
      <button onClick={increase()}>increase</button>  should not write any code here*/}

      {/* <Navbar/>
      <hr />
      <div className='flex'>
      <Home/>
      </div>
      <Component2/> */}
      {/* <Navbar/> */}
      {/* <Home/> */}

      <Router>
        <VerticleNav />

        <div className="one">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/prophome1">
              <Home1 />
            </Route>
            {/* <Route exact path="/contact /about" >
              <Useeffect />
            </Route> */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/favorite">
              <Favorites />
            </Route>
            <Route exact path="/addmovies">
              <Addmovies />
            </Route>
            <Route exact path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>

      {/* <Parentprops/> */}
      <Practice/>
    </div>
   
  );
}

export default App;

// age is number but before printing it will be converted to
/*<header className="App-header">
{<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */
