import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends
ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp 
      className={clsx(
        "py-2 px-4 rounded-4xl bg-gradient-to-r from-gradient-st to-gradient-end font-semibold ring-transparent text-white text-sm transition", className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}