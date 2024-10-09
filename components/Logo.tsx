import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            className="uppercase flex justify-center items-center gap-2 font-semibold"
            href="/"
        >
            <Image
                src="/assets/images/logo.svg"
                width={40}
                height={24}
                alt="logo"
            />
            Occasia
        </Link>
    );
}
