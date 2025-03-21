import type { Metadata } from "next";
import "../globals.css";

import { CartProvider } from "@/store/CartProvider";
import { SiteProvider } from "@/SiteContext/SiteProvider";
import Header from "@/components/Header";

import { SideCart } from "@/components/MiniCart/SideCart";
import { BargerMenu } from "@/components/Bargermenu/Menu";
import Footer from "@/components/Footer";

import Cart from "@/components/CartBottom/CartBottom"
import Modal from "./Components/Modal";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <SiteProvider>
          <CartProvider>
            <BargerMenu />
            <Modal />
           
            <SideCart />
            <Header />
            {children}
           
            <Footer />
            <div className="sticky  bottom-4 flex justify-end pr-3 z-50"><Cart /></div> 
          </CartProvider>
        </SiteProvider>
      </body>
    </html>
  );
}
