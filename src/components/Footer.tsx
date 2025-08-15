import { Book, Linkedin, Twitter, Mail, MapPin, Youtube, X, Instagram, Facebook } from "lucide-react";
import logo from "./logo.png";
import MyForm from "./newsletter";
const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
              <img src={logo} alt="Logo" className="h-11 w-11 text-primary" />
              </div>
              <span className="text-xl font-bold">Slide Study Center</span>
            </div>
            <p className="text-background/80 max-w-md leading-relaxed">
              Redefining virtual education through the fusion of artificial intelligence and human expertise. Building the future of personalized, scalable learning.
            </p>
            <div className="flex space-x-4">
              
              <a
                href="https://www.youtube.com/@slidestudycenter"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
               <a
                href="https://www.facebook.com/slidestudycenter/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/slidestudycenter"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/slidestudycenter"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/slide_sc"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-background/80 hover:text-background transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-now" className="text-background/80 hover:text-background transition-colors duration-200">
                  Why Now?
                </a>
              </li>
              <li>
                <a href="#target-market" className="text-background/80 hover:text-background transition-colors duration-200">
                  Target Market
                </a>
              </li>
              <li>
                <a href="#status" className="text-background/80 hover:text-background transition-colors duration-200">
                  Current Status
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/80"><a href="mailto:contact@slidestudycenter.com">contact@slidestudycenter.com</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">Global • Remote First</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              
                <MyForm />
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm">
            © 2025 SlideStudyCenter. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;