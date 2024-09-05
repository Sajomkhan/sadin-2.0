import { news } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

const News = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
    {news.map((item, index) => (
      <Link
        href={item.url}
        className="flex gap-10 cursor-pointer p-4 rounded-lg hover:bg-slate-200 ease-linear duration-300"
        key={index}
      >
        <div className="w-2/5 h-48 relative">
          <Image
            src={item.photo}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="text-sm">{item.publisher}</div>
          <div className="">{item.desc}</div>
        </div>
      </Link>
    ))}
  </div>
  )
}

export default News