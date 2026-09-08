import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toko Dila",
  description: "Makan Enak & Praktis Toko Dila Solusinya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}