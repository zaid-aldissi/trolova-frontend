import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "../src/i18n/language-provider";

export const metadata: Metadata = {
  title: "Trolova Driving Training Center",
  description: "Trolova Driving Training Center"
};

type RootLayoutProps = {
  children: ReactNode;
};

const lamaSans = localFont({
  src: [
    {
      path: "../public/brand/fonts/LamaSans-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/brand/fonts/LamaSans-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/brand/fonts/LamaSans-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/brand/fonts/LamaSans-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--trolova-font-family-primary",
  display: "swap"
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl" className={lamaSans.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
