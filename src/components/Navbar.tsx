"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname()

  let headline 
  
  switch (pathname) {

    case "/":
      headline = "What happened during those days";
      break;

    case "/martyr_list":
      headline = "The List of the Martyr of the Cota Movement";
      break;
  
  }

  return (
    <div className="w-full flex">
      {/* LOGO */}
      <Link href="/" className="w-1/6 text-2xl text-primary font-semibold">
        SADHIN-2.0
      </Link>
      {/* HEADLINE */}
      <div className="w-5/6">
          <h4 className="text-center">{headline}</h4>
      </div>
    </div>
  );
};

export default Navbar;
