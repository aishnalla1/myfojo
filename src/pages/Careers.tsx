import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";

const Careers = () => {
  const openings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      emoji: "💻",
      description: "Join our engineering team to build scalable restaurant technology solutions."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Bangalore",
      type: "Full-time",
      emoji: "📱",
      description: "Lead product strategy and development for our restaurant management platform."
    },
    {
      title: "Restaurant Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      emoji: "🤝",
      description: "Help restaurants succeed with our solutions and drive customer satisfaction."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      emoji: "📈",
      description: "Drive growth through digital marketing campaigns and content strategy."
    }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Above-market compensation packages" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical coverage for you and family" },
    { icon: "🌴", title: "Flexible PTO", description: "Unlimited vacation policy with work-life balance" },
    { icon: "📚", title: "Learning Budget", description: "Annual budget for courses, conferences, and books" },
    { icon: "🚀", title: "Growth Opportunities", description: "Fast-track career advancement in a growing company" },
    { icon: "🍕", title: "Food Allowance", description: "Daily meal credits and team lunch events" }
  ];

  const process = [
    { step: "1", title: "Apply Online", description: "Submit your application through our careers portal" },
    { step: "2", title: "Initial Screening", description: "HR call to discuss your background and interests" },
    { step: "3", title: "Technical/Role Assessment", description: "Skills evaluation relevant to the position" },
    { step: "4", title: "Team Interview", description: "Meet with potential teammates and manager" },
    { step: "5", title: "Final Interview", description: "Leadership discussion about culture fit and vision" },
    { step: "6", title: "Offer & Onboarding", description: "Welcome to the MyFojo family!" }
  ];

  return (
    <Layout>
      <VideoHero
        title="Join the MyFojo Team"
        subtitle="Build the future of restaurant technology with us"
      >
        <Link to="#openings">
          <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
            View Open Positions
          </Button>
        </Link>
      </VideoHero>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="gradient-text">Why Choose MyFojo?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Join a mission-driven team that's revolutionizing how restaurants operate and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="service-card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Open Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find your perfect role and help shape the future of restaurant technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <div 
                key={job.title}
                className="service-card p-6 flex items-center justify-between animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {job.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <p className="text-muted-foreground mb-1">{job.description}</p>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span>📍 {job.location}</span>
                      <span>🏢 {job.department}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="cta-button text-primary-foreground">
                    Apply Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for exceptional talent.
            </p>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Send Us Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Hiring Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A transparent, fair process designed to find the best mutual fit
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div 
                  key={step.step}
                  className="service-card p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto animate-glow-pulse">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 gradient-text">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Our Culture
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">🚀 Innovation First</h3>
                  <p className="text-muted-foreground">We encourage experimentation and embrace new ideas that can improve restaurant operations.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">🤝 Customer Obsession</h3>
                  <p className="text-muted-foreground">Every decision we make is driven by what's best for the restaurants we serve.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">💪 Ownership Mindset</h3>
                  <p className="text-muted-foreground">We take responsibility for our work and the success of our customers and company.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">🌱 Continuous Learning</h3>
                  <p className="text-muted-foreground">We invest in personal growth and encourage learning from both successes and failures.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="service-card p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-bold text-lg">Mission-Driven</h3>
              </div>
              <div className="service-card p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-bold text-lg">Fast-Paced</h3>
              </div>
              <div className="service-card p-4 text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-bold text-lg">Results-Oriented</h3>
              </div>
              <div className="service-card p-4 text-center">
                <div className="text-3xl mb-2">🎉</div>
                <h3 className="font-bold text-lg">Fun Environment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Join Our Mission?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Help us build the future of restaurant technology and make a real impact on the food industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
                  Apply Today
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-full"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;