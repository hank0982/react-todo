import './TodoItem.css';
function TodoItem(props) {

  function handleRemove() {
    props.handleRemove(props.id);
  }

  return (
    <div className="card">
      {props.name}
      <button onClick={handleRemove}>REMOVE</button>
    </div>
  )
}

export default TodoItem;