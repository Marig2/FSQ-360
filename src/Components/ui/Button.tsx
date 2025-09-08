import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "rounded transition";
  const styles =
    variant === "outline"
      ? ""
      : " text-white ";

  return (
    <button className={`${baseClasses} ${styles} ${className}`} {...props} />
  );
}