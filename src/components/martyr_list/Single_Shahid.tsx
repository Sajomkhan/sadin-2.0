import { ShahidDataType } from "@/lib/data";
import Image from "next/image";

const Single_Shahid = ({
  single_shahid,
}: {
  single_shahid: ShahidDataType;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-10 mt-10 items-center">
        <div className="w-1/3 h-80 relative">
          <Image
            src={single_shahid?.photo}
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
              <p>{single_shahid?.name}</p>
              <p>{single_shahid?.occupation}</p>
              <p>{single_shahid?.address}</p>
              <p>{single_shahid?.age}</p>
              <p>{single_shahid?.death_place}</p>
            </div>
          </div>
            <p className="text-lg font-semibold mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              recusandae magni laborum incidunt sit quos labore iusto aperiam
              velit deserunt maxime!
            </p>
        </div>
      </div>
      <div className="whitespace-pre-line">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        veritatis dolores, possimus sed perspiciatis rem deleniti distinctio
        itaque neque dicta aliquam ad velit eveniet exercitationem eaque
        reiciendis! Cupiditate perspiciatis quos aspernatur consequatur iure
        molestiae consectetur dolores, nam non sequi illum doloremque laboriosam
        maxime veniam soluta modi distinctio in sapiente provident laudantium
        dolorum quas qui deleniti? Earum dignissimos illum dicta maiores
        aspernatur! Quisquam quaerat placeat quod dolor reprehenderit in sequi
        praesentium. Soluta laborum quis temporibus earum. Mollitia maiores
        optio ducimus quisquam voluptate in excepturi ea quam dignissimos fugit
        itaque, sed ut fuga accusamus architecto culpa pariatur animi aperiam
        odit recusandae. Maiores, libero delectus repellat molestias sint harum
        labore sit corporis accusantium qui beatae quae nesciunt reiciendis
        dolorum porro dolores sequi ipsa doloribus autem accusamus totam quod.
        Esse, a ipsa dolorum perferendis vero facilis amet tempora voluptatem
        fugiat error? Neque suscipit rerum consequatur rem asperiores tempora
        incidunt cumque, alias est beatae sint atque perferendis explicabo
        magnam maxime magni iure recusandae id nihil qui quae iusto quidem,
        inventore debitis. Veniam quis molestiae aut similique? Reprehenderit
        alias quas qui tempora rerum sapiente eum suscipit, tenetur ipsam fugiat
        nesciunt recusandae atque, totam fuga odio. Voluptatum suscipit odio
        obcaecati ab rem libero odit excepturi temporibus facere.
      </div>
    </div>
  );
};

export default Single_Shahid;
