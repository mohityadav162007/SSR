import { Calendar, MapPin, Package, Clock } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    icon: Calendar,
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: MapPin,
    value: 500,
    suffix: "+",
    label: "Cities Served",
  },
  {
    icon: Package,
    value: 500,
    suffix: "+",
    label: "Deliveries Monthly",
  },
  {
    icon: Clock,
    value: 98,
    suffix: "%",
    label: "On-Time Rate",
  },
];

const StatsSection = () => {
  return (
    <section id="stats-section" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-black/10 rounded-full mb-4">
                <stat.icon className="h-7 w-7 text-black" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-black/80 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
