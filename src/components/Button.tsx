import React from "react";

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => any;
  type?: "submit" | "reset" | "button";
  btn?: "primary" | "secondary";
};

const Button = ({ className, type, onClick, label, btn }: ButtonProps) => {
  return (
    <button
      className={`w-28 ${
        btn === "secondary"
          ? " bg-perfWhite border border-perfCrimson text-perfCrimson"
          : "bg-perfCrimson hover:bg-perfCrimson hover:opacity-90 text-perfWhite"
      } font-bold mt-5 py-2 rounded-sm ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
