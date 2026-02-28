import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import LogoSvg from "../assets/images/logo.svg";

export function Logo({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("py-3 px-5 bg-gray-600 rounded-br-xl", className)}
      {...props}
    >
      <img src={LogoSvg} alt="logo" />
    </div>
  );
}
