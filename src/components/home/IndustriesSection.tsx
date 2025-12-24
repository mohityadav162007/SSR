import { Factory, ShoppingCart, HardHat, Wheat, Pill, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description: "Heavy machinery and industrial goods transportation with specialized handling.",
  },
  {
    icon: ShoppingCart,
    title: "FMCG & Retail",
    description: "Fast-moving consumer goods delivery with temperature-controlled options.",
  },
  {
    icon: HardHat,
    title: "Steel, Cement & Construction",
    description: "Bulk material transport for construction sites across India.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Food Grains",
    description: "Farm-to-market logistics ensuring freshness and timely delivery.",
  },
  {
    icon: Pill,
    title: "Pharma & Medical",
    description: "Compliant pharmaceutical logistics with cold chain capabilities.",
  },
  {
    icon: Package,
    title: "E-commerce & D2C",
    description: "Scalable fulfillment solutions for online businesses.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized logistics solutions across diverse sectors with industry-specific expertise.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={industry.title}
              className="group hover-lift bg-card border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <industry.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
