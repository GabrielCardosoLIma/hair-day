import { cva, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import { Icon } from "./icon";
import { twMerge } from "tailwind-merge";

export const textInputVariantsContainer = cva(
  "has-focus:border-yellow-dark transition-colors-colors p-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2"
);

export const textInputVariantsIcon = cva("size-5 fill-yellow");

export const textInputVariants = cva(
  "w-full outline-none text-gray-200 placeholder:text-gray-400"
);

interface TextInputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof textInputVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export function TextInput({
  className,
  icon,
  ...props
}: TextInputProps) {
  return (
    <label className={twMerge(textInputVariantsContainer({ className }))}>
      <Icon svg={icon} className={textInputVariantsIcon()} />
      <input
        type="text"
        className={twMerge(
          textVariants({
            variant: "textMd",
            className: textInputVariants(),
          })
        )}
        {...props}
      />
    </label>
  );
}
