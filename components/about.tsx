import { Heart, Code, Coffee, Target, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <div className="title-circle">About Me</div>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <div className="text-bubble">
              <h3 className="text-2xl font-bold text-white mb-4 font-serif">My Story</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hi, I'm Menna Hassan, an aspiring .NET backend developer passionate about building robust web
                    applications. My journey in software development began during my Computer Science studies, where I
                    discovered my love for creating efficient, scalable backend solutions.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm currently learning C#, ASP.NET Core, and database technologies while working on projects to
                    strengthen my skills. I also enjoy problem-solving and am eager to apply my growing knowledge in
                    real-world development opportunities.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My focus areas include API development, database design, and software architecture fundamentals. I'm
                    always excited to learn new technologies and collaborate on meaningful projects that make a
                    difference.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Coffee className="w-5 h-5 text-primary" />
                    <span className="text-white font-medium">Problem Solver</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-white font-medium">Team Player</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-circles">
            <div className="stat-circle-small">
              <div className="stat-inner-small">
                <div className="stat-number-small">4+</div>
              </div>
              <div className="stat-label-outside">Projects</div>
              <svg className="stat-progress-small" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stat-bg"></circle>
                <circle cx="50" cy="50" r="40" className="stat-fill" data-progress="85"></circle>
              </svg>
            </div>
            <div className="stat-circle-small">
              <div className="stat-inner-small">
                <div className="stat-number-small">1+</div>
              </div>
              <div className="stat-label-outside">Years</div>
              <svg className="stat-progress-small" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stat-bg"></circle>
                <circle cx="50" cy="50" r="40" className="stat-fill" data-progress="75"></circle>
              </svg>
            </div>
            <div className="stat-circle-small">
              <div className="stat-inner-small">
                <div className="stat-number-small">100%</div>
              </div>
              <div className="stat-label-outside">Passion</div>
              <svg className="stat-progress-small" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stat-bg"></circle>
                <circle cx="50" cy="50" r="40" className="stat-fill" data-progress="100"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
