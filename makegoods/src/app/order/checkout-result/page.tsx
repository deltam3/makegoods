import { createClient } from "../../../../utils/supabase/server";
import { notFound } from "next/navigation";

const Page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return notFound();
  }

  let { data: order, error } = await supabase
    .from("Order")
    .select("id, userid")
    .eq("userid", user.id)
    .limit(1);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-base font-medium text-primary">감사합니다!</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            당신만의 멋진 침착맨 굿즈!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            오후 2시 전 주문이면 당일 배송입니다.
          </p>

          <div className="mt-12 text-sm font-medium">
            <p className="text-zinc-900">주문번호</p>
            <p className="mt-2 text-zinc-500">{order[0].id}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-zinc-900">
              침착맨과의 팬미팅 당첨권도 배송됩니다!
            </h4>
            <p className="mt-2 text-sm text-zinc-600">
              침착맨과 함께하는 즐거운 시간을 놓치지 마세요! 많은 참여
              부탁드립니다! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
