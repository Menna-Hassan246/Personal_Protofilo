import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
              want to connect, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">memomahmoud626@gmail.com</p>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                    <a href="mailto:memomahmoud626@gmail.com">Send Email</a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground">+201028248585</p>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                    <a href="tel:+201028248585">Call Now</a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">Tanta, ElGharbia, Egypt</p>
                  <p className="text-xs text-muted-foreground">Available for remote work</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/Menna-Hassan246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://linkedin.com/in/menna-hassan-320643265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2025 Menna Mahmoud. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
