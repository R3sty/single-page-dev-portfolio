export type TextAreaInputProps = {
    input: any;
    fieldName: string;
    error?: string;
  } & React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  const TextAreaInput = ({
    input,
    fieldName,
    error,
      ...props
  }: TextAreaInputProps) => {
      return (
          <label
              htmlFor={fieldName}
              className=" w-[21.4rem] tablet:w-[27.8rem]   flex flex-col px-4 "
          >
        <span className="invisible">={fieldName}</span>
        <textarea
          {...input}
          {...props}
          placeholder={fieldName.toUpperCase()}
          name={fieldName}
          id={fieldName}
          cols={30}
          rows={4}
          className={`bg-opacity-0 bg-green resize-none focus:outline-none ring-0 focus:ring-0 border-t-0 border-r-0 border-l-0 pb-4 pl-6  ${
            error ? "border-b-[#FF6F5B]" : "border-b-white"
          } focus:border-b-green
             border-b-[1px] tablet:border-b-2 w-full  bg-darkGrey`}
        ></textarea>
        <div className="text-[#FF6F5B] self-end text-body text-[0.75rem]">
          {error}
        </div>
      </label>
    );
  };
  
  export default TextAreaInput;
  