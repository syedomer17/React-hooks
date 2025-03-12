import React, { useEffect, useState } from "react";
import axios from "axios";

/*
In React, useEffect is a hook that allows you to perform side effects in function components. Side effects include things like:

Fetching data from an API
Subscribing to or cleaning up subscriptions (e.g., WebSocket, Event Listeners)
Manipulating the DOM
Updating the document title
*/

const UseEffect = () => {
  // when ever the user click on the button when the count gets incremented then the alert will be appring
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    alert("The count is Incremented");
  }, [count]);

  async function fetchTodo() {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodo(response.data); // API returns an object, so set it directly
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {todo ? (
        <table border={1}>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Completed" : "Pending"}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UseEffect;
