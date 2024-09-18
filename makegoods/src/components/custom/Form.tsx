import React from "react";
import { cn } from "../../lib/utils";

interface FormProps {
  type?: "modal" | "regular";
}

const Form: React.FC<FormProps> = ({ type = "regular", children }) => {
  const formClasses = cn("overflow-hidden text-base", {
    "bg-gray-100 p-6 border border-gray-300 rounded-md": type === "regular",
    "w-[80rem]": type === "modal",
  });

  return <form className={formClasses}>{children}</form>;
};

export default Form;
