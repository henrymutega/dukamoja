import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Duka Moja",
  description: "Ecommerce project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
