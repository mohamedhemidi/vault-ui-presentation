import React from "react";
import styled from "styled-components";

const Colors = {
  primary: "#4778B3",
  secondary: "#B38247",
  info: "#106BDA",
  warning: "#FFC107",
  danger: "#CE3426",
  success: "#157F40",
  neutral: "#767676",
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

const Container = styled.div<Pick<InputProps, "width">>`
  width: ${(props) => (props.width ? props.width + "rem" : "20rem")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input<InputProps>`
  width: ${(props) => (props.width ? props.width + "rem" : "20rem")};
  margin: 0 auto;
  padding: 0.75rem 1.2rem;
  border: ${(props) =>
    props.error ? `1px solid ${Colors["danger"]}` : "1px solid #dadce0"};
  border-radius: 4px;
  font-size: 1rem;
  outline: none;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    border: ${(props) =>
      props.error ? `1px solid ${Colors["danger"]}` : "1px solid #bababa"};
  }
  &:focus {
    border: ${(props) => {
      if (props.error) return `1px solid ${Colors["danger"]}`;
      return props.color && `2px solid ${props.color && Colors[props.color]}`;
    }};
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    color: ${(props) => {
      if (props.error) return `${Colors["danger"]}`;
      return props.color && Colors[props.color];
    }};
    top: -10px;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0 6px;
  }

  &:not(:focus)::placeholder {
    opacity: 0;
  }

  &:not(:focus) + label {
    color: ${(props) => {
      if (props.error) return `${Colors["danger"]}`;
      return "#bbbbbb";
    }};
  }
`;
const Label = styled.label<Pick<InputProps, "color" | "error">>`
  position: absolute;
  left: 0;
  padding-left: 1rem;
  font-size: 1rem;
  color: ${(props) => {
    if (props.error) return `1px solid  ${Colors["danger"]}`;
    return props.color && Colors[props.color];
  }};
  pointer-events: none;
  transition: 0.3s;
  top: calc(50% + 0px);
  transform: translateX(0px) translateY(-50%);
`;
const ErrorMessage = styled.p<Pick<InputProps, "color" | "error">>`
  color: ${Colors["danger"]};
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
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
  return (
    <div>
      <Container width={width}>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          color={color}
          error={error}
          width={width}
          onChange={onChange}
          {...rest}
        />
        <Label htmlFor={name} color={color} error={error}>
          {label}
        </Label>
      </Container>
      {error && errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default TextField;
