import React from "react";
import styles from "./textarea.module.css";

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
  const inputClasses = `
  ${error ? styles["error"] : ""}
  ${color === "primary" ? styles["primary"] : ""}
  ${color === "secondary" ? styles["secondary"] : ""}
  ${color === "info" ? styles["info"] : ""}
  ${color === "warning" ? styles["warning"] : ""}
  ${color === "danger" ? styles["danger"] : ""}
  ${color === "success" ? styles["success"] : ""}
  ${color === "neutral" ? styles["neutral"] : ""}
  `;
  return (
    <div>
      <div
        className={styles.container}
        style={width ? { width: width + "rem" } : { width: "20rem" }}
      >
        <textarea
          className={`${styles.textField} ${inputClasses}`}
          placeholder={placeholder}
          name={name}
          value={value}
          color={color}
          data-error={error}
          onChange={onChange}
          style={width ? { width: width + "rem" } : { width: "20rem" }}
          {...rest}
        />
        <label htmlFor={name} className={`${styles.Label} ${inputClasses}`}>{label}</label>
      </div>
      {error && errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
