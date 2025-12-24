import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
const contactInfo = [{
  icon: Phone,
  title: "Phone",
  value: "+91 6260001228",
  link: "tel:+916260001228"
}, {
  icon: Mail,
  title: "Email",
  value: "info@shrisanwariyaroadlines.in",
  link: "mailto:info@shrisanwariyaroadlines.in"
}, {
  icon: MapPin,
  title: "Head Office",
  value: "Plot No. 24, New Loha Mandi, Gopal Ganj Square, Dewas Naka, Indore - 452010",
  link: "https://maps.app.goo.gl/j8x5jppczWW8W2w2A"
}, {
  icon: Clock,
  title: "Working Hours",
  value: "Mon - Sat: 9 AM - 7 PM",
  link: null
}];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    shipmentDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      shipmentDetails: ""
    });
    setIsSubmitting(false);
  };
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about our services? Need a quote? 
              Our team is here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you need a quick quote, have questions about our services, 
                or want to discuss a long-term logistics partnership, we're here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => <Card key={info.title} className="hover-lift bg-card border-border/50 animate-fade-in-up" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="text-black shadow-lg bg-white px-px py-0 w-[26px] h-[26px] border-0 border-none rounded-none" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        {info.link ? <a href={info.link} className="font-semibold text-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a> : <p className="font-semibold text-foreground">{info.value}</p>}
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Map Placeholder */}
              <Card className="mt-8 overflow-hidden border-border/50">
                <div className="h-48 bg-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-black bg-[#e4dcc8] border rounded-full" />
                    <p className="text-muted-foreground text-center text-base font-medium">
                      ​Plot No. 24, New Loha Mandi, Gopal Ganj Square,
Dewas Naka, Indore - 452010      
                 
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <Card className="bg-card border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} required className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 " value={formData.phone} onChange={handleInputChange} required className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="shipmentDetails">Shipment Details *</Label>
                      <Textarea id="shipmentDetails" name="shipmentDetails" placeholder="Tell us about your shipment requirements (cargo type, weight, origin, destination, etc.)" value={formData.shipmentDetails} onChange={handleInputChange} required rows={5} className="bg-background resize-none" />
                    </div>

                    <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-6">
                    We typically respond within 2-4 business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Call us directly or chat with us on WhatsApp for instant support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916260001228">
              <Button variant="secondary" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/916260001228?text=Hello!%20I%20would%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;