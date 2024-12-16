import "./globals.css";
import { helveticaNeueLT } from "@/config/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${helveticaNeueLT.variable}`}>
      <body>{children}</body>
    </html>
  );
}
