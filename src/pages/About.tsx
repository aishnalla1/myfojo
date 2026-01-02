import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { motion } from "framer-motion";

const About = () => {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to revolutionize restaurant operations" },
    { year: "2021", title: "First 50 Restaurants", description: "Onboarded our first 50 restaurant partners" },
    { year: "2022", title: "WhatsApp Integration", description: "Launched revolutionary WhatsApp delivery service" },
    { year: "2023", title: "500+ Partners", description: "Expanded to serve over 500 restaurants nationwide" },
    { year: "2024", title: "Complete Ecosystem", description: "Launched full suite of restaurant management solutions" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions for the restaurant industry."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We believe in building lasting relationships with our restaurant partners and supporting their growth."
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description: "Every solution we create is designed to streamline operations and maximize profitability."
    },
    {
      icon: "💝",
      title: "Customer Success",
      description: "Our success is measured by the success of the restaurants we serve."
    }
  ];

  
  return (
    <Layout>
      <VideoHero
        title="About MyFojo"
        subtitle="Revolutionizing restaurant operations since 2020"
      >
        <Link to="/contact">
          <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
            Join Our Mission
          </Button>
        </Link>
      </VideoHero>

      {/* Our Story Section */}
       <section
      className="relative bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: `url('/images/myfojo.jpg')`, 
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col space-y-16 text-center text-white">
        
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Story
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            MyFojo was born from a simple observation: restaurants needed better technology 
            solutions that actually understood their unique challenges. Founded by a team 
            of restaurant industry veterans and tech experts, we set out to create tools that 
            don't just digitize existing processes, but fundamentally improve how restaurants operate.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            To empower restaurants with innovative technology solutions that eliminate 
            middlemen, reduce costs, and enhance customer relationships. We believe in 
            direct connections - between restaurants and their customers, between 
            problems and solutions, between vision and reality.
          </p>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Values
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Integrity, innovation, and inclusivity are at the heart of everything we do. 
            We value long-term partnerships, transparency in our approach, and delivering 
            technology that truly helps restaurants thrive in an ever-changing world.
          </p>
        </motion.div>
      </div>
    </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that shaped MyFojo's evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`flex items-center mb-8 animate-fade-in-up ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1 p-6">
                  <div className={`text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="text-3xl font-bold gradient-text mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-8 animate-glow-pulse">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


     

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Be Part of Our Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of restaurants that are already transforming their operations with MyFojo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/careers">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-full"
                >
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;