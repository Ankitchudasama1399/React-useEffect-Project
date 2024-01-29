import { useEffect, useState } from "react";
import "./App.css";
import { PostItem } from "./components/PostItem";


function App() {
const [data, setData] = useState([]);
const [loding, setLoding] = useState(true);
const [page, setPage] = useState(1);


 useEffect(()=>{
fetchData();


 },[page]);
 
 async function fetchData() {

  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
    let data1 = await res.json();
     setData(data1);
     setLoding(false);
  } catch (error) {
   console.log(error); 
  }
 }

  return (

    <>
    <p className="logo">🖇 UseEffect Hooks</p>
    {loding ? (
      <p className="lodingp">⚙ Data is Loading... plaease wait</p>
    ) : (
      <div>
        <PostItem data={data} />
           <div style={{display: "flex", justifyContent: "space-around"}}>
              <button onClick={() => {
                if(page > 1){
                  setPage(page - 1);
                }
              }}>Prev</button>
              <p>{page}</p>
              <button onClick={() => {
                if(page < 20){
                  setPage(page + 1)
                }
              }}>Next</button>
           </div>
      </div>
    )}
    
    </>
 );
}

export default App;