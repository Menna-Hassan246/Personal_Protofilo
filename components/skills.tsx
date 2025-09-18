import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Server, Award, Zap, Globe, Terminal, Layers, Shield } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 82 },
      { name: "Bootstrap", level: 85 },
    ],
    color: "text-blue-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "C#", level: 90 },
      { name: ".NET", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Laravel", level: 75 },
    ],
    color: "text-green-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Databases & DBMS",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
    ],
    color: "text-purple-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Other Skills",
    icon: Terminal,
    skills: [
      { name: "Git", level: 85 },
      { name: "Debugging", level: 90 },
      { name: "Clean Code", level: 88 },
      { name: "Agile", level: 80 },
    ],
    color: "text-orange-500",
    bgGradient: "from-orange-500/20 to-yellow-500/20",
  },
]

const certificates = [
  {
    title: ".NET Full Stack Web Development",
    issuer: "Information Technology Institute (ITI)",
    description:
      "Comprehensive training in .NET Core, MVC architecture, C#, REST APIs, SQL Server, and enterprise-level backend services development.",
    icon: Shield,
    color: "text-blue-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    date: "2024",
    skills: ["C#", ".NET Core", "SQL Server", "REST APIs"],
  },
  {
    title: "Front-End Web Development",
    issuer: "Mahara Tech by Ministry of Communications",
    description:
      "Intensive program covering modern HTML5, CSS3, JavaScript ES6+, responsive design principles, and user experience optimization.",
    icon: Code,
    color: "text-green-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    date: "2023",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "ECPC Participation Certificate",
    issuer: "Egyptian Collegiate Programming Contest",
    description:
      "Participated in Egypt's premier competitive programming contest, demonstrating advanced problem-solving skills and algorithmic thinking.",
    icon: Award,
    color: "text-yellow-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    date: "2023",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
  },
]

export function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20">
              <Zap className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-3xl font-bold text-foreground font-serif">Skills & Certificates</h2>
            </div>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              A comprehensive overview of my technical expertise and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground font-serif">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {skillCategories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <Card
                      key={index}
                      className={`p-6 bg-gradient-to-br ${category.bgGradient} border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group backdrop-blur-sm rounded-2xl`}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-br from-background/80 to-card/80 rounded-full border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className={`w-6 h-6 ${category.color}`} />
                          </div>
                          <h4 className="font-semibold text-foreground text-lg font-serif">{category.title}</h4>
                        </div>
                        <div className="space-y-4">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              </div>
                              <div className="relative">
                                <Progress value={skill.level} className="h-3 bg-background/50" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-50"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground font-serif">Professional Certificates</h3>
              </div>
              <div className="space-y-6">
                {certificates.map((cert, index) => {
                  const IconComponent = cert.icon
                  return (
                    <Card
                      key={index}
                      className={`p-6 bg-gradient-to-br ${cert.bgGradient} border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group backdrop-blur-sm rounded-2xl`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-to-br from-background/80 to-card/80 rounded-full border border-accent/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <IconComponent className={`w-5 h-5 ${cert.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-semibold text-foreground text-balance font-serif leading-tight">
                                {cert.title}
                              </h4>
                              <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                                {cert.date}
                              </span>
                            </div>
                            <div className="mt-2 inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                              <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pl-16">{cert.description}</p>
                        <div className="flex flex-wrap gap-2 pl-16">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-2 py-1 rounded-full border border-primary/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
