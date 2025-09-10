import { Provider } from "./provider";
import "@/app/global.css";
import { Navbar } from "@/components/navbar";
import { Inter, Inria_Sans, Geist_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inria-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inriaSans.variable} ${geistMono.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <Provider>
          <div className="bg-background relative z-10 flex min-h-svh flex-col">
            <Navbar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
