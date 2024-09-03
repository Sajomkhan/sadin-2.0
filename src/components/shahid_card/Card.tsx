import { ShahidDataType } from "@/lib/data";
import Image from "next/image";

const Card = ({ shahidData }: { shahidData: ShahidDataType[] }) => {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8">
      {shahidData.map((shahid, index) => (
        <div className="w-48 flex flex-col gap-5" key={index}>
          <div className="h-60 w-48 relative rounded-lg">
            <Image src={shahid.photo} alt="" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-0.5 text-sm">
            <p className="font-semibold text-base">{shahid.name}</p>
            <p className="text-gray-500">{shahid.occupation}</p>
            <p>{shahid.address}</p>
            <p className="">Age: {shahid.age}</p>
            {/* <p>{shahid.death_place}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
