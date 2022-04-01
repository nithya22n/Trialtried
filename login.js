import Image2 from "./images/actioncut.jpg";

const Login = () => {
    return ( 
      <div className="login">
         
           <div className="log">
           <h1>Welcome back to login</h1>
          <p>Its Great to Have you back..</p>
          <p>email</p>
           <input type="email" /><br /><br />
           <p>password</p>
           <input type="password" /><br /><br />
           <div className="remember">
           <input type="checkbox" />
           <p>remember me</p>
           <a href="">forgot password?</a>
           </div>
           <button>login</button>
           <button>Create Account</button>
           </div>
           <div className="pic">
           <img src={Image2} />
           </div>
      </div>
               
        
        
     );
}
 
export default Login;