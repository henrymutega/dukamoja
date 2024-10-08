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
                    <Link href="/login" className="nav-link">
                        {data?.user?.name}
                    </Link>
                    <Link href="/login" className="nav-link">
                        Logout
                    </Link>
                </div>
                ) : 
                (
                <div className="d-flex">
                    <Link href="/login" className="nav-link">
                        Login
                    </Link>
                    <Link href="/register" className="nav-link">
                        Register
                    </Link>
                </div>
                ) }
        </nav>
    )
}