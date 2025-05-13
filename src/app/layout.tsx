import ".././globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./layoutStyles.module.sass";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /** TODO: create a header with a nav bar
   *  TODO: create a footer, maybe (with a copyright????)
   */ // I need everything to be centered
  return (
    <html lang="en">
      <body className={`${styles.bodyFont} ${styles.generalStyles}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
