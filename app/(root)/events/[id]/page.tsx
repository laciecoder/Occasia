import CheckoutButton from "@/components/CheckoutButton";
import ShowEvents from "@/components/ShowEvents";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event-actions";
import { SearchParamProps } from "@/lib/types";
import { formatDateTime } from "@/lib/utils";
import { CalendarDaysIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

export default async function EventShowPage({
  params: { id },
  searchParams,
}: SearchParamProps) {
  const event = await getEventById(id);
  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    page: searchParams.page as string,
    eventId: event._id,
  });
  return (
    <>
      <section className="flex justify-center bg-primary-50 rounded-2xl mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={event.imageUrl}
            alt={event.title}
            height={1000}
            width={1000}
            className="h-full max-h-[70vh] rounded-l-2xl bg-blue-50 object-cover object-center"
          />
          <div className="flex w-full p-5 md:p-10 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-extrabold text-xl text-center">
                {event.title}
              </h2>
              <div className="flex gap-3 flex-col items-start justify-start">
                <div className="flex gap-3 items-center">
                  <p className="font-semibold rounded-full bg-green-500/15 px-5 py-2 text-green-700">
                    {event.isFree ? "FREE" : `₹${event.price}`}
                  </p>
                  <p className="font-semibold rounded-full bg-grey-500/15 px-4 py-2.5 text-grey-600">
                    {event.category.name}
                  </p>
                </div>
                <p className="text-lg font-semibold ml-2 mt-2 sm:mt-0 uppercase opacity-80">
                  By{"  "}
                  <span className="text-primary-500">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>
            <CheckoutButton event={event}/>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <CalendarDaysIcon width={32} height={32} />
                <div className="font-normal text-sm lg:text-lg flex flex-wrap flex-col">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.startDateTime).timeOnly} to
                  </p>
                  <p className="ml-0">
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>
              <div className="font-normal text-sm lg:text-lg flex items-center gap-3">
                <MapPinIcon height={32} width={32} />
                <p className="font-normal text-sm lg:text-lg">
                  {event.location}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-lg leading-3 text-grey-600">
                What You'll Learn:
              </p>
              <p className="font-semibold text-[16px] lg:text-lg lg:font-normal mt-2">
                {event.description}
              </p>
              <p className="font-semibold text-[16px] lg:text-lg lg:font-normal mt-2 truncate text-blue-400 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center my-8 flex-col gap-8 md:gap-12">
        <h2 className="font-bold text-lg">Related Events</h2>
        <ShowEvents
          data={relatedEvents?.data}
          emptyTitle="No Events Found at moment"
          emptyStateSubtext="Come Back Later"
          showType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
}
