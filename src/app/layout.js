import { Nunito_Sans, Ultra } from "next/font/google";
import "./globals.css";

const displayFont = Ultra({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-body"
});

export const metadata = {
  title: "Ehuen Burger & Co | Menú digital",
  description: "Hamburguesas, delivery y take away en Av. del Valle 310."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
