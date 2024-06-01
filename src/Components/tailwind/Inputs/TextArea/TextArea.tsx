import React from "react";
type InputProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  label,
  value,
  error,
  errorMessage,
  width,
  color,
  placeholder = "",
  name,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div>
      <div
        className=""
        style={width ? { width: width + "rem" } : { width: "20rem" }}
      >
        <textarea
          className=""
          placeholder={placeholder}
          name={name}
          value={value}
          color={color}
          data-error={error}
          onChange={onChange}
          style={width ? { width: width + "rem" } : { width: "20rem" }}
          {...rest}
        />
        <label htmlFor={name} className="">{label}</label>
      </div>
      {error && errorMessage ? (
        <div className="">{errorMessage}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
