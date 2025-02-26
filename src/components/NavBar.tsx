import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Auth System
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/admin/login">Admin Login</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/user/login">User Login</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
