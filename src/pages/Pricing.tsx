import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { Check, X ,Plus} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import deliveryIntegrations from "/images/delivery-integrations.png";
import inventoryManagement from "/images/inventory-management.png";
const Pricing= () => {
  const features = [
    "Order & Table Management",
    "Menu Management", 
    "User Management",
    "Reports",
    "Cloudbased Analytical Dashboard",
    "Payment Integration",
    "Multi Device Sync",
    "Android App",
    "Web App", 
    "IOS App",
    "Multiple Kitchen Printing",
    "Multi Channel Support",
    "Whatsapp Integration",
    "Customer Promotions",
    "Digi QR",
    "SMS Bill",
    "Aggregator Integration",
    "Customized Website",
    "Inventory Management",
    "Kitchen Display System",
    "24/7 Support",
    "Menew Connect",
    "Tally"
  ];
const plans1 = [
    { name: "Trial", price: "Free", yearly: "" },
  { name: "Basic", price: "₹ 999/month", yearly: "₹ 7250/year" },
  { name: "Advanced", price: "₹ 15000/year", yearly: "" },
  { name: "Premium", price: "₹ 25000/year", yearly: "" },
  { name: "Build your own", price: "Custom Pricing", yearly: "" },
];
const matrix: (boolean | "addon")[][] = [
  [true, true, true, true, true], // Order & Table
  [true, true, true, true, true], // Menu
  [true, true, true, true, true], // User Management
  [true, true, true, true, true], // Reports
  [true, true, true, true, true], // Dashboard
  [false, true, true, true, true], // Payment
  [false, true, true, true, true], // Multi device
  [false, true, true, true, true], // Android
  [true, true, true, true, true], // Web App
  [false, true, true, true, true], // IOS
  [false, false, true, true, true], // Multi Kitchen Print
  [false, false, true, true, true], // Multi Channel
  [false, true, false, true, true], // Whatsapp
  [false, true, true, true, true], // Customer Promo
  [false, true, true, true, true], // Digi QR
  [false, true, true, true, true], // SMS Bill
  [false, true, true, true, true], // Aggregator
  [false, "addon", "addon", "addon", "addon"], // Customized website
  [false, "addon", "addon", "addon", "addon"], // Inventory
  [false, "addon", "addon", "addon", "addon"], // Kitchen Display
  [false, "addon", "addon", "addon", "addon"], // 24/7 Support
  [false, "addon", "addon", "addon", "addon"], // Menew Connect
  [false, "addon", "addon", "addon", "addon"], // Tally
];
const plans = [
    {
      title: "Basic",
      description: "Ideal for single-location restaurants with the key focus on Billing functionality",
      price: "₹ 999",
      period: "/Month",
      yearlyPrice: "₹ 7250",
      yearlyPeriod: "/Year",
      features: [
        "Cloud-based point of sale",
        "Order Management", 
        "QR Based Ordering"
      ],
      buttonText: "Purchase",
      buttonVariant: "outline" as const,
      headerColor: "bg-red-100"
    },
    {
      title: "Advanced",
      description: "Ideal for restaurants looking to get started with core functionality",
      price: "₹ 15000",
      period: "/Year",
      features: [
        "Aggregator Integration",
        "Customized Ordering Website",
        "Customer Promotions"
      ],
      buttonText: "Get a Demo",
      buttonVariant: "outline" as const,
      headerColor: "bg-red-300"
    },
    {
      title: "Premium", 
      description: "Perfect for restaurants demanding the highest level of performance and all-inclusive features.",
      price: "₹ 25000",
      period: "/Year",
      features: [
        "Inventory Management",
        "Kitchen Display System",
        "24/7 Premium Support"
      ],
      buttonText: "Get a Demo",
      buttonVariant: "outline" as const,
      headerColor: "bg-red-600"
    },
    {
      title: "Build your Own",
      description: "Perfect for restaurants aiming to boost revenue and streamline operations with the complete Menew platform.",
      price: "Custom",
      period: "Pricing",
      features: [
        "You choose the features that fit your needs"
      ],
      buttonText: "Get a Demo",
      buttonVariant: "outline" as const,
      headerColor: "bg-red-900"
    }
  ];


   const addOns = [
    {
      title: "Third-Party Delivery Integrations",
      description: "Effortless delivery integration with Menew-partnering with Dunzo and more to serve your customers fresh, hot meals, every time",
      image: deliveryIntegrations
    },
    {
      title: "Inventory Management", 
      description: "Stay Stocked and be in Control by managing Your Inventory with Precision and Ease",
      image: inventoryManagement
    },
    {
      title: "Tally for Simplified Accounting",
      description: "Simplify your accounting process with our intuitive integration with Tally, allowing you to manage your restaurant's financials seamlessly and efficiently",
      image: inventoryManagement
    },
    {
      title: "Menew Connect",
      description: "Simplify your restaurant's marketing and customer relations with Menew Connect where every order, payment, feedback and promotion is just a tap away",
      image: deliveryIntegrations
    },
    {
      title: "Digi QR",
      description: "Table-specific QR codes for seamless order management at your fingertips",
      image: inventoryManagement
    },
    {
      title: "Customized Website",
      description: "A flexible interface to tailor your site's design, menus, and promotions on the fly",
      image: deliveryIntegrations
    },
    {
      title: "Premium Support",
      description: "Round-the-clock assistance and choose your channel of communication i.e., through in-app, WhatsApp, call, or email",
      image: inventoryManagement
    },
    {
      title: "SMS Package",
      description: "Skip the paper by sending bills directly to your customer's phone with a single SMS",
      image: deliveryIntegrations
    },
    {
      title: "Customer Promotions",
      description: "Your Restaurant, Your Rules-Customize discounts and promotions for unbeatable customer engagement",
      image: inventoryManagement
    },
    {
      title: "Kitchen Display Unit",
      description: "Streamline your kitchen-no more paper, no more clutter, just seamless digital orders",
      image: deliveryIntegrations
    }
   ];

  return (
    <Layout>
      <VideoHero
        title="Flexible POS Software Price Options to Match Your Goals"
        subtitle="Choose the perfect plan for your restaurant's needs"
      >
        <Link to="/contact">
          <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
            Get Custom Quote
          </Button>
        </Link>
      </VideoHero>

      {/* Main Pricing Section */}
        <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          Subscription Based Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative border border-border hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className={`h-2 ${plan.headerColor}`}></div>

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {plan.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2 h-16">
                  {plan.description}
                </p>

                <div className="mt-4">
                  <div className="text-sm text-muted-foreground mb-2">
                    Starting at
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>

                  {plan.yearlyPrice && (
                    <div className="mt-2">
                      <span className="text-sm text-muted-foreground">or</span>
                      <div className="flex items-baseline justify-center mt-1">
                        <span className="text-2xl font-bold text-foreground">
                          {plan.yearlyPrice}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          {plan.yearlyPeriod}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-4 flex flex-col justify-between flex-1">
                <div>
                 <button
    onClick={() => (window.location.href = "/contact")}
    className="w-full mb-6 px-4 py-2 rounded-md border border-menew-green text-menew-green font-semibold hover:bg-menew-green hover:text-white transition-colors"
  >
    {plan.buttonText}
  </button>

                  <hr className="border-border mb-4" />

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <Check className="w-4 h-4 text-menew-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Orange Button pinned at bottom */}
<button
  className="w-full mt-6 px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors"
  onClick={() =>
    document.getElementById("comparison-chart")?.scrollIntoView({ behavior: "smooth" })
  }
>
  View All Features
</button>


              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Explore Add-Ons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOns.map((addOn, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src={addOn.image} 
                  alt={addOn.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{addOn.title}</h3>
              <p className="text-sm text-muted-foreground">{addOn.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 {/* Comparision Section */}
  <section  id="comparison-chart" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Plan Comparison Chart
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 text-left font-semibold">Feature</th>
                {plans1.map((plan, i) => (
                  <th key={i} className="p-4 text-center font-semibold min-w-40">
                    <div>{plan.name}</div>
                    <div className="text-sm">{plan.price}</div>
                    {plan.yearly && (
                      <div className="text-xs text-gray-300">{plan.yearly}</div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fIdx) => (
                <tr
                  key={fIdx}
                  className={fIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-200 p-3 text-sm font-medium text-gray-900">
                    {feature}
                  </td>
                  {matrix[fIdx].map((val, pIdx) => (
                    <td
                      key={pIdx}
                      className="border border-gray-200 p-3 text-center"
                    >
                      {val === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : val === false ? (
                        <X className="w-5 h-5 text-black mx-auto" />
                      ) : (
                        <Plus className="w-5 h-5 text-orange-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" /> Included
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-black" /> Not included
          </div>
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-orange-500" /> Available as Add-On
          </div>
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of restaurants already saving money and increasing profits with MyFojo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;