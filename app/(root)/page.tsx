import ShowEvents from "@/components/ShowEvents";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event-actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const events = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });
  console.log(events);
  return (
    <>
      <section className="bg-red-50 py-5 md:py-10 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 m-10 p-4">
            <h1 className="text-xl font-bold md:text-4xl">
              Organize. Offer. Outshine! Your Events, Our Platform! Elevate with
              Occasia...
            </h1>
            <p className="font-light sm:text-sm md:text-lg">
              Occasia simplifies event management, from planning to ticketing,
              ensuring seamless, successful, and unforgettable experiences.
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-full h-14 w-full sm:w-fit"
            >
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.svg"
            alt="Hero Image"
            height={1000}
            width={1000}
            className="max-h-[70vh] 2xl:max-h-[50vh] object-contain object-center"
          />
        </div>
      </section>
      <section id="events" className="flex flex-col my-8 gap-8 md:gap-12 p-14">
        <h2 className="text-2xl sm:text-lg font-semibold">
          Trusted By <br /> Thousands of Organizations
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CategoryFilter
        </div>
        <ShowEvents
          data={events?.data}
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
