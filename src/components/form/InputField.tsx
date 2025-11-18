import { Input } from "../ui/input";

const InputField = ({ input, register }) => {
  return (
    <>
      <label htmlFor={input.label} className="mb-1 block">
        {input.label}
      </label>
      <Input
        type={input.type}
        placeholder={input.placeholder}
        id={input.label}
        {...(input.type === "number"
          ? register(input.name, { valueAsNumber: true })
          : register(input.name))}
      />
    </>
  );
};

export default InputField;
