import { MapPin } from "lucide-react";

const cities = [
  "Mumbai",
  "Delhi",
  "Pune",
  "Indore",
  "Ahmedabad",
  "Jaipur",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
];

const CoverageSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Pan-India Coverage
          </h2>
          <p className="text-muted-foreground text-lg">
            Extensive logistics network spanning across all major cities and industrial hubs in India.
          </p>
        </div>

        {/* Map Placeholder with Cities */}
        <div className="relative max-w-4xl mx-auto">
          {/* India Map Outline (Simplified SVG representation) */}
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {cities.map((city, index) => (
                <div
                  key={city}
                  className="group flex flex-col items-center p-4 bg-card rounded-xl shadow-sm hover:shadow-lg hover:bg-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 group-hover:bg-white/20 rounded-full flex items-center justify-center mb-2 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-red-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            {/* Info Text */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                + 490 more cities and towns across all states
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
