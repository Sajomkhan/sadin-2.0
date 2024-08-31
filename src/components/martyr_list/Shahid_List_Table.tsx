import { ShahidDataType } from "@/lib/data";
import Image from "next/image";

const Shahid_List_Table = ({
  shahidData,
}: {
  shahidData: ShahidDataType[];
}) => {
  
  return (
    <div className="">
      <div className="overflow-auto max-h-[420px] bg-white shadow-lg rounded-lg border border-slate-20">
        <table className="0">
          <thead className="sticky top-0 border-b z-10 border-slate-200 bg-slate-200 shadow-sm">
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
            {shahidData.map((list, index) => (
              <tr
                className="h-16 text-sm border-b border-slate-200 shadow-sm hover:bg-slate-100"
                key={index}
              >
                <td className="text-center font-semibold">{index + 1}</td>
                <td>
                  <div className="h-12 w-20 relative py-4">
                    <Image
                      src={list.photo}
                      alt=""
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                </td>
                <td className="font-semibold">{list.name}</td>
                <td>{list.occupation}</td>
                <td className="pl-2">{list.age}</td>
                <td>{list.address}</td>
                <td className="p-3">{list.death_date.split(",")[0]}</td>
                <td>{list.death_place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shahid_List_Table;
