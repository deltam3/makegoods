"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const STEPS = [
  {
    name: "1단계: 이미지 선택",
    description: "굿즈에 올라갈 이미지를 선택하세요",
    url: "/upload",
  },
  {
    name: "2단계: 디자인을 커스텀하기",
    description: "당신만의 굿즈를 만드세요",
    url: "/design",
  },
  {
    name: "3단계: 확인",
    description: "디자인을 마지막으로 확인하세요",
    url: "/preview",
  },
];

const Steps = () => {
  const pathname = usePathname();

  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url);
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url)
        );

        const imgPath = `/step-${i + 1}.webp`;

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div className={cn("", { "bg-yellow-400": isCurrent })}>
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  {
                    "bg-zinc-700": isCurrent,
                    "bg-primary": isCompleted,
                  }
                )}
                aria-hidden="true"
              />

              <span
                className={cn(
                  i !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                <span className="flex-shrink-0">
                  <img
                    src={imgPath}
                    alt="단계 이미지"
                    className={cn(
                      "flex h-[5rem] w-[5rem] object-contain items-center justify-center",
                      {
                        "border-none": isCompleted,
                        "border-zinc-700": isCurrent,
                      }
                    )}
                  />
                </span>

                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isCompleted,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
