"use client"
import { Lightbulb, Users, Award, Rocket, Globe } from "lucide-react"

interface Program {
  id: number
  title: string
  description: string
  duration: string
  target: string
  outcomes: string[]
  color: string
}

const programs: Program[] = [
  {
    id: 1,
    title: "Leadership & Entrepreneurship",
    description:
      "Develop entrepreneurial mindset and leadership skills through immersive workshops and mentorship from industry leaders.",
    duration: "Variable (weekend to 2-week modules)",
    target: "Young professionals & entrepreneurs",
    outcomes: ["Business plan development", "Leadership skills", "Networking opportunities", "Investment insights"],
    color: "bg-accent/10 border-accent/50 text-accent",
  },
  {
    id: 2,
    title: "Arts & Culture Education",
    description:
      "Comprehensive education in various art forms, cultural heritage preservation, and creative expression methodologies.",
    duration: "1-4 weeks",
    target: "Students & educators",
    outcomes: ["Art theory", "Practical techniques", "Cultural knowledge", "Teaching methods"],
    color: "bg-primary/10 border-primary/50 text-primary",
  },
  {
    id: 3,
    title: "Environmental & Sustainability",
    description:
      "Learn sustainable practices and environmental stewardship in our pristine natural setting and heritage estate.",
    duration: "1-3 weeks",
    target: "Environmental advocates",
    outcomes: ["Conservation practices", "Sustainability", "Environmental policy", "Advocacy skills"],
    color: "bg-green-900/10 border-green-700/50 text-green-400",
  },
  {
    id: 4,
    title: "Digital & Technology Skills",
    description:
      "Master digital tools, coding, design, and technology innovation with expert instructors and hands-on projects.",
    duration: "Weekend to 4-week programs",
    target: "Tech enthusiasts & students",
    outcomes: ["Web development", "Digital design", "Data analysis", "Tech entrepreneurship"],
    color: "bg-blue-900/10 border-blue-700/50 text-blue-400",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Learning Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Education & GoDream Initiative
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empower yourself through transformative education programs designed to unlock potential and drive meaningful
            change.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`rounded-lg p-8 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${program.color}`}
            >
              {/* Title */}
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{program.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

              {/* Duration & Target */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block mb-1">Duration</span>
                  <span className="text-foreground font-medium">{program.duration}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block mb-1">Target Audience</span>
                  <span className="text-foreground font-medium">{program.target}</span>
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-2">
                <span className="text-xs text-muted-foreground font-semibold block">Key Outcomes</span>
                <div className="flex flex-wrap gap-2">
                  {program.outcomes.map((outcome, idx) => (
                    <span key={idx} className="text-xs bg-foreground/10 text-foreground px-3 py-1 rounded-full">
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GoDream Initiative Spotlight */}
        <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg p-12 border border-border mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">GoDream Initiative</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our flagship GoDream Initiative empowers young people in Kenya to unlock their potential through
                mentorship, skills training, and access to opportunities. We believe every dreamer deserves the tools
                and support to achieve their aspirations.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Mentorship from industry leaders",
                  "Skills development workshops",
                  "Networking & collaboration events",
                  "Access to resources & opportunities",
                  "Ongoing support & guidance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Rocket size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Join GoDream
              </button>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Youth Empowered" },
                { number: "50+", label: "Mentors & Leaders" },
                { number: "100+", label: "Programs & Events" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-background rounded-lg p-6 border border-border text-center">
                  <div className="text-3xl font-serif font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-12 text-center">
            How Education Programs Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                icon: Lightbulb,
                title: "Discover",
                desc: "Explore programs aligned with your goals",
              },
              {
                step: 2,
                icon: Users,
                title: "Learn",
                desc: "Engage with expert instructors & peers",
              },
              {
                step: 3,
                icon: Award,
                title: "Excel",
                desc: "Apply knowledge to real-world projects",
              },
              {
                step: 4,
                icon: Globe,
                title: "Connect",
                desc: "Join a global network of alumni",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative">
                  {/* Step Connector */}
                  {item.step < 4 && (
                    <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-primary/30" />
                  )}

                  {/* Step Card */}
                  <div className="bg-card rounded-lg p-6 border border-border text-center">
                    <div className="inline-block p-3 bg-primary/20 rounded-lg mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
