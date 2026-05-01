import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partify - Event Planning Made Easy",
  description: "Plan your perfect event with Partify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
