"use client";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <Navbar />
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
