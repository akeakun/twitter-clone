import Logo from "../Logo";
import MobileNav from "./Mobile/MobileNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Navbar = () => {
  return (
    <>
      <nav className="w-full">
        <section className="w-full flex justify-evenly md:hidden">
          <div className="w-full flex justify-start">
            <MobileNav />
          </div>
          <div className="w-full flex justify-start">
            <Logo />
          </div>
        </section>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="for-you" className="w-full">
              For you
            </TabsTrigger>
            <TabsTrigger value="following" className="w-full">
              Following
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
    </>
  );
};

export default Navbar;
