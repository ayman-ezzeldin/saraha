import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Authlayout from "@/Layouts/AuthLayout/layout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saraha App",
  description: "Generated for Saraha Users",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {


  return (
    <html
      suppressHydrationWarning

    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Authlayout>
            {children}
          </Authlayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
