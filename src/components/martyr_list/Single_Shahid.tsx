import { ShahidDataType } from "@/lib/data";
import Image from "next/image";

const data: ShahidDataType = {
  id: 1,
  name: "Abu Sayed",
  occupation: "Student",
  address: "Begum Rokeya University, Rangpur",
  death_place: "Shahabag",
  death_date: "16th July, 2024",
  birth_date: "",
  age: 23,
  gender: "Male",
  photo: "https://shohid.info/shohid/abu-sayed.jpg",
};

const Single_Shahid = () => {
  return (
    <div className="">
      <div className="flex gap-10 mt-5">
        <div className="w-1/3 h-80 relative">
          <Image
            src={data.photo}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-8">
          <div className="flex gap-10">
            <div className="w-1/5 flex flex-col gap-2 font-semibold">
              <p>Name:</p>
              <p>Occupation:</p>
              <p>Address:</p>
              <p>Age:</p>
              <p>Death Place:</p>
            </div>
            <div className="w-4/5 flex flex-col gap-2">
              <p>{data.name}</p>
              <p>{data.occupation}</p>
              <p>{data.address}</p>
              <p>{data.age}</p>
              <p>{data.death_place}</p>
            </div>
          </div>
          <div className="h-screen bg-blue-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Single_Shahid;
