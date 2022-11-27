import {useState} from 'react'

// const {count}={count: 0, name:"Ram"}

function Counter({value, name}) {
    const [count, setCount] = useState(value);

    return (
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={()=>setCount(count +1)}>ADD</button>
            <button type="button" onClick={()=>setCount(count -1)}>MINUS</button>
            {/* {console.log(value, name)} */}
        </div>
    )
}

export default Counter