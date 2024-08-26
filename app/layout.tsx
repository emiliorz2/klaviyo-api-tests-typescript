import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyecto Klaviyo - Next.js",
  description: "Creado por Manuel Rojas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <script
          type="text/javascript"
          async
          src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UMSMuy`}
        ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
