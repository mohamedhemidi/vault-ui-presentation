import React from "react";
/*
//
/* Button Colors
//
*/

const Colors = {
  primary: {
    background: "active:bg-[#4778B3] bg-[#4778B3]",
    text: "text-[#4778B3]",
    border: "border-[#4778B3]",
    icon: "[&>img]:fill-[#4778B3] [&>svg]:fill-[#4778B3]",
  },
  secondary: {
    background: "active:bg-[#B38247] bg-[#B38247]",
    text: "text-[#B38247]",
    border: "border-[#B38247]",
    icon: "[&>img]:fill-[#4778B3] [&>svg]:fill-[#4778B3]",
  },
  info: {
    background: "active:bg-[#106BDA] bg-[#106BDA]",
    text: "text-[#106BDA]",
    border: "border-[#106BDA]",
    icon: "[&>img]:fill-[#4778B3] [&>svg]:fill-[#4778B3]",
  },
  warning: {
    background: "active:bg-[#FFC107] bg-[#FFC107]",
    text: "text-[#FFC107]",
    border: "border-[#FFC107]",
    icon: "[&>img]:fill-[#4778B3] [&>svg]:fill-[#4778B3]",
  },
  danger: {
    background: "active:bg-[#CE3426] bg-[#CE3426]",
    text: "text-[#CE3426]",
    border: "border-[#CE3426]",
    icon: "[&>img]:fill-[#4778B3] [&>svg]:fill-[#4778B3]",
  },
  success: {
    background: "active:bg-[#157F40] bg-[#157F40]",
    text: "text-[#157F40]",
    border: "border-[#157F40]",
    icon: "[&>img]:fill-[#4778B3] [&>svg]:fill-[#4778B3]",
  },
  neutral: {
    background: "active:bg-[#767676] bg-[#767676]",
    text: "text-[#767676]",
    border: "border-[#767676]",
    icon: "[&>img]:fill-[#4778B3] [&>svg]:fill-[#4778B3]",
  },
};

/*
//
/* Button Sizes
//
*/

const Size = {
  small: "py-2 px-4",
  medium: "py-4 px-4",
  large: "py-6 px-6",
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
  width,
  icon,
  disabled,
  rounded,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`flex flex-row justify-center items-center gap-2 hover:opacity-80 active:opacity-100
      ${
        disabled ? "bg-[#E0E0E0] active:bg-[#E0E0E0] hover:opacity-100 " : ""
      } ${
        variant === "outlined" || variant === "ghost"
          ? "bg-transparent"
          : Colors[color].background
      } ${
        variant === "outlined" || variant === "ghost"
          ? Colors[color].text
          : "text-white"
      } ${
        variant === "outlined"
          ? "border-2 border-solid " + Colors[color].border
          : ""
      }
      ${Size[size]}
      ${variant === "ghost" ? Colors[color].background : ""}
      ${variant === "ghost" ? "active:text-white" : ""}
      ${
        variant === "ghost" || variant === "outlined"
          ? Colors[color].icon
          : "[&>svg]:fill-white"
      }
      ${rounded ? "rounded-full w-12 h-12 py-0 px-0" : "rounded-md"}
      `}
      disabled={disabled || false}
      style={width ? { width: width + "rem" } : {}}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <>
          <Loading />
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

/*
/*
/* Loading Spinner Component
/*
*/
export const Loading = () => {
  return (
    <>
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </>
  );
};
