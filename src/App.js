import React, { useState } from "react";
import QuestionView from "./components/QuestionView";
import { Questions } from "./Questions";
import "./App.css";

function App() {
  const 
  const [selected, setSelected] = useState([]);

  const handleSelect = ({ index, option }) => {
    console.log(option);
    const curSelection = selected;
    curSelection[index] = { type: option.type, val: option.val };
    setSelected(curSelection);
    console.log(selected);
  };
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
