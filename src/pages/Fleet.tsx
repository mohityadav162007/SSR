import Layout from "@/components/layout/Layout";
import { Truck, Package, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const vehicles = [{
  name: "Tata Ace",
  capacity: "0.75 - 1 Ton",
  dimensions: "7ft x 4.5ft x 4.5ft",
  type: "Mini Truck",
  bestFor: "Small consignments, Intra-city, E-commerce",
  image: "TA"
}, {
  name: "14 ft Truck",
  capacity: "3 - 4 Tons",
  dimensions: "14ft x 6ft x 6ft",
  type: "Light Commercial",
  bestFor: "FMCG, Retail goods, Small machinery",
  image: "14"
}, {
  name: "17 ft Truck",
  capacity: "5 - 6 Tons",
  dimensions: "17ft x 6ft x 6ft",
  type: "Medium Commercial",
  bestFor: "Electronics, Furniture, Industrial goods",
  image: "17"
}, {
  name: "19 ft Truck",
  capacity: "7 - 8 Tons",
  dimensions: "19ft x 7ft x 7ft",
  type: "Medium Commercial",
  bestFor: "Manufacturing, Textile, FMCG bulk",
  image: "19"
}, {
  name: "20 ft Container",
  capacity: "8 - 10 Tons",
  dimensions: "20ft x 8ft x 8ft",
  type: "Closed Container",
  bestFor: "Weather-sensitive cargo, Electronics, Pharma",
  image: "20C"
}, {
  name: "22 ft Container",
  capacity: "10 - 14 Tons",
  dimensions: "22ft x 8ft x 8ft",
  type: "Closed Container",
  bestFor: "Long-distance, High-value goods, Perishables",
  image: "22C"
}, {
  name: "32 ft SXL / MXL",
  capacity: "15 - 18 Tons",
  dimensions: "32ft x 8ft x 8ft",
  type: "Heavy Commercial",
  bestFor: "Bulk cargo, Steel, Cement, Industrial machinery",
  image: "32"
}, {
  name: "Open Truck",
  capacity: "10 - 25 Tons",
  dimensions: "Various sizes available",
  type: "Open Body",
  bestFor: "Construction material, Heavy machinery, Steel",
  image: "OT"
}, {
  name: "Closed Container",
  capacity: "8 - 18 Tons",
  dimensions: "Various sizes available",
  type: "Full Container",
  bestFor: "Protected cargo, Electronics, FMCG, Textiles",
  image: "CC"
}];
const Fleet = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Fleet
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Our Fleet & Vehicle Options
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose from our diverse range of vehicles to match your cargo requirements. 
              From small consignments to heavy bulk cargo, we have the right truck for you.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => <Card key={vehicle.name} className="group hover-lift bg-card border-border/50 overflow-hidden animate-fade-in-up" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <CardContent className="p-0">
                  {/* Vehicle Image Placeholder */}
                  <div className="h-48 bg-primary/5 flex items-center justify-center relative overflow-hidden">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-[#e4dcc8]">
                      <Truck className="h-12 w-12 text-black" />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {vehicle.image}
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {vehicle.type}
                    </p>

                    {/* Specs */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between py-2 border-b border-border/50">
                        <span className="text-sm text-muted-foreground">Load Capacity</span>
                        <span className="text-sm font-semibold text-foreground text-center">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border/50">
                        <span className="text-sm text-muted-foreground">Dimensions</span>
                        <span className="text-sm font-semibold text-foreground">{vehicle.dimensions}</span>
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                      <div className="flex items-start gap-2">
                        <Package className="h-4 w-4 mt-0.5 shrink-0 border-accent text-black bg-[#e4dcc8]" />
                        <p className="text-xs text-muted-foreground">
                          <span className="font-semibold text-sidebar-foreground">Best For: </span>
                          {vehicle.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary-foreground mb-2">1000+</div>
              <p className="text-primary-foreground/80">Total Vehicles</p>
            </div>
            <div className="animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
              <div className="text-4xl font-bold text-primary-foreground mb-2">9</div>
              <p className="text-primary-foreground/80">Vehicle Types</p>
            </div>
            <div className="animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>
              <div className="text-4xl font-bold text-primary-foreground mb-2">GPS</div>
              <p className="text-primary-foreground/80">Enabled Fleet</p>
            </div>
            <div className="animate-fade-in-up" style={{
            animationDelay: "0.3s"
          }}>
              <div className="text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <p className="text-primary-foreground/80">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need Help Choosing the Right Vehicle?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our logistics experts can help you select the perfect vehicle 
            based on your cargo type, weight, and destination.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Get Expert Advice
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Fleet;