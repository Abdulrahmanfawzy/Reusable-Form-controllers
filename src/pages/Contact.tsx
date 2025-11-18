import FormBuilder from "../components/form/FormBuilder";
import { contactValidation } from "../validation/contact";

const inputs = [
  {
    id: 1,
    type: "number",
    shape: "input",
    placeholder: "Enter your Age",
    label: "Age",
    name: "age",
  },
  {
    id: 2,
    shape: "select",
    label: "country",
    name: "country",
    options: [
      { value: "", text: "Select a country" },
      { value: "egypt", text: "Egypt" },
      { value: "KSA", text: "KSA" },
      {
        value: "United Arab Emirates",
        text: "United Arab Emirates",
      },
    ],
  },
  {
    id: 3,
    shape: "radio",
    type: "radio",
    label: "Gender",
    name: "gender",
    options: [
      { value: "male", text: "Male" },
      { value: "female", text: "Female" },
    ],
  },
  {
    id: 4,
    shape: "input",
    type: "file",
    label: "Image",
    name: "image",
  },
];

const btn = {
  text: "Contact Us",
  styles: "w-full mt-1 cursor-pointer bg-third",
};

const Contact = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-[60%] p-5 mt-10 rounded-2xl">
      <h2 className="text-center font-bold text-3xl mb-5 text-third">
        Contact
      </h2>
      <FormBuilder
        schema={contactValidation}
        onSubmit={onSubmit}
        inputs={inputs}
        btn={btn}
      />
    </div>
  );
};

export default Contact;
