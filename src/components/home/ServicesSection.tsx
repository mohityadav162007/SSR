import { Link } from "react-router-dom";
import { Truck, Package, Zap, Warehouse, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Full Truck Load",
    description: "Dedicated trucks for large shipments ensuring maximum efficiency and cost-effectiveness.",
  },
  {
    icon: Package,
    title: "Part Truck Load",
    description: "Share truck space for smaller loads, reducing costs while maintaining reliability.",
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Time-critical shipments delivered with priority handling and faster transit times.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage solutions with inventory management across key locations.",
  },
  {
    icon: MapPin,
    title: "Last Mile Delivery",
    description: "Final delivery to your customer's doorstep with real-time tracking.",
  },
  {
    icon: Clock,
    title: "Same Day Dispatch",
    description: "Urgent shipments dispatched on the same day for time-sensitive cargo.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Logistics Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive transportation solutions tailored to meet your business needs across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover-lift bg-card border-border/50 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
