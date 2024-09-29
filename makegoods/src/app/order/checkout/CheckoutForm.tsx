"use client";
import React from "react";

import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { postOrder } from "./actions";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type CheckoutFormType = {
  configId: string;
  userId: string;
  userAddress: string;
  userPhone: string;
};

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

const CheckoutForm = ({
  configId,
  userId,
  userAddress,
  userPhone,
}: CheckoutFormType) => {
  const [olduserPhone, setUserPhone] = useState(userPhone);
  const [olduserAddress, setUserAddress] = useState(userAddress);
  const { toast } = useToast();
  const { mutate: saveSettings, isPending: isSettingsPending } = useMutation({
    mutationKey: ["save-settings"],
    mutationFn: postOrder,
    onError: () => {
      toast({
        title: "에러 발생",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "성공",
        description: "성공!.",
        variant: "success",
      });
    },
  });

  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <form>
          <h2 className="tracking-tight font-bold text-3xl">내 정보</h2>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="address">주소</Label>
            <Input
              name="address"
              placeholder="서울시"
              value={olduserAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              required
            />
            <Label htmlFor="phoneNumber">연락처</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={olduserPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              placeholder="연락처"
              required
            />

            <Input type="hidden" name="configId" value={configId} required />
            <Input type="hidden" name="userId" value={userId} required />
            <SubmitButton pendingText="진행중..." formAction={saveSettings}>
              무료로 굿즈 받기
            </SubmitButton>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default CheckoutForm;
