import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

const buttonVariants = cva(["transition", "duration-250", "ease-in-out", "hover:scale-95", "flex", "items-center", "px-6", "py-2", "border", "font-semibold", "tracking-wide", "text-base"], {
    variants: {
        variant: {
            primary: ["border-transparent", "text-white", "bg-[#06C258]", "hover:bg-[#099948]"],
            secondary: ["border-white", "text-white", "bg-transparent", "hover:text-black", "hover:border-transparent", "hover:bg-white"],
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
            asChild?: boolean;
        }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={buttonVariants({ variant, className })}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
