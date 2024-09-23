import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      // console.log("QUERY");
      // const configLocal = localStorage.getItem("configurationId");

      // if (configLocal) {
      // router.push(`/order/checkout?id=${configLocal}`);
      // router.push(`/order/checkout?id=${configLocal}`);
      // }
      // navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      // toast.error(`입력된 이메일이나 비밀번호가 틀렸습니다. ${err}`);
    },
  });

  return { login, isPending };
}
