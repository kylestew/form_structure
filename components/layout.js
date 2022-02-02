import NavHeader from "./nav-header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <NavHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
