import { Button } from "@/components/ui/button";
import { Bell, Bookmark, Home, LogOut, Mail, User, Users } from "lucide-react";
import Link from "next/link";

const MobileNavItems = () => {
  return (
    <aside className="w-full h-screen" aria-label="Sidebar">
      <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className=" space-y-2">
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-200"
            >
              <Home size={30} />
              <span className="text-lg font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-200"
            >
              <Mail size={30} />
              <span className="text-lg">Messages</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-200"
            >
              <Users size={30} />
              <span className="text-lg">Groups</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-200"
            >
              <Bell size={30} />
              <span className="text-lg">Notification</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-200"
            >
              <Bookmark size={30} />
              <span className="text-lg">BookMarks</span>
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-200"
            >
              <User size={30} />
              <span className="text-lg">Profile</span>
            </Link>
          </li>
          <li>
            <Button className="w-full flex items-center justify-start space-x-4 px-4 py-2 bg-transparent text-black dark:text-white hover:bg-gray-200">
              <LogOut size={30} />
              <span className="text-lg">Log out</span>
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MobileNavItems;
