// "use client";
// import { FormEvent, useState } from "react";
// import Form from "../../components/custom/Form";
// import Input from "../../components/custom/Input";
// import { Button } from "../../components/ui/button";
// import FormRowVertical from "../../components/custom/FormRowVertical";
// import { useLogin } from "./useLogin";

// export default function Page() {
//   const [email, setEmail] = useState<string>("example@g.com");
//   const [password, setPassword] = useState<string>("password");
//   const { login, isPending } = useLogin();

//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (!email || !password) return;
//     login(
//       { email, password },
//       {
//         onSettled: () => {
//           setEmail("");
//           setPassword("");
//         },
//       }
//     );
//   }

//   return (
//     <div className="grid grid-cols-[48rem] content-center justify-center gap-[3.2rem] bg-grey-50 min-h-screen">
//       <h2 className="text-3xl font-semibold">침착맨 굿즈에 로그인하세요.</h2>

//       <Form onSubmit={handleSubmit}>
//         {/* <Form> */}
//         {/* <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"> */}
//         <FormRowVertical>
//           <Input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             // disabled={isPending}
//           />
//         </FormRowVertical>
//         <FormRowVertical>
//           <Input
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             // disabled={isPending}
//           />
//         </FormRowVertical>
//         <FormRowVertical>
//           <Button size="large" disabled={isPending}>
//             {!isPending ? "로그인" : "기다려주세요"}
//           </Button>
//         </FormRowVertical>
//       </Form>
//     </div>
//   );
// }

export default function Page() {
  return <div>not used</div>;
}
