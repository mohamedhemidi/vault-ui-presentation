import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: string;
  value?: string;
  name: string;
  placeholder?: string;
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "warning"
    | "danger"
    | "success"
    | "neutral";
  width?: number;
  error?: boolean;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  label,
  type,
  value,
  error,
  errorMessage,
  width,
  color = "primary",
  placeholder = "",
  name,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div>
      <div
        className="relative flex justify-center items-center"
        style={width ? { width: width + "rem" } : { width: "20rem" }}
      >
        <input
          className={`m-auto py-[0.75rem] px-[1.2rem] rounded text-base outline-none peer`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          color={color}
          data-error={error}
          style={width ? { width: width + "rem" } : { width: "20rem" }}
          onChange={onChange}
          {...rest}
        />
        <label
          htmlFor={name}
          className={`absolute left-0 pl-4 text-base top-6 translate-x-0 -translate-y-2/4 duration-300 pointer-events-none peer-focus:px-0 peer-focus:py-6 peer-focus:-top-2.5 peer-focus:text-sm`}
        >
          {label}
        </label>
      </div>
      {error && errorMessage ? <div className="">{errorMessage}</div> : null}
    </div>
  );
};

export default TextField;
