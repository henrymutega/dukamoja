import Link from "next/link";

export default function Navbar(){
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