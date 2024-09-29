"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MYNAVS = [
  {
    name: "구매내역",
    url: "/mypage",
  },
  {
    name: "내 정보",
    url: "/mypage/info",
  },
];

const MyNav = () => {
  const pathname = usePathname();

  return (
    <ol className="rounded-md lg:rounded-none mt-5">
      {MYNAVS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url);

        return (
          <li
            key={step.name}
            className="relative overflow-hidden lg:flex-1  hover:bg-custom py-[10px] px-[12px] hover:bg-[rgba(0,0,0,.05)]"
          >
            <Link href={step.url}>
              <div className="">
                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center ">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-zinc-700 font-extrabold": isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default MyNav;
