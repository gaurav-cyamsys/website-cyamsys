import { Share_Tech, Share_Tech_Mono ,Roboto } from "next/font/google";
import "./globals.css";

const shareTech = Share_Tech({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cyamsys",
  description: "Cyamsys Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}