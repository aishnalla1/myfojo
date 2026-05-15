import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import Blog from "./pages/blog"; 
//import Pricing from "./pages/services/Pricing";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ReportProblem from "./pages/ReportProblem";
import WADelivery from "./pages/services/WADelivery";
import FoodStudio from "./pages/services/FoodStudio";
import OrderFood from "./pages/services/OrderFood";
import POS from "./pages/services/POS";
import Catering from "./pages/services/Catering";
import Packaging from "./pages/services/Packaging";
import PeopleManagement from "./pages/services/PeopleManagement";
import NotFound from "./pages/NotFound";
import MenuSection from "./components/MenuSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/report-problem" element={<ReportProblem />} />
          <Route path="/services/wa-delivery" element={<WADelivery />} />
          <Route path="/services/food-studio" element={<FoodStudio />} />
          <Route path="/services/order-food" element={<OrderFood />} />
          <Route path="/services/pos" element={<POS />} />
          <Route path="/services/catering" element={<Catering />} />
          <Route path="/services/packaging" element={<Packaging />} />
          <Route path="/services/people-management" element={<PeopleManagement />} />
          {/*<Route path="/blog" element={<Blog />} />*/}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
