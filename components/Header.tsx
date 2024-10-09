import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import NavItems from "./NavItems";
import NavItemsMobile from "./NavItemsMobile";
import Logo from "./Logo";
export default function Header() {
    return (
        <div className="w-full p-4 px-8 flex items-center justify-between max-w-screen-2xl lg:mx-auto border-b border-gray-200">
            <Logo />
            <SignedIn>
                <div className="md:flex hidden mr-20">
                    <NavItems />
                </div>
            </SignedIn>
            <div className="flex items-center gap-5">
                <SignedIn>
                    <UserButton />
                    <NavItemsMobile />
                </SignedIn>
                <SignedOut>
                    <div className="flex justify-around w-full items-center">
                        <Button
                            asChild
                            className="rounded-full p-4"
                            size="lg"
                            variant="ghost"
                        >
                            <Link href="/sign-up">SignUp</Link>
                        </Button>
                        <Button
                            asChild
                            className="rounded-full p-4"
                            size="lg"
                            variant="ghost"
                        >
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </div>
                </SignedOut>
            </div>
        </div>
    );
}
