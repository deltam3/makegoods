import { signInAction } from "@/app/actions";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <MaxWidthWrapper>
      <div className="w-[40%]">
        <form className="flex-1 flex flex-col min-w-64">
          <h1 className="text-2xl font-medium">로그인</h1>
          <p className="text-sm text-foreground">
            계정이 없으신가요?{" "}
            <Link
              className="text-foreground font-medium underline"
              href="/sign-up"
            >
              회원가입
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email">이메일</Label>
            <Input name="email" placeholder="you@example.com" required />
            <div className="flex justify-between items-center">
              <Label htmlFor="password">비밀번호</Label>
              <Link
                className="text-xs text-foreground underline"
                href="/forgot-password"
              >
                비밀번호 찾기
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              required
            />
            <SubmitButton pendingText="로그인중..." formAction={signInAction}>
              로그인
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
}
