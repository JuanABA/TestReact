import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>Parent component</h1>
      <p>Text: {text}</p>
      <ChildComponent onTextChange={handleTextChange} />
    </div>
  );
};

export default ParentComponent;
