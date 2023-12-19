export const formFields = [
  {
    elementType: "input",
    placeholder: "Enter text",
    label: "My Input",
    name: "myInput",
  },
  {
    elementType: "input",
    type: "date",
    label: "Date",
    name: "date",
  },
  {
    elementType: "checkbox",
    label: "My Checkbox",
    name: "myCheckboxmulti",
    options: [
      { value: "1", text: "Option 1", label: "Option 1" },
      { value: "2", text: "Option 2", label: "Option 2" },
    ],
  },
  {
    elementType: "select",
    label: "select label",
    name: "select",
    options: [
      { value: "1", text: "Option 1" },
      { value: "2", text: "Option 2" },
    ],
  },
  {
    elementType: "file",
    accept: "image/*",
    name: "myFile",
    multiple: true,
    label: "My File",
  },
  {
    elementType: "radio",
    label: "My radio",
    name: "myradio",
    options: [
      { value: "1", text: "Option 1", label: "Option 1" },
      { value: "2", text: "Option 2", label: "Option 2" },
    ],
  },
  {
    elementType: "textarea",
    placeholder: "Enter text",
    name: "myTextarea",
    label: "My Textarea",
  },
  {
    elementType: "password",
    label: "Password",
    name: "password",
    placeholder: "Enter password",
  },
];
