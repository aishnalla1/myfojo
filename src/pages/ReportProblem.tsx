import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";

const ReportProblem = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    problemType: "",
    orderNumber: "",
    description: "",
    urgency: ""
  });

  const problemTypes = [
    { value: "damaged-product", label: "🔧 Damaged Product", description: "Received damaged or defective items" },
    { value: "wrong-order", label: "📦 Wrong Order", description: "Received incorrect items or quantities" },
    { value: "delivery-issue", label: "🚚 Delivery Issue", description: "Problems with delivery or timing" },
    { value: "payment-issue", label: "💳 Payment Issue", description: "Billing or payment problems" },
    { value: "app-bug", label: "🐛 App/Technical Issue", description: "Software bugs or technical problems" },
    { value: "service-quality", label: "⭐ Service Quality", description: "Issues with service quality or staff" },
    { value: "other", label: "❓ Other", description: "Other issues not listed above" }
  ];

  const urgencyLevels = [
    { value: "low", label: "🟢 Low", description: "General inquiry or minor issue" },
    { value: "medium", label: "🟡 Medium", description: "Issue affecting operations" },
    { value: "high", label: "🟠 High", description: "Significant problem requiring attention" },
    { value: "critical", label: "🔴 Critical", description: "Emergency requiring immediate response" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a ticket number
    const ticketNumber = `MF${Date.now().toString().slice(-6)}`;
    
    toast({
      title: "Problem Report Submitted!",
      description: `Your ticket #${ticketNumber} has been created. We'll respond within 24 hours.`,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      problemType: "",
      orderNumber: "",
      description: "",
      urgency: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      <VideoHero
        title="Report a Problem"
        subtitle="We're here to help resolve any issues you're experiencing"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
             Call Support: 9990964509
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Email us: contactus@myfojo.comn
          </Button>
        </div>
      </VideoHero>

      {/* Problem Types Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Common Issues We Help With</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Select the type of problem you're experiencing for faster resolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problemTypes.map((type, index) => (
              <div 
                key={type.value}
                className="service-card p-6 text-center cursor-pointer hover:border-primary transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleSelectChange('problemType', type.value)}
              >
                <h3 className="text-lg font-bold mb-2">{type.label}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 gradient-text">
                Submit a Problem Report
              </h2>
              <p className="text-muted-foreground">
                Please provide as much detail as possible to help us resolve your issue quickly
              </p>
            </div>

            <div className="service-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="9990964509"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="problemType">Problem Type *</Label>
                    <Select onValueChange={(value) => handleSelectChange('problemType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select problem type" />
                      </SelectTrigger>
                      <SelectContent>
                        {problemTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Urgency Level *</Label>
                    <Select onValueChange={(value) => handleSelectChange('urgency', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="orderNumber">Order/Reference Number</Label>
                  <Input
                    id="orderNumber"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="e.g., MF123456 (if applicable)"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Problem Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    rows={6}
                    placeholder="Please describe the problem in detail, including when it occurred, what you expected to happen, and any error messages you received..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="cta-button text-primary-foreground flex-1"
                  >
                    Submit Report
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    onClick={() => {
                      toast({
                        title: "Call Initiated!",
                        description: "Redirecting to call our support team...",
                      });
                    }}
                  >
                    Call Support Instead
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Additional Support Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="service-card p-6 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone Support</h3>
              <p className="text-muted-foreground mb-4">Immediate assistance for urgent issues</p>
              <p className="font-medium">9990964509</p>
              <p className="text-sm text-muted-foreground">Mon-Sat, 9AM-7PM IST</p>
            </div>

           

            <div className="service-card p-6 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">Detailed issue resolution</p>
              <p className="font-medium">contactus@myfojo.com</p>
              <p className="text-sm text-muted-foreground">Response within 4 hours</p>
            </div>
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default ReportProblem;