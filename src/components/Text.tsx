import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"
import { ReactNode } from "react"

export interface TextProps {
  size?: "sm" | "md"
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Text({ size = 'sm', children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      className={clsx('text-gray-300 font-sans', 
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
        },
        className,
      )}
    >
      {children}
    </Comp>
  )
}