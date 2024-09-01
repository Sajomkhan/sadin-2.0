import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col">
            {/* NAVBAR */}
            <div className="bg-white h_nav flex items-center px-4 sticky top-0 z-20 border-b-2 border-slate-100">
              <Navbar />
            </div>

            <div className="flex gap-0.5">
              {/* SIDEBAR */}
              <div className="w-1/6 bg-white rounded-b-md p-7 pb-24 sticky top-0 z-10 ">
                <Sidebar />
              </div>

              {/* BODY */}
              <div className="w-5/6 bg-white rounded-b-md py-4 px-12 ">{children}</div>
            </div>
          </div>
          <div></div>
        </div>
      </body>
    </html>
  );
}
