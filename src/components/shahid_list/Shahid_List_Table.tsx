"use client";
import { ShahidDataType } from "@/lib/data";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Shahid_List_Table = ({
  shahidData,
}: {
  shahidData: ShahidDataType[];
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [listSizeLarg, setListSizeLarg] = useState(true)

  const handleSearch = (name: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("name", name);
    replace(`${pathname}?${params}`);
    setListSizeLarg(false)
  };

  return (
    <div className="">
      <div className={`overflow-auto ${listSizeLarg ? " max-h-[420px]": " max-h-[210px]"} bg-white shadow-lg rounded-lg border border-slate-20`}>
        <table className="0">
          <thead className="sticky top-0 border-b z-10 border-slate-200 bg-slate-200 shadow-sm " onMouseEnter={()=>setListSizeLarg(true)}>
            <tr className="h-12">
              <th className="w-20 text-center">Sl.No.</th>
              <th className="w-40 text-start">Photo</th>
              <th className="w-60 text-start">Name</th>
              <th className="w-36 text-start">Ocupation</th>
              <th className="w-20 text-start">Age</th>
              <th className="w-80 text-start">Address</th>
              <th className="w-32 text-start">Death Time</th>
              <th className="w-60 text-start">Death Place</th>
            </tr>
          </thead>
          <tbody>
            {shahidData.map((item, index) => (
              <tr
                className="h-16 text-sm border-b border-slate-200 shadow-sm hover:bg-slate-100 cursor-pointer"
                key={index}
                onClick={()=>handleSearch(item.name)}
              >
                <td className="text-center font-semibold">{index + 1}</td>
                <td>
                  <div className="h-12 w-20 relative py-4">
                    <Image
                      src={item.photo}
                      alt=""
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                </td>
                <td className="font-semibold">{item.name}</td>
                <td>{item.occupation}</td>
                <td className="pl-2">{item.age}</td>
                <td>{item.address}</td>
                <td className="p-3">{item.death_date.split(",")[0]}</td>
                <td>{item.death_place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shahid_List_Table;
