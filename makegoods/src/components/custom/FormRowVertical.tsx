import React from "react";

// Define interface for props
interface FormRowVerticalProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

// Define the component
function FormRowVertical({
  label,
  error,
  children,
}: FormRowVerticalProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2.5 py-3">
      {label && (
        <label
          htmlFor={(children as React.ReactElement).props.id}
          className="font-medium"
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-base">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
