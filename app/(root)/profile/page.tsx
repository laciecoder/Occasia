import ShowEvents from "@/components/ShowEvents";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event-actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ProfilePage() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const data = await getEventsByUser({ userId, page: 1 });
  return (
    <>
      <section className="bg-primary-50 py-5 md:py-10">
        <div className=" px-4 w-full flex justify-center items-center sm:justify-between">
          <h3 className="text-center sm:text-left font-medium text-lg">
            My Tickets
          </h3>
          <Button asChild size="lg" className="rounded-full hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>
      <section className="flex items-center justify-center w-full my-8">
        <ShowEvents
          // data={events?.data}
          data={[]}
          emptyTitle="No Event Tickets Purchased"
          emptyStateSubtext="There's a lot of options for you"
          showType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section>
      <section className="bg-primary-50 py-5 md:py-10">
        <div className=" px-4 w-full flex justify-center items-center sm:justify-between">
          <h3 className="text-center sm:text-left font-medium text-lg">
            Events Organized
          </h3>
          <Button asChild size="lg" className="rounded-full hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>
      <section className="flex items-center justify-center w-full my-8 px-4 sm:p-0">
        <ShowEvents
          // data={events?.data}
          data={data?.data}
          emptyTitle="No Event have been created yet!"
          emptyStateSubtext="Go Create Some"
          showType="Events_Organized"
          limit={3}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
}
