import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/sign-in";
import About from "./pages/about";
import SignUp from "./pages/sign-up";
import ImageUpload from "./components/ImageUpload";
import QuizPage from "./pages/QuizPage";
import Chatbot from "./components/chatbot"; // Import chatbot

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/quiz/:objectName" element={<QuizPage />} />
        </Routes>
      </Router>
      <Chatbot /> {/* Add chatbot here */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
