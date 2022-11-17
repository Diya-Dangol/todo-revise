import React, {useEffect, useState} from 'react'

function Todo() {
    const [todo, setTodo] = useState({
        name:"",
        key: Date.now()
    })
    const [todolist, setTodolist] =useState([]);

    // const handleSubmit =(e) =>{
    //     e.preventDefault();
    // }

    const handleInput=(e) => {
        const [name, value]=e.target;
        // if(name){
            setTodo({name : value});
            setTodolist({[...todolist], todo})
        // }
    }

    useEffect((e)=>{
        // e.preventDefault();
        console.log({todo});
    })
    
    return (
        <div>
            <form>
                <label>
                    <input type="text" value={handleInput()} name="name" />
                 </label>
                 <input type="submit" value="Submit" />
            </form>
            <p>{[todo.name]}</p>
        </div>
    )
}

export default Todo