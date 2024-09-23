"use client";

import { Button } from "@/components/ui/button";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { formatPrice } from "@/lib/utils";
import { SIZES } from "@/validators/option-validator";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { useRouter } from "next/navigation";
import Tshirt from "@/components/Tshirt";
import LoginModal from "@/components/LoginModal";

type Configuration = {
  id: string;
  width: number;
  height: number;
  imageurl: string;
  size: string;
  material?: string;
  finish?: string;
  croppedimageurl?: string;
  Order: any;
};

const DesignPreview = ({
  configuration,
  user,
}: {
  configuration: Configuration;
  user: any;
}) => {
  const router = useRouter();
  const { id } = configuration;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  useEffect(() => setShowConfetti(true));

  const { size, finish, material } = configuration;

  const { label: sizeLabel } = SIZES.options.find(
    ({ value }) => value === size
  )!;

  let totalPrice = BASE_PRICE;
  if (material === "poly") totalPrice += PRODUCT_PRICES.material.poly;
  if (finish === "present") totalPrice += PRODUCT_PRICES.finish.present;

  const handleCheckout = () => {
    if (user) {
      router.push(`/order/checkout?id=${id}`);
    } else {
      localStorage.setItem("configurationId", id);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 300, spread: 190 }}
        />
      </div>
      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className="mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2">
          <Tshirt
            className="max-w-[150px] md:max-w-full"
            imgSrc={configuration.croppedimageurl!}
          ></Tshirt>
        </div>

        <div className="mt-6 sm:col-span-9 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            당신만의 침착맨 굿즈
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="h-4 w-4 text-primary" />
            당일배송 가능
          </div>
        </div>

        <div className="sm:col-span-12 md:col-span-9 text-base">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-zinc-950">제품 설명</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>최고급 재질</li>
                <li>국산 제작</li>
                <li>모든 수익은 침착맨의 사리사욕을 채우는 데 사용됩니다.</li>
                <li>1년 A/S</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">주의 사항</p>
              <ol className="mt-3 text-zinc-700 list-disc list-inside">
                <li>부적절한 이미지 사용 시 제작 거부</li>
                <li>2024년 동안은 무료로 팬들에게 굿즈 제공</li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-600">기본 가격</p>
                  <span className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-gray-600">사이즈</p>
                  <span className="font-medium text-gray-900">{sizeLabel}</span>
                </div>

                {finish === "present" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">선물용 포장 여부</p>
                    <span className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.present)}
                    </span>
                  </div>
                ) : null}

                {material === "poly" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-gray-600">폴리에스티르</p>
                    <span className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.poly)}
                    </span>
                  </div>
                ) : null}

                <div className="my-2 h-px bg-gray-200" />

                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-gray-900">총 금액</p>

                  <div className="font-semibold text-gray-900 text-right">
                    <div className="font-semibold text-gray-900 line-through">
                      {formatPrice(totalPrice)}
                    </div>
                    2024년 12월 31일까지 무료
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button
                onClick={() => handleCheckout()}
                className="px-4 sm:px-6 lg:px-8"
              >
                무료로 굿즈 주문하기{" "}
                <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPreview;
