import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavItems from "./NavItems";
import Logo from "./Logo";
import { Separator } from "@radix-ui/react-separator";

export default function NavItemsMobile() {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="flex items-center justify-center">
                    <MenuIcon width={24} height={24} />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden w-[40%]">
                    <Logo />
                    <Separator className="border border-gray-50" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    );
}
