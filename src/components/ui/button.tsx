import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95",
          variant === 'default' && "bg-gradient-to-r from-[#0A2463] to-[#00D9FF] text-white hover:shadow-xl hover:from-[#00D9FF] hover:to-[#00FF88]",
          variant === 'outline' && "border-2 border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white hover:shadow-lg",
          variant === 'ghost' && "hover:bg-gray-100",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
