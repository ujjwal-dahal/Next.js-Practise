import React from "react";
import Form from "./Form"; // Ensure this path is correct
import "./form.scss"; // Import the updated SCSS

const App = () => {
  return (
    <div className="container">
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
};

export default App;
