import AOSProvider from "./components/aos-provider";
import BackToTop from "./components/back-to-top";
import Footer from "./components/footer";
import NavBar from "./components/nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      <AOSProvider />
      <main>{children}</main>
      <BackToTop />
      <Footer />
    </main>
  );
};

export default layout;
