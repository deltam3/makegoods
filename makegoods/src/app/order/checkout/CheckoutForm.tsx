import React from "react";

import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { postOrder } from "./actions";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type CheckoutFormType = {
  configId: string;
  userId: string;
};

const CheckoutForm = ({ configId, userId }: CheckoutFormType) => {
  return (
    <MaxWidthWrapper>
      {/* <div className="flex justify-center align-middle mt-10"> */}
      <div className="mt-10">
        <form>
          <h2 className="tracking-tight font-bold text-3xl">내 정보</h2>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="address">주소</Label>
            <Input name="address" placeholder="서울시" required />
            <Label htmlFor="phoneNumber">연락처</Label>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="연락처"
              required
            />

            <Input type="hidden" name="configId" value={configId} required />
            <Input type="hidden" name="userId" value={userId} required />
            <SubmitButton pendingText="진행중..." formAction={postOrder}>
              무료로 굿즈 받기
            </SubmitButton>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default CheckoutForm;
