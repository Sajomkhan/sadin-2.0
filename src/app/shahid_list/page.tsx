import Shahid_List_Table from "@/components/martyr_list/Shahid_List_Table";
import Search from "@/components/Search";
import { shahidData } from "@/lib/data";
import Single_Shahid from "@/components/martyr_list/Single_Shahid";

const Shahid_List = ({ searchParams }: {searchParams: any}) => {
  
  const q = searchParams?.q || "params not working";
  // const q = searchParams?.get("q") || "Params is not working";  

const regex = new RegExp(q, 'i');

const searchShahidList = shahidData.filter(item => 
    Object.values(item).some(value => regex.test(String(value)))
);

const shahidListProps = searchShahidList.length > 0 ? searchShahidList : shahidData

  return <div className="flex flex-col gap-5">
    <Search placeholder="Search"  />
    <Shahid_List_Table shahidData = {shahidListProps}/>
    <Single_Shahid />
  </div>;
};

export default Shahid_List;
