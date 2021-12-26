import "./App.css";
import React, { useState } from "react";
let globalId = 0;
function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const createTask = (e) => {
    e.preventDefault();
    setList((oldListData) => {
      setTask("");
      return [...oldListData, {todo : task , id : globalId++}];
    });
  };

  const deleteItem = (taskId) => {
    setList(oldListData => oldListData.filter((listItem,listItemIndex)=>{
      return listItem.id !== taskId
    }))
  };
  return (
    <div className="App">
      <h2>React Todo List</h2>
      <p>A simple todolist that can add and delete tasks.</p>
      <p>
        To create a task , you can either click on create task button or just
        press <kbd>Enter</kbd> on your keyboard
      </p>

      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Enter your task here"
          value={task}
          required
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button type="submit">Create Task</button>
      </form>

      <p>List of tasks : </p>
      <ul>
        {list.map((listItem, index) => {
          return (
            <li className="list-item" key={index}>
              {listItem.todo}
              <i
                onClick={()=>{deleteItem(listItem.id)}}
                className="fas fa-times-circle"
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
