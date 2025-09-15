import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Become More than a Dev | Alternative Tech Career Coaching",
  description: "Break free from endless job applications. Discover high-paying tech roles that value your engineering skills without traditional SWE competition.",
  keywords: "tech careers, software engineering alternatives, career coaching, sales engineer, solutions architect",
  openGraph: {
    title: "Become More than a Dev",
    description: "Transform your tech career with alternative engineering roles",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.className} font-sans overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}