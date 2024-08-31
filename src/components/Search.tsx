"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: {placeholder:string}) => {
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
    <div className="flex gap-3 items-center w-96 border rounded-lg px-3 py-2">
      <Image src="/search.png" alt="" width={18} height={18}/>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;