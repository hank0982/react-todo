import { useState } from "react"
import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'
function TodoList() {

  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addNewTodoItem() {
    if (inputValue) {
      const newTodoItem = {
        id: uuidv4(),
        name: inputValue,
      }
      setTodoItems([...todoItems, newTodoItem]);
    }
  }

  function handleRemove(id) {
    setTodoItems([...todoItems].filter(function(x) { return x.id !== id }));
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="todo-list">
        <input value={inputValue} onInput={handleInput} placeholder="Add new todo item"/>
        <button onClick={addNewTodoItem}>ADD</button>
        <div className="todo-items">
          {todoItems.map(item => (
            <TodoItem
              key={item.id}
              name={item.name}
              handleRemove={handleRemove}
              id={item.id}></TodoItem>
          ))}
        </div>
      </div>
    </>
  )
}

export default TodoList;