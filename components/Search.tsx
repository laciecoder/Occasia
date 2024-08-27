"use client";

import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search({
  placeholder = "Search title...",
}: {
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const debounceFunction = setTimeout(() => {
      let newUrl;
      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 300);
    return () => clearTimeout(debounceFunction);
  }, [query, router]);
  return (
    <div className="flex items-center justify-center min-h-14 w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 my-4">
      <SearchIcon width={24} height={24} />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="text-[16px] font-normal leading-3 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
