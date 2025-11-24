import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Architect & Cloud-Certified Full-Stack Engineer | LangGraph & Next.js",
  description:
    "AZ-204 Certified Full-Stack Engineer specializing in AI/LLM Integration (LangGraph/Gemini), Next.js, and complex cloud architecture. Expertise includes serverless logic (Azure Functions), Container Apps, and multi-party payment systems.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
