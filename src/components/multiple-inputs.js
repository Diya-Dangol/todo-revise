import React, {useState} from 'react'

function Todo() {
    const [todoitem, setTodoitem]=useState({
        todo: "",
        id:new Date().getTime().toString()
    });
    const [todolist, setTodolist] = useState([]);

    const handleSubmit=(e) =>{
        e.preventDefault();
       if(todoitem.todo){
        const newTodos = {...todoitem}
        setTodolist(...todolist, newTodos)
        setTodoitem({
            todo: "",
            id: ""
        })
       }
    }

    const handleChange=(e) =>{
        const name=e.target.name;
        const value= e.target.value;
        setTodoitem({...todoitem, [name]: value})
    }

    // const handleRemove= (id)=>{
    //     const newTodos =[...todolist];
    //     newTodos.splice(id, 1);
    //     setTodolist((todolist) =>{
    //         return [...todolist, newTodos];
    //     })
    // }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="todo" name="todo" value={todoitem.todo} onChange={handleChange} />
                <button>Add Names</button>
            </form>
            {/* {todolist.map((todoitem)=>{
                const {id, todo} = todoitem;
                return (
                    <div key={id}>
                        <h3>{todo}</h3>
                        <button type="button">Delete</button>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Todo