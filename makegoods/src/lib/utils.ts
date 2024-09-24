import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "침착맨 굿즈 - 침착맨의 모든 순간을 데일리 아이템에 각인하기",
  description = "침착맨의 모든 순간을 데일리 아이템에 각인하기",
  image = "/logo.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@침착맨",
    },
    icons,
    metadataBase: new URL("https://makegoods.vercel.app/"),
  };
}
