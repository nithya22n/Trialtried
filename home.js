import { useState } from "react";
const Home = () => {
  // let count =0;
  // function increase()
  //  {
  //     count++;
  //    document.getElementById("num").textContent=count;
  //     document.getElementById("num").style.color="green";

  // }
  // let decrese=() =>{
  //     count--;
  //     document.getElementById("num").textContent=count;
  //     document.getElementById("num").style.color="blue";
  // }
  // let reset = () =>{
  //     count =0;
  //     document.getElementById("num").textContent=count;
  //     document.getElementById("num").style.color="orange";
  // }

  let [count, setcount] = useState(0);
  let increase = () => {
    setcount(++count);
  };

  let decrese = () => {
    setcount(--count);
  };

  let reset = () => {
    setcount((count = 0));
  };

  const [name,setname] = useState('not yet clicked...')
  const resets =() =>{
      setname('you clicked')
  }

  return (
    <div className="home">
      <h1>This is home component</h1>
      <h2>Counter</h2>
      <h2>{name}</h2>
      {/* <h3 id="num">0</h3> this was using Dom */}
      <h3 id="num">{count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrese}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={resets}>click here</button>
    </div>
  );
};

export default Home;





