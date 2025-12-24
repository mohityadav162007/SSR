import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe src="https://player.cloudinary.com/embed/?cloud_name=dng7xte6u&public_id=hero_1_goonft&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false" className="absolute inset-0 w-full h-full object-cover" style={{
        border: 'none',
        pointerEvents: 'none',
        transform: 'scale(1.5)',
        transformOrigin: 'center center'
      }} allow="autoplay; fullscreen; encrypted-media; picture-in-picture" title="Hero Background Video" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-white text-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full animate-pulse bg-black" />
            Trusted by 500+ Businesses Across India
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            Shri Sanwariya Road Lines
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
            Moving India Forward Together
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 hover-glow animate-bounce-subtle">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;