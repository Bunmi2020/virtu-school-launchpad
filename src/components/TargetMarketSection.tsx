import { Users, BookOpen, School, Target } from "lucide-react";

const TargetMarketSection = () => {
  const markets = [
    {
      icon: Users,
      title: "K-12 Students",
      description: "Primary and secondary education students seeking engaging, personalized learning experiences",
      stats: "1.3B students globally"
    },
    {
      icon: BookOpen,
      title: "Test Prep Learners",
      description: "Students preparing for standardized tests, entrance exams, and certification programs",
      stats: "20M+ test takers annually"
    },
    {
      icon: School,
      title: "Educational Institutions",
      description: "Schools and districts seeking cost-effective virtual delivery and enhanced learning outcomes",
      stats: "300K+ schools worldwide"
    }
  ];

  return (
    <section id="target-market" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            🎯 Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Slide Study Center is designed to serve the diverse needs of modern education, from individual learners to large institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-large transition-all duration-300"
            >
              {/* Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <market.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {market.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {market.description}
                </p>
                
                <div className="text-sm font-semibold text-primary">
                  {market.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach Visualization */}
        <div className="relative rounded-2xl bg-gradient-hero p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl"></div>
          <div className="relative z-10">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Global Educational Impact
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our platform is designed to scale globally, serving diverse educational needs across different cultures, languages, and learning systems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">∞</div>
                <div className="text-sm text-muted-foreground">Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetMarketSection;