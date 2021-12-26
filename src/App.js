import "./App.css";
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const createTask = (e) => {
    e.preventDefault();
    setList((oldListData) => {
      setTask("");
      return [...oldListData, task];
    });
  };

  const deleteItem = (index) => {
    setList(list.filter((listItem,listItemIndex)=>{
      return listItemIndex !== index
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
              {listItem}
              <i
                onClick={()=>{deleteItem(index)}}
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
