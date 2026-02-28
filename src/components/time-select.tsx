import { cva, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import { twMerge } from "tailwind-merge";

export const timeSelectVariants = cva(
  "w-fit py-2 px-5 rounded-lg border hover:bg-gray-500 border-gray-500 bg-gray-600 transition-colors",
  {
    variants: {
      disabled: {
        true: "bg-transparent pointer-events-none border-gray-600 hover:bg-transparent",
        false: "cursor-pointer",
      },
      selected: {
        true: "border-yellow pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
      selected: false,
    },
  }
);

interface TimeSelectProps
  extends React.ComponentProps<"input">,
    Omit<VariantProps<typeof timeSelectVariants>, "disabled"> {
  children?: React.ReactNode;
}

export function TimeSelect({
  children,
  disabled,
  selected,
  ...props
}: TimeSelectProps) {
  return (
    <label
      className={twMerge(
        timeSelectVariants({
          className: textVariants({
            className: disabled
              ? "text-gray-500"
              : selected
              ? "text-yellow"
              : "text-gray-200",
            variant: "textMd",
          }),
          disabled,
          selected,
        })
      )}
    >
      {children}
      <input type="radio" className="hidden" disabled={disabled} {...props} />
    </label>
  );
}
