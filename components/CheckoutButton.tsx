"use client";

import { IEvent } from "@/lib/db/models/event";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import GetPayment from "./GetPayment";

export default function CheckoutButton({ event }: { event: IEvent }) {
  const { user } = useUser();
  const userId = user?.publicMetadata?.userId as string;
  const isEventFinished = new Date(event.endDateTime) < new Date();
  return (
    <div className="flex items-center gap-3">
      {isEventFinished ? (
        <p className="text-red-400 p-2">
          Sorry! Tickets are no Longer Available.
        </p>
      ) : (
        <>
          <SignedOut>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <GetPayment event={event} userId={userId}/>
          </SignedIn>
        </>
      )}
    </div>
  );
}
