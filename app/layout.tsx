import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import Script from "next/script";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript></GoogleAnalyticsScript>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <NavBar></NavBar>
          <main className="p-5">
            {/* <Suspense fallback={<p>Loading....</p>}> */}
            {children}
            {/* </Suspense> */}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
