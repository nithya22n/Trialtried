import { useState,useEffect } from "react";

const About = () => {
    let[images,setImages]=useState([])
    useEffect(()=>{
        
         fetch("http://localhost:4000/images")
         .then( res =>{
        return res.json();
      })
      .then(data=>{
        setImages(data);
      })
    },[]);
    
  return (
    <div className="about">
      <h1>Welcome to about page</h1>
      {images.map((items)=>{
        //   const{image}=items; when mapping doesnt work
          return (
<div className="images">
        <img src={items.image} alt="" />
        </div>
          )
      })}
  
    </div>
  );
};

export default About;
