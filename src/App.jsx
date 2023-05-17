import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/sections/3");
      const data = await response.json();
      console.log(data.data.section);
      setSections(data.data.section);
    };
    fetchData();
  }, []);

  return (
    <>
      {sections.map((section) => (
        <div key={section.id}>
          <h1>{section.id}</h1>
          <h2>{section.title}</h2>
          <h3>{section.place}</h3>
          <h3>{section.date}</h3>
          <h3>{section.hour}</h3>
          <p>{section.duration} min</p>
          <p>{section.bio}</p>
          <p>{section.cur_text}</p>
        </div>
      ))}
    </>
  );
}

export default App;
