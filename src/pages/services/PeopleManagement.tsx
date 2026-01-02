import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { ArrowRight, Users, Clock, DollarSign, TrendingUp, CheckCircle, UserCheck } from 'lucide-react';

const PeopleManagement = () => {
  const services = [
    {
      icon: "🔍",
      title: "Recruitment Services",
      description: "Find and hire the best talent for your restaurant with our comprehensive recruitment process"
    },
    {
      icon: "📚",
      title: "Training Programs",
      description: "Professional training programs to upskill your staff and improve service quality"
    },
    {
      icon: "📊",
      title: "Performance Management",
      description: "Track and manage employee performance with our advanced HR analytics"
    },
    {
      icon: "💰",
      title: "Payroll Management",
      description: "Automated payroll processing with tax compliance and benefit management"
    },
    {
      icon: "📅",
      title: "Shift Scheduling",
      description: "Efficient staff scheduling with automated shift management and coverage"
    },
    {
      icon: "🎯",
      title: "Employee Engagement",
      description: "Boost staff morale and retention with engagement programs and rewards"
    }
  ];

  const hrServices = [
    'Employee onboarding',
    'Performance evaluations',
    'Training and development',
    'Compliance management',
    'Employee relations',
    'Benefits administration',
    'Workplace safety protocols',
    'Exit interviews and offboarding'
  ];


  const benefits = [
    'Reduce HR administrative burden',
    'Improve employee satisfaction',
    'Ensure legal compliance',
    'Streamline hiring process',
    'Better workforce planning',
    'Cost-effective HR solutions',
    'Expert HR guidance',
    'Customized HR policies'
  ];

  return (
    <Layout>
      <div className="w-full">
      <VideoHero
        title="People Management Solutions"
        subtitle="Complete HR services designed specifically for restaurants"
        imageSrc="/images/hr.png"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Start HR Consultation
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            View Demo
          </Button>
        </div>
      </VideoHero>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="gradient-text">Our HR Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive people management solutions to help your restaurant build and maintain a stellar team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="service-card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Services Detail Section */}
<section className="py-20  lg: flex-row bg-gradient-to-r from-blue-900 via blue-800 to blue-900 ">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Text Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
          Complete <span className="gradient-text">HR Solutions</span>
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          From hiring to retirement, we handle all aspects of human resources so you can focus on running your restaurant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hrServices.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-medium">{service}</span>
            </div>
          ))}
        </div>

        
      </div>

      {/* Right Image */}
      <div className="lg:w-full h-full flex justify-end items-end">
        <img
          src="/images/hrright.jpg"
          alt="HR Management Illustration"
          className="w-full h-full object-cover drop-shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


  <section className="py-20 bg-background">
  <div className="container mx-auto px-8">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-black mb-8">
        Why Partner <span className="gradient-text">With Us?</span> 
      </h2>
      <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Expert HR services that save you time, reduce costs, and help you build a stronger team.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {benefits.map((benefit, index) => (
        <div 
          key={index} 
          className="service-card flex items-center space-x-4 p-6 md:p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <UserCheck className="w-10 h-10 text-blue-900 flex-shrink-0" /> {/* Bigger tick */}
          <span className="text-lg md:text-xl text-foreground font-semibold">
            {benefit}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Assessment
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We analyze your current HR needs and identify areas for improvement.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Implementation
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We implement customized HR solutions tailored to your restaurant's needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Ongoing Support
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide continuous support and optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="flex flex-col lg:flex-row items-stretch bg-gradient-to-r from-blue-900 via blue-800 to blue-900  ">
  
  {/* Left Content */}
  <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
  <div className="max-w-xl mt-6 lg:mt-12">
    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
      Ready to Build Your Dream Team?
    </h1>
    <p className="text-lg text-gray-200 mb-8">
      Let our HR experts help you attract, hire, and retain the best talent for your restaurant.
      Contact us today for a consultation.
    </p>

    <Link
      to="/contact"
      className="relative inline-block px-6 py-4 rounded-full font-medium text-lg text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-orange-500 before:to-red-500 before:blur-md before:opacity-50 before:animate-pulse"
    >
      <span className="relative z-10">Get HR Support</span>
    </Link>
  </div>
</div>


  {/* Right Image */}
  <div className="lg:w-1/2 flex justify-end items-end">
    <img
      src="/images/hrphoto.png"
      alt="HR Management Illustration"
      className="w-full max-w-[500px] h-auto object-contain drop-shadow-lg"
    />
  </div>

</section>
</div>
    </Layout>
  );
};

export default PeopleManagement;