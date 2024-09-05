import Single_Shahid from "@/components/shahid_list/Single_Shahid"
import { shahidData } from "@/lib/data"

const Page = ({ params }: { params: { id: number }}) => {

    const single_shahid = shahidData.find((item)=> item.id == params.id)

    if(!single_shahid) return <div>Shahid details not found</div>
    

  return (
    <div className='max-w-4xl mx-auto'>
        <Single_Shahid single_shahid={single_shahid} />
    </div>
  )
}

export default Page