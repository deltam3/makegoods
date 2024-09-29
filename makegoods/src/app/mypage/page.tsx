import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import Tshirt from "@/components/Tshirt";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const LABEL_MAP = {
  awaiting_shipment: "배송전",
  fulfilled: "배송완료",
  shipped: "배송시작",
};

const MATERIAL_MAP = {
  cotton: "면100% (기본)",
  poly: "폴리에스티르 (+5000원)",
};

const FINISH_MAP = {
  normal: "기본 포장",
  present: "선물 포장 (+3000원)",
};

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data: allOrders, error: allOrdersError } = await supabase
    .from("Order")
    .select("*", { count: "exact", head: false })
    .eq("ispaid", true)
    .eq("userid", user.id)
    .gte(
      "createdat",
      new Date(new Date().setDate(new Date().getDate() - 30)).toISOString()
    );

  if (allOrdersError) {
    console.error("Error fetching orders:", allOrdersError);
    return <div>orders 가져오기 에러</div>;
  }

  const configurationIds = allOrders.map((order) => order.configurationid);

  const { data: configurations, error: configError } = await supabase
    .from("configuration")
    .select("*")
    .in("id", configurationIds);

  if (configError) {
    console.error("Error fetching configurations:", configError);
    return <div>configurations 가져오기 에러</div>;
  }

  const configMap = configurations.reduce((acc, config) => {
    acc[config.id] = config;
    return acc;
  }, {});

  return (
    <MaxWidthWrapper>
      <div className="flex min-h-screen w-full">
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
          <div className="flex flex-col gap-16">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              구매 내역
            </h3>
            {/* <div className="grid gap-4 grid-cols-2 lg:grid-cols-3"> */}
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              {allOrders.map((order) => {
                const config = configMap[order.configurationid];
                return (
                  <Card key={order.id}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl">
                        {LABEL_MAP[order.status]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4 items-center">
                        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2">
                          <Tshirt
                            className="max-w-[150px]"
                            imgSrc={config?.croppedimageurl || ""}
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <CardDescription className="whitespace-nowrap">
                            {new Date(order.createdat).toLocaleDateString()}{" "}
                            결제
                          </CardDescription>
                          <p>{formatPrice(order.amount)}</p>
                          <CardDescription>
                            {MATERIAL_MAP[config?.material]}{" "}
                          </CardDescription>
                          <CardDescription>
                            {FINISH_MAP[config?.finish]}{" "}
                          </CardDescription>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
