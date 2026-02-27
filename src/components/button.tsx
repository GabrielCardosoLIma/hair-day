import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { Text } from "./text";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer rounded-lg",
  {
    variants: {
      variant: {
        default: "bg-yellow hover:border-2 hover:border-yellow-light",
      },
      size: {
        md: "h-14 py-4.5 px-5",
      },
      disabled: {
        true: "bg-yellow-dark pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  }
);

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Text variant="titleSm" className="text-gray-900">
        {children}
      </Text>
    </button>
  );
}
