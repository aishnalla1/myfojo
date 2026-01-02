import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: ""
  });

  // ✅ Reusable change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Use emailjs.send instead of sendForm
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_53kjbcp",          // your EmailJS service ID
        "template_mustuw9",         // your template ID
        {
          user_name: formData.name,
          user_phone: formData.phone,
          user_email: formData.email,
          service: formData.reason,
          message: formData.message
        },
        "X40TI-dqBLiG4Yn4O"         
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          reason: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  const contactInfo = [
    {
      icon: "📱",
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Mon-Sat, 9AM-7PM IST"
    },
    {
      icon: "📧",
      title: "Email Us",
      content: "contactus@myfojo.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: "📍",
      title: "Visit Us",
      content: `FOOMILL PRIVATE LIMITED, 1350, Sector 28, Faridabad, Haryana 121008`,
      description: "India"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      content: "+91 98765 43210",
      description: "Quick support & demos"
    }
  ];

  return (
    <Layout>
      <VideoHero
        title="Contact MyFojo"
        subtitle="Let's discuss how we can transform your restaurant"
      />

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Ready to revolutionize your restaurant operations? We're here to
                help you get started with the perfect solutions for your
                business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="service-card p-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="text-3xl mb-2 animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {info.icon}
                    </div>
                    <h3 className="font-bold mb-1">{info.title}</h3>
                    <p className="text-primary font-medium">{info.content}</p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="service-card p-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      required
                      className="mt-1"
                      placeholder="+91 98765 43210"
                      onChange={handleChange}
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
                    required
                    className="mt-1"
                    placeholder="your@email.com"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="reason">
                    Why are you reaching out to us? *
                  </Label>
                  <Input
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    required
                    className="mt-1"
                    placeholder="e.g., Interested in WhatsApp delivery, Need POS system..."
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us more about your requirements..."
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="cta-button text-primary-foreground flex-1"
                  >
                    Book a Demo
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    onClick={() => {
                      toast({
                        title: "Meeting Scheduled!",
                        description:
                          "We'll send you a calendar invite shortly."
                      });
                    }}
                  >
                    Schedule Meeting
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

     

    </Layout>
  );
};

export default Contact;
