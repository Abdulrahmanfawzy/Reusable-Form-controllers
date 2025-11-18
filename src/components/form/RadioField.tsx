import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const RadioField = ({ input, register }) => {
  return (
    <>
      <label htmlFor={input.label} className="mb-1 block">
        {input.label}
      </label>
      <RadioGroup {...register(input.name)}>
        {input.options.map((option, index: number) => (
          <div key={index} className="flex items-center">
            <RadioGroupItem value={option.value} id={option.text} />
            <label className="ms-1" htmlFor={option.text}>
              {option.text}
            </label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
};

export default RadioField;
