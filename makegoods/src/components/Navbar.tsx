import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import HeaderAuth from "../components/header-auth";

const Navbar = async () => {
  // const user = {
  //   email: "google@gmail.com",
  // };
  const user = false;
  const isAdmin = true;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <img src="/logo.png" className="w-[30%]" />
          </Link>
          <HeaderAuth />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
