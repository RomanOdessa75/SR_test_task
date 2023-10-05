import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carpathian's Secrets",
  description:
    "Welcome to CARPATHIAN'S SECRETS! Our website is dedicated to all adventure seekers and nature lovers who want to explore the breathtaking beauty of mountains.",
  "og:image": "https://softryzen-test.vercel.app/carpatians-secrets.png",
  url: "https://softryzen-test.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
