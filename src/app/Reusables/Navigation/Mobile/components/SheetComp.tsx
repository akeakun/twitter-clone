import Logo from "@/app/Reusables/Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNavItems from "./MobileNavItems";
import { X } from "lucide-react";

const SheetComp = () => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side={"left"} className="p-0 max-w-[250px]">
        <SheetHeader>
          <SheetClose>
            <div className="p-2 flex justify-end">
              <X size={30} />
            </div>
          </SheetClose>
        </SheetHeader>
        <MobileNavItems />
      </SheetContent>
    </Sheet>
  );
};

export default SheetComp;
