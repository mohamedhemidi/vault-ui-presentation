import React from "react";
import styles from "./textfield.module.css";

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
  color,
  placeholder = "",
  name,
  onChange,
  ...rest
}: InputProps) => {
  const inputClasses = `
  ${error ? styles["error"] : ""}
  ${color === "primary" ? styles["primary"] : ""}
  ${color === "secondary" ? styles["secondary"] : ""}
  ${color === "info" ? styles["info"] : ""}
  ${color === "warning" ? styles["warning"] : ""}
  ${color === "danger" ? styles["danger"] : ""}
  ${color === "success" ? styles["success"] : ""}
  ${color === "neutral" ? styles["neutral"] : ""}
  `
  return (
    <div>
      <div
        className={styles.container}
        style={width ? { width: width + "rem" } : { width: "20rem" }}
      >
        <input
          className={`${styles.textField} ${inputClasses}`}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          color={color}
          data-error={error}
          style={width ? {width: width + "rem"} : {width: "20rem"}}
          onChange={onChange}
          {...rest}
        />
        <label htmlFor={name} className={`${styles.Label} ${inputClasses}`}>
          {label}
        </label>
      </div>
      {error && errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage}</div>
      ) : null}
    </div>
  );
};

export default TextField;
