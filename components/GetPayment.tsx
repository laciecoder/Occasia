import { IEvent } from "@/lib/db/models/event";
import { Button } from "./ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import checkoutOrder from "@/lib/actions/order-actions";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
export default function GetPayment({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) {
  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get("success")) {
  //     console.log("Order placed! You will receive an email confirmation.");
  //   }

  //   if (query.get("canceled")) {
  //     console.log(
  //       "Order canceled -- continue to shop around and checkout when you’re ready."
  //     );
  //   }
  // }, []);
  async function onSubmit() {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };
    await checkoutOrder(order);
  }
  return (
    <form action={onSubmit}>
      <Button size="lg" type="submit" role="link" className="w-fit">
        {event.isFree ? "Get Ticket" : "Checkout"}
      </Button>
    </form>
  );
}
