import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TshirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Tshirt = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={"/tshirt1-template.png"}
        className="pointer-events-none z-50 select-none w-96"
        alt="핸드폰 이미지"
      />

      <div className="absolute -z-10 top-[15%] w-[40%] h-[20%]  inset-0 mx-auto">
        <img
          className="object-cover min-w-full min-h-full"
          src={imgSrc}
          alt="고객의 이미지"
        />
      </div>
    </div>
  );
};

export default Tshirt;
