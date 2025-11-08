import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Award, Palette } from "lucide-react"

export default function ArtsPage() {
  const programs = [
    {
      id: 1,
      name: "Visual Arts",
      duration: "3-6 months",
      capacity: "8-12 artists",
      focus: ["Painting", "Sculpture", "Digital Art"],
      description:
        "Immerse yourself in our visual arts residency with access to world-class studios and mentorship from renowned artists.",
      icon: Palette,
    },
    {
      id: 2,
      name: "Literary Arts",
      duration: "2-4 months",
      capacity: "6-8 writers",
      focus: ["Poetry", "Fiction", "Creative Non-Fiction"],
      description: "A sanctuary for writers seeking inspiration in our library and quiet creative spaces.",
      icon: Award,
    },
    {
      id: 3,
      name: "Performing Arts",
      duration: "4-8 weeks",
      capacity: "12-15 performers",
      focus: ["Theater", "Dance", "Music"],
      description: "Access our performance halls, rehearsal spaces, and collaborate with artists across disciplines.",
      icon: Users,
    },
    {
      id: 4,
      name: "Digital Arts",
      duration: "6-12 weeks",
      capacity: "10-12 creators",
      focus: ["Film", "Animation", "Interactive Media"],
      description: "State-of-the-art digital studios and equipment for cutting-edge artistic creation.",
      icon: Calendar,
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="Arts Residency"
          subtitle="Collaborate, Create, and Transform Your Art"
          backgroundImage="/art-studio-creative.jpg"
        />

        {/* Programs */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Residency Programs</h2>
              <p className="text-foreground/70">Choose the program that fits your artistic vision</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <Card key={program.id} className="p-8 hover:shadow-gold transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-12 h-12 text-primary" />
                      <h3 className="text-2xl font-serif font-bold">{program.name}</h3>
                    </div>

                    <p className="text-foreground/70 mb-6">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded">
                        <p className="text-sm text-foreground/60">Duration</p>
                        <p className="font-semibold text-primary">{program.duration}</p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded">
                        <p className="text-sm text-foreground/60">Capacity</p>
                        <p className="font-semibold text-accent">{program.capacity}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-foreground/60 mb-2">Focus Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {program.focus.map((focus) => (
                          <span key={focus} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">Apply Now</Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why Join Tafaria Arts Residency</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Collaborative Environment", desc: "Network with 50+ artists from around the world" },
                { title: "World-Class Facilities", desc: "Access studios, galleries, and performance spaces" },
                { title: "Mentorship", desc: "Learn from renowned artists and curators" },
                { title: "Exhibition Opportunities", desc: "Showcase your work in our galleries and exhibitions" },
                { title: "Luxury Accommodation", desc: "Stay in our castle and garden villas" },
                { title: "Creative Freedom", desc: "Full support for your artistic vision" },
              ].map((benefit, i) => (
                <Card key={i} className="p-6 text-center">
                  <h3 className="text-lg font-serif font-bold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent-foreground">Begin Your Artistic Journey</h2>
            <p className="text-lg text-accent-foreground/80 mb-8">
              Apply for a residency program and transform your creative practice
            </p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Apply for Residency
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
