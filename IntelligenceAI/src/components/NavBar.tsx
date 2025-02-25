import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn, UserPlus, Info } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E0BBE4] bg-opacity-80 backdrop-blur-md border-b border-gray-700 text-black"> {/* Changed text color to black */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold flex items-center text-black"> {/* Added text-black here */}
              <img
                src="/lovable-uploads/genetic-data.svg"
                alt="Genetic Data Icon"
                className="mr-2 h-8 w-8"
              />
              Educreate
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/about">
              <Button
                variant="default"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-black" // added text-black
              >
                <Info className="w-4 h-4" />
                Details
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button
                variant="default"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-black" // added text-black
              >
                <LogIn className="w-4 h-4" />
                SignIn
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button
                variant="default"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-black" // added text-black
              >
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