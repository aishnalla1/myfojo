import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">
            Terms of Service
          </h1>
          
          <div className="text-muted-foreground text-center mb-12">
            <p>Last updated: January 15, 2024.<br/>To coverage full scope for managing restaurant, we created certain add-on which restaurateurs can avail via paying through online Payment Gateway. Below are the Terms and Conditions for the same.</p>
            
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Introduction</h2>
              <p className="mb-4">
                By accessing and using MyFojo's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Service Description</h2>
              <p className="mb-4">
                MyFojo provides comprehensive restaurant management solutions including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>WhatsApp delivery integration</li>
                <li>Point of Sale (POS) systems</li>
                <li>Food Studio marketing services</li>
                <li>Catering management</li>
                <li>Packaging supplies</li>
                <li>People management tools</li>
                <li>Order management systems</li>
              </ul>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not engage in any fraudulent or illegal activities</li>
                <li>Respect intellectual property rights</li>
                <li>Report any security vulnerabilities or issues</li>
              </ul>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscription fees are charged monthly or annually as selected</li>
                <li>Payments are due in advance for the selected billing period</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Late payments may result in service suspension</li>
              </ul>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of our services are owned by MyFojo and are protected by 
                international copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may not copy, modify, or distribute our software</li>
                <li>You retain ownership of your data and content</li>
                <li>We grant you a limited license to use our services</li>
              </ul>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Service Availability</h2>
              <p className="mb-4">
                We strive to maintain high service availability but cannot guarantee 100% uptime.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scheduled maintenance may cause temporary interruptions</li>
                <li>We will provide notice for planned downtime when possible</li>
                <li>Emergency maintenance may occur without prior notice</li>
                <li>Service level agreements are specified in your subscription plan</li>
              </ul>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">7. Data and Privacy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your data privacy is governed by our Privacy Policy</li>
                <li>You retain ownership of your business data</li>
                <li>We implement industry-standard security measures</li>
                <li>Data backups are performed regularly</li>
                <li>You can export your data at any time</li>
              </ul>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, MyFojo shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages.
              </p>
              <p>
                Our total liability for any claim shall not exceed the amount paid by you for the service in the 
                12 months preceding the claim.
              </p>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">9. Termination</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may cancel your subscription at any time</li>
                <li>We may terminate accounts for violation of these terms</li>
                <li>Upon termination, you have 30 days to export your data</li>
                <li>Prepaid fees are generally non-refundable except as required by law</li>
              </ul>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">10. Modifications</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Material changes will be communicated 
                to users with at least 30 days notice.
              </p>
              <p>
                Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="service-card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">11. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by the laws of India. Any disputes will be resolved in the courts of Bangalore, Karnataka.
              </p>
            </section>

            <section className="service-card p-8 bg-gradient-subtle">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@myfojo.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Address:</strong> MyFojo Technologies Pvt Ltd, Bangalore, Karnataka, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;