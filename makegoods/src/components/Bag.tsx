import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BagProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Bag = ({ imgSrc, className, dark = false, ...props }: BagProps) => {
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
        // className="pointer-events-none z-50 select-none w-96 md:w-full"
        className="pointer-events-none z-50 select-none md:w-full"
        alt="에코백 이미지"
      />

      <div className="absolute inset-0 top-[50%] w-[50%] h-[40%] mx-auto">
        <img
          className="object-contain min-w-full min-h-full"
          src={imgSrc}
          alt="고객의 이미지"
        />
      </div>
    </div>
  );
};

export default Bag;
