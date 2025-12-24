import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Shield, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const values = [{
  icon: Shield,
  title: "Reliability",
  description: "Consistent, dependable service you can count on for every shipment."
}, {
  icon: Users,
  title: "Customer First",
  description: "Your success is our priority. We go the extra mile for our clients."
}, {
  icon: Heart,
  title: "Integrity",
  description: "Honest, transparent dealings in every business relationship."
}, {
  icon: Award,
  title: "Excellence",
  description: "Committed to the highest standards in logistics operations."
}];
const milestones = [{
  year: "2008",
  event: "Founded in Mumbai with 5 trucks"
}, {
  year: "2012",
  event: "Expanded to 100+ vehicles across Western India"
}, {
  year: "2015",
  event: "Pan-India operations launched"
}, {
  year: "2018",
  event: "Crossed 500+ corporate clients"
}, {
  year: "2020",
  event: "Digital transformation and GPS fleet tracking"
}, {
  year: "2023",
  event: "100+ fleet strength achieved"
}];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Transport Partner Since 2008
            </h1>
            <p className="text-muted-foreground text-lg">
              With over 5 years of experience in Indian logistics, we understand the unique challenges of transportation across diverse terrains and markets.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Built on Trust, Driven by Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shri Sanwariya Road Lines was founded in 2008 in Mumbai with a simple vision: 
                  to make logistics reliable, affordable, and hassle-free for Indian businesses. 
                  What started with just 5 trucks has grown into a fleet of over 1000 vehicles 
                  serving 500+ cities across India.
                </p>
                <p>
                  Our deep understanding of Indian roads, diverse climatic conditions, and 
                  regional requirements sets us apart. We've successfully navigated the 
                  complexities of transporting goods from the congested lanes of Mumbai 
                  to the mountain roads of the Northeast.
                </p>
                <p>
                  Today, we're proud to be the logistics partner of choice for leading 
                  manufacturers, retailers, and e-commerce companies. Our commitment to 
                  on-time delivery, cargo safety, and customer satisfaction remains 
                  unwavering.
                </p>
              </div>
            </div>

            {/* Image/Stats Side */}
            <div className="relative animate-fade-in-right">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-xl shadow-sm text-center hover-lift">
                    <div className="text-4xl font-bold mb-2 text-primary-foreground">5+</div>
                    <p className="text-muted-foreground text-sm">Years Experience</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-sm text-center hover-lift">
                    <div className="text-4xl font-bold mb-2 text-primary-foreground">500+</div>
                    <p className="text-muted-foreground text-sm">Cities Covered</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-sm text-center hover-lift">
                    <div className="text-4xl font-bold mb-2 text-primary-foreground">100+</div>
                    <p className="text-muted-foreground text-sm">Vehicles</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl shadow-sm text-center hover-lift">
                    <div className="text-4xl font-bold mb-2 text-primary-foreground">98%</div>
                    <p className="text-muted-foreground text-sm">On-Time Rate</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-card border-border/50 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 bg-inherit text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide reliable, efficient, and cost-effective logistics solutions 
                  that empower Indian businesses to grow. We aim to be the backbone of 
                  India's supply chain, connecting manufacturers to markets seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-border/50 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted logistics company, known for innovation, 
                  sustainability, and customer-centricity. We envision a future where 
                  every business has access to world-class transportation services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={value.title} className="group hover-lift bg-card border-border/50 text-center animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => <div key={milestone.year} className={`relative flex items-center mb-8 animate-fade-in-up ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card p-4 rounded-xl shadow-sm border border-border/50 hover-lift">
                      <div className="font-bold text-lg mb-1 text-primary-foreground">{milestone.year}</div>
                      <p className="text-muted-foreground text-sm">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
              Why Businesses Trust Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Pan-India network covering 500+ cities", "Fleet of 1000+ GPS-enabled vehicles", "98% on-time delivery rate", "24/7 customer support team", "Fully insured cargo transportation", "Competitive and transparent pricing"].map((point, index) => <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0" />
                  <span className="text-primary-foreground">{point}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Shri Sanwariya Road Lines for their transportation needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default About;