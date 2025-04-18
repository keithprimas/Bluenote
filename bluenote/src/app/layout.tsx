import type { Metadata } from "next";
import "./styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/ui/Header";



export const metadata: Metadata = {
  title: "Bluenote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen w-full">
              <Header />
              <main className="flex flex-col flex-1 px-4 pt-10 xl:px-8">{children}</main>
            </div>
            <Toaster />
      </ThemeProvider>
      </body>
    </html>
  );
}
