import './style.css';
// import Todo from './components/Todo';
// import Counter from './counter';
import Todos from './todo/todo';
// import Todoform from "./components/form";
// import Multipleinput from "./components/multiple-inputs";

function App() {
  return (
    <div className="bg">
      {/* <Todoform /> */}
      {/* <Todo /> */}
      {/* <Multipleinput /> */}
      {/* <Counter value={5} name={"Ram"}/> */}
      <Todos />
    </div>
  );
}

export default App;
