"use client"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar(){
    const {data, status } = useSession();
    console.log(data, status);

    return(
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/" className="nav-link">
               🛒 Duka Moja
            </Link>

            {status === "authenticated" ? (  
                 <div className="d-flex">
                    <Link href="/dashboard/user" className="nav-link text-capitalize">
                       Welcome {data?.user?.name}
                    </Link>
                    <a className="nav-link pointer text-capitalize"
                    onClick={() => signOut({callbackUrl: "/"})}
                    >
                        Logout
                    </a>
                </div>
                ) : status === "loading" ? (
                    <a className="nav-link text-capitalize pointer">Please wait...</a>
                ) :
                (
                <div className="d-flex">
                    <Link href="/login" className="nav-link text-capitalize">
                        Login
                    </Link>
                    <Link href="/register" className="nav-link text-capitalize">
                        Register
                    </Link>
                </div>
                ) }
        </nav>
    )
}