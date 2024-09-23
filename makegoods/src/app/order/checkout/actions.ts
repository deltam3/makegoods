"use server";

import { createClient } from "../../../../utils/supabase/server";
import { redirect } from "next/navigation";

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";

export const postOrder = async (formData: FormData) => {
  const address = formData.get("address") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const configId = formData.get("configId") as string;
  const userId = formData.get("userId") as string;

  const supabase = createClient();

  if (!userId || !configId) {
    throw new Error("로그인해야 합니다.");
  }

  const { data: configuration } = await supabase
    .from("configuration")
    .select("*")
    .eq("id", configId)
    .single();

  const { finish, material } = configuration;

  let price = BASE_PRICE;
  if (finish === "present") price += PRODUCT_PRICES.finish.present;
  if (material === "poly") price += PRODUCT_PRICES.material.poly;

  const { data, error } = await supabase
    .from("Order")
    .insert([
      {
        amount: price,
        shippingaddress: address,
        phonenumber: phoneNumber,
        userid: userId,
        configurationid: configId,
      },
    ])
    .select();

  return redirect("/buy-result");
};
