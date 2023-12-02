import NavHeader from "./nav-header";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <NavHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
