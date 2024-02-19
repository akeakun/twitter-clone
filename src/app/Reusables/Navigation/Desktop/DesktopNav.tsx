import { Bell, Bookmark, Home, Mail, User, Users } from "lucide-react";
import Link from "next/link";
import Logo from "../../Logo";
import { Button } from "@/components/ui/button";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex flex-col max-w-[200px] border-r">
      <Logo />
      <div>
        <ul className=" space-y-2">
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              <Home size={30} />
              <span className="text-lg font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              <Mail size={30} />
              <span className="text-lg">Messages</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              <Users size={30} />
              <span className="text-lg">Groups</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              <Bell size={30} />
              <span className="text-lg">Notification</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              <Bookmark size={30} />
              <span className="text-lg">BookMarks</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              <User size={30} />
              <span className="text-lg">Profile</span>
            </Link>
          </li>
          <Button className="w-full rounded-full">Post</Button>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
