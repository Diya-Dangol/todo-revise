import {useState} from 'react';
import '../style.css';

function Todo() {
    const [todo, setTodo] = useState({
        item:"",
        id: new Date().getTime().toString()
    })
    const [todolist, setTodolist] = useState([]);
    const [edit, setEdit] = useState(false)

    const handleChange = (e) =>{
        const name = e.target.name;
        const value= e.target.value;
        setTodo({...todo, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTodo = {...todo}
        if(todo.item){
            setTodolist([...todolist, newTodo]);
        }
        setTodo({
            item: "",
            id: new Date().getTime().toString()
        })
    }

    const handleDelete=(id) =>{
        const newVal = todolist.filter((val)=> val.id !== id)
        setTodolist(newVal);
    }

    const handleEdit=(id, item) =>{
        setTodo({
            item:item,
            id: id
        })
        setEdit(true)
    }

    const updateValue =(e) =>{
        e.preventDefault();
        const newValue = todolist.map((item) => {
            if(item.id === todo.id){
                return todo;
            }
            return item;
        })
        setTodolist(newValue)
        setTodo({
            item: "",
            id: new Date().getTime().toString()
        })
        setEdit(false);
    }

    const taskLists = todolist.map((val) =>{
        const {id, item} = val
        return(
            <div className="todoList" key={id}>
                <h3>{item}</h3>
                <button onClick={() => handleEdit(id, item)}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        )
    })
    
    return (
        <div className="todo">
            <h2>TODO</h2>
            <div className= 'tasks'>
                <form>
                    <input type="text" id="item" name="item" value={todo.item} onChange={handleChange} />
                    {edit ? <button onClick={updateValue}>Edit Todo</button> : <button onClick={handleSubmit}>ADD Todo</button> }
                </form>
                {todolist.length > 0 ? taskLists : <p>Write Your First task</p>}
                {/* {todolist !== null ? taskLists : <p>Write Your First task</p>} */}
            </div>
        </div>
    )
}

export default Todo