import EventForm from "@/components/EventForm";
import { auth } from "@clerk/nextjs/server";

export default function EventsPage() {
  const { sessionClaims } = auth();
  return (
    <div className="max-w-screen-2xl mx-auto px-8">
      <section className="py-5 md:py-10">
        <h2 className="text-center font-bold text-lg">Create Event</h2>
      </section>
      <div className="max-w-screen-xl mx-auto">
        <EventForm type="Create" userId={sessionClaims?.userId} />
      </div>
    </div>
  );
}
