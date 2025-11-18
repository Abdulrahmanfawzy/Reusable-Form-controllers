import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

const FormBuilder = ({ inputs, onSubmit, btn, schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input, index: number) => (
        <div key={index} className="mb-2">

          {input.shape == "input" && (
            <InputField register={register} input={input} />
          )}

          {input.shape == "select" && (
            <SelectField input={input} register={register} />
          )}

          {input.shape == "radio" && (
            <RadioField input={input} register={register} />
          )}

          {errors && (
            <span className="text-red-600 text-sm mb-1">
              {errors[input.name]?.message}
            </span>
          )}
        </div>
      ))}

      <Button disabled={isSubmitting} className={btn.styles}>
        {btn.text}
      </Button>
    </form>
  );
};

export default FormBuilder;
