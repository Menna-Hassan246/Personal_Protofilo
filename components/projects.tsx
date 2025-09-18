import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder, ShoppingCart, Gamepad2, Dumbbell, BookOpen, Sparkles } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Application",
    description:
      "Full-featured e-commerce platform facilitating online shopping with product browsing, secure user authentication, order management, and payment processing. Ensures a smooth and scalable shopping experience for users.",
    technologies: [".NET Core", "MVC", "SQL Server", "C#", "Bootstrap"],
    category: "Full Stack Web Application",
    icon: ShoppingCart,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    image: "/images/ecommerce-project.jpg",
  },
  {
    title: "Game Library System",
    description:
      "Comprehensive system allowing users to browse, search, and categorize games. Features include adding, updating, or deleting entries, user authentication, game tracking, and a responsive user-friendly interface.",
    technologies: ["Laravel", "MariaDB", "Bootstrap", "Tailwind CSS"],
    category: "Web Application",
    icon: Gamepad2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    image: "/images/game-management.jpg",
  },
  {
    title: "Gym Management System",
    description:
      "Complete gym operations management system including member registration, subscription management, and class scheduling. Implemented attendance tracking, workout plans, and progress monitoring features.",
    technologies: ["Java", "MySQL"],
    category: "Desktop Application",
    icon: Dumbbell,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    image: "/gym-management-system-interface.jpg",
  },
  {
    title: "Library Loan System",
    description:
      "Efficient library operations management system handling book borrowing, returns, and search functionality. Integrated user authentication, loan history tracking, and overdue notifications.",
    technologies: ["Python", "SQLite"],
    category: "Desktop Application",
    icon: BookOpen,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    image: "/images/library-project.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Folder className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
            </div>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work across different technologies and domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={index}
                  className="group p-0 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`p-2 rounded-lg ${project.bgColor} backdrop-blur-sm`}>
                        <IconComponent className={`w-5 h-5 ${project.color}`} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground text-balance group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs text-primary font-medium uppercase tracking-wide">{project.category}</p>
                        </div>
                        <Sparkles className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="ghost" className="text-xs">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="ghost" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
            <Button asChild className="hover:scale-105 transition-transform">
              <a
                href="https://github.com/Menna-Hassan246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View All Projects</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
