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

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              variant={"outline"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-in">로그인</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-up">회원가입</Link>
            </Button>

            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1",
              })}
            >
              굿즈 제작하기
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4">
      {user.email}님!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          로그아웃
        </Button>
      </form>
      <Link
        href="/configure/upload"
        className={buttonVariants({
          size: "sm",
          className: "hidden sm:flex items-center gap-1",
        })}
      >
        굿즈 제작하기
        <ArrowRight className="ml-1.5 h-5 w-5" />
      </Link>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/login">로그인</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">회원가입</Link>
      </Button>
      <Link
        href="/configure/upload"
        className={buttonVariants({
          size: "sm",
          className: "hidden sm:flex items-center gap-1",
        })}
      >
        굿즈 제작하기
        <ArrowRight className="ml-1.5 h-5 w-5" />
      </Link>
    </div>
  );
}
