import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";
import QueryProviders from "@/Providers/QueryProviders";
import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <QueryProviders>
          <Navbar />

          <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full grainy-light">
              {children}
            </div>
            <Footer />
          </main>

          <Toaster />
        </QueryProviders>
      </body>
    </html>
  );
}
