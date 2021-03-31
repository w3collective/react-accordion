import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./data";

const App = () => {
  return (
    <ul className="accordion">
      {accordionData.map(({ heading, content }) => (
        <Accordion heading={heading} content={content} />
      ))}
    </ul>
  );
};

export default App;
