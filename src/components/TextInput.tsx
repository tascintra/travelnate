import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-2 h-12 py-4 px-6 rounded-4xl bg-white w-72 ring-1 ring-gray-100 shadow-flat">
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Input'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

  function TextInputInput(props: TextInputInputProps) {
    return (
      <input 
        className="bg-transparent flex-1 text-gray-400 text-sm placeholder:text-gray-300 outline-none"
        {...props}
      />
    )
  }

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
}