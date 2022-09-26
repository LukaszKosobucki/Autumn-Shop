import Footer from "./Footer";
import Header from "./Header";
const MainLayout = (props: any) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
