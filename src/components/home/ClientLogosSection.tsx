import delhiveryLogo from "@/assets/logos/delhivery.png";
import samsungLogo from "@/assets/logos/samsung.png";
import havellsLogo from "@/assets/logos/havells.png";
import voltasLogo from "@/assets/logos/voltas.png";
import lgLogo from "@/assets/logos/lg.png";

const logos = [
  { name: "Delhivery", logo: delhiveryLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Havells", logo: havellsLogo },
  { name: "Voltas", logo: voltasLogo },
  { name: "LG", logo: lgLogo },
];

const ClientLogosSection = () => {
  // Triple the logos to ensure seamless infinite scroll without any gaps
  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 gradient-bg overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Trusted by Leading Brands
          </h2>
        </div>
      </div>

      {/* Logo Slider */}
      <div className="relative">
        <div className="flex animate-scroll-seamless">
          {tripleLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="w-32 h-20 md:w-40 md:h-24 bg-card rounded-xl shadow-sm border border-border/50 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 group p-4">
                <img 
                  src={logo.logo} 
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default ClientLogosSection;