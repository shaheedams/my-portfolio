import type { Metadata } from "next";
import "@/src/styles/global.scss";

export const metadata: Metadata = {
  title: "MS Portfolio",
  description: "Mohamed Shaheed A, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo-ms-color.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
