import * as React from "react";

export const Button = React.forwardRef(
  ({ className,...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${className}`}
        ref={ref}
        {...props}
      >
        {/* ...existing children... */}
      </button>
    );
  }
);
Button.displayName = "Button";
Button.defaultProps = {
  variant: "primary",
  size: "md",
};
