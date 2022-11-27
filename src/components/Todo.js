import {useState} from 'react'

function Todo() {
    const [todos, setTodos] = useState({
        todo: "",
        id: new Date().getTime().toString()
    })

    const [edit, setEdit] = useState(false)

    const [todolist, setTodolist] = useState([]);

    const handleChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setTodos({...todos, [name]:value})
    }
    
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(todos)
        if(todos.todo){
            const newTodos={...todos}
            setTodolist([...todolist, newTodos])
            setTodos({
                todo: "",
                id: new Date().getTime().toString()
            })
        }
    }

    const handleEdit =(id, todo) =>{
        setTodos({
            todo: todo,
            id: id
        })
        setEdit(true)
    }

    const updateVal= (e) =>{
        e.preventDefault();
        const updatedItem = todolist.map((item) =>{
            if(item.id === todos.id){
                return todos
            }
            return item;
        })
        setTodolist(updatedItem)
        setTodos({
            todo: "",
            id: new Date().getTime().toString()
        })
        setEdit(false)
    }

    const handleDelete=(id)=>{
        const newTodos= todolist.filter((item) => item.id !== id);
        setTodolist(newTodos);
    }
    
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    id="todo"
                    name="todo"
                    value={todos.todo}
                    onChange={handleChange}
                />
                {/* <button onClick={handleSubmit}>Add Todo</button> */}
                {edit ? <button onClick={updateVal}>Edit Todo</button> : <button onClick={handleSubmit} >Add Todo</button> }
            </form>
            {todolist.map(({id, todo}) =>{
                // const {id, todo} =item;
                return (
                    <div key={id}>
                        <h4>{todo}</h4>
                        <button onClick ={() =>handleEdit(id, todo)}>Edit</button>
                        <button type="button" onClick={()=> handleDelete(id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo