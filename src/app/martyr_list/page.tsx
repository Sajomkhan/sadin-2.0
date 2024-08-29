import Martyr_Details from "@/components/martyr_list/Martyr_Details";
import Martyr_List from "@/components/martyr_list/Martyr_List";


const Shahid_List = () => {

  return <div className="flex flex-col gap-8">
    <Martyr_List />
    <Martyr_Details />
  </div>;
};

export default Shahid_List;
