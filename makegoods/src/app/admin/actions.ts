"use server";
import { createClient } from "../../../utils/supabase/server";

export const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: string;
}) => {
  const { data, error } = await createClient()
    .from("Order")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) {
    console.error("주문 상태 업데이트 에러:", error);
    throw new Error("주문상태 업데이트 에러");
  }

  return data;
};
