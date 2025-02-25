import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn, UserPlus, Info } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-md border-b border-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex justify-between items-center h-16">
      <Link to="/" className="text-xl font-semibold flex items-center">
        <img
          src="/lovable-uploads/genetic-data.svg" // Corrected path
          alt="Genetic Data Icon"
          className="mr-2 h-8 w-8"
        />
        Educreate
      </Link>
    </div>

          <div className="flex items-center gap-4">
            <Link to="/about">
              <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Info className="w-4 h-4" />
                Details
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <LogIn className="w-4 h-4" />
                SignIn
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="default" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                <UserPlus className="w-4 h-4" />
                SignUp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;