import { BookOpen, Users, Route, Cloud } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "AI-Generated Lessons",
      description: "Intelligent content creation that transforms textbooks into engaging, interactive digital experiences with perfect syllabus alignment."
    },
    {
      icon: Users,
      title: "Human Curation & Oversight",
      description: "Expert educators review and refine all AI-generated content, ensuring quality, accuracy, and pedagogical excellence."
    },
    {
      icon: Route,
      title: "Adaptive Learning Paths",
      description: "Personalized learning journeys that adapt to each student's pace, learning style, and knowledge gaps in real-time."
    },
    {
      icon: Cloud,
      title: "SaaS Architecture",
      description: "Scalable cloud-based platform that connects schools, teachers, and students with seamless integration and management."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            🔍 Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Slide Study Center combines cutting-edge AI technology with human expertise to deliver unparalleled educational experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary text-primary-foreground shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-hero border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            The Perfect Balance
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages AI efficiency with human wisdom, creating educational content that's both scalable and meaningful. Every lesson is generated with intelligence and refined with expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;