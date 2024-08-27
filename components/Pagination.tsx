"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { formUrlQuery } from "@/lib/utils";

interface PaginationProps {
  page: number | string;
  totalPages: number;
  urlParamName: string | undefined;
}
export default function Pagination({
  page,
  totalPages,
  urlParamName,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onClick(buttonType: "prev" | "next") {
    const pageValue = (buttonType == "prev" ? -1 : 1) + Number(page);
    console.log(searchParams);
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "Page",
      value: pageValue.toString(),
    });
    router.push(newUrl, { scroll: false });
  }

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant="outline"
        className="w-28"
        onClick={() => onClick("prev")}
        disabled={Number(page) <= 1}
      >
        Prev
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="w-28"
        onClick={() => onClick("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
      </Button>
    </div>
  );
}
