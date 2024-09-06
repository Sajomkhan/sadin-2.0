import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadhin-02",
  description: `On 15 July 2024, students of Dhaka University were sitting with placards and flags in a peaceful protest calling for reforms on the quota allocation for government jobs in Bangladesh.  Suddenly, they were attacked by individuals armed with rods, sticks and clubs with a few even brandishing revolvers. Within hours, a pattern emerged across the country with similar attacks coordinated by people believed to be members of the Bangladesh Chatra League (BCL), a group affiliated with the ruling Awami League (AL), against student protesters. The six coordinators of the students against discrimination, a platform that waged the quota reform movement, have been released from the custody of the Detective Branch (DB) of the Dhaka Metropolitan Police (DMP). They came out of the DB office around 1:30 pm in a black car. DB’s Ramna zone additional commissioner (ADC) Azhar Mukul confirmed their release. Earlier, the families of the six coordinators entered into the DB office.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1400px] mx-auto bg-white">
          <div className="flex flex-col">
            {/* NAVBAR */}
            <div className="h_nav flex items-center px-7 sticky top-0 z-20 bg-white border-b-2 border-slate-200">
              <Navbar />
            </div>

            <div className="flex gap-0.5">
              {/* SIDEBAR */}
              <div className="w-1/6 rounded-b-md p-7 pb-24 sticky top-0 z-10 border-r-2 border-slate-200">
                <Sidebar />
              </div>

              {/* BODY */}
              <div className="w-5/6 rounded-b-md py-4 px-12 ">{children}</div>
            </div>
          </div>
          <div></div>
        </div>
      </body>
    </html>
  );
}
