"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SubmitButton } from "@/components/submit-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { updatePhone, changePassword } from "./actions";

import { useState } from "react";

type MyInfoFormPropsType = {
  user: {
    phone: string;
  };
};

import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

const MyInfoForm = ({ user }: MyInfoFormPropsType) => {
  const [userPhone, setUserPhone] = useState(user.phone);
  const { toast } = useToast();

  const { mutate: savePhone, isPending: isPhonePending } = useMutation({
    mutationKey: ["save-phone"],
    mutationFn: updatePhone,
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
        description: "전화번호 변경 성공!.",
        variant: "success",
      });
    },
  });

  const { mutate: savePassword, isPending: isPasswordPending } = useMutation({
    mutationKey: ["save-password"],
    mutationFn: changePassword,
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
        description: "비밀번호 변경 성공!.",
        variant: "success",
      });
    },
  });

  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <h2 className="tracking-tight font-bold text-3xl">내 정보</h2>
        <div className="flex flex-col [&>input]:mb-3 mt-8 gap-4">
          {/* <Label htmlFor="address">주소</Label>
            <Input name="address" placeholder="서울시" required /> */}
          <Card>
            <CardHeader>
              <Label htmlFor="phoneNumber">연락처</Label>
            </CardHeader>
            <CardContent>
              <form>
                <Input
                  type="text"
                  name="phoneNumber"
                  placeholder="연락처"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  required
                />

                <div className="flex justify-end mt-2">
                  <SubmitButton pendingText="진행중..." formAction={savePhone}>
                    저장
                  </SubmitButton>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <form>
              <CardHeader>
                <Label htmlFor="password">예전 비밀번호</Label>
              </CardHeader>
              <CardContent>
                <Input
                  type="password"
                  name="oldpassword"
                  placeholder="예전 비밀번호"
                  required
                />
              </CardContent>
              <CardHeader>
                <Label htmlFor="password">새로운 비밀번호</Label>
              </CardHeader>
              <CardContent>
                <Input
                  type="password"
                  name="newpassword"
                  placeholder="새로운 비밀번호"
                  required
                />
              </CardContent>
              <CardHeader>
                <Label htmlFor="password">새로운 비밀번호 재확인</Label>
              </CardHeader>
              <CardContent>
                <Input
                  type="password"
                  name="renewpassword"
                  placeholder="새로운 비밀번호 재확인"
                  required
                />
                <div className="flex justify-end mt-2">
                  <SubmitButton
                    pendingText="진행중..."
                    formAction={savePassword}
                  >
                    저장
                  </SubmitButton>
                </div>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default MyInfoForm;
