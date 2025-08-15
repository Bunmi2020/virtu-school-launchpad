import { TrendingUp, Cpu, Globe } from "lucide-react";

const WhyNowSection = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Growing Demand",
      description: "Demand for personalized, scalable education solutions is at an all-time high"
    },
    {
      icon: Cpu,
      title: "AI at Scale",
      description: "AI delivering structured, syllabus-aligned content at unprecedented scale"
    },
    {
      icon: Globe,
      title: "Market Opportunity",
      description: "Global edtech market projected to exceed $400B by 2030"
    }
  ];

  return (
    <section id="why-now" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            📈 Why Now?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The convergence of AI technology, educational needs, and market opportunity creates the perfect moment for Slide Study Center.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground shadow-medium group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">$300B+</div>
            <div className="text-sm text-muted-foreground">Market Size by 2030</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">65%</div>
            <div className="text-sm text-muted-foreground">Schools Need AI Solutions</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">1.3B+</div>
            <div className="text-sm text-muted-foreground">Students Worldwide</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">80%</div>
            <div className="text-sm text-muted-foreground">Want Personalized Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;