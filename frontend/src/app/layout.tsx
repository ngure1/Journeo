import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";

import { MyProvider } from "@/redux/provider";
import MyThemeProvider from "@/components/MyThemeProvider";

export const metadata: Metadata = {
  title: "JOURNEO",
  description: "Revolutionalize your travelling experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyThemeProvider>
    <html lang="en">
      <MyProvider>
          <body>
            <Header />

            {children}
          </body>
      </MyProvider>
    </html>
    </MyThemeProvider>
  );
}
