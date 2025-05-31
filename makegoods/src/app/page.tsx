import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Bag from "@/components/Bag";
// import Tshirt from "@/components/Tshirt";
import { ArrowRight, Check, Star } from "lucide-react";
import { Icons } from "@/components/Icons";
import { Reviews } from "../components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Tshirt from "@/components/Tshirt";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        {/* <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52"> */}
        <MaxWidthWrapper className="flex flex-col lg:flex-row">
          <div className="col-span-1 px-6 lg:px-0 lg:pt-4 py-5">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-4sxl">
                당신만의
                <br />
                <span className="bg-yellow-400 px-2 text-white">굿즈</span>
                를
                <br />
                만들어봐요
              </h1>
              <div className="flex align-middle gap-5">
                {/* <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  침착맨의 모든 순간을,{" "}
                  <span className="font-semibold">특별하고</span> 다양한 굿즈에
                  각인해보세요.
                </p> */}
                <div className="flex justify-center align-middle">
                  <Link
                    className={buttonVariants({
                      size: "lg",
                      className: "mx-auto mt-8",
                    })}
                    href="/configure/upload"
                  >
                    무료로 굿즈 제작하기{" "}
                  </Link>
                </div>
              </div>
            </div>

            {/* <ul className="mt-8 space-y-2 text-left font-medium flex flex-col lg:items-start items-center">
              <div className="space-y-2 flex gap-10 justify-center ">
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
                  <span className="whitespace-nowrap">당일 배송</span>
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
                  <span className="whitespace-nowrap">1 년 A/S</span>
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
                  <span className="whitespace-nowrap"> 싸인</span>
                </li>
              </div>
            </ul> */}
          </div>

          <div className="px-6 lg:px-8 col-span-2 py-5">
            <div className="grid grid-cols-3">
              <div className="relative col-span-1 flex justify-center">
                <img
                  src="/testimonials/4.jpg"
                  className="rounded-md object-contain w-full"
                />
              </div>

              <div className="col-span-1 flex items-center justify-center h-full">
                <img src="/arrow2.png" className="w-[50%] md:w-full h-auto" />
              </div>
              <div className="col-span-1">
                <Bag className="w-30 md:w-60" imgSrc="/testimonials/4.jpg" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 grainy-dark py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              고객님들의{" "}
              <span className="relative px-2">
                소중한{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-yellow-400" />
              </span>{" "}
              후기
            </h2>
            <img src="/testimonial.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "최근에 새로운 에코 백을 구매했는데,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    정말 만족스러워서
                  </span>{" "}
                  여러분과 공유하고 싶어요. 에코 백은 저에게 중요한 액세서리 중
                  하나인데, 스타일과 기능성 모두 신경 쓰기 때문에 꼼꼼히
                  선택하게 되더라고요."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-2.webp"
                  alt="차은우"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">차은우</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-yellow-400" />
                    <p className="text-sm">에코 백 구매</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "티셔츠는 기본에 충실하고,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    색상과 핏이 굉장히 마음에 듭니다.
                  </span>
                  "
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="유재석"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">유재석</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-yellow-400" />
                    <p className="text-sm">티셔츠 구매</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                원하는 이미지로{" "}
                <span className="relative px-2 bg-primary text-white">
                  당신만의 굿즈를
                </span>{" "}
                제작하세요.
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow2.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 w-[15%]"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/testimonials/6.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Bag className="w-60" imgSrc="/testimonials/6.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />
              고급 재질
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />
              국산 제작
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />
              빠른 배송
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-primary inline mr-1.5" />1 년 A/S
              보장
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                지금 당장 굿즈 제작 <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
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
