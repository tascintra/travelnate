import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonIconProps {
  children: ReactNode
}

function ButtonIcon(props: ButtonIconProps) {
  return (
    <Slot 
      className="w-6 h-6 text-white"
    >
      {props.children}
    </Slot>
  )
}

ButtonIcon.displayName = "Button.Icon"

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
        "py-2 px-6 rounded-4xl flex justify-center items-center gap-2 bg-gradient-to-b from-gradient-st to-gradient-end font-medium ring-transparent text-white text-sm transition hover:brightness-105", className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export const SendButton = {
  Icon: ButtonIcon,
}