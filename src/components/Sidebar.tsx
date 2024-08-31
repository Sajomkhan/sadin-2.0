"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const sidebarMenu = [
  {
    link: "/",
    menu: "Events Flow",
  },
  {
    link: "/shahid_list",
    menu: "Martyr List",
  },
  {
    link: "/our_heros",
    menu: "Our Heros",
  },
  {
    link: "/government_act",
    menu: "Government Act",
  },
  {
    link: "/police_role",
    menu: "Role of Police",
  },
  {
    link: "/army_role",
    menu: "Role of Army",
  },
];

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-4">
      {sidebarMenu.map((menu) => (
        <div className={`py-0.5 ${menu.link === pathname ? "border-b border-gray-500" : "border-b"} hover:border-gray-500 w-fit`} key={menu.menu}>
          <Link href={menu.link} className="">
            {menu.menu}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
