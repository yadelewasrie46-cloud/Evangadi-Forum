let express=require("express");
let app=express();
let cors=require("cors");


app.use(cors());
app.use(express.json());

let notes=[{
    id:1,note:"Amhara is one of the best people in ethiopia. They have a good history on the foundation of the modern ethiopia. They placed a great role in the ethiopian history",lead:true
}]
let nextId=2;

app.get("/notes",(req,res)=>{
    res.json(notes);
})

app.post("/notes",(req,res)=>{
    let {text}=req.body;
    let newNote={
        id:nextId++,note:text,lead:false
    }
notes.push(newNote);
})


app.listen(3030,()=>{
    console.log("I am running on the port 3030");
    
})