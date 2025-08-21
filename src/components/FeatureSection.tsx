import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Calendar, CheckSquare, BarChart3, Brain, UserCheck, BookOpen } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Peer Matching",
      description: "Our algorithm connects you with like-minded students based on interests, goals, and learning styles.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Study Groups",
      description: "Create or join study groups for any subject. Collaborate, share resources, and learn together.",
      color: "text-secondary"
    },
    {
      icon: Calendar,
      title: "Shared Calendar",
      description: "Coordinate study sessions, track deadlines, and never miss important group meetings again.",
      color: "text-accent"
    },
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Organize your academic tasks with smart prioritization and progress tracking.",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Grade Tracking",
      description: "Monitor your academic progress with detailed analytics and performance insights.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get personalized recommendations for study groups, resources, and learning strategies.",
      color: "text-secondary"
    },
    {
      icon: UserCheck,
      title: "Mentor Connections",
      description: "Connect with senior students and mentors in your field for guidance and support.",
      color: "text-accent"
    },
    {
      icon: BookOpen,
      title: "Resource Sharing",
      description: "Share and access study materials, notes, and resources within your learning community.",
      color: "text-success"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Everything you need to
            <span className="gradient-hero bg-clip-text text-transparent ml-2">
              learn together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to enhance collaborative learning and academic success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-primary transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-background rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;