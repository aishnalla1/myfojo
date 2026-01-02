import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  emoji: string;
  path: string;
  features?: string[];
}

const ServiceCard = ({ title, description, emoji, path, features }: ServiceCardProps) => {
  return (
    <div className="service-card rounded-2xl p-6 text-center group">
      <div className="text-6xl mb-4 animate-float group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {features && (
        <ul className="text-sm text-muted-foreground mb-6 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center space-x-2">
              <span className="text-primary">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Link to={path}>
        <Button className="cta-button text-primary-foreground px-6 py-2 rounded-full">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;