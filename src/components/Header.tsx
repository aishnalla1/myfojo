import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "WA Delivery", emoji: "📱", path: "/services/wa-delivery" },
  { name: "Food Studio", emoji: "🎨", path: "/services/food-studio" },
  { name: "Order Food", emoji: "🍽️", path: "/services/order-food" },
  { name: "POS", emoji: "💳", path: "/services/pos" },
  { name: "Catering", emoji: "🍴", path: "/services/catering" },
  { name: "Packaging", emoji: "📦", path: "/services/packaging" },
  { name: "People Management", emoji: "👥", path: "/services/people-management" },
];

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full bg-card/80 backdrop-blur-md border-b border-border/50 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">MyFojo</div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <DropdownMenu open={isServicesOpen} onOpenChange={setIsServicesOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-64 bg-card/95 backdrop-blur-lg border border-border/50 shadow-elegant"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service, index) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-accent/50 transition-all duration-200 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-2xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {service.emoji}
                      </span>
                      <span className="font-medium">{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Items */}
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>
           { /*<Link
              to="/blog"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>*/}
            <Link
              to="/pricing"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="cta-button text-primary-foreground font-semibold px-6 py-2 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
