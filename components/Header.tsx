import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type HeaderProps = {
    children: React.ReactNode;
    className?: string;
}

function Header({children , className} : HeaderProps) {
    return (
        <div className={cn('header', className)}>
            <Link href="/" className="md:flex-1">
                <Image src={"/assets/icons/logo.svg"} alt="logo" width={120} height={32}  className="hidden md:block"/>
                {/* <Image src={"/assets/icons/logo-icon.svg"} alt="logoIcon" width={32} height={32}  className="hidden md:block"/> */}
            </Link>
            {children}

        </div>
    )
}

export default Header;
