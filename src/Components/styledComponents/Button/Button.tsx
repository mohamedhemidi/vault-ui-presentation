import React from "react";
import styled, { keyframes } from "styled-components";

/*
//
/* Button Colors
//
*/

const Colors = {
  primary: "#4778B3",
  secondary: "#B38247",
  info: "#106BDA",
  warning: "#FFC107",
  danger: "#CE3426",
  success: "#157F40",
  neutral: "#767676",
};

/*
//
/* Button Sizes
//
*/

const Size = {
  small: "0.5rem 1rem",
  medium: "1rem 1rem",
  large: "1.5rem 1.5rem",
};

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
  ...rest
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled || false}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      rounded={rounded || false}
      {...rest}
    >
      {loading ? (
        <>
          <LoaderWheel />
        </>
      ) : (
        <>
          {icon}
          {rounded === true ? null : children}
        </>
      )}
    </Button>
  );
};

export default ButtonComponent;

/*
//
/* Styles
//
*/

const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: ${(props) => {
    if (props.rounded) return `3rem`;
    if (props.width) return `${props.width}rem`;
    else return `auto`;
  }};
  height: ${(props) => {
    if (props.rounded) return `3rem`;
    if (props.height) return `${props.height}rem`;
    else return `auto`;
  }};
  border-radius: ${(props) => (props.rounded ? "50%" : "7px")};
  border: ${(props) =>
    props.variant === "outlined"
      ? `2px solid ${props.color && Colors[props.color]}`
      : "none"};
  color: ${(props) =>
    props.variant === "ghost" || props.variant === "outlined"
      ? `${props.color && Colors[props.color]}`
      : "#FFFFFF"};
  padding: ${(props) => {
    if (props.rounded) return "0px";
    if (props.size) return Size[props.size];
  }};
  background-color: ${(props) => {
    if (props.disabled) return "#E0E0E0";
    return props.color && Colors[props.color];
  }};
  box-shadow: ${(props) =>
    props.variant === "shadow" ? "0px 1px 2px rgba(0,0,0,0.3)" : ""};
  background: ${(props) =>
    props.variant === "ghost" || props.variant === "outlined"
      ? "transparent"
      : ""};
  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.8)};
  }
  &:active {
    opacity: 1;
    /* transition: all 0.4s; */
    background-color: ${(props) => {
      if (props.variant === "ghost")
        return `${props.color && Colors[props.color]}`;
    }};
    color: ${(props) => {
      if (props.variant === "ghost") return `#FFFFFF`;
    }};
  }
  cursor: pointer;
  img,
  svg {
    width: 1.3rem;
    height: 1.3rem;
    color: ${(props) =>
      props.variant === "ghost" || props.variant === "outlined"
        ? `${props.color && Colors[props.color]}`
        : "#FFFFFF"};

    fill: ${(props) =>
      props.variant === "ghost" || props.variant === "outlined"
        ? `${props.color && Colors[props.color]}`
        : "#FFFFFF"};
  }
  a {
    text-decoration: none;
  }
`;

/*
/* Loading Spinner Styling
*/

const spin = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;
const LoaderWheel = styled.div`
  animation: spin 1s infinite linear;
  border: 5px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 1.3rem;
  width: 1.3rem;
  animation-name: ${spin};
  animation-duration: 2s;
`;
