# Occasia

Occasia is a comprehensive event management platform that allows organizers to create, manage, and ticket events seamlessly. It provides a robust platform for both organizers and attendees, enabling users to easily discover and participate in events that interest them.

## Features

- **Event Creation**: Organizers can create and customize events with ease.
- **Event Management**: Manage all aspects of the event, including updates, ticketing, and attendee tracking.
- **Ticketing**: Integrated Stripe payment for secure and efficient ticket purchasing.
- **Attendee Experience**: Users can explore similar events, register for the ones they like, and purchase tickets.
- **Pagination**: Implemented for efficient browsing through a large number of events.

## Tech Stack

- **Frontend**: 
  - Next.js
  - Shadcn/UI (UI Components)
  - Tailwind CSS
  - TypeScript

- **Backend**:
  - Node.js
  - MongoDB (Mongoose for ORM)
  - Clerk (Authentication)
  - Zod (Data Validation)

## Usage
<ul>
<li>
Create an Organizer Account: Sign up and create an organizer account.
</li>
  <li>
    
Create an Event: Navigate to the event creation page and fill out the necessary details.
  </li>
  <li>
    
Manage Events: Edit event details, manage ticket sales, and monitor attendee registrations.
  </li>
  <li>
Explore Events: Attendees can browse events using pagination, find similar events, and purchase tickets.
  </li>
</ul>

<hr/>

## Getting Started

Do create a .env file with required keys

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
