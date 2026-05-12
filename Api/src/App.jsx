import React, { useState } from "react";
import axios from "axios";

const App = () => {
  // const getData = async () => {
  //   const api = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const data = await api.json();
  //   console.log(data);
  // };

  // ! using the axios
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    // const data = response.json();
    // console.log(response.data);
    setData(response.data);
  };
  return (
    <>
      <h1>Get the Data</h1>
      <button onClick={getData}>Get</button>
      <div>
        {data.map((elem, idx) => {
          return (
            <>
            <div key={idx}>
              <p>{elem.title}</p>

            </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
