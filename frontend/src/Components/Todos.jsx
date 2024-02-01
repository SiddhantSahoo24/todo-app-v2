export function Todos({todos}){
    return  <div>
{/* 
    <div>   
    <h1>{todos[0].title}</h1>
    <h2>{todos[0].description}</h2>
    <button>{todos[0].completed == true ? "completed" : "Mark as completed"}DONE
    </button>
    </div>

    <div>   
    <h1>{todos[0].title}</h1>
    <h2>{todos[0].description}</h2>
    <button>{todos[0].completed == true ? "completed" : "Mark as completed"}DONE
    </button>
    </div> */}
    {todos.map((todo)=>{
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "completed" : "Mark as completed"}</button>


        </div>
    })}
    </div>
}