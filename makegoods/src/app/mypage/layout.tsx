import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";
import MyNav from "./MyNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <div className="grid grid-cols-5 gap-1">
        <div className="col-span-1">
          <div className="mt-4"></div>
          <MyNav />
        </div>

        <div className="col-span-4">
          <div className="mt-4"></div>
          {children}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Layout;
