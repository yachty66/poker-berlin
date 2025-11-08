import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokerberlin.club - Berlin's Premier Poker Community",
  description:
    "Join Berlin's exclusive poker community. €50 buy-in, great company, and a professional atmosphere.",
  metadataBase: new URL("https://pokerberlin.club"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PokerBerlin.club - Berlin's Premier Poker Community",
    description:
      "Join Berlin's exclusive poker community. €50 buy-in, great company, and a professional atmosphere.",
    url: "https://pokerberlin.club/",
    siteName: "Pokerberlin.club",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Pokerberlin.club – Berlin Poker Community",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PokerBerlin.club - Berlin's Premier Poker Community",
    description:
      "Join Berlin's exclusive poker community. €50 buy-in, great company, and a professional atmosphere.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2GNCP219PY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2GNCP219PY');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
