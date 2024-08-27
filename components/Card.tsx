import { IEvent } from "@/lib/db/models/event";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { ArrowBigRight, EditIcon } from "lucide-react";
import Link from "next/link";
import DeleteConfirmation from "./DeleteConfirmation";

interface CardProps {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
}

export default function Card({ event, hasOrderLink, hidePrice }: CardProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const isEventCreator = userId === event.organizer?._id.toString();
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex items-center justify-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {isEventCreator && !hidePrice && (
        <div className="absolute top-2 right-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <EditIcon width={20} height={20} />
          </Link>
          <DeleteConfirmation eventId={event?._id as any} />
        </div>
      )}
      <div className="flex min-h-[230px] flex-col gap-5 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="font-semibold rounded-full bg-green-500/15 px-5 py-2 text-green-700 text-sm flex items-center justify-center">
              {event.isFree ? "FREE" : `₹${event.price}`}
            </span>
            <p className="font-semibold rounded-full bg-grey-500/15 px-4 py-2.5 text-grey-600 text-sm line-clamp-1">
              {event?.category?.name}
            </p>
          </div>
        )}
        <p className="font-normal text-sm leading-3 ">
          {formatDateTime(event?.startDateTime).dateTime}
        </p>
        <Link href={`/events/${event._id}`}>
          <p className="font-semibold text-lg md:text-2xl line-clamp-2 flex-1 text-black">
            {event.title}
          </p>
        </Link>
        <div className="flex items-center justify-between w-full">
          <p className="font-normal text-sm md:text-[16px] text-grey-600">
            {event.organizer?.firstName} {event.organizer?.lastName}
          </p>
          {hasOrderLink && (
            <Link
              href={`/orders?eventId=${event._id}`}
              className="flex gap-2 items-center justify-center"
            >
              <p className="text-primary-500">Order Details:</p>
              <ArrowBigRight height={20} width={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
