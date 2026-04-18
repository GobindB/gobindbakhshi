import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { ConstructionToast } from "@/components/construction-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gobind Bakhshi",
  description: "Engineer, Designer, Strategist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#101010] text-[#DBDBDB] font-sans">
        {children}
        <Toaster />
        <ConstructionToast />
        <Analytics />
      </body>
    </html>
  );
}
