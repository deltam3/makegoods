import { PRODUCT_PRICES } from "@/config/products";

export const SIZES = {
  name: "size",
  options: [
    {
      label: "S",
      value: "s",
    },
    {
      label: "M",
      value: "m",
    },
    {
      label: "L",
      value: "l",
    },
    {
      label: "XL",
      value: "xl",
    },
  ],
};

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "면100%",
      value: "cotton",
      description: undefined,
      price: PRODUCT_PRICES.material.cotton,
    },
    {
      label: "폴리에스티르",
      value: "poly",
      description: "내구성이 높은 재질",
      price: PRODUCT_PRICES.material.poly,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "일반 포장",
      value: "normal",
      description: undefined,
      price: PRODUCT_PRICES.finish.normal,
    },
    {
      label: "선물 포장",
      value: "present",
      description: "소중한 지인을 위한 화려한 포장",
      price: PRODUCT_PRICES.finish.present,
    },
  ],
} as const;
