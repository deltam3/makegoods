import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TshirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Bag = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={"/eco-template.png"}
        className="pointer-events-none z-50 select-none w-96"
        alt="핸드폰 이미지"
      />

      <div className="absolute inset-0 top-[50%] w-[60%] h-[30%] mx-auto">
        <img
          className="object-cover min-w-full min-h-full"
          src={imgSrc}
          alt="고객의 이미지"
        />
      </div>
    </div>
  );
};

export default Bag;
