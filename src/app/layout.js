// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Bootstrap from "./Bootstrap";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Travel",
  description: "Travel App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Bootstrap/>
        {children}
      </body>
    </html>
  );
}
