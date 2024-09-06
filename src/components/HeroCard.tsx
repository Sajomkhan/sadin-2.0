import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="flex gap-5 w-fit border border-slate-200 shadow-md rounded-md">
      <div className="h-48 w-80 relative">
        <Image
          src={"/news/coordinators.webp"}
          alt=""
          fill
          className="object-cover rounded-l-md"
        />
      </div>
      <div className="w-80 flex flex-col text-sm py-3">
        <div className="font-semibold">
          <p className="text-lg">{"Saiful Ajom Khan"}</p>
          <p className="">{"Engineer"}</p>
          <p className="">Age: {42} years</p>
          <p className="">{"Pangsha, Madhabpasha, Barishal."}</p>
        </div>
        <p className="mt-2.5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          eveniet accusantium, perferendis modi labore.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
