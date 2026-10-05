import { useState,useEffect} from 'react'


function App() {
  let [notes,setNotes]=useState([]);
  let [text,setText]=useState('');
  let API="http://localhost:3030/notes";
  
let addNotes=()=>{
 fetch(API).then((res)=>res.json()).then((data)=>setNotes(data))
};

let createNotes=()=>{
  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  }).then((res)=>res.json()).then((data)=>setNotes((prev)=>[...prev,data]));
}
useEffect(()=>{
  addNotes();
  createNotes();
},[])
console.log(notes);

  return (
   <>
   <textarea name="text" value={text} id="" onChange={(e)=>{
    setText(e.target.value)
   }}></textarea>
   <button onClick={createNotes}>Add Notes</button>
   </>
  )
}

export default App
