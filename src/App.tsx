import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimationStylesProvider } from "@/components/ui/animation-styles";
import { RippleCursor } from "@/components/ui/ripple-cursor";
import { Navbar } from "@/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import VerifyCertificate from "./pages/VerifyCertificate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="inlighn-ui-theme">
      <TooltipProvider>
        <AnimationStylesProvider />
        <RippleCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen transition-colors duration-300 dark">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route
                path="/verify-certificate"
                element={<VerifyCertificate />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
