import Shahid_List_Table from "@/components/shahid_list/Shahid_List_Table";
import Search from "@/components/Search";
import { shahidData } from "@/lib/data";
import Single_Shahid from "@/components/shahid_list/Single_Shahid";
import Card from "@/components/shahid_card/Card";

const Shahid_Card_Page = ({ searchParams }: { searchParams: any }) => {
  const q = searchParams?.q || "";
  const q_name = searchParams?.name || "params not working";
  // const q = searchParams?.get("q") || "Params is not working";

  const regex = new RegExp(q, "i");

  const searchShahidList = shahidData.filter((item) =>
    Object.values(item).some((value) => regex.test(String(value)))
  );

  const shahidListProps =
    searchShahidList.length > 0 ? searchShahidList : shahidData;

  const p_single_shahid = shahidListProps.find(
    (value) => value.name === q_name
  );

  const single_shahid = p_single_shahid ? p_single_shahid : shahidListProps[0];

  return (
    <div className="flex flex-col gap-7 pb-7">
      <div className="flex gap-10">
        <Search placeholder="Search" viewSize="big" />
      </div>
      <Card shahidData={shahidListProps} />
    </div>
  );
};

export default Shahid_Card_Page;
