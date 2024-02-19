import Content from "../Reusables/Content/Content";
import DesktopNav from "../Reusables/Navigation/Desktop/DesktopNav";
import MobileNav from "../Reusables/Navigation/Mobile/MobileNav";
import Navbar from "../Reusables/Navigation/Navbar";

const HomePage = () => {
  return (
    <section className="flex justify-center main-container">
      <DesktopNav />
      <Content />
    </section>
  );
};

export default HomePage;
