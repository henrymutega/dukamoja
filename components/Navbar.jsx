"use client"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar(){
    const {data, status, loading } = useSession();
    console.table({data, status, loading});

    return(
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/" className="nav-link">
               🛒 Duka Moja
            </Link>

            <div className="d-flex">
                <Link href="/login" className="nav-link">
                    Login
                </Link>
                <Link href="/register" className="nav-link">
                    Register
                </Link>
            </div>
        </nav>
    )
}