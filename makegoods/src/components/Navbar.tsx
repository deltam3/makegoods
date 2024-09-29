import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

import HeaderAuth from "../components/header-auth";

const Navbar = async () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <div className="pointer-events-none">
            <Link href="/" className="z-40 ">
              <img
                src="/logo.png"
                className="object-fit w-[30%] pointer-events-auto"
              />
            </Link>
          </div>

          <HeaderAuth />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
