import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kashirali - Full Stack Developer | MERN Stack Portfolio",
  description:
    "Explore the world of Kashirali, a skilled Full Stack Developer specializing in the MERN stack. Discover innovative projects, expertise in MongoDB, Express.js, React, and Node.js, and a passion for creating dynamic web solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
