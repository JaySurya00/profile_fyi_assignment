import { Inter } from "next/font/google";
import MainLayout from "./layouts/main-layout";
import CartContextProvider from "./context/cart_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
          <MainLayout />
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
