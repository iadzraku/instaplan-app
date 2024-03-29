import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instaplan",
  description: "AI-Powered Timetable Optimization System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SideNav />
        {children}
      </body>
    </html>
  );
}
