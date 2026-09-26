
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md.Shakibul | Frontend Developer & Learner",
  description:
    "Portfolio of Md.Shakibul, a Frontend Developer & Learner exploring modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}