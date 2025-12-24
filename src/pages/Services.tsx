import Layout from "@/components/layout/Layout";
import { Truck, Package, Zap, Warehouse, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const services = [{
  icon: Truck,
  title: "Full Truck Load (FTL)",
  description: "Dedicated truck services for large shipments requiring exclusive vehicle space. Ideal for bulk cargo movement across India.",
  features: ["Dedicated vehicle for your cargo", "Direct point-to-point delivery", "Faster transit times", "Cost-effective for bulk shipments", "Available in multiple truck sizes"],
  bestFor: "Manufacturing, Steel, Cement, Large Retailers"
}, {
  icon: Package,
  title: "Part Truck Load (PTL)",
  description: "Share truck space with other shippers for cost-effective transportation of smaller consignments without compromising on service quality.",
  features: ["Pay only for space used", "Regular scheduled departures", "Hub-to-hub connectivity", "Ideal for SMEs and startups", "Consolidated shipments"],
  bestFor: "SMEs, E-commerce, FMCG, Retail"
}, {
  icon: Zap,
  title: "Express Delivery",
  description: "Time-critical shipments delivered with priority handling and guaranteed faster transit times for urgent cargo requirements.",
  features: ["Priority loading and unloading", "Dedicated express routes", "Guaranteed delivery timelines", "Real-time tracking", "Premium handling care"],
  bestFor: "Pharma, Medical, Electronics, Perishables"
}, {
  icon: Warehouse,
  title: "Warehousing Solutions",
  description: "Secure storage facilities across key locations with modern inventory management systems and flexible storage options.",
  features: ["Strategic warehouse locations", "Inventory management system", "Pick and pack services", "Cross-docking facility", "24/7 security surveillance"],
  bestFor: "E-commerce, D2C, FMCG, Manufacturing"
}, {
  icon: MapPin,
  title: "Last Mile Delivery",
  description: "Final leg delivery services ensuring your products reach the end customer safely and on time with doorstep delivery.",
  features: ["Doorstep delivery", "Proof of delivery", "Cash on delivery option", "Same-day delivery available", "Customer notification updates"],
  bestFor: "E-commerce, D2C, Retail, Food & Beverages"
}, {
  icon: Clock,
  title: "Same Day Dispatch",
  description: "Urgent shipments dispatched on the same day of booking for time-sensitive cargo that cannot wait for regular schedules.",
  features: ["Booking cut-off till 2 PM", "Same-day pickup guaranteed", "Priority route allocation", "Emergency cargo handling", "Dedicated support team"],
  bestFor: "Spare Parts, Medical, Legal Documents, Critical Components"
}];
const Services = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              From full truck loads to last mile delivery, we offer end-to-end 
              transportation services tailored to your business needs across India.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => <Card key={service.title} className={`overflow-hidden border-border/50 animate-fade-in-up ${index % 2 === 0 ? "" : ""}`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    {/* Content Side */}
                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                        <service.icon className="h-7 w-7 text-black rounded bg-rose-50" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map(feature => <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 shrink-0 text-black" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </div>)}
                      </div>

                      {/* Best For */}
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <p className="text-sm">
                          <span className="text-center text-card-foreground font-bold">Best For: </span>
                          <span className="text-muted-foreground">{service.bestFor}</span>
                        </p>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className={`bg-primary/5 flex items-center justify-center p-12 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="relative">
                        <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center text-inherit">
                          <service.icon className="h-24 w-24 text-black" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">0{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Ship?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a customized quote for your logistics requirements. 
            Our team is ready to help you find the perfect solution.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="group">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Services;