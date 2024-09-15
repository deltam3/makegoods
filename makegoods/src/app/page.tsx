import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Bag from "@/components/Bag";
import Pad from "@/components/Bag";
import Phone from "@/components/Phone";
import Tshirt from "@/components/Tshirt";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-4sxl">
                당신만의
                <br />
                <span className="bg-yellow-400 px-2 text-white">
                  침착맨 굿즈
                </span>
                를 만들어봐요
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                침착맨의 모든 순간을,{" "}
                <span className="font-semibold">특별하고</span> 다양한 굿즈에
                각인해보세요.
              </p>
            </div>

            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2 flex gap-10">
                <li className="flex gap-1.5 items-center text-left">
                  <div className="rounded-full border-[3px] border-black p-2 bg-primary-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      viewBox="0 0 56 56"
                      size="24"
                    >
                      <path
                        fill="#fff"
                        d="M32.667 42V14A4.667 4.667 0 0 0 28 9.333H9.334A4.667 4.667 0 0 0 4.667 14v25.666A2.333 2.333 0 0 0 7 42h4.667"
                      ></path>
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M32.667 42V14A4.667 4.667 0 0 0 28 9.333H9.334A4.667 4.667 0 0 0 4.667 14v25.666A2.333 2.333 0 0 0 7 42h4.667M35 42H21"
                      ></path>
                      <path
                        fill="#fff"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M50.65 41.317A2.33 2.33 0 0 1 49 42H32.667V18.667h8.213a2.33 2.33 0 0 1 1.82.877l8.12 10.15c.332.413.513.927.514 1.456v8.517c0 .619-.246 1.212-.684 1.65"
                      ></path>
                      <path
                        fill="#fff"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M39.667 46.666a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333m-23.333 0a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333"
                      ></path>
                    </svg>
                  </div>
                  당일 배송
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <div className="rounded-full border-[3px] border-black p-2 bg-green-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      viewBox="0 0 56 56"
                      size="24"
                    >
                      <rect
                        width="36"
                        height="41"
                        x="10"
                        y="10"
                        fill="#fff"
                        rx="4"
                      ></rect>
                      <path
                        fill="#fff"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M35 4.667H21A2.333 2.333 0 0 0 18.666 7v4.667A2.333 2.333 0 0 0 21 14h14a2.333 2.333 0 0 0 2.333-2.333V7A2.333 2.333 0 0 0 35 4.667"
                      ></path>
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M18.667 9.333H14A4.667 4.667 0 0 0 9.334 14v32.666A4.667 4.667 0 0 0 14 51.333h28a4.667 4.667 0 0 0 4.667-4.667V45.5M37.334 9.333H42a4.67 4.67 0 0 1 4.037 2.333M18.667 42H21"
                      ></path>
                      <path
                        fill="#fff"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M42.934 22.4a4.95 4.95 0 0 1 7 7L39.667 39.667 30.334 42l2.333-9.333z"
                      ></path>
                    </svg>
                  </div>
                  1 년 A/S
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <div className="rounded-full border-[3px] border-black p-2 bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="none"
                      viewBox="0 0 56 56"
                      size="24"
                    >
                      <path
                        fill="#fff"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M19 19.667c-4.666 7-9.333 8.167-16.333 9.333l18.667 23.334C26 50 35.334 40.667 35.334 36"
                      ></path>
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M31.833 41.833 8.5 36"
                      ></path>
                      <path
                        fill="#fff"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M40.864 7.136 30.667 17.333l-3.71-3.71a4.667 4.667 0 0 0-6.58 0l-3.71 3.71 21 21 3.71-3.71a4.666 4.666 0 0 0 0-6.58l-3.71-3.71 10.197-10.197a4.95 4.95 0 0 0-7-7"
                      ></path>
                    </svg>
                  </div>
                  침착맨 싸인
                </li>
              </div>
            </ul>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl flex items-center">
              <Tshirt className="w-48 l:w-64" imgSrc="/testimonials/1.jpg" />
              <Bag className="w-48 l:w-64" imgSrc="/testimonials/4.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="flex"></div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

