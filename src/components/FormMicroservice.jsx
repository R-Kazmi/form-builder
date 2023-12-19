// FormMicroservice.js
import React from "react";
import {
  File,
  Checkbox,
  Select, 
  Radio,
  Password,
  Textarea,
  Input,
} from "./global";

const FormMicroservice = ({ elementType, ...props }) => {
  switch (elementType) {
    case "input":
      return <Input {...props} />;
    case "checkbox":
      return <Checkbox {...props} />;
    case "select":
      return <Select {...props} />;
    case "file":
      return <File {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    case "radio":
      return <Radio {...props} />;
    case "password":
      return <Password {...props} />;
    default:
      return null;
  }
};

export default FormMicroservice;
