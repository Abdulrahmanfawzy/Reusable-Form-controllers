import FormBuilder from "../components/form/FormBuilder";
import { registerValidation } from "../validation/register";

const inputs = [
  {
    id: 1,
    type: "text",
    shape: "input",
    placeholder: "Enter your first name",
    label: "FirstName",
    name: "firstname",
  },
  {
    id: 2,
    type: "text",
    shape: "input",
    placeholder: "Enter your last name",
    label: "LastName",
    name: "lastname",
  },
  {
    id: 3,
    type: "email",
    shape: "input",
    placeholder: "Enter your email",
    label: "Email address",
    name: "email",
  },
  {
    id: 4,
    type: "password",
    shape: "input",
    placeholder: "Enter your password",
    label: "password",
    name: "password",
  },
  {
    id: 5,
    type: "password",
    shape: "input",
    placeholder: "confirm password",
    label: "confirm password",
    name: "confirm_password",
  },
];

const btn = {
  text: "Submit",
  styles: "w-full mt-1 cursor-pointer bg-third",
};

const Register = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-[60%] p-5 mt-10 rounded-2xl">
      <h2 className="text-center font-bold text-3xl mb-5 text-third">
        Register
      </h2>
      <FormBuilder
        schema={registerValidation}
        onSubmit={onSubmit}
        inputs={inputs}
        btn={btn}
      />
    </div>
  );
};

export default Register;
