import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: process.env.APP_NAME || "hiddenVeil",
  description: "Send an anonymous messages",
};

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} p-9`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
