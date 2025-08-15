import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              👩🏻‍💻<span className="bg-gradient-primary bg-clip-text text-transparent">Slide Study Center</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl">Powered by AI.</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl">Guided by Educators.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Slide into smarter learning — empowering your self-study with the fusion of artificial intelligence and human expertise.
              </p>
            </div>
            <p className="text-xl font-bold text-secondary max-w-2xl mx-auto lg:mx-0">💼 We are hiring... <Button variant="hero-outline" size="lg"><a href="https://wellfound.com/company/slidestudycenter/jobs" target="_blank" rel="noopener noreferrer" >Check openings</a></Button></p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/*  <Button variant="hero" size="lg">
                Get Started
              </Button>
              <Button variant="hero-outline" size="lg">
                Learn More
              </Button> */}
            </div> 

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>AI-Powered Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Human Curated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Scalable SaaS</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Slide Study Center AI-powered education platform visualization"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;