import { GraduationCap, BookOpen, Award, Calendar, MapPin, Star } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="about">
      <div className="container">
        <h2 className="section-title">
          <div className="title-circle">Education</div>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <div className="text-bubble">
              <h3 className="text-2xl font-bold text-white mb-4 font-serif">Academic Journey</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Bachelor's in Computer Science</h4>
                    <div className="flex items-center space-x-4 text-primary mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Benha University</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">2022 - 2026</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Currently pursuing my Bachelor's degree with a strong academic record (GPA: 3.8). My coursework
                      has provided me with a solid foundation in programming fundamentals, data structures, algorithms,
                      and software engineering principles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Coursework</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-sm">Data Structures & Algorithms</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-sm">Database Systems</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-sm">Software Engineering</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-sm">Web Development</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 mt-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold text-white">Academic Achievements</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Through my studies, I've gained hands-on experience with various programming languages and
                    technologies, while developing critical thinking and problem-solving skills essential for software
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-circles">
            <div className="stat-circle-small">
              <div className="stat-inner-small">
                <div className="stat-number-small">3.8</div>
              </div>
              <div className="stat-label-outside">GPA</div>
              <svg className="stat-progress-small" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stat-bg"></circle>
                <circle cx="50" cy="50" r="40" className="stat-fill" data-progress="95"></circle>
              </svg>
            </div>
            <div className="stat-circle-small">
              <div className="stat-inner-small">
                <div className="stat-number-small">2026</div>
              </div>
              <div className="stat-label-outside">Graduate</div>
              <svg className="stat-progress-small" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stat-bg"></circle>
                <circle cx="50" cy="50" r="40" className="stat-fill" data-progress="75"></circle>
              </svg>
            </div>
            <div className="stat-circle-small">
              <div className="stat-inner-small">
                <div className="stat-number-small">CS</div>
              </div>
              <div className="stat-label-outside">Major</div>
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
