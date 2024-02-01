const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const cors = require('cors');

const port = 3001;

app.use(express.json())
app.use(cors());

app.get('/',  (req, res) => {
    const todos=[{
    "_id":"zjczjc",
    "title":"zczc",
    "description":"cxx",
    "completed":true
   },{
    "_id":"gfdghdh",
    "title":"hdfhdf",   
    "description":"hdfhdfhad",
    "completed":false
   },{
    "_id":"gfdgdfgdfg",
    "title":"dfsgfsdgsfd",
    "description":"",
    "completed":false
   }];

    // })
   res.json({
    todos});
    //res.send("haan bhoko");
});

app.post('/todo-post',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.statusCode(411).JSON({msg:"Wrong inputs"})
        
        return;
    }
    await todo.create({
        title:createdPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"todo is created"
    })
});





app.put('/todo-put',async (req,res)=>{
    const payLoad2 = req.body;
    const parsedpayLoad2 = updateTodo.safeParse(payLoad2)
    if(!parsedpayLoad2.success){
        res.statusCode(411).JSON({message:"Wrong inputs"})
        return;
    }

    const ttodos = await todo.update({
        _id: payLoad2.id
    },{
        completed:true
    })

    res.json({  
        msg:"Todos updates karo"
    })



});

app.listen(port,()=>{
    console.log(`app is listening  at ${port}`);

   })