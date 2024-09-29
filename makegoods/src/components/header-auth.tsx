import { signOutAction } from "../app/actions";
import { hasEnvVars } from "../../utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { createClient } from "../../utils/supabase/server";
import { ArrowRight } from "lucide-react";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  if (isAdmin) {
    return (
      <div className="flex items-center gap-4">
        {/* {user.email}님! */}
        <span className="hidden md:block">{user.email}님!</span>
        <form action={signOutAction}>
          <Button type="submit" variant={"outline"}>
            로그아웃
          </Button>
        </form>
        <Link
          href="/mypage"
          className={buttonVariants({
            size: "sm",
            className: "flex items-center gap-1",
          })}
        >
          내 정보
        </Link>
        <Link
          href="/admin"
          className={buttonVariants({
            size: "sm",
            className: "flex items-center gap-1",
          })}
        >
          관리자
        </Link>
        {/* <Link
          href="/configure/upload"
          className={buttonVariants({
            size: "sm",
            className: "hidden sm:flex items-center gap-1",
          })}
        >
          굿즈 제작하기
          <ArrowRight className="ml-1.5 h-5 w-5" />
        </Link> */}
      </div>
    );
  }

  return user ? (
    <div className="flex items-center gap-4">
      <span className="hidden md:block">{user.email}님!</span>
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          로그아웃
        </Button>
      </form>
      <Link
        href="/mypage"
        className={buttonVariants({
          size: "sm",
          className: "flex items-center gap-1",
        })}
      >
        내 정보
      </Link>
      {/* <Link
        href="/configure/upload"
        className={buttonVariants({
          size: "sm",
          className: "hidden sm:flex items-center gap-1",
        })}
      >
        굿즈 제작하기
        <ArrowRight className="ml-1.5 h-5 w-5" />
      </Link> */}
    </div>
  ) : (
    <div className="flex gap-2">
      <Link href="/sign-in" passHref>
        <Button size="sm" variant={"outline"}>
          로그인
        </Button>
      </Link>
      <Link href="/sign-up" passHref>
        <Button size="sm" variant={"outline"}>
          회원가입
        </Button>
      </Link>
      {/* <Link
        href="/configure/upload"
        className={buttonVariants({
          size: "sm",
          className: "hidden sm:flex items-center gap-1",
        })}
      >
        굿즈 제작하기
        <ArrowRight className="ml-1.5 h-5 w-5" />
      </Link> */}
    </div>
  );
}
