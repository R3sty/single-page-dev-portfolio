export type TextInputProps = {
    input: any;
    fieldName: string;
    error?: string;
  } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  
export const TextInput = ({ input, fieldName, error, ...props }: TextInputProps) => {
    return (
      <label
        htmlFor={fieldName}
        className="px-4  w-[21.4rem] tablet:w-[27.8rem]   flex flex-col pb-4"
      >
        <span className="invisible">={fieldName}</span>
        <input
          {...input}
          {...props}
          type="text"
          className={`bg-opacity-0 bg-green focus:outline-none ring-0 focus:ring-0 border-t-0 border-r-0 border-l-0 pb-4 pl-6  ${
            error ? "border-b-[#FF6F5B]" : "border-b-white"
          } focus:border-b-green border-b-[1px] tablet:border-b-2 w-full  `}
          name={fieldName}
          id={fieldName}
          placeholder={fieldName.toUpperCase()}
        />
        <div className="text-[#FF6F5B] self-end text-body text-[0.75rem]">
          {error}
        </div>
      </label>
    );
  };
  
  export default TextInput;
  