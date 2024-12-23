
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
            <li key={index}>{task.text || task}</li>
        ))}
      </ul>
      <Link to="/add-task">Add Task</Link>
    </div>
  );
};

export default Home;
