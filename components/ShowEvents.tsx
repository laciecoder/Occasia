import { IEvent } from "@/lib/db/models/event";
import Card from "./Card";
import { ObjectId } from "mongoose";

interface ShowEventsProps {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  showType?: "All_Events" | "Events_Organized" | "My_Tickets";
}
export default function ShowEvents({
  data,
  emptyTitle,
  emptyStateSubtext,
  showType,
  page,
  totalPages = 0,
  urlParamName,
}: ShowEventsProps) {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10 w-full">
          <ul className="grid w-full grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 2xl:gap-10">
            {data.map((event) => {
              const hidePrice = showType === "My_Tickets";
              const hasOrderLink = showType === "Events_Organized";
              return (
                <li key={event._id as any} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full min-h-[200px] flex-col gap-3 rounded-2xl bg-grey-50 py-28 text-center">
          <h2 className="font-bold text-lg md:text-2xl">{emptyTitle}</h2>
          <p className="font-normal text-sm ">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
}
