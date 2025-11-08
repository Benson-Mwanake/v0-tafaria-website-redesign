"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Zap, Target, Users, Star, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function EducationPage() {
  const [selectedProgram, setSelectedProgram] = useState(0)
  const [activeTab, setActiveTab] = useState("about")

  const programs = [
    {
      id: 1,
      name: "Masterclasses",
      duration: "2-5 days",
      level: "All Levels",
      price: "$299-499",
      description: "Intensive workshops led by industry experts covering specific skills and techniques",
      icon: Zap,
      details: ["Expert-led instruction", "Hands-on practice", "Certificate of completion", "Networking with peers"],
    },
    {
      id: 2,
      name: "Certificate Programs",
      duration: "8-12 weeks",
      level: "Intermediate",
      price: "$1,999",
      description: "Comprehensive training in arts, design, and cultural entrepreneurship",
      icon: Target,
      details: [
        "Professional curriculum",
        "Internship opportunities",
        "Industry portfolio review",
        "Job placement support",
      ],
    },
    {
      id: 3,
      name: "Youth Workshops",
      duration: "3-6 weeks",
      level: "Ages 12-18",
      price: "$299-599",
      description: "Nurturing young talent through hands-on learning and mentorship",
      icon: Users,
      details: ["Age-appropriate curriculum", "Mentorship program", "Scholarship opportunities", "Family involvement"],
    },
    {
      id: 4,
      name: "Semester Programs",
      duration: "16 weeks",
      level: "Advanced",
      price: "$4,999",
      description: "In-depth exploration of multiple disciplines with professional development",
      icon: BookOpen,
      details: ["Comprehensive training", "Studio access 24/7", "Professional exhibitions", "Career guidance"],
    },
  ]

  const curriculum = [
    {
      week: "Week 1-2",
      title: "Foundation & Discovery",
      topics: ["Personal leadership assessment", "Creative thinking workshops", "Career exploration"],
    },
    {
      week: "Week 3-4",
      title: "Artistic Development",
      topics: ["Craft mastery", "Artistic expression", "Portfolio building"],
    },
    {
      week: "Week 5-6",
      title: "Entrepreneurship",
      topics: ["Business fundamentals", "Marketing your art", "Funding strategies"],
    },
    {
      week: "Week 7-8",
      title: "Leadership & Community",
      topics: ["Team leadership", "Social impact projects", "Community engagement"],
    },
  ]

  const testimonials = [
    {
      name: "Amara Okafor",
      location: "Lagos, Nigeria",
      program: "Semester Program",
      quote: "Tafaria transformed my artistic vision into a sustainable career. The mentorship was life-changing.",
      rating: 5,
      image: "/placeholder.svg?key=test1",
    },
    {
      name: "David Kipchoge",
      location: "Nairobi, Kenya",
      program: "Certificate Program",
      quote: "The GoDream Initiative gave me opportunities I never thought possible. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?key=test2",
    },
    {
      name: "Zara Hassan",
      location: "Dar es Salaam, Tanzania",
      program: "Masterclass",
      quote: "Intensive and inspiring. The instructors are world-class and truly invested in student success.",
      rating: 5,
      image: "/placeholder.svg?key=test3",
    },
  ]

  const currentProgram = programs[selectedProgram]

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="Education & Learning"
          subtitle="Unlock Your Creative Potential with the GoDream Initiative"
          backgroundImage="/placeholder.svg?key=educ1"
        />

        {/* Programs Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Educational Programs</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                From intensive masterclasses to semester-long programs designed to transform your creative practice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {programs.map((program, idx) => {
                const Icon = program.icon
                return (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(idx)}
                    className={`text-left p-6 rounded-lg border-2 transition-all ${
                      selectedProgram === idx ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-serif font-bold mb-2">{program.name}</h3>
                    <p className="text-sm text-foreground/70 mb-3">{program.description}</p>
                    <div className="space-y-1 text-xs text-foreground/60">
                      <p>Duration: {program.duration}</p>
                      <p className="text-primary font-semibold">{program.price}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Program Details */}
            <Card className="p-8 border-primary/50 bg-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4">{currentProgram.name}</h3>
                  <p className="text-foreground/70 mb-6">{currentProgram.description}</p>
                  <div className="space-y-3 mb-8">
                    <div>
                      <p className="text-sm text-foreground/60">Duration</p>
                      <p className="font-semibold">{currentProgram.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Level</p>
                      <p className="font-semibold">{currentProgram.level}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Investment</p>
                      <p className="font-semibold text-primary text-lg">{currentProgram.price}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">What's Included</h4>
                  <div className="space-y-3">
                    {currentProgram.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-8 bg-primary hover:bg-primary/90 gap-2">
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* GoDream Initiative - Interactive */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Flagship Program</span>
              <h2 className="text-4xl font-serif font-bold mt-2 mb-4">GoDream Initiative</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                A comprehensive student leadership and artistic development program providing scholarships, mentorship,
                and world-class facilities
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card className="p-8 border-border/50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-5xl font-serif font-bold text-primary mb-2">500+</p>
                      <p className="text-foreground/70">Students Served</p>
                    </div>
                    <div>
                      <p className="text-5xl font-serif font-bold text-primary mb-2">$2.5M</p>
                      <p className="text-foreground/70">Scholarships Awarded</p>
                    </div>
                    <div>
                      <p className="text-5xl font-serif font-bold text-primary mb-2">95%</p>
                      <p className="text-foreground/70">Career Placement Rate</p>
                    </div>
                  </div>
                </Card>
                <p className="text-foreground/80 leading-relaxed">
                  The GoDream Initiative is our commitment to nurturing the next generation of African artists,
                  entrepreneurs, and leaders. We provide comprehensive support including scholarships, mentorship from
                  industry leaders, access to world-class facilities, and career development guidance for talented young
                  people from underserved communities.
                </p>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                {curriculum.map((item, idx) => (
                  <Card key={idx} className="p-6 border-border/50 hover:border-primary/50 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div>
                        <p className="text-primary font-semibold">{item.week}</p>
                      </div>
                      <div className="md:col-span-3">
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <ul className="space-y-1">
                          {item.topics.map((topic, t) => (
                            <li key={t} className="text-sm text-foreground/70 flex gap-2">
                              <span className="text-primary">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="leadership" className="space-y-6">
                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-serif font-bold mb-4">Leadership Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Mentorship", desc: "One-on-one guidance from industry professionals" },
                      { title: "Workshops", desc: "Leadership, communication, and business skills" },
                      { title: "Projects", desc: "Real-world projects with community impact" },
                      { title: "Network", desc: "Connection to global creative community" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold mb-1">{item.title}</p>
                          <p className="text-sm text-foreground/70">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="impact" className="space-y-6">
                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-serif font-bold mb-6">Community Impact</h3>
                  <div className="space-y-4">
                    {[
                      "200+ GoDream alumni now working as professional artists and entrepreneurs",
                      "50+ community arts centers established by our graduates",
                      "1000+ young people indirectly reached through alumni projects",
                      "30+ international exhibitions featuring our students' work",
                    ].map((impact, idx) => (
                      <div key={idx} className="flex gap-3">
                        <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground/80">{impact}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Video/Photo Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="h-64 rounded-lg bg-cover bg-center shadow-subtle"
                style={{ backgroundImage: "url(/placeholder.svg?key=godream1)" }}
              />
              <div
                className="h-64 rounded-lg bg-cover bg-center shadow-subtle"
                style={{ backgroundImage: "url(/placeholder.svg?key=godream2)" }}
              />
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Student Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border/50 hover:shadow-gold transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">
                        {testimonial.program} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-16 text-center">Your Learning Journey</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Explore",
                  desc: "Discover programs that match your interests and goals",
                  icon: "🔍",
                },
                {
                  step: "02",
                  title: "Apply",
                  desc: "Submit your application with portfolio and personal statement",
                  icon: "📝",
                },
                {
                  step: "03",
                  title: "Learn",
                  desc: "Immerse yourself in world-class instruction and mentorship",
                  icon: "📚",
                },
                {
                  step: "04",
                  title: "Grow",
                  desc: "Launch your career with support and network connections",
                  icon: "🚀",
                },
              ].map((stage, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-serif font-bold text-primary/30 mb-4">{stage.step}</div>
                  <h3 className="text-xl font-serif font-bold mb-2">{stage.title}</h3>
                  <p className="text-foreground/70 text-sm">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent-foreground">
              Ready to Transform Your Future?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8">
              Join thousands of students who have discovered their creative potential through Tafaria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                View Programs
              </Button>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Book a Visit
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
