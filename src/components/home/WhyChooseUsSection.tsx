import { Link } from "react-router-dom";
import { IndianRupee, Users, Shield, FileText, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const reasons = [{
  icon: IndianRupee,
  title: "Competitive Rates",
  description: "Best-in-class pricing with no hidden charges. Get maximum value for your logistics spend."
}, {
  icon: Users,
  title: "Experienced Drivers",
  description: "Professional drivers with years of experience navigating Indian roads and conditions."
}, {
  icon: Shield,
  title: "Insured Cargo",
  description: "Comprehensive insurance coverage for your goods, ensuring peace of mind."
}, {
  icon: FileText,
  title: "Transparent Billing",
  description: "Clear, itemized invoices with complete breakdown of all charges."
}, {
  icon: Headphones,
  title: "Dedicated Support",
  description: "24/7 customer support team ready to assist you at every step."
}];
const WhyChooseUsSection = () => {
  return <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Shri Sanwariya Road Lines
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over <span className="text-black font-semibold">5+ years</span> of experience in Indian logistics, we understand your business 
              needs and deliver solutions that work.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => <div key={reason.title} className="flex items-start gap-4 group animate-fade-in-left" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                    <reason.icon className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>)}
            </div>

            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Image/Stats */}
          <div className="relative">
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl shadow-sm hover-lift animate-fade-in-up">
                  <div className="text-3xl font-bold mb-1 text-[#201c13]">5+</div>
                  <p className="text-muted-foreground text-sm">Years in Business</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm hover-lift animate-fade-in-up" style={{
                animationDelay: "0.1s"
              }}>
                  <div className="text-3xl font-bold mb-1 text-primary-foreground">500+</div>
                  <p className="text-muted-foreground text-sm">Active Clients</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm hover-lift animate-fade-in-up" style={{
                animationDelay: "0.2s"
              }}>
                  <div className="text-3xl font-bold mb-1 text-primary-foreground">1000+</div>
                  <p className="text-sm text-primary-foreground">Fleet Size</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-sm hover-lift animate-fade-in-up" style={{
                animationDelay: "0.3s"
              }}>
                  <div className="text-3xl font-bold mb-1 text-primary-foreground">24/7</div>
                  <p className="text-muted-foreground text-sm">Support Available</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 bg-card p-6 rounded-xl shadow-sm border-l-4 border-primary">
                <p className="text-muted-foreground italic mb-4">
                  "Shri Sanwariya Road Lines has been our trusted partner for 5 years. 
                  Their reliability and professionalism is unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-bold bg-cyan-200 text-primary-foreground">RK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Rajesh Kumar</p>
                    <p className="text-muted-foreground text-xs">Operations Head, ABC Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;