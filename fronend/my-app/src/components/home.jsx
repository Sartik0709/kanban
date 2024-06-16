import axios from "axios";
import { useState } from "react";


const Home = () => {
    const [task , setTask] = useState([])
    const token = JSON.parse(localStorage.getItem('token'));
    const userId = JSON.parse(localStorage.getItem('userId')) || null;
    const roles = JSON.parse(localStorage.getItem('roles'));
    let url = `https://kanban-board-ycjv.onrender.com/task/${userId}`;
  if (roles === 'admin') {
    url = `https://kanban-board-ycjv.onrender.com/task/`;
  }

    console.log("home jsx :, ", userId);
const handleTaskRefresh = async()=>{
       try {                            
        const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log(response.data.tasks);
          setTask(response.data.tasks);
       } catch (error) {
        console.log(error.message);
       }
}

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleTaskRefresh}>Refresh Task</button>

      <ul>
        {task.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
