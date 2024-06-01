import React from "react";
const Colors = {
  primary: {
    text: "text-[#4778B3]",
    border: "border-[#4778B3]",
  },
  secondary: {
    text: "text-[#B38247]",
    border: "border-[#B38247]",
  },
  info: {
    text: "text-[#106BDA]",
    border: "border-[#106BDA]",
  },
  warning: {
    text: "text-[#FFC107]",
    border: "border-[#FFC107]",
  },
  danger: {
    text: "text-[#CE3426]",
    border: "border-[#CE3426]",
  },
  success: {
    text: "text-[#157F40]",
    border: "border-[#157F40]",
  },
  neutral: {
    text: "text-[#767676]",
    border: "border-[#767676]",
  },
};

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
