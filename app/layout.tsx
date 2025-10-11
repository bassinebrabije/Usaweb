import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Import Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Advancis Consulting - Biopharma Executive Coaching",
  description:
    "On-demand executive and career coaching for leaders. We help you elevate performance, drive measurable results, and unlock your full potential. Start your transformation.",
  metadataBase: new URL("https://advancisconsulting.com"), // <-- replace with your real domain
  openGraph: {
    type: "website",
    url: "https://advancisconsulting.com",
    title: "Advancis Consulting - Biopharma Executive Coaching",
    description:
      "On-demand executive and career coaching for leaders. We help you elevate performance, drive measurable results, and unlock your full potential. Start your transformation.",
    images: [
      {
        url: "https://i.ibb.co/RGrgN99K/logo.png",
        width: 1200,
        height: 630,
        alt: "Advancis Consulting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advancis Consulting - Biopharma Executive Coaching",
    description:
      "On-demand executive and career coaching for leaders. We help you elevate performance, drive measurable results, and unlock your full potential. Start your transformation.",
    images: ["https://i.ibb.co/RGrgN99K/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
