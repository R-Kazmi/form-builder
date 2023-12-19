// FormContainer.js
import React, { useState } from "react";
import FormMicroservice from "./FormMicroservice";

const FormContainer = ({ fields, handleSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormValues({ ...formValues, [fieldName]: value });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e, formValues)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {fields.map((field, index) => (
        <div key={index}>
          <FormMicroservice
            {...field}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
          />
        </div>
      ))}

      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit"
      >
        Button
      </button>
    </form>
  );
};

export default FormContainer;
