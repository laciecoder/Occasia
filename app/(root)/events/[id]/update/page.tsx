import EventForm from "@/components/EventForm";
import { getEventById } from "@/lib/actions/event-actions";
import { SearchParamProps, UpdateEventParams } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";

export default async function UpdatePage({ params: { id } }: SearchParamProps) {
  const event = await getEventById(id);
  const { sessionClaims } = auth();
  return (
    <div className="max-w-screen-2xl mx-auto px-8">
      <section className="py-5 md:py-10">
        <h2 className="text-center font-bold text-lg">Update Event</h2>
      </section>
      <div className="">
        <EventForm
          type="Update"
          event={event}
          userId={sessionClaims?.userId}
          eventId={event._id}
        />
      </div>
    </div>
  );
}
