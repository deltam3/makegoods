import type { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[9999999] bg-white">
        <DialogHeader>
          <div className="relative mx-auto w-24 h-24 mb-2">
            <Image
              src="/step-1.jpg"
              alt="로그인 안녕"
              className="object-contain"
              fill
            />
          </div>
          <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
            로그인
          </DialogTitle>
          <DialogDescription className="text-base text-center py-2">
            <span className="font-medium text-zinc-900">
              여기까지 작업이 안전하게 저장되었습니다.
            </span>{" "}
            {/* 로그인을 하시거나 비회원으로 주문하실 수 있습니다. */}
            로그인을 하시거나 회원가입 부탁드립니다.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center gap-2 divide-gray-200">
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline" })}
          >
            로그인
          </Link>

          <Link
            href="/sign-up"
            className={buttonVariants({ variant: "default" })}
          >
            회원가입
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
