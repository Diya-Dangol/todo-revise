import React, {useState, useEffect} from 'react'

function Todoform() {
    const [todo, setTodo]=useState("");
    const [todolist, setTodolist] = useState([]);

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(todo){
            const todos={id: new Date().getTime().toString(), todo};
            console.log(todos);
            setTodolist((todolist) =>{
                return [...todolist, todos];
            })
            setTodo("");
        }else{
            return(
                <p>empty todo</p>
            )
            
        }
    }

    const handleChange=(e) =>{
        setTodo(e.target.value)
    }

    const handleRemove= (id)=>{
        const newTodos =[...todolist];
        newTodos.splice(id, 1);
        setTodolist((todolist) =>{
            return [...todolist, newTodos];
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="todo" name="todo" value={todo} onChange={handleChange} />
                <button>Add Names</button>
            </form>
            {todolist.map((todonames)=>{
                const {id, todo} = todonames;
                return (
                    <div key={id}>
                        <h3>{todo}</h3>
                        <button type="button" onClick={handleRemove(id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todoform