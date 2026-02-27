import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      titleLg: "text-3xl leading-6 font-bold",
      titleMd: "text-base leading-6 font-bold",
      titleSm: "text-sm leading-5 font-bold",
      textMd: "text-base leading-6 font-normal",
      textSm: "text-sm leading-5 font-normal",
    },
  },
  defaultVariants: {
    variant: "textMd",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
