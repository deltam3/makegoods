import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";

import { createClient } from "../../../utils/supabase/server";
import StatusDropdown from "./StatusDropdown";

const Page = async () => {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!user || user.email !== ADMIN_EMAIL) {
    return notFound();
  }

  const { data: orders, error } = await createClient()
    .from("Order")
    .select(`*`)
    .eq("ispaid", true)
    .gte(
      "createdat",
      new Date(new Date().setDate(new Date().getDate() - 7)).toISOString()
    )
    .order("createdat", { ascending: false });

  const { data: lastWeekSum, error: lastWeekError } = await createClient()
    .from("Order")
    .select("amount", { count: "exact", head: false })
    .eq("ispaid", true)
    .gte(
      "createdat",
      new Date(new Date().setDate(new Date().getDate() - 7)).toISOString()
    );

  const totalLastWeek = lastWeekSum.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  const { data: lastMonthSum, error: lastMonthError } = await createClient()
    .from("Order")
    .select("amount", { count: "exact", head: false })
    .eq("ispaid", true)
    .gte(
      "createdat",
      new Date(new Date().setDate(new Date().getDate() - 30)).toISOString()
    );

  const totalLastMonth = lastMonthSum.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  const WEEKLY_GOAL = 100_000_0;
  const MONTHLY_GOAL = 400_000_0;

  return (
    // <div className="flex min-h-screen w-full bg-muted/40">
    <div className="flex min-h-screen w-full">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>지난 7일</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(totalLastWeek ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {formatPrice(WEEKLY_GOAL)} 목표 금액
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={((totalLastWeek ?? 0) * 100) / WEEKLY_GOAL} />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>지난 30일</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(totalLastMonth ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {formatPrice(MONTHLY_GOAL)} 목표 금액
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  value={((totalLastMonth ?? 0) * 100) / MONTHLY_GOAL}
                />
              </CardFooter>
            </Card>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">주문 진행 정보</h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>고객 정보</TableHead>
                <TableHead className="hidden sm:table-cell">상태</TableHead>
                <TableHead className="hidden sm:table-cell">구매일자</TableHead>
                <TableHead className="text-right">금액</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="bg-accent">
                  <TableCell>
                    <div className="font-medium">
                      주소 : {order.shippingaddress}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      고객 Id: {order.userid}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <StatusDropdown id={order.id} orderStatus={order.status} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(order.createdat).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {formatPrice(order.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Page;
