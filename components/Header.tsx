import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
    children: React.ReactNode;
}

function Header({children} : HeaderProps) {
    return (
        <div className="header">
            <Link href="/" className="md:flex-1">
                <Image src={"/assets/icons/logo.svg"} alt="logo" width={120} height={32}  className="hidden md:block"/>
                {/* <Image src={"/assets/icons/logo-icon.svg"} alt="logoIcon" width={32} height={32}  className="hidden md:block"/> */}
            </Link>
            {children}

        </div>
    )
}

export default Header;
