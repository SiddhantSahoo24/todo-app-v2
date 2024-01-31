const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', async (req, res) => {
    const todos = await todo.find({

    })
    res.json({todos});
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