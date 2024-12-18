import "./globals.css";
import { helveticaNeueLT, bdex } from "@/config/fonts";
import NavBar from '@/components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${helveticaNeueLT.variable} ${bdex.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