{
  /* <div class="rounded-full border-[3px] border-black p-2 bg-green-300">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="56"
  height="56"
  fill="none"
  viewBox="0 0 56 56"
  size="24"
>
  <rect
    width="36"
    height="41"
    x="10"
    y="10"
    fill="#fff"
    rx="4"
  ></rect>
  <path
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M35 4.667H21A2.333 2.333 0 0 0 18.666 7v4.667A2.333 2.333 0 0 0 21 14h14a2.333 2.333 0 0 0 2.333-2.333V7A2.333 2.333 0 0 0 35 4.667"
  ></path>
  <path
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M18.667 9.333H14A4.667 4.667 0 0 0 9.334 14v32.666A4.667 4.667 0 0 0 14 51.333h28a4.667 4.667 0 0 0 4.667-4.667V45.5M37.334 9.333H42a4.67 4.67 0 0 1 4.037 2.333M18.667 42H21"
  ></path>
  <path
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M42.934 22.4a4.95 4.95 0 0 1 7 7L39.667 39.667 30.334 42l2.333-9.333z"
  ></path>
</svg>
</div>

<div class="rounded-full border-[3px] border-black p-2 bg-primary-300">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="56"
  height="56"
  fill="none"
  viewBox="0 0 56 56"
  size="24"
>
  <path
    fill="#fff"
    d="M32.667 42V14A4.667 4.667 0 0 0 28 9.333H9.334A4.667 4.667 0 0 0 4.667 14v25.666A2.333 2.333 0 0 0 7 42h4.667"
  ></path>
  <path
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M32.667 42V14A4.667 4.667 0 0 0 28 9.333H9.334A4.667 4.667 0 0 0 4.667 14v25.666A2.333 2.333 0 0 0 7 42h4.667M35 42H21"
  ></path>
  <path
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M50.65 41.317A2.33 2.33 0 0 1 49 42H32.667V18.667h8.213a2.33 2.33 0 0 1 1.82.877l8.12 10.15c.332.413.513.927.514 1.456v8.517c0 .619-.246 1.212-.684 1.65"
  ></path>
  <path
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M39.667 46.666a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333m-23.333 0a4.667 4.667 0 1 0 0-9.333 4.667 4.667 0 0 0 0 9.333"
  ></path>
</svg>
</div>

<div class="rounded-full border-[3px] border-black p-2 bg-rose-300">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="56"
  height="56"
  fill="none"
  viewBox="0 0 56 56"
  size="24"
>
  <path
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M28 51.334c12.887 0 23.334-10.447 23.334-23.334C51.334 15.114 40.887 4.667 28 4.667 15.114 4.667 4.667 15.114 4.667 28c0 12.887 10.447 23.334 23.333 23.334"
  ></path>
  <path
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M18.667 32.667s3.5 4.667 9.333 4.667 9.334-4.667 9.334-4.667M21 21h.023M35 21h.023"
  ></path>
</svg>
</div>

<div class="rounded-full border-[3px] border-black p-2 bg-yellow-300">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="56"
  height="56"
  fill="none"
  viewBox="0 0 56 56"
  size="24"
>
  <path
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M19 19.667c-4.666 7-9.333 8.167-16.333 9.333l18.667 23.334C26 50 35.334 40.667 35.334 36"
  ></path>
  <path
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M31.833 41.833 8.5 36"
  ></path>
  <path
    fill="#fff"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="3"
    d="M40.864 7.136 30.667 17.333l-3.71-3.71a4.667 4.667 0 0 0-6.58 0l-3.71 3.71 21 21 3.71-3.71a4.666 4.666 0 0 0 0-6.58l-3.71-3.71 10.197-10.197a4.95 4.95 0 0 0-7-7"
  ></path>
</svg>
</div> */
}
