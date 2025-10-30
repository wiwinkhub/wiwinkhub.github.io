import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Appliances from "./pages/Appliances";
import Tools from "./pages/Tools";
import Paint from "./pages/Paint";
import BuildingSupplies from "./pages/BuildingSupplies";
import Deals from "./pages/Deals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StoreLocator from "./pages/StoreLocator";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/building-supplies" element={<BuildingSupplies />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
