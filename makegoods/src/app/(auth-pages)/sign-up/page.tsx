import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">회원가입</h1>
        <p className="text-sm text text-foreground">
          이미 가입하션사요?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            로그인하기
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">이메일</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="회원가입중...">
            회원가입하기
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
