import MyContext from "./Helper/Context";
import "./globals.css";

export const metadata = {
  title: "Amaz App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
