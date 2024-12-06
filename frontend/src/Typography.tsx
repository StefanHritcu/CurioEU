import React from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p", // Default to 'p' if no variant is specified
  children,
  className = "",
}) => {
  // Map the 'variant' to the corresponding HTML tag
  const Component = variant;

  // Map the 'variant' to the corresponding font-size class
  const fontSizeClasses: { [key: string]: string } = {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    p: "text-p",
  };

  return (
    <Component className={`${fontSizeClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
