import Header from "../Header";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: any }) => {
  return (
    <section className="w-full flex">
      <div className="hidden md:block w-fit px-5">
        <Navbar />
      </div>
      <div className="flex-grow flex flex-col w-full">
        <Header />
        {children}
      </div>
    </section>
  );
};

export default Layout;
