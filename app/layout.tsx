import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/font/PretendardVariable.woff2",
});

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
      <html lang="en">
        <body className={pretendard.className}>{children}</body>
      </html>
    </>
  );
}
