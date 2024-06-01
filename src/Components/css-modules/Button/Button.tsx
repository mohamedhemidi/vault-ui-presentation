import React from "react";
import styles from "./button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outlined" | "ghost" | "filled" | "shadow";
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "warning"
    | "danger"
    | "success"
    | "neutral";
  width?: number;
  height?: number;
  disabled?: boolean;
  rounded?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
};

const ButtonComponent = ({
  children,
  color = "primary",
  variant = "filled",
  size = "small",
  loading,
  icon,
  disabled,
  rounded,
  onClick,
  width,
  ...rest
}: ButtonProps) => {
  const buttonClass = `
    ${disabled ? styles["disabled"] : ""}
    ${color === "primary" ? styles["primary"] : ""}
    ${color === "secondary" ? styles["secondary"] : ""}
    ${color === "info" ? styles["info"] : ""}
    ${color === "warning" ? styles["warning"] : ""}
    ${color === "danger" ? styles["danger"] : ""}
    ${color === "success" ? styles["success"] : ""}
    ${color === "neutral" ? styles["neutral"] : ""}
    ${rounded ? styles["rounded"] : ""}
    ${variant === "ghost" ? styles["ghost"] : ""}
    ${variant === "filled" ? styles["filled"] : ""}
    ${variant === "outlined" ? styles["outlined"] : ""}
    ${variant === "shadow" ? styles["shadow"] : ""}
    ${size === "small" ? styles["small"] : ""}
    ${size === "medium" ? styles["medium"] : ""}
    ${size === "large" ? styles["large"] : ""}
    
  `.trim();
  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      disabled={disabled || false}
      onClick={onClick}
      style={width ? {width: width + "rem"} : {}}
      {...rest}
    >
      {loading ? (
        <>
          <div className={`${styles.spinner}`}></div>
        </>
      ) : (
        <>
          {icon}
          {rounded === true ? null : children}
        </>
      )}
    </button>
  );
};

export default ButtonComponent;
