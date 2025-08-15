import { Rocket, Users, Handshake, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StatusSection = () => {
  const statusItems = [
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Core platform features in active development with initial AI lesson generation capabilities",
      status: "In Progress",
      progress: 25
    },
    {
      icon: Users,
      title: "Pilot Programs",
      description: "Early access partnerships with select schools to test and refine our platform",
      status: "Planning",
      progress: 10
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Building relationships with educational institutions, content providers, and technology partners",
      status: "Active",
      progress: 20
    },
    {
      icon: DollarSign,
      title: "Funding Opportunities",
      description: "Seeking Series A funding to accelerate development and market expansion",
      status: "Open",
      progress: 5
    }
  ];

  return (
    <section id="status" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            🛠️ Current Status & Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us on our journey to revolutionize learning. We're actively seeking partners, advisors, and investors to help scale our vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {statusItems.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground shadow-medium group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      item.status === 'In Progress' ? 'bg-primary/10 text-primary' :
                      item.status === 'Active' ? 'bg-secondary/10 text-secondary' :
                      item.status === 'Open' ? 'bg-accent text-accent-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground font-medium">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 p-8 md:p-12 text-center border border-border">
          <div className="absolute inset-0 bg-gradient-hero opacity-50 rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Education Together?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're an educator, investor, or technology partner, we invite you to join our mission to revolutionize learning through AI and human expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group">
                <a href="https://wellfound.com/company/slidestudycenter/jobs" target="_blank" rel="noopener noreferrer" >Join Our Mission </a>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2025</div>
            <div className="text-sm text-muted-foreground">Founded</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">5</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2</div>
            <div className="text-sm text-muted-foreground">Pilot Schools</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">$20k</div>
            <div className="text-sm text-muted-foreground">Seeking Investment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;