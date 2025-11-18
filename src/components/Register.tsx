import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "../validation/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the type for the form data using Zod's inference
type IInputs = z.infer<typeof registerSchema>;

// Define a type for the objects in the inputs array
interface InputField {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  name: keyof IInputs; // Use keyof to ensure name is a valid form field
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IInputs>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log(data);
  };

  const inputs: InputField[] = [
    {
      id: 1,
      type: "text",
      label: "FirstName",
      placeholder: "Enter your first name",
      name: "firstname",
    },
    {
      id: 2,
      type: "text",
      label: "LastName",
      placeholder: "Enter your last name",
      name: "lastname",
    },
    {
      id: 3,
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      name: "email",
    },
    {
      id: 4,
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      name: "password",
    },
    {
      id: 5,
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      name: "confirm_password",
    },
  ];

  return (
    <div className="w-[60%] my-10 mx-auto">
      <h2 className="text-center">Register Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-2xl p-4"
      >
        {inputs.map(({ id, type, placeholder, label, name }) => (
          <div key={id} className="mb-2">
            <label htmlFor={label}>{label}:</label>
            <input
              className="w-full py-2 px-3 rounded mt-1 border-2 border-gray-300 outline-0"
              type={type}
              placeholder={placeholder}
              {...register(name)}
              id={label}
            />
            {errors[name] && (
              <span className="text-red-700 mb-1 text-sm" role="alert">
                {errors[name]?.message}
              </span>
            )}
          </div>
        ))}

        <div className="mb-2">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            {...register("gender")}
            className="w-full py-2 px-3 rounded mt-1 border-2 border-gray-300 outline-0"
          >
            <option value="">Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          {errors.gender && (
            <span className="text-red-700 mb-1 text-sm" role="alert">
              {errors.gender?.message}
            </span>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="w-full bg-blue-700 text-white py-2 rounded my-2 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
