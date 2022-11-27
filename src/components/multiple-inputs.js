import React, {useState} from 'react'

function Todo() {
    const [todoitem, setTodoitem]=useState({
        todo: "",
        id:new Date().getTime().toString()
    });
    const [todolist, setTodolist] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(todoitem);
       if(todoitem.todo){
        const newTodos = {...todoitem}
        // debugger
        setTodolist([...todolist, newTodos])
        setTodoitem({
            todo: "",
            id: new Date().getTime().toString()
        })
       }
    }

    const handleChange=(e) =>{
        const name=e.target.name;
        const value= e.target.value;
        setTodoitem({...todoitem, [name]: value})
    }

    const handleRemove= (id)=>{
        const newVal= todolist.filter(val => val.id !== id) 
        setTodolist(newVal)
    }
    const handleEdit=(id, todo) =>{
        console.log(todo);
        setTodoitem({
            todo: todo,
            id: id
        })
        setEdit(true);
        
        // setTodoitem({todo: {todo}})
        // const updateVal=setTodoitem()
    }
    const updateVal=(e)=>{
        e.preventDefault();
        console.log('hello');
        const newVal= todolist.map((item) => {
            if(item.id === todoitem.id){
                return todoitem; //new Value
            }
            return item //old value
        })
        setTodolist(newVal);
        setTodoitem({
            todo: "",
            id: new Date().getTime().toString()
        })
        setEdit(false)
        console.log(newVal);
    }
    
    return (
        <div>
            <form>
                <input type="text" id="todo" name="todo" value={todoitem.todo} onChange={handleChange} />
                {edit ? <button onClick={updateVal}>Edit Name</button> : <button onClick={handleSubmit}>Add Names</button>}
            </form>
            {todolist.map((todoitem)=>{
                const {id, todo} = todoitem;
                return (
                    <div key={id}>
                        <h3>{todo}</h3>
                        <button type="button" onClick={() => handleEdit(id, todo)}>Edit</button>
                        <button type="button" onClick={() => handleRemove(id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo