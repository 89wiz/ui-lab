import "~/styles/globals.scss";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import WindowsStateProvider from "./providers/windows-state.provider";

export const metadata: Metadata = {
  title: "Doors 11",
  description: "A fake OS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="h-[100vh] w-[100vw] overflow-hidden bg-black font-sans antialiased">
        <TRPCReactProvider>
          <WindowsStateProvider>{children}</WindowsStateProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
