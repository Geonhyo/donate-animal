import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// const pretendard = localFont({
//   src: "./EduTASBeginner-VariableFont_wght.woff2",
//   display: "swap",
//   variable: "--font-pretendard",
// });

export const metadata: Metadata = {
  title: "We Rule The World",
  description: "Vote and Donate to Save Animals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <meta
        name="viewport"
        content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <html lang="en" className={inter.className}>
        <body>{children}</body>
      </html>
    </>
  );
}
