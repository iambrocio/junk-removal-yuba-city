import type { Metadata } from "next";
import { Oswald, Work_Sans } from "next/font/google";
import "./globals.css";
import { Masthead } from "@/components/masthead";
import { BaseFooter } from "@/components/base-footer";
import { business } from "@/lib/business";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  applicationName: business.name,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${workSans.variable}`}>
      <body>
        <Masthead />
        <main>{children}</main>
        <BaseFooter />
      </body>
    </html>
  );
}
