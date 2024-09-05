"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type ViewSizeType = "small" | "big";

const Search = ({
  placeholder,
  viewSize,
}: {
  placeholder: string;
  viewSize: ViewSizeType;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    // uses 'useDebouncedCallback' due to prevent user's abusive interavtivitis
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 400);

  return (
    <div className="flex gap-7 items-center">
      <div className="flex gap-3 items-center w-96 border rounded-lg px-3 py-2">
        <Image src="/icon/search.png" alt="" width={18} height={18} />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full"
          onChange={handleSearch}
        />
      </div>
      {viewSize === "big" && (
        <Link href="/shahid_list" className="btn_l h-fit">
          View Small
        </Link>
      )}
      {viewSize === "small" && (
        <Link href="/shahid_card" className="h-fit border border-ground text-ground hover:bg-green-200">
          View Big
        </Link>
      )}
    </div>
  );
};

export default Search;
