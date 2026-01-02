import { Link } from "react-router-dom";
import{
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const services = [
  { name: "WA Delivery", emoji: "📱", path: "/services/wa-delivery" },
  { name: "Food Studio", emoji: "🎨", path: "/services/food-studio" },
  { name: "Order Food", emoji: "🍽️", path: "/services/order-food" },
  { name: "POS", emoji: "💳", path: "/services/pos" },
  { name: "Catering", emoji: "🍴", path: "/services/catering" },
  { name: "Packaging", emoji: "📦", path: "/services/packaging" },
  { name: "People Management", emoji: "👥", path: "/services/people-management" },
];

const Footer = () => {
return (
    <footer className="bg-gray-900 text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        {/* Grid layout with exactly 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-black">MyFojo</div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering restaurants with cutting-edge technology solutions.
              From WhatsApp delivery to complete POS systems, we've got you covered.
            </p>
          </div>

          {/* Services */}
<div className="space-y-4">
  <h3 className="text-xl font-bold">Services</h3>
  <div className="space-y-3">
    {services.map((service) => (
      <Link
        key={service.name}
        to={service.path}
        className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 group"
      >
        <span className="text-xl leading-none group-hover:scale-110 transition-transform duration-200">
          {service.emoji}
        </span>
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          {service.name}
        </span>
      </Link>
    ))}
  </div>
</div>


          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Company</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                About Us
              </Link>
              <Link to="/careers" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Careers
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Contact Us
              </Link>
              <Link to="/pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Pricing
              </Link>
            </div>
          </div>

          {/* Support + Contact Combined */}
          <div className="space-y-8">
            
            {/* Contact Section (in same column) */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="space-y-4 text-primary-foreground/80">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-1 text-myfojo-red flex-shrink-0" />
                  <span>
                    FOOMILL PRIVATE LIMITED<br />
                    1350, Sector 28,<br />
                    Faridabad, Haryana 121008
                  </span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-1 text-myfojo-red flex-shrink-0" />
                  <span>9990964509</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-1 text-myfojo-red flex-shrink-0" />
                  <span>contactus@myfojo.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

       <div className="mt-10 border-t border-white/30 pt-4 md:flex md:items-center md:justify-between text-sm text-white/80">
          <p className="text-center md:text-left">© 2024 MyFojo. All rights reserved. Revolutionizing restaurant technology.</p>
          <div className="flex justify-center md:justify-end gap-6 mt-4 md:mt-0">
            <Link to="/report-problem" className="hover:underline">Report a Problem</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
