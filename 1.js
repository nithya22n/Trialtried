// // const i = 10;
// // function a()
// //  {
// //   console.log(i++);
// // }
// // a();

// // a = [1, 2, 6, 4, 9];
// // value = [];
// // //if the array length is even add middle two number if array length id odd print middle number


// //   if (a.length % 2 == 0) {
// //     num = a.length / 2;
// //     value1 = a[num - 1];
// //     value2 = a[num];
// //     value = value1 + value2;
// //   } 
// //   else {
// //     num = parseInt(a.length / 2);
// //     value = a[num];
// //   }

// // console.log(value);

// // let arr = [1, 2, 3, 4, 5, 6, 7];
// // let result = false;
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] == 7) {
// //     result = true;
// //   }
// // }
// // console.log(result);


// // let str = "ramayana"
// // let strlowercase = str.toLowerCase();
// // let letter = " ";
// // let highestCount=0;
// // for (let i = 0; i < str.length-1; i++)
// //  {
// //     let tempCount=1;
// //     for (let j = 1; j < str.length; j++) 
// //     {
// //         if(strlowercase[i]===strlowercase[j+1])
// //         {
// //             ++tempCount;
// //         }
// //         if(tempCount>highestCount)
// //         {
// //             highestCount=tempCount;
// //             letter=strlowercase[i];
// //         }            
// //     }   
// // }
// // console.log(letter);

// //Async Await and promises


// // let a=5;
// // let b=10;
// // setTimeout(() => {
// //    console.log(a+b, "timeout"); 
// // }, 3000);    // delays execution by given time

// // setInterval(() => {
// //     console.log(a+b,"interval");
// // }, 2000);  //for every 2sec block of executes repeatedly

// // let a =() => {
// //     return("one")
// // }
// // let b= ()=>{
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             resolve("two")
// //         }, 3000);
// //     })
// // }
// // let c = () =>{
// //     return("three")
// // }

// // let func = async()=>{
// //     console.log(a());
// //     console.log(await b());
// //     console.log(c());
// // }
// // func();




// a=[1,2,3,4]
// var sum=0
// for(i=0;i<a.length-1;i++){
//     sum=sum+a[i];
// }
// console.log(sum);



function findNumber(arr, k) {
    // Write your code here
    let found=false;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==k){
            found=true;
            break;
        }
    }
        if(found==true){
            console.log("yes")
        }
    else{
        console.log("No")
    }
       

}
findNumber([1,2,3],3)

// // using reject it reject a execution and next to  that following code within block
// // let a =() => {
// //     return("one")
// // }
// // let b= ()=>{
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             reject("two")
// //         }, 3000);
// //     })
// // }
// // let c = () =>{
// //     return("three")
// // }

// // let func = async()=>{
// //     console.log(a());
// //     console.log(await b());
// //     console.log(c());
// // }
// // func();

// // console.log('.............after rejection...........');

// var x = null;
// var y = x.map((value)=>{
//     value;
// })
// console.log(y);
// import { useEffect, useState } from "react";
// import Movies_list from "./movieprop";
// const Home1 = () => {
//   let [movies, setmovies] = useState([]);
//   let [info , setinfo] = useState([]);
//   let [pending,ispending]= useState("true")

//   let handleDelete = (id) => {
//     let newMovies = movies.filter((item) => item.id != id);
//     setmovies(newMovies);
//   };

//   useEffect(()=>{
//     fetch("http://localhost:4000/movies")
//        .then( res =>{
//       return res.json();
//     })
//     .then(data=>{
//       console.log(data);
//       setmovies(data);
//     })

//     fetch("http://localhost:4000/info")
//     .then( res =>{
//    return res.json();
//  })
//  .then(data=>{
//    console.log(data);
//    setinfo(data);
//  })
//   },[]);

  

//   return (
//     <div className="home">
//       <Movies_list
//         items={movies}
//         appData={info}
//         title={"All famous movies"}
//         func={handleDelete}
//       />
//       {/* <Movies_list
//         items={movies.filter((data) => data.lang == "Telugu")}
//         title={"Telugu Movies"}
//       />
//       <Movies_list
//         items={movies.filter((data) => data.lang == "kannada")}
//         title={"Kannada Movies"}
//       /> */}
//     </div>
//   );
// };
// export default Home1;
