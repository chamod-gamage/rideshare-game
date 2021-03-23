import React, { useState } from "react";
import QuestionView from "./components/QuestionView";
import { Questions } from "./Questions";
import "./App.css";

function App() {
  const [selected, setSelected] = useState([]);

  const handleSelect = ({ index, option }) => {};
  return (
    <div className="App">
      {Questions.map((q, index) => (
        <QuestionView
          key={index}
          title={q.title}
          options={q.options}
          setOption={handleSelect}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
