import { Link } from "react-router-dom";
import { Search, MapPin, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b">
          <Link to="/" className="text-2xl font-bold text-primary">
            HomeStore
          </Link>
          
          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for products..." 
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <Link to="/store-locator">
                <MapPin className="h-5 w-5 mr-2" />
                Stores
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/account">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 py-3">
          <Link to="/departments" className="text-sm font-medium hover:text-primary transition-colors">
            Departments
          </Link>
          <Link to="/appliances" className="text-sm font-medium hover:text-primary transition-colors">
            Appliances
          </Link>
          <Link to="/tools" className="text-sm font-medium hover:text-primary transition-colors">
            Tools
          </Link>
          <Link to="/paint" className="text-sm font-medium hover:text-primary transition-colors">
            Paint
          </Link>
          <Link to="/building-supplies" className="text-sm font-medium hover:text-primary transition-colors">
            Building Supplies
          </Link>
          <Link to="/deals" className="text-sm font-medium text-accent hover:text-accent/90 transition-colors">
            Deals
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden py-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/departments" className="text-base font-medium hover:text-primary transition-colors">
                  Departments
                </Link>
                <Link to="/appliances" className="text-base font-medium hover:text-primary transition-colors">
                  Appliances
                </Link>
                <Link to="/tools" className="text-base font-medium hover:text-primary transition-colors">
                  Tools
                </Link>
                <Link to="/paint" className="text-base font-medium hover:text-primary transition-colors">
                  Paint
                </Link>
                <Link to="/building-supplies" className="text-base font-medium hover:text-primary transition-colors">
                  Building Supplies
                </Link>
                <Link to="/deals" className="text-base font-medium text-accent hover:text-accent/90 transition-colors">
                  Deals
                </Link>
                <Link to="/store-locator" className="text-base font-medium hover:text-primary transition-colors">
                  Store Locator
                </Link>
                <Link to="/about" className="text-base font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-base font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
