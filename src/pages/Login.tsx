import FormBuilder from "../components/form/FormBuilder";
import { loginValidation } from "../validation/login";

const inputs = [
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
];

const btn = {
  text: "Login",
  styles: "w-full mt-1 cursor-pointer bg-third",
};

const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-[60%] p-5 mt-10 rounded-2xl">
      <h2 className="text-center font-bold text-3xl mb-5 text-third">Login</h2>
      <FormBuilder
        schema={loginValidation}
        onSubmit={onSubmit}
        inputs={inputs}
        btn={btn}
      />
    </div>
  );
};

export default Login;
