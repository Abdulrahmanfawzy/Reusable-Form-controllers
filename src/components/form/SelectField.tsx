import { NativeSelect, NativeSelectOption } from "../ui/native-select";

const SelectField = ({ input, register }) => {
  return (
    <>
      <label htmlFor={input.label} className="mb-1 block">
        {input.label}
      </label>
      <NativeSelect {...register(input.name)}>
        {input.options.map((option, index) => (
          <NativeSelectOption key={index} value={option.value}>
            {option.text}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </>
  );
};

export default SelectField;
