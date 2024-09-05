import { ShahidDataType } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Card = ({ shahidData }: { shahidData: ShahidDataType[] }) => {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8">
      {shahidData.map((shahid, index) => (
        <Link href={`/shahid_card/${shahid.id}`} className="w-48 flex flex-col gap-5" key={index} >
          <div className="h-52 w-48 relative rounded-lg">
            <Image src={shahid.photo} alt="" fill className="object-cover" />
          </div>
          <div className="w-48 flex flex-col gap-0.5 text-sm">
            <p className="font-semibold text-base">{shahid.name}</p>
            <p className="">{shahid.occupation}</p>
            <p className="">Age: {shahid.age ? shahid.age : 25} years</p>
            <p className="text-sm">{shahid.address}</p>
            {/* <p>{shahid.death_place}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
