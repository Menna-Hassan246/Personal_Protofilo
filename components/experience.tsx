import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Briefcase, TrendingUp, Award, Users, Code, Target } from "lucide-react"

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "Information Technology Institute (ITI)",
    location: "AlMinya, Egypt",
    period: "Aug 2025 - Present",
    description:
      "Developed backend APIs using Node.js and Express.js. Connected with MongoDB to handle CRUD operations. Collaborated with frontend developers to integrate APIs. Participated in Agile team stand-ups and weekly sprints.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Agile"],
    status: "current",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    achievements: [
      "Built 5+ RESTful APIs with comprehensive error handling",
      "Improved database query performance by 30%",
      "Collaborated with 3-person frontend team",
    ],
    icon: Code,
  },
  {
    title: ".NET Full Stack Intern",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Benha, Alqalyubiyah, Egypt",
    period: "June 2025 - Present",
    description:
      "Full-stack development using .NET technologies, focusing on building scalable web applications and backend services.",
    technologies: [".NET", "C#", "Full Stack Development", "MVC", "Entity Framework"],
    status: "current",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    achievements: [
      "Developed 3 full-stack web applications",
      "Implemented clean architecture patterns",
      "Mentored junior developers",
    ],
    icon: Building,
  },
  {
    title: ".NET Full Stack Intern",
    company: "Information Technology Institute (ITI)",
    location: "Benha, Alqalyubiyah, Egypt",
    period: "Sep 2024 - Oct 2024",
    description:
      "Intensive training in .NET Core, MVC architecture, and backend development. Focused on building robust web applications with modern development practices.",
    technologies: [".NET Core", "MVC", "C#", "SQL Server", "Entity Framework"],
    status: "completed",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    achievements: [
      "Completed intensive 2-month training program",
      "Built e-commerce web application from scratch",
      "Achieved 95% in final assessment",
    ],
    icon: Award,
  },
  {
    title: "FrontEnd Technical Team Member",
    company: "IEEE Menoufia University Student Branch",
    location: "Remote",
    period: "Oct 2024",
    description:
      "Contributed to frontend development projects and participated in technical workshops focused on modern web development practices.",
    technologies: ["Frontend Development", "Web Technologies", "React", "JavaScript"],
    status: "completed",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    achievements: [
      "Led 2 frontend development workshops",
      "Contributed to open-source projects",
      "Mentored 10+ junior members",
    ],
    icon: Users,
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20">
              <Briefcase className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-3xl font-bold text-foreground font-serif">Professional Experience</h2>
            </div>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              My journey through various internships and technical roles in software development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <Card
                  key={index}
                  className="group p-8 bg-gradient-to-br from-card/80 to-background/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] relative overflow-hidden backdrop-blur-sm rounded-2xl"
                >
                  <div
                    className={`absolute inset-0 ${exp.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {exp.status === "current" && (
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center space-x-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-500 font-medium">Current Position</span>
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-xl ${exp.bgColor} group-hover:scale-110 transition-transform duration-300 border border-primary/20`}
                          >
                            <IconComponent className={`w-6 h-6 ${exp.color}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors font-serif">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium text-lg">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col lg:items-end gap-3">
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors bg-background/50 px-3 py-2 rounded-full">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors bg-background/50 px-3 py-2 rounded-full">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors text-lg">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Target className={`w-4 h-4 ${exp.color}`} />
                        <h4 className="font-semibold text-foreground">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2 ml-6">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-2 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs hover:bg-primary/10 transition-colors px-3 py-1 bg-background/50 border border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="text-center pt-8">
            <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-3 rounded-full border border-primary/10">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground font-medium">
                Continuously growing and learning in software development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
