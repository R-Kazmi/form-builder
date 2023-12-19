import { useState } from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import { formFields } from "./data/fields";

function App() {
  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <FormContainer fields={formFields} handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
