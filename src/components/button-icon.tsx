import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon";

export const buttonIconContainerVariants = cva(
  `
      inline-flex items-center justify-center cursor-pointer 
      transition-colors group bg-transparent border-0 size-4
    `
);

export const buttonIconIconVariants = cva(
  "size-full fill-yellow group-hover:fill-yellow-dark transition-colors"
);

interface ButtonIconProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonIconContainerVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export function ButtonIcon({ icon, className, ...props }: ButtonIconProps) {
  return (
    <button type="button" className={buttonIconContainerVariants({ className })} {...props}>
      <Icon svg={icon} className={buttonIconIconVariants()} />
    </button>
  );
}
