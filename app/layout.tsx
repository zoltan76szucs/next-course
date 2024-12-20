import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import SignIn from "./components/sign-in";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500"],
// });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-poppins",
  weight: "100 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "Create Next App",
    description: "Generated by create next app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript></GoogleAnalyticsScript>
      <body className={geistSans.variable}>
        <AuthProvider>
          <NavBar></NavBar>
          <SignIn></SignIn>
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
