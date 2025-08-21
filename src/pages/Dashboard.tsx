import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Users, MessageSquare, Calendar, CheckSquare, Plus, TrendingUp, Clock, Star } from "lucide-react";

const Dashboard = () => {
  const studyGroups = [
    { name: "Advanced Mathematics", members: 12, subject: "Math", nextSession: "Today 3:00 PM", color: "bg-primary" },
    { name: "Web Development", members: 8, subject: "CS", nextSession: "Tomorrow 2:00 PM", color: "bg-secondary" },
    { name: "Physics Lab Prep", members: 6, subject: "Physics", nextSession: "Wed 10:00 AM", color: "bg-accent" },
  ];

  const upcomingTasks = [
    { title: "Math Assignment Due", priority: "High", dueDate: "Today", status: "pending" },
    { title: "Physics Lab Report", priority: "Medium", dueDate: "Tomorrow", status: "in-progress" },
    { title: "CS Project Review", priority: "Low", dueDate: "Friday", status: "completed" },
  ];

  const recentConnections = [
    { name: "Sarah Johnson", field: "Computer Science", role: "Senior", avatar: "SJ" },
    { name: "Mike Chen", field: "Mathematics", role: "Peer", avatar: "MC" },
    { name: "Dr. Emily Davis", field: "Physics", role: "Mentor", avatar: "ED" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening with your learning journey today.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Groups</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">3</div>
                <p className="text-xs text-muted-foreground">+1 from last week</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <CheckSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">12</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">28</div>
                <p className="text-xs text-muted-foreground">+4 from last week</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grade Average</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">92%</div>
                <p className="text-xs text-muted-foreground">+2% this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Study Groups */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Active Study Groups
                    </CardTitle>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Join Group
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studyGroups.map((group, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${group.color}`}></div>
                          <div>
                            <h3 className="font-semibold">{group.name}</h3>
                            <p className="text-sm text-muted-foreground">{group.members} members • Next: {group.nextSession}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{group.subject}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Tasks */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-accent" />
                    Upcoming Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                        <div className="space-y-1">
                          <h4 className="font-medium">{task.title}</h4>
                          <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"}
                          >
                            {task.priority}
                          </Badge>
                          <div className={`w-2 h-2 rounded-full ${
                            task.status === "completed" ? "bg-success" : 
                            task.status === "in-progress" ? "bg-accent" : "bg-muted"
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Connections */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-secondary" />
                    Recent Connections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentConnections.map((connection, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {connection.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{connection.name}</h4>
                          <p className="text-xs text-muted-foreground">{connection.field} • {connection.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    View All Connections
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="gradient" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Create Study Group
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Find Study Partner
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;