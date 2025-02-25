import { Link } from "react-router-dom";
import { LogIn, UserPlus, Info } from "lucide-react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E0BBE4] bg-opacity-80 backdrop-blur-md border-b border-gray-700 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold flex items-center text-black">
              <img
                src="/lovable-uploads/genetic-data.svg"
                alt="Genetic Data Icon"
                className="mr-2 h-8 w-8"
              />
              Educreate
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/about">
              <Button className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                Details
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Styled Button
const Button = styled.button`
  transition: all 0.3s ease-in-out;
  font-family: "Dosis", sans-serif;
  width: 120px;
  height: 40px;
  border-radius: 20px; /* Reduced border radius */
  background-color: #000000;
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.5);
  outline: none;
  cursor: pointer;
  border: none;

  &:hover {
    transform: translateY(2px);
    box-shadow: none;
  }

  &:active {
    opacity: 0.7;
  }
`;

export default NavBar;
