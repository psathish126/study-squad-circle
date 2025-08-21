import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const LandingHero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="gradient-hero bg-clip-text text-transparent">
                  Each One
                </span>
                <br />
                <span className="text-foreground">Teach One</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connect with peers, find study groups, and accelerate your learning through 
                collaborative education. Where every student becomes both teacher and learner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">10K+ Students</p>
                  <p className="text-xs text-muted-foreground">Active Learners</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">500+ Groups</p>
                  <p className="text-xs text-muted-foreground">Study Sessions</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">24/7</p>
                  <p className="text-xs text-muted-foreground">Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="Students collaborating and learning together"
              className="relative z-10 w-full h-auto rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;