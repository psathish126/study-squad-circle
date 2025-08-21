import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, CheckSquare, User, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <Link to="/" className="text-xl font-bold tracking-tight">
            EACH ONE TEACH ONE
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-smooth ${
              isActive("/dashboard")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/groups"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-smooth ${
              isActive("/groups")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Study Groups</span>
          </Link>
          <Link
            to="/calendar"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-smooth ${
              isActive("/calendar")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Calendar</span>
          </Link>
          <Link
            to="/tasks"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-smooth ${
              isActive("/tasks")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            <span>Tasks</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="gradient" size="sm">
            Join Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;