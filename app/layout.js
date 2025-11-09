import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Azure Cloud and Full-Stack Developer Portfolio",
  description:
    "AZ-204 Certified Full-Stack Developer specializing in MERN, Next.js, and complex cloud architecture. Expertise in Azure Functions, CosmosDB, Container Apps, and Stripe payments (Connect/API). Showcasing projects that highlight skills in building scalable, secure, and efficient applications on Azure cloud platform.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
